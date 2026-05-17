#!/bin/bash
# build-book.sh - Concatenates all PyTB chapters into one PyTB-book.md
# Run from inside /Users/slaya/PyTB/

set -e
cd "$(dirname "$0")"

OUT="PyTB-book.md"
DATE=$(date +"%Y-%m-%d")

# Title page + TOC
cat > "$OUT" <<EOF
# PyTB - Python DSA Workbook

A complete workbook for learning Data Structures and Algorithms in Python.
Built for coding interview preparation.

Last assembled: $DATE

---

## Table of Contents

- About the workbook (README)
- Glossary (every term in plain English)
- Chapter 1 - Iteration and Counting
- Chapter 2 - Sequences (list, tuple, string, range)
- Chapter 3 - Hashing (dict, set, Counter, defaultdict)
- Chapter 4 - Stacks and Queues
- Chapter 5 - Standard Library Cheat Pack
- (More chapters being added)

---

EOF

# Concatenate each section with a horizontal rule separator
for f in README.md 00-glossary.md 01-iteration-and-counting.md 02-sequences.md 03-hashing.md 04-stacks-and-queues.md 05-standard-library.md; do
    if [ -f "$f" ]; then
        cat "$f" >> "$OUT"
        printf "\n\n---\n\n" >> "$OUT"
    fi
done

# Closing note
cat >> "$OUT" <<EOF

# End of current build

This book currently contains Chapters 1 through 5. More chapters are being added.
Re-run \`./build-book.sh\` to rebuild after new chapters are added.
EOF

echo "Built $OUT"
wc -l "$OUT"
