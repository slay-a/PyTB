#!/bin/bash
# Build everything: concatenated markdown, HTML site, PDF (styled), DOCX (fallback).
set -e
cd "$(dirname "$0")"

echo "== 1/4  concatenated markdown =="
./build-book.sh
echo ""

echo "== 2/4  HTML site =="
./build-html.sh
echo ""

echo "== 3/4  PDF (matches HTML, paginated, with page numbers) =="
./build-pdf.sh
echo ""

echo "== 4/4  DOCX (fallback — plain styling) =="
./build-docx.sh
echo ""

echo "All builds done."
echo "  Site:  dist/index.html"
echo "  Book:  dist/book.html  (browser Print -> Save as PDF)"
echo "  PDF:   dist/PyTB-book.pdf   (styled, with page numbers)"
echo "  DOCX:  dist/PyTB-book.docx  (plain — DOCX format can't carry the colored styling)"
