# Design Twitter

Design a simplified version of Twitter where you can post tweets, follow/unfollow users, and fetch the 10 most recent tweet ids in a user's news feed.

This is a design problem; typical solutions use a per-user list and a min-heap to merge timelines.

```python
class Twitter:
    def __init__(self):
        self.tweets = {}
        self.following = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.setdefault(userId, []).insert(0, tweetId)
    def follow(self, followerId: int, followeeId: int) -> None:
        self.following.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.following.get(followerId, set()).discard(followeeId)
    def getNewsFeed(self, userId: int):
        # merge recent tweets from user and followees
        pass
```
