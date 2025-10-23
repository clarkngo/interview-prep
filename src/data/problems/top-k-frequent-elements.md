# Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        from collections import Counter
        cnt = Counter(nums)
        return [x for x,_ in cnt.most_common(k)]
```
