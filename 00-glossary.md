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
