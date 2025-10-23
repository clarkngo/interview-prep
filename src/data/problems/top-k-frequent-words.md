# Top K Frequent Words

Given a list of words and an integer k, return the k most frequent words. The result should be sorted by frequency and lexicographically.

```python
from collections import Counter
def topKFrequent(words, k):
    cnt = Counter(words)
    return sorted(cnt.keys(), key=lambda w: (-cnt[w], w))[:k]
```

### Complexity

- Time: O(n log n)
- Space: O(n)
