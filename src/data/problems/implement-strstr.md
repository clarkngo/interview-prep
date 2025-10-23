# Implement strStr()

Return the index of the first occurrence of needle in haystack, or -1 if not found.

Example

```
Input: haystack = "hello", needle = "ll"
Output: 2
```

```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle: return 0
        return haystack.find(needle)
```
