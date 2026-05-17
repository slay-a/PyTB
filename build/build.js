#!/usr/bin/env node
/* PyTB — markdown → styled HTML builder.
 * Produces:
 *   dist/index.html        (cover + chapter cards)
 *   dist/00-glossary.html  (and per-chapter pages)
 *   dist/book.html         (single-page concatenation, for browser print-to-PDF)
 *   dist/assets/style.css
 *
 * No external runtime dependencies on the output side — CSS + inline SVG only.
 */

const fs   = require("fs");
const path = require("path");
const hljs = require("highlight.js");

const MarkdownIt   = require("markdown-it");
const mdAnchor     = require("markdown-it-anchor");

const { doodleCorner, icons } = require("./doodles.js");

// --------------------------------------------------------------------
// Paths
// --------------------------------------------------------------------
const ROOT     = path.resolve(__dirname, "..");
const DIST     = path.join(ROOT, "dist");
const ASSETS   = path.join(DIST, "assets");

// --------------------------------------------------------------------
// Source map — order, titles, phases
// --------------------------------------------------------------------
const PHASES = [
  { name: "Phase 1 — Foundations",   color: "purple", range: [1, 6]   },
  { name: "Phase 2 — Linear Patterns", color: "pink",   range: [7, 11]  },
  { name: "Phase 3 — Search and Sort", color: "orange", range: [12, 14] },
  { name: "Phase 4 — Trees",           color: "green",  range: [15, 17] },
  { name: "Phase 5 — Graphs",          color: "yellow", range: [18, 21] },
  { name: "Phase 6 — Recursion & Search", color: "purple", range: [22, 23] },
  { name: "Phase 7 — Dynamic Programming", color: "pink", range: [24, 28] },
  { name: "Phase 8 — Specialized",     color: "orange", range: [29, 30] },
];

// Hand-coded list of all 30 chapter titles (for the index even when the .md doesn't exist yet)
const CHAPTERS = [
  { n:  1, title: "Iteration and Counting" },
  { n:  2, title: "Sequences (list, tuple, string, range)" },
  { n:  3, title: "Hashing (dict, set, Counter, defaultdict)" },
  { n:  4, title: "Stacks and Queues" },
  { n:  5, title: "Standard Library Cheat Pack" },
  { n:  6, title: "Big-O and Complexity" },
  { n:  7, title: "Linked Lists" },
  { n:  8, title: "Two Pointers" },
  { n:  9, title: "Sliding Window" },
  { n: 10, title: "Prefix Sums and Difference Arrays" },
  { n: 11, title: "Intervals" },
  { n: 12, title: "Binary Search" },
  { n: 13, title: "Sorting Toolkit" },
  { n: 14, title: "Heaps and Priority Queues" },
  { n: 15, title: "Binary Trees" },
  { n: 16, title: "Binary Search Trees" },
  { n: 17, title: "Tries" },
  { n: 18, title: "Graph Basics" },
  { n: 19, title: "Topological Sort" },
  { n: 20, title: "Shortest Paths" },
  { n: 21, title: "Union-Find" },
  { n: 22, title: "Recursion Fundamentals" },
  { n: 23, title: "Backtracking" },
  { n: 24, title: "DP Fundamentals" },
  { n: 25, title: "1D DP" },
  { n: 26, title: "2D DP and Grid DP" },
  { n: 27, title: "Knapsack and Subset Sum" },
  { n: 28, title: "DP on Sequences and Strings" },
  { n: 29, title: "Bit Manipulation" },
  { n: 30, title: "Math, Greedy and Monotonic Patterns" },
];

// --------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------
function chapterFilename(n) {
  const padded = String(n).padStart(2, "0");
  // Match by leading "NN-"
  const dir = fs.readdirSync(ROOT);
  const found = dir.find(f => f.startsWith(padded + "-") && f.endsWith(".md"));
  return found || null;
}

function slugify(s) {
  return s.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function phaseFor(n) {
  return PHASES.find(p => n >= p.range[0] && n <= p.range[1]);
}

// --------------------------------------------------------------------
// markdown-it configuration
// --------------------------------------------------------------------
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
      } catch (_) {}
    }
    return escapeHtml(str);
  },
});

md.use(mdAnchor, {
  permalink: mdAnchor.permalink.linkInsideHeader({
    symbol: '<span aria-hidden="true" class="anchor-link">#</span>',
    placement: "after",
  }),
  slugify,
});

