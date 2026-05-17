#!/usr/bin/env node
/* Build a styled .docx version of the book.
 *
 * Why a separate script and not pandoc:
 *   Pandoc's DOCX writer doesn't render coloured callout boxes, gradients,
 *   syntax-highlighted code, or chapter banners. The result is plain text
 *   with default heading styles — nothing like the website.
 *
 * Pipeline:
 *   1. Read the rendered book content (we re-use the markdown -> HTML build).
 *   2. Walk the HTML and rewrite the styled bits into things LibreOffice
 *      reliably preserves when converting HTML -> DOCX:
 *        * callouts          -> <table> with bgcolor cells
 *        * code blocks       -> dark <table> cell with inline-coloured spans
 *        * chapter banners   -> purple <table> with white text
 *        * h2/h3             -> inline colours and left bars
 *        * inline code       -> coloured spans
 *        * highlight.js classes -> inline colours
 *   3. Wrap in a self-contained HTML doc (no external CSS, no Google fonts).
 *   4. Run LibreOffice headless to produce dist/PyTB-book.docx.
 *
 * The result looks much closer to the website / PDF when opened in Word
 * or Google Docs. It still can't do gradients, shadows, or doodles, so
 * the cover is a simplified solid-colour title page.
 */

const fs   = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const hljs = require("highlight.js");

const MarkdownIt = require("markdown-it");
const mdAnchor   = require("markdown-it-anchor");

const ROOT   = path.resolve(__dirname, "..");
const DIST   = path.join(ROOT, "dist");

// ----------------------------------------------------------------
// Colour palette — same hex values used in style.css
// ----------------------------------------------------------------
const C = {
  purple:      "#7C3AED",
  purpleDeep:  "#5B21B6",
  purpleSoft:  "#EDE9FE",
  pink:        "#EC4899",
  pinkSoft:    "#FCE7F3",
  orange:      "#F97316",
  orangeSoft:  "#FFEDD5",
  orangeDeep:  "#C2410C",
  green:       "#10B981",
  greenSoft:   "#D1FAE5",
  greenDeep:   "#047857",
  yellow:      "#F59E0B",
  yellowSoft:  "#FEF3C7",
  yellowDeep:  "#B45309",
  cream:       "#FFF8EC",
  ink:         "#1F2937",
  inkSoft:     "#4B5563",
  codeBg:      "#1E1B2E",
  codeFg:      "#E7DFFA",
};

const HLJS_COLORS = {
  "hljs-comment":            "#8B82A8",
  "hljs-quote":              "#8B82A8",
  "hljs-keyword":            "#F9A8D4",
  "hljs-selector-tag":       "#F9A8D4",
  "hljs-built_in":           "#F9A8D4",
  "hljs-string":             "#FCD34D",
  "hljs-doctag":             "#FCD34D",
  "hljs-number":             "#FB923C",
  "hljs-literal":            "#FB923C",
  "hljs-title":              "#A78BFA",
  "hljs-section":            "#A78BFA",
  "hljs-function":           "#A78BFA",
  "hljs-variable":           "#6EE7B7",
  "hljs-template-variable":  "#6EE7B7",
  "hljs-attr":               "#6EE7B7",
  "hljs-params":             "#E7DFFA",
  "hljs-class":              "#67E8F9",
  "hljs-type":               "#67E8F9",
  "hljs-symbol":             "#F472B6",
  "hljs-bullet":             "#F472B6",
  "hljs-meta":               "#94A3B8",
};

const CALLOUT_COLORS = {
  silly:    { bg: C.pinkSoft,   border: C.pink,    label: C.pink      },
  watchout: { bg: C.orangeSoft, border: C.orange,  label: C.orangeDeep },
  tip:      { bg: C.greenSoft,  border: C.green,   label: C.greenDeep  },
  rule:     { bg: C.yellowSoft, border: C.yellow,  label: C.yellowDeep },
  default:  { bg: C.purpleSoft, border: C.purple,  label: C.purpleDeep },
};

// ----------------------------------------------------------------
// markdown-it — same config as build.js (so the HTML structure matches)
// ----------------------------------------------------------------
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try { return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value; } catch (_) {}
    }
    return escapeHtml(str);
  },
});

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
md.use(mdAnchor, { permalink: false, slugify });

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ----------------------------------------------------------------
// Render markdown to HTML and post-process (mirrors build.js)
// ----------------------------------------------------------------
const CALLOUT_RULES = [
  { match: /^silly\s+hook/i,                type: "silly",    label: "Silly Hook"  },
  { match: /^watch\s*out/i,                 type: "watchout", label: "Watch Out"   },
  { match: /^promotion\s+rule/i,            type: "rule",     label: "Promotion Rule" },
  { match: /^remember/i,                    type: "rule",     label: "Remember"    },
  { match: /^tip/i,                         type: "tip",      label: "Tip"         },
  { match: /^note/i,                        type: "tip",      label: "Note"        },
  { match: /^single\s+characters\s+are/i,   type: "tip",      label: "Did You Know" },
];

