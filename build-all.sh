#!/bin/bash
# Build everything: concatenated markdown, HTML site, DOCX export.
set -e
cd "$(dirname "$0")"

echo "== 1/3  concatenated markdown =="
./build-book.sh
echo ""

echo "== 2/3  HTML site =="
./build-html.sh
echo ""

echo "== 3/3  DOCX export =="
./build-docx.sh
echo ""

echo "All builds done."
echo "  Site:  dist/index.html"
echo "  Book:  dist/book.html  (browser Print -> Save as PDF)"
echo "  DOCX:  dist/PyTB-book.docx"
