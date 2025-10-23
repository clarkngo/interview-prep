# Linked List Cycle

Given head of a linked list, determine if the linked list has a cycle in it.

```python
def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

### Complexity

- Time: O(n)
- Space: O(1)
