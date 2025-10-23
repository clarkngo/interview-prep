# Substring with Concatenation of All Words

Given a string s and a list of words of equal length, find all starting indices of substring(s) in s that is a concatenation of each word exactly once and without any intervening characters.

```python
from collections import Counter
def findSubstring(s, words):
    if not words: return []
    word_len = len(words[0])
    all_len = word_len * len(words)
    target = Counter(words)
    res = []
    for i in range(word_len):
        left = i; count = 0; cur = {}
        for j in range(i, len(s)-word_len+1, word_len):
            w = s[j:j+word_len]
            if w in target:
                cur[w] = cur.get(w,0)+1
                count += 1
                while cur[w] > target[w]:
                    left_w = s[left:left+word_len]
                    cur[left_w] -= 1
                    left += word_len
                    count -= 1
                if count == len(words): res.append(left)
            else:
                cur.clear(); count = 0; left = j+word_len
    return res
```

### Complexity

- Time: O(n * word_len)
