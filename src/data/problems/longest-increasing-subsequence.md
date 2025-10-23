# Longest Increasing Subsequence

Given an integer array nums, return the length of the longest strictly increasing subsequence.

Example

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
```

```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        import bisect
        sub = []
        for x in nums:
            i = bisect.bisect_left(sub, x)
            if i == len(sub): sub.append(x)
            else: sub[i] = x
        return len(sub)
```
