# Notes from "Coding Interview Patterns" by Alex Xu & Shaun Gunawardane

This file is internal reference. It captures the book's structure, teaching style, and key patterns so the workbook can pull from it without re-reading the PDF.

PDF location: `/Users/slaya/Library/Mobile Documents/com~apple~CloudDocs/Coding interview patterns by Alex Xu.pdf`
Total pages: 154
Publisher: ByteByteGo (2024)

---

## Book contents (Bonus PDF table)

| Pattern | Problems covered | Pages |
|---------|------------------|-------|
| Two Pointers | Shift Zeros to the End, Next Lexicographical Sequence | 4 - 15 |
| Hash Maps and Sets | Longest Chain of Consecutive Numbers, Geometric Sequence Triplets | 16 - 26 |
| Linked Lists | Palindromic Linked List, Flatten a Multi-Level Linked List | 27 - 35 |
| Fast and Slow Pointers | Happy Number Time Complexity Analysis | 36 - 38 |
| Binary Search | Median From Two Sorted Arrays, Matrix Search, Local Maxima, Weighted Random Selection | 39 - 64 |
| Stacks | Repeated Removal of Adjacent Duplicates, Implement Queue Using Stacks, Maximums of Sliding Window | 65 - 80 |
| Heaps | Sort a K-Sorted Array | 81 - 87 |
| Trees | Symmetry, Columns, Kth Smallest in BST, Serialize/Deserialize | 88 - 108 |
| Graphs | Shortest Path, Connect the Dots | 109 - 123 |
| Backtracking | Combinations of a Sum, Phone Keypad Combinations | 124 - 132 |
| Dynamic Programming | Largest Square in a Matrix | 133 - 140 |
| Sort and Search | Dutch National Flag | 141 - 145 |
| Math and Geometry | Josephus Problem, Triangle Numbers | 146 - 154 |

---

## Teaching template used by every problem

Each problem in the book follows this exact 5-section structure. The workbook adopts the same.

### 1. Problem statement (boxed at top)
- 1-2 sentence statement
- One or more concrete input/output examples
- Constraints listed as bullets

### 2. Intuition
- Walks through thinking out loud, plain English
- Usually starts with a BRUTE FORCE approach
- Names the brute force's complexity
- Asks "let's see how we could do better"
- Identifies a key insight that unlocks optimization
- Shows an inline diagram of the insight
- Walks through optimizations step by step

### 3. Implementation
- Final code, with `# comment` lines explaining each block
- Function signature uses type hints (`def foo(nums: List[int]) -> int:`)

### 4. Complexity Analysis
- Time complexity: stated WITH a sentence explaining why
- Space complexity: stated WITH a sentence explaining why
- For multi-loop problems, bullets break down each loop's cost

### 5. Test Cases (table)
| Input | Expected output | Description |
|-------|-----------------|-------------|
| ... | ... | ... |

Standard edge cases: empty input, single element, all same, all different, all zeros, max edge values.

---

## Pattern: Two Pointers (Chapter 1 of the book, pp. 4-15)

### Idea
Two index variables walk through an array. They can:
- Move toward each other (opposite ends - palindrome checks, target sum)
- Move in the same direction (one slow, one fast - dedup, shift zeros)

### Key insight from "Shift Zeros to the End"
**Reframe the goal.** Instead of "move zeros to the right," think "move non-zeros to the left." Once non-zeros are packed left, zeros end up right automatically.

### Standard same-direction template
```python
left = 0
for right in range(len(nums)):
    if <condition for right element>:
        # swap with left, advance left
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
```
- `left` = position the next "good" element should go to.
- `right` = scanner looking for the next "good" element.
- Always advances `right` (a `for` loop handles that).

### Complexity
- Time: O(n) (each pointer moves at most n times total).
- Space: O(1) if done in place.

### Key insight from "Next Lexicographical Sequence"
**Pivot concept.** Scan from right. Find the first character that breaks the non-increasing run from the end. That character is the pivot. Swap it with the smallest char to its right that is still bigger than it. Then reverse the suffix after the pivot.