// --------------------------------------------------------------------
// Custom blockquote → callout transformation
//
// We post-process the rendered HTML rather than fight with markdown-it's
// tokenizer.  We look for the pattern:
//   <blockquote>...<strong>Title.</strong> rest...</blockquote>
// and convert to <div class="callout callout-TYPE">...</div>.
// --------------------------------------------------------------------

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
  // Match a <blockquote> ... </blockquote> non-greedy.
  const blockRe = /<blockquote>([\s\S]*?)<\/blockquote>/g;

  return html.replace(blockRe, (_full, inner) => {
    // Try to find a leading <strong>Title.</strong> right after the first <p>
    // Patterns observed in source:
    //   <p><strong>Silly hook to remember it.</strong> ...
    //   <p><strong>Watch out.</strong> ...
    const m = inner.match(/^\s*<p>\s*<strong>([^<]+?)\.?\s*<\/strong>\s*([\s\S]*)$/);

    let type = "default";
    let label = "Note";
    let bodyInner = inner;

    if (m) {
      const rawTitle = m[1].trim();
      const rule = CALLOUT_RULES.find(r => r.match.test(rawTitle));
      if (rule) {
        type  = rule.type;
        label = rule.label;
      } else {
        type  = "default";
        label = rawTitle;
      }
      // Rebuild body: drop the matched <strong>Title.</strong>, keep the rest
      // of the first paragraph plus everything after it.
      const rest = m[2];
      bodyInner = `<p>${rest}`;
    } else {
      // Plain quote, keep as-is (no title detected — fall back to <blockquote>)
      return `<blockquote>${inner}</blockquote>`;
    }

    const icon = icons[type] || icons.default;
    return `
<div class="callout callout-${type}">
  <div class="callout-head">
    <span class="callout-icon">${icon}</span>
    <span class="callout-label">${escapeHtml(label)}</span>
  </div>
  <div class="callout-body">${bodyInner}</div>
</div>`.trim();
  });
}

// Wrap consecutive tables in a scroll container on small screens
function makeTablesResponsive(html) {
  return html.replace(/<table>/g, '<div class="table-wrap"><table>')
             .replace(/<\/table>/g, '</table></div>');
}

// --------------------------------------------------------------------
// Read a chapter .md and split title + tagline + body
// --------------------------------------------------------------------
function parseChapterMd(text) {
  // Expect:  # Chapter N - Title\n\n> tagline\n\n---\n\n<rest>
  const lines = text.split(/\r?\n/);
  let title = null;
  let tagline = null;
  let bodyStart = 0;

  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (title === null && /^#\s+/.test(ln)) {
      title = ln.replace(/^#\s+/, "").trim();
      bodyStart = i + 1;
      continue;
    }
    if (title !== null && tagline === null) {
      if (/^>\s+/.test(ln)) {
        tagline = ln.replace(/^>\s+/, "").trim();
        bodyStart = i + 1;
      } else if (ln.trim() === "") {
        bodyStart = i + 1;
        continue;
      } else {
        // No tagline present — done
        break;
      }
    }
    if (title !== null && tagline !== null) {
      // Skip the trailing --- and any blank lines
      if (ln.trim() === "---" || ln.trim() === "") {
        bodyStart = i + 1;
        continue;
      }
      break;
    }
  }

  return {
    title: title || "",
    tagline: tagline || "",
    body: lines.slice(bodyStart).join("\n"),
  };
}

// --------------------------------------------------------------------
// HTML templates
// --------------------------------------------------------------------
function pageHead(title) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} — PyTB</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700;800&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>`;
}

function pageHeadRelativeTo(title, depth = 0) {
  const prefix = "".padStart(depth * 3, "../").slice(0, depth * 3);
  void prefix;
  return pageHead(title);
}

function topnav({ prev = null, next = null, indexHref = "index.html" }) {
  const prevHtml = prev
    ? `<a href="${prev.href}">&laquo; ${escapeHtml(prev.label)}</a>`
    : `<span style="opacity:0.4">&laquo; start</span>`;
  const nextHtml = next
    ? `<a href="${next.href}">${escapeHtml(next.label)} &raquo;</a>`
    : `<span style="opacity:0.4">end &raquo;</span>`;
  return `
