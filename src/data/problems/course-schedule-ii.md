# Course Schedule II

Return the ordering of courses you should take to finish all courses given prerequisites. If there are multiple valid orders return any, if impossible return []

```python
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        g = {i: [] for i in range(numCourses)}
        indeg = [0]*numCourses
        for a,b in prerequisites:
            g[b].append(a); indeg[a]+=1
        q = deque([i for i in range(numCourses) if indeg[i]==0])
        res = []
        while q:
            u = q.popleft(); res.append(u)
            for v in g[u]:
                indeg[v]-=1
                if indeg[v]==0: q.append(v)
        return res if len(res)==numCourses else []
```
