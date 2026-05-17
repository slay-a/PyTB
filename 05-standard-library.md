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
