# Course Schedule

There are a total of numCourses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites, given as pairs [a, b] meaning to take course a you must first take course b. Determine if you can finish all courses.

```python
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        g = {i: [] for i in range(numCourses)}
        for a,b in prerequisites:
            g[b].append(a)
        visit = [0]*numCourses
        def dfs(u):
            if visit[u] == 1: return False
            if visit[u] == 2: return True
            visit[u] = 1
            for v in g[u]:
                if not dfs(v): return False
            visit[u] = 2
            return True
        return all(dfs(i) for i in range(numCourses))
```
