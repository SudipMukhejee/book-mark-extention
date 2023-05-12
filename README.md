# Hi, I'm Sudip! 👋



Do you often watch long videos online and want to save your progress for later? Do you wish you could easily jump to your favorite scenes or segments without scrolling through the timeline? If so, you might want to try Video Bookmark, a handy extension that lets you create and manage bookmarks for any video on the web. With Video Bookmark, you can:

- Mark any point in a video with a custom label and description.
- View all your bookmarks in a sidebar and click on them to jump to the corresponding position.
- Sync your bookmarks across devices and browsers using your Google account.
- Share your bookmarks with others via email or social media.

Video Bookmark is compatible with most popular video platforms, such as YouTube, Vimeo, Netflix, and more. It is easy to use and has a sleek and intuitive interface. Whether you are watching a movie, a lecture, a tutorial, or anything else, Video Bookmark can help you enhance your viewing experience and save your time. Download Video Bookmark today and never lose track of your videos again!


## Deployment

To deploy this project run

```bash
  npm run deploy
```
to initilize

```bash
  git init
```
to add file to staging area
```bash
  git add .
```
To includes all the files that are in the staging area
```bash
  git commit -m "first commit"
```
To renames the current branch to main and forces the rename even if the branch main already exists
```bash
  git branch -M main
```
To adds a new remote repository named origin with the URL
```bash
  git remote add origin https://URL
```
Push the committed changes in your feature branch to your remote repo.
```bash
  git push -u origin main 
  or
  git push
```
Track your changes.
```bash
  git status
```
Clone your forked copy of the project.
```bash
  git clone https://github.com/<your_user_name>/url.git
```
- where `your_user_name` is your GitHub username.
 
Navigate to the project directory.
 ```bash
cd shorto_url_shorter
```
Check the remotes for this repository.
```bash
git remote -v
```
to show the commit logs of your repositor
```bash
git log
```
To remove untracked files from the working tree
```bash
git clean
```
  to force the removal of untracked files
```bash
git clean -f
```
to interectivelt choose which files to remove
```bash
git clean -i
```
to remove untracked directories
```bash
git clean -d
```
to remove ignored files as well
```bash
git clean -x
```
to do a dry run and see what files would be removed without actually deleting them.
```bash
git clean -n
```
## Authors

- [@octokatherine](https://www.github.com/octokatherine)

## 🔗 Links
<!-- [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/) -->

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sudip-mukherjee-2751a6224/)

<!-- [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/) -->

## 🚀 About Me
I'm a full stack developer...
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## FAQ

![Alt text](https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A686%2F1*diRLm1S5hkVoh5qeArND0Q.png&tbnid=Hn2p1CCRH_aJzM&vet=12ahUKEwjj6b-Eg-_-AhUFyaACHbyCDCAQMygBegUIARC5AQ..i&imgrefurl=https%3A%2F%2Fmedium.com%2F%40lucasmaurer%2Fgit-gud-the-working-tree-staging-area-and-local-repo-a1f0f4822018&docid=qY91W4Ssn1zGJM&w=686&h=396&q=git%20working%20directory%20and%20staging%20area&ved=2ahUKEwjj6b-Eg-_-AhUFyaACHbyCDCAQMygBegUIARC5AQ"a title")

- #### git working area

I hope we all know what is the very first step to start with git? Yes, you are right we need to initialize an empty git repository, assuming that git is installed in your system already. 🙂 How do we do that? It is quite simple, in a terminal move to your desired directory and issue:
```bash
  git init
```
This would initialize the current directory as an empty git directory. Then you can add a remote working branch as the origin for this directory. This would make sure that all your push and pull are made from the repository hosted remotely. Sounds good right? That is pretty much we all know already. Now the question(s) one may ask is where the git working areas are? What is meant by working areas? If there are any working areas then what is their count? And so on. So let’s try to answer those questions.

- #### Where are the working areas?

Remember the first step we performed with git? Initializing an empty git repository. That init step was the first step to add the working areas in the initialized directory. So the answer is pretty simple, git working areas resides locally within every git initialized directory, in the .git folder

- ### What is meant by the git working areas?

Git working areas are the physical storages on the local disk that track how your code and commits move across as you issue git commands. As a result, staging and unstaging of changes happen locally. We will learn what is staging and unstaging in a while.

- ### How many working areas are there?
There are these 4 working areas in git.

 1. Workspace aka untracked area
 2. Index aka staging area
 3. Repository
 4. Stash
Let us quickly go through each of these working areas one-by-one and understand their purpos

