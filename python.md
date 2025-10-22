# Python Technical Interview Prep for Microsoft

## Overview
Microsoft technical interviews typically consist of 4-5 rounds focusing on data structures, algorithms, system design, and behavioral questions. Python is a popular choice due to its readability and concise syntax.

## Core Python Concepts

### 1. Data Structures
**Lists, Tuples, Sets, Dictionaries**
```python
# List operations - O(1) append, O(n) insert/delete
nums = [1, 2, 3]
nums.append(4)  # [1, 2, 3, 4]

# Dictionary - O(1) average lookup
freq = {}
freq['a'] = freq.get('a', 0) + 1

# Set operations - O(1) average add/lookup
seen = set()
seen.add(1)
```

### 2. String Manipulation
```python
# Common string operations
s = "hello world"
s.split()  # ['hello', 'world']
s.upper()  # 'HELLO WORLD'
s.replace('hello', 'hi')  # 'hi world'

# String building (use list for efficiency)
chars = []
for c in s:
    chars.append(c.upper())
result = ''.join(chars)
```

### 3. List Comprehensions & Generators
```python
# List comprehension
squares = [x**2 for x in range(10) if x % 2 == 0]

# Dictionary comprehension
char_freq = {c: s.count(c) for c in set(s)}

# Generator (memory efficient)
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
```

## Essential Algorithms

### 1. Two Pointers
```python
def two_sum_sorted(arr, target):
    """Find two numbers that sum to target in sorted array"""
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []
```

### 2. Sliding Window
```python
def max_sum_subarray(arr, k):
    """Maximum sum of subarray of size k"""
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
```

### 3. Binary Search
```python
def binary_search(arr, target):
    """Find target in sorted array"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```

### 4. Depth-First Search (DFS)
```python
def dfs_recursive(graph, node, visited=None):
    """DFS traversal of graph"""
    if visited is None:
        visited = set()
    
    visited.add(node)
    print(node)
    
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)
    
    return visited

def dfs_iterative(graph, start):
    """DFS using stack"""
    visited = set()
    stack = [start]
    
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            print(node)
            stack.extend(graph[node])
    
    return visited
```

### 5. Breadth-First Search (BFS)
```python
from collections import deque

def bfs(graph, start):
    """BFS traversal of graph"""
    visited = set([start])
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        print(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return visited
```

### 6. Dynamic Programming
```python
def climbing_stairs(n):
    """Count ways to climb n stairs (1 or 2 steps at a time)"""
    if n <= 2:
        return n
    
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

# Space optimized version
def climbing_stairs_optimized(n):
    if n <= 2:
        return n
    
    prev2, prev1 = 1, 2
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    
    return prev1
```

## Important Data Structures

### 1. Heaps (Priority Queue)
```python
import heapq

# Min heap by default
heap = []
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 2)

smallest = heapq.heappop(heap)  # 1

# Max heap (negate values)
max_heap = []
heapq.heappush(max_heap, -3)
largest = -heapq.heappop(max_heap)  # 3

# K largest elements
nums = [1, 5, 3, 9, 2]
k_largest = heapq.nlargest(3, nums)  # [9, 5, 3]
```

### 2. Trees
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_traversal(root):
    """Left -> Root -> Right"""
    result = []
    def traverse(node):
        if node:
            traverse(node.left)
            result.append(node.val)
            traverse(node.right)
    traverse(root)
    return result

def level_order_traversal(root):
    """BFS level by level"""
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result
```

### 3. Graphs
```python
# Adjacency list representation
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
}

# Detect cycle in directed graph
def has_cycle(graph):
    visited = set()
    rec_stack = set()
    
    def dfs(node):
        visited.add(node)
        rec_stack.add(node)
        
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        
        rec_stack.remove(node)
        return False
    
    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    
    return False
