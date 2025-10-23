# Word Search

Given an `m x n` board and a word, return true if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.

```python
def exist(board, word):
    rows, cols = len(board), len(board[0])
    def dfs(r, c, i):
        if i == len(word): return True
        if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[i]: return False
        tmp = board[r][c]; board[r][c] = '#'
        found = any(dfs(r+dr, c+dc, i+1) for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)])
        board[r][c] = tmp
        return found
    for r in range(rows):
        for c in range(cols):
            if dfs(r,c,0): return True
    return False
```

### Complexity

- Time: O(m*n*4^L) where L is the word length
- Space: O(L)
