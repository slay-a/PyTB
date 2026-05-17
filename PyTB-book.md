# PyTB - Python DSA Workbook

A complete workbook for learning Data Structures and Algorithms in Python.
Built for coding interview preparation.

Last assembled: 2026-05-16

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


---

# Glossary - every term in plain English

Every word in this book, defined simply. Look here any time something confuses you.

Words are in alphabetical order. Bolded **important** ones are worth memorizing.

---

## Accumulate

**One line.** Add to a running total.

Imagine a piggy bank. You put coins in. The total grows.

```python
total = 0           # empty piggy bank
for coin in [1, 2, 3]:
    total += coin   # drop coin in
# total is now 6
```

---

## Adjacent

**One line.** Right next to each other.

Two items are adjacent if they sit side by side. Nothing between them.

```
"hello"
 ^^
 'h' and 'e' are adjacent
 'h' and 'l' are NOT adjacent (an 'e' is in between)
```

---

## Algorithm

**One line.** A recipe of steps to solve a problem.

A clear list of instructions. Same input always gives the same output. Like a cake recipe.

---

## ASCII code (important)

**One line.** The number behind a letter.

Computers do not store letters. They store numbers. Every letter has a secret number called its ASCII code.

```python
ord('a')   # 97   - the secret number for 'a'
ord('b')   # 98
ord('z')   # 122
chr(97)    # 'a'  - go from number back to letter
```

> Fun fact. Capital `'A'` is 65, but lowercase `'a'` is 97. They are different numbers.

---

## Array

**One line.** Same as a Python list. A sequence of items in order.

"Array" is the word LeetCode uses. "List" is the word Python uses. Same thing.

---

## Boundary

**One line.** The edge of a list, string, or number range.

The first item and last item are at the boundary. One step past the boundary is "out of bounds."

---

## Brute force (important)

**One line.** Try every possibility. Slow but simple.

The first solution most people think of. Often loops inside loops. Usually too slow for big input, but a great starting point.

```
"Count pairs that sum to 10."

Brute force: check every pair.
   for each i, for each j, if nums[i] + nums[j] == 10: count++
   This is O(n²), slow.

Smart way: use a hash set.
   This is O(n), fast.
```

You almost always start with brute force, then improve.

---

## Character (char)

**One line.** One letter or symbol.

`'h'` is a character. `'?'` is a character. `'5'` (the digit, in quotes) is also a character.

---

## Comprehension (list comprehension)

**One line.** A short way to build a list in one line.

Pattern: `[expression for item in source if condition]`.

```python
squares = [x * x for x in [1, 2, 3]]
# [1, 4, 9]

evens = [x for x in [1, 2, 3, 4] if x % 2 == 0]
# [2, 4]
```

---

## Constant time (O(1)) (important)

**One line.** The time does NOT grow when the input grows.

Looking up `d[key]` in a dict is constant time. Whether the dict has 10 items or 10 million, lookup takes the same time.

---

## Count (important)

**One line.** ONE number that says "how many."

```python
nums = [1, 0, 1, 1]
count = 0
for x in nums:
    if x == 1:
        count += 1
# count = 3 (ONE number)
```

> **Watch out.** Often confused with frequency. Read the section below.

---

## Count vs Frequency (read this twice)

These two words sound similar but mean different things.

- **Count** is **ONE number**. "How many 1s in this list?"
- **Frequency** is **MANY numbers**, one per item. "How many of EACH letter?"

```python
# COUNT - one number
nums = [1, 0, 1, 1]
count_of_ones = 3

# FREQUENCY - many numbers, one per item
s = "hello"
frequency = {'h': 1, 'e': 1, 'l': 2, 'o': 1}
```

> **Silly memory hook.** Imagine a pizza party.
> - **Count** is "how many people came?" Answer: 12.
> - **Frequency** is "how many slices did each person eat?" Answer: Alice 2, Bob 3, Carol 1.

---

## DFS (Depth First Search)

**One line.** Go deep first. Come back later for other branches.

A way to walk a tree or graph. Imagine exploring a cave. Go as far as you can. Hit a dead end. Back up. Try another tunnel.

---

## BFS (Breadth First Search)

**One line.** Go wide first. Visit all neighbors before going deeper.

Imagine ripples on water. Visit everything 1 step away. Then everything 2 steps away. Then 3.

---

## Element

**One line.** One item in a list or set.

Same as "item." `nums = [4, 5, 6]` has three elements.

---

## Frequency (important)

**One line.** A count for each different item.

A map from each item to "how many times does this item appear?" Use a dict or `Counter`.

```python
from collections import Counter
Counter("hello")
# {'h': 1, 'e': 1, 'l': 2, 'o': 1}
```

> **Watch out.** Often confused with count. See "Count vs Frequency" above.

---

## Function (important)

**One line.** A reusable block of code with a name.

You write it once with `def`. You call it as many times as you want.

```python
def greet(name):              # define function 'greet' with input 'name'
    return "hi " + name       # what it gives back

greet("Anna")    # "hi Anna"
greet("Bob")     # "hi Bob"
```

Parts:
- `def` is "I am about to define a function."
- `greet` is the function's name.
- `name` is the input (called a parameter).
- `return` is what the function gives back.

---

## Hash

**One line.** Turn a value into a fixed number, very fast.

Python uses this to put a key in the right slot inside a dict or set. That is why lookups are constant time.

---

## Hash map (important)

**One line.** Another name for a Python dict.

LeetCode says "hash map." Python says "dict." Same thing.

```python
d = {"apple": 1, "banana": 2}    # this IS a hash map
```

---

## Hash set (important)

**One line.** Another name for a Python set.

LeetCode says "hash set." Python says "set." Same thing.

```python
s = {1, 2, 3}     # this IS a hash set
2 in s            # True, in O(1) time
```

---

## Hashable

**One line.** Can be used as a dict key or set member.

A value is hashable if it cannot change. Strings, numbers, and tuples are hashable. Lists, dicts, and sets are not.

---

## Index (important)

**One line.** Position number. Starts at 0.

```python
s = "hello"
s[0]   # 'h' (first)
s[-1]  # 'o' (last)
```

---

## In place (important)

**One line.** Change the original. Do not make a copy.

```python
nums = [3, 1, 2]
nums.sort()        # changes nums itself, no new list
# nums is now [1, 2, 3]
```

Some problems require an in-place solution. They want you to save memory.

---

## Intuition (important)

**One line.** The thinking BEFORE you write code.

In this workbook, every example has an "Intuition" section. It is where we think out loud in plain English. Code comes after the intuition is clear.

Think of it like cooking. Intuition is "I want eggs. I'll heat the pan, crack eggs, scramble them." The code is just typing the recipe out in Python.

---

## Iterate (important)

**One line.** Walk through items one at a time.

Use a `for` loop. Same as "loop through."

```python
for x in [1, 2, 3]:    # iterate over the list
    print(x)
```

---

## Iteration

**One line.** One single pass through a loop.

"On the third iteration, x is 3" means "the third time the loop body ran, x was 3."

---

## Key (important)

**One line.** The lookup value in a dict.

```python
d = {"name": "Anna"}
# "name" is the key
# "Anna" is the value
```

---

## Linear time (O(n)) (important)

**One line.** The time grows in step with the input size.

If the input doubles, the time doubles. A single loop through a list is O(n).

Walking through a queue of n people, one at a time, is linear time.

---

## List (important)

**One line.** An ordered, changeable sequence of items.

```python
nums = [10, 20, 30]
```

Lists use square brackets `[ ]`. Items can be of any type (numbers, strings, even other lists).

---

## Loop

**One line.** Repeat code many times.

Two kinds:
- `for` loop. Repeat a known number of times.
- `while` loop. Repeat as long as a condition is true.

Each repeat is called one iteration.

---

## Membership test

**One line.** Check if a value is inside something.

```python
'a' in "apple"     # True
3 in [1, 2, 3]     # True
5 in {1, 2, 3}     # False
```

Use `in`. Fast for sets and dicts. Slow for lists.

---

## Mutable

**One line.** Can be changed after creation.

Lists, dicts, and sets are mutable. You can add, remove, and update them in place.

---

## Immutable

**One line.** Cannot be changed after creation.

Strings, tuples, and numbers are immutable. Any "change" actually makes a brand new value.

---

## Naive (important)

**One line.** The first, simplest solution. Usually slow.

Same idea as brute force. Naive means "I haven't thought about it cleverly yet."

In the Alex Xu book, "naive" is the term used before showing the smart way. We use it too.

---

## Occurrence

**One line.** One single appearance of a value.

`'l' has 2 occurrences in "hello"` means `'l'` appears 2 times in the string `"hello"`.

---

## Pattern (important)

**One line.** A common shape that many problems share.

"Sliding window" is a pattern. "Two pointers" is a pattern. Learn the pattern once, use it on 50 problems.

Like puzzle types. Once you know how to do a jigsaw, the next jigsaw is faster.

---

## Pivot

**One line.** A special middle item that decides what happens next.

Different patterns use "pivot" in different ways:
- In quicksort, pivot is a number you split the array around.
- In next permutation, pivot is the place where the order breaks.
- In binary search, pivot is the middle index.

If a problem uses "pivot," the pivot is the key spot you focus on.

---

## Pointer (important)

**One line.** A variable that holds an index. You move it along a list.

```python
i = 0          # pointer starts at 0
i += 1         # move pointer right by one
nums[i]        # peek at the item where the pointer is now
```

Two Pointers means two pointers. One on the left, one on the right.

---

## Range (important)

**One line.** A lazy sequence of numbers.

```python
range(5)         # 0, 1, 2, 3, 4
range(2, 6)      # 2, 3, 4, 5
range(0, 10, 2)  # 0, 2, 4, 6, 8
range(5, 0, -1)  # 5, 4, 3, 2, 1   (negative step is countdown)
```

> **Watch out.** `range(stop)` includes 0 but NOT `stop`. So `range(5)` gives 0,1,2,3,4 (NOT 5).

---

## Recursion

**One line.** A function that calls itself.

Used to solve a big problem by breaking it into smaller copies of itself.

Like Russian nesting dolls. Open one to find a smaller one inside.

---

## Set (important)

**One line.** An unordered collection of unique items. Fast membership.

```python
s = {1, 2, 3}
2 in s   # True, O(1) (very fast)
```

> Sets cannot have duplicates. `{1, 1, 2}` becomes `{1, 2}` automatically.

---

## Slice (important)

**One line.** A chunk of a sequence. Pattern: `s[start:stop]`.

`stop` is NOT included.

```python
s = "12345"
s[1:4]   # "234"   (index 1, 2, 3)
s[:2]    # "12"
s[-2:]   # "45"
```

---

## Streak (or run)

**One line.** Items in a row that all match.

In `[1, 1, 0, 1, 1, 1]`, the streaks of 1 are length 2 and length 3.

Like a Snapchat streak. Keeps going as long as nothing breaks it.

---

## String (important)

**One line.** A sequence of characters. Cannot be changed.

```python
s = "hello"
```

> You can read individual letters (`s[0]`), but you cannot change them (`s[0] = 'H'` raises an error). Strings are immutable.

---

## Substring

**One line.** A continuous piece of a string.

`"ell"` is a substring of `"hello"`.
`"hlo"` is NOT a substring (the letters are not next to each other).

---

## Time complexity (important)

**One line.** How the running time grows with input size.

Written as O(1), O(n), O(n log n), O(n²), etc.

Quick guide:
- O(1) is constant, no matter how big the input
- O(log n) is very fast (binary search)
- O(n) is fast (one loop through input)
- O(n log n) is medium (sorting)
- O(n²) is slow (loop inside loop)
- O(2^n) is very slow (most brute-force recursion)

Full chapter on this in Chapter 6.

---

## Tuple

**One line.** A locked list. Cannot be changed.

```python
point = (3, 5)
point[0]      # 3
point[0] = 4  # ERROR, tuples are locked
```

> Tuples use parentheses `( )` instead of square brackets.

---

## Variable

**One line.** A name that holds a value.

```python
x = 5         # x is a variable holding 5
name = "Anna" # name is a variable holding "Anna"
```

You can update a variable. `x = 6` now holds 6 instead.

---

## Window

**One line.** A range of items being looked at together.

In sliding window problems, you look at `k` items at a time, then "slide" the window forward by one.

Like looking through a window of a moving train. You see a few houses at once, then new houses come into view.

---

## Zero-indexed (important)

**One line.** Positions start at 0, not 1.

The first item has index 0. The second has index 1. The N-th has index N-1.

> **Watch out.** This is the most common source of bugs for beginners. Always remember: indexes start at 0.


---

# Chapter 1 - Iteration and Counting

> Walk through a list or a string. Count something. Return the answer. This is the shape of most easy LeetCode problems.

---

## What you will learn

By the end of this chapter, you can solve these without help:

- Max Consecutive Ones (LC 485)
- Score of a String (LC 3110)
- Number of Senior Citizens (LC 2678)
- Valid Anagram (LC 242)

Plus 15 practice problems that use the same pattern.

You will also learn:

- The Python syntax you need (loops, lists, dicts, if/else, functions)
- The Walk and Count pattern
- Five tools: `ord` and `chr`, slicing, `Counter` (with arithmetic and iteration), running max, and common Python built-ins (`sum`, `min`, `max`, `abs`, `all`, `any`, `set`, `in`)
- Generator expressions, the choose-2 formula, list concatenation
- How to figure out time complexity yourself

---

## Vocabulary

| Word | Plain meaning | Tiny example |
|------|---------------|--------------|
| Iterate | Walk through items one by one | `for x in nums:` |
| Count | One number. "How many?" | `count = 0; count += 1` |
| Frequency | A count for each different item | `Counter("aab")` gives `{a:2, b:1}` |
| Occurrence | One single appearance | `'l' has 2 occurrences in "hello"` |
| Accumulate | Add to a running total | `total = 0; total += x` |
| Index | Position number. Starts at 0 | `s[0]` is the first character |
| Character | One letter or symbol | `'h'` in `"hello"` |
| ASCII code | The number behind a character | `'a'` is `97`, `'b'` is `98` |
| Streak / Run | Items in a row that all match | In `[1,1,0,1,1,1]`, the runs of 1 are 2 and 3 |

### Count vs Frequency (the most common confusion)

These two words sound similar but mean different things.

- **Count** is **one number**. "How many 1s in this list?"
- **Frequency** is **many numbers**, one per item. "How many of each letter?"

```python
# COUNT - one number
nums = [1, 0, 1, 1, 0]
count_of_ones = 3

# FREQUENCY - many numbers, one per item
s = "hello"
frequency = {'h': 1, 'e': 1, 'l': 2, 'o': 1}
```

> **Silly hook to remember it.** Imagine a pizza party.
> - **Count** is "how many people came?" Answer: 12.
> - **Frequency** is "how many slices did each person eat?" Answer: Alice 2, Bob 3, Carol 1...

When a problem says "how many...", you usually want a count.
When a problem says "how many of each..." or "do these match?", you want a frequency.

---

## Python Primer

If you already know Python, skim this. Otherwise read every line. Every chapter from here on assumes you know what's in this primer.

### Variables

A variable is a name that holds a value.

```python
x = 5
name = "Anna"
nums = [1, 2, 3]
```

You can change a variable later. `x = 10` now holds 10.

### if / elif / else

Make a decision.

```python
if x > 10:
    print("big")
elif x == 10:
    print("exactly ten")
else:
    print("small")
```

> **Watch out.** Indentation matters in Python. The 4 spaces before `print` tell Python "this is inside the `if`."

### for loop with a list

Walk through items.

```python
for x in [1, 2, 3]:    # x will be 1, then 2, then 3
    print(x)
```

### for loop with range

Walk through numbers.

```python
for i in range(5):     # i will be 0, 1, 2, 3, 4
    print(i)

for i in range(2, 6):  # i will be 2, 3, 4, 5
    print(i)
```

> **Watch out.** `range(stop)` includes 0 but NOT `stop`.
> `range(start, stop)` includes `start` but NOT `stop`.

### for loop with index AND item using `enumerate`

Sometimes you need both the position AND the item.

```python
fruits = ['apple', 'banana', 'cherry']
for i, fruit in enumerate(fruits):
    print(i, fruit)
# Output:
# 0 apple
# 1 banana
# 2 cherry
```

### Lists

Ordered, changeable sequence. Uses square brackets `[ ]`.

```python
nums = [10, 20, 30]
nums[0]           # 10 (first item)
nums[-1]          # 30 (last item)
nums.append(40)   # nums is now [10, 20, 30, 40]
len(nums)         # 4
nums[0] = 99      # change one item by index. nums is now [99, 20, 30, 40]
```

> **Why.** Lists can be changed in place. Strings cannot. `s[0] = 'X'` on a string crashes.

Make a list of n copies with `*`. Useful when you want to pre-fill an answer list.

```python
zeros = [0] * 5            # [0, 0, 0, 0, 0]
flags = [False] * 3        # [False, False, False]
```

A list can hold other lists. Each item is itself indexable.

```python
items = [["phone", "blue", "pixel"],
         ["computer", "silver", "lenovo"]]

items[0]          # ["phone", "blue", "pixel"]   - the first inner list
items[0][1]       # "blue"                        - first inner list, then its index 1
items[1][0]       # "computer"

for item in items:
    print(item[0], item[1], item[2])
# phone blue pixel
# computer silver lenovo
```

> **Watch out.** Two indexes back-to-back: the first picks an inner list; the second indexes INTO that inner list. You will see this any time the input is a "list of records" like `[[type, color, name], ...]`.

### Strings

Like a list but each item is a character. Cannot be changed.

```python
s = "hello"
s[0]              # 'h'
s[-1]             # 'o'
len(s)            # 5
s[1:4]            # "ell"  (slice)
```

### Dictionaries

A key-value lookup. Uses curly braces `{ }`.

```python
d = {"name": "Anna", "age": 30}
d["name"]         # "Anna"
d["age"] = 31     # update existing key
d["city"] = "NYC" # add new key
"age" in d        # True (does this key exist?)
```

### Functions

A named block of code you can call again.

```python
def add(a, b):        # define a function named "add"
    return a + b      # what it gives back when called

add(2, 3)             # returns 5
```

### Comparison and math operators

```
==   equal to
!=   not equal to
<    less than
>    greater than
<=   less than or equal
>=   greater than or equal

+    add        (also joins strings: "ab" + "cd" gives "abcd")
-    subtract
*    multiply
/    divide (gives float: 7 / 2 is 3.5)
//   integer divide (drops decimal: 7 // 2 is 3)
%    remainder (7 % 2 is 1)
```

You now know enough Python for this chapter.

---

## The Pattern: Walk and Count

Almost every easy LeetCode problem follows this exact shape.

```
1. Set up an answer variable    (count = 0, best = 0, freq = {})
2. Loop through the input        (for x in nums:)
3. Update the answer             (if x == 1: count += 1)
4. Return the answer             (return count)
```

That is the whole shape. Four steps.

When a new problem looks scary, ask yourself:

1. What is my answer variable? (a number? a dict? a list?)
2. What am I looping over? (a list of numbers? a string? a list of strings?)
3. How does each item update the answer?

If you can answer those three questions, you can write the code.

---

## How to figure out time complexity

You will see `O(n)` and `O(n²)` in every solution. Here is how to figure it out yourself.

### Rule 1. One simple loop through n items is O(n).

```python
for x in nums:        # walks through n items
    do_something(x)   # each step is O(1)
# Total: n times O(1), which is O(n).
```

### Rule 2. A loop inside a loop is O(n²).

```python
for i in range(n):        # n iterations
    for j in range(n):    # n iterations each time
        do_something()    # O(1)
# Total: n times n times O(1), which is O(n²).
```

### Rule 3. Calls to fast operations stay fast.

| Operation | Time |
|-----------|------|
| `nums[i]` (list index) | O(1) |
| `len(nums)` | O(1) |
| `x in set_or_dict` | O(1) average |
| `x in list` | O(n) (it scans) |
| `Counter(items)` | O(n) (it walks the items) |
| `sorted(nums)` | O(n log n) |

### Rule 4. Drop constants and smaller terms.

```
O(2n) becomes O(n)
O(n + 5) becomes O(n)
O(n + n²) becomes O(n²)        (only the biggest matters)
```

### Space complexity

How much EXTRA memory you use, NOT counting the input.

```python
# Just a few variables, no extra storage. Space: O(1).
count = 0
for x in nums:
    if x == 1: count += 1

# A Counter that grows with input. Space: O(n).
freq = {}
for x in nums:
    freq[x] = freq.get(x, 0) + 1
```

### Quick reference

| Big-O | Speed | Example |
|-------|-------|---------|
| O(1) | Instant | Dict lookup |
| O(log n) | Very fast | Binary search |
| O(n) | Fast | Single loop |
| O(n log n) | Medium | Sorting |
| O(n²) | Slow | Nested loops |
| O(2^n) | Very slow | Brute force recursion |

---

## The Tools You Need

### Tool A: `ord()` and `chr()` for letter and number

Computers store letters as numbers. The number for a letter is called its ASCII code.

```python
ord('a')   # 97
ord('b')   # 98
ord('z')   # 122
ord('A')   # 65   (capital A and lowercase a are different)
chr(97)    # 'a'
chr(65)    # 'A'
```

**When to use it.** When the problem asks you to compare letters as numbers. Examples: "difference between two letters", "sort letters by code", "distance from 'a'".

**Useful trick.** `ord(ch) - ord('a')` maps `'a'` to 0, `'b'` to 1, ..., `'z'` to 25.

```python
ord('c') - ord('a')   # 2
ord('z') - ord('a')   # 25
```

This is how you turn a letter into an array index. You will use this a lot.

---

### Tool B: String slicing for grabbing a piece

Pattern: `s[start:stop]`. **`stop` is NOT included.**

```python
s = "12345"
s[0:2]      # "12"   - indexes 0 and 1
s[1:4]      # "234"  - indexes 1, 2, 3
s[:3]       # "123"  - from start to index 2
s[2:]       # "345"  - from index 2 to end
s[-2:]      # "45"   - last two characters
s[::-1]     # "54321" - reverse
```

**When to use it.** When you need only a piece of a string.

**Convert a slice to a number.** Wrap it in `int()`.

```python
person = "1313579440F2036"
age_str = person[11:13]    # "20" - the 2 chars at index 11 and 12
age_num = int(age_str)     # 20  - actual number
```

> **Watch out.** Why `[11:13]` and NOT `[11:12]`?
> - `[11:13]` gives indexes 11 and 12 (stop=13 is NOT included, so you get 11 and 12).
> - `[11:12]` gives ONLY index 11 (just one character).
> This trips people up. Remember: **stop is exclusive.**

---

### Tool C: `Counter` for building a frequency map in one line

`Counter` walks through your data and counts each item for you.

```python
from collections import Counter

Counter("hello")
# Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})

Counter([1, 1, 2, 3, 3, 3])
# Counter({3: 3, 1: 2, 2: 1})
```

You use it like a dictionary.

```python
c = Counter("mississippi")
c['i']         # 4
c['z']         # 0  (missing key gives 0, NOT a KeyError)
```

> **Silly mental model.** `Counter` is like a Pokemon Professor. You hand it a list of Pokemon you caught. It hands back a card saying "Pikachu: 3, Charmander: 1, Bulbasaur: 2." That card IS the frequency map.

**When to use it.**
- "Do these two strings have the same letters?" Compare two Counters with `==`.
- "Which letter appears most often?" Use `c.most_common(1)`.
- "How many of each item?" Use `Counter(items)`.

**The killer move for anagrams.**

```python
Counter("listen") == Counter("silent")    # True
```

#### Iterating a Counter with `.items()`

A Counter is a dictionary. `.items()` gives `(key, count)` pairs.

```python
c = Counter("hello")
for letter, count in c.items():
    print(letter, count)
# h 1
# e 1
# l 2
# o 1
```

This is how you find specific items, like "the one with count 1" or "the one with count above some threshold."

```python
# Find the letter that appears exactly once
c = Counter("aabcc")
for letter, count in c.items():
    if count == 1:
        print(letter)        # b
```

#### `.most_common(n)` returns a list of tuples

```python
c = Counter("mississippi")

c.most_common(2)        # [('i', 4), ('s', 4)]
c.most_common(1)        # [('i', 4)]
c.most_common(1)[0]     # ('i', 4)     - the first tuple
c.most_common(1)[0][0]  # 'i'          - just the value
c.most_common(1)[0][1]  # 4            - just the count
```

> **Watch out.** `most_common(1)` does NOT return the value directly. It returns a LIST containing ONE tuple. You need `[0][0]` to dig out the value.

#### Counter arithmetic (add, subtract, intersect, union)

Counters can do math with each other.

```python
need = Counter("aab")     # {'a': 2, 'b': 1}
have = Counter("ab")      # {'a': 1, 'b': 1}

need + have    # Counter({'a': 3, 'b': 2})   - add counts
need - have    # Counter({'a': 1})           - subtract (negatives DROPPED)
need & have    # Counter({'a': 1, 'b': 1})   - min of each (intersection)
need | have    # Counter({'a': 2, 'b': 1})   - max of each (union)
```

> **Watch out.** Subtraction drops keys with zero or negative results. `Counter("ab") - Counter("aab")` is just `Counter()` (empty), not `Counter({'a': -1})`.

**Why this matters.** Two killer one-liners use subtraction:

```python
# "Can ransom_note be built from magazine?"
not (Counter(ransom) - Counter(magazine))    # True if magazine has enough of every letter

# "What extra letter did t add to s?"
diff = Counter(t) - Counter(s)               # one entry, the extra letter
extra = list(diff.keys())[0]
```

The phrase `list(diff.keys())[0]` reads as "give me a list of all keys in `diff`, then take the first one." Use this when a dict has exactly one key and you want its value.

---

### Tool D: Running max (or running min)

You walk through items. You keep track of the biggest one so far.

```python
nums = [1, 0, 1, 1, 1, 0, 1, 1]

best = 0       # biggest streak we have seen
streak = 0     # current streak length

for x in nums:
    if x == 1:
        streak += 1
        best = max(best, streak)
    else:
        streak = 0             # zero breaks the streak

# best is 3
```

The key trick is `best = max(best, streak)`. This says "keep `best` as the bigger of the two."

**When to use it.** When the problem asks for the "longest", "max", "biggest", or "highest" of something.

> **Silly mental model.** Think of a Snapchat streak. You keep going as long as nothing breaks it. If you miss a day, your streak resets to 0. But your best streak EVER stays remembered.

---

### Tool E: Common Python built-ins

These functions come with Python. You will use them in nearly every problem.

#### Math built-ins

```python
sum([1, 2, 3])     # 6     (adds all items)
min([4, 2, 7])     # 2     (smallest)
max([4, 2, 7])     # 7     (largest)
abs(-5)            # 5     (absolute value, makes negatives positive)
len([1, 2, 3])     # 3     (how many items)
```

These work on lists, tuples, strings, and generators (see below). All run in O(n) time.

#### Logical built-ins: `all()` and `any()`

```python
all([True, True, False])    # False  (one is False)
all([True, True, True])     # True   (every item is True)

any([False, False, True])   # True   (at least one is True)
any([False, False, False])  # False  (no True at all)
```

`all` and `any` are how you check conditions across a whole list.

```python
nums = [1, 2, 3]
all(x > 0 for x in nums)       # True   (every number is positive)
any(x > 10 for x in nums)      # False  (none is bigger than 10)
```

#### Conversion built-ins

```python
int("123")          # 123       (string -> int)
str(123)            # "123"     (int -> string)
list("abc")         # ['a', 'b', 'c']     (string -> list of chars)
list((1, 2, 3))     # [1, 2, 3]            (tuple -> list)
set([1, 2, 1, 3])   # {1, 2, 3}            (removes duplicates)
tuple([1, 2, 3])    # (1, 2, 3)
```

#### `in` and `not in` (membership)

```python
3 in [1, 2, 3]              # True
5 not in [1, 2, 3]          # True

'a' in "apple"              # True
'z' not in "apple"          # True

'name' in {'name': 'Anna'}  # True   (checks KEYS of a dict, not values)
```

> **Watch out.** `in` is **fast** for sets and dicts (O(1)). It is **slow** for lists and strings (O(n) scan). If you need many membership checks, convert to a set first.

```python
# SLOW: O(n * m)
for word in words:
    if word in big_list_of_strings:
        ...

# FAST: O(n)
allowed = set(big_list_of_strings)
for word in words:
    if word in allowed:
        ...
```

#### `set()` for duplicate removal and fast membership

```python
nums = [1, 2, 3, 2, 1]
unique = set(nums)          # {1, 2, 3}    (duplicates removed)
len(unique) != len(nums)    # True         (so duplicates existed)
```

This is the one-liner for "contains duplicate":

```python
def contains_duplicate(nums):
    return len(set(nums)) != len(nums)
```

Add one item to a set with `.add()`.

```python
seen = set()           # empty set
seen.add(40)           # seen is now {40}
seen.add(40)           # still {40}, sets ignore duplicates
seen.add(7)            # seen is now {40, 7}
```

> **Why.** Use `.add()` when you walk through items and want to remember which ones you have seen. The "seen" set grows as you go.

#### List concatenation with `+`

```python
[1, 2] + [3, 4]    # [1, 2, 3, 4]    (new list)

# Useful trick: double a list
nums = [1, 2, 3]
nums + nums        # [1, 2, 3, 1, 2, 3]
```

#### `sorted()` for ordering

`sorted(x)` returns a NEW list with the items in order. The original is not changed.

```python
sorted([3, 1, 2])           # [1, 2, 3]            (ascending by default)
sorted([3, 1, 2], reverse=True)   # [3, 2, 1]      (descending)
sorted("cba")               # ['a', 'b', 'c']      (works on strings too)

nums = [3, 1, 2]
sorted(nums)                # [1, 2, 3]
nums                        # [3, 1, 2]            (original untouched)
```

> **Time cost.** `sorted` runs in O(n log n). This is slower than a single O(n) walk but faster than O(n²) brute force. Reach for it when you need items in order.

Two common reasons to sort:
1. You want to look at items from smallest to largest (or biggest first).
2. You want pairs/groups that share a property to sit next to each other (e.g. anagrams sort to the same string).

```python
# Sort the characters of a word to get a "shape" key
sorted("eat")               # ['a', 'e', 't']
"".join(sorted("eat"))      # 'aet'
"".join(sorted("tea"))      # 'aet'    (same key -> same anagram group)
```

#### Generator expressions (one-line loops without building a list)

A **generator expression** looks like a list comprehension but uses `( )` instead of `[ ]`. It does NOT build a list. It produces values one at a time, so it saves memory.

```python
# List comprehension (builds a full list in memory)
[x * 2 for x in [1, 2, 3]]     # [2, 4, 6]

# Generator expression (no list built)
(x * 2 for x in [1, 2, 3])     # <generator object>
```

When you pass a generator to `sum`, `max`, `min`, `any`, `all`, you can DROP the parentheses:

