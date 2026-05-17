#!/bin/bash
# Build a PDF that matches the HTML look (cover, TOC, chapters, glossary at back,
# page numbers in footer). Uses headless Chrome via puppeteer-core.
set -e
cd "$(dirname "$0")"

# Make sure the HTML is fresh.
./build-html.sh >/dev/null

node build/build-pdf.js
echo "PDF: dist/PyTB-book.pdf"
