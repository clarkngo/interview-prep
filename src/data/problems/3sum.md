# 3Sum

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that they sum to zero. The solution set must not contain duplicate triplets.

```python
def three_sum(nums):
    nums.sort()
    res = []
    for i in range(len(nums)-2):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        l, r = i+1, len(nums)-1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s < 0:
                l += 1
            elif s > 0:
                r -= 1
            else:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l+1]: l += 1
                while l < r and nums[r] == nums[r-1]: r -= 1
                l += 1; r -= 1
    return res
```

### Complexity

- Time: O(n^2)
- Space: O(1) (ignoring output)
