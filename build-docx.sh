#!/bin/bash
# Build a .docx version of the PyTB book using pandoc.
# Output: dist/PyTB-book.docx
# Requires: pandoc (brew install pandoc).

set -e
cd "$(dirname "$0")"

if ! command -v pandoc >/dev/null 2>&1; then
  echo "pandoc not found."
  echo "Install with:  brew install pandoc"
  exit 1
fi

# Make sure the concatenated markdown file is up to date.
if [ -x "./build-book.sh" ]; then
  ./build-book.sh > /dev/null
fi

mkdir -p dist

SRC="PyTB-book.md"
OUT="dist/PyTB-book.docx"

echo "Converting $SRC -> $OUT ..."
pandoc "$SRC" \
  --from=gfm \
  --to=docx \
  --toc --toc-depth=2 \
  --syntax-highlighting=tango \
  --metadata title="PyTB — Python DSA Workbook" \
  --metadata author="" \
  --metadata date="$(date +"%Y-%m-%d")" \
  -o "$OUT"

echo "Done. $OUT"
ls -lh "$OUT"