function transformCallouts(html) {
  return html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (_full, inner) => {
    const m = inner.match(/^\s*<p>\s*<strong>([^<]+?)\.?\s*<\/strong>\s*([\s\S]*)$/);
    if (!m) return `<blockquote>${inner}</blockquote>`;

    const rawTitle = m[1].trim();
    const rule = CALLOUT_RULES.find(r => r.match.test(rawTitle));
    const type  = rule ? rule.type  : "default";
    const label = rule ? rule.label : rawTitle;
    const bodyInner = `<p>${m[2]}`;

    return `<div class="callout callout-${type}"><div class="callout-head"><span class="callout-label">${escapeHtml(label)}</span></div><div class="callout-body">${bodyInner}</div></div>`;
  });
}

function parseChapterMd(text) {
  const lines = text.split(/\r?\n/);
  let title = null, tagline = null, bodyStart = 0;
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (title === null && /^#\s+/.test(ln)) { title = ln.replace(/^#\s+/, "").trim(); bodyStart = i + 1; continue; }
    if (title !== null && tagline === null) {
      if (/^>\s+/.test(ln)) { tagline = ln.replace(/^>\s+/, "").trim(); bodyStart = i + 1; }
      else if (ln.trim() === "") { bodyStart = i + 1; continue; }
      else break;
    }
    if (title !== null && tagline !== null) {
      if (ln.trim() === "---" || ln.trim() === "") { bodyStart = i + 1; continue; }
      break;
    }
  }
  return { title: title || "", tagline: tagline || "", body: lines.slice(bodyStart).join("\n") };
}

function renderChapter(chapterNumber, mdText) {
  const { title, tagline, body } = parseChapterMd(mdText);
  let html = md.render(body);
  html = transformCallouts(html);
  const cleanTitle = title.replace(/^chapter\s+\d+\s*[-–—:]\s*/i, "").trim();
  return { num: chapterNumber, title: cleanTitle, tagline, contentHtml: html };
}

// ----------------------------------------------------------------
// DOCX-friendly transforms — apply to the post-callout HTML
// ----------------------------------------------------------------

// Replace highlight.js class spans with inline-coloured spans.
function inlineHljsColors(html) {
  let out = html;
  for (const [cls, color] of Object.entries(HLJS_COLORS)) {
    out = out.replace(new RegExp(`<span class="${cls}">`, "g"), `<span style="color:${color};">`);
  }
  // Strip any other hljs class spans (no class style, keep neutral colour)
  out = out.replace(/<span class="hljs-[^"]*">/g, "<span>");
  return out;
}

// Wrap a pre/code in a coloured table cell.
function transformCodeBlocks(html) {
  return html.replace(/<pre><code(?:\s+class="[^"]*")?>([\s\S]*?)<\/code><\/pre>/g, (_full, code) => {
    const inlined = inlineHljsColors(code);
    return `
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 14px 0 16px 0;">
  <tr>
    <td bgcolor="${C.codeBg}" style="padding: 14px 18px; border-left: 4px solid ${C.purple};">
      <pre style="color:${C.codeFg}; font-family: 'JetBrains Mono', Consolas, 'Courier New', monospace; font-size: 10.5pt; line-height: 1.55; margin: 0; white-space: pre-wrap;">${inlined}</pre>
    </td>
  </tr>
</table>`;
  });
}

// Turn each `<div class="callout callout-TYPE">` into a coloured table.
function transformCalloutsToTables(html) {
  // Custom marker pattern from transformCallouts above.
  return html.replace(/<div class="callout callout-([a-z]+)"><div class="callout-head"><span class="callout-label">([^<]+)<\/span><\/div><div class="callout-body">([\s\S]*?)<\/div><\/div>/g,
    (_full, type, label, body) => {
      const c = CALLOUT_COLORS[type] || CALLOUT_COLORS.default;
      return `
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 18px 0;">
  <tr>
    <td bgcolor="${c.bg}" style="padding: 14px 18px 16px 18px; border-left: 5px solid ${c.border};">
      <p style="color:${c.label}; font-weight: bold; font-size: 9.5pt; letter-spacing: 1.5px; margin: 0 0 6px 0; text-transform: uppercase; font-family: 'Inter', Arial, sans-serif;">${escapeHtml(label)}</p>
      ${body.trim()}
    </td>
  </tr>
</table>`;
    });
}