```python
sum(x * 2 for x in [1, 2, 3])           # 12
max(len(s) for s in ["hi", "hello"])    # 5
all(x > 0 for x in [1, 2, 3])           # True
any(c == 'a' for c in "banana")         # True
```

This is cleaner than building a list just to throw it away.

#### List comprehensions - same idea, square brackets

A **list comprehension** looks just like a generator expression but with `[ ]` instead of `( )`. It DOES build a list. Use it when you actually want a list back.

```python
[x * 2 for x in [1, 2, 3]]             # [2, 4, 6]              (builds a list)
(x * 2 for x in [1, 2, 3])             # <generator object>     (no list)
```

Both forms support a trailing `if` to filter items.

```python
nums = [-2, -1, 0, 1, 2]
[x for x in nums if x > 0]             # [1, 2]                 (keep only positives)
[i for i, w in enumerate(["hi","ok"]) if "i" in w]   # [0]      (indexes of words with 'i')
```

> **Rule of thumb.** `[...]` builds a list. `(...)` is a generator (no list, saves memory). Inside `sum`, `max`, `min`, `all`, `any` you can drop the parens of the generator.

#### `split()` (preview - full coverage in Chapter 2)

```python
"hello world".split()      # ['hello', 'world']   (split on whitespace)
"a,b,c".split(",")         # ['a', 'b', 'c']      (split on a specific char)
```

You need this for problems that count words in a sentence.

#### Tiny math: counting pairs (the "choose 2" formula)

If you have `k` items and want to count how many UNORDERED pairs you can pick, the answer is:

```
k * (k - 1) / 2
```

Examples:
- 2 items: `2 * 1 / 2` = 1 pair
- 3 items: `3 * 2 / 2` = 3 pairs (1-2, 1-3, 2-3)
- 4 items: `4 * 3 / 2` = 6 pairs

In Python, use integer division so the answer is an integer:

```python
pairs = k * (k - 1) // 2
```

This shows up in "good pairs" problems (P8).

---

## Worked Examples

The four problems you got stuck on, solved in the Alex Xu format:
**Problem -> Intuition -> Visual -> Code -> Complexity -> Edge cases.**

---

### Example 1. Max Consecutive Ones (LC 485)

#### Problem

> Given a list of 0s and 1s, return the **length of the longest run of 1s** in a row.

```
Input:  [1, 1, 0, 1, 1, 1]
Output: 3
```

#### Intuition

Think of a Snapchat streak. Every day you send a snap, your streak goes up. The moment you miss a day, your streak resets to 0. But your best streak EVER is remembered forever.

That is the exact problem. Each `1` is a "snap day." Each `0` is a "missed day."

We need:
- `streak`: the current streak. Goes up on 1, resets on 0.
- `best`: the biggest streak we have seen so far.

We walk through `nums` once. After each item, we make sure `best` is up to date.

This is the **Running Max pattern** (Tool D).

#### Visual walkthrough

Trace `[1, 1, 0, 1, 1, 1]`:

| Step | Looking at | streak | best | Why |
|------|-----------|--------|------|-----|
| start | -    | 0      | 0    | initial state |
| 1     | `1`  | 1      | 1    | saw a 1, streak goes up, new best |
| 2     | `1`  | 2      | 2    | streak goes up, new best |
| 3     | `0`  | 0      | 2    | zero, streak resets, best unchanged |
| 4     | `1`  | 1      | 2    | streak starts again, not bigger than best |
| 5     | `1`  | 2      | 2    | still not bigger than best |
| 6     | `1`  | 3      | 3    | new best |

Return `3`.

#### Code

```python
def find_max_consecutive_ones(nums):
    best = 0                          # longest run we have seen
    streak = 0                        # length of current run

    for x in nums:                    # walk through each number
        if x == 1:
            streak += 1               # extend the streak
            if streak > best:
                best = streak         # new record
        else:
            streak = 0                # zero breaks the streak

    return best
```

#### Complexity

**Time: O(n)** where `n` is the length of `nums`.

> **Why.** We have one `for` loop that walks through `nums` once. Inside the loop everything is O(1) (a comparison, an `+= 1`, an `if`). So total is n times O(1), which is O(n).

**Space: O(1)** (constant).

> **Why.** We only use 2 extra variables (`best` and `streak`). Their size does NOT grow with the input. No extra lists, no extra dicts.

#### Edge cases

| Input | Expected | Why it matters |
|-------|----------|----------------|
| `[]` | `0` | empty input, best stays 0 |
| `[0, 0, 0]` | `0` | no 1s at all |
| `[1, 1, 1]` | `3` | all 1s, streak never resets |
| `[1]` | `1` | one item |
| `[0, 1, 0]` | `1` | single 1 surrounded by 0s |

---

### Example 2. Score of a String (LC 3110)

#### Problem

> The **score** of a string is the sum of the absolute differences between every pair of adjacent (next-door) characters.

```
Input:  "hello"
Output: 13
```

#### Intuition

Imagine every pair of next-door letters is in a tiny boxing match. The "damage" is how far apart their ASCII codes are. We want the total damage from all the matches.

`"hello"` has 5 letters, so 4 adjacent pairs:

```
h - e   (round 1)
e - l   (round 2)
l - l   (round 3)
l - o   (round 4)
```

For each pair, we want `abs(ord(a) - ord(b))` (the gap, made positive with `abs`).

Then we accumulate all those gaps into a `total`.

This is the **Walk and Sum pattern** (using Tool A: `ord`).

#### Visual walkthrough

```
"hello" -> ord:  h=104  e=101  l=108  l=108  o=111
```

| Step | Pair | `abs(ord - ord)` | total |
|------|------|-------------|-------|
| start | -          | -    | 0  |
| 1     | (h, e) is (104, 101) | 3 | 3  |
| 2     | (e, l) is (101, 108) | 7 | 10 |
| 3     | (l, l) is (108, 108) | 0 | 10 |
| 4     | (l, o) is (108, 111) | 3 | 13 |

Return `13`.

#### Code

```python
def score_of_string(s):
    total = 0                                       # running sum

    for i in range(len(s) - 1):                     # i goes 0, 1, ..., len(s)-2
        diff = abs(ord(s[i]) - ord(s[i+1]))         # ASCII gap between adjacent chars
        total += diff                               # accumulate

    return total
```

#### Why `range(len(s) - 1)` and NOT `range(len(s))`

Inside the loop we use `s[i+1]`. If `i` is the LAST index, then `i+1` is out of bounds and Python crashes. So we stop one early.

For `"hello"` (length 5):
- `range(5 - 1)` is `range(4)`, which gives `0, 1, 2, 3`.
- The last iteration uses `s[3]` and `s[4]`. Both exist.

#### Complexity

**Time: O(n)** where `n` is the length of `s`.

> **Why.** One loop through `s` (well, almost - n-1 iterations). Inside: `ord` is O(1), `abs` is O(1), `+=` is O(1). Total is (n-1) times O(1), which is O(n). We drop the `-1` per Rule 4.

**Space: O(1)**.

> **Why.** Just `total` and `diff`. No extra storage that grows with input.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `"a"` | `0` | only one letter, no pairs, no score |
| `"ab"` | `1` | one pair: `abs(97-98)` is 1 |
| `"aa"` | `0` | pair of same letters, diff is 0 |
| `"za"` | `25` | big gap: `abs(122-97)` is 25 |

---

### Example 3. Number of Senior Citizens (LC 2678)

#### Problem

> Each string in `details` is a passenger ID, like `"1313579440F2036"`. The format is:

```
 1313579440 F 20 36
 ----------         phone (10 digits)
            -       gender (1 char)
              --    age (2 digits, at index 11 and 12)
                 -- seat (2 digits)
```

> Count how many passengers have age **strictly greater than 60**.

```
Input:  ["7868190130M7522", "5303914400F9211", "9273338290F4010"]
Output: 2
```

The ages are 75, 92, 40. Two are greater than 60.

#### Intuition

Imagine you are an airport security officer. A line of passengers walks past. Each one hands you an ID card. You only care about ONE thing: their age.

For each card:
1. Find the age digits (always at index 11 and 12).
2. Convert those 2 characters into a number.
3. If the number is > 60, count this passenger.

Pure **Walk and Count pattern**.

> **Watch out.** `person[11:13]` gives the chars at index 11 AND 12 (stop=13 is NOT included).

#### Visual walkthrough

```
person:        "7868190130M7522"
indexes:        0  1  2  3  4  5  6  7  8  9 10 11 12 13 14
                                                  ^  ^
                                               age here
```

| Person string | `person[11:13]` | `int(...)` | > 60? | count |
|---------------|-----------------|------------|-------|-------|
| `7868190130M7522` | `"75"` | 75 | yes | 1 |
| `5303914400F9211` | `"92"` | 92 | yes | 2 |
| `9273338290F4010` | `"40"` | 40 | no  | 2 |

Return `2`.

#### Code

```python
def count_seniors(details):
    count = 0                              # how many seniors

    for person in details:                 # one passenger string at a time
        age = int(person[11:13])           # grab 2 chars, convert to int
        if age > 60:
            count += 1

    return count
```

#### Complexity

**Time: O(n)** where `n` is the number of passengers.

> **Why.** One loop through `details`. Inside: slicing 2 characters is O(1) (constant, only 2 chars), `int()` on a 2-char string is O(1), the `if` is O(1). Total is n times O(1), which is O(n).

**Space: O(1)**.

> **Why.** Only `count` and `age`. No data structure that grows with input.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `[]` | `0` | no passengers |
| `["...M6000"]` | `0` | age 60 is NOT > 60 (boundary check) |
| `["...M6100"]` | `1` | age 61 IS > 60 |
| `["...F9900"]` | `1` | very old, still works |

---

### Example 4. Valid Anagram (LC 242)

#### Problem

> Two words are **anagrams** if they have the **same letters in the same amounts**, just shuffled. Return `True` or `False`.

```
Input:  s = "anagram", t = "nagaram"
Output: True

Input:  s = "rat", t = "car"
Output: False
```

#### Intuition

Imagine two Lego boxes. Anagram means both boxes have the exact same pieces (same color, same count), just arranged differently.

So we ask: **do `s` and `t` have the same frequency map?**

If `s = "anagram"`, its frequency map is `{a:3, n:1, g:1, r:1, m:1}`.
If `t = "nagaram"`, its frequency map is `{a:3, n:1, g:1, r:1, m:1}`.

Same map means anagram.

`Counter` builds the frequency map for us. Then we compare with `==`.

This is the **Frequency Equality pattern** (Tool C).

#### Visual walkthrough

```
s = "anagram"                    t = "nagaram"

Counter(s):                       Counter(t):
  a is 3                            a is 3
  n is 1                            n is 1
  g is 1                            g is 1
  r is 1                            r is 1
  m is 1                            m is 1

Counter(s) == Counter(t)?  YES, return True
```

#### Code (the easy way)

```python
from collections import Counter

def is_anagram(s, t):
    return Counter(s) == Counter(t)
```

That is the whole thing. One line. This is the killer move for `Counter`.

#### Code (the long way, for understanding)

If you do not use `Counter`, you build the map by hand.

```python
def is_anagram(s, t):
    if len(s) != len(t):
        return False                       # different lengths, not anagrams

    freq = {}                              # frequency map for s

    for ch in s:                           # count letters in s
        freq[ch] = freq.get(ch, 0) + 1

    for ch in t:                           # subtract letters in t
        if ch not in freq:
            return False
        freq[ch] -= 1
        if freq[ch] < 0:
            return False                   # too many of this letter in t

    return True
```

> **Python note.** What is `freq.get(ch, 0)`? It says "look up `ch` in `freq`. If it is NOT there, give me `0` instead of crashing." Without this, the first time we see a letter we would get a KeyError.

#### Complexity

**Time: O(n)** where `n` is the length of `s` (or `t`).

> **Why.** `Counter(s)` walks through `s` once: O(n). Same for `Counter(t)`: O(n). Comparing two Counters checks each key-value pair: O(unique letters), which is at most O(n). Total is O(n) + O(n) + O(n) = O(3n) = O(n) (Rule 4: drop constants).

**Space: O(k)** where `k` is the number of unique characters.

> **Why.** Each Counter stores one entry per unique letter. If `s` has only lowercase English letters, `k` is at most 26, so space is technically O(1). For arbitrary characters, it is O(n) worst case.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `s=""`, `t=""` | `True` | empty equals empty |
| `s="a"`, `t="a"` | `True` | same single letter |
| `s="a"`, `t="b"` | `False` | different letters |
| `s="aa"`, `t="a"` | `False` | different lengths |
| `s="ab"`, `t="ba"` | `True` | classic anagram |

---

## Pattern Recognition

When you see a new problem, ask these questions. The answer points you to the right tool.

| If the question says... | Use this |
|---------------------------|-------------|
| "longest run of..." or "most consecutive..." | Running max + streak counter (Tool D) |
| "how many of each..." | `Counter` (Tool C) |
| "same letters in different order" or "anagram" | `Counter(a) == Counter(b)` |
| "compare two letters as numbers" | `ord()` (Tool A) |
| "extract a fixed-position piece of a string" | Slicing `s[a:b]` (Tool B) |
| "convert string to number" | `int(...)` (Tool E) |
| "count how many satisfy [condition]" | One `count` variable + an `if` |
| "running total" or "sum of..." | `total += x` inside a loop, or `sum(...)` (Tool E) |
| "first unique..." | Build a `Counter`, then loop again to find the first item with count 1 |
| "most common..." | `Counter(items).most_common(1)[0][0]` (Tool C) |
| "duplicates exist?" | `len(set(nums)) != len(nums)` (Tool E) |
| "find the extra letter / missing letter" | `Counter(t) - Counter(s)`, then `list(diff.keys())[0]` |
| "can we build X from Y's letters?" | `not (Counter(X) - Counter(Y))` |
| "all of these satisfy / every one of them..." | `all(condition for x in items)` (Tool E) |
| "any of these satisfy / at least one..." | `any(condition for x in items)` |
| "split a sentence into words" | `sentence.split()` (Tool E preview) |
| "count UNORDERED pairs from k items" | `k * (k - 1) // 2` (Tool E) |
| "join two lists end to end" | `list1 + list2` (Tool E) |
| "average of n numbers" | `sum(nums) / len(nums)` |
| "smallest / largest in a list" | `min(nums)` / `max(nums)` (Tool E) |

---

## Practice Problems

Try these on your own. Do NOT look at the solutions until you have written your own code.

If you get stuck for more than 15 minutes, go back to the worked examples and re-read them. The pattern is always the same.

Difficulty tags: **easy**, **medium**, **harder**.

---

**P1. Single Number (LC 136)** - easy
Every element in `nums` appears exactly twice, except for ONE element. Find that one.
```
Input:  [4, 1, 2, 1, 2]
Output: 4
```

**P2. Majority Element (LC 169)** - easy
Find the element that appears more than `n / 2` times. The answer always exists.
```
Input:  [3, 2, 3]
Output: 3
```

**P3. First Unique Character in a String (LC 387)** - medium
Return the INDEX of the first character that does not repeat. Return `-1` if none.
```
Input:  "leetcode"
Output: 0     (the 'l' is the first one that does not repeat)
```

**P4. Ransom Note (LC 383)** - medium
Can `ransom_note` be built from the letters in `magazine`? Each letter in magazine can be used at most once.
```
Input:  ransom_note = "aa", magazine = "aab"
Output: True
```

**P5. Find the Difference (LC 389)** - medium
`t` is `s` with one extra letter added (and shuffled). Find the extra letter.
```
Input:  s = "abcd", t = "abcde"
Output: "e"
```

**P6. Sum of Unique Elements (LC 1748)** - medium
Return the sum of elements that appear exactly once in `nums`.
```
Input:  [1, 2, 3, 2]
Output: 4   (1 and 3 are unique, 1 + 3 = 4)
```

**P7. Count Items Matching a Rule (LC 1773)** - medium
Each item is `[type, color, name]`. Given `(rule_key, rule_value)`, count items matching the rule. Rule key is `"type"`, `"color"`, or `"name"`.
```
Input:  items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
        rule_key = "color", rule_value = "silver"
Output: 1
```

**P8. Number of Good Pairs (LC 1512)** - medium
A pair `(i, j)` is "good" if `nums[i] == nums[j]` and `i < j`. Count the good pairs.
```
Input:  [1, 2, 3, 1, 1, 3]
Output: 4
```

**P9. Find Words Containing Character (LC 2942)** - easy
Return the indexes of all words that contain the character `x`.
```
Input:  words = ["leet","code"], x = "e"
Output: [0, 1]
```

**P10. Maximum Number of Words Found in Sentences (LC 2114)** - easy
Each string is a sentence. Return the highest word count of any sentence.
```
Input:  ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
```

**P11. Count the Number of Consistent Strings (LC 1684)** - medium
A word is "consistent" if all of its letters appear in `allowed`. Count the consistent words.
```
Input:  allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
```

**P12. How Many Numbers Are Smaller Than the Current Number (LC 1365)** - harder
For each `nums[i]`, count how many OTHER numbers are smaller than it.
```
Input:  [8, 1, 2, 2, 3]
Output: [4, 0, 1, 1, 3]
```

**P13. Average Salary Excluding Min and Max (LC 1491)** - easy
Return the average AFTER removing the minimum and maximum.
```
Input:  [4000, 3000, 1000, 2000]
Output: 2500.0
```

**P14. Contains Duplicate (LC 217)** - easy
You solved this. Re-do it now using the pattern.
```
Input:  [1, 2, 3, 1]
Output: True
```

**P15. Concatenation of Array (LC 1929)** - easy
You solved this too. Re-do it.
```
Input:  [1, 2, 1]
Output: [1, 2, 1, 1, 2, 1]
```

---

## Solutions

> **Stop.** Did you try every problem yourself first? If not, scroll back up. Reading solutions without trying first is the number 1 way to feel like you understand and then fail in the interview.

---

### P1. Single Number

```python
from collections import Counter

def single_number(nums):
    c = Counter(nums)                    # frequency map
    for num, count in c.items():         # walk through (key, value) pairs
        if count == 1:
            return num
```

**Key insight.** Find the item whose count is 1. Counter does the counting. Then we loop to find the one with count 1.

**Complexity.** O(n) time (Counter walks once, loop walks once), O(n) space (Counter stores at most n items).

> **Bonus.** There is a clever XOR trick that uses O(1) space. We will see it in Chapter 29. For now, Counter is great.

---

### P2. Majority Element

```python
from collections import Counter

def majority_element(nums):
    c = Counter(nums)
    threshold = len(nums) // 2           # "more than half"
    for num, count in c.items():
        if count > threshold:
            return num
```

One-liner using `most_common`:

```python
def majority_element(nums):
    return Counter(nums).most_common(1)[0][0]
    # most_common(1) returns [('value', count)]
    # [0] takes the first pair, which is ('value', count)
    # [0] takes the value (not the count)
```

**Key insight.** Same pattern as P1 with a different condition.

**Complexity.** O(n) time, O(n) space.

---

### P3. First Unique Character in a String

```python
from collections import Counter

def first_uniq_char(s):
    c = Counter(s)                       # frequency of each letter

    for i, ch in enumerate(s):           # walk s WITH index
        if c[ch] == 1:
            return i                     # first letter with count 1

    return -1
```

**Key insight.** TWO passes needed.
1. First pass builds the frequency map.
2. Second pass walks `s` IN ORDER to find the first item with frequency 1.

You cannot use `c.most_common()` here because that does not preserve original string order.

`enumerate(s)` gives `(index, character)` pairs. Use it whenever you need both.

**Complexity.** O(n) time (two passes through n), O(k) space where k is the number of unique characters (at most 26 for lowercase English).

---

### P4. Ransom Note

```python
from collections import Counter

def can_construct(ransom_note, magazine):
    need = Counter(ransom_note)          # what we need
    have = Counter(magazine)             # what we have

    for letter, count in need.items():
        if have[letter] < count:
            return False                 # not enough of this letter

    return True
```

Shorter, using Counter subtraction:

```python
def can_construct(ransom_note, magazine):
    return not (Counter(ransom_note) - Counter(magazine))
```

**Key insight.** `need - have` keeps only letters where `need` has MORE than `have`. If that result is empty, magazine has enough of everything.

> **Python note.** `not Counter()` is `True` (empty Counter is "falsy"). `not Counter({'a': 1})` is `False`.

**Complexity.** O(n + m) time, O(n + m) space.

---

### P5. Find the Difference

```python
from collections import Counter

def find_the_difference(s, t):
    diff = Counter(t) - Counter(s)       # what t has extra
    return list(diff.keys())[0]          # the only key
```

**Key insight.** `t` is `s` plus one letter. Subtract the maps. The result has exactly one letter with count 1.

**Complexity.** O(n) time, O(n) space.

---

### P6. Sum of Unique Elements

```python
from collections import Counter

def sum_of_unique(nums):
    c = Counter(nums)
    total = 0
    for num, count in c.items():
        if count == 1:
            total += num
    return total
```

One line:

```python
def sum_of_unique(nums):
    return sum(n for n, c in Counter(nums).items() if c == 1)
```

**Key insight.** Sum the keys whose count is 1. Same pattern as P1 and P2.

**Complexity.** O(n) time, O(n) space.

---

### P7. Count Items Matching a Rule

```python
def count_matches(items, rule_key, rule_value):
    # tiny lookup table: "type" is 0, "color" is 1, "name" is 2
    key_index = {"type": 0, "color": 1, "name": 2}[rule_key]

    count = 0
    for item in items:
        if item[key_index] == rule_value:
            count += 1
    return count
```

**Key insight.** The `rule_key` tells you WHICH position in each item to check. A tiny dict maps the string `"color"` to the index `1`. Much cleaner than three `if/elif` branches.

> **Python note.** We build a tiny dict and immediately look up a key in it. Same as: `d = {"type": 0, "color": 1, "name": 2}; key_index = d[rule_key]` written on one line. The `[rule_key]` right after `{...}` does the lookup on the dict we just made.

**Complexity.** O(n) time, O(1) space.

---

### P8. Number of Good Pairs

```python
from collections import Counter

def num_identical_pairs(nums):
    c = Counter(nums)
    total = 0
    for num, count in c.items():
        # pairs you can pick from `count` items = count * (count - 1) / 2
        total += count * (count - 1) // 2
    return total
```

**Key insight.** If a number appears `k` times, the number of pairs you can pick is `k * (k-1) / 2`. (This is the "choose 2" formula. More in Chapter 29.)

Example: `[1, 1, 1]` has three 1s. Pairs: (0,1), (0,2), (1,2). That is `3 * 2 / 2`, which is 3.

Brute force alternative (slower but simpler to think about):

```python
def num_identical_pairs(nums):
    count = 0
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] == nums[j]:
                count += 1
    return count
```

This works but is O(n²). The Counter version is O(n).

**Complexity (Counter version).** O(n) time, O(n) space.

---

### P9. Find Words Containing Character

```python
def find_words_containing(words, x):
    result = []
    for i, word in enumerate(words):
        if x in word:
            result.append(i)
    return result
```

One line:

```python
def find_words_containing(words, x):
    return [i for i, w in enumerate(words) if x in w]
```

**Key insight.** `x in word` checks if a character is in a string. Pure "walk and collect" pattern.

**Complexity.** O(n times m) time where n is the number of words and m is average word length. O(n) space for the result.

---

### P10. Maximum Number of Words Found in Sentences

```python
def most_words_found(sentences):
    best = 0
    for s in sentences:
        words = s.split()                # split on whitespace
        if len(words) > best:
            best = len(words)
    return best
```

One line:

```python
def most_words_found(sentences):
    return max(len(s.split()) for s in sentences)
```

**Key insight.** `split()` with no arguments splits on whitespace. Then it is the running max pattern.

> **Python note.** `max(generator)` is clean. `max(len(s.split()) for s in sentences)` reads as "the max of (length of split) for every s."

**Complexity.** O(total characters) time, O(longest sentence) space.

---

### P11. Count the Number of Consistent Strings

```python
def count_consistent(allowed, words):
    allowed_set = set(allowed)           # fast membership (O(1))
    count = 0
    for word in words:
        # check if EVERY letter of word is in allowed_set
        if all(ch in allowed_set for ch in word):
            count += 1
    return count
```

**Key insight.** `all(...)` returns `True` if every item in the iterable is truthy. We check that every char of `word` is allowed.

> **Python note.** Why `set(allowed)` and not just `allowed`? Because `ch in allowed` on a string is O(length of allowed). `ch in set` is O(1). Big speedup.

**Complexity.** O(n times m) time, O(k) space.

---

### P12. How Many Numbers Are Smaller Than the Current Number

Brute force version:

```python
def smaller_numbers_than_current(nums):
    result = []
    for i, x in enumerate(nums):
        count = 0
        for j, y in enumerate(nums):
            if i != j and y < x:
                count += 1
        result.append(count)
    return result
```

**Key insight.** Brute force is OK here. Outer loop picks each number. Inner loop counts how many others are smaller.

**Complexity.** O(n²) time (nested loops), O(n) space.

Faster version using sorting (O(n log n)):

> **Stretch.** `sorted()` is in Tool E above, so the sorting step is in reach. The "rank dictionary" trick (using the first index where each value appears in sorted order as its smaller-count) is the new idea — a clean example of trading O(n²) for O(n log n) by sorting first. Try it after the brute force feels easy.

```python
def smaller_numbers_than_current(nums):
    sorted_nums = sorted(nums)
    # for each x, "smaller count" = the FIRST position where x appears in sorted order
    rank = {}
    for i, x in enumerate(sorted_nums):
        if x not in rank:
            rank[x] = i        # first occurrence index = count of smaller numbers
    return [rank[x] for x in nums]
```

We will cover sorting tricks in Chapter 13.

---

### P13. Average Salary Excluding Min and Max

```python
def average(salary):
    total = sum(salary) - min(salary) - max(salary)
    return total / (len(salary) - 2)
```

**Key insight.** Use built-ins. `sum`, `min`, `max`, `len` are all O(n). Total: O(n).

**Complexity.** O(n) time, O(1) space.

> **Python note.** Why no loop? Built-in functions ARE loops, just written in C inside Python. Same time complexity, faster and cleaner.

---

### P14. Contains Duplicate

```python
def contains_duplicate(nums):
    return len(set(nums)) != len(nums)
```

**Key insight.** A `set` removes duplicates. If the set is smaller than the list, duplicates existed.

**Complexity.** O(n) time, O(n) space.

Longer version (walks and tracks):

```python
def contains_duplicate(nums):
    seen = set()
    for x in nums:
        if x in seen:
            return True
        seen.add(x)
    return False
```

This version can return early (faster in practice when duplicates appear near the start).

---

### P15. Concatenation of Array

```python
def get_concatenation(nums):
    return nums + nums         # list + list joins them
```

More explicit:

```python
def get_concatenation(nums):
    n = len(nums)
    ans = [0] * (2 * n)        # pre-allocate
    for i in range(n):
        ans[i] = nums[i]
        ans[i + n] = nums[i]
    return ans
```

**Key insight.** `+` on two lists joins them.

**Complexity.** O(n) time, O(n) space.

---

## Flashcards

Cover the right column. Try to answer. Then check.

| Front | Back |
|-------|------|
| `ord('a')` returns? | `97` |
| `chr(65)` returns? | `'A'` |
| Difference between count and frequency? | Count is ONE number. Frequency is MANY numbers, one per item. |
| Shape of "Walk and Count"? | 1) set up answer, 2) loop input, 3) update answer, 4) return |
| `s[11:13]` gives which characters? | Indexes 11 and 12. Stop is NOT included. |
| One-line anagram check? | `Counter(s) == Counter(t)` |
| Why `range(len(s) - 1)` when using `s[i+1]`? | If `i` is the last index, `i+1` is out of range. Stop one early. |
| `Counter("aab")['z']` returns? | `0` (no KeyError) |
| When you see "longest run of...", which pattern? | Running max + streak counter. Reset streak when broken. |
| When you see "first unique...", how many passes? | Two. First counts, second walks in order. |
| `enumerate(s)` gives you? | Pairs of `(index, item)` |
| `int(s[11:13])` does what? | Grabs 2 chars, converts to int. |
| `freq.get(ch, 0)` does what? | Returns `freq[ch]` if it exists, else `0` (no crash). |
| Map `'a'`, `'b'`, `'c'` to `0`, `1`, `2`? | `ord(ch) - ord('a')` |
| One loop over n items, time? | O(n) |
| Two nested loops over n items, time? | O(n²) |
| `x in set`, time? | O(1) average |
| `x in list`, time? | O(n) (it scans) |
| `sorted(nums)`, time? | O(n log n) |
| Does `sorted(nums)` change `nums`? | No. It returns a NEW sorted list. Original is untouched. |
| How to sort biggest to smallest? | `sorted(nums, reverse=True)` |
| Anagram-group key for a word? | `"".join(sorted(word))` (anagrams sort to the same string) |
| Space complexity of a Counter on n items? | O(n) worst case (or O(k) if k unique items) |
| `c.items()` on a Counter gives? | `(key, count)` pairs |
| `c.most_common(1)[0][0]` returns? | The single most common value (not its count) |
| `Counter("aab") - Counter("ab")` is? | `Counter({'a': 1})` (negatives are dropped) |
| `not Counter()` is? | `True` (empty Counter is falsy) |
| `list({'a': 1, 'b': 2}.keys())[0]` returns? | The first key (`'a'`) |
| `sum(nums)` does? | Adds all items, O(n) |
| `min(nums)`, `max(nums)`? | Smallest / largest, O(n) |
| `abs(-5)` returns? | `5` |
| Difference between `[x for x in ...]` and `(x for x in ...)`? | Square brackets build a list. Parens make a generator (no list). |
| When can you drop the parens of a generator? | Inside `sum`, `max`, `min`, `all`, `any`. |
| `all(x > 0 for x in nums)` returns? | `True` if every number is positive |
| `any(x == 5 for x in nums)` returns? | `True` if at least one number equals 5 |
| `len(set(nums)) != len(nums)` checks? | Whether duplicates exist in nums |
| `[1, 2] + [3, 4]` is? | `[1, 2, 3, 4]` (new list) |
| Count UNORDERED pairs from k items? | `k * (k - 1) // 2` |
| `"hello world".split()` returns? | `['hello', 'world']` |
| `items[0][1]` on a list of lists does? | Picks the first inner list, then index 1 of THAT list. |
| Walk a list of records `[[t, c, n], ...]`? | `for item in items:` then `item[0]`, `item[1]`, `item[2]` |

---

## Spaced Repetition Schedule

| Day | Date (fill in) | Task |
|-----|---------------|------|
| 0   | _____ | Read chapter. Do all worked examples on paper. Try all 15 practice problems. |
| 1   | _____ | Review flashcards. Re-do practice problems you got wrong. |
| 3   | _____ | Review flashcards. Pick 3 practice problems at random. Re-solve from scratch. |
| 7   | _____ | Review flashcards. Pick 3 DIFFERENT problems. Re-solve from scratch. |
| 14  | _____ | Final review. If all 3 feel easy, move to Chapter 2. |

