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