<nav class="topnav print-hidden">
  <div>${prevHtml}</div>
  <div class="crumbs"><a href="${indexHref}">PyTB</a> <span>·</span> Workbook</div>
  <div>${nextHtml}</div>
</nav>`.trim();
}

function chapterBanner({ chapterNumber, title, tagline }) {
  // title may include "Chapter N - Real Title" — strip the leading "Chapter N -"
  let cleanTitle = title.replace(/^chapter\s+\d+\s*[-–—:]\s*/i, "").trim();
  if (!cleanTitle) cleanTitle = title;

  const numLabel = chapterNumber !== null
    ? `<div class="ch-num-circle"><span class="ch-label">Chapter</span>${chapterNumber}</div>`
    : "";

  return `
<header class="chapter-banner">
  <div class="doodle-corner tr">${doodleCorner}</div>
  <div class="doodle-corner bl">${doodleCorner}</div>
  ${numLabel}
  <h1>${escapeHtml(cleanTitle)}</h1>
  ${tagline ? `<div class="ch-tagline">${escapeHtml(tagline)}</div>` : ""}
</header>`.trim();
}

function plainPageHeader(title) {
  return `<h1>${escapeHtml(title)}</h1>`;
}

function pageFoot({ withReader = false } = {}) {
  const readerScript = withReader
    ? `<script src="assets/reader.js" defer></script>`
    : "";
  return `</div>
${readerScript}
</body>
</html>`;
}

// --------------------------------------------------------------------
// Render one chapter into HTML body
// --------------------------------------------------------------------
function renderChapter({ chapterNumber, mdText }) {
  const { title, tagline, body } = parseChapterMd(mdText);
  let html = md.render(body);
  html = transformCallouts(html);
  html = makeTablesResponsive(html);

  const banner = chapterBanner({ chapterNumber, title, tagline });
  return { titleClean: title.replace(/^chapter\s+\d+\s*[-–—:]\s*/i, "").trim(), bannerHtml: banner, contentHtml: html };
}

// --------------------------------------------------------------------
// Render the glossary (no chapter banner — just a styled title)
// --------------------------------------------------------------------
function renderPlainMd(mdText) {
  let html = md.render(mdText);
  html = transformCallouts(html);
  html = makeTablesResponsive(html);
  return html;
}

// --------------------------------------------------------------------
// Build the index page
// --------------------------------------------------------------------
function renderIndex({ chapters }) {
  const built = new Set(chapters.filter(c => c.built).map(c => c.n));

  const phaseHtml = PHASES.map(p => {
    const cards = CHAPTERS
      .filter(c => c.n >= p.range[0] && c.n <= p.range[1])
      .map(c => {
        const isBuilt = built.has(c.n);
        const href = isBuilt ? `chapter-${String(c.n).padStart(2, "0")}.html` : "#";
        const stateLabel = isBuilt ? "Ready" : "Coming soon";
        const tag = isBuilt ? "a" : "div";
        const stateClass = isBuilt ? "" : " todo";
        return `<${tag} class="chapter-card${stateClass}" data-color="${p.color}"${isBuilt ? ` href="${href}"` : ""}>
  <div class="ch-num">${String(c.n).padStart(2, "0")}</div>
  <div class="ch-title">${escapeHtml(c.title)}</div>
  <div class="ch-state">${stateLabel}</div>
</${tag}>`;
      }).join("\n");

    return `
<section class="phase-block">
  <h2>${escapeHtml(p.name)}</h2>
  <div class="chapter-cards">
    ${cards}
  </div>
</section>`;
  }).join("\n");

  return `