// Plain blockquote -> light-purple cell
function transformBlockquotes(html) {
  return html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (_full, inner) => `
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 14px 0;">
  <tr>
    <td bgcolor="${C.purpleSoft}" style="padding: 12px 18px; border-left: 4px solid ${C.purple}; font-style: italic; color: ${C.inkSoft};">
      ${inner}
    </td>
  </tr>
</table>`);
}

// h2/h3/h4 — colour + left bar + optional bg
function styleHeadings(html) {
  html = html.replace(/<h2(\s+[^>]*)?>([\s\S]*?)<\/h2>/g, (_full, attrs, text) =>
    `<h2${attrs || ""} style="color:${C.purpleDeep}; font-family: 'Fraunces', Georgia, serif; font-size: 17pt; margin: 24pt 0 8pt 0; padding: 4pt 0 4pt 14pt; border-left: 6px solid ${C.purple};">${text}</h2>`);
  html = html.replace(/<h3(\s+[^>]*)?>([\s\S]*?)<\/h3>/g, (_full, attrs, text) =>
    `<h3${attrs || ""} style="color:${C.orange}; font-family: 'Fraunces', Georgia, serif; font-size: 13pt; margin: 18pt 0 6pt 0; padding: 4pt 0 4pt 12pt; border-left: 4px solid ${C.orange};">${text}</h3>`);
  html = html.replace(/<h4(\s+[^>]*)?>([\s\S]*?)<\/h4>/g, (_full, attrs, text) =>
    `<h4${attrs || ""} style="color:${C.greenDeep}; font-family: 'Inter', Arial, sans-serif; font-size: 10.5pt; letter-spacing: 1.5px; text-transform: uppercase; margin: 14pt 0 4pt 0;">${text}</h4>`);
  return html;
}

// Inline `<code>X</code>` → coloured span
function styleInlineCode(html) {
  return html.replace(/<code>([^<]+)<\/code>/g, (_full, txt) =>
    `<span style="background-color:${C.purpleSoft}; color:${C.purpleDeep}; font-family: 'JetBrains Mono', Consolas, monospace; padding: 0 4px;">${txt}</span>`);
}

// Tables — coloured thead
function styleTables(html) {
  // Add inline style to thead th elements
  html = html.replace(/<thead>([\s\S]*?)<\/thead>/g, (_full, inner) => {
    const newInner = inner.replace(/<th(\s+[^>]*)?>/g,
      `<th$1 style="background-color:${C.purple}; color: white; font-family: 'Inter', Arial, sans-serif; font-weight: bold; padding: 8pt 10pt; text-align: left;">`);
    return `<thead>${newInner}</thead>`;
  });
  // Light borders on body cells
  html = html.replace(/<tbody>([\s\S]*?)<\/tbody>/g, (_full, inner) => {
    const newInner = inner.replace(/<td(\s+[^>]*)?>/g,
      `<td$1 style="padding: 7pt 10pt; border-bottom: 1px solid #F3E9CD; vertical-align: top;">`);
    return `<tbody>${newInner}</tbody>`;
  });
  // Outer table itself
  html = html.replace(/<table>/g, `<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 14pt 0; border-collapse: collapse;">`);
  return html;
}

// Decorative <hr> → simple thin coloured rule
function styleHr(html) {
  return html.replace(/<hr\s*\/?>/g, `
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 18pt 0;">
  <tr>
    <td align="center">
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td bgcolor="${C.purple}" width="40" height="3" style="height: 3px;"></td>
          <td width="6"></td>
          <td bgcolor="${C.pink}" width="20" height="3" style="height: 3px;"></td>
          <td width="6"></td>
          <td bgcolor="${C.orange}" width="20" height="3" style="height: 3px;"></td>
        </tr>
      </table>
    </td>
  </tr>
</table>`);
}

// Strip header-anchor links (rendered when we didn't disable mdAnchor)
function stripAnchors(html) {
  return html.replace(/<a class="header-anchor"[^>]*>[\s\S]*?<\/a>/g, "");
}

// Style list bullets via inline (LibreOffice respects basic list styles via CSS)
// Nothing fancy needed.

// Top-level transform — apply in order
function toDocxHtml(rawHtml) {
  let h = rawHtml;
  h = stripAnchors(h);
  h = transformCodeBlocks(h);       // BEFORE callouts so callout bodies that contain code blocks still get inlined
  h = transformCalloutsToTables(h);
  h = transformBlockquotes(h);
  h = styleHr(h);
  h = styleHeadings(h);
  h = styleTables(h);
  h = styleInlineCode(h);
  return h;
}

