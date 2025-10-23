# 3Sum Closest

Given an integer array `nums` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.

```python
def three_sum_closest(nums, target):
    nums.sort()
    best = float('inf')
    for i in range(len(nums)-2):
        l, r = i+1, len(nums)-1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if abs(s-target) < abs(best-target):
                best = s
            if s < target:
                l += 1
            else:
                r -= 1
    return best
```

### Complexity

- Time: O(n^2)
- Space: O(1)
# 3Sum Closest

Given an integer array `nums` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.

```python
def three_sum_closest(nums, target):
    nums.sort()
    best = float('inf')
    for i in range(len(nums)-2):
        l, r = i+1, len(nums)-1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if abs(s-target) < abs(best-target):
                best = s
            if s < target:
                l += 1
            else:
                r -= 1
    return best
```

### Complexity

- Time: O(n^2)
- Space: O(1)
