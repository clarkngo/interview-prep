# Symmetric Tree

Check whether a binary tree is symmetric around its center.

Example

```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

```python
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def isMirror(a,b):
            if not a and not b: return True
            if not a or not b: return False
            return a.val==b.val and isMirror(a.left,b.right) and isMirror(a.right,b.left)
        return isMirror(root, root)
```