**Promotion rule.** You move to Chapter 2 only when you can solve any 3 practice problems from this chapter, picked at random, without looking at the solutions or hints.

---

## What's next

**Chapter 2** covers Sequences in depth: `list` vs `tuple` vs `string` vs `range`. When to pick which, what operations each supports, and the time complexity of every common method.

**Chapter 3** covers Hashing in depth: `dict`, `set`, `defaultdict`, `frozenset`. When O(1) breaks. Three classic hashing patterns straight from the Alex Xu book.


---

# Chapter 2 - Sequences

> Lists, tuples, strings, and ranges. Pick the right one, know what it can do, and learn the time cost of every common operation.

---

## What you will learn

By the end of this chapter, you can:

- Pick the right sequence type (list, tuple, string, range) for any task.
- Use the common methods on each, and know how fast each is.
- Build, filter, and transform lists cleanly (with comprehensions).
- Avoid the silent performance trap of `s += c` in a loop.
- Solve string and list problems using the toolkit below.

You will solve 4 worked examples and 15 practice problems using these skills.

---

## Vocabulary

| Word | Plain meaning | Tiny example |
|------|---------------|--------------|
| Sequence | Anything with an order and an index | list, tuple, string, range |
| Iterable | Something you can loop over with `for` | list, set, dict, string, range, file |
| Mutable | Can be changed after creation | list, dict, set |
| Immutable | Locked after creation | tuple, string, int, float |
| In-place | Change the original, no copy | `nums.sort()` |
| Copy | Make a new object with the same contents | `list(nums)`, `nums[:]` |
| Concatenate | Join two sequences end to end | `[1,2] + [3,4]` is `[1,2,3,4]` |
| Reverse | Flip the order | `[1,2,3]` becomes `[3,2,1]` |
| Sort | Put in order | `[3,1,2]` becomes `[1,2,3]` |
| Lookup | Read a value at a position | `nums[i]`, `s[i]` |

---

## The big picture: which type to pick

The four sequence types serve different jobs.

| Type | When to use | Mutable? | Tiny example |
|------|-------------|----------|--------------|
| **list** `[1,2,3]` | Order matters AND you need to change it | yes | `nums = [10,20,30]` |
| **tuple** `(1,2,3)` | A fixed group of related values (point, RGB color, returning multiple values) | no | `point = (3, 5)` |
| **string** `"abc"` | Text. Names, IDs, sentences, parsing | no | `name = "Anna"` |
| **range** `range(5)` | Just need numbers to loop over | no | `for i in range(10):` |

Decision tree:

```
Do you have text?              -> string
Need to change items?          -> list
Fixed pack of values?          -> tuple
Just numbers for a loop?       -> range
```

> **Silly hook.** List is your closet (you can swap shirts). Tuple is your DNA (locked, defines who you are). String is a chain of beads (locked, but you can copy parts). Range is a lazy list (only makes numbers when you ask).

---

## Python Primer (sequence methods you need)

### List methods (most common)

| Method | What it does | Time |
|--------|--------------|------|
| `nums.append(x)` | Add `x` to the end | O(1) |
| `nums.pop()` | Remove and return the LAST item | O(1) |
| `nums.pop(0)` | Remove and return the FIRST item | O(n) (slow) |
| `nums.insert(i, x)` | Insert `x` at position `i` | O(n) |
| `nums.remove(x)` | Remove the FIRST `x` from the list | O(n) |
| `nums.sort()` | Sort in place | O(n log n) |
| `sorted(nums)` | Return a NEW sorted list | O(n log n) |
| `nums.reverse()` | Reverse in place | O(n) |
| `nums[::-1]` | Return a NEW reversed list | O(n) |
| `nums.count(x)` | Count how many times `x` appears | O(n) |
| `nums.index(x)` | Position of FIRST `x`, or error | O(n) |
| `nums.extend([4,5])` | Add many items to the end | O(k) |
| `len(nums)` | How many items | O(1) |
| `x in nums` | Is `x` in the list? | O(n) |
| `nums[i]` | Get the item at position `i` | O(1) |
| `nums[i] = x` | Set the item at position `i` | O(1) |
| `nums[a:b]` | Slice from `a` to `b-1` | O(b-a) |
| `nums + other` | Concatenate, returns a new list | O(n+m) |

> **Watch out.** `pop(0)` and `insert(0, x)` are SLOW (O(n)) because every item shifts. If you need fast operations at both ends, use `collections.deque` (Chapter 4).

### String methods (most common)

| Method | What it does | Tiny example |
|--------|--------------|--------------|
| `s.lower()` | All lowercase | `"HI".lower()` is `"hi"` |
| `s.upper()` | All uppercase | `"hi".upper()` is `"HI"` |
| `s.strip()` | Remove whitespace from both ends | `"  hi  ".strip()` is `"hi"` |
| `s.split()` | Split on whitespace, returns a list | `"a b c".split()` is `["a","b","c"]` |
| `s.split(",")` | Split on a specific character | `"a,b,c".split(",")` is `["a","b","c"]` |
| `",".join(words)` | Join a list of strings with `,` | `",".join(["a","b"])` is `"a,b"` |
| `s.replace("a", "b")` | Replace ALL `a` with `b` | `"banana".replace("a","X")` is `"bXnXnX"` |
| `s.replace("a", "b", n)` | Replace only the FIRST `n` occurrences | `"banana".replace("a","X",1)` is `"bXnana"` |
| `s.startswith("ab")` | Does s start with this? | `True` or `False` |
| `s.endswith("xy")` | Does s end with this? | `True` or `False` |
| `s.find("ab")` | Index of FIRST `"ab"`, or `-1` | |
| `s.count("a")` | Count of `"a"` in s | |
| `s.isdigit()` | Is every char a digit? | `"123".isdigit()` is `True` |
| `s.isalpha()` | Is every char a letter? | `"abc".isalpha()` is `True` |
| `len(s)` | Length | O(1) |
| `s[i]` | Char at index `i` | O(1) |
| `s[a:b]` | Slice | O(b-a) |
| `"a" + "b"` | Concatenate, makes a NEW string | O(n+m) |

> **Watch out.** Strings are immutable. EVERY method that "changes" a string actually makes a NEW string. `s.lower()` returns a new string. `s` itself is unchanged.

> **Single characters are strings too.** Every method above works on a one-character string. So inside a `for c in s:` loop you can write `c.lower()`, `c.isdigit()`, `c.isalpha()` and they all behave as expected.
>
> ```python
> 'A'.lower()       # 'a'
> '7'.isdigit()     # True
> 'a'.isdigit()     # False
> 'a'.isalpha()     # True
> ```
>
> You will use this when you walk a string char by char and need to ask "is this a digit?" or "are these two chars the same letter ignoring case?"

### Tuple basics

```python
point = (3, 5)            # create
point[0]                  # 3 (read)
point[0] = 4              # ERROR, tuples are locked

# Unpacking (the killer move)
x, y = point              # x is 3, y is 5

# Multiple return values
def divmod_two(a, b):
    return a // b, a % b
q, r = divmod_two(7, 2)   # q is 3, r is 1

# Swap with no temp variable
a, b = b, a
```

### Range tricks

```python
range(5)              # 0, 1, 2, 3, 4
range(2, 6)           # 2, 3, 4, 5
range(0, 10, 2)       # 0, 2, 4, 6, 8     (step of 2)
range(10, 0, -1)      # 10, 9, 8, ..., 1   (count down)
range(len(nums))      # 0, 1, ..., len(nums)-1

# Walk a list backwards
for i in range(len(nums) - 1, -1, -1):
    print(nums[i])
```

> **Watch out.** Range is lazy. `range(1_000_000)` uses tiny memory because it generates numbers on the fly. `list(range(1_000_000))` actually allocates a million-item list.

### List comprehension (the most important shortcut)

Pattern: `[expression for item in source if condition]`.

```python
squares = [x * x for x in nums]                 # transform every item
evens   = [x for x in nums if x % 2 == 0]       # filter
pairs   = [(i, x) for i, x in enumerate(nums)]  # build tuples

# Nested (for 2D)
grid = [[0 for _ in range(3)] for _ in range(4)]   # 4 rows, 3 cols of zeros
```

### Converting between types

```python
list("abc")          # ['a', 'b', 'c']
tuple([1, 2, 3])     # (1, 2, 3)
"".join(['a','b'])   # "ab"
list(range(5))       # [0, 1, 2, 3, 4]
str(123)             # "123"
int("123")           # 123
```

### While loops

`while` repeats as long as a condition is true. Use it when you do NOT know in advance how many times to loop.

```python
n = 14
steps = 0
while n > 0:                  # keep going as long as n is positive
    if n % 2 == 0:
        n //= 2               # halve it
    else:
        n -= 1                # subtract 1
    steps += 1
# n is 0, steps is 6
```

> **Watch out.** A `while` loop with a condition that never becomes false runs forever (infinite loop). Always make sure SOMETHING inside the loop changes the condition.

When to pick `while` over `for`:
- `for` is for "known number of iterations" (loop over a list, range, string).
- `while` is for "keep going until something happens" (number reaches 0, two pointers meet, target found).

### Chained comparisons

Python lets you chain comparisons like in math. `a < x < b` means "x is between a and b."

```python
x = 5
0 < x < 10          # True   (same as: 0 < x AND x < 10)
65 <= code <= 90    # True if code is between 65 and 90 inclusive
```

This is a clean way to check if an ASCII code is in the "capital letters" range:

```python
ch = 'H'
code = ord(ch)
if 65 <= code <= 90:        # capital A to Z
    print("it's a capital")
```

> Most other languages do NOT support this. Python is special.

### List repetition with `*`

The `*` operator repeats a list (or string).

```python
[0] * 5           # [0, 0, 0, 0, 0]      (five zeros)
[1, 2] * 3        # [1, 2, 1, 2, 1, 2]
"-" * 10          # "----------"          (string repetition)
```

Common uses:
- **Pre-allocate a list of known size:** `result = [0] * n`
- **Repeat a value n times:** `[val] * freq` is useful for run-length decoding.

```python
# Decompress: 3 copies of "x" then 2 copies of "y"
chars = ["x"] * 3 + ["y"] * 2     # ['x', 'x', 'x', 'y', 'y']
```

> **Watch out.** `[[]] * 3` creates a list of 3 references to the SAME inner list. Changing one changes all three. For a 2D grid, use a comprehension: `[[0] * cols for _ in range(rows)]`.

### Boolean comprehensions

A list comprehension can produce booleans (True / False), not just numbers or strings.

```python
nums = [1, 5, 2, 7]
big = [x > 3 for x in nums]    # [False, True, False, True]
```

This pattern is the answer to "for each item, is it true that ___?" type problems.

### Built-ins refresher (covered in Chapter 1)

Chapter 1 introduced these in detail. Quick reminder of the most useful ones for sequences:

```python
sum([1, 2, 3])          # 6
min([4, 2, 7])          # 2
max([4, 2, 7])          # 7
abs(-5)                 # 5
len("hello")            # 5
sorted([3, 1, 2])       # [1, 2, 3]      (new list)
nums.sort()             # in place

all(x > 0 for x in nums)   # True if every item positive
any(x > 0 for x in nums)   # True if at least one positive
```

> **Python note.** Like `sum` and `max`, `sorted` and `join` also accept a bare generator. You can write `sorted(x*x for x in nums)` instead of `sorted([x*x for x in nums])`. One fewer pair of brackets.

If any of these feel unfamiliar, go back to Chapter 1, Tool E.

---

## Common patterns

### Pattern 1: Build a list while looping

```python
result = []                       # start empty
for x in nums:
    if x > 0:
        result.append(x * 2)      # add when condition matches
```

Same thing as a comprehension:

```python
result = [x * 2 for x in nums if x > 0]
```

### Pattern 2: The join trick (avoid the O(n²) trap)

> **Watch out.** Building a string with `+=` in a loop is SLOW because strings are immutable. Every `+=` makes a new string.

```python
# BAD: O(n²)
s = ""
for ch in chars:
    s += ch         # makes a new string every time

# GOOD: O(n)
s = "".join(chars)  # one allocation, one pass
```

The join trick: build a list of strings first, then join at the end.

```python
parts = []
for word in words:
    parts.append(word.upper())
result = " ".join(parts)
```

### Pattern 3: In-place modification

When the problem says "modify the array in place", you cannot return a new list.

```python
# Reverse in place
nums.reverse()       # nums is now reversed, no new list

# Sort in place
nums.sort()          # nums is now sorted

# Set an item in place
nums[i] = new_value
```

### Pattern 4: Slice copy and reverse

```python
copy = nums[:]              # full copy of nums
first_half = nums[:n//2]    # first half (a new list)
reversed_copy = nums[::-1]  # reversed copy
```

> **Silly hook.** Slicing is like taking a photocopy of part of a book. The original is untouched. You hold a new piece of paper with the copied pages.

**Computed slice bounds.** Slice indexes can be any integer expression, not just literal numbers. This is the trick for "grab the i-th chunk of size n."

```python
nums = [10, 20, 30, 40, 50, 60]
n = 2
i = 1
nums[i * n : (i + 1) * n]    # [30, 40]  - the chunk that starts at index 2, length 2
```

```python
# Cut a flat list into rows of length n
flat = [1, 2, 3, 4, 5, 6]
n = 3
[flat[i * n : (i + 1) * n] for i in range(len(flat) // n)]
# [[1, 2, 3], [4, 5, 6]]
```

> **Why this works.** A slice `[a:b]` says "indexes a, a+1, ..., b-1." Python evaluates `a` and `b` first, then does the slice. So `nums[i * n : (i + 1) * n]` is just "compute these two numbers, then slice." This shows up in problems that reshape a 1D array into a 2D grid (P15).

### Pattern 5: Walk with index using enumerate

```python
for i, x in enumerate(nums):
    if x == target:
        return i
```

### Pattern 6: Walk two lists in parallel using zip

```python
names = ["Anna", "Bob"]
ages  = [30, 25]

for name, age in zip(names, ages):
    print(name, age)
# Anna 30
# Bob 25
```

### Pattern 7: Build a lookup table, then walk again (the cipher pattern)

When a problem says "translate", "decode", "map A to B", you usually build a dict in one pass, then walk the input in a second pass.

```python
# Step 1: build a dict from a "key" string
# Step 2: walk the message, translate each character using the dict

key = "the"            # imagine this assigns t->a, h->b, e->c
cipher = {}
next_letter = ord('a')

for ch in key:
    if ch not in cipher:                # first time we see this letter
        cipher[ch] = chr(next_letter)
        next_letter += 1

# Now cipher = {'t': 'a', 'h': 'b', 'e': 'c'}
# Step 2: translate
message = "the"
result = "".join(cipher[ch] for ch in message)
# result = "abc"
```

> **Why two passes?** The first pass builds knowledge. The second pass USES that knowledge. The same idea shows up in many problems:
> - "First unique character" (Counter pass + ordered pass)
> - "Most common element"
> - "Decode a message with a cipher"

### Pattern 8: List repetition and extend

When you need many copies of the same value:

```python
[0] * 5             # [0, 0, 0, 0, 0]
[42] * 3            # [42, 42, 42]
```

When you need to ADD many items to an existing list at once:

```python
result = [1, 2, 3]
result.extend([4, 5, 6])    # result is now [1, 2, 3, 4, 5, 6]

# Equivalent to:
result += [4, 5, 6]
```

Combined: a one-liner for run-length decoding.

```python
# val=4, freq=3 -> [4, 4, 4]
result.extend([val] * freq)
```

---

## Worked Examples

Four problems in the Alex Xu format: Problem, Intuition, Visual, Code, Complexity, Edge cases.

---

### Example 1. Length of Last Word (LC 58)

#### Problem

> Given a string `s` of words separated by spaces, return the length of the **last word**.

```
Input:  "Hello World"
Output: 5

Input:  "   fly me   to   the moon  "
Output: 4
```

#### Intuition

Two approaches.

**Easy way:** split the string into words and take the length of the last word.
- `s.split()` (no arguments) splits on any whitespace and IGNORES empty pieces. Perfect for "   fly me   ".

**Manual way:** walk the string from the END. Skip trailing spaces. Then count letters until you hit a space or run out.

The easy way uses two `split` and indexing. The manual way uses no extra storage (O(1) space). Both work.

This shows the **string-split-and-index pattern** (Tool: `split`).

#### Visual walkthrough (easy way)

```
Input: "   fly me   to   the moon  "

s.split()  ->  ["fly", "me", "to", "the", "moon"]
                                        ^^^^^^^^^^
                                        last word

words[-1]  ->  "moon"
len(words[-1])  ->  4
```

#### Code (easy way)

```python
def length_of_last_word(s):
    words = s.split()            # split on any whitespace, drop empties
    return len(words[-1])        # length of the last item
```

#### Code (manual way, O(1) space)

```python
def length_of_last_word(s):
    i = len(s) - 1               # start at the last index

    # skip trailing spaces
    while i >= 0 and s[i] == ' ':
        i -= 1

    # count letters of the last word
    count = 0
    while i >= 0 and s[i] != ' ':
        count += 1
        i -= 1

    return count
```

#### Complexity

**Easy way: Time O(n), Space O(n).**

> **Why.** `split()` walks the whole string once: O(n). It builds a new list of words: O(n) extra space.

**Manual way: Time O(n), Space O(1).**

> **Why.** Two `while` loops, each at most n steps. No extra list, only `i` and `count`.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `"a"` | 1 | single letter, no spaces |
| `"hello"` | 5 | one word |
| `"hello "` | 5 | trailing space |
| `"  hello  world  "` | 5 | many spaces between and around |

---

### Example 2. Reverse String (LC 344)

#### Problem

> Reverse a list of characters **in place**. Do NOT return a new list.

```
Input:  ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

#### Intuition

"In place" is the key word. We must change the original list, not make a new one.

The Pythonic answer is one line: `s.reverse()`.

But the problem really wants you to know the **two pointer trick**:
- Put a pointer `left` at the start.
- Put a pointer `right` at the end.
- Swap the values at `left` and `right`.
- Move `left` forward, `right` backward.
- Stop when they meet in the middle.

We will see two pointers as a major pattern in Chapter 8. This is your first taste.

#### Visual walkthrough

```
Start:  [h, e, l, l, o]      L=0, R=4
         L           R

Step 1: swap s[0] and s[4], then L+=1, R-=1
        [o, e, l, l, h]      L=1, R=3
            L     R

Step 2: swap s[1] and s[3], then L+=1, R-=1
        [o, l, l, e, h]      L=2, R=2
               LR

Step 3: L is no longer less than R. Stop.

Result: [o, l, l, e, h]
```

#### Code (one liner)

```python
def reverse_string(s):
    s.reverse()              # modifies s in place
```

#### Code (two pointers, manual)

```python
def reverse_string(s):
    left = 0
    right = len(s) - 1

    while left < right:
        s[left], s[right] = s[right], s[left]   # swap
        left += 1
        right -= 1
```

> **Python note.** `s[left], s[right] = s[right], s[left]` swaps two values in one line. Python builds a tuple on the right side, then unpacks it into the two variables on the left.

#### Complexity

**Time: O(n).** Each swap is O(1). We do n/2 swaps. n/2 is O(n).

**Space: O(1).** We do not create a new list. Only two pointer variables.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `[]` | `[]` | empty, while loop never runs |
| `["a"]` | `["a"]` | one item, L=0=R, loop never runs |
| `["a","b"]` | `["b","a"]` | two items, one swap |
| `["a","b","c"]` | `["c","b","a"]` | odd length, middle char stays |

---

### Example 3. Defanging an IP Address (LC 1108)

#### Problem

> Replace every `.` in the IP address with `[.]`.

```
Input:  "1.1.1.1"
Output: "1[.]1[.]1[.]1"
```

#### Intuition

This problem is a one-liner if you know the right tool: `s.replace(old, new)` replaces every occurrence in a string.

The point of including it: knowing the right built-in saves you a 10-line loop.

#### Code (one liner)

```python
def defang_ip_addr(address):
    return address.replace(".", "[.]")
```

#### Code (manual, to understand what `replace` does)

```python
def defang_ip_addr(address):
    parts = []
    for ch in address:
        if ch == ".":
            parts.append("[.]")
        else:
            parts.append(ch)
    return "".join(parts)
```

> **Python note.** The manual version uses the **join trick** (Pattern 2). Build a list of strings, join at the end. Faster than `result += part` in a loop.

#### Complexity

**Time: O(n).** Replace walks the string once.

**Space: O(n).** The new string is bigger (each `.` becomes 3 characters).

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `"0.0.0.0"` | `"0[.]0[.]0[.]0"` | normal case |
| `"1"` | `"1"` | no dots, no change |
| `"..."` | `"[.][.][.]"` | only dots |

---

### Example 4. Plus One (LC 66)

#### Problem

> A non-negative integer is given as a **list of digits**, most significant first. Increase by 1 and return the new list.

```
Input:  [1, 2, 3]
Output: [1, 2, 4]

Input:  [9, 9, 9]
Output: [1, 0, 0, 0]
```

#### Intuition

Think of how YOU add 1 to a number on paper.

You go to the LAST digit. Add 1. If it becomes 10, carry the 1 over and move left. Repeat.

Special case: `[9, 9, 9]` becomes `[10, 0, 0]` and the leading 10 needs to become a new digit, so we add a `1` at the front and the list grows.

The walk is **right to left**, which means a reverse loop with `range`.

#### Visual walkthrough

```
Input: [9, 9, 9]

i=2: digit is 9. 9+1=10. Write 0, carry 1.
     [9, 9, 0]   carry=1

i=1: digit is 9. 9+1=10. Write 0, carry 1.
     [9, 0, 0]   carry=1

i=0: digit is 9. 9+1=10. Write 0, carry 1.
     [0, 0, 0]   carry=1

Loop done. Carry still 1.
Add 1 at the front: [1, 0, 0, 0]
```

```
Input: [1, 2, 3]

i=2: digit is 3. 3+1=4. Write 4, carry 0.
     [1, 2, 4]   carry=0

Carry is 0, we can stop early.
Result: [1, 2, 4]
```

#### Code

```python
def plus_one(digits):
    n = len(digits)

    for i in range(n - 1, -1, -1):       # walk from last index to 0
        if digits[i] < 9:
            digits[i] += 1               # easy case, no carry
            return digits                # done early
        digits[i] = 0                    # 9 becomes 0, carry implied

    # if we got here, every digit was 9, all became 0
    # we need a leading 1
    return [1] + digits
```

> **Python note.** `range(n - 1, -1, -1)` counts down: `n-1, n-2, ..., 1, 0`. The third argument `-1` is the step (going backward).

#### Complexity

**Time: O(n).** Worst case (all 9s) we touch every digit once.

**Space: O(1)** if we modify `digits` in place. Worst case (all 9s) we return a new list of length `n+1`, which is O(n).

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `[0]` | `[1]` | smallest case |
| `[9]` | `[1, 0]` | single 9, list grows |
| `[1, 9, 9]` | `[2, 0, 0]` | carry propagates one place |
| `[9, 9, 9]` | `[1, 0, 0, 0]` | carry propagates fully, list grows |

---

## Pattern Recognition

| If the question says... | Use this |
|-------------------------|----------|
| "modify in place" | `.sort()`, `.reverse()`, `nums[i] = x`. Do NOT create a new list. |
| "return a NEW list" | comprehension or `sorted(nums)` |
| "split by spaces or commas" | `s.split()` or `s.split(",")` |
| "join with a separator" | `sep.join(list_of_strings)` |
| "replace X with Y in a string" | `s.replace("X", "Y")` (add a 3rd arg for only N replacements) |
| "walk a list backwards" | `range(len(nums) - 1, -1, -1)` or `reversed(nums)` |
| "walk two lists together" | `zip(a, b)` |
| "walk with index and item" | `enumerate(nums)` |
| "build a string from many small pieces" | join trick (list + `"".join(parts)`) |
| "count digits/letters of a string" | `len(s)`, or filter with comprehension |
| "rotate, shift, or rearrange a list" | use slicing: `nums[k:] + nums[:k]` |
| "keep doing X until Y" or "find when something happens" | `while` loop |
| "is x in a range" (between two numbers) | chained comparison: `lo <= x <= hi` |
| "make a list of N copies of value V" | `[V] * N` |
| "for each item, is it true that..." (returns booleans) | boolean comprehension: `[cond for x in items]` |
| "build a translation table, then translate" | dict cipher: build with one pass, use with second pass |
| "expand run-length data" | `result.extend([val] * freq)` |
| "modulo / remainder / even or odd" | `x % 2 == 0` for even, `x % 2 == 1` for odd |
| "integer divide / floor" | `x // 2` (drops decimal) |

---

## Practice Problems

15 problems. Easy difficulty, but each one exercises a specific sequence skill.

Difficulty tags: **easy**, **medium**, **harder**.

---

**P1. To Lower Case (LC 709)** - easy
Convert all letters to lowercase. Do NOT use `s.lower()`.
```
Input:  "Hello"
Output: "hello"
```

**P2. Reverse Words in a String III (LC 557)** - easy
Reverse each word in a sentence, but keep the word order.
```
Input:  "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

**P3. Final Value of Variable After Performing Operations (LC 2011)** - easy
A list of operations like `"++X"`, `"--X"`, `"X++"`, `"X--"`. Start with `x = 0`. Return final `x`.
```
Input:  ["--X","X++","X++"]
Output: 1
```

**P4. Running Sum of 1d Array (LC 1480)** - easy
Return an array where `ans[i]` is the sum of `nums[0..i]`.
```
Input:  [1, 2, 3, 4]
Output: [1, 3, 6, 10]
```

**P5. Build Array from Permutation (LC 1920)** - easy
Build `ans` where `ans[i] = nums[nums[i]]`. Promise: every value in `nums` is a valid index into `nums` (between `0` and `len(nums)-1`).
```
Input:  [0, 2, 1, 5, 3, 4]
Output: [0, 1, 2, 4, 5, 3]
```

**P6. Maximum 69 Number (LC 1323)** - easy
Given a number with only 6s and 9s, flip ONE 6 to a 9 to make the biggest possible number.
```
Input:  9669
Output: 9969
```

**P7. Shuffle the Array (LC 1470)** - easy
Given `[x1, x2, ..., xn, y1, y2, ..., yn]`, return `[x1, y1, x2, y2, ..., xn, yn]`.
```
Input:  nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
```

**P8. Truncate Sentence (LC 1816)** - easy
Return the first `k` words of a sentence.
```
Input:  s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
```

**P9. Kids With the Greatest Number of Candies (LC 1431)** - easy
Each kid has some candies. If you give `extra` candies to each kid, return a list of booleans (one per kid) saying "would this kid have the MOST candies after?".
```
Input:  candies = [2,3,5,1,3], extra = 3
Output: [true, true, true, false, true]
```

**P10. Goal Parser Interpretation (LC 1678)** - easy
Replace `"()"` with `"o"` and `"(al)"` with `"al"`. Keep `"G"` as is.
```
Input:  "G()(al)"
Output: "Goal"
```

**P11. Squares of a Sorted Array (LC 977)** - medium
Given a SORTED array (may have negatives), return a new sorted array of the squares.
```
Input:  [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]
```

**P12. Decode the Message (LC 2325)** - medium
Build a cipher from `key` (each new letter in key maps to next letter in alphabet, starting at 'a'). Then decode `message` using the cipher. Spaces stay as spaces.
```
Input:  key = "the quick brown fox jumps over the lazy dog"
        message = "vkbs bs t suepuv"
Output: "this is a secret"
```

**P13. Number of Steps to Reduce a Number to Zero (LC 1342)** - easy
If the number is even, divide by 2. If odd, subtract 1. Count the steps.
```
Input:  14
Output: 6   (14 -> 7 -> 6 -> 3 -> 2 -> 1 -> 0)
```

**P14. Decompress Run-Length Encoded List (LC 1313)** - easy
The list comes in pairs `[freq, val, freq, val, ...]`. Expand: each `val` appears `freq` times.
```
Input:  [1, 2, 3, 4]
Output: [2, 4, 4, 4]    (1 of "2", then 3 of "4")
```

**P15. Convert 1D Array Into 2D Array (LC 2022)** - medium
Take a flat array of `m * n` items and turn it into an `m x n` 2D array (list of lists).
```
Input:  original = [1, 2, 3, 4], m = 2, n = 2
Output: [[1, 2], [3, 4]]
```

---

## Solutions

> **Stop.** Did you try every problem yourself first? If not, scroll back. The point is the struggle, not the reading.

---

### P1. To Lower Case

```python
def to_lower_case(s):
    result = []
    for ch in s:
        code = ord(ch)
        if 65 <= code <= 90:        # capital A through Z
            result.append(chr(code + 32))   # +32 makes it lowercase
        else:
            result.append(ch)
    return "".join(result)
```

**Key insight.** Capital `'A'` is 65, lowercase `'a'` is 97. Difference is 32. To go from capital to lowercase, add 32 to the ASCII code.

**Complexity.** O(n) time, O(n) space (the new string).

---

### P2. Reverse Words in a String III

```python
def reverse_words(s):
    words = s.split(" ")                       # split into words
    reversed_words = [w[::-1] for w in words]  # reverse each
    return " ".join(reversed_words)            # join back
```

One line:

```python
def reverse_words(s):
    return " ".join(w[::-1] for w in s.split(" "))
```

**Key insight.** Split, transform each piece, join. This is the standard "process each word" template.

**Python note.** `w[::-1]` is slicing with step -1, which reverses.

**Complexity.** O(n) time, O(n) space.

---

### P3. Final Value of Variable After Performing Operations

```python
def final_value_after_operations(operations):
    x = 0
    for op in operations:
        if "+" in op:
            x += 1
        else:
            x -= 1
    return x
```

**Key insight.** Each operation either has a `+` or a `-`. The position of the X does not matter. So just check which character is in the operation.

**Complexity.** O(n) time, O(1) space.

---

### P4. Running Sum of 1d Array

```python
def running_sum(nums):
    result = []
    total = 0
    for x in nums:
        total += x
        result.append(total)
    return result
```

In place version (modifies nums):

```python
def running_sum(nums):
    for i in range(1, len(nums)):
        nums[i] += nums[i - 1]
    return nums
```

**Key insight.** Each item in the running sum equals the previous running sum plus the current item. This is the **prefix sum** pattern (Chapter 9).

**Complexity.** O(n) time, O(n) space (or O(1) if in place).

---

### P5. Build Array from Permutation

```python
def build_array(nums):
    return [nums[nums[i]] for i in range(len(nums))]
```

**Key insight.** Pure transformation. For each index `i`, look up `nums[i]` to get a new index, then look up `nums[that]`. List comprehension does it cleanly.

**Complexity.** O(n) time, O(n) space.

---

### P6. Maximum 69 Number

```python
def maximum_69_number(num):
    return int(str(num).replace("6", "9", 1))
