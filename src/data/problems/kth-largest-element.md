# Kth Largest Element in an Array

Find the kth largest element in an unsorted array.

Example

```
Input: [3,2,1,5,6,4], k = 2
Output: 5
```

```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        import heapq
        return heapq.nlargest(k, nums)[-1]
```
