# PyTB - Python DSA Workbook

A 30-chapter workbook to take you from "I know what `Counter` is" to "I can solve a LeetCode problem in 20 minutes."

Written in:
- Simple English (short sentences, plain words)
- Python (with syntax explained as we go)
- Clean visual style with silly examples
- The Alex Xu / ByteByteGo teaching format (Problem, Intuition, Visual, Code, Complexity, Tests)

---

## Who this is for

You. Specifically:

- You know Python basics, but complex syntax still slows you down.
- You have read flashcards but cannot apply them on a real LeetCode problem.
- English is not your first language.
- You want to crack coding interviews.

---

## How every chapter is built

Same shape every time. You always know what to expect.

| Section | What it does |
|---------|--------------|
| What you will learn | 3 to 5 bullet points. The skills you'll have at the end. |
| Vocabulary | New words, defined in plain English. Often with silly examples. |
| Python primer | Any Python syntax you need that you might not know. |
| The pattern | The shape of the solution. Usually 3 to 5 numbered steps. |
| Tools you need | Each Python tool (function, method, trick) with examples. |
| Worked examples | 3 to 5 LeetCode problems, fully solved in the Alex Xu format. |
| Pattern recognition | "If the problem says X, use Y" table. |
| Practice problems | 10 to 15 LeetCode problems to try. |
| Solutions | Full code + commentary, at the END of the chapter. |
| Flashcards | Short review cards for spaced repetition. |
| Review schedule | When to come back (Day 1, 3, 7, 14). |

Every **worked example** uses the Alex Xu / ByteByteGo template:

1. **Problem** (boxed)
2. **Intuition** (think out loud)
3. **Visual walkthrough** (table or diagram)
4. **Code** (line by line, every piece explained)
5. **Complexity** (time AND space, with reasoning)
6. **Edge cases** (test cases to think about)

---

## Study schedule (per chapter)

| Day | Do this |
|-----|---------|
| Day 0 | Read chapter. Do all worked examples on paper. Try all practice. |
| Day 1 | Review flashcards. Re-do problems you got wrong. |
| Day 3 | Review flashcards. Pick 3 random problems. Re-solve from scratch. |
| Day 7 | Review flashcards. Pick 3 different problems. Re-solve from scratch. |
| Day 14 | Final review. If all 3 feel easy, move to the next chapter. |

**Promotion rule.** Do NOT move to the next chapter until you can solve any 3 practice problems from this chapter, picked at random, with no help.

---

## The 30 chapters

### Phase 1 - Foundations
1. **Iteration and Counting** (built)
2. **Sequences** (list, tuple, string, range) (built)
3. **Hashing** (dict, set, Counter, defaultdict) (built)
4. **Stacks and Queues** (built)
5. **Standard Library Cheat Pack** (built)
6. Big-O and Complexity

### Phase 2 - Linear Patterns
7. Linked Lists
8. Two Pointers
9. Sliding Window
10. Prefix Sums and Difference Arrays
11. Intervals

### Phase 3 - Search and Sort
12. Binary Search
13. Sorting Toolkit
14. Heaps and Priority Queues

### Phase 4 - Trees
15. Binary Trees
16. Binary Search Trees
17. Tries

### Phase 5 - Graphs
18. Graph Basics
19. Topological Sort
20. Shortest Paths
21. Union-Find

### Phase 6 - Recursion and Search
22. Recursion Fundamentals
23. Backtracking

### Phase 7 - Dynamic Programming
24. DP Fundamentals
25. 1D DP
26. 2D DP and Grid DP
27. Knapsack and Subset Sum
28. DP on Sequences and Strings

### Phase 8 - Specialized
29. Bit Manipulation
30. Math + Greedy and Monotonic Patterns

---

## When you get stuck

Open Claude Code in this folder and ask:

- "Explain example 3 in chapter 1 again, even simpler."
- "Give me 5 more practice problems like P4."
- "I tried this and got the wrong answer, here is my code."
- "I do not understand the word 'invariant'. Explain in plain words."
- "Show me a silly example for sliding window."

The workbook is your starting point. The conversation is how you go deeper.

---

## File map

```
PyTB/
  README.md                          (this file)
  00-glossary.md                     (every term in plain English)
  01-iteration-and-counting.md       (Chapter 1, START HERE)
  02-sequences.md                    (Chapter 2)
  03-hashing.md                      (Chapter 3)
  04-stacks-and-queues.md            (Chapter 4)
  05-standard-library.md             (Chapter 5)
  06-... through 30-...              (future chapters)
  PyTB-book.md                       (everything concatenated into one file)
  CHAPTER_TEMPLATE.md                (the shape every chapter follows)
  _book_notes/
    alex-xu-coding-patterns.md       (knowledge from the Alex Xu PDF)
```

---

## About the Alex Xu integration

This workbook is informed by the "Coding Interview Patterns" Bonus PDF by Alex Xu and Shaun Gunawardane (ByteByteGo, 2024).

PDF location:
```
~/Library/Mobile Documents/com~apple~CloudDocs/Coding interview patterns by Alex Xu.pdf
```

We adopt the book's structure (Problem, Intuition, Visual, Implementation, Complexity, Tests) and pull patterns and insights from it into each chapter.

Notes from the book live in `_book_notes/alex-xu-coding-patterns.md`.

---

## Why this exists

You said you learn best from IIT-style workbooks. Theory + examples + practice + answers, all in one place. This is that, in English, in Python, for DSA.

The goal is not to read the most. The goal is to **solve problems without help**. Every chapter is built to get you to that point on one specific pattern.