${pageHead("PyTB")}
<div class="page">
  <section class="index-hero">
    <div class="doodle-corner tl">${doodleCorner}</div>
    <div class="doodle-corner tr">${doodleCorner}</div>
    <div class="doodle-corner bl">${doodleCorner}</div>
    <div class="doodle-corner br">${doodleCorner}</div>
    <h1>PyTB</h1>
    <div class="subtitle">A 30-chapter Python workbook for cracking the coding interview — theory, worked examples, practice, answers, flashcards.</div>
  </section>

  <section>
    <p>Welcome. Open any chapter from the cards below. Or grab the
    <a href="book.html">single-page book</a> if you'd rather read it all in one scroll,
    or <a href="book.html" onclick="window.print();return false;">print it to PDF</a>
    from your browser. A <code>.docx</code> export can be generated by running
    <code>./build-docx.sh</code>.</p>

    <div class="callout callout-tip">
      <div class="callout-head">
        <span class="callout-icon">${icons.tip}</span>
        <span class="callout-label">How to use this</span>
      </div>
      <div class="callout-body">
        <p>Go in order. Each chapter assumes you know what came before. The first three chapters
        teach the language well enough that you can read the rest comfortably. Do every worked
        example on paper before checking the code.</p>
      </div>
    </div>
  </section>

  ${phaseHtml}

  <section style="margin-top:46px">
    <h2>Reference</h2>
    <div class="chapter-cards">
      <a class="chapter-card" data-color="yellow" href="glossary.html">
        <div class="ch-num">A</div>
        <div class="ch-title">Glossary — every term in plain English</div>
        <div class="ch-state">Ready</div>
      </a>
      <a class="chapter-card" data-color="purple" href="book.html">
        <div class="ch-num">B</div>
        <div class="ch-title">Single-page book (print to PDF here)</div>
        <div class="ch-state">Ready</div>
      </a>
    </div>
  </section>

  <p style="text-align:center;margin-top:48px;color:var(--c-ink-soft);font-size:13px;font-family:var(--font-ui)">
    Built locally · last assembled ${new Date().toISOString().slice(0,10)}
  </p>
</div>
${pageFoot()}`;
}

// --------------------------------------------------------------------
// Main
// --------------------------------------------------------------------
function main() {
  // Reset dist
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(ASSETS, { recursive: true });

  // Copy CSS + reader.js
  fs.copyFileSync(path.join(__dirname, "style.css"),  path.join(ASSETS, "style.css"));
  fs.copyFileSync(path.join(__dirname, "reader.js"), path.join(ASSETS, "reader.js"));

  // ----- Build chapter pages -----
  const builtChapters = [];
  for (const c of CHAPTERS) {
    const file = chapterFilename(c.n);
    if (!file) continue;

    const mdText = fs.readFileSync(path.join(ROOT, file), "utf8");
    const { titleClean, bannerHtml, contentHtml } = renderChapter({
      chapterNumber: c.n,
      mdText,
    });

    builtChapters.push({ n: c.n, title: titleClean, file, bannerHtml, contentHtml });
  }

  // ----- Per-chapter HTML files -----
  builtChapters.forEach((ch, i) => {
    const padded = String(ch.n).padStart(2, "0");
    const prev = i > 0
      ? { href: `chapter-${String(builtChapters[i-1].n).padStart(2,"0")}.html`, label: `Ch ${builtChapters[i-1].n} — ${builtChapters[i-1].title}` }
      : null;
    const next = i < builtChapters.length - 1
      ? { href: `chapter-${String(builtChapters[i+1].n).padStart(2,"0")}.html`, label: `Ch ${builtChapters[i+1].n} — ${builtChapters[i+1].title}` }
      : null;

    const html = `${pageHead("Chapter " + ch.n + " — " + ch.title)}
<div class="page">
  ${topnav({ prev, next })}
  <div data-running-title="Ch ${ch.n} · ${escapeHtml(ch.title)}">
    ${ch.bannerHtml}
    ${ch.contentHtml}
  </div>
  ${topnav({ prev, next })}
</div>
${pageFoot({ withReader: true })}`;

    fs.writeFileSync(path.join(DIST, `chapter-${padded}.html`), html);
  });

  // ----- Glossary (rendered like a special chapter without the banner) -----
  const glossaryPath = path.join(ROOT, "00-glossary.md");
  if (fs.existsSync(glossaryPath)) {
    const glossText = fs.readFileSync(glossaryPath, "utf8");
    const html = renderPlainMd(glossText);
    const page = `${pageHead("Glossary — PyTB")}
<div class="page">
  ${topnav({ prev: null, next: builtChapters[0] ? { href: `chapter-${String(builtChapters[0].n).padStart(2,"0")}.html`, label: `Ch ${builtChapters[0].n} — ${builtChapters[0].title}` } : null })}
  <div data-running-title="Glossary">
    ${html}
  </div>
  ${topnav({ prev: null, next: builtChapters[0] ? { href: `chapter-${String(builtChapters[0].n).padStart(2,"0")}.html`, label: `Ch ${builtChapters[0].n} — ${builtChapters[0].title}` } : null })}
