# Coin Change

Given coins of different denominations and a total amount, compute the fewest number of coins needed to make up that amount.

Example

```
Input: coins = [1,2,5], amount = 11
Output: 3 (5+5+1)
```

```python
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')]*(amount+1)
        dp[0] = 0
        for i in range(1, amount+1):
            for c in coins:
                if c <= i:
                    dp[i] = min(dp[i], dp[i-c]+1)
        return dp[amount] if dp[amount] != float('inf') else -1
```
