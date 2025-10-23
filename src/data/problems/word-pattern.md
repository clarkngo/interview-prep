# Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Example

```
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
```

```python
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split()
        if len(words) != len(pattern): return False
        mp = {}
        used = set()
        for c,w in zip(pattern, words):
            if c in mp:
                if mp[c] != w: return False
            else:
                if w in used: return False
                mp[c] = w; used.add(w)
        return True
```