- ### Workspace Area
Well the working area(aka the workspace) is the area where we actually start adding our changes to. Whenever we initialize an empty directory and add some content like a file or folder etc we are working in the workspace area only. Every thing we put in the directory, we are actually putting that in the workspace. This is the area that contains the least concerned file state. Meaning, that we are not concerned if the changes we made or things we have added are lost in the future, unless we want them to persist and issue an add command. As a result, this is considered as the highly volatile area of git.

Let’s see through an example.

For the sake of simplicity, I have created an empty git repository: gitBlog. I then went ahead and added a HelloWorld.scala file to the directory. Remember, this file was just added to the workspace area and is volatile. We can see from the below screenshot, when we issue a git status command, it says there are untracked changes. We can also confirm that the file is accessible in the area and has content in it.
![Alt text](https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/05/Screenshot-from-2020-05-19-18-15-52.png?w=704&ssl=1 "a title")
Untracked files are those that are present in your workspace but are considered safe to delete by git. Making them quite volatile. Meaning, once the file is deleted there is no way that git can track it.
- ### Index/Staging Area
Git is quite interactive itself, one can notice that when we issued the git status command earlier. It prompts with a message:
```bash
Untracked files:
(use "git add …" to include in what will be committed)
HelloWorld.scala
nothing added to commit but untracked files present (use "git add" to track)

```
This is git’s way of doing things right. It is a developer friendly system assisting them at every step. Here git is telling us that we have untracked file, and to make it traceable we should use the git add command.

When we issue a git add command the contents of the directory move from the Working Area -> Staging Area. Every staging step leads to the creation of blobs and commits in the Indexing Area Trees. It is though out of scope for this blog post. Staging area is from where git starts tracking and saving changes that occur in the file. The .git directory, stores all of it. Let’s see how we stage our changes, we take the same example from above.

To add a specific file to the staging area use the command:
```bash
git add <your-File-Name> which in our case turns out to be:
git add HelloWorld.scala
```
In case you do not want to manually add every file from the working area to the staging area use:
```bash
git add .
The `.` is a wildcard denoting that git should move every file from the workspace to staging area. 
```
We will see something like this, after staging is successfull:

![Alt text](https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/05/Screenshot-from-2020-05-19-18-59-56.png?w=689&ssl=1 "a title")

Now how is this less volatile? Consider removing the file as we did when it was in working area. Only this time when we would do a git status after removal of the file we will see the traces of it as shown below:

![Alt text](https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/05/Screenshot-from-2020-05-19-19-03-53.png?w=688&ssl=1 "a title")

- ### Repository Area

Also known as local repository, to avoid any confusion with remote repository references. This is probably the safest area for the local code/content. We move from the Staging Area -> Local Repository when we issue a git commit command. Mainly what you will see in your Local Repository are all of your checkpoints or commits. It is the area that saves everything (so don’t delete it). A commit is simply a checkpoint telling git to track all changes that have occurred up to this point using our last commit as a comparison. The staging area will be empty, once the code gets committed.

![Alt text](https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/05/Screenshot-from-2020-05-19-19-14-04.png?w=990&ssl=1 "a title")

- ### Stash Area

To hold some content changes safely, git uses a special area within which is the stash area. These changes, later at some point of time, can be re imported. We use it when we want to record the current state of the working directory and the index, but want to go back to a clean working directory. Confusing? Let’s simplify by taking an example.

When you are in the middle of something, your boss comes in and demands that you fix something immediately. Traditionally, you would make a commit to a temporary branch to store your changes away, and return to your original branch to make the emergency fix, right? But this introduces an unnecessary branching burden. To avoid this we could simply use the stash area concept.

We can simply perform the following:
```bash
1. Stash the current content, that we were working on.
2. Put an emergrncy fix to the code, commit it and push it to remote.
3. Pull the stashed content from the stash area and continue working on it.
 
```
There is only one command that in general affects the stash area and that is the git stash command.

The below screenshot shows how to play with stash:

![Alt text](https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/05/Screenshot-from-2020-05-19-20-37-22.png?w=707&ssl=1 "a title")

### Stash in action
We received a request to fix the previous version first, while we were updating HelloWorld.scala’s content locally. Therefore, we will need to stash the current changes and fix the breaking file.

```bash
git stash
Saved working directory and index state WIP on feature/add-Input: 603cfc8 Add HelloWorld to Local Repository area.
```
![Alt text](https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/05/Screenshot-from-2020-05-19-20-43-48.png?w=1047&ssl=1 "a title")

## Acknowledgements

 - [gpt-4](https://chat.forefront.ai/)


