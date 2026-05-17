#!/bin/bash
# Build a styled .docx version of the book.
# Uses LibreOffice (which is installed at /Applications/LibreOffice.app) so the
# DOCX preserves the colour callouts / chapter banners / coloured headings.
# Output: dist/PyTB-book.docx
set -e
cd "$(dirname "$0")"

if ! command -v soffice >/dev/null 2>&1; then
  echo "soffice (LibreOffice) not found."
  echo "Install with:  brew install --cask libreoffice"
  exit 1
fi

mkdir -p dist
node build/build-docx.js
