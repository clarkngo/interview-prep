# Word Ladder

Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord.

```python
from collections import deque
def ladderLength(beginWord, endWord, wordList):
    wordSet = set(wordList)
    if endWord not in wordSet: return 0
    q = deque([(beginWord, 1)])
    while q:
        word, dist = q.popleft()
        if word == endWord: return dist
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                nxt = word[:i] + c + word[i+1:]
                if nxt in wordSet:
                    wordSet.remove(nxt)
                    q.append((nxt, dist+1))
    return 0
```

### Complexity

- Time: O(N * L * 26)
- Space: O(N)