</div>
${pageFoot({ withReader: true })}`;
    fs.writeFileSync(path.join(DIST, "glossary.html"), page);
  }

  // ----- README → about page (optional, nice to have) -----
  const readmePath = path.join(ROOT, "README.md");
  if (fs.existsSync(readmePath)) {
    const readmeText = fs.readFileSync(readmePath, "utf8");
    const html = renderPlainMd(readmeText);
    const page = `${pageHead("About — PyTB")}
<div class="page">
  ${topnav({ prev: null, next: null })}
  ${html}
</div>
${pageFoot()}`;
    fs.writeFileSync(path.join(DIST, "about.html"), page);
  }

  // ----- Single-page book (cover -> TOC -> chapters -> glossary at back) -----
  let bookBody = "";

  // -------- 1) Cover (no page number) --------
  bookBody += `
<section class="book-cover" data-running-title="">
  <div class="cover-inner">
    <div class="cover-kicker">A Python DSA Workbook</div>
    <h1 class="cover-title">PyTB</h1>
    <div class="cover-sub">Thirty chapters from “I know what <code>Counter</code> is” to “I can solve a LeetCode problem in 20 minutes.”</div>
    <div class="cover-rule"></div>
    <div class="cover-meta">Assembled ${new Date().toISOString().slice(0,10)} &nbsp;·&nbsp; ${builtChapters.length} chapter${builtChapters.length === 1 ? "" : "s"} ready</div>
  </div>
</section>`;

  // -------- 2) Table of contents --------
  const tocChapterRows = builtChapters.map(ch => `
    <li class="toc-row">
      <span class="toc-num">${String(ch.n).padStart(2, "0")}</span>
      <span class="toc-title">${escapeHtml(ch.title)}</span>
      <span class="toc-dots"></span>
      <span class="toc-page" data-page-target="chapter-${ch.n}">·</span>
    </li>`).join("");

  const tocAppendix = fs.existsSync(glossaryPath) ? `
    <li class="toc-row toc-appendix">
      <span class="toc-num">A</span>
      <span class="toc-title">Glossary — every term in plain English</span>
      <span class="toc-dots"></span>
      <span class="toc-page" data-page-target="glossary">·</span>
    </li>` : "";

  bookBody += `
<section class="book-toc" data-running-title="Table of Contents">
  <h1 class="toc-heading">Contents</h1>
  <ol class="toc-list">
    ${tocChapterRows}
  </ol>
  ${tocAppendix ? `<h2 class="toc-subheading">Appendix</h2><ol class="toc-list">${tocAppendix}</ol>` : ""}
</section>`;

  // -------- 3) Chapters in order --------
  for (const ch of builtChapters) {
    bookBody += `
<section class="chapter-section" id="chapter-${ch.n}" data-running-title="Ch ${ch.n} · ${escapeHtml(ch.title)}">
  ${ch.bannerHtml}
  ${ch.contentHtml}
</section>`;
  }

  // -------- 4) Glossary at the back --------
  if (fs.existsSync(glossaryPath)) {
    const glossText = fs.readFileSync(glossaryPath, "utf8");
    const html = renderPlainMd(glossText);
    bookBody += `
<section class="chapter-section appendix-section" id="glossary" data-running-title="Glossary">
  ${html}
</section>`;
  }

  // -------- 5) End-of-book colophon --------
  bookBody += `
<section class="book-end" data-running-title="">
  <div class="end-inner">
    <div class="end-rule"></div>
    <div class="end-line">End of build</div>
    <div class="end-sub">${builtChapters.length} chapter${builtChapters.length === 1 ? "" : "s"} ready · assembled ${new Date().toISOString().slice(0,10)}</div>
  </div>
</section>`;

  const bookHtml = `${pageHead("PyTB — full book")}
<div class="page book-page">
  ${topnav({ prev: null, next: null })}
  ${bookBody}
</div>
${pageFoot({ withReader: true })}`;
  fs.writeFileSync(path.join(DIST, "book.html"), bookHtml);

  // ----- Index -----
  const chaptersForIndex = CHAPTERS.map(c => ({ ...c, built: !!chapterFilename(c.n) }));
  fs.writeFileSync(path.join(DIST, "index.html"), renderIndex({ chapters: chaptersForIndex }));

  // ----- Done -----
  console.log(`Built ${builtChapters.length} chapter page(s) + index + glossary + book.html`);
  console.log(`Open: file://${path.join(DIST, "index.html")}`);
}

main();
