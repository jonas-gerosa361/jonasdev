## Why to squash commit?
In this article, we will cover how to squash commits but before that let's understand why would we want to do this. The most beneficial aspect of squashing commit is during the PR review where instead of having multiple commits to check we will have only one:

**PR with 4 commits**

![Pull Request with 4 commits](/images/posts/pr-with-4-commits.png)

In the above example, we could have only the commit message "Created component Main".
## Squashing the commit
First let's check how many commits we will have to squash:
```git log```

![Git commits history](/images/posts/git-log.png)

In this example, we have 4 commits in our branch develop. Let's squash them with
```git rebase -i HEAD~4```

This will open our default editor with the following content:
```
pick 8bfae95 Created component Main
pick 614f223 Created style for compoent Main
pick f94c037 Bugfix on component Main
pick 5f23279 Changed some styles on component
```

We have a legend explaining the options available here but for the squash just leave the first line with "pick" and change all other ones to "squash" or "s".
![Git commits listed on rebase-todo](/images/posts/squashing-commits.png)

Save your file and the next file with the commit messages will appear:
![List with git commit messages](/images/posts/commit-messages.png)

In our case we'll exclude all messages and leave only the first one:
![List with git commit, now with only 1 commit message](/images/posts/one-message.png)

After saving your file we now have only one commit in our local branch:
![Git log with one commit](/images/posts/git-log-squashed.png)

Now let's push this to create our new PR - the -f here was used because now we are behind the remote branch:
```git push origin develop -f```

And now we have a PR with only one commit :)
![PR with only one commit](/images/posts/pr-with-1-commit.png)





