# Longest Substring Without Repeating Characters

Given a string `s`, return the length of the longest substring without repeating characters.

```python
def length_of_longest_substring(s):
    chars = {}
    left = 0
    result = 0
    for right, ch in enumerate(s):
        if ch in chars and chars[ch] >= left:
            left = chars[ch] + 1
        chars[ch] = right
        result = max(result, right - left + 1)
    return result
```

### Complexity

- Time: O(n)
- Space: O(min(n, m)) where m is charset size
