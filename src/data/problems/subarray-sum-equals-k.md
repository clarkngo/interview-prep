# Subarray Sum Equals K

Given an array of integers and an integer k, return the total number of continuous subarrays whose sum equals to k.

Example

```
Input: nums = [1,1,1], k = 2
Output: 2
```

```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        from collections import defaultdict
        cnt = defaultdict(int)
        cnt[0] = 1
        cur = 0; ans = 0
        for x in nums:
            cur += x
            ans += cnt[cur - k]
            cnt[cur] += 1
        return ans
```
