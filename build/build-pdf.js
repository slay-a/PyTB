#!/usr/bin/env node
/* Render dist/book.html to dist/PyTB-book.pdf using headless Chrome.
 *
 * Why this and not the .docx pipeline:
 *   We want the PDF to look like the website — colored callouts, gradients,
 *   doodles, syntax-highlighted code. A markdown -> .docx pipeline drops
 *   all of that. Headless Chrome prints the HTML exactly as it appears.
 *
 * Pagination:
 *   The cover is rendered as a separate PDF *without* a footer, then the
 *   remaining pages (TOC, chapters, glossary) are rendered with a footer
 *   that contains "PyTB · Python DSA Workbook" on the left and "page X of N"
 *   on the right. The two PDFs are merged so the final file looks like a
 *   real textbook: unnumbered cover, then numbered content starting at 1.
 */

const fs   = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");
const { PDFDocument } = require("pdf-lib");

const ROOT   = path.resolve(__dirname, "..");
const DIST   = path.join(ROOT, "dist");
const BOOK   = path.join(DIST, "book.html");
const TMP_COVER   = path.join(DIST, ".cover.pdf");
const TMP_CONTENT = path.join(DIST, ".content.pdf");
const OUTPDF      = path.join(DIST, "PyTB-book.pdf");

const CHROME_PATHS = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  "/Applications/Arc.app/Contents/MacOS/Arc",
];

function findChrome() {
  for (const p of CHROME_PATHS) if (fs.existsSync(p)) return p;
  return null;
}

const FOOTER_TEMPLATE = `
  <div style="
    font-family: 'Inter', -apple-system, system-ui, sans-serif;
    font-size: 8.5pt;
    color: #6B6258;
    width: 100%;
    padding: 0 18mm 6mm 18mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.6pt solid #E5D9BE;
    margin-top: 6mm;
  ">
    <span style="font-style: italic; color: #5B21B6;">PyTB · Python DSA Workbook</span>
    <span><span class="pageNumber"></span> &nbsp;/&nbsp; <span class="totalPages"></span></span>
  </div>`;

const EMPTY_HEADER = `<div style="display:none"></div>`;

async function pdfRange(page, file, opts) {
  await page.pdf({
    path: file,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "22mm", right: "18mm", bottom: "22mm", left: "18mm" },
    ...opts,
  });
}

async function main() {
  if (!fs.existsSync(BOOK)) {
    console.error(`Missing ${BOOK}. Run ./build-html.sh first.`);
    process.exit(1);
  }
  const chromePath = findChrome();
  if (!chromePath) {
    console.error("Couldn't find Chrome/Chromium. Install Google Chrome and re-run.");
    process.exit(1);
  }

  console.log(`Using browser: ${chromePath}`);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--font-render-hinting=none"],
  });

  try {
    const page = await browser.newPage();
    await page.emulateMediaType("print");
    const url = "file://" + BOOK;
    console.log(`Loading ${url}`);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 90_000 });
    await page.evaluateHandle("document.fonts.ready");

    // 1) Cover only, NO footer.
    console.log("Rendering cover...");
    await pdfRange(page, TMP_COVER, {
      pageRanges: "1",
      displayHeaderFooter: false,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    });

    // 2) Everything else, WITH footer + page numbers (restart at 1).
    console.log("Rendering content with footer/page numbers...");
    await pdfRange(page, TMP_CONTENT, {
      pageRanges: "2-",
      displayHeaderFooter: true,
      headerTemplate: EMPTY_HEADER,
      footerTemplate: FOOTER_TEMPLATE,
    });
  } finally {
    await browser.close();
  }

  // 3) Merge cover + content with pdf-lib.
  console.log("Merging cover + content...");
  const out = await PDFDocument.create();
  const cover   = await PDFDocument.load(fs.readFileSync(TMP_COVER));
  const content = await PDFDocument.load(fs.readFileSync(TMP_CONTENT));

  const coverPages   = await out.copyPages(cover,   cover.getPageIndices());
  const contentPages = await out.copyPages(content, content.getPageIndices());
  coverPages.forEach(p => out.addPage(p));
  contentPages.forEach(p => out.addPage(p));

  out.setTitle("PyTB — Python DSA Workbook");
  out.setAuthor("");
  out.setSubject("A 30-chapter workbook for cracking the coding interview");
  out.setProducer("PyTB build pipeline");

  const finalBytes = await out.save();
  fs.writeFileSync(OUTPDF, finalBytes);

  // Clean up temp pdfs
  fs.unlinkSync(TMP_COVER);
  fs.unlinkSync(TMP_CONTENT);

  const size = fs.statSync(OUTPDF).size;
  const totalPages = out.getPageCount();
  console.log(`Wrote ${OUTPDF} — ${totalPages} pages, ${(size / 1024 / 1024).toFixed(1)} MB`);
}

main().catch(err => {
  console.error("PDF build failed:", err);
  process.exit(1);
});