```

## Common Interview Patterns

### 1. Hash Map for O(1) Lookup
```python
def two_sum(nums, target):
    """Find indices of two numbers that sum to target"""
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
```

### 2. Fast & Slow Pointers (Cycle Detection)
```python
def has_cycle(head):
    """Detect cycle in linked list"""
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            return True
    
    return False
```

### 3. Merge Intervals
```python
def merge_intervals(intervals):
    """Merge overlapping intervals"""
    if not intervals:
        return []
    
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for current in intervals[1:]:
        last = merged[-1]
        
        if current[0] <= last[1]:
            merged[-1] = [last[0], max(last[1], current[1])]
        else:
            merged.append(current)
    
    return merged
```

### 4. Backtracking
```python
def permutations(nums):
    """Generate all permutations"""
    result = []
    
    def backtrack(path, remaining):
        if not remaining:
            result.append(path[:])
            return
        
        for i in range(len(remaining)):
            path.append(remaining[i])
            backtrack(path, remaining[:i] + remaining[i+1:])
            path.pop()
    
    backtrack([], nums)
    return result
```

## Time Complexity Cheat Sheet

| Operation | List | Set | Dict | Deque |
|-----------|------|-----|------|-------|
| Access | O(1) | - | O(1) | O(1) |
| Search | O(n) | O(1) | O(1) | O(n) |
| Insert | O(n) | O(1) | O(1) | O(1) |
| Delete | O(n) | O(1) | O(1) | O(1) |
| Append | O(1) | O(1) | O(1) | O(1) |

## Python-Specific Tips

### 1. Use Built-in Functions
```python
# Instead of manual loops
max_val = max(nums)
min_val = min(nums)
total = sum(nums)
sorted_nums = sorted(nums)

# Counter for frequency
from collections import Counter
freq = Counter([1, 2, 2, 3, 3, 3])  # {3: 3, 2: 2, 1: 1}
```

### 2. defaultdict for Cleaner Code
```python
from collections import defaultdict

# Instead of checking if key exists
graph = defaultdict(list)
graph['A'].append('B')  # No KeyError

word_indices = defaultdict(list)
for i, word in enumerate(words):
    word_indices[word].append(i)
```

### 3. Useful Tricks
```python
# Swap values
a, b = b, a

# Multiple assignments
x, y, z = 1, 2, 3

# Infinity
float('inf'), float('-inf')

# Reverse iteration
for i in range(len(arr)-1, -1, -1):
    print(arr[i])

# Enumerate with index
for i, val in enumerate(arr):
    print(f"{i}: {val}")

# Zip multiple lists
names = ['Alice', 'Bob']
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"{name}: {score}")
```

## Practice Resources

1. **LeetCode** - Focus on Microsoft tagged questions (Easy → Medium → Hard)
2. **Key Topics**: Arrays, Strings, Trees, Graphs, Dynamic Programming
3. **Practice Schedule**: 
   - Weeks 1-2: Arrays, Strings, Hash Maps (20-30 problems)
   - Weeks 3-4: Trees, Graphs, DFS/BFS (20-30 problems)
   - Weeks 5-6: Dynamic Programming, Backtracking (15-20 problems)
   - Week 7: System Design basics, Mock interviews

## Interview Tips

1. **Clarify requirements** - Ask about input constraints, edge cases
2. **Think out loud** - Explain your approach before coding
3. **Start with brute force** - Then optimize
4. **Test your code** - Walk through with examples
5. **Discuss time/space complexity** - Big O notation
6. **Handle edge cases** - Empty inputs, single elements, duplicates
7. **Clean code** - Use meaningful variable names, add comments

## Common Microsoft Interview Questions

- Reverse a linked list
- Validate binary search tree
- Lowest common ancestor
- Word ladder
- Design LRU cache
- Merge k sorted lists
- Serialize/deserialize binary tree
- Longest substring without repeating characters
- Course schedule (graph + topological sort)
- Design a system (parking lot, URL shortener, etc.)

Good luck with your interview preparation!
