# Product of Array Except Self

Given an integer array `nums`, return an array `answer` such that `answer[i]` is the product of all the elements of `nums` except `nums[i]`.

```python
def product_except_self(nums):
    n = len(nums)
    res = [1] * n
    prefix = 1
    for i in range(n):
        res[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n-1, -1, -1):
        res[i] *= suffix
        suffix *= nums[i]
    return res
```

### Complexity

- Time: O(n)
- Space: O(1) extra (output excluded)
