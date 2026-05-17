#!/bin/bash
# Build the PyTB website (HTML version of the book).
# Outputs to dist/. Open dist/index.html in your browser.
set -e
cd "$(dirname "$0")"

echo "Building HTML..."
node build/build.js
echo ""
echo "Done."
echo "Open:    file://$(pwd)/dist/index.html"
echo "Single:  file://$(pwd)/dist/book.html  (use browser Print -> Save as PDF for a PDF)"
