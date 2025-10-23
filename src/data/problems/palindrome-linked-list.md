# Palindrome Linked List

Determine if a singly linked list is a palindrome.

Example

```
Input: head = [1,2,2,1]
Output: true
```

```python
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        # Find middle, reverse second half, compare
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        prev = None
        while slow:
            nxt = slow.next
            slow.next = prev
            prev = slow
            slow = nxt
        p, q = head, prev
        while q:
            if p.val != q.val: return False
            p, q = p.next, q.next
        return True
```