```

**Key insight.** To make the number biggest, change the LEFTMOST 6 to a 9 (leftmost has the highest place value). `replace(..., count=1)` replaces only the first occurrence.

**Python note.** `str(num)` turns the number into a string. After replacing, `int(...)` turns it back.

**Complexity.** O(d) time where d is the number of digits, O(d) space.

---

### P7. Shuffle the Array

```python
def shuffle(nums, n):
    result = []
    for i in range(n):
        result.append(nums[i])         # x_i
        result.append(nums[i + n])     # y_i
    return result
```

One line with comprehension:

```python
def shuffle(nums, n):
    return [nums[i + (j * n)] for i in range(n) for j in range(2)]
```

> **Note.** One-liner version. Uses a comprehension with TWO `for` clauses. Read it left-to-right: outer loop first, then inner. We do not teach this form here — read the loop version above to understand it. Treat the one-liner as a curiosity.

(The longer version is much clearer. Use the comprehension only if you understand it.)

**Key insight.** First half is `nums[0..n-1]`, second half is `nums[n..2n-1]`. Pair them up: x_0 with y_0, x_1 with y_1, etc.

**Complexity.** O(n) time, O(n) space.

---

### P8. Truncate Sentence

```python
def truncate_sentence(s, k):
    words = s.split()
    return " ".join(words[:k])
```

**Key insight.** Split, slice the first `k`, join back. Pure use of three sequence operations.

**Complexity.** O(n) time, O(n) space.

---

### P9. Kids With the Greatest Number of Candies

```python
def kids_with_candies(candies, extra):
    biggest = max(candies)
    return [c + extra >= biggest for c in candies]
```

**Key insight.** Find the max ONCE. Then for each kid, check `their_candies + extra >= max`.

**Python note.** A list comprehension can produce booleans too. `[expr >= threshold for expr in items]` gives a list of `True`/`False`.

**Complexity.** O(n) time, O(n) space.

---

### P10. Goal Parser Interpretation

```python
def interpret(command):
    return command.replace("()", "o").replace("(al)", "al")
```

**Key insight.** Two replaces, chained. Each `replace` returns a new string, so we chain them.

**Complexity.** O(n) time, O(n) space.

---

### P11. Squares of a Sorted Array

Easy version (sort after squaring):

```python
def sorted_squares(nums):
    return sorted(x * x for x in nums)
```

**Complexity.** O(n log n) time, O(n) space.

Better version (two pointers, O(n) time):

> **Preview only.** This uses the two-pointer pattern, fully covered in Chapter 8. The easy version above is the expected answer for now.

```python
def sorted_squares(nums):
    n = len(nums)
    result = [0] * n
    left, right = 0, n - 1
    pos = n - 1                                    # fill from the back

    while left <= right:
        if abs(nums[left]) > abs(nums[right]):
            result[pos] = nums[left] * nums[left]
            left += 1
        else:
            result[pos] = nums[right] * nums[right]
            right -= 1
        pos -= 1

    return result
```

**Key insight.** Since the input is sorted, the BIGGEST square is at one of the two ends. Use two pointers, fill the result from the back. We will explore two pointers in Chapter 8.

**Complexity (two pointer version).** O(n) time, O(n) space.

---

### P12. Decode the Message

```python
def decode_message(key, message):
    # build the cipher
    cipher = {" ": " "}                            # space maps to space
    next_letter = ord('a')
    for ch in key:
        if ch not in cipher:                       # first time seeing this letter
            cipher[ch] = chr(next_letter)
            next_letter += 1

    # decode the message
    return "".join(cipher[ch] for ch in message)
```

**Key insight.** Walk `key` to build the lookup table (dict). Then walk `message` and translate each character.

**Complexity.** O(k + m) time where k is len(key) and m is len(message), O(1) space for the cipher (at most 27 entries).

---

### P13. Number of Steps to Reduce a Number to Zero

```python
def number_of_steps(num):
    steps = 0
    while num > 0:
        if num % 2 == 0:
            num //= 2
        else:
            num -= 1
        steps += 1
    return steps
```

**Key insight.** Pure simulation. Loop while non-zero. Apply the rule based on even/odd.

**Complexity.** O(log num) time (dividing by 2 each time halves the number).

---

### P14. Decompress Run-Length Encoded List

```python
def decompress_rl_elist(nums):
    result = []
    for i in range(0, len(nums), 2):              # step by 2: pairs
        freq, val = nums[i], nums[i + 1]
        result.extend([val] * freq)               # add val freq times
    return result
```

**Key insight.** `[val] * freq` makes a list of `val` repeated `freq` times. `extend` adds many items at once.

**Python note.** Right side is two values separated by a comma — Python packs them into a tuple, then unpacks into `freq` and `val`. Same as `a, b = 3, 5`.

**Python note.** `range(0, n, 2)` jumps by 2: `0, 2, 4, ...`. Perfect for walking pairs.

**Complexity.** O(total output length) time and space.

---

### P15. Convert 1D Array Into 2D Array

```python
def construct_2d_array(original, m, n):
    if len(original) != m * n:
        return []                                  # not enough items
    return [original[i * n : (i + 1) * n] for i in range(m)]
```

**Key insight.** Slice the original into chunks of size `n`. Use a comprehension to build the list of rows.

**Python note.** Slices accept any integer expression, not just constants. `original[i*n : (i+1)*n]` grabs the chunk of length `n` that starts at position `i*n`.

**Complexity.** O(m * n) time, O(m * n) space.

---

## Flashcards

| Front | Back |
|-------|------|
| Time of `nums.append(x)`? | O(1) |
| Time of `nums.pop(0)`? | O(n) (slow, shifts everything) |
| Time of `x in list`? | O(n) (scans) |
| Time of `x in set`? | O(1) (hash lookup) |
| Time of `sorted(nums)`? | O(n log n) |
| `s.reverse()` vs `s[::-1]`? | `.reverse()` in place. `[::-1]` returns a new list. |
| Split `"a b c"` on whitespace? | `"a b c".split()` |
| Join a list with commas? | `",".join(list_of_strings)` |
| Why is `s += c` in a loop bad? | Strings are immutable. Each += copies the whole string. O(n²). |
| Fix for above? | Build a list, then `"".join(list)`. O(n). |
| Walk backwards over `nums`? | `for i in range(len(nums) - 1, -1, -1):` or `reversed(nums)` |
| Walk two lists together? | `for a, b in zip(list1, list2):` |
| Swap two values without a temp? | `a, b = b, a` |
| Lowercase char from uppercase code? | `chr(ord(ch) + 32)` |
| Make a row of 5 zeros? | `[0] * 5` |
| Make a 3x4 grid of zeros? | `[[0] * 4 for _ in range(3)]` |
| Slice last 3 items of `nums`? | `nums[-3:]` |
| Slice everything except last 3? | `nums[:-3]` |
| Reverse a list (new list)? | `nums[::-1]` |
| Reverse a list (in place)? | `nums.reverse()` |
| When to use `while` over `for`? | When you do NOT know how many iterations in advance (e.g., "keep going until 0"). |
| `0 <= x <= 10` does what? | Checks if x is between 0 and 10 inclusive. Python chained comparison. |
| `[0] * 5` returns? | `[0, 0, 0, 0, 0]` (five zeros) |
| `[42] * 3` returns? | `[42, 42, 42]` |
| Decode a run-length pair `(freq, val)`? | `result.extend([val] * freq)` |
| Difference between `list.append(x)` and `list.extend(other_list)`? | `append` adds one item. `extend` adds many items from another list. |
| Replace ONLY the first occurrence in a string? | `s.replace(old, new, 1)` (3rd arg is count) |
| Boolean comprehension example? | `[x > 3 for x in nums]` returns a list of True/False |
| 7 % 2? | 1 (remainder) |
| 7 // 2? | 3 (integer divide, drops decimal) |
| Why is `[[]] * 3` dangerous? | Makes 3 references to the SAME list. Changing one changes all. Use a comprehension instead. |
| Does `'7'.isdigit()` work on a single char? | Yes. All string methods work on single-character strings too. |
| `'A'.lower()` returns? | `'a'`. Single-char `.lower()` works the same as on a full string. |
| Can slice bounds be expressions? | Yes. `nums[i*n : (i+1)*n]` is fine. Python evaluates the math first, then slices. |

---

## Spaced Repetition Schedule

| Day | Date (fill in) | Task |
|-----|---------------|------|
| 0   | _____ | Read chapter. Do worked examples on paper. Try all 15 practice. |
| 1   | _____ | Review flashcards. Re-do problems you got wrong. |
| 3   | _____ | Review flashcards. Pick 3 random problems. Re-solve from scratch. |
| 7   | _____ | Review flashcards. Pick 3 different problems. Re-solve from scratch. |
| 14  | _____ | Final review. If all 3 feel easy, move to Chapter 3. |

**Promotion rule.** Move on only when you can solve any 3 practice problems, picked at random, without help.

---

## What's next

**Chapter 3** covers **Hashing** in depth: `dict`, `set`, `defaultdict`, `Counter`, `frozenset`. When O(1) breaks down. Three classic hashing patterns (complement lookup, group by key, frequency window) from the Alex Xu book. You will solve Two Sum and Group Anagrams.


---

# Chapter 3 - Hashing

> Use a dict or a set to do lookups in O(1) instead of O(n). This single trick takes problems from "too slow" to "fast enough."

---

## What you will learn

By the end of this chapter, you can solve:

- Two Sum (LC 1)
- Group Anagrams (LC 49)
- Longest Consecutive Sequence (LC 128)
- Happy Number (LC 202)

Plus 15 practice problems.

You will also learn:

- `dict`, `set`, `defaultdict`, `frozenset` (every common method, with time complexity)
- The 3 classic hashing patterns: complement lookup, group by canonical key, set membership
- What can be a hash key (and what can NOT)
- Why hashing is O(1), and when it fails
- The Alex Xu insight that turns Longest Consecutive Sequence from O(n²) to O(n)

---

## Vocabulary

| Word | Plain meaning | Tiny example |
|------|---------------|--------------|
| Hash | A fast function that turns a value into a fixed number | Python does this for you |
| Hash table | An array where each slot is found by hashing a key | dict and set ARE hash tables |
| Hash map | Another name for a dict (LeetCode word) | `d = {"a": 1}` |
| Hash set | Another name for a set (LeetCode word) | `s = {1, 2, 3}` |
| Bucket | One slot in the hash table | hidden, you do not deal with it |
| Collision | Two different keys hash to the same bucket | Python handles this for you |
| Hashable | Can be used as a dict key or set member | int, str, tuple (of hashables), frozenset |
| Key | The lookup value in a dict | `d["name"]`, here `"name"` is the key |
| Value | What a key maps to | `d["name"]` is `"Anna"`, here `"Anna"` is the value |
| Membership | Checking if a value is in a collection | `x in some_collection` |
| Dedup | Remove duplicates | `set(nums)` gives you unique items |

---

## The big picture: when to reach for hashing

Hashing solves three jobs really well:

| Job | Use | Why |
|-----|-----|-----|
| **Fast lookup** | dict | "Have I seen X? What value is paired with X?" O(1) instead of O(n). |
| **Dedup / membership** | set | "Is X in the collection?" or "How many unique items?" O(1). |
| **Group by key** | dict (often defaultdict of list) | "Bucket items by some shared property." |

If any of these phrases shows up in a problem, you almost certainly want a hash table.

> **Silly hook.** A dict is a coat-check counter at a fancy restaurant. You hand a ticket (the key), get a coat back (the value). You do not search through all the coats. The ticket goes straight to the coat in O(1) time.

---

## Python Primer (dict, set, defaultdict)

### Dict basics

Dicts use curly braces `{ }` with `key: value` pairs.

```python
d = {"name": "Anna", "age": 30}
d["name"]                # "Anna"
d["city"] = "NYC"        # add new key
d["age"] = 31            # update existing key
del d["age"]             # delete key
"name" in d              # True (checks KEYS)
len(d)                   # how many keys
```

Empty dict creation:

```python
d = {}             # empty dict
d = dict()         # also empty dict
```

> **Watch out.** `d["missing_key"]` raises a `KeyError`. To avoid the crash, use `d.get(key, default)`:
>
> ```python
> d.get("name", "Unknown")    # "Anna"
> d.get("missing", 0)         # 0 (no crash)
> ```

### Dict iteration

| Method | What it gives | Example |
|--------|---------------|---------|
| `for k in d:` | each key | `for name in d:` |
| `d.keys()` | view of keys | same as above |
| `d.values()` | view of values | `for v in d.values():` |
| `d.items()` | view of `(key, value)` pairs | `for k, v in d.items():` |

```python
d = {"a": 1, "b": 2}
for k, v in d.items():
    print(k, v)
# a 1
# b 2
```

> Python dicts since version 3.7 keep keys in insertion order. The first key added comes first when you iterate.

### Useful dict methods

| Method | What it does | Time |
|--------|--------------|------|
| `d[k]` | Look up `k`, crash if missing | O(1) |
| `d.get(k)` | Look up `k`, return `None` if missing | O(1) |
| `d.get(k, default)` | Look up `k`, return `default` if missing | O(1) |
| `d.setdefault(k, default)` | If `k` missing, set `d[k] = default`. Return `d[k]`. | O(1) |
| `d.pop(k)` | Remove `k`, return its value | O(1) |
| `d.update(other)` | Merge another dict into `d` | O(m) |
| `k in d` | Is `k` a key? | O(1) |
| `len(d)` | Number of keys | O(1) |

### Set basics

Sets are like dicts but with NO values - just keys. Use curly braces with no colons.

```python
s = {1, 2, 3}          # set literal
s.add(4)               # add an item
s.remove(2)            # remove (crashes if missing)
s.discard(2)           # remove (silent if missing)
2 in s                 # True - O(1) membership
len(s)                 # 3
```

Empty set creation (the only tricky bit):

```python
s = set()              # CORRECT - empty set
s = {}                 # WRONG - this is an empty DICT, not a set
```

> **Watch out.** `{}` is an empty dict, not an empty set. The only way to make an empty set is `set()`.

Build a set from a list (removes duplicates):

```python
nums = [1, 2, 1, 3, 2]
unique = set(nums)     # {1, 2, 3}
```

### Set algebra (the killer feature)

| Operator | Name | Result |
|----------|------|--------|
| `a \| b` | Union | items in EITHER set |
| `a & b` | Intersection | items in BOTH sets |
| `a - b` | Difference | items in `a` but NOT `b` |
| `a ^ b` | Symmetric difference | items in EXACTLY ONE of the sets |

```python
a = {1, 2, 3}
b = {2, 3, 4}

a | b      # {1, 2, 3, 4}
a & b      # {2, 3}
a - b      # {1}
a ^ b      # {1, 4}
```

This replaces what would otherwise be a loop with `if x in other` checks. Much cleaner.

### Useful set methods

| Method | What it does | Time |
|--------|--------------|------|
| `s.add(x)` | Add `x` | O(1) |
| `s.remove(x)` | Remove `x`, crash if missing | O(1) |
| `s.discard(x)` | Remove `x`, silent if missing | O(1) |
| `s.pop()` | Remove and return ONE arbitrary item | O(1) |
| `x in s` | Membership test | O(1) |
| `len(s)` | How many items | O(1) |
| `s \| other` | Union | O(n+m) |
| `s & other` | Intersection | O(min(n,m)) |
| `s - other` | Difference | O(n) |

### `defaultdict` (auto-init missing keys)

This is in `collections`. It is a dict that creates a default value for missing keys, so you do not have to check `if key not in d`.

```python
from collections import defaultdict

groups = defaultdict(list)        # missing key gives a new []
groups["fruit"].append("apple")   # works! no KeyError
groups["fruit"].append("banana")
# groups is now {"fruit": ["apple", "banana"]}

counts = defaultdict(int)         # missing key gives 0
for ch in "hello":
    counts[ch] += 1               # works! no KeyError

seen = defaultdict(set)
seen["x"].add(1)                  # missing key gives new empty set()
```

The argument to `defaultdict(...)` is a **factory** - a function that produces the default value. Common factories: `list`, `set`, `int`, `dict`.

Without defaultdict, you would write this ugly pattern:

```python
# Without defaultdict
if key not in d:
    d[key] = []
d[key].append(x)

# With defaultdict
d[key].append(x)
```

> **Watch out.** Reading a missing key in a defaultdict **creates** the entry. If you check `if d[key]:` on a missing key, you just inserted an entry. Use `if key in d:` instead.

### What can be a hash key (hashable)

Only **immutable** values can be hash keys.

| Hashable (works as key) | NOT hashable (CRASH if used as key) |
|-------------------------|-------------------------------------|
| `int`, `float`, `bool` | `list` |
| `str`, `bytes` | `dict` |
| `tuple` (if all items are hashable) | `set` |
| `frozenset` | `bytearray` |
| `None` | |

```python
d[(1, 2)] = "ok"           # tuple key, fine
d[[1, 2]] = "nope"         # TypeError: unhashable type: 'list'
d[(1, [2])] = "nope"       # TypeError, tuple contains a list
```

> **Why this rule?** A key must hash to the same number for life. If you could change a list after using it as a key, the dict would lose track of it. So Python only lets you use immutable types as keys.

Trick: to use a list-like as a key, convert it:

```python
my_list = [1, 2, 3]
d[tuple(my_list)] = "ok"       # use a tuple
d[frozenset(my_list)] = "ok"   # use a frozenset (drops order)
```

### `Counter` (recap from Chapter 1)

Counter is a special dict for counting. Full coverage in Chapter 1, Tool C. Quick recap:

```python
from collections import Counter

Counter("hello")          # {'h':1, 'e':1, 'l':2, 'o':1}
Counter(["a","b","a"])    # {'a': 2, 'b': 1}

c = Counter("aab")
c["z"]                    # 0 (no KeyError)
c.most_common(1)          # [('a', 2)]
Counter("ab") - Counter("aab")    # Counter() (negatives dropped)
```

One new Counter trick worth knowing: `.elements()` expands a Counter BACK into a flat list, repeating each key by its count.

```python
c = Counter({'a': 2, 'b': 1})
list(c.elements())     # ['a', 'a', 'b']
```

**The classic pairing: `&` then `.elements()`.** Counter intersection (`&`) keeps the MIN count of each key. Then `.elements()` turns that count map back into a list with repetitions. This is the one-line answer for "what items appear in BOTH lists, and how many times in each?"

```python
a = [1, 2, 2, 3, 3, 3]
b = [2, 3, 3, 4]

Counter(a) & Counter(b)              # Counter({3: 2, 2: 1})
list((Counter(a) & Counter(b)).elements())   # [2, 3, 3]
```

Read it left to right:
1. `Counter(a)` -> `{1:1, 2:2, 3:3}`
2. `Counter(b)` -> `{2:1, 3:2, 4:1}`
3. `&` keeps the MIN for shared keys -> `{2:1, 3:2}`
4. `.elements()` expands back -> `[2, 3, 3]`

### f-strings (formatted strings)

An **f-string** is a quick way to build a string with values inserted. Put an `f` before the opening quote and use `{ }` to insert values.

```python
name = "Anna"
age = 30

f"Hi {name}, you are {age}."     # "Hi Anna, you are 30."

# Math inside the braces works too
f"Next year: {age + 1}"          # "Next year: 31"

# Format the answer
total = 1234.56
f"Total: ${total:.2f}"           # "Total: $1234.56"
```

You will use f-strings any time you need to build a string from numbers and variables (e.g., formatting output like `"900 google.com"`).

**Hashing use case: building a composite key.** When a problem groups items by TWO things (like row + column, or count + domain), join them into one string and use it as a dict key.

```python
# Group items by (row, col) in a 2D grid
counts = defaultdict(int)
for r, c, value in cells:
    key = f"{r},{c}"          # composite key, e.g. "2,3"
    counts[key] += value
```

You can also build the OUTPUT in the same style:

```python
# Turn a (count, name) pair back into "count name" output
pairs = [(900, "google.com"), (50, "yahoo.com")]
[f"{n} {name}" for n, name in pairs]    # ['900 google.com', '50 yahoo.com']
```

> **Tip.** Tuples like `(r, c)` also work as dict keys directly (no f-string needed) because tuples are hashable. F-strings are the right choice when the OUTPUT must be a string, or when you need to combine parts that have to look exactly like `"count item"`.

---

## How hashing is O(1) (and when it isn't)

A hash table is an array of "buckets." Python's hash function takes your key and turns it into a number. That number, modulo the array size, tells you which bucket to use.

```
key:    "cat"      "dog"      "fish"
         |          |           |
       hash()     hash()      hash()
         |          |           |
       bucket 4   bucket 1    bucket 7

Lookup: just hash and go straight to the bucket. O(1).
```

When does it NOT stay O(1)?

1. **Collisions.** Two different keys hash to the same bucket. Python stores both there and walks the bucket. For a few collisions, still effectively O(1). For PATHOLOGICAL cases (many keys colliding), this can degrade.
2. **Hashing a giant key.** Hashing a string of length k takes O(k). So looking up a million-character string is "O(1)" in the dict sense but O(k) for the hash step.
3. **Resizing.** When the table gets too full, Python doubles its size. The single insert that triggers it is O(n), but **amortized** across many inserts, it stays O(1).

For interview math, just remember: dict / set operations are **O(1) average**.

---

## The Hashing Patterns

These patterns cover a huge chunk of hashing problems on LeetCode.

### Pattern A: Complement lookup (the Two Sum pattern)

**Use when:** You need to find a PAIR of items that satisfy a condition like "sum to target" or "differ by k."

**Idea.** As you walk through items, ask: "For this `x`, what OTHER value would complete the pair? Have I seen it?" Use a dict to store what you have seen.

```python
seen = {}                          # value -> something useful (often the index)
for i, x in enumerate(nums):
    complement = target - x        # what we need to pair with x
    if complement in seen:
        return [seen[complement], i]
    seen[x] = i
```

This turns an O(n²) brute force (every pair) into an O(n) single pass.

### Pattern B: Group by canonical key

**Use when:** You need to GROUP items that share some property (anagrams, words with same digit sum, dates with same year).

**Idea.** For each item, compute a "canonical key" - a single value that is the SAME for all items that belong together. Append the item to a list under that key.

```python
from collections import defaultdict

groups = defaultdict(list)
for item in items:
    key = canonicalize(item)        # any function that gives the same output for same-group items
    groups[key].append(item)

return list(groups.values())        # each value is one group
```

For anagrams, the canonical key is `sorted(word)` (or `tuple(Counter(word).items())`).

### Pattern C: Set for fast membership / dedup

**Use when:** You need to check "have I seen X before?" or "is X in this collection?" many times.

**Idea.** Put everything in a set. Then `x in s` is O(1).

```python
seen = set()
for x in nums:
    if x in seen:                 # O(1) check
        return True               # duplicate found
    seen.add(x)
return False
```

This is also how you **dedup** a list: `set(nums)` gives unique items.

The Alex Xu Longest Consecutive Sequence trick uses this pattern PLUS one extra insight: only start counting a chain from its smallest number. See Example 3 below.

### Pattern D: Bijection (one-to-one mapping)

**Use when:** You must map each item in sequence A to exactly one item in sequence B, AND each item in B back to exactly one item in A. Word Pattern and Isomorphic Strings are classic cases.

**Idea.** One dict is not enough — it only checks one direction. You need TWO dicts, one for each direction.

```python
a_to_b = {}
b_to_a = {}
for x, y in zip(seq_a, seq_b):
    if x in a_to_b and a_to_b[x] != y: return False
    if y in b_to_a and b_to_a[y] != x: return False
    a_to_b[x] = y
    b_to_a[y] = x
return True
```

> **Why both dicts?** Say A is `"abba"` and B is `"dog dog dog dog"`. A single dict `a_to_b` would happily map `a -> dog`, then `b -> dog`, then re-check `b -> dog` (fine), then `a -> dog` (fine). It says True. But that is WRONG — two different letters cannot both map to `dog`. The second dict `b_to_a` catches it: when we try to set `dog -> b` after `dog -> a` is already there, we refuse.

> **Python note.** Tuple unpacking from `.split()`: `local, domain = email.split("@")` works because `.split("@")` returns a list of two strings, and Python unpacks the two items into the two names.

---

## Worked Examples

Four problems in Alex Xu format: Problem, Intuition, Visual, Code, Complexity, Edge cases.

---

### Example 1. Two Sum (LC 1) - Complement Lookup

#### Problem

> Given a list of numbers and a target, return the **indexes** of the two numbers that add up to the target. Each input has exactly one solution.

```
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]   (because nums[0] + nums[1] = 2 + 7 = 9)
```

#### Intuition

**Naive way.** Two nested loops, check every pair. O(n²) time.

```python
for i in range(n):
    for j in range(i + 1, n):
        if nums[i] + nums[j] == target:
            return [i, j]
```

This works but is slow.

**Smarter way.** As we walk through `nums`, we ask "what number would we NEED to pair with the current `x` to hit target?" That number is `target - x`. Call it the **complement**.

If we have seen the complement before, we found our pair. Otherwise, store the current number and its index in a dict for future lookups.

> **Silly hook.** Imagine you are at a Tinder for numbers. Each number is looking for its "match" that adds to target. As you meet each new number, you check if their perfect match is in your contacts (the dict). If yes, swipe right. If no, add this number to your contacts and move on.

This is Pattern A: **complement lookup**.

#### Visual walkthrough

```
nums = [2, 7, 11, 15], target = 9

step | i | x  | complement (9-x) | seen        | action
-----|---|----|--------------------|-------------|--------
 1   | 0 | 2  | 7                  | {}          | 7 not in seen, store 2 -> 0
 2   | 1 | 7  | 2                  | {2: 0}      | 2 IS in seen! return [seen[2], 1] = [0, 1]
```

#### Code

```python
def two_sum(nums, target):
    seen = {}                              # value -> index

    for i, x in enumerate(nums):
        complement = target - x
        if complement in seen:
            return [seen[complement], i]   # found the pair
        seen[x] = i                        # remember this number for future

    return []                              # not reached (problem says always one solution)
```

#### Complexity

**Time: O(n).**

> **Why.** One pass through `nums`. Each step does a dict lookup (O(1)) and a dict insert (O(1)). Total is n * O(1) = O(n).

**Space: O(n).**

> **Why.** The `seen` dict can hold up to n entries in the worst case (the pair is at the very end).

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `[3, 3], target=6` | `[0, 1]` | same value twice, indexes still found |
| `[2, 7, 11, 15], target=9` | `[0, 1]` | standard case |
| `[3, 2, 4], target=6` | `[1, 2]` | not the first two items |
| `[1, 5, 1, 5], target=6` | `[0, 1]` or `[2, 3]` | only ONE solution per problem statement |

---

### Example 2. Group Anagrams (LC 49) - Group by Canonical Key

#### Problem

> Given a list of strings, group the **anagrams** together. Anagrams have the same letters in the same counts.

```
Input:  ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

The output order does NOT matter.

#### Intuition

**Naive way.** For each word, compare with every OTHER word using `Counter`. O(n² * k) where n = number of words, k = word length. Too slow.

**Smarter way.** Use **Pattern B: group by canonical key**.

For each word, compute a key that is the SAME for all words that are anagrams of each other. Two natural choices:

1. **Sort the letters.** `"eat"` -> `"aet"`, `"tea"` -> `"aet"`, `"ate"` -> `"aet"`. Same key.
2. **Letter counts as a tuple.** `Counter("eat").items()` sorted gives the same tuple for all anagrams.

Option 1 is shorter, so we use it.

Then we use a `defaultdict(list)` so we can `append` without checking if the key exists.

> **Silly hook.** Imagine sorting your laundry by color. Every red shirt goes in the "red" bin. The "color" is the canonical key. You do not compare shirts to each other - each shirt just looks at its own color and jumps in the right bin.

#### Visual walkthrough

```
words = ["eat", "tea", "tan", "ate", "nat", "bat"]

word  | sorted(word) -> key | groups so far
------|---------------------|----------------------------
eat   | "aet"               | {"aet": ["eat"]}
tea   | "aet"               | {"aet": ["eat", "tea"]}
tan   | "ant"               | {"aet": ["eat","tea"], "ant": ["tan"]}
ate   | "aet"               | {"aet": ["eat","tea","ate"], "ant": ["tan"]}
nat   | "ant"               | {"aet": ["eat","tea","ate"], "ant": ["tan","nat"]}
bat   | "abt"               | adds "abt": ["bat"]

Final: list(groups.values())
     = [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

#### Code

```python
from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)

    for w in words:
        key = "".join(sorted(w))          # canonical key: sorted letters
        groups[key].append(w)

    return list(groups.values())
```

> **Python note.** `sorted(w)` returns a list of characters. `"".join(list)` glues them back into a string. So `"".join(sorted("eat"))` is `"aet"`.

#### Complexity

**Time: O(n * k log k)** where n is the number of words and k is the average word length.

> **Why.** For each of n words, sorting the letters takes O(k log k). Building the key and appending to the list is O(k). Total per word: O(k log k). Across all words: O(n * k log k).

**Space: O(n * k).**

> **Why.** The dict stores every word. Total characters across all words is roughly n * k.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `[]` | `[]` | empty input |
| `[""]` | `[[""]]` | one empty word, one group of one |
| `["a"]` | `[["a"]]` | single letter |
| `["ab", "ba", "abc"]` | `[["ab", "ba"], ["abc"]]` | two groups |

---

### Example 3. Longest Consecutive Sequence (LC 128) - Set Membership + Smart Start

#### Problem

> Given an unsorted list of integers, find the length of the **longest chain of consecutive numbers**. (Order in the input does NOT matter. Numbers can repeat.)

```
Input:  [100, 4, 200, 1, 3, 2]
Output: 4    (the chain is 1, 2, 3, 4)

