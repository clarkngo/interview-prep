# Minimum Window Substring

Given two strings s and t, return the smallest substring of s that contains all the characters of t. If there is no such substring, return the empty string.

Example

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
```

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        need = collections.Counter(t)
        missing = len(t)
        i = start = end = 0
        for j, ch in enumerate(s, 1):
            if need[ch] > 0:
                missing -= 1
            need[ch] -= 1
            if missing == 0:
                while i < j and need[s[i]] < 0:
                    need[s[i]] += 1
                    i += 1
                if not end or j - i > end - start:
                    start, end = i, j
        return s[start:end]
```