// ----------------------------------------------------------------
// Build the DOCX-friendly HTML wrapper
// ----------------------------------------------------------------
function chapterBannerHtml(num, title, tagline) {
  return `
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 28pt 0 18pt 0;">
  <tr>
    <td bgcolor="${C.purple}" style="padding: 24pt 26pt;">
      <p style="color:${C.pinkSoft}; font-family: 'Inter', Arial, sans-serif; font-size: 9pt; letter-spacing: 3px; font-weight: bold; margin: 0 0 6pt 0;">CHAPTER ${num}</p>
      <h1 style="color: white; font-family: 'Fraunces', Georgia, serif; font-size: 28pt; margin: 4pt 0 8pt 0;">${escapeHtml(title)}</h1>
      ${tagline ? `<p style="color:${C.pinkSoft}; font-style: italic; font-size: 12pt; margin: 0;">${escapeHtml(tagline)}</p>` : ""}
    </td>
  </tr>
</table>`;
}

function coverHtml() {
  return `
<div style="page-break-after: always;">
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 0;">
  <tr>
    <td bgcolor="${C.purple}" align="center" style="padding: 120pt 30pt;">
      <p style="color:${C.pinkSoft}; font-family: 'Inter', Arial, sans-serif; font-size: 11pt; letter-spacing: 6px; font-weight: bold; margin: 0 0 18pt 0;">A PYTHON DSA WORKBOOK</p>
      <p style="color: white; font-family: 'Fraunces', Georgia, serif; font-size: 72pt; font-weight: bold; margin: 0; line-height: 1;">PyTB</p>
      <p style="color: white; font-style: italic; font-size: 14pt; margin: 30pt 0 0 0;">Thirty chapters from &quot;I know what <i>Counter</i> is&quot; to &quot;I can solve a LeetCode problem in 20 minutes.&quot;</p>
      <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin: 36pt auto 0 auto;" width="180">
        <tr>
          <td bgcolor="${C.pink}"   width="60"></td>
          <td bgcolor="${C.yellow}" width="60"></td>
          <td bgcolor="${C.green}"  width="60"></td>
        </tr>
        <tr><td height="3" colspan="3" style="line-height: 0; font-size: 1px;"></td></tr>
      </table>
      <p style="color:${C.pinkSoft}; font-family: 'Inter', Arial, sans-serif; font-size: 10pt; margin: 18pt 0 0 0;">Assembled ${new Date().toISOString().slice(0, 10)}</p>
    </td>
  </tr>
</table>
</div>`;
}

function tocHtml(chapters, hasGlossary) {
  const rows = chapters.map(ch => `
  <tr>
    <td width="60" style="padding: 6pt 8pt;"><span style="background-color:${C.purpleSoft}; color:${C.purpleDeep}; font-family: 'Fraunces', Georgia, serif; font-weight: bold; font-size: 13pt; padding: 2pt 10pt; border-radius: 4pt;">${String(ch.num).padStart(2, "0")}</span></td>
    <td style="padding: 6pt 8pt; font-size: 12pt;">${escapeHtml(ch.title)}</td>
  </tr>`).join("");

  const gloss = hasGlossary ? `
  <tr>
    <td width="60" style="padding: 6pt 8pt;"><span style="background-color:${C.yellowSoft}; color:${C.yellowDeep}; font-family: 'Fraunces', Georgia, serif; font-weight: bold; font-size: 13pt; padding: 2pt 10pt; border-radius: 4pt;">A</span></td>
    <td style="padding: 6pt 8pt; font-size: 12pt;">Glossary — every term in plain English</td>
  </tr>` : "";

  return `
<div style="page-break-after: always;">
<h1 style="color:${C.purpleDeep}; font-family: 'Fraunces', Georgia, serif; font-size: 36pt; text-align: center; margin: 18pt 0 28pt 0;">Contents</h1>
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 0 auto;">
  ${rows}
</table>
${gloss ? `
<h2 style="color:${C.purpleDeep}; font-family: 'Fraunces', Georgia, serif; font-size: 18pt; text-align: center; margin: 32pt 0 12pt 0; padding: 0; border: none;">Appendix</h2>
<table border="0" cellspacing="0" cellpadding="0" width="100%">${gloss}</table>` : ""}
</div>`;
}

