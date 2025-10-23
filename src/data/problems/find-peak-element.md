# Find Peak Element

A peak element is an element that is strictly greater than its neighbors. Given an input array nums, where nums[i] != nums[i+1], find a peak element and return its index.

Example

```
Input: nums = [1,2,3,1]
Output: 2
```

```python
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        l, r = 0, len(nums)-1
        while l < r:
            m = (l+r)//2
            if nums[m] < nums[m+1]:
                l = m+1
            else:
                r = m
        return l
```
