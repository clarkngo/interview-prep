# Find Median from Data Stream

Design a data structure that supports adding numbers and finding the median of all added numbers.

Example

```
addNum(1)
addNum(2)
findMedian() -> 1.5
```

```python
class MedianFinder:
    def __init__(self):
        self.small = []  # max heap
        self.large = []  # min heap
    def addNum(self, num: int) -> None:
        import heapq
        heapq.heappush(self.small, -num)
        if self.small and self.large and -self.small[0] > self.large[0]:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.small) > len(self.large) + 1:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small) + 1:
            heapq.heappush(self.small, -heapq.heappop(self.large))
    def findMedian(self) -> float:
        if len(self.small) > len(self.large): return -self.small[0]
        if len(self.large) > len(self.small): return self.large[0]
        return (-self.small[0] + self.large[0]) / 2
```
