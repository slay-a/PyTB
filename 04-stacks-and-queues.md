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