If no pivot exists, the string is the LAST lexicographic permutation. Return reverse (the FIRST permutation).

---

## Pattern: Hash Maps and Sets (Chapter 2 of the book, pp. 16-26)

### Idea
Hash maps and sets give O(1) average-time lookups, inserts, deletes. They convert "is X in this collection?" from a scan (O(n)) to a single hash lookup.

### Key insight from "Longest Chain of Consecutive Numbers"
**Only start counting a chain from its smallest number.** A number `x` is the smallest in its chain if and only if `x - 1` is NOT in the set.

- Naive: for each `x`, count up from there → O(n²) work because we recount nested chains.
- Optimized: only start counting when `x - 1 not in set`. Each element is visited at most twice across all the inner while-loops → O(n).

### Template
```python
def longest_chain(nums):
    num_set = set(nums)
    longest = 0
    for num in num_set:
        if num - 1 not in num_set:        # only start at chain heads
            current = num
            chain = 1
            while current + 1 in num_set:
                current += 1
                chain += 1
            longest = max(longest, chain)
    return longest
```

### Complexity
- Time: O(n). The outer loop is O(n). The inner while never re-scans the same chain.
- Space: O(n). The hash set stores up to n elements.

### Key insight from "Geometric Sequence Triplets"
**Two hash maps, one for left side, one for right side.** Treat each element `x` as the MIDDLE of a triplet. The left value is `x / r`. The right value is `x * r`. Multiply the frequencies in the two maps to count triplets with x in the middle.

