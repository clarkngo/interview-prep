# Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Example

```
Input: s = "babad"
Output: "bab" or "aba"
```

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        # Expand around center approach
        if not s: return ""
        start = end = 0
        for i in range(len(s)):
            l1, r1 = self.expand(s, i, i)
            l2, r2 = self.expand(s, i, i+1)
            if r1 - l1 > end - start:
                start, end = l1, r1
            if r2 - l2 > end - start:
                start, end = l2, r2
        return s[start:end+1]

    def expand(self, s, l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1; r += 1
        return l+1, r-1
```
