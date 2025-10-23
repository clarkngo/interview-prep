# Contains Duplicate

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

```python
def contains_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False
```

### Explanation

**Time Complexity:** O(n)

**Space Complexity:** O(n)

**Edge Cases:**

- Empty array (should return False)
- All elements identical
