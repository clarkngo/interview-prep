# Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

Example

```
Input: root = [2,1,3]
Output: true
```

```python
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def helper(node, low, high):
            if not node: return True
            if node.val <= low or node.val >= high: return False
            return helper(node.left, low, node.val) and helper(node.right, node.val, high)
        return helper(root, float('-inf'), float('inf'))
```
