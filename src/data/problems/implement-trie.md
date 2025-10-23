# Implement Trie (Prefix Tree)

Implement a trie with insert, search, and startsWith operations.

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.children.setdefault(ch, TrieNode())
        node.end = True
    def search(self, word):
        node = self.root
        for ch in word:
            node = node.children.get(ch)
            if not node: return False
        return node.end
    def startsWith(self, prefix):
        node = self.root
        for ch in prefix:
            node = node.children.get(ch)
            if not node: return False
        return True
```

### Complexity

- insert/search/startsWith: O(L) where L is word length