function wrapDocument(bodyHtml) {
  // Self-contained HTML with body styles. LibreOffice respects most of this.
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>PyTB — Python DSA Workbook</title>
  <style type="text/css">
    body {
      font-family: 'Source Serif 4', Georgia, serif;
      font-size: 11pt;
      line-height: 1.55;
      color: ${C.ink};
      max-width: 720px;
      margin: 0 auto;
      padding: 36pt 30pt;
    }
    p { margin: 6pt 0; }
    ul, ol { margin: 6pt 0; padding-left: 24pt; }
    li { margin: 3pt 0; }
    a { color: ${C.purpleDeep}; text-decoration: underline; }
    strong { color: ${C.purpleDeep}; }
    table { border-collapse: collapse; }
  </style>
</head>
<body>
${bodyHtml}
</body>
</html>`;
}

// ----------------------------------------------------------------
// Main
// ----------------------------------------------------------------
function findChapterFiles() {
  return fs.readdirSync(ROOT)
    .filter(f => /^\d\d-.*\.md$/.test(f))
    .map(f => ({ n: parseInt(f.slice(0, 2), 10), file: f }))
    .filter(c => c.n > 0)               // 00-glossary.md is the appendix, not a chapter
    .sort((a, b) => a.n - b.n);
}

function main() {
  if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });

  const chapterFiles = findChapterFiles();
  const chapters = chapterFiles.map(({ n, file }) => {
    const text = fs.readFileSync(path.join(ROOT, file), "utf8");
    return renderChapter(n, text);
  });

  const glossaryPath = path.join(ROOT, "00-glossary.md");
  const hasGloss = fs.existsSync(glossaryPath);

  let body = "";

  // Cover
  body += coverHtml();

  // TOC
  body += tocHtml(chapters, hasGloss);

  // Each chapter
  for (const ch of chapters) {
    const inlinedContent = toDocxHtml(ch.contentHtml);
    body += `\n<div style="page-break-before: always;">${chapterBannerHtml(ch.num, ch.title, ch.tagline)}${inlinedContent}</div>\n`;
  }

  // Glossary at the back
  if (hasGloss) {
    const glossRaw = md.render(fs.readFileSync(glossaryPath, "utf8"));
    const glossWithCallouts = transformCallouts(glossRaw);
    const inlinedGloss = toDocxHtml(glossWithCallouts);
    body += `
<div style="page-break-before: always;">
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 18pt 0;">
  <tr>
    <td bgcolor="${C.yellow}" style="padding: 14pt 18pt;">
      <p style="color: white; font-family: 'Inter', Arial, sans-serif; font-size: 9pt; letter-spacing: 3px; font-weight: bold; margin: 0;">APPENDIX</p>
    </td>
  </tr>
</table>
${inlinedGloss}
</div>`;
  }

  // End colophon
  body += `
<div style="page-break-before: always;">
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin: 60pt 0;">
  <tr>
    <td align="center" style="padding: 60pt 30pt;">
      <table border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto 12pt auto;"><tr><td bgcolor="${C.purple}" width="60" height="3"></td></tr></table>
      <p style="color:${C.purpleDeep}; font-family: 'Fraunces', Georgia, serif; font-size: 16pt; font-weight: bold; margin: 0;">End of build</p>
      <p style="color:${C.inkSoft}; font-family: 'Inter', Arial, sans-serif; font-size: 10pt; margin: 6pt 0 0 0;">${chapters.length} chapter${chapters.length === 1 ? "" : "s"} ready · assembled ${new Date().toISOString().slice(0, 10)}</p>
    </td>
  </tr>
</table>
</div>`;

  const docHtml = wrapDocument(body);

  const intermediate = path.join(DIST, "book-for-docx.html");
  fs.writeFileSync(intermediate, docHtml);
  console.log(`Wrote ${intermediate}`);

  // ---- Run LibreOffice ----
  console.log("Converting to DOCX with LibreOffice...");
  const out = spawnSync("soffice", [
    "--headless",
    "--convert-to", "docx:MS Word 2007 XML",
    "--outdir", DIST,
    intermediate,
  ], { encoding: "utf8" });

  if (out.status !== 0) {
    console.error("LibreOffice conversion failed:");
    console.error(out.stderr || out.stdout);
    process.exit(1);
  }

  const produced = path.join(DIST, "book-for-docx.docx");
  const finalPath = path.join(DIST, "PyTB-book.docx");
  if (fs.existsSync(produced)) {
    if (fs.existsSync(finalPath)) fs.unlinkSync(finalPath);
    fs.renameSync(produced, finalPath);
  }

  const size = fs.statSync(finalPath).size;
  console.log(`Wrote ${finalPath} — ${(size / 1024).toFixed(0)} KB`);
}

main();
