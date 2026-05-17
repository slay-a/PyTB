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
