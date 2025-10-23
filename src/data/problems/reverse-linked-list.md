# Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

```python
def reverse_list(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev
```

### Complexity

- Time: O(n)
- Space: O(1)
