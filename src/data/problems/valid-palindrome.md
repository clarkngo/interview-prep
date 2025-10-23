# Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
```

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        i, j = 0, len(s)-1
        while i < j:
            while i < j and not s[i].isalnum(): i += 1
            while i < j and not s[j].isalnum(): j -= 1
            if s[i].lower() != s[j].lower():
                return False
            i += 1; j -= 1
        return True
```
