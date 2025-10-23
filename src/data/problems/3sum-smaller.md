# 3Sum Smaller

Given an array of integers nums and a target, return the number of index triplets i < j < k such that nums[i] + nums[j] + nums[k] < target.

Example

```
Input: nums = [-2,0,1,3], target = 2
Output: 2
```

```python
class Solution:
    def threeSumSmaller(self, nums: List[int], target: int) -> int:
        nums.sort()
        res = 0
        for i in range(len(nums)-2):
            l, r = i+1, len(nums)-1
            while l < r:
                if nums[i] + nums[l] + nums[r] < target:
                    res += r - l
                    l += 1
                else:
                    r -= 1
        return res
```
