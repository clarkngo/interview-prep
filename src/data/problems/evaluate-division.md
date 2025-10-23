# Evaluate Division

Given equations and values like a / b = 2.0, and queries, return the answers for queries or -1.0 if not possible.

Example

```
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"]]
Output: [6.0,0.5]
```

```python
class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        g = {}
        for (a,b),v in zip(equations, values):
            g.setdefault(a,[]).append((b,v))
            g.setdefault(b,[]).append((a,1.0/v))
        def dfs(a,b,seen):
            if a not in g or b not in g: return -1.0
            if a==b: return 1.0
            seen.add(a)
            for nb,w in g[a]:
                if nb in seen: continue
                tmp = dfs(nb,b,seen)
                if tmp!=-1.0:
                    return w*tmp
            return -1.0
        return [dfs(a,b,set()) for a,b in queries]
```
