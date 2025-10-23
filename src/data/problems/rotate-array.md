# Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.

```python
def rotate(nums, k):
    k %= len(nums)
    nums[:] = nums[-k:] + nums[:-k]
```

### Complexity

- Time: O(n)
- Space: O(1) (in-place view)
