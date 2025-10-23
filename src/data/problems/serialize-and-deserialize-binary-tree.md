# Serialize and Deserialize Binary Tree

Design an algorithm to serialize and deserialize a binary tree.

```python
def serialize(root):
    vals = []
    def dfs(node):
        if not node:
            vals.append('#'); return
        vals.append(str(node.val))
        dfs(node.left); dfs(node.right)
    dfs(root)
    return ' '.join(vals)

def deserialize(data):
    vals = iter(data.split())
    def dfs():
        v = next(vals)
        if v == '#': return None
        node = TreeNode(int(v))
        node.left = dfs(); node.right = dfs()
        return node
    return dfs()
```

### Complexity

- Time: O(n)
- Space: O(n)