Input:  [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9    (the chain is 0, 1, 2, 3, 4, 5, 6, 7, 8)
```

You must do this in **O(n)** time.

#### Intuition

This is straight from the Alex Xu Hash Maps chapter. Read carefully because the insight is sneaky.

**Naive way.** Sort the list. Then walk through and count consecutive runs.

```
[100, 4, 200, 1, 3, 2]   sorted   ->   [1, 2, 3, 4, 100, 200]
                                         ^^^^^^^^^^
                                         chain of 4
```

This works in O(n log n) because of the sort. But the problem demands O(n).

**Trying hashing.** Put all numbers in a set. Now `x in set` is O(1). For each number, try to extend a chain by checking if `num + 1` is in the set, then `num + 2`, etc.

```python
# Naive hashing attempt - STILL O(n²)
num_set = set(nums)
longest = 0
for num in num_set:
    current = num
    chain = 1
    while current + 1 in num_set:
        current += 1
        chain += 1
    longest = max(longest, chain)
```

This is still O(n²) in the worst case because for chain `[1, 2, 3, ..., n]`, when we start from 1, we walk n steps. Then from 2 we walk n-1 steps. Then from 3 we walk n-2 steps. The total is 1 + 2 + ... + n which is O(n²).

**THE INSIGHT.** We do not need to start counting from every number. We only need to start from the **smallest number in each chain**. Why? Because if we start from the middle of a chain, we are about to re-count what some other start point will also count.

A number `x` is the smallest in its chain if and only if `x - 1` is NOT in the set.

```
[1, 2, 3, 4, 100, 200]

1: is 1-1=0 in set? No. So 1 is a chain head. Count: 1, 2, 3, 4 -> 4.
2: is 2-1=1 in set? Yes. SKIP (not a chain head).
3: is 3-1=2 in set? Yes. SKIP.
4: is 4-1=3 in set? Yes. SKIP.
100: is 100-1=99 in set? No. Chain head. Count: 100 -> 1.
200: is 200-1=199 in set? No. Chain head. Count: 200 -> 1.

longest = 4
```

Now every number is visited at most twice in total across all the inner while loops. The total work is O(n).

> **Silly hook.** Imagine a crew of detectives. Each detective is given one number and asked "are you the smallest of your gang?" Only the smallest detective in each gang counts the rest of the gang. The others just say "nope, someone older than me will count us" and move on.

#### Visual walkthrough

```
nums = [100, 4, 200, 1, 3, 2]
num_set = {1, 2, 3, 4, 100, 200}

iterating num_set (any order):
  num=1   : 1-1=0 NOT in set -> chain head! Count up: 1, 2, 3, 4. chain=4. longest=4
  num=2   : 2-1=1 IS in set    -> skip
  num=3   : 3-1=2 IS in set    -> skip
  num=4   : 4-1=3 IS in set    -> skip
  num=100 : 100-1=99 NOT in set -> chain head! Count up: 100. chain=1. longest still 4
  num=200 : 200-1=199 NOT in set -> chain head! Count up: 200. chain=1. longest still 4

return 4
```

#### Code

```python
def longest_consecutive(nums):
    if not nums:
        return 0

    num_set = set(nums)
    longest = 0

    for num in num_set:
        if num - 1 not in num_set:               # this is a chain head
            current = num
            chain = 1
            while current + 1 in num_set:
                current += 1
                chain += 1
            longest = max(longest, chain)

    return longest
```

#### Complexity

**Time: O(n).**

> **Why.** The outer loop runs n times. The inner `while` only runs when `num` is a chain head. Across ALL chain heads, the inner while loop visits each element of the chain EXACTLY ONCE. So the total work of all inner loops combined is O(n). Total: O(n + n) = O(n).

**Space: O(n).**

> **Why.** The `num_set` stores up to n unique numbers.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `[]` | `0` | empty input |
| `[1]` | `1` | single number, chain of 1 |
| `[1, 2, 0, 1]` | `3` | duplicates do not matter (set dedups) |
| `[5, 5, 5]` | `1` | all same, chain of 1 |
| `[-1, 0, 1, 2]` | `4` | works with negatives |

---

### Example 4. Happy Number (LC 202) - Set for Cycle Detection

#### Problem

> A number is **happy** if, when you repeatedly replace it with the sum of the squares of its digits, you eventually reach 1.
> If the process loops forever WITHOUT reaching 1, the number is NOT happy.
> Return `True` if happy, else `False`.

```
Input:  19
Output: True
Trace:  1² + 9² = 1 + 81 = 82
        8² + 2² = 64 + 4 = 68
        6² + 8² = 36 + 64 = 100
        1² + 0² + 0² = 1            -> happy!

Input:  2
Output: False
Trace:  4, 16, 37, 58, 89, 145, 42, 20, 4, ...   (loops forever)
```

#### Intuition

The hard question: how do we know we are in an infinite loop? It is not obvious when to stop.

**Insight.** If the process is NOT going to reach 1, the numbers will eventually CYCLE - we will see a number we already saw. The moment we see a repeat, we know we are stuck and can return `False`.

So we need: "have I seen this number before?" That is **Pattern C: set for membership**.

```
seen = set()
n = starting number
while n != 1 and n not in seen:
    seen.add(n)
    n = sum_of_digit_squares(n)
return n == 1
```

Stop conditions:
- `n == 1` -> reached 1, return True (happy)
- `n in seen` -> we saw it before, cycle detected, return False (not happy)

> **Silly hook.** Imagine you are walking and dropping breadcrumbs every step. If you ever step on your own breadcrumb, you know you are walking in a circle. Time to give up.

> **Python note.** To get the digits of a number, convert it to a string and iterate: `for d in str(n)`. Each `d` is a character like `'1'`, so wrap in `int(d)` to do math.

#### Visual walkthrough

```
n = 19

iter | n  | n in seen? | seen     | next n
-----|----|------------|----------|--------
 1   | 19 | no         | {19}     | 1²+9² = 82
 2   | 82 | no         | {19,82}  | 8²+2² = 68
 3   | 68 | no         | {... 68} | 6²+8² = 100
 4   | 100| no         | {...100} | 1²+0²+0² = 1
 5   | 1  | LOOP EXITS (n == 1)

return n == 1 -> True
```

```
n = 4

iter | n  | n in seen? | next n
-----|----|------------|--------
 1   | 4  | no         | 16
 2   | 16 | no         | 1+36 = 37
 3   | 37 | no         | 9+49 = 58
 4   | 58 | no         | 25+64 = 89
 5   | 89 | no         | 64+81 = 145
 6   | 145| no         | 1+16+25 = 42
 7   | 42 | no         | 16+4 = 20
 8   | 20 | no         | 4+0 = 4
 9   | 4  | YES, in seen! LOOP EXITS

return n == 1 -> False
```

#### Code

```python
def is_happy(n):
    seen = set()

    while n != 1 and n not in seen:
        seen.add(n)
        # sum the squares of the digits of n
        n = sum(int(d) ** 2 for d in str(n))

    return n == 1
```

> **Python note.** `int(d) ** 2` is `int(d)` squared. The `**` operator means "to the power of."

#### Complexity

**Time: O(log n)** per iteration, and the number of iterations is bounded (roughly O(log n) too, for reasons we will not dig into).

> **Why.** Each iteration sums squares of digits. A number `n` has roughly `log10(n)` digits. So each iteration is O(log n). The total number of iterations is small (provably bounded) regardless of starting n.

**Space: O(log n).**

> **Why.** The `seen` set fills with at most a small number of intermediate values.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `1` | `True` | already 1 |
| `2` | `False` | classic non-happy |
| `7` | `True` | 7 -> 49 -> 97 -> 130 -> 10 -> 1 |
| `4` | `False` | enters the 4-loop early |

---

## Pattern Recognition

| If the question says... | Use this |
|-------------------------|----------|
| "find two items that sum to target" | Pattern A (complement lookup with dict) |
| "find two items that differ by k" | Pattern A with `complement = x + k` |
| "group items that are anagrams / share a property" | Pattern B (`defaultdict(list)` keyed by canonical form) |
| "is there a duplicate?" | Pattern C: `len(set(nums)) != len(nums)` |
| "have I seen this before?" | Pattern C: `set` and `if x in seen` |
| "find the missing number" | `set(full_range) - set(nums)` |
| "intersection / overlap of two collections" | `set(a) & set(b)` |
| "union of two collections" | `set(a) \| set(b)` |
| "cycle detection (when to stop)" | Pattern C with set of seen states |
| "consecutive numbers / chain of integers" | Set + only start from chain heads (Example 3) |
| "key, value pair lookup" | dict |
| "auto-init missing keys" | `defaultdict(list / set / int / dict)` |
| "first/most common item" | `Counter(items).most_common(1)[0][0]` |
| "do two strings have the same letters?" | `Counter(s) == Counter(t)` (anagram check) |
| "can A be built from B's letters" | `not (Counter(A) - Counter(B))` |
| "two sequences must match one-to-one (word pattern, isomorphic)" | Pattern D: two-dict bijection |

---

## Practice Problems

15 problems. Each one practices one of the three hashing patterns.

Difficulty tags: **easy**, **medium**, **harder**.

---

**P1. Intersection of Two Arrays (LC 349)** - easy
Return the unique values that appear in BOTH arrays.
```
Input:  nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**P2. Intersection of Two Arrays II (LC 350)** - easy
Return all values that appear in both, with multiplicity. (If 2 appears twice in nums1 and three times in nums2, include 2 twice in the result.)
```
Input:  nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2, 2]
```

**P3. Jewels and Stones (LC 771)** - easy
Each char in `jewels` is a type of jewel. Each char in `stones` is one stone. How many stones are jewels?
```
Input:  jewels = "aA", stones = "aAAbbbb"
Output: 3
```

**P4. Roman to Integer (LC 13)** - easy
Convert a Roman numeral string to an integer.
```
Input:  "MCMXCIV"
Output: 1994
```
Hint: build a dict mapping each Roman letter to its value. Walk the string. If a letter has a smaller value than the next one, subtract it; otherwise add it.

**P5. Unique Number of Occurrences (LC 1207)** - easy
Return True if every value in `arr` has a UNIQUE frequency. (No two values have the same count.)
```
Input:  [1, 2, 2, 1, 1, 3]
Output: True   (1 appears 3 times, 2 appears 2 times, 3 appears 1 time - all different counts)

Input:  [1, 2]
Output: False  (both appear once - same count)
```

**P6. Distribute Candies (LC 575)** - easy
Alice has `n` candies. She can eat at most `n/2`. How many DIFFERENT types of candy can she eat?
```
Input:  [1, 1, 2, 2, 3, 3]
Output: 3  (she eats 3 different types)
```

**P7. N-Repeated Element in Size 2N Array (LC 961)** - easy
In an array of size `2n`, exactly one element appears `n` times. Find it.
```
Input:  [1, 2, 3, 3]
Output: 3
```

**P8. Find All Numbers Disappeared in an Array (LC 448)** - easy
Given `nums` of length `n` with values in `[1, n]`, return the values in `[1, n]` that do NOT appear in `nums`.
```
Input:  [4, 3, 2, 7, 8, 2, 3, 1]
Output: [5, 6]
```

**P9. Subdomain Visit Count (LC 811)** - medium
Each input string is two parts separated by ONE space: a number (how many visits) and a domain. Example: `"5 google.mail.com"` means `google.mail.com` was visited 5 times. We then need to also count visits to `mail.com` and `com`. For `"900 google.mail.com"`, all of `mail.com`, `google.mail.com`, and `com` get 900 visits. Return each subdomain's total in any format like `"<count> <subdomain>"`.
```
Input:  ["9001 discuss.leetcode.com"]
Output: ["9001 leetcode.com", "9001 discuss.leetcode.com", "9001 com"]
```

**P10. Word Pattern (LC 290)** - medium
Does `s` follow the same letter pattern as `pattern`? E.g., `pattern = "abba"`, `s = "dog cat cat dog"` -> True.
```
Input:  pattern = "abba", s = "dog cat cat dog"
Output: True

Input:  pattern = "abba", s = "dog cat cat fish"
Output: False
```

**P11. Isomorphic Strings (LC 205)** - medium
Two strings are isomorphic if you can map every char of `s` to a char of `t` (and vice versa) such that `s` becomes `t`. Each char must map to exactly one other.
```
Input:  s = "egg", t = "add"
Output: True   (e->a, g->d)

Input:  s = "foo", t = "bar"
Output: False  (o would need to map to both a and r)
```

**P12. Longest Palindrome (LC 409)** - easy
Given a string, find the length of the LONGEST palindrome you can build using its letters. (Each letter can be used at most as many times as it appears.)
```
Input:  "abccccdd"
Output: 7   ("dccaccd" - length 7)
```
Hint: pairs of letters contribute 2 each. You can use one odd letter in the middle.

**P13. Check if N and Its Double Exist (LC 1346)** - easy
Return True if there exist indexes `i != j` such that `arr[i] == 2 * arr[j]`.
```
Input:  [10, 2, 5, 3]
Output: True   (10 = 2 * 5)
```

**P14. Maximum Number of Balloons (LC 1189)** - easy
How many times can you spell `"balloon"` from the letters in `text`? Each letter in text can be used once.
```
Input:  "loonbalxballpoon"
Output: 2
```

**P15. Unique Email Addresses (LC 929)** - medium
For each email, normalize it using these rules, then return the count of UNIQUE final emails.

- An email looks like `local@domain`.
- In the LOCAL part only: ignore everything after a `+`.
- In the LOCAL part only: ignore all `.` characters.
- The DOMAIN part is kept as-is.

Example: `"al.ice+spam@x.com"` is the same email as `"alice@x.com"`.
```
Input:  ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
Output: 2
```

---

## Solutions

> **Stop.** Did you try every problem? Reading the solutions without trying is the fastest way to feel like you understand and then fail the interview.

---

### P1. Intersection of Two Arrays

```python
def intersection(nums1, nums2):
    return list(set(nums1) & set(nums2))
```

**Key insight.** Set intersection (`&`) is exactly what the problem asks for.

**Complexity.** O(n + m) time, O(n + m) space.

---

### P2. Intersection of Two Arrays II

```python
from collections import Counter

def intersect(nums1, nums2):
    return list((Counter(nums1) & Counter(nums2)).elements())
```

**Key insight.** Counter intersection (`&`) takes the MIN count for each key. `.elements()` expands the Counter back into a list with repetitions.

Alternative (more explicit):

```python
def intersect(nums1, nums2):
    c1 = Counter(nums1)
    c2 = Counter(nums2)
    result = []
    for num, count in c1.items():
        common = min(count, c2[num])
        result.extend([num] * common)
    return result
```

**Complexity.** O(n + m) time, O(n + m) space.

---

### P3. Jewels and Stones

```python
def num_jewels_in_stones(jewels, stones):
    jewel_set = set(jewels)
    return sum(1 for s in stones if s in jewel_set)
```

**Key insight.** Put jewels in a set for O(1) membership. For each stone, check if it is a jewel.

**Python note.** `sum(1 for s in stones if s in jewel_set)` counts how many items match. Each match contributes `1` to the sum. Same as: start `count = 0`, loop, do `count += 1` for each match.

**Complexity.** O(j + s) time, O(j) space.

---

### P4. Roman to Integer

```python
def roman_to_int(s):
    values = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    }

    total = 0
    n = len(s)
    for i in range(n):
        if i + 1 < n and values[s[i]] < values[s[i + 1]]:
            total -= values[s[i]]      # subtract (e.g., IV = 4)
        else:
            total += values[s[i]]
    return total
```

**Key insight.** Dict for the lookup table. The Roman rule: if a smaller value sits LEFT of a larger value, subtract it.

**Complexity.** O(n) time, O(1) space (the dict has only 7 entries).

---

### P5. Unique Number of Occurrences

```python
from collections import Counter

def unique_occurrences(arr):
    counts = Counter(arr).values()
    return len(set(counts)) == len(counts)
```

**Key insight.** Get all the counts as a collection. If turning it into a set keeps the same length, every count was unique.

**Complexity.** O(n) time, O(n) space.

---

### P6. Distribute Candies

```python
def distribute_candies(candy_type):
    types = len(set(candy_type))
    return min(types, len(candy_type) // 2)
```

**Key insight.** Alice can eat at most `n/2` candies. If she eats one of each type, she can get up to `types` different ones. So the answer is `min(types, n/2)`.

**Complexity.** O(n) time, O(n) space.

---

### P7. N-Repeated Element

```python
def repeated_n_times(nums):
    seen = set()
    for x in nums:
        if x in seen:
            return x
        seen.add(x)
```

**Key insight.** Since one element appears n times and the others only once each, the first duplicate we hit IS the answer.

**Complexity.** O(n) time, O(n) space.

---

### P8. Find All Numbers Disappeared in an Array

```python
def find_disappeared_numbers(nums):
    n = len(nums)
    return list(set(range(1, n + 1)) - set(nums))
```

**Key insight.** Set difference. "What numbers in `[1, n]` are NOT in nums?" That is exactly `set(full_range) - set(nums)`.

> **Why.** We build the full set of numbers we expect (`1` to `n`), then subtract the set we actually have. What remains is what is missing. Set difference (`-`) returns a set of items in the left set but NOT in the right set.

**Complexity.** O(n) time, O(n) space.

---

### P9. Subdomain Visit Count

```python
from collections import defaultdict

def subdomain_visits(cpdomains):
    counts = defaultdict(int)

    for entry in cpdomains:
        count_str, domain = entry.split()   # "9001 a.b.com" -> "9001", "a.b.com"
        count = int(count_str)

        parts = domain.split(".")
        for i in range(len(parts)):
            sub = ".".join(parts[i:])       # all subdomains from i onwards
            counts[sub] += count

    return [f"{c} {d}" for d, c in counts.items()]
```

**Key insight.** For each input, split the domain by dots. Every suffix (starting at index 0, 1, 2, ...) is a subdomain. Use `defaultdict(int)` so we can just `+=`.

**Python note.** `f"{c} {d}"` is an f-string. It builds a string with values inserted.

**Complexity.** O(N * k) where N is the number of inputs and k is the max number of dots per domain.

---

### P10. Word Pattern

```python
def word_pattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words):
        return False

    p_to_w = {}      # char of pattern -> word
    w_to_p = {}      # word -> char of pattern

    for ch, w in zip(pattern, words):
        if ch in p_to_w and p_to_w[ch] != w:
            return False
        if w in w_to_p and w_to_p[w] != ch:
            return False
        p_to_w[ch] = w
        w_to_p[w] = ch

    return True
```

**Key insight.** Need TWO dicts. One enforces "each pattern char maps to ONE word." The other enforces "each word maps to ONE pattern char." (A one-to-one mapping.)

**Complexity.** O(n) time, O(n) space.

---

### P11. Isomorphic Strings

```python
def is_isomorphic(s, t):
    if len(s) != len(t):
        return False

    s_to_t = {}
    t_to_s = {}

    for a, b in zip(s, t):
        if a in s_to_t and s_to_t[a] != b:
            return False
        if b in t_to_s and t_to_s[b] != a:
            return False
        s_to_t[a] = b
        t_to_s[b] = a

    return True
```

**Key insight.** Same trick as Word Pattern. Two dicts to enforce a bijection (one-to-one mapping).

**Complexity.** O(n) time, O(k) space (k is at most the alphabet size).

---

### P12. Longest Palindrome

```python
from collections import Counter

def longest_palindrome(s):
    counts = Counter(s)

    length = 0
    has_odd = False
    for c in counts.values():
        length += (c // 2) * 2       # use pairs of this letter
        if c % 2 == 1:
            has_odd = True

    if has_odd:
        length += 1                  # one odd letter can sit in the middle

    return length
```

**Key insight.** A palindrome is symmetric. Each letter contributes pairs (count // 2 pairs, each adds 2 to the length). If ANY letter has an odd count, you can put one of them in the center.

> **Why `(c // 2) * 2`?** Every letter that appears an even number of times can fully pair up — all `c` copies sit in the palindrome. A letter that appears `c` times where `c` is odd contributes `c - 1` (the even part) PLUS we can use ONE odd letter as the middle character. `(c // 2) * 2` is the largest even number that is `<= c`. Example: `c = 5` gives `(5 // 2) * 2 = 4`. `c = 6` gives `(6 // 2) * 2 = 6`.

**Complexity.** O(n) time, O(k) space.

---

### P13. Check if N and Its Double Exist

```python
def check_if_exist(arr):
    seen = set()
    for x in arr:
        if 2 * x in seen or (x % 2 == 0 and x // 2 in seen):
            return True
        seen.add(x)
    return False
```

**Key insight.** For each `x`, check if `2x` or `x/2` is already in `seen`. (The `x % 2 == 0` check makes sure we only do `x/2` when it is an integer.)

**Complexity.** O(n) time, O(n) space.

---

### P14. Maximum Number of Balloons

```python
from collections import Counter

def max_number_of_balloons(text):
    text_counts = Counter(text)
    balloon_counts = Counter("balloon")   # {b:1, a:1, l:2, o:2, n:1}

    # how many full "balloon" can we form?
    return min(text_counts[ch] // balloon_counts[ch] for ch in balloon_counts)
```

**Key insight.** For each letter in `"balloon"`, count how many times we have it in `text`, divide by how many times we NEED it for one balloon. The minimum across all letters is the answer.

**Python note.** `min(... for ...)` is a generator inside `min`. Returns the smallest of the values.

**Complexity.** O(n) time, O(1) space (the balloon counter has 5 entries).

---

### P15. Unique Email Addresses

```python
def num_unique_emails(emails):
    seen = set()

    for email in emails:
        local, domain = email.split("@")
        local = local.split("+")[0]     # drop everything after the first "+"
        local = local.replace(".", "")  # drop all dots
        seen.add(local + "@" + domain)

    return len(seen)
```

**Key insight.** Normalize each email to its "real" address (apply the rules), put into a set. The set's size is the answer.

**Complexity.** O(total characters) time, O(unique emails) space.

---

## Flashcards

| Front | Back |
|-------|------|
| Empty set literal? | `set()`. NOT `{}` (that is an empty dict). |
| Average lookup cost in a dict? | O(1) |
| `d["missing"]` does what? | Raises `KeyError` |
| `d.get("missing")` returns? | `None` (no crash) |
| `d.get("missing", 0)` returns? | `0` |
| Why isn't `list` hashable? | It is mutable. Hash would change. |
| Convert a list to a hashable key? | `tuple(my_list)` or `frozenset(my_list)` |
| Set union, intersection, difference, symmetric difference? | `\|`, `&`, `-`, `^` |
| `defaultdict(list)["new_key"]` does what to the dict? | Creates the entry `"new_key": []` |
| `Counter` for missing key returns? | `0` |
| Counter subtraction drops what? | Keys with zero or negative result |
| The "Two Sum" pattern uses which structure? | dict mapping value to index |
| The "Group Anagrams" pattern uses what? | `defaultdict(list)` keyed by canonical form (e.g., sorted letters) |
| Why only start counting a chain from the smallest number? | Avoid double-counting. A number is the smallest in its chain if `num - 1` is NOT in the set. |
| How to detect a cycle in repeating computations? | Use a set of seen states. If you see a state twice, you are in a cycle. |
| `len(set(nums)) != len(nums)` checks? | Whether duplicates exist |
| `f"{x} {y}"` is? | An f-string that inserts `x` and `y` |
| One-liner: items in BOTH lists with multiplicity? | `list((Counter(a) & Counter(b)).elements())` |
| What does `Counter.elements()` do? | Expands a Counter back into a flat list, repeating each key by its count. |
| `"a.b.c".split(".")` returns? | `['a', 'b', 'c']` |
| `".".join(['a', 'b', 'c'])` returns? | `"a.b.c"` |
| In `for k, v in d.items():`, k and v are? | Each key and its value, one pair per iteration |

---

## Spaced Repetition Schedule

| Day | Date (fill in) | Task |
|-----|---------------|------|
| 0   | _____ | Read chapter. Do worked examples on paper. Try all 15 practice. |
| 1   | _____ | Review flashcards. Re-do problems you got wrong. |
| 3   | _____ | Review flashcards. Pick 3 random problems. Re-solve from scratch. |
| 7   | _____ | Review flashcards. Pick 3 different problems. Re-solve from scratch. |
| 14  | _____ | Final review. If all 3 feel easy, move to Chapter 4. |

**Promotion rule.** Move on only when you can solve any 3 practice problems, picked at random, without help.

---

## What's next

**Chapter 4** covers Stacks and Queues. You will learn `list.append/pop` as a stack, `collections.deque` for a queue, and the first taste of the monotonic stack pattern (Next Greater Element). Two new data structures, one new pattern.


---

# Chapter 4 - Stacks and Queues

> Two of the simplest data structures, but they unlock at least 6 patterns. Most "matching", "undo", "next greater", and "sliding window" problems are stack or queue problems in disguise.

---

## What you will learn

By the end of this chapter, you can solve:

- Valid Parentheses (LC 20)
- Remove All Adjacent Duplicates in String (LC 1047)
- Implement Queue Using Stacks (LC 232)
- Min Stack (LC 155)
- Daily Temperatures (LC 739)

Plus 15 practice problems including Next Greater Element II, Decode String, and Sliding Window Maximum.

You will also learn:

- LIFO (stack) vs FIFO (queue), with diagrams
- Python `list` as a stack (O(1) push/pop at the end)
- `collections.deque` as a queue (O(1) at BOTH ends)
- Why never use `list.pop(0)` for a queue (it is O(n))
- Python class basics: `class`, `__init__`, `self`, methods (you NEED these for some interview problems)
- Six patterns: matching pairs, adjacent cancellation, auxiliary stack, two-stack queue, **monotonic stack**, **monotonic deque**
- Amortized O(1) (and why two-stack queue is amortized O(1))

---

## Vocabulary

| Word | Plain meaning | Tiny example |
|------|---------------|--------------|
| Stack | A LIFO collection: last in, first out | `list` in Python (use `append` and `pop`) |
| Queue | A FIFO collection: first in, first out | `deque` in Python |
| Deque (double-ended queue) | A collection where you can add or remove from BOTH ends in O(1) | `collections.deque` |
| Push / Pop | Add to / remove from the top of a stack | `stack.append(x)` / `stack.pop()` |
| Enqueue / Dequeue | Add to the back / remove from the front of a queue | `q.append(x)` / `q.popleft()` |
| Peek (or Top) | Look at the top item without removing it | `stack[-1]` |
| LIFO | Last In First Out (stack order) | last person in line is served first |
| FIFO | First In First Out (queue order) | first person in line is served first |
| Amortized O(1) | Each call is NOT O(1), but the AVERAGE across many calls IS O(1) | two-stack queue dequeue |
| Monotonic | Always increasing OR always decreasing | `[5, 4, 3, 1]` is monotonically decreasing |

---

## The big picture: stack vs queue

Both are sequences with restricted access. The difference is **which end you remove from**.

```
STACK (LIFO)                         QUEUE (FIFO)

push -> [top]                        enqueue -> [back]
        [   ]                                   [   ]
        [   ]                                   [   ]
pop <-  [top]                                   [   ]
                                     dequeue <- [front]

You add and remove from the SAME end       You add to one end,
                                            remove from the OTHER end
```

> **Silly hook.** A stack is a pile of plates - you put a new plate on top, and you take the top plate off. A queue is a line at a coffee shop - the person who got in line FIRST gets served first.

**When to use which:**

| You need to... | Use |
|----------------|-----|
| Undo / go back to the most recent thing | stack |
| Match opening and closing pairs | stack |
| Track "what was I doing before this" | stack |
| Process items in arrival order | queue |
| BFS on a tree or graph (Chapter 14, 17) | queue |
| Sliding window of recent items | deque |
| Track max/min in a window | monotonic deque |

---

## Python Primer

### Looping a fixed number of times (`for _ in range(n)`)

When you want to "do something n times" but do NOT care about the loop counter, use an underscore as the variable name. `_` is a Python convention meaning "I am not using this value."

```python
# Print "hi" 3 times
for _ in range(3):
    print("hi")
```

Same as `for i in range(3):` but signals to the reader that `i` is unused. You will see this any time you rotate, repeat, or burn through a known number of steps without indexing into something.

```python
# Pop 5 items off a stack
for _ in range(5):
    stack.pop()
```

### Stack with a list

Python's built-in `list` is already a stack. No imports needed.

```python
stack = []                  # empty stack

stack.append(1)             # push 1     stack: [1]
stack.append(2)             # push 2     stack: [1, 2]
stack.append(3)             # push 3     stack: [1, 2, 3]

top = stack[-1]             # peek       top is 3, stack unchanged

last = stack.pop()          # pop        last is 3, stack: [1, 2]
last = stack.pop()          # pop        last is 2, stack: [1]

if not stack:               # empty check
    print("empty")
```

| Operation | Code | Time |
|-----------|------|------|
| Push | `stack.append(x)` | O(1) |
| Pop | `stack.pop()` | O(1) |
| Peek | `stack[-1]` | O(1) |
| Size | `len(stack)` | O(1) |
| Empty check | `not stack` (or `len(stack) == 0`) | O(1) |

> **Watch out.** `stack.pop()` on an empty stack raises `IndexError`. Always check `if stack:` before popping.

### Queue with `collections.deque`

`deque` is in the `collections` module. It supports O(1) operations at BOTH ends.

```python
from collections import deque

q = deque()                 # empty deque

q.append(1)                 # enqueue       q: [1]
q.append(2)                 # enqueue       q: [1, 2]
q.append(3)                 # enqueue       q: [1, 2, 3]

front = q[0]                # peek front    front is 1
front = q.popleft()         # dequeue       front is 1, q: [2, 3]
front = q.popleft()         # dequeue       front is 2, q: [3]

# Bonus: deque also works as a stack (use append + pop, not append + popleft)
# Bonus: deque also lets you push to the front:
q.appendleft(0)             # push to left  q: [0, 3]
```

| Operation | Code | Time |
|-----------|------|------|
| Enqueue (add to right) | `q.append(x)` | O(1) |
| Dequeue (remove from left) | `q.popleft()` | O(1) |
| Push left | `q.appendleft(x)` | O(1) |
| Pop right | `q.pop()` | O(1) |
| Peek front | `q[0]` | O(1) |
| Peek back | `q[-1]` | O(1) |
| Size | `len(q)` | O(1) |

You can build a deque from any iterable:

```python
q = deque([1, 2, 3])        # q: [1, 2, 3]
q = deque("abc")            # q: ['a', 'b', 'c']
q = deque(range(5))         # q: [0, 1, 2, 3, 4]
```

### Rotating a deque (front-to-back trick)

Sometimes you want the FRONT item to become the BACK item (or the other way around). The pattern: pop from one end, append to the other. Combined with `for _ in range(n)`, you can rotate the whole queue.

```python
q = deque([1, 2, 3, 4])

# Move the front to the back ONCE: q becomes [2, 3, 4, 1]
q.append(q.popleft())

# Move the front to the back THREE TIMES: q becomes [4, 1, 2, 3]
q = deque([1, 2, 3, 4])
for _ in range(3):
    q.append(q.popleft())
```

Read the loop as: "take whoever is at the front, put them at the back, do this 3 times."

> **Why this matters.** Rotating `n - 1` times moves the OLD front (item `1`) to the back and puts the OLD back (item `4`) at the front. This is how you simulate stack-like LIFO behavior using a queue. P14 (Implement Stack using Queues) is exactly this trick: after every push, rotate so the newest item is at the front.

Each rotation step is O(1), so rotating `k` times is O(k).

### Why NOT use a list as a queue

You might think: `list.append(x)` for enqueue and `list.pop(0)` for dequeue. It works, but it is **slow**.

```python
# DO NOT use list as a queue:
q = []
q.append(1)
q.pop(0)         # O(n) - shifts every remaining item left by one
```

`list.pop(0)` removes the first item, then has to slide every other item over by one position. That is O(n). With a million items, every dequeue is a million-step operation.

`deque.popleft()` is O(1). Always use `deque` for a queue.

### Python class basics (you NEED this for Min Stack and Implement Queue Using Stacks)

Some interview problems ask you to **implement a data structure**. You need a class.

```python
class Counter:
    def __init__(self):              # constructor, runs when you make a new Counter
        self.count = 0               # an attribute, lives on this instance

    def increment(self):             # a method
        self.count += 1

    def get(self):
        return self.count

c = Counter()                        # make an instance
c.increment()                        # call method
c.increment()
print(c.get())                       # 2
```

The pieces:

| Piece | What it does |
|-------|--------------|
| `class Name:` | Defines a new type of object |
| `def __init__(self):` | The constructor. Runs once when you make a new instance. |
| `self` | The current instance. Like "this" in other languages. |
| `self.x = ...` | An attribute (data stored on the instance) |
| `def method(self):` | A method (function attached to the class) |
| `obj.x` / `obj.method()` | Access attribute / call method |

For a stack class:

```python
class MyStack:
    def __init__(self):
        self.items = []              # store everything in a list

    def push(self, x):
        self.items.append(x)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[-1]

    def is_empty(self):
        return not self.items

s = MyStack()
s.push(1)
s.push(2)
print(s.peek())                      # 2
print(s.pop())                       # 2
```

> **Python note.** `self` is the first argument of every method. You do NOT pass it when calling: `s.push(1)` automatically passes `s` as `self`. You only WRITE `self` in the method definition.

### Building a multi-digit number, one character at a time

When you read a string like `"100[a]"`, the `100` arrives as THREE separate characters: `'1'`, `'0'`, `'0'`. You do not know the number is finished until you hit a non-digit. So you accumulate it digit by digit.

The idiom:

```python
current = 0
for c in "100":
    current = current * 10 + int(c)
# current is now 100
```

Trace:

```
start with 0
read '1':  0 * 10 + 1 = 1
read '0':  1 * 10 + 0 = 10
read '0':  10 * 10 + 0 = 100
```

Each new digit shifts the old number one decimal place to the left (multiply by 10), then adds the new digit.

**When to use it.** Any time digits appear inside a string and may be more than one digit long. Decode String (P13) is the classic case: `3[a2[bc]]` reads digits, then `[`, then content. You only stop accumulating when you see a non-digit.

**Detecting a digit char.** Use `c.isdigit()`. It works on a single character: `'7'.isdigit()` is `True`, `'a'.isdigit()` is `False`. (Other single-char string methods work the same way: `'A'.lower()` is `'a'`, `'A'.isalpha()` is `True`.)

> **Why this matters.** Without this idiom, you would have to find each number's start and end, slice it out, then `int(...)` the slice. The accumulation pattern is one line and does both jobs at once.

### Negative numbers in strings

`int(...)` also works on a string with a leading `-`:

```python
int("-2")     # -2
int("12")     # 12
```

Useful when a stack input is a list of strings that include negative numbers (Baseball Game, P1).

---

## How stack/deque operations are O(1)

A Python `list` is a dynamic array. Pushing or popping at the END is just "use the last slot" - O(1). No shifting.

A `deque` is a doubly linked list of small array blocks. Pushing or popping at EITHER END is O(1) - just unlink or link a node.

Slicing the middle of either is slow, but stacks and queues never do that.

### Amortized O(1) (you will see this term)

Sometimes a single operation is O(n) but the AVERAGE across many operations is O(1). That is called **amortized O(1)**.

Two examples:

1. **list.append()**: when the list is full, Python doubles its internal array. That one append is O(n). But across many appends, the cost averages to O(1).
2. **Two-stack queue dequeue** (Example 3 below): when the dequeue stack is empty, we transfer all n items from the enqueue stack. That dequeue is O(n). But each item is transferred at most ONCE in its lifetime. So across n dequeues, the total work is O(n), averaging O(1) per call.

Interview language: "enqueue is O(1), dequeue is amortized O(1)."

---

## The Stack and Queue Patterns

Six patterns cover most stack/queue problems.

### Pattern A: Matching pairs (parentheses)

**Use when:** opening and closing characters must match. `()`, `[]`, `{}`, HTML tags, etc.

**Idea.** Push opening characters. When you see a closing character, the top of the stack MUST be the matching opener. If not, fail.

```python
def is_balanced(s):
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for c in s:
        if c in "([{":
            stack.append(c)
        else:                                # c is a closer
            if not stack or stack[-1] != pairs[c]:
                return False
            stack.pop()
    return not stack                         # stack must be empty at the end
```

### Pattern B: Adjacent cancellation

**Use when:** items cancel out when they sit next to each other ("undo last thing" feel). Backspace, adjacent duplicate removal, star characters.

**Idea.** Push each new item. If it matches/cancels the top of the stack, pop instead.

```python
def remove_adjacent_duplicates(s):
    stack = []
    for c in s:
        if stack and c == stack[-1]:
            stack.pop()                      # cancel out
        else:
            stack.append(c)
    return "".join(stack)
```

### Pattern C: Auxiliary stack (track extra state)

**Use when:** you need to remember something extra about the stack (like the minimum so far, or the count of something).

**Idea.** Keep a SECOND stack in parallel. Each push to the main stack also pushes the "extra info" to the second stack.

Example: a stack that supports `getMin()` in O(1) (Min Stack, Worked Example 4).

### Pattern D: Two-stack trick (queue from stacks, stack from queues, etc.)

**Use when:** you need to flip the access order of a structure. The classic case: implement a queue using only stacks.

**Idea.** Use one stack as the "input" pile and a SECOND stack as the "output" pile. When the output pile is empty and you need to dequeue, transfer everything from input to output. This reverses the order, so the oldest item ends up on top.

This gives **amortized O(1)** for the slower operation.

### Pattern E: Monotonic stack (next greater / next smaller)

**Use when:** "for each item, find the next greater element to the right" (or next smaller, or previous greater, etc.).

**Idea.** Keep a stack of items we have NOT YET FOUND the answer for. As we walk through the input, the new item might be the answer for items on the stack. Pop those, record the answer, then push the new item.

```python
def next_greater(nums):
    n = len(nums)
    result = [-1] * n                        # default: no greater element
    stack = []                               # stores INDEXES

    for i in range(n):
        # Any item on the stack smaller than nums[i] now has its answer
        while stack and nums[stack[-1]] < nums[i]:
            j = stack.pop()
            result[j] = nums[i]
        stack.append(i)

    return result
```

The stack always holds indexes in **decreasing order of value** (newest on top is smallest). When a new bigger value arrives, it pops the smaller ones off and records them. That is why it is "monotonic."

**Time: O(n)** total. Each index is pushed once and popped once.

> **Silly hook.** Imagine waiting in a line at a height-restricted ride. Each person on line is taller than the people behind them (monotonic decreasing). When a tall new person walks up, every shorter person behind them gets pulled out of line because the tall person blocks their view forever.

### Pattern F: Monotonic deque (sliding window extremes)

**Use when:** "find the MAX (or MIN) of every window of size k."

**Idea.** Same monotonic concept as Pattern E, but using a deque so we can also remove items from the LEFT (outdated, outside the window).

Three steps per slide:
1. **Pop from the right** any candidates `<= new value`. (Smaller ones can never be the max while the new bigger value is in the window.)
2. **Push** the new value (and its index, so we know when it leaves the window).
3. **Pop from the left** any candidate whose index is now outside the window.

The max is always `dq[0]` (leftmost, oldest, biggest).

We will use this in Practice Problem 15. The full template is shown there.

### Putting tuples on a stack (or deque)

A stack item does not have to be a single number. You can push a **tuple** - like `(count, partial_string)` - and unpack it when you pop.

```python
stack = []
stack.append((3, "ab"))
stack.append((2, "x"))
count, text = stack.pop()        # count = 2, text = "x"
```

> **Why.** Each entry on the stack can remember two or more things. Useful when one item alone is not enough state. Decode String (P13) pushes `(count, partial_string)`. Sliding Window Maximum (P15) pushes `(value, index)` onto a deque.

You can also peek a piece of a stacked tuple:

```python
stack[-1]              # the whole tuple, e.g. (2, "x")
stack[-1][0]           # just the first piece, e.g. 2
stack[-1][1]           # just the second piece, e.g. "x"
```

**String multiplication.** A common companion when you store strings on a stack:

```python
"ab" * 3               # "ababab"
n = 3
"ab" * n               # "ababab"
```

> **Why.** Same idea as `[0] * 3` from Chapter 1, but for strings. `s * count` repeats `s` count times. Used in P13.

---

## Worked Examples

Five problems in Alex Xu format: Problem, Intuition, Visual, Code, Complexity, Edge cases.

---

### Example 1. Valid Parentheses (LC 20)

#### Problem

> Given a string with only `(`, `)`, `{`, `}`, `[`, `]`, return `True` if all brackets are properly matched and nested.

```
Input:  "()[]{}"
Output: True

Input:  "([)]"
Output: False    (mismatched nesting)

Input:  "(("
Output: False    (never closed)
```

#### Intuition

This is Pattern A: matching pairs.

When we see an OPENER (`(`, `[`, `{`), we have a promise: a matching CLOSER must come later. Push it on the stack to remember.

When we see a CLOSER, the top of the stack MUST be the matching opener. If not, fail. If yes, pop and move on.

At the very end, the stack MUST be empty (every opener got its closer).

> **Silly hook.** Imagine the stack as a memory of "rooms you have entered." Each opener is "entering a room." Each closer is "leaving the most recent room." You can only leave the room you just entered. If you try to leave a different room, the building plan is broken.

#### Visual walkthrough

```
Input: "([)]"

c | stack action            | stack after
--|-------------------------|------------
( | opener, push            | ['(']
[ | opener, push            | ['(', '[']
) | closer, top is '[', mismatch -> return False

Input: "()[]{}"

c | stack action            | stack after
--|-------------------------|------------
( | opener, push            | ['(']
) | closer, top '(', match, pop | []
[ | opener, push            | ['[']
] | closer, top '[', match, pop | []
{ | opener, push            | ['{']
} | closer, top '{', match, pop | []

end | stack empty? YES -> return True
```

#### Code

```python
def is_valid(s):
    pairs = {')': '(', ']': '[', '}': '{'}     # closer -> matching opener
    stack = []

    for c in s:
        if c in "([{":                          # opener
            stack.append(c)
        else:                                   # closer
            if not stack or stack[-1] != pairs[c]:
                return False
            stack.pop()

    return not stack                            # stack must be empty
```

#### Complexity

**Time: O(n)** where n is the length of `s`.

> **Why.** One loop through `s`. Each step does O(1) work: a dict lookup, a stack push or pop, an `if`.

**Space: O(n).**

> **Why.** Worst case the string is all openers (`"((((..."`), so the stack holds n items.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `""` | `True` | empty string is trivially balanced |
| `"("` | `False` | opener never closed |
| `")"` | `False` | closer with no opener, stack is empty |
| `"(){}[]"` | `True` | three matched pairs |
| `"({[]})"` | `True` | deep nesting |

---

### Example 2. Remove All Adjacent Duplicates in String (LC 1047) - Alex Xu

#### Problem

> Repeatedly remove pairs of adjacent equal letters until no more pairs exist. Return the final string.

```
Input:  "abbaca"
Output: "ca"

Trace:  abbaca -> a[bb]aca -> aaca -> [aa]ca -> ca
```

#### Intuition

This is Pattern B: adjacent cancellation.

We could repeatedly scan the string for any adjacent pair and remove it. But the SAME work happens many times. Slow.

Insight from the Alex Xu book: use a stack to "build the result string" character by character. As you read each character:

- If it equals the top of the stack -> the two cancel out, **pop**.
- Otherwise -> **push** the new character.

The final stack IS the resulting string.

> **Silly hook.** Imagine a tower of cards. You add cards one at a time. If a new card matches the top card, they both vanish (annihilation). When all cards are processed, the remaining tower is your answer.

#### Visual walkthrough

```
Input: "abbaca"

c | stack action                       | stack after
--|------------------------------------|------------
a | empty stack, push                  | ['a']
b | top 'a' != 'b', push               | ['a', 'b']
b | top 'b' == 'b', POP (cancel)       | ['a']
a | top 'a' == 'a', POP (cancel)       | []
c | empty stack, push                  | ['c']
a | top 'c' != 'a', push               | ['c', 'a']

return "".join(['c', 'a']) -> "ca"
```

#### Code

```python
def remove_duplicates(s):
    stack = []

    for c in s:
        if stack and c == stack[-1]:
            stack.pop()                          # adjacent duplicate, cancel
        else:
            stack.append(c)

    return "".join(stack)
```

#### Complexity

**Time: O(n).**

> **Why.** Single pass through `s`. Each character is pushed at most once and popped at most once. The `"".join(stack)` is O(n).

**Space: O(n).**

> **Why.** Worst case the stack holds every character (no cancellations: `"abcdef"`).

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `""` | `""` | empty input |
| `"a"` | `"a"` | one char, no pairs |
| `"aa"` | `""` | full cancellation |
| `"abba"` | `""` | nested cancellation: `bb` first, then `aa` |
| `"abcdef"` | `"abcdef"` | no duplicates, nothing changes |

---

### Example 3. Implement Queue Using Stacks (LC 232) - Alex Xu

#### Problem

> Build a queue using ONLY stack operations. Implement:
> - `enqueue(x)`: add `x` to the back
> - `dequeue()`: remove and return the FRONT (oldest)
> - `peek()`: return the FRONT without removing

```
Operations: enqueue(1), enqueue(2), dequeue(), enqueue(3), peek()
Outputs:    -, -, 1, -, 2
```

#### Intuition

This is Pattern D: the two-stack trick.

A stack is LIFO (newest on top). A queue is FIFO (oldest first). So if we only have stacks, the OLDEST item is at the BOTTOM of a single stack - hard to reach.

**Idea: use TWO stacks.**

- `enqueue_stack`: new items go here. Newest on top.
- `dequeue_stack`: items waiting to come out. Oldest on top.

```
enqueue(1), enqueue(2), enqueue(3) -> enqueue_stack: [1, 2, 3] (3 on top)
                                       dequeue_stack: []

When we need to dequeue, transfer EVERYTHING from enqueue_stack to dequeue_stack
by popping from one and pushing to the other. This REVERSES the order:

  enqueue_stack: []
  dequeue_stack: [3, 2, 1]  (1 on top - the oldest, ready to come out)

Now dequeue() pops 1 from dequeue_stack. Correct! Then 2. Then 3.
```

**Key rule:** only transfer when `dequeue_stack` is EMPTY. Otherwise, the oldest item is already on top of dequeue_stack and we should just pop from there.

This gives **amortized O(1)** dequeue: each item is transferred between stacks at most ONCE in its lifetime.

#### Visual walkthrough

```
Initial:  enqueue_stack: []     dequeue_stack: []

enqueue(1):
  push 1 to enqueue_stack
  enqueue_stack: [1]            dequeue_stack: []

enqueue(2):
  push 2 to enqueue_stack
  enqueue_stack: [1, 2]         dequeue_stack: []

dequeue():
  dequeue_stack is empty, transfer everything
  pop 2 from enqueue, push to dequeue:   enqueue: [1]        dequeue: [2]
  pop 1 from enqueue, push to dequeue:   enqueue: []         dequeue: [2, 1]
  pop from dequeue_stack -> 1            enqueue: []         dequeue: [2]
  return 1

enqueue(3):
  push 3 to enqueue_stack
  enqueue_stack: [3]            dequeue_stack: [2]

peek():
  dequeue_stack NOT empty, no transfer
  top of dequeue_stack is 2
  return 2 (do NOT pop)
```

#### Code

```python
class MyQueue:
    def __init__(self):
        self.enqueue_stack = []           # newest on top
        self.dequeue_stack = []           # oldest on top

    def enqueue(self, x):
        self.enqueue_stack.append(x)

    def _transfer_if_needed(self):
        # Move everything from enqueue_stack to dequeue_stack
        # ONLY when dequeue_stack is empty
        if not self.dequeue_stack:
            while self.enqueue_stack:
                self.dequeue_stack.append(self.enqueue_stack.pop())

    def dequeue(self):
        self._transfer_if_needed()
        return self.dequeue_stack.pop()

    def peek(self):
        self._transfer_if_needed()
        return self.dequeue_stack[-1]

    def empty(self):
        return not self.enqueue_stack and not self.dequeue_stack
```

> **Python note.** `_transfer_if_needed` starts with an underscore. By convention in Python, methods starting with `_` are "internal" - users of the class should not call them directly.

#### Complexity

**Time:**
- `enqueue(x)`: **O(1)**. One push.
- `dequeue()` / `peek()`: **amortized O(1)**. A single call may transfer n items (O(n)) when dequeue_stack is empty. But each item is transferred between stacks AT MOST ONCE. Across n dequeues, total work is O(n), so the average per call is O(1).

**Space: O(n)** where n is the total number of items currently in the queue.

#### Edge cases

| Operation sequence | Expected | Why |
|--------------------|----------|-----|
| `enqueue(1), dequeue()` | `1` | trivial |
| `enqueue(1), enqueue(2), peek(), dequeue()` | `1, 1` | peek does not remove |
| `enqueue(1), dequeue(), enqueue(2), dequeue()` | `1, 2` | mix of enqueues and dequeues |
| `empty()` on a brand new queue | `True` | nothing pushed yet |

---

### Example 4. Min Stack (LC 155)

#### Problem

> Build a stack that also supports `get_min()` in O(1).
>
> - `push(x)`, `pop()`, `top()` work like a normal stack.
> - `get_min()` returns the smallest value currently in the stack, in O(1).

```
push(3), push(5), push(2), push(1)
get_min() -> 1
pop()
get_min() -> 2
pop()
get_min() -> 3
```

#### Intuition

This is Pattern C: auxiliary stack.

The trick: keep a SECOND stack (`mins`) in parallel. Every push to the main stack also pushes the CURRENT minimum to `mins`.

```
push 3:  main = [3]         mins = [3]
push 5:  main = [3, 5]      mins = [3, 3]    (new min is still 3)
push 2:  main = [3, 5, 2]   mins = [3, 3, 2] (new min is 2)
push 1:  main = [3,5,2,1]   mins = [3,3,2,1] (new min is 1)
```

To get the min: `mins[-1]`. O(1).

To pop: pop from BOTH stacks at the same time. The top of `mins` is always the min of whatever main currently holds.

> **Silly hook.** Imagine every plate you put on the stack has a tiny note attached saying "the smallest value visible at this level." When you take a plate off, the note goes with it. The top plate's note ALWAYS tells you the current minimum.

#### Visual walkthrough

```
push 3:  main = [3]              mins = [3]
push 5:  main = [3, 5]           mins = [3, 3]    (min stays at 3)
push 2:  main = [3, 5, 2]        mins = [3, 3, 2] (new min is 2)
push 1:  main = [3, 5, 2, 1]     mins = [3, 3, 2, 1] (new min is 1)

get_min() -> mins[-1] = 1

pop():  main = [3, 5, 2]         mins = [3, 3, 2]
get_min() -> mins[-1] = 2

pop():  main = [3, 5]            mins = [3, 3]
get_min() -> mins[-1] = 3
```

#### Code

```python
class MinStack:
    def __init__(self):
        self.main = []
        self.mins = []                   # parallel stack of current minimums

    def push(self, x):
        self.main.append(x)
        # the new min is the smaller of (x, current min)
        if not self.mins:
            self.mins.append(x)
        else:
            self.mins.append(min(x, self.mins[-1]))

    def pop(self):
        self.main.pop()
        self.mins.pop()

    def top(self):
        return self.main[-1]

    def get_min(self):
        return self.mins[-1]
```

#### Complexity

**Time:** every operation is **O(1)**.

**Space: O(n)** where n is the number of items pushed (two stacks, each up to n).

#### Edge cases

| Operation sequence | Expected | Why |
|--------------------|----------|-----|
| `push(1), get_min()` | `1` | single item |
| `push(2), push(1), pop(), get_min()` | `2` | mins must shrink correctly |
| `push(3), push(3), get_min()` | `3` | duplicates are fine |
| `push(-1), push(0), get_min()` | `-1` | negatives work |

---

### Example 5. Daily Temperatures (LC 739)

#### Problem

> Given a list of daily temperatures, return `answer` where `answer[i]` is the number of days you wait until a WARMER day. If no warmer day comes, use 0.

```
Input:  temps = [73, 74, 75, 71, 69, 72, 76, 73]
Output: [1, 1, 4, 2, 1, 1, 0, 0]
```

Reading the output: on day 0 (temp 73), the next warmer day is day 1 (temp 74). Wait = 1. On day 2 (temp 75), the next warmer day is day 6 (temp 76). Wait = 4. Day 6 and day 7 never see a warmer day, so the answer is 0.

#### Intuition

This is Pattern E: monotonic stack. But there is a new twist - we push **indexes**, not temperatures.

> **Silly hook.** Imagine people standing in a line, each holding up a sign with their temperature. Every person is WAITING for someone hotter to walk by. They keep staring at the door. The line is ordered so the hottest waiting person is at the back of the line and the coolest is at the front of the line... wait, that's backwards. Re-read: the COOLEST waiting person is at the BACK of the stack (smallest temperature on top). When a HOT new person walks in, every cooler person waiting gets their answer ("you waited until today") and walks away. Only people still hotter than the new arrival keep waiting.

So the stack holds people who have NOT yet seen a warmer day. They sit there in **decreasing order of temperature** (newest on top is the coolest). When a warmer day arrives, we pop everyone whose temperature is smaller and record their answer.

**Why store indexes, not temperatures?** The answer is a **distance** (`how many days waited` = `today's index - their index`). To compute a distance, we need both endpoints. If we stored only temperatures, we would lose the position - we could not tell "how many days ago."

The trick: push the **index** `i`. To check the temperature on top of the stack, double-index: `temps[stack[-1]]`.

#### Visual walkthrough

```
temps = [73, 74, 75, 71, 69, 72, 76, 73]
         0   1   2   3   4   5   6   7      (indexes)

i | temps[i] | action                                  | stack (indexes) | answer
--|----------|-----------------------------------------|-----------------|--------
0 |   73     | stack empty, push 0                     | [0]             | [0,0,0,0,0,0,0,0]
1 |   74     | temps[0]=73 < 74, pop 0, ans[0]=1-0=1   | []              | [1,0,0,0,0,0,0,0]
  |          | push 1                                   | [1]             |
2 |   75     | temps[1]=74 < 75, pop 1, ans[1]=2-1=1   | []              | [1,1,0,0,0,0,0,0]
  |          | push 2                                   | [2]             |
3 |   71     | temps[2]=75 >= 71, no pop. push 3        | [2, 3]          | [1,1,0,0,0,0,0,0]
4 |   69     | temps[3]=71 >= 69, no pop. push 4        | [2, 3, 4]       | [1,1,0,0,0,0,0,0]
5 |   72     | temps[4]=69 < 72, pop 4, ans[4]=5-4=1   | [2, 3]          | [1,1,0,0,1,0,0,0]
  |          | temps[3]=71 < 72, pop 3, ans[3]=5-3=2   | [2]             | [1,1,0,2,1,0,0,0]
  |          | temps[2]=75 >= 72, stop. push 5          | [2, 5]          |
6 |   76     | temps[5]=72 < 76, pop 5, ans[5]=6-5=1   | [2]             | [1,1,0,2,1,1,0,0]
  |          | temps[2]=75 < 76, pop 2, ans[2]=6-2=4   | []              | [1,1,4,2,1,1,0,0]
  |          | push 6                                   | [6]             |
7 |   73     | temps[6]=76 >= 73, no pop. push 7        | [6, 7]          | [1,1,4,2,1,1,0,0]

End. Indexes 6 and 7 still on stack -> they never saw a warmer day. answer stays 0 for them.

Final answer: [1, 1, 4, 2, 1, 1, 0, 0]
```

Notice the stack always holds indexes whose temperatures go from HOTTEST at the bottom to COOLEST at the top. That is "monotonic decreasing."

#### Code

```python
def daily_temperatures(temps):
    n = len(temps)
    answer = [0] * n                       # default: no warmer day
    stack = []                             # stores INDEXES, not temperatures

    for i in range(n):
        # while the person on top of the stack is cooler than today
        while stack and temps[stack[-1]] < temps[i]:
            prev_i = stack.pop()           # they waited from prev_i to i
            answer[prev_i] = i - prev_i    # distance = days waited
        stack.append(i)                    # today joins the waiting line

    return answer
```

> **Why `stack.append(i)`, not `stack.append(temps[i])`.** We store the **index**. The answer is a distance (`i - prev_i`). To compute a distance, we need both endpoints. If we stored the temperature, we would know "they waited for a warmer day" but not "how many days." The index remembers the position.

> **Why `temps[stack[-1]] < temps[i]`.** `stack[-1]` is the index on top of the stack. To get the temperature at that index, we look it up: `temps[stack[-1]]`. This is "double-indexing" - one index lookup goes inside another.

> **Why `< ` and not `<= `.** Strictly less. The problem says "warmer." If today equals the waiting person's temperature, today is NOT warmer, so they keep waiting.

#### Complexity

**Time: O(n).**

> **Why.** Each index is pushed to the stack exactly once and popped at most once. So the total work across all iterations is O(n) pushes + O(n) pops = O(n). The outer `for` loop runs n times. The inner `while` may run many times in one iteration, but across the whole run those `while` iterations sum to at most n.

**Space: O(n).**

> **Why.** Worst case, temperatures are strictly decreasing (e.g., `[80, 70, 60, 50]`). Nothing ever pops. The stack ends up holding all n indexes.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `[73]` | `[0]` | one day, no future day exists |
| `[70, 70, 70]` | `[0, 0, 0]` | equal is not warmer, no one ever gets popped |
| `[80, 70, 60]` | `[0, 0, 0]` | strictly decreasing, nothing ever pops |
| `[60, 70, 80]` | `[1, 1, 0]` | strictly increasing, each day pops the previous |
| `[]` | `[]` | empty input, empty output |

---

## Pattern Recognition

| If the question says... | Use this |
|-------------------------|----------|
| "valid parentheses" / "balanced brackets" / "matching tags" | Stack, Pattern A |
| "cancel adjacent / remove adjacent duplicates / backspace" | Stack, Pattern B |
| "Min Stack" or "track the max as you push" | Auxiliary stack, Pattern C |
| "implement queue with only stacks" / "implement stack with only queues" | Two-stack trick, Pattern D |
| "next greater element" / "next smaller element" / "warmer day after" | Monotonic stack, Pattern E |
| "largest rectangle in histogram" | Monotonic stack (advanced) |
| "max / min in every sliding window of size k" | Monotonic deque, Pattern F |
| "process requests in arrival order" | Queue with deque |
| "recent calls in last 3000 ms" | Deque, drop the front while out of window |
| "decode a nested string like `3[a2[bc]]`" | Stack of `(count, partial_string)` |
| "asteroids colliding (left vs right movers)" | Stack, simulate collisions |
| "evaluate a postfix or prefix expression" | Stack, push operands, pop on operators |

---

## Practice Problems

15 problems. Mix of easy stack, queue (deque), and monotonic stack/deque.

Difficulty tags: **easy**, **medium**, **harder**.

---

**P1. Baseball Game (LC 682)** - easy
Process operations: an integer adds that score; `"+"` adds the sum of the last two; `"D"` doubles the last; `"C"` removes the last. Return the total of all valid scores.
```
Input:  ["5", "2", "C", "D", "+"]
Output: 30
```

**P2. Build an Array With Stack Operations (LC 1441)** - easy
You read integers `1, 2, 3, ...` one at a time. Use `"Push"` to keep one and `"Pop"` to remove the last kept. Build the operations that produce `target` from the integers `1..n`.
```
Input:  target = [1, 3], n = 3
Output: ["Push", "Pop", "Push", "Push"]
```
Hint: walk i from 1 to n. If `i` is in target, just `"Push"`. Otherwise `"Push"` then `"Pop"`. Stop when target is exhausted.

**P3. Backspace String Compare (LC 844)** - easy
Each `'#'` in the strings means "delete the previous character." Return True if both strings are equal AFTER applying backspaces.
```
Input:  s = "ab#c", t = "ad#c"
Output: True   (both become "ac")
```

**P4. Make The String Great (LC 1544)** - easy
A "bad pair" is two adjacent characters that are the same letter in OPPOSITE case (e.g., `"aA"` or `"Bb"`). Repeatedly remove bad pairs until none remain.
```
Input:  "leEeetcode"
Output: "leetcode"
```

**P5. Crawler Log Folder (LC 1598)** - easy
A list of folder operations. `"x/"` enters folder x. `"../"` goes up one. `"./"` stays. Return the minimum number of `"../"` operations needed to get back to the root.
```
Input:  ["d1/", "d2/", "../", "d21/", "./"]
Output: 2
```

**P6. Maximum Nesting Depth of the Parentheses (LC 1614)** - easy
Return the deepest nesting level of `(` in the string.
```
Input:  "(1+(2*3)+((8)/4))+1"
Output: 3
```

**P7. Removing Stars From a String (LC 2390)** - easy
Each `'*'` deletes the previous non-star character. Return the result.
```
Input:  "leet**cod*e"
Output: "lecoe"
```

**P8. Final Prices With a Special Discount in a Shop (LC 1475)** - medium
For each `price[i]`, the discount is the FIRST `price[j]` (j > i) with `price[j] <= price[i]`. Subtract the discount. (If none, no discount.)
```
Input:  [8, 4, 6, 2, 3]
Output: [4, 2, 4, 2, 3]
```
Hint: monotonic stack of indexes whose answer we have not found yet.

**P9. Number of Recent Calls (LC 933)** - easy
Build a class with `ping(t)` that returns how many `ping`s happened in the time window `[t-3000, t]`. Pings come in non-decreasing time order.
```
ping(1)    -> 1
ping(100)  -> 2
ping(3001) -> 3
ping(3002) -> 3   (1 is now older than 2-3000=2, gone)
```

**P10. Next Greater Element I (LC 496)** - medium
For each number in `nums1`, find the FIRST greater number to its RIGHT in `nums2`. Return -1 if none. `nums1` is a subset of `nums2`.
```
Input:  nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
Output: [-1, 3, -1]
```

**P11. Next Greater Element II (LC 503)** - medium
Like "next greater" but the array is CIRCULAR — after the last item, you wrap around to the first. For each item, find the next greater item walking right (with wrap). Return -1 if none.
```
Input:  [1, 2, 1]
Output: [2, -1, 2]    (the last 1 wraps around and finds 2)

Input:  [3, 8, 5, 2, 7]
Output: [8, -1, 7, 7, 8]
```
Hint: walk the array TWICE (or use indexes mod n). Same monotonic stack of indexes as Example 5.

**P12. Asteroid Collision (LC 735)** - medium
Asteroids move left (`<0`) or right (`>0`). When two asteroids meet, the smaller explodes. Equal sizes BOTH explode. Asteroids moving in the same direction never meet. Return the surviving asteroids.
```
Input:  [5, 10, -5]
Output: [5, 10]    (-5 collides with 10, -5 is smaller, explodes)

Input:  [8, -8]
Output: []         (same size, both explode)
```

**P13. Decode String (LC 394)** - medium
A string like `"3[a2[c]]"` means "3 copies of (a followed by 2 copies of c)." Decode it.
```
Input:  "3[a2[c]]"
Output: "accaccacc"
```
Hint: stack of `(repeat_count, partial_string_so_far)`.

**P14. Implement Stack using Queues (LC 225)** - medium
Build a stack using ONLY queue operations. Implement `push`, `pop`, `top`, `empty`.
Hint: when you push, rotate the queue so the new item is at the FRONT.

**P15. Sliding Window Maximum (LC 239)** - harder
Given `nums` and window size `k`, return the max of every window of size `k`.
```
Input:  nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
Output: [3, 3, 5, 5, 6, 7]
```
Hint: monotonic decreasing deque of `(value, index)`.

> **Hard one.** The monotonic deque template is shown in the solution below. Read the solution first, understand it step by step, then re-solve from scratch on Day 1. Do not expect to invent it cold - even strong candidates have seen it before.

---

## Solutions

> **Stop.** Did you try every problem? Reading solutions without trying is the fastest way to feel like you understand and then fail the interview.

---

### P1. Baseball Game

```python
def cal_points(operations):
    stack = []
    for op in operations:
        if op == "+":
            stack.append(stack[-1] + stack[-2])
        elif op == "D":
            stack.append(2 * stack[-1])
        elif op == "C":
            stack.pop()
        else:
            stack.append(int(op))
    return sum(stack)
```

**Key insight.** The "valid scores" are exactly what is in the stack at the end. Use the stack to simulate the operations literally.

**Complexity.** O(n) time, O(n) space.

---

### P2. Build an Array With Stack Operations

```python
def build_array(target, n):
    result = []
    j = 0                                  # index into target
    for i in range(1, n + 1):
        if j == len(target):
            break
        result.append("Push")
        if i != target[j]:
            result.append("Pop")           # we read i but did not want it
        else:
            j += 1                         # i matches target[j], keep it
    return result
```

**Key insight.** Walk through 1..n. If the current number is the next item in target, keep it (just "Push"). If not, "Push" then "Pop" (read it, discard it). Stop once we have all of target.

**Complexity.** O(n) time, O(n) space.

---

### P3. Backspace String Compare

```python
def backspace_compare(s, t):
    def apply_backspaces(string):
        stack = []
        for c in string:
            if c == '#':
                if stack:
                    stack.pop()
            else:
                stack.append(c)
        return stack

    return apply_backspaces(s) == apply_backspaces(t)
```

**Key insight.** Pattern B with a twist: `'#'` is the "cancel" trigger.

**Python note (nested function).** We define `apply_backspaces` **inside** `backspace_compare`. This is legal Python - a helper used only here. The inner function can be called only from inside the outer one. Useful when a small helper is needed twice (once for `s`, once for `t`) but is not worth exposing to the rest of the file.

**Complexity.** O(n + m) time, O(n + m) space.

---

### P4. Make The String Great

```python
def make_good(s):
    stack = []
    for c in s:
        if stack and c != stack[-1] and c.lower() == stack[-1].lower():
            stack.pop()                    # same letter, opposite case
        else:
            stack.append(c)
    return "".join(stack)
```

**Key insight.** Same letter, opposite case = "bad pair". Two checks: characters are NOT identical (so they are different cases), but lowercase forms ARE identical.

**Python note (single-char `.lower()`).** `.lower()` works on a single character too, not just whole strings. `'A'.lower()` is `'a'`. So `c.lower() == stack[-1].lower()` compares two letters case-insensitively. Same idea for `.isdigit()`: `'7'.isdigit()` is `True`, `'a'.isdigit()` is `False`.

**Complexity.** O(n) time, O(n) space.

---

### P5. Crawler Log Folder

```python
def min_operations(logs):
    depth = 0                              # how deep we are
    for op in logs:
        if op == "../":
            depth = max(0, depth - 1)      # can't go above root
        elif op == "./":
            pass                           # stay
        else:
            depth += 1                     # enter a folder
    return depth
```

**Key insight.** You do not need an actual stack here. Just a counter. Going up cannot push you above the root.

**Complexity.** O(n) time, O(1) space.

---

### P6. Maximum Nesting Depth of the Parentheses

```python
def max_depth(s):
    depth = 0
    best = 0
    for c in s:
        if c == '(':
            depth += 1
            best = max(best, depth)
        elif c == ')':
            depth -= 1
    return best
```

**Key insight.** Just a counter + running max. No stack needed (you do not have multiple bracket types).

**Complexity.** O(n) time, O(1) space.

---

### P7. Removing Stars From a String

```python
def remove_stars(s):
    stack = []
    for c in s:
        if c == '*':
            stack.pop()
        else:
            stack.append(c)
    return "".join(stack)
```

**Key insight.** Pattern B again: star cancels the previous character.

**Complexity.** O(n) time, O(n) space.

---

### P8. Final Prices With a Special Discount

```python
def final_prices(prices):
    n = len(prices)
    result = prices[:]                     # copy
    stack = []                             # indexes of prices waiting for a discount

    for i in range(n):
        # while there's something on the stack that this price can pay off
        while stack and prices[stack[-1]] >= prices[i]:
            j = stack.pop()
            result[j] = prices[j] - prices[i]
        stack.append(i)

    return result
```

**Key insight.** Pattern E: monotonic stack. The stack holds indexes whose discount is not yet found. When we see a new price that is `<=` an item on the stack, that item's discount is found - subtract and remove.

**Python note (`prices[:]`).** `prices[:]` is a full copy of the list. Same as `list(prices)`. We copy because `result` starts as "no discount applied" (each `result[j]` defaults to the original price) and we overwrite only those entries that get a discount. We still need `prices[j]` unchanged to compute `prices[j] - prices[i]`, so we cannot just mutate `prices` in place.

**Complexity.** O(n) time (each index pushed and popped once), O(n) space.

---

### P9. Number of Recent Calls

```python
from collections import deque

class RecentCounter:
    def __init__(self):
        self.q = deque()

    def ping(self, t):
        self.q.append(t)
        # drop any pings older than t - 3000
        while self.q and self.q[0] < t - 3000:
            self.q.popleft()
        return len(self.q)
```

**Key insight.** Deque as a sliding window of recent timestamps. Push the new one to the back, drop stale ones from the front.

**Complexity.** Each `ping` is amortized O(1) (each timestamp is added once and removed once across all calls). Space O(window size).

---

### P10. Next Greater Element I

```python
def next_greater_element(nums1, nums2):
    next_bigger = {}              # value -> its next greater in nums2
    stack = []

    for x in nums2:
        while stack and stack[-1] < x:
            next_bigger[stack.pop()] = x
        stack.append(x)

    return [next_bigger.get(x, -1) for x in nums1]
```

**Key insight.** Same monotonic stack as Pattern E, applied to nums2. Build a value -> next greater map. Then look up each number from nums1.

**Complexity.** O(n + m) time where n=len(nums2), m=len(nums1). O(n) space.

---

### P11. Next Greater Element II

```python
def next_greater_elements(nums):
    n = len(nums)
    result = [-1] * n
    stack = []                             # indexes waiting for a greater value

    for i in range(2 * n):                 # walk the array TWICE
        real_i = i % n                     # wrap the index back into [0, n)
        while stack and nums[stack[-1]] < nums[real_i]:
            j = stack.pop()
            result[j] = nums[real_i]
        if i < n:                          # only PUSH on the first pass
            stack.append(real_i)

    return result
```

**Key insight.** Same monotonic stack of indexes as Example 5 (Daily Temperatures). The circular trick: loop `2 * n` times and use `i % n` to wrap the index. On the second pass we only RESOLVE items still waiting — we do not push new ones (every index already entered the stack on the first pass).

> **Why two passes.** A single pass misses cases where the next greater value is to the LEFT of the current item. By walking twice, every item gets a chance to see every other item that comes after it (with wrap).

**Complexity.** O(n) time, O(n) space.

---

### P12. Asteroid Collision

```python
def asteroid_collision(asteroids):
    stack = []

    for a in asteroids:
        alive = True
        # collisions only happen when `a` is moving left and the stack top is moving right
        while alive and a < 0 and stack and stack[-1] > 0:
            top = stack[-1]
            if top < -a:
                stack.pop()                # top is smaller, top explodes, `a` keeps going
            elif top == -a:
                stack.pop()                # equal sizes, BOTH explode
                alive = False
            else:
                alive = False              # top is bigger, `a` explodes
        if alive:
            stack.append(a)

    return stack
```

**Key insight.** Pattern B (cancellation) with extra rules. The `alive` flag tracks whether the incoming asteroid survives the collisions. Only push if it survives.

**Python note.** `a < 0 and stack and stack[-1] > 0` checks three things in order. Python uses **short-circuit evaluation**: if any earlier part is False, it does NOT evaluate the later parts. So `stack[-1]` is only checked AFTER we confirm `stack` is non-empty - no IndexError.

**Complexity.** O(n) time, O(n) space.

---

### P13. Decode String

```python
def decode_string(s):
    stack = []                             # list of (repeat_count, partial_string_so_far)
    current_string = ""
    current_count = 0

    for c in s:
        if c.isdigit():
            current_count = current_count * 10 + int(c)
        elif c == '[':
            stack.append((current_count, current_string))
            current_count = 0
            current_string = ""
        elif c == ']':
            count, prev_string = stack.pop()
            current_string = prev_string + current_string * count
        else:
            current_string += c

    return current_string
```

**Key insight.** Stack of `(count, partial_string)`. When you hit `[`, save the current state and start fresh. When you hit `]`, unpack the saved `(count, prev_string)`, multiply the new partial by the count, and glue it after `prev_string`.

**Python note (multi-digit char accumulation).** `current_count = current_count * 10 + int(c)` turns characters `'1'`, `'0'`, `'0'` into the number `100`. We read one digit at a time. Each new digit shifts the old number left by one decimal place (multiply by 10) and adds the new digit.

```
start with 0
read '1':  0 * 10 + 1 = 1
read '0':  1 * 10 + 0 = 10
read '0':  10 * 10 + 0 = 100
```

> **Why.** Numbers in the input can be more than one digit (e.g. `"100[a]"`). We cannot know we are done reading the number until we hit a non-digit (`[`). So we keep accumulating.

**Python note (string multiplication).** `current_string * count` repeats the string `count` times. `"ab" * 3` is `"ababab"`. Works with a variable count too: if `count = 3`, then `"ab" * count` is `"ababab"`. Same idea as `[0] * 3` from Chapter 1, but for strings.

**Python note (single-char `.isdigit()`).** `c.isdigit()` works on a single character. `'7'.isdigit()` is `True`. `'a'.isdigit()` is `False`. We use it to detect "is this character a digit so I should accumulate it into a number?"

**Python note (unpacking on pop).** `count, prev_string = stack.pop()` pops one tuple and **unpacks** it into two variables in one line. Same as:

```python
top = stack.pop()           # top is a tuple like (3, "a")
count = top[0]              # 3
prev_string = top[1]        # "a"
```

The one-line version is the Python idiom.

**Complexity.** O(n * max_count) time worst case. O(n) space.

---

### P14. Implement Stack using Queues

**Recall.** The `for _ in range(n)` idiom and the deque-rotation trick are both in the Python Primer at the top of the chapter. The push step below rotates `len(q) - 1` times so the newest item ends up at the FRONT — exactly the front-to-back trick from the primer, applied after every push.

```python
from collections import deque

class MyStack:
    def __init__(self):
        self.q = deque()

    def push(self, x):
        self.q.append(x)
        # rotate so the new item is at the FRONT (acts like top of stack)
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self):
        return self.q.popleft()

    def top(self):
        return self.q[0]

    def empty(self):
        return not self.q
```

**Key insight.** Use ONE queue. On push, rotate `len(q) - 1` times so the new item ends up at the front. Now popleft returns the most recent (stack semantics).

**Complexity.** Push is O(n), all others O(1).

---

### P15. Sliding Window Maximum

```python
from collections import deque

def max_sliding_window(nums, k):
    result = []
    dq = deque()                           # stores (value, index), monotonic decreasing in value

    for i, x in enumerate(nums):
        # Step 1: pop from the right any candidates smaller or equal to x
        while dq and dq[-1][0] <= x:
            dq.pop()
        # Step 2: push the new candidate
        dq.append((x, i))
        # Step 3: pop from the left any candidate now outside the window
        if dq[0][1] <= i - k:
            dq.popleft()
        # Record the max once the window is full
        if i >= k - 1:
            result.append(dq[0][0])

    return result
```

**Key insight.** Pattern F: monotonic decreasing deque. The leftmost value is always the max of the current window. We pop smaller candidates from the right (they can never be max while x is there). We pop outdated candidates from the left (their index is outside the window).

> **Why the three rules (read carefully).**
>
> **Rule 1: pop from the BACK any deque entry whose value is `<= x`.**
> Imagine those smaller values waiting in line behind `x`. They can never be the max while `x` is in the window - `x` is bigger AND newer (so it will stay in the window at least as long as they would). They are useless. Drop them.
>
> **Rule 2: push `(x, i)` to the BACK.**
> `x` is now a candidate. The deque stays monotonic decreasing in value because Rule 1 already removed anything `<= x`.
>
> **Rule 3: pop from the FRONT if its index is `<= i - k`.**
> The window is `[i - k + 1 .. i]` (size k, ending at i). If the front's index is `<= i - k`, it is too old - it has slid out of the window. Remove it. (At most one item slides out per step, so an `if`, not a `while`, is enough.)
>
> After all three: `dq[0]` is the largest value still in the window. That is our answer.

**Why store `(value, index)` and not just value?** We need the index to know when the front leaves the window (Rule 3). The value alone is not enough - "is this value still in the window?" requires the position.

**Why O(n)?** Each element is pushed once and popped once across the entire algorithm. Total operations: O(n).

**Complexity.** O(n) time, O(k) space.

---

## Flashcards

| Front | Back |
|-------|------|
| LIFO means? | Last In First Out (stack order) |
| FIFO means? | First In First Out (queue order) |
| Python stack: push and pop? | `list.append(x)` and `list.pop()` |
| Python stack: peek? | `stack[-1]` |
| Python queue: enqueue and dequeue? | `deque.append(x)` and `deque.popleft()` |
| Why not use `list.pop(0)` as a queue dequeue? | O(n) - shifts every item. Use `deque.popleft()` instead, O(1). |
| Empty check for a stack/deque? | `if not stack:` or `if len(stack) == 0:` |
| `deque` is imported from? | `from collections import deque` |
| Pattern for matching brackets? | Stack: push openers, on closer check top matches |
| Pattern for "adjacent cancellation" (Remove Adjacent Duplicates, Backspace)? | Stack: if top matches new item, pop; else push |
| Pattern for tracking the min as you push? | Auxiliary stack of "min so far" parallel to the main stack |
| Pattern for "queue using only stacks"? | Two stacks: enqueue stack and dequeue stack. Transfer when dequeue is empty. |
| Two-stack queue: time complexity of dequeue? | Amortized O(1) |
| "amortized O(1)" means? | Single call may be expensive, but the AVERAGE across many calls is O(1) |
| Pattern for "next greater element"? | Monotonic decreasing stack of indexes |
| Pattern for "max in every window of size k"? | Monotonic decreasing deque of (value, index) |
| What does a monotonic decreasing stack hold? | Values (or indexes) such that the values are always decreasing from bottom to top |
| `class Foo:` with `def __init__(self):` means? | A class definition with a constructor |
| In a method `def push(self, x):`, what is `self`? | The current instance. Auto-passed when you call `obj.push(x)`. |
| `deque(iterable)` does? | Creates a deque from any iterable (list, string, range) |
| `for _ in range(n):` means? | "Do this n times." `_` says "I do not use the loop counter." |
| One step that moves the deque's FRONT to the BACK? | `q.append(q.popleft())` |
| How to rotate a deque so the OLD back becomes the NEW front? | `for _ in range(len(q) - 1): q.append(q.popleft())` |
| Trick to simulate a stack with ONE queue? | After every push, rotate `len(q) - 1` times so the newest item sits at the front |
| Build a multi-digit number from chars one at a time? | `current = current * 10 + int(c)` inside the loop. Reset when you hit a non-digit. |
| `'7'.isdigit()` returns? | `True`. Single-char string methods work fine. |
| `int("-2")` returns? | `-2`. `int()` parses a leading `-`. |

---

## Spaced Repetition Schedule

| Day | Date (fill in) | Task |
|-----|---------------|------|
| 0   | _____ | Read chapter. Do worked examples on paper. Try all 15 practice. |
| 1   | _____ | Review flashcards. Re-do problems you got wrong. |
| 3   | _____ | Review flashcards. Pick 3 random problems. Re-solve from scratch. |
| 7   | _____ | Review flashcards. Pick 3 different problems. Re-solve from scratch. |
| 14  | _____ | Final review. If all 3 feel easy, move to Chapter 5. |

**Promotion rule.** Move on only when you can solve any 3 practice problems, picked at random, without help.

---

## What's next

**Chapter 5** is the Standard Library Cheat Pack: a reference for `collections`, `itertools`, `functools`, `bisect`, `heapq`, `math`, `random`. After 4 chapters of building things from scratch, this gives you the power tools that turn 30-line solutions into 3-line solutions. You will recognize half of these from Chapters 1-4 (Counter, deque, defaultdict) and meet the rest fresh.


---

# Chapter 5 - Standard Library Cheat Pack

> Python ships with power tools that turn 30-line solutions into 3 lines. This chapter is your reference for `collections`, `itertools`, `functools`, `bisect`, `heapq`, `math`, and `random`.

---

## What you will learn

By the end of this chapter, you can solve:

- Running Sum of 1d Array (LC 1480) with `itertools.accumulate`
- Combinations (LC 77) with `itertools.combinations`
- Last Stone Weight (LC 1046) with `heapq` (and the max-heap negation trick)
- Climbing Stairs (LC 70) with `functools.cache`

Plus 15 practice problems including Top K Frequent, Letter Combinations, Maximum Subarray.

You will also learn:

- The 7 most useful stdlib modules and which problem types each one solves
- The `@cache` and `@lru_cache` decorators (your DP preview)
- `heapq` as a min-heap, and the trick to make a max-heap
- `bisect_left` and `bisect_right` for sorted-array insertion / search
- The "Kadane's algorithm" pattern for max contiguous subarray (DP preview)
- A decision table: "if the problem says X, reach for this stdlib tool"

---

## Vocabulary

| Word | Plain meaning | Tiny example |
|------|---------------|--------------|
| Module | A file of Python code you can import | `import math`, `from collections import Counter` |
| Standard library | Modules that come with Python out of the box | `collections`, `math`, no install needed |
| Decorator | A function written above another function with `@`, that adds behavior | `@cache` adds memoization |
| Memoization | Remembering function results so you do not recompute | `@cache` does this automatically |
| Heap | A tree-like structure where the smallest item is always on top | `heapq` |
| Min-heap | A heap where the smallest item pops first | Python's `heapq` IS a min-heap |
| Max-heap | A heap where the largest item pops first | Python has no native max-heap, use negation trick |
| Cartesian product | All combinations of one item from each list | `product([1,2], [a,b])` = `[(1,a),(1,b),(2,a),(2,b)]` |
| Permutation | An ordering of items. `(1,2)` and `(2,1)` are different. | `permutations([1,2,3], 2)` |
| Combination | A pick of items. Order does NOT matter. `(1,2)` and `(2,1)` are the same. | `combinations([1,2,3], 2)` |
| Decorator syntax | `@something` written above a `def` | tells Python to wrap the function |

---

## The big picture: which stdlib module solves what

| Module | What it gives you | When you reach for it |
|--------|-------------------|------------------------|
| `collections` | `Counter`, `defaultdict`, `deque`, `OrderedDict`, `namedtuple` | Counting, grouping, queues. (Covered in Ch 1, 3, 4.) |
| `itertools` | `combinations`, `permutations`, `product`, `accumulate`, `chain`, `pairwise`, `groupby` | Iteration tricks, prefix sums, generating combinations. |
| `functools` | `@cache`, `@lru_cache`, `reduce`, `cmp_to_key` | Memoization (DP), folding, custom sort. |
| `bisect` | `bisect_left`, `bisect_right`, `insort` | Sorted list operations in O(log n). |
| `heapq` | `heappush`, `heappop`, `nlargest`, `nsmallest`, `heapify` | Top-K, priority queue, sorted streaming. |
| `math` | `gcd`, `lcm`, `sqrt`, `isqrt`, `factorial`, `comb`, `inf` | Math operations and constants. |
| `random` | `choice`, `randint`, `shuffle`, `sample` | Random selection, simulations. |

> **Tip.** If a problem looks like a 20-line custom solution, check if the standard library has it. Often it is one line.

---

## Python Primer (the stdlib tools)

### `collections` recap (already in earlier chapters)

```python
from collections import Counter, defaultdict, deque

Counter("hello")              # Chapter 1: frequency map
defaultdict(list)             # Chapter 3: auto-init missing keys
deque()                       # Chapter 4: queue and stack
```

One more that is occasionally useful: `namedtuple`. A tuple where each position has a name.

```python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 5)
p.x                           # 3
p.y                           # 5
p[0]                          # 3 (also works as a tuple)
```

Use it when you have a tuple where the positions have meaning, and you want self-documenting code.

---

### Bitwise AND `&` on integers

In Chapter 3 we saw `&` as set intersection. The same symbol also works on integers, but it means something different there.

`a & b` compares the two numbers bit by bit. A bit in the result is 1 only if BOTH numbers have a 1 in that position.

```python
6 & 3        # 2
# 6 in binary is 110
# 3 in binary is 011
# only the MIDDLE bit is 1 in both
# result:        010  =  2
```

> **Why.** Integers in a computer are stored as bits (0s and 1s). `&` looks at one bit position at a time and keeps a 1 only when both inputs agree.

**Power-of-two trick.** `n & (n - 1)` clears the lowest 1-bit in `n`. So `n & (n - 1) == 0` is True only when `n` has exactly ONE bit set — i.e., `n` is a power of 2.

```python
n = 8                # 1000
n - 1 = 7            # 0111
n & (n - 1) = 0      # so 8 IS a power of 2
```

> **Operator-precedence warning.** `==` binds tighter than `&` for booleans. Write `(n & (n - 1)) == 0` with parens to be safe.

---

### `itertools` (the iteration powerhouse)

#### `accumulate(iterable, func=add)` - running totals

Walks through items, builds a list where each entry is the running result of `func`.

```python
from itertools import accumulate

list(accumulate([1, 2, 3, 4]))        # [1, 3, 6, 10]   (running sum)
list(accumulate([1, 2, 3, 4], max))   # [1, 2, 3, 4]    (running max)
list(accumulate([1, 2, 3, 4], min))   # [1, 1, 1, 1]    (running min)
```

This is the **prefix sum** pattern (Chapter 9) in one line.

#### `combinations(iterable, r)` - all unordered r-picks

```python
from itertools import combinations

list(combinations([1, 2, 3], 2))
# [(1, 2), (1, 3), (2, 3)]

list(combinations("abc", 2))
# [('a','b'), ('a','c'), ('b','c')]
```

Order does NOT matter: `(1, 2)` only appears once, not also as `(2, 1)`.

**Getting ALL subsets (any size).** `combinations` fixes one size `r`. To get every subset of `items`, loop `r` from `0` to `len(items)`:

```python
items = [1, 2, 3]
all_subsets = []
for r in range(len(items) + 1):           # r = 0, 1, 2, 3
    for combo in combinations(items, r):
        all_subsets.append(list(combo))
# [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
```

`r = 0` gives the empty subset (`combinations(items, 0)` yields one empty tuple). Each later `r` adds combinations of that size. The Subsets problem (P3) is exactly this pattern.

#### `permutations(iterable, r)` - all ordered r-picks

```python
from itertools import permutations

list(permutations([1, 2, 3], 2))
# [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]
```

Order DOES matter: `(1, 2)` and `(2, 1)` are both included.

> **Watch out.** Combinations / permutations grow FAST. `permutations(range(10))` has 3,628,800 entries. Be careful with large inputs.

#### `product(*iterables, repeat=1)` - Cartesian product (nested loops in one line)

```python
from itertools import product

list(product([1, 2], ['a', 'b']))
# [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]

# Same as:
# for x in [1, 2]:
#     for y in ['a','b']:
#         ...

list(product([0, 1], repeat=3))
# [(0,0,0), (0,0,1), (0,1,0), (0,1,1), (1,0,0), (1,0,1), (1,1,0), (1,1,1)]
```

Great for "every combination of selections."

#### `chain(*iterables)` - flatten one level

```python
from itertools import chain

list(chain([1, 2], [3, 4], [5]))     # [1, 2, 3, 4, 5]
```

Same effect as `[1, 2] + [3, 4] + [5]` but lazy (does not build intermediate lists).

#### `pairwise(iterable)` (Python 3.10+) - adjacent pairs

```python
from itertools import pairwise

list(pairwise([1, 2, 3, 4]))         # [(1,2), (2,3), (3,4)]
```

This is the "compare each item with the next" pattern (Score of a String, Chapter 1). Avoids the `range(len(s) - 1)` boilerplate.

#### `groupby(iterable)` - group consecutive equal items

```python
from itertools import groupby

[(k, list(g)) for k, g in groupby("aaabbcdd")]
# [('a', ['a','a','a']), ('b', ['b','b']), ('c', ['c']), ('d', ['d','d'])]
```

> **Watch out.** `groupby` only groups CONSECUTIVE items. Sort first if you want to group all equal items together.

#### The `*` unpack in function calls

Some functions like `zip` and `product` take SEPARATE arguments, one per iterable. If your iterables are sitting inside a list, you need to spread them out.

If you have a list `xs = [a, b, c]` and want to pass each item as a SEPARATE argument, write `f(*xs)` instead of `f(xs)`. The `*` says "spread these out as individual arguments."

```python
strs = ['flower', 'flow', 'flight']
for column in zip(*strs):
    print(column)
# Same as: zip('flower', 'flow', 'flight')
# Yields ('f','f','f'), ('l','l','l'), ('o','o','i'), ...
```

> **Why.** `zip(strs)` would treat `strs` as ONE iterable and pair nothing. `zip(*strs)` passes each string as its own argument, so `zip` can walk them in parallel.

> **Note.** Iterating a string yields its characters. So `zip(*list_of_strings)` walks the strings column by column.

---

### Recursion primer (you NEED this for `@cache`)

A **recursive** function is one that calls itself. You use it when a big problem can be broken into a SMALLER version of the same problem.

Every recursive function has two parts:

1. **Base case.** The smallest input you can answer directly, no recursion. Without it, the function calls itself forever.
2. **Recursive case.** The function calls itself on a smaller input, then combines the result.

Tiny example: factorial.

```python
def factorial(n):
    if n <= 1:           # base case: 0! = 1, 1! = 1
        return 1
    return n * factorial(n - 1)    # recursive case: n! = n * (n-1)!
```

Trace `factorial(4)`:

```
factorial(4)
  = 4 * factorial(3)
  = 4 * (3 * factorial(2))
  = 4 * (3 * (2 * factorial(1)))
  = 4 * (3 * (2 * 1))
  = 24
```

The chain of calls is the **call stack**. Each call waits for the smaller call to return.

**Fibonacci is the most common recursive example.** Each number is the sum of the two before it.

```python
def fib(n):
    if n < 2:                    # base case: fib(0) = 0, fib(1) = 1
        return n
    return fib(n - 1) + fib(n - 2)   # recursive case
```

**The big problem with plain recursion.** `fib(5)` computes `fib(3)` twice. `fib(40)` computes `fib(2)` over 100 million times. The same sub-problem is solved over and over.

That is exactly what `@cache` fixes. Read on.

> **Watch out (base case).** If you forget the `if n < 2:` line, Python recurses forever and crashes with `RecursionError`. Always write the base case first.

> **Silly hook.** Recursion is like Russian nesting dolls. To answer the big doll, open it and ask the smaller doll. The smallest doll has the direct answer.

---

### `functools` (memoization and folding)

#### `@cache` - automatic memoization (your DP magic wand)

Wrap any function with `@cache` and Python remembers its results. Calling the function with the same arguments returns the cached answer instantly.

```python
from functools import cache

@cache
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

fib(50)            # instant, even though fib(50) makes huge recursive calls
```

Without `@cache`, `fib(50)` does about 2.5 billion recursive calls. With `@cache`, about 50.

**When to use it.** Any recursive function where you call with the same arguments repeatedly. This is the heart of **top-down dynamic programming** (Chapter 23-28).

Older Python versions use `@lru_cache(maxsize=None)`. Same idea.

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    ...
```

> **Watch out.** Function arguments must be hashable. Lists and dicts as arguments will crash. Use tuples or frozensets instead.

#### `reduce(func, iterable, initial=...)` - fold an iterable into one value

```python
from functools import reduce

reduce(lambda a, b: a + b, [1, 2, 3, 4])     # 10  (same as sum)
reduce(lambda a, b: a * b, [1, 2, 3, 4])     # 24  (product)
reduce(lambda a, b: a if a > b else b, [3, 1, 4, 1, 5])    # 5  (max)
```

For sum, prefer `sum(...)`. Use `reduce` for unusual folds like XOR-all or running gcd.

#### `cmp_to_key(func)` - custom comparator for sorting

When `sorted(..., key=...)` is not enough, use `cmp_to_key`. (We rarely need this; included for completeness. More in Chapter 13.)

---

### `bisect` (sorted list operations in O(log n))

`bisect` assumes you have a sorted list. It does binary search.

#### `bisect_left(arr, x)` - leftmost spot to insert x

Returns the LEFTMOST index where `x` could go and keep the list sorted. If `x` is already present, returns the index of the FIRST occurrence.

```python
from bisect import bisect_left

arr = [1, 3, 5, 5, 7, 9]
bisect_left(arr, 5)           # 2  (leftmost spot for a new 5)
bisect_left(arr, 6)           # 4  (between 5 and 7)
bisect_left(arr, 0)           # 0  (would go at the start)
bisect_left(arr, 100)         # 6  (would go at the end)
```

#### `bisect_right(arr, x)` - rightmost spot to insert x

Returns the RIGHTMOST index where `x` could go. If `x` is already present, returns the index AFTER the last occurrence.

```python
from bisect import bisect_right

arr = [1, 3, 5, 5, 7, 9]
bisect_right(arr, 5)          # 4  (rightmost spot for a new 5)
```

#### `insort(arr, x)` - insert keeping sorted

```python
from bisect import insort

arr = [1, 3, 5, 7]
insort(arr, 4)
# arr is now [1, 3, 4, 5, 7]
```

> **Watch out.** `insort` is O(n) overall because list insertion in the middle shifts every following element. Use `insort` when you need a sorted list and inserts are rare.

**When to use bisect.** Binary search problems where you want clean code instead of writing the binary search loop by hand. Full binary search coverage in Chapter 11.

---

### `heapq` (min-heap, also the priority queue)

A **heap** stores items so the smallest is always on top. Push and pop are O(log n).

`heapq` operates on a regular Python `list`. The list IS the heap (no special object).

```python
import heapq

heap = []
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 4)
heapq.heappush(heap, 1)
heapq.heappush(heap, 5)

heap[0]               # 1  (always the smallest, O(1) peek)
heapq.heappop(heap)   # 1  (removes and returns smallest)
heapq.heappop(heap)   # 1
heapq.heappop(heap)   # 3
```

#### Build a heap from a list

```python
nums = [5, 3, 8, 1, 7]
heapq.heapify(nums)           # turns nums into a heap IN PLACE, O(n)
nums[0]                       # 1
```

#### Top K with `nlargest` / `nsmallest`

```python
heapq.nlargest(3, [4, 1, 7, 3, 8, 2])      # [8, 7, 4]
heapq.nsmallest(3, [4, 1, 7, 3, 8, 2])     # [1, 2, 3]
```

Time: O(n log k). Good when k is small.

#### The `key=` argument (sort/heap by a custom score)

Sort and heap functions (`sorted`, `min`, `max`, `heapq.nlargest`, `heapq.nsmallest`) accept a keyword argument `key=some_function`. They use the function's RETURN VALUE to decide order, not the item itself.

```python
words = ['pear', 'fig', 'apple']
sorted(words, key=len)          # ['fig', 'pear', 'apple']   sorted by length
```

```python
counts = {'a': 5, 'b': 2, 'c': 8}
sorted(counts.keys(), key=counts.get)   # ['b', 'a', 'c']   keys sorted by their count
```

> **Why.** Without `key=`, Python compares the items directly. With `key=`, Python first calls the function on each item, then compares those return values.

> **Note.** Passing a function name like `len` or `counts.get` is OK — Python only calls it when sorting. Do NOT add `()` — you pass the function itself, not the result of calling it.

#### Max-heap trick (NEGATE every value)

Python only has a min-heap. To get a max-heap, push the NEGATIVE of every value.

```python
import heapq

max_heap = []
for x in [3, 1, 4, 1, 5]:
    heapq.heappush(max_heap, -x)

-heapq.heappop(max_heap)      # 5  (negate back to get the max)
```

We use this in Worked Example 3 (Last Stone Weight). Full heap chapter is Chapter 13.

---

### `math` (math operations and constants)

```python
import math

math.gcd(12, 8)               # 4   (greatest common divisor)
math.lcm(4, 6)                # 12  (least common multiple, Python 3.9+)

math.sqrt(16)                 # 4.0  (float)
math.isqrt(17)                # 4    (integer square root, for ints)

math.factorial(5)             # 120
math.comb(5, 2)               # 10   (5 choose 2)
math.perm(5, 2)               # 20   (5 permute 2)

math.log(8, 2)                # 3.0
math.log2(8)                  # 3.0
math.log10(100)               # 2.0

math.inf                      # infinity (a usable float)
-math.inf                     # negative infinity

math.floor(3.7)               # 3
math.ceil(3.2)                # 4
```

`math.inf` is great as a starting value for "find the smallest" loops:

```python
best = math.inf
for x in nums:
    if x < best:
        best = x
```

---

### `random` (random selections)

```python
import random

random.choice([1, 2, 3, 4])           # one random item
random.randint(1, 10)                 # int between 1 and 10 INCLUSIVE
random.shuffle(nums)                  # shuffle a list IN PLACE
random.sample([1, 2, 3, 4, 5], 3)     # 3 unique random items
random.random()                       # float in [0, 1)
```

Used in shuffling, randomized algorithms, Monte Carlo simulations.

---

## How `@cache` works (the DP preview)

This is the most important concept in this chapter. It is the foundation of all top-down DP (Chapter 23+).

A recursive function with overlapping subproblems is wasteful without caching.

```python
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

fib(40)          # takes seconds, computes fib(2) over 100 million times
```

The recursion tree for `fib(40)` re-computes the same values exponentially many times. With `@cache`, each unique input is computed ONCE.

```python
@cache
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

fib(40)          # microseconds, 40 unique calls
```

**The rule:**
1. Write the recursive solution naturally.
2. If you find yourself computing the same thing twice, add `@cache`.

Watch the complexity drop from O(2^n) to O(n) just by adding one line.

---

## Worked Examples

Four problems, each showcasing one library tool.

---

### Example 1. Running Sum of 1d Array (LC 1480) - `itertools.accumulate`

#### Problem

> Return a new array where `result[i]` is the sum of `nums[0..i]`.

```
Input:  [1, 2, 3, 4]
Output: [1, 3, 6, 10]
```

#### Intuition

We saw this in Chapter 2 as a manual loop:

```python
result = []
total = 0
for x in nums:
    total += x
    result.append(total)
```

`itertools.accumulate` does exactly this. One line.

This is the **prefix sum** pattern: each output is the running total of the inputs. We will see it deeply in Chapter 9.

#### Visual walkthrough

```
nums = [1, 2, 3, 4]

step | input | total | result
-----|-------|-------|-------
  1  |   1   |   1   | [1]
  2  |   2   |   3   | [1, 3]
  3  |   3   |   6   | [1, 3, 6]
  4  |   4   |  10   | [1, 3, 6, 10]
```

#### Code

```python
from itertools import accumulate

def running_sum(nums):
    return list(accumulate(nums))
```

That is the whole solution.

> **Python note.** `accumulate` returns an iterator (lazy). Wrap in `list(...)` to get an actual list.

#### Complexity

**Time: O(n).** One pass through the list.

**Space: O(n).** The result list.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `[]` | `[]` | empty input |
| `[5]` | `[5]` | single item |
| `[0, 0, 0]` | `[0, 0, 0]` | zeros work |
| `[-1, 2, -3]` | `[-1, 1, -2]` | negatives work |

---

### Example 2. Combinations (LC 77) - `itertools.combinations`

#### Problem

> Return ALL combinations of `k` numbers chosen from `1` to `n`. Order within a combination does not matter.

```
Input:  n = 4, k = 2
Output: [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
```

#### Intuition

A combination is an UNORDERED selection. So `[1, 2]` and `[2, 1]` are the same and we list it only once.

Manually: this is hard. You need to walk every possible subset, avoid duplicates, keep them sorted. That is a backtracking problem (Chapter 22).

With `itertools.combinations`: one line.

```python
combinations(range(1, n+1), k)
```

#### Visual walkthrough

```
n = 4, k = 2

range(1, 5) = [1, 2, 3, 4]
combinations(_, 2) produces:
  (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)

Convert each tuple to a list:
  [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]
```

#### Code

```python
from itertools import combinations

def combine(n, k):
    return [list(c) for c in combinations(range(1, n + 1), k)]
```

> **Python note.** `combinations` returns an iterator of tuples. We convert each tuple to a list for the output format LeetCode expects.

#### Complexity

**Time: O(C(n, k) * k)** where `C(n, k)` is "n choose k." The factor `k` is the cost of converting each tuple to a list.

**Space: O(C(n, k) * k)** for the result.

> **Why is the time `C(n, k)`?** That is the number of combinations we generate. For `n=20, k=10`, that is 184,756.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `n=1, k=1` | `[[1]]` | one combination |
| `n=3, k=3` | `[[1,2,3]]` | only one way to pick all |
| `n=5, k=1` | `[[1],[2],[3],[4],[5]]` | single picks |

---

### Example 3. Last Stone Weight (LC 1046) - `heapq` with max-heap trick

#### Problem

> You have stones with positive integer weights. Each turn, smash the TWO heaviest stones together:
> - If they are equal weight, both stones are destroyed.
> - If they differ, the smaller is destroyed and the larger one's weight becomes `(big - small)`.
>
> Continue until 1 or 0 stones remain. Return the weight of the last stone, or 0 if none.

```
Input:  [2, 7, 4, 1, 8, 1]
Output: 1

Trace:
  pick 8 and 7 -> 1 remains. Stones: [2, 4, 1, 1, 1]
  pick 4 and 2 -> 2 remains. Stones: [2, 1, 1, 1]
  pick 2 and 1 -> 1 remains. Stones: [1, 1, 1]
  pick 1 and 1 -> destroyed. Stones: [1]
  last weight: 1
```

#### Intuition

We always need the TWO LARGEST stones. A naive approach sorts every turn: O(n log n) per turn, n turns, total O(n² log n).

Smart approach: use a **max-heap**. Each pop gives the largest in O(log n). Total: O(n log n).

Python only has min-heap, so we use the **negation trick**: push `-weight` instead of `weight`. The min of negatives is the max of positives.

> **Silly hook.** Imagine a buffet line where the LARGEST plate is always served first. That is a max-heap. Python's buffet only serves smallest-first, so we flip our plates upside-down (negate them) and pretend.

#### Visual walkthrough

```
stones = [2, 7, 4, 1, 8, 1]

Push negated values into heap:
  heap = [-8, -7, -4, -2, -1, -1]  (heap shape, -8 on top)

Round 1: pop two largest
  big = -(-8) = 8     small = -(-7) = 7
  diff = 1. Push -1 back.
  heap now has: [-4, -2, -1, -1, -1]

Round 2:
  big = 4, small = 2
  diff = 2. Push -2.
  heap: [-2, -1, -1, -1]

Round 3:
  big = 2, small = 1
  diff = 1. Push -1.
  heap: [-1, -1, -1]

Round 4:
  big = 1, small = 1
  diff = 0. Push nothing.
  heap: [-1]

Only one stone left. Return -(-1) = 1.
```

#### Code

```python
import heapq

def last_stone_weight(stones):
    # Negate so we can use min-heap as max-heap
    heap = [-s for s in stones]
    heapq.heapify(heap)

    while len(heap) > 1:
        big = -heapq.heappop(heap)           # largest weight (un-negated)
        small = -heapq.heappop(heap)         # second largest
        if big != small:
            heapq.heappush(heap, -(big - small))

    return -heap[0] if heap else 0
```

> **Python note.** `[-s for s in stones]` builds a new list of negated weights. `heapq.heapify` turns it into a heap IN PLACE.

#### Complexity

**Time: O(n log n).** Initial heapify is O(n). Each round does 2 pops and possibly 1 push, each O(log n). At most n rounds.

**Space: O(n).** The heap holds up to n items.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `[1]` | `1` | one stone, return its weight |
| `[2, 2]` | `0` | both equal, both destroyed |
| `[1, 3]` | `2` | one round |
| `[10, 4, 4, 2]` | `0` | full chain |

---

### Example 4. Climbing Stairs (LC 70) - `functools.cache`

#### Problem

> You are at the bottom of a staircase of `n` steps. Each move you can go up 1 step OR 2 steps. How many distinct ways are there to reach the top?

```
Input:  n = 2
Output: 2     (1+1 or 2)

Input:  n = 3
Output: 3     (1+1+1, 1+2, 2+1)
```

#### Intuition

To reach step `n`, your LAST move came from step `n-1` (took 1 step) or step `n-2` (took 2 steps).

So `ways(n) = ways(n-1) + ways(n-2)`.

Base cases: `ways(0) = 1` (already there, one "way" of doing nothing), `ways(1) = 1` (one move).

That is FIBONACCI in disguise.

Without memoization, the recursion does the same work many times. `@cache` makes it O(n).

> **Silly hook.** This is your first DP problem. The pattern is: "to solve a big problem, combine the solutions to smaller pieces of the same problem." We will see this pattern over and over in Chapters 23-28.

#### Visual walkthrough

```
ways(0) = 1
ways(1) = 1
ways(2) = ways(1) + ways(0) = 2
ways(3) = ways(2) + ways(1) = 3
ways(4) = ways(3) + ways(2) = 5
ways(5) = ways(4) + ways(3) = 8
...
ways(n) is the (n+1)-th Fibonacci number.

Without @cache: ways(40) computes ways(2) over 100 million times.
With @cache: each ways(k) is computed ONCE. Total: 41 calls.
```

#### Code

```python
from functools import cache

def climb_stairs(n):
    @cache
    def ways(k):
        if k <= 1:
            return 1
        return ways(k - 1) + ways(k - 2)
    return ways(n)
```

> **Python note.** Defining `ways` INSIDE `climb_stairs` means the cache is fresh for each test case. If you put `@cache` on a top-level function, the cache persists across calls in the same Python session.

#### Complexity

**Time: O(n).** With `@cache`, each `ways(k)` for `k = 0..n` is computed once.

**Space: O(n)** for the cache + O(n) for the recursion stack.

> **Why is the recursion stack O(n)?** The deepest chain is `ways(n) -> ways(n-1) -> ways(n-2) -> ... -> ways(0)`. That is n function calls on the stack at the deepest point.

#### Edge cases

| Input | Expected | Why |
|-------|----------|-----|
| `n = 1` | 1 | one step, one way |
| `n = 2` | 2 | two ways |
| `n = 5` | 8 | Fibonacci 6 |
| `n = 45` | 1,836,311,903 | works without timing out, thanks to @cache |

---

## Pattern Recognition

| If the question says... | Use this |
|-------------------------|----------|
| "running sum / prefix sum / cumulative" | `itertools.accumulate` |
| "running max / running min" | `accumulate(arr, max)` or `accumulate(arr, min)` |
| "all combinations of k items" | `itertools.combinations` |
| "all permutations / all orderings" | `itertools.permutations` |
| "all combinations across multiple lists" (Cartesian product) | `itertools.product` |
| "flatten lists" | `itertools.chain(*lists)` |
| "adjacent pairs / consecutive pairs" | `itertools.pairwise` (Py 3.10+) |
| "group consecutive equal items" | `itertools.groupby` (sort first if not consecutive) |
| "memoize a recursive function" | `@functools.cache` |
| "find insertion point in a sorted array" | `bisect.bisect_left` or `bisect.bisect_right` |
| "top K largest / smallest" | `heapq.nlargest(k, ...)` or `heapq.nsmallest(k, ...)` |
| "priority queue" / "always need smallest next" | `heapq` |
| "always need LARGEST next" | `heapq` with NEGATED values (max-heap trick) |
| "GCD / LCM" | `math.gcd`, `math.lcm` |
| "integer square root" | `math.isqrt` |
| "n choose k / factorial" | `math.comb`, `math.factorial` |
| "starting value for 'find min'" | `math.inf` (and `-math.inf` for max) |
| "random pick from a list" | `random.choice(list)` |

---

## Practice Problems

15 problems. Each one uses a stdlib tool from this chapter.

Difficulty tags: **easy**, **medium**, **harder**.

---

**P1. Search Insert Position (LC 35)** - easy
Given a SORTED array and a target, return the index where the target would be inserted to keep the array sorted. If the target exists, return its index.
```
Input:  nums = [1, 3, 5, 6], target = 5
Output: 2

Input:  nums = [1, 3, 5, 6], target = 2
Output: 1
```

**P2. Sqrt(x) (LC 69)** - easy
Return the integer square root of `x` (the largest integer whose square is `<= x`).
```
Input:  8
Output: 2     (2^2 = 4, 3^2 = 9)
```

**P3. Subsets (LC 78)** - medium
Return ALL possible subsets of `nums`. (Including the empty set.)
```
Input:  [1, 2, 3]
Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
```

**P4. Pascal's Triangle (LC 118)** - easy
Return the first `numRows` of Pascal's triangle. Each row starts and ends with 1; each inner cell is the sum of the two cells above it.
```
Input:  numRows = 5
Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
```

**P5. Power of Two (LC 231)** - easy
Return True if `n` is a power of 2.
```
Input:  16
Output: True

Input:  18
Output: False
```

**P6. Top K Frequent Elements (LC 347)** - medium
Return the `k` most frequent elements in `nums`.
```
Input:  nums = [1,1,1,2,2,3], k = 2
Output: [1, 2]
```

**P7. Letter Combinations of a Phone Number (LC 17)** - medium
Each digit 2-9 maps to letters like on an old phone (2 = "abc", 3 = "def", etc.). Return all possible letter combinations.
```
Input:  "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

**P8. Kth Largest Element in an Array (LC 215)** - medium
Return the `k`-th largest element. (1st largest = max.)
```
Input:  nums = [3,2,1,5,6,4], k = 2
Output: 5
```

**P9. Fibonacci Number (LC 509)** - easy
Return the `n`-th Fibonacci number.
```
Input:  4
Output: 3     (sequence: 0, 1, 1, 2, 3, ...)
```

**P10. Longest Common Prefix (LC 14)** - easy
Find the longest prefix common to ALL strings in the input list. Return `""` if none.
```
Input:  ["flower", "flow", "flight"]
Output: "fl"
```
Hint: try `zip(*strs)` to walk all strings column by column.

**P11. GCD of Strings (LC 1071)** - easy
Find the longest string `t` such that BOTH `str1` and `str2` are made of repeated copies of `t`. Return `""` if none.
```
Input:  str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Input:  str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
```
Hint: `t`'s length is `gcd(len(str1), len(str2))`.

Hint: two strings have a common "repeated unit" if and only if `str1 + str2 == str2 + str1`. This is a known string-theory result — accept it for now.

**P12. Range Sum Query - Immutable (LC 303)** - easy
Build a class `NumArray(nums)` so that `sumRange(i, j)` returns the sum of `nums[i..j]` (inclusive) in O(1) per query.
```
init: NumArray([-2, 0, 3, -5, 2, -1])
sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```
Hint: precompute prefix sums in `__init__`, then each query is `prefix[j+1] - prefix[i]`.

**P13. Find Pivot Index (LC 724)** - easy
Return the leftmost index `i` such that `sum(nums[:i]) == sum(nums[i+1:])`. Return `-1` if none.
```
Input:  [1, 7, 3, 6, 5, 6]
Output: 3   (sum of [1,7,3] = 11, sum of [5,6] = 11)
```

**P14. Pow(x, n) (LC 50)** - medium
**Preview problem.** Fast exponentiation (also called "exponentiation by squaring") is a recursion pattern fully covered in Chapter 22. Read the solution to learn the trick, then re-solve from scratch on Day 1.

Implement `x` raised to the integer power `n` (can be negative). Aim for O(log n).
```
Input:  x = 2.0, n = 10
Output: 1024.0

Input:  x = 2.0, n = -2
Output: 0.25
```
Hint: fast exponentiation. `x^n = (x^(n/2))^2`. Use recursion + `@cache` or iterate.

**P15. Maximum Subarray (LC 53)** - medium
**Preview problem.** Kadane's algorithm is a 1D dynamic-programming trick fully covered in Chapter 25. Read the solution to learn the "extend or start fresh" idea, then re-solve from scratch on Day 1.

Find the contiguous subarray with the largest sum. Return that sum.
```
Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6     (subarray [4, -1, 2, 1])
```
Hint: Kadane's algorithm. As you walk: `current = max(x, current + x)` (start fresh or extend), `best = max(best, current)`.

---

## Solutions

> **Stop.** Did you try every problem? Reading solutions without trying is the fastest way to feel like you understand and then fail in the interview.

---

### P1. Search Insert Position

```python
from bisect import bisect_left

def search_insert(nums, target):
    return bisect_left(nums, target)
```

**Key insight.** `bisect_left` returns the leftmost spot where target could go. If target exists, that IS its index. If not, that is where it WOULD go. Either way: correct answer.

**Complexity.** O(log n) time, O(1) space.

---

### P2. Sqrt(x)

```python
from math import isqrt

def my_sqrt(x):
    return isqrt(x)
```

**Key insight.** `math.isqrt` does exactly what the problem asks. Returns integer square root, no floating-point trouble.

**Complexity.** O(log x) time.

---

### P3. Subsets

```python
from itertools import combinations

def subsets(nums):
    result = []
    for r in range(len(nums) + 1):              # subset sizes 0, 1, 2, ..., n
        for combo in combinations(nums, r):
            result.append(list(combo))
    return result
```

**Key insight.** A subset is just a combination of any size. Loop over every possible size r, collect all combinations of that size.

**Complexity.** O(n * 2^n) time (2^n subsets total, each up to n long).

---

### P4. Pascal's Triangle

```python
def generate(numRows):
    result = [[1]]
    for i in range(1, numRows):
        prev = result[-1]
        new_row = [1]                            # first cell
        for j in range(len(prev) - 1):
            new_row.append(prev[j] + prev[j + 1])
        new_row.append(1)                        # last cell
        result.append(new_row)
    return result
```

**Key insight.** Each new row uses the previous row. First and last cells are 1. Middle cells = sum of two neighbors above.

**Complexity.** O(numRows^2) time and space.

---

### P5. Power of Two

```python
def is_power_of_two(n):
    return n > 0 and n & (n - 1) == 0
```

**Key insight.** Powers of 2 in binary are `1`, `10`, `100`, `1000`, .... They have exactly ONE bit set. `n - 1` flips that bit and sets all below it (`1000 - 1 = 0111`). So `n & (n - 1) == 0` only for powers of 2.

Simpler alternative without bit tricks:

```python
import math
def is_power_of_two(n):
    if n <= 0:
        return False
    log = math.log2(n)
    return log == int(log)         # WARNING: float == int is fragile
```

> **Warning.** Comparing floats with `==` is risky for big numbers. `math.log2` can return something like `29.999999999999996` instead of `30.0`. The `n & (n - 1) == 0` version above is faster AND safer. Prefer it.

**Complexity.** O(1) time, O(1) space.

---

### P6. Top K Frequent Elements

```python
from collections import Counter

def top_k_frequent(nums, k):
    return [num for num, _ in Counter(nums).most_common(k)]
```

> **Python note.** `most_common(k)` returns a list of `(value, count)` pairs. We only want the value, so we unpack each pair into `num, _`. The `_` means "I do not care about this — throw it away." It is a common Python convention for unused variables.

Alternative with heapq:

```python
from collections import Counter
import heapq

def top_k_frequent(nums, k):
    counts = Counter(nums)
    return heapq.nlargest(k, counts.keys(), key=counts.get)
```

**Key insight.** `Counter.most_common(k)` returns `[(value, count), ...]` sorted by count. We just want the values, so we ignore the count using `_`.

**Complexity.** O(n log n) with `most_common`. O(n log k) with `nlargest`. The heap version is better for small k.

---

### P7. Letter Combinations of a Phone Number

```python
from itertools import product

def letter_combinations(digits):
    if not digits:
        return []

    keymap = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    }

    letter_lists = [keymap[d] for d in digits]
    return ["".join(p) for p in product(*letter_lists)]
```

**Key insight.** Each digit picks one letter from its set. The complete answer is the Cartesian product of all the letter sets. `itertools.product(*lists)` does that.

**Python note.** `product(*letter_lists)` is "product, with each item of letter_lists unpacked as a separate argument." So `product(['a','b'], ['c','d'])` becomes `product(*[['a','b'],['c','d']])`.

> **Python note.** Strings are iterable — looping over `'abc'` yields `'a'`, `'b'`, `'c'`. So `product(*['abc','def'])` is the same as `product('abc', 'def')`, which is the same as `product(['a','b','c'], ['d','e','f'])`.

**Complexity.** O(4^n) time worst case (digit 7 and 9 have 4 letters).

---

### P8. Kth Largest Element in an Array

```python
import heapq

def find_kth_largest(nums, k):
    return heapq.nlargest(k, nums)[-1]
```

**Key insight.** `nlargest(k, nums)` gives the top k. The smallest of those (last item) is the k-th largest.

Alternative one-liner:

```python
def find_kth_largest(nums, k):
    return sorted(nums)[-k]
```

The sort version is O(n log n). The heap version is O(n log k), better when k is small.

**Complexity.** O(n log k) for the heap version.

---

### P9. Fibonacci Number

```python
from functools import cache

@cache
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
```

**Key insight.** Direct recursion + `@cache`. Each unique input is computed once.

**Complexity.** O(n) time and space with cache.

---

### P10. Longest Common Prefix

```python
def longest_common_prefix(strs):
    if not strs:
        return ""
    prefix = []
    for chars in zip(*strs):                     # walks all strings position-by-position
        if len(set(chars)) == 1:                 # all chars equal at this position
            prefix.append(chars[0])
        else:
            break
    return "".join(prefix)
```

**Key insight.** `zip(*strs)` is the "transpose" trick. For `["flower", "flow", "flight"]`, it gives `[('f','f','f'), ('l','l','l'), ('o','o','i'), ...]`. The first position where the chars differ is where the prefix ends.

**Python note.** `zip` stops at the SHORTEST iterable. So if one string is shorter, the loop stops there automatically.

**Complexity.** O(total chars across all strings) time.

---

### P11. GCD of Strings

```python
from math import gcd

def gcd_of_strings(str1, str2):
    if str1 + str2 != str2 + str1:
        return ""                                # only equal if both built from the same base
    g = gcd(len(str1), len(str2))
    return str1[:g]
```

**Key insight.** If both strings are built from repeated copies of some `t`, then `str1 + str2 == str2 + str1`. The length of `t` is `gcd(len(str1), len(str2))`.

**Complexity.** O(n + m) time.

---

### P12. Range Sum Query - Immutable

```python
from itertools import accumulate

class NumArray:
    def __init__(self, nums):
        self.prefix = [0] + list(accumulate(nums))
        # prefix[i] = sum of nums[0..i-1]

    def sumRange(self, i, j):
        return self.prefix[j + 1] - self.prefix[i]
```

**Key insight.** Build a prefix sum once in `__init__`. Each query is then O(1): `sum(nums[i..j]) = prefix[j+1] - prefix[i]`.

The leading `0` shifts indexes so `prefix[k] = sum(nums[0..k-1])`. This simplifies the query formula.

> **Why the leading 0?** We prepend a 0 so that `prefix[k]` equals the sum of `nums[0..k-1]` (the first `k` items). This makes the range sum formula clean: `sum(nums[i..j])` is `prefix[j+1] - prefix[i]`. Without the leading 0, you would have an awkward special case for `i == 0`.

**Complexity.** `__init__` is O(n). Each `sumRange` is O(1).

---

### P13. Find Pivot Index

```python
def pivot_index(nums):
    total = sum(nums)
    left_sum = 0
    for i, x in enumerate(nums):
        if left_sum == total - left_sum - x:    # right side is total minus left minus current
            return i
        left_sum += x
    return -1
```

**Key insight.** For each position, the right sum is `total - left_sum - nums[i]`. Compare to left sum. No need to build prefix sums explicitly.

**Complexity.** O(n) time, O(1) space.

---

### P14. Pow(x, n)

```python
def my_pow(x, n):
    if n == 0:
        return 1.0
    if n < 0:
        return 1.0 / my_pow(x, -n)
    half = my_pow(x, n // 2)
    if n % 2 == 0:
        return half * half
    else:
        return half * half * x
```

**Key insight.** Fast exponentiation: `x^n = (x^(n/2))^2`. Halve the exponent each step, so the total work is O(log n) instead of O(n).

> **Tip.** `@cache` does not play well with instance methods because `self` is part of the cache key. For class methods, write the recursion as a nested function inside the method, OR use a plain dictionary as a manual cache.

**Complexity.** O(log n) time.

---

### P15. Maximum Subarray

```python
def max_sub_array(nums):
    current = nums[0]
    best = nums[0]
    for x in nums[1:]:
        current = max(x, current + x)            # start fresh OR extend
        best = max(best, current)
    return best
```

**Key insight.** Kadane's algorithm. At each position, decide: "should I start a new subarray here, or extend the current one?" Pick whichever gives a bigger running sum. Track the best ever.

**Complexity.** O(n) time, O(1) space.

This is your first taste of **dynamic programming**. We will see it deeply in Chapters 24-28.

---

## Flashcards

| Front | Back |
|-------|------|
| Module for combinations, permutations, accumulate? | `itertools` |
| Module for `@cache` and `reduce`? | `functools` |
| Module for binary-search insertion in a sorted list? | `bisect` |
| Module for min-heap and top-K? | `heapq` |
| Module for gcd, factorial, isqrt? | `math` |
| One-line prefix sum of a list? | `list(itertools.accumulate(nums))` |
| `itertools.combinations(items, 2)` gives? | All unordered pairs from items |
| `itertools.product([1,2], ['a','b'])` gives? | `[(1,'a'),(1,'b'),(2,'a'),(2,'b')]` - Cartesian product |
| Difference between combinations and permutations? | Combinations: order does NOT matter. Permutations: order DOES matter. |
| `@cache` does what? | Remembers function results so they are not recomputed |
| Why use `@cache` on a recursive function? | Avoids exponential re-computation; turns O(2^n) into O(n) typically |
| `heapq.heappush(heap, x)` and `heapq.heappop(heap)`? | Add to / remove smallest from heap, O(log n) each |
| Python heap is min-heap or max-heap? | min-heap (smallest on top) |
| How to use heapq as a max-heap? | Push the NEGATIVE of each value, negate again on pop |
| `heapq.nlargest(k, items)` does? | Returns the k largest items, O(n log k) |
| `bisect_left(arr, x)` returns? | Leftmost index where x can be inserted to keep arr sorted |
| `bisect_right(arr, x)` vs `bisect_left(arr, x)`? | bisect_right returns the spot AFTER existing x's. bisect_left returns BEFORE. |
| `math.inf` is? | Positive infinity, usable as a float for "starting min" comparisons |
| `math.gcd(a, b)` returns? | Greatest common divisor of a and b |
| Kadane's algorithm one-liner? | `current = max(x, current + x); best = max(best, current)` |
| What are the two parts of every recursive function? | A base case (smallest input, no recursion) and a recursive case (calls itself on a smaller input). |
| Why does plain recursive `fib(40)` take forever? | It recomputes the same sub-problems many times. `@cache` fixes that by remembering results. |
| To get ALL subsets, how to use `combinations`? | Loop `r` from 0 to `len(nums)`, collect `combinations(nums, r)` for every size. |

---

## Spaced Repetition Schedule

| Day | Date (fill in) | Task |
|-----|---------------|------|
| 0   | _____ | Read chapter. Do worked examples on paper. Try all 15 practice. |
| 1   | _____ | Review flashcards. Re-do problems you got wrong. |
| 3   | _____ | Review flashcards. Pick 3 random problems. Re-solve from scratch. |
| 7   | _____ | Review flashcards. Pick 3 different problems. Re-solve from scratch. |
| 14  | _____ | Final review. If all 3 feel easy, move to Chapter 6. |

**Promotion rule.** Move on only when you can solve any 3 practice problems, picked at random, without help.

---

## What's next

**Chapter 6** is the Big-O and Complexity Analysis chapter. So far we have casually used O(n), O(n²), O(log n). Chapter 6 makes you fluent. You will learn how to derive complexity from a piece of code without guessing, what "amortized" means in depth, the difference between time and space complexity, common pitfalls (like `s += c` in a loop), and how to estimate whether your solution will pass the time limit.

After Chapter 6, Phase 1 (Foundations) is complete. Phase 2 starts with Linked Lists.


---


# End of current build

This book currently contains Chapters 1 through 5. More chapters are being added.
Re-run `./build-book.sh` to rebuild after new chapters are added.
