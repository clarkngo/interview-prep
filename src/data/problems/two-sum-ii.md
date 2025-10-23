# Two Sum II - Input array is sorted

Given a 1-indexed array of integers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

Example

```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
```

```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1
        while l < r:
            s = numbers[l] + numbers[r]
            if s == target:
                return [l+1, r+1]
            if s < target:
                l += 1
            else:
                r -= 1
```