Dynamic update as you sweep:
- Start with `right_map = Counter(nums)`, `left_map = {}`.
- For each `x`:
  1. `right_map[x] -= 1` (remove current x from right since it's no longer to the right).
  2. If `x % r == 0`, add `left_map[x // r] * right_map[x * r]` to total.
  3. `left_map[x] += 1` (now x is to the left for future iterations).

### Why hash MAPS not hash SETS
Because the array might contain duplicates and we need FREQUENCY (not just presence) to count all triplets.

### Complexity
- Time: O(n). Single sweep, O(1) hash ops.
- Space: O(n). Maps grow up to n.

---

## Pedagogical tricks worth copying

1. **Always start with brute force.** Name its complexity. Then say "let's see how we could do better."
2. **Reframe the goal.** If the obvious framing is hard, flip it (move non-zeros instead of zeros).
3. **Diagrams of state changes.** Show arrays/maps changing step by step, with pointer/index labels.
4. **Explain complexity in plain English.** Don't just write O(n). Say WHY each loop contributes that much.
5. **Test cases tables.** Always include empty input, single element, all-same, all-different.
6. **Code is the LAST step.** All thinking happens before writing code.

---

## Patterns to extract for later chapters (TBD as PDF is read further)

| Workbook chapter | Pull from PDF pages |
|------------------|---------------------|
| Ch 1 Iteration & Counting | Hash Maps (pp. 16-26) basic counting/freq map |
| Ch 7 Two Pointers | Two Pointers (pp. 4-15) full chapter |
| Ch 3 Hashing | Hash Maps (pp. 16-26) full chapter |
| Ch 7 Linked Lists | Linked Lists (pp. 27-35) |
| Ch 8 Sliding Window | Stacks - Maximums of Sliding Window (pp. 74-80) |
| Ch 11 Binary Search | Binary Search (pp. 39-64) |
| Ch 4 Stacks/Queues | Stacks (pp. 65-80) |
| Ch 13 Heaps | Heaps (pp. 81-87) |
| Ch 14-15 Trees, Ch 16 BST | Trees (pp. 88-108) |
| Ch 17-21 Graphs | Graphs (pp. 109-123) |
| Ch 22-23 Backtracking | Backtracking (pp. 124-132) |
| Ch 24-28 DP | Dynamic Programming (pp. 133-140) |
| Ch 12 Sorting | Sort and Search (pp. 141-145) |
| Ch 29 Math | Math and Geometry (pp. 146-154) |

---

## Pattern: Stacks (Chapter 6 of the book, pp. 65-80)

### Idea
A **stack** is LIFO (last in, first out). Use a Python list: `append` to push, `pop` to pop, `[-1]` to peek.

### Key insight from "Repeated Removal of Adjacent Duplicates" (LC 1047)
The stack mirrors the "string being built." For each char:
- If it equals the top of the stack, pop (they cancel out).
- Otherwise, push.

The final stack IS the answer. Join the chars at the end.

```python
def remove_adjacent_duplicates(s):
    stack = []
    for c in s:
        if stack and c == stack[-1]:
            stack.pop()
        else:
            stack.append(c)
    return "".join(stack)
```

Time: O(n). Space: O(n) (stack can hold up to n chars).

### Key insight from "Implement a Queue Using Stacks" (LC 232)
**Two stacks: `enqueue_stack` (newest) and `dequeue_stack` (oldest).**

- `enqueue(x)`: push to `enqueue_stack`. O(1).
- `dequeue()` or `peek()`:
  - If `dequeue_stack` is empty, transfer ALL items from `enqueue_stack` to `dequeue_stack` (pops in reverse, so oldest ends up on top of dequeue_stack).
  - Pop / peek the top of `dequeue_stack`.

**Amortized O(1)** for dequeue. Each item is moved between stacks at most ONCE in its lifetime, so the total work across n dequeues is O(n), averaging O(1) per call.

```python
class Queue:
    def __init__(self):
        self.enqueue_stack = []
        self.dequeue_stack = []

    def enqueue(self, x):
        self.enqueue_stack.append(x)

    def _transfer(self):
        if not self.dequeue_stack:
            while self.enqueue_stack:
                self.dequeue_stack.append(self.enqueue_stack.pop())

    def dequeue(self):
        self._transfer()
        return self.dequeue_stack.pop()

    def peek(self):
        self._transfer()
        return self.dequeue_stack[-1]
```

### Key insight from "Maximums of Sliding Window" (LC 239)
**Monotonic decreasing deque** storing tuples `(value, index)`. The MAX of any window is the leftmost (oldest) candidate that is still in the window.

For each new value as the window slides right:
1. **Pop from RIGHT** any candidates `<= new value`. (They can never be the max while new value is present.)
2. **Push new value** with its index.
3. **Pop from LEFT** any candidates with index `< left pointer`. (Outside the window.)
4. The max of the window is `dq[0][0]` (the leftmost).

```python
from collections import deque

def maximums_of_sliding_window(nums, k):
    res = []
    dq = deque()
    left = right = 0
    while right < len(nums):
        # Step 1: pop smaller-or-equal candidates from the right
        while dq and dq[-1][0] <= nums[right]:
            dq.pop()
        # Step 2: push new candidate
        dq.append((nums[right], right))
        # If window is full size, record max and slide left
        if right - left + 1 == k:
            # Step 3: pop outdated candidates from the left
            if dq[0][1] < left:
                dq.popleft()
            res.append(dq[0][0])
            left += 1
        right += 1
    return res
```

Time: O(n). Each element is pushed and popped at most once. Space: O(k).

### Alex Xu's Interview Tip (from this chapter)
"If you're unsure about what data structure to use for a problem, first identify what attributes or operations you want from the data structure. Then pick a structure that satisfies them."

For Sliding Window Maximum: we needed to add/remove from BOTH ENDS efficiently, so a deque was the right fit.

### Pattern names to remember
- **Adjacent pair cancellation** - stack, pop on match
- **Two-stack queue** - amortized O(1) dequeue via lazy transfer
- **Monotonic decreasing deque** - maintain candidate list for sliding window max

---

## Status

- [x] Pages 1-26 read (Contents, Two Pointers, Hash Maps and Sets)
- [ ] Pages 27-38 (Linked Lists, Fast and Slow Pointers)
- [ ] Pages 39-64 (Binary Search)
- [x] Pages 65-80 (Stacks)
- [ ] Pages 81-108 (Heaps, Trees)
- [ ] Pages 109-123 (Graphs)
- [ ] Pages 124-145 (Backtracking, DP, Sort)
- [ ] Pages 146-154 (Math and Geometry)

When building a new chapter, read the relevant PDF pages first and add the notes here before writing the chapter.
