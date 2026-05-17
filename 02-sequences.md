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
