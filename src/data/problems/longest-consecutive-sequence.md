# Longest Consecutive Sequence

Given an unsorted array of integers, return the length of the longest consecutive elements sequence.

Example

```
Input: nums = [100,4,200,1,3,2]
Output: 4
```

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        s = set(nums)
        best = 0
        for n in s:
            if n-1 not in s:
                cur = n; streak = 1
                while cur+1 in s:
                    cur += 1; streak += 1
                best = max(best, streak)
        return best
```
