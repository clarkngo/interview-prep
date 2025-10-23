# Binary Search

Implement classic binary search on a sorted array to find a target value. Return index or -1 if not found.

```python
def binary_search(nums, target):
    lo, hi = 0, len(nums)-1
    while lo <= hi:
        mid = (lo+hi)//2
        if nums[mid] == target: return mid
        if nums[mid] < target: lo = mid+1
        else: hi = mid-1
    return -1
```

### Complexity

- Time: O(log n)
- Space: O(1)
