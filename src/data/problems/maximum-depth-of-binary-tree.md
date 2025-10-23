# Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

Example

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

```python
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```
