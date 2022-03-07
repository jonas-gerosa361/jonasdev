**This tutorial will cover how to use multiple deploy keys with Github on a Linux/Mac system.**

## The first repository with deploy key
To use a repository with a deploy key first check if you have an id_rsa.pub file
```
ls -l ~/.ssh
```
if there is a key created you will see a result like this:
```
ls -l ~/.ssh/
total 40
-rw------- 1 jonasg domain^users  2610 nov 20 10:26 ceep_rsa
-rw-r--r-- 1 jonasg domain^users   580 nov 20 10:26 ceep_rsa.pub
-rw-r--r-- 1 jonasg domain^users   117 nov 20 10:27 config
-rw------- 1 jonasg domain^users  3389 out  4 14:34 id_rsa
-rw-r--r-- 1 jonasg domain^users   752 out  4 14:34 id_rsa.pub
-rw-r--r-- 1 jonasg domain^users 11272 nov 19 09:42 known_hosts

```
In the example above I have 2 different keys, one id_rsa, and another ceep_rsa. Each key is composed of a rsa file and a rsa_pub file.

For creating our first "deploy key" we will use the id_rsa.pub file. Copy the content of the command:
```
cat ~/.ssh/id_rsa.pub
```

And on your Github repository, access Settings / Deploy keys / Add deploy key. Past the key on the Key field, give it a name in the field Title, and check the permission to write to be able to push to this repository.


![Image of the deploy key section on Github.com](/images/posts/deploy-keys.png)

## Adding a second deploy key

Create a new ssh key:
```
ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/jonasg/.ssh/id_rsa): /home/jonasg/.ssh/second_rsa
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

This will create a new pair of files named second_rsa and second_rsa.pub. Copy the second_rsa.pub content and paste it on Github Deploy key of the second repository on Settings / Deploy keys / Add deploy key.

Now it will be necessary to create a config file for our keys:

```
vi ~/.ssh/config
```

And add the configuration below:

```
Host repositoryOne.github.com
  HostName github.com
  User git
  IdentityFile /home/jonasg/.ssh/id_rsa
  IdentitiesOnly yes

Host repositoryTwo.github.com
  HostName github.com
  User git
  IdentityFile /home/jonasg/.ssh/second_rsa
  IdentitiesOnly yes
```

And on local git repository:

```
vi "local_repository"/.git/config
```
Change the value of URL replacing only the repositoryTwo part. The end result will be something like 'git@repositoryTwo.github.com:your-repository-path'

```
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
[remote "origin"]
        url = git@repositoryTwo.github.com:jonas-gerosa361-react/ceep.git
        fetch = +refs/heads/*:refs/remotes/origin/*
```

Now you will be able to push to both repositories without passing user and password. For adding more repository just follow the same proccess for them.

Have fun :)
