

> [!PDF|yellow] [[1. Week 1 - Module 1 - Agile Development and Git.pdf#page=5&selection=0,0,2,12&color=yellow|1. Week 1 - Module 1 - Agile Development and Git, p.5]]
> > The Agile Methodology
> 
> 


> [!note] Note
> 好的，我们这就深入探讨这份讲义中关于 **The Agile Methodology（敏捷方法论）** 的核心内容。这一部分是理解现代软件开发流程的关键。
> 
> 我们将从第 6 页开始，逐步分析敏捷开发的运作方式及其核心原则。
> 
> ### 📋 敏捷方法论大纲 (The Agile Methodology)
> 
> **Agile Development – 敏捷开发 (Pages 6-8)**
> 
> - Agile is a way to manage projects that aims to minimise the problems when things go wrong. – 敏捷是一种管理项目的方法，旨在最大程度地减少出错时的问题。
>     
> - In Agile Development, you perform all the four main steps repeatedly as continuous activities. – 在敏捷开发中，你将分析、设计、构建和测试这四个主要步骤作为持续活动重复执行。
>     
> - Agile breaks down larger projects into small, manageable chunks called iterations. – 敏捷将大型项目分解为称为“迭代”的小型、可管理的块。
>     
> - At the end of each iteration, something of value is produced and can be put into the world for feedback. – 在每次迭代结束时，都会产生一些有价值的东西，可以发布到现实中以获取反馈。
>     
> 
> **12 key principles of Agile – 敏捷的 12 项关键原则 (Pages 9-10)**
> 
> - Our highest priority is to satisfy the customer through early and continuous delivery of valuable software. – 我们的最高优先级是通过早期且持续地交付有价值的软件来满足客户。
>     
> - Welcome changing requirements, even late in development. – 欢迎需求变更，即使是在开发后期。
>     
> - Working software is the primary measure of progress. – 运行中的软件是衡量进度的首要标准。
>     
> - Simplicity - the art of maximizing the amount of work not done - is essential. – 简单——即最大限度减少不必要工作量的艺术——是必不可少的。
>     
> 
> **Agile vs Waterfall – 敏捷与瀑布流的对比 (Page 11)**
> 
> - Development is iterative, planning is adaptive, and requirements change frequently. – 开发是迭代的，规划是自适应的，且需求经常变化。
>     
> - In Agile, change is welcomed, whereas in traditional methods, change is resisted. – 在敏捷中，变化是受欢迎的，而在传统方法中，变化会受到抵制。
>     
> 
> ---
> 
> ### 💡 深入理解：敏捷的迭代本质
> 
> 为了直观理解敏捷与传统瀑布流（Waterfall）的区别，我们可以看看它们处理任务的方式：
> 
> ![Agile vs Waterfall lifecycle, AI generated](https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRmG0mY7-Hok_3Pyw6laTE1WgVDMQqGr1ZtEXzJ6y57SyLJYY6G8FjkQ6OY7LhCA8UtcRSCuEigQ6jXUw6DileB6skOvK5V2La6ZqDxZj5bksNcync)
> 
> Shutterstock
> 
> Explore
> 
> 在第 8 页中提到，敏捷的一个迭代周期通常包括：**整理功能（Sort features） -> 开发首选功能（Develop top features） -> 展示给用户（Show to user） -> 更新功能列表（Update feature list）**。
> 
> ---
> 
> **🌟 总结 (Summary)**
> 
> The Agile Methodology section emphasizes shifting from a rigid, linear process to a flexible, iterative one. By breaking projects into smaller cycles and prioritizing customer feedback and working software, teams can respond to changes more effectively and reduce the risk of project failure.
> 
> 敏捷方法论部分强调了从僵化、线性的流程向灵活、迭代的流程转变。通过将项目分解为更小的周期，并优先考虑客户反馈和可运行的软件，团队可以更有效地应对变化，并降低项目失败的风险。
> 
> ---
> 
> **🤔 引导提问**
> 
> 我们已经看过了敏捷的整体思路。在第 9-10 页提到的“敏捷 12 原则”中，哪一条让你觉得在实际团队合作中最难达成？
> 
> 1. **拥抱变化**：即使在开发后期也欢迎需求变更。
>     
> 2. **持续交付**：频繁地交付可运行的软件（从几周到几个月不等）。
>     
> 3. **简单至上**：极力减少不必要的工作量。
>     
> 
> 我们可以针对你感兴趣的原则，结合讲义后面提到的具体实践（如用户故事或 TDD）来深入讨论。


> [!PDF|yellow] [[1. Week 1 - Module 1 - Agile Development and Git.pdf#page=22&selection=0,0,0,21&color=yellow|1. Week 1 - Module 1 - Agile Development and Git, p.22]]
> > Version control: Git



> [!note] Note
> 我们将深入探讨讲义中关于 **Version Control: Git（版本控制：Git）** 的部分。这一章详细介绍了版本控制的必要性、Git 的核心机制以及分支协作的实战操作。
> 
> 我会按照你的要求，逐页进行中英文对照的深度讲解，并结合图示和类比来帮助理解。
> 
> ---
> 
> # **Version Control: Git – 版本控制：Git (Page 22--Page 32)**
> 
> ## **Page 22--Page 24: Introduction to Version Control 版本控制简介**
> 
> ### **Page 22 Version Control: Git – 版本控制：Git**
> 
> - This section marks the transition to technical tools used in Agile. 这一部分标志着向敏捷开发中所使用的技术工具的转变。
>     
> 
> ### **Page 23 Version control systems – 版本控制系统**
> 
> - We want the ability to resolve conflicts between people. 我们希望能够解决人员之间的协作冲突。
>     
> - We want to be able to rollback work. 我们希望能够回滚（撤销）工作。
>     
> - **Analogy:** Think of it as a "Time Machine" for your code. **类比：** 将其想象成代码的“时光机”。
>     
> - It keeps a complete history of who changed what and when. 它记录了谁在何时更改了什么的完整历史。
>     
> 
> ### **Page 24 What is Git? – 什么是 Git？**
> 
> - Git is a distributed version control system. Git 是一种分布式版本控制系统。
>     
> - Distributed means every developer has a full copy of the project history. “分布式”意味着每个开发人员都拥有项目历史记录的完整副本。
>     
> - It is extremely fast and allows for efficient branching and merging. 它速度极快，并支持高效的分支与合并。
>     
> 
> ---
> 
> ## **Page 25--Page 28: Git Basics and Workflow Git 基础与工作流**
> 
> ### **Page 25 Setting up a Git project – 设置 Git 项目**
> 
> - Create a new repository from scratch using `git init`. 使用 `git init` 从零开始创建一个新的存储库。
>     
> - Copy an existing repository from a server using `git clone`. 使用 `git clone` 从服务器复制现有的存储库。
>     
> 
> ### **Page 26 Git project structure – Git 项目结构**
> 
> - The history is a graph of commits. 历史记录是一个由“提交”构成的图结构。
>     
> - Each commit has a unique ID (SHA hash). 每个提交都有一个唯一的 ID（SHA 哈希值）。
>     
> - A set of sequential commits is a branch. 一组按顺序排列的提交就是一个“分支”。
>     
> 
> ### **Page 27 Adding new commits – 添加新提交**
> 
> - `git status`: See what has changed. `git status`：查看哪些内容发生了变化。
>     
> - `git add <file>`: Move changes to the staging area. `git add <file>`：将更改移至暂存区。
>     
> - `git commit -m "message"`: Record the changes permanently. `git commit -m "message"`：永久记录这些更改。
>     
> - **Workflow Logic:** Working Directory → Staging Area → Local Repo. **工作流逻辑：** 工作目录 → 暂存区 → 本地仓库。
>     
> 
> ### **Page 28 The art of writing commit messages – 编写提交信息的艺术**
> 
> - Use the imperative mood in the subject line. 在主题行中使用命令式语气（例如：“Fix bug” 而非 “Fixed bug”）。
>     
> - Keep the first line short (under 50 characters). 首行保持简短（50 字符以内）。
>     
> - Explain _what_ and _why_ vs. _how_. 解释“做了什么”和“为什么做”，而不是“怎么做的”。
>     
> 
> ---
> 
> ## **Page 29--Page 32: Branching, Merging and Remotes 分支、合并与远程仓库**
> 
> ### **Page 29 Managing branches – 管理分支**
> 
> - Create and switch to a new branch: `git checkout -b <branch_name>`. 创建并切换到新分支：`git checkout -b <branch_name>`。
>     
> - Branches allow isolated development of features. 分支允许功能的隔离开发。
>     
> - Check differences between branches using `git diff`. 使用 `git diff` 查看分支之间的差异。
>     
> 
> ### **Page 30 Merging branches – 合并分支**
> 
> - Combine changes from one branch into another using `git merge`. 使用 `git merge` 将一个分支的更改合并到另一个分支。
>     
> - This is how team members integrate their individual work. 这是团队成员整合各自工作的方式。
>     
> 
> ### **Page 31 Git tags – Git 标签**
> 
> - Tags label important individual commits (e.g., v1.0). 标签用于标记重要的单个提交（例如：v1.0 版本）。
>     
> - Unlike branches, tags are meant to be permanent markers. 与分支不同，标签旨在成为永久性的标记点。
>     
> 
> ### **Page 32 Remote repositories – 远程存储库**
> 
> - Remotes are copies of the project hosted on the internet (like GitHub). 远程仓库是托管在互联网上的项目副本（如 GitHub）。
>     
> - `git push`: Send your local commits to the remote. `git push`：将你的本地提交发送到远程。
>     
> - `git pull`: Fetch and merge changes from the remote. `git pull`：从远程获取并合并更改。
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - Git provides a safety net by allowing developers to track and revert changes. Git 通过允许开发人员跟踪和撤销更改来提供安全保障。
>     
> - The "Staging Area" acts as a buffer for preparing specific commits. “暂存区”充当了准备特定提交的缓冲区。
>     
> - Branching is the key to Agile collaboration, allowing multiple features to be built simultaneously. 分支是敏捷协作的关键，允许同时构建多个功能。
>     
> - Remote repositories enable team synchronization and backup. 远程仓库实现了团队同步和备份。
>     
> 
> ---
> 
> **📖 引导提问**
> 
> 在第 27 页提到的 **Staging Area（暂存区）** 是 Git 的一大特色。想象一下你在准备搬家：如果你把所有东西直接扔进大卡车（Commit），以后找东西会很麻烦；而如果你先把相关的物品放进一个特定的箱子（Add），贴好标签后再搬上车，效率会更高。
> 
> 那么，你认为在什么情况下，我们会选择多次使用 `git add` 但只进行一次 `git commit` 呢？

> [!PDF|yellow] [[1. Week 1 - Module 1 - Agile Development and Git.pdf#page=33&selection=66,0,66,19&color=yellow|1. Week 1 - Module 1 - Agile Development and Git, p.33]]
> > Other people repos

![[p.33.png]]
> [!note] Note
> 这部分内容非常关键，它展示了 Git 中最核心的工作流。通过这张图，我们可以理解代码是如何从你的电脑文件夹一步步变成永久历史记录的。
> 
> 我们将围绕 Git 的“三个区域”来进行讲解。
> 
> # **Git Workflow: Adding New Commits Git 工作流：添加新提交 (Page 27)**
> 
> ## **Page 27: The Three Trees of Git Git 的三个区域**
> 
> 在 Git 中，文件会在三个主要区域之间流转。你可以把这看作是一个“三步走”的保存过程：
> 
> 1. **Working Directory (工作目录) 🏠**：
>     
>     - 这是你当前正在操作的实际文件夹。你在这里编写代码、修改或删除文件。
>         
>     - **状态**：此时的更改被称为 **Modified（已修改）**，但还没有被 Git 正式记录。
>         
> 2. **Staging Area / Index (暂存区) 📦**：
>     
>     - 这是一个缓冲区，就像是一个“待发货的箱子”。你通过 `git add` 把想要提交的修改放进这个箱子里。
>         
>     - **作用**：它让你能够精确控制哪些修改应该进入下一次快照，而不是一股脑儿提交所有东西。
>         
>     - **状态**：此时的文件被称为 **Staged（已暂存）**。
>         
> 3. **Local Repository (本地仓库) 🏛️**：
>     
>     - 当你执行 `git commit` 时，Git 会把暂存区里的所有内容打包，生成一个带 ID 的快照。
>         
>     - **状态**：此时的更改被称为 **Committed（已提交）**，它们已经安全地存在于 `.git` 文件夹的历史记录中了。
>         
> 
> ### **Core Commands 核心命令对照**
> 
> |**Command 命令**|**Action 动作**|**Description 描述**|
> |---|---|---|
> |`git status`|查看状态|Check which files are modified or staged. 检查哪些文件已修改或已暂存。|
> |`git add <file>`|添加到暂存区|Move specific changes to the staging area. 将特定更改移至暂存区。|
> |`git commit -m "..."`|提交更改|Record the staged snapshot to the local repository. 将暂存的快照记录到本地仓库。|
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Separation of concerns**: Git uses three areas to help you organize your work before saving it. **关注点分离**：Git 使用三个区域来帮助你在保存工作前进行组织。
>     
> - **Incremental progress**: You can prepare a commit by adding files one by one to the index. **渐进式进展**：你可以通过逐个将文件添加到索引（暂存区）来准备一次提交。
>     
> 
> ---
> 
> **🤔 引导提问**
> 
> 为了巩固对这三个区域的理解，让我们试想一个场景：
> 
> 假设你刚才同时修改了两个文件：`index.html`（完成了一个新功能）和 `style.css`（只是改乱了，你并不想保存它）。
> 
> 根据 Page 27 的流程，你会使用哪条命令来确保**只有** `index.html` 被保存到历史记录中，而忽略掉那个改乱了的 `style.css` 呢？
> 
> 1. `git commit -a`
>     
> 2. `git add index.html`
>     
> 3. `git init`
>     
> 
> 你觉得应该是哪一个？

> [!question] Question
> 没问题，我们详细拆解一下这三个选项。为了让你彻底理解，我先为你对比一下这三个命令在 Git 流程中的实际作用：
> 
> ### 🔍 命令深度解析
> 
> ## **Page 27: Git Command Comparison Git 命令对比**
> 
> - **`git init`**: This command is used to **initialize** a brand new repository. 它用于**初始化**一个全新的仓库。如果你在一个已经有 Git 的项目里运行它，它不会帮你保存当前的修改。
>     
> - **`git commit -a`**: The `-a` flag tells Git to **automatically stage all** modified files and then commit them. `-a` 参数告诉 Git **自动暂存所有**已修改的文件并提交。这意味着它会把 `index.html` 和你“改乱了”的 `style.css` 全部存入历史记录。
>     
> - **`git add index.html`**: This command **specifically** moves only `index.html` to the Staging Area. 这个命令**专门**只将 `index.html` 移至暂存区。此时，`style.css` 依然留在你的工作目录（Working Directory）中，处于“未暂存”状态。
>     
> 
> ---
> 
> ### 💡 沿用“搬家”的例子来理解
> 
> 想象你在整理房间（Working Directory），准备把东西搬到新家（Local Repository）：
> 
> 1. 你整理好了**书本**（`index.html`），但把**衣服**（`style.css`）丢得满地都是，弄得很乱。
>     
> 2. 你想只把书搬走。
>     
> 3. 如果你用 **`git commit -a`**：相当于直接把房间里所有的东西（包括乱七八糟的衣服）一股脑塞进卡车拉走。
>     
> 4. 如果你用 **`git add index.html`**：相当于你只把“书本”放进了**待运送的纸箱**（Staging Area）。
>     
> 
> ### **Summary 总结**
> 
> - `git add` provides **granularity**: you choose exactly what goes into the next snapshot. `git add` 提供了**细粒度控制**：你精确选择哪些内容进入下一个快照。
>     
> - The **Staging Area** is the key: it acts as a filter between your messy workplace and your clean history. **暂存区**是关键：它在你混乱的工作区和整洁的历史记录之间起到了过滤器的作用。
>     
> 
> ---
> 
> **🚩 进一步思考**
> 
> 既然我们现在已经通过 `git add index.html` 把正确的文件放进了“暂存区”（箱子），下一步我们需要执行哪个动作才能把这个箱子里的东西**正式封箱并存入仓库**呢？
> 
> 1. 继续使用 `git add`
>     
> 2. 使用 `git commit -m "完成首页功能"`
>     
> 3. 使用 `git status`
>     
> 
> 你觉得现在该轮到哪一步了？

git commit -m "完成首页功能" 

> [!question] Question
> 没错！使用 `git commit -m "..."` 就是正式将暂存区里的快照（Snapshot）存入本地仓库（Local Repository）的历史记录中。 🏛️
> 
> 在讲义的 **Page 27** 中，这个步骤标志着你的修改已经从“临时准备状态”转变为“永久记录状态”。
> 
> 为了更好地理解这个过程，我们来看看当你在命令行输入这行代码时，Git 后台实际上发生了什么：
> 
> ### **Git Commit 的深度解析 Git Commit In-Depth**
> 
> - **Snapshot Creation 📸**: Git takes a "picture" of all the files in the Staging Area at that exact moment. Git 会为暂存区中这一时刻的所有文件拍一张“照片”（快照）。
>     
> - **Unique Identity 🆔**: Each commit is assigned a unique SHA-1 hash (a long string of numbers and letters) to identify it. 每个提交都会被分配一个唯一的 SHA-1 哈希值（一长串数字和字母），用于标识它。
>     
> - **Author & Metadata 👤**: Git records who made the change, when it happened, and the message you provided. Git 会记录是谁做的更改、发生的时间以及你提供的说明信息。
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - `git commit` is like hitting "**Save**" in a game: you create a checkpoint you can always return to. `git commit` 就像在游戏中点击“**保存**”：你创建了一个可以随时返回的检查点。
>     
> - The `-m` flag stands for **message**, which is essential for explaining _why_ the change was made. `-m` 参数代表 **message（信息）**，这对于解释**为什么**进行更改至关重要。
>     
> 
> ---
> 
> 现在，你的代码已经安全地存在于本地仓库了。但正如讲义 **Page 32** 所提到的，在敏捷开发的小组协作中，你的队友还看不到这些更改。
> 
> 如果我们要把这个保存在你本地电脑上的“首页功能”发送给远端服务器（比如 GitHub），让队友也能下载到，根据讲义内容，我们该使用哪一个核心命令呢？ 🚀
> 
> 1. `git pull`
>     
> 2. `git push`
>     
> 3. `git branch`

使用的是 git push

> [!question] Question
> 完全正确！使用 `git push` 就像是将你已经装好箱并封好的“包裹”（Commits）通过快递发送到远程仓库（如 GitHub）。🚀
> 
> 在讲义的 **Page 32** 中，`git push` 是实现团队协作的关键动作。只有当你执行了这个命令，你的队友才能看到你的工作成果。
> 
> 为了加深理解，我们来总结一下远程协作的两个核心动作：
> 
> |**命令**|**动作**|**类比理解**|
> |---|---|---|
> |**`git push`**|上传同步|将你的本地修改推送到服务器，让别人可见。|
> |**`git pull`**|下载更新|将服务器上别人的修改拉取到你的电脑，保持同步。|
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Synchronization**: `git push` updates the remote repository with your local commits. **同步**：`git push` 用你的本地提交更新远程仓库。
>     
> - **Collaboration**: It allows team members to share progress and build on each other's work. **协作**：它允许团队成员共享进度并在彼此的工作基础上进行开发。
>     
> 
> ---
> 
> ### **🎯 习题挑战 (Exercises)**
> 
> 在讲义的最后，通常会涉及一些实际场景的思考。让我们尝试分析下面这个场景：
> 
> **场景描述：**
> 
> 你和队友都在 `main` 分支上工作。
> 
> 1. 你在本地做了修改并 `commit` 了。
>     
> 2. 此时，你的队友先你一步 `push` 了他的代码到 GitHub。
>     
> 3. 当你尝试执行 `git push` 时，Git 报错拒绝了你的操作。
>     
> 
> **问题：**
> 
> 根据 Git 的逻辑，你觉得此时你应该先执行哪个命令来解决这个问题，然后再尝试 `push`？
> 
> 4. `git init` (重新初始化)
>     
> 5. `git pull` (拉取队友的更新)
>     
> 6. `git add .` (再次添加文件)
>     
> 
> **讲解分析：**
> 
> 当远程仓库的进度比你本地更领先时（即队友已经提交了你没有的代码），Git 会保护代码不被覆盖。你需要先将远程的“新内容”整合到你的本地。
> 
> 你认为该选哪一个呢？

git pull (拉取队友的更新) 然后在队友的基础上进行更新？

> [!question] Question
> 完全正确！这就是在团队协作中避免冲突的“黄金法则”。 🥇
> 
> 根据讲义 **Page 32** 的远程操作逻辑，当远程仓库（GitHub）有了你本地没有的新提交时，你必须先执行 `git pull`。
> 
> ### 🔄 为什么必须先 Pull？
> 
> 1. **Syncing History 同步历史**：`git pull` 会把你队友刚才 `push` 的代码下载到你的电脑，并尝试与你的本地代码合并。
>     
> 2. **Conflict Resolution 解决冲突**：如果你们改了同一个文件的同一行，Git 会提醒你处理冲突。在本地解决好这些问题，才能确保代码库的整洁。
>     
> 3. **Linear Progress 线性进展**：只有当你本地的代码包含了远程所有的最新更新，Git 才会允许你执行 `push`。
>     
> 
> ---
> 
> ### 🏛️ Git 远程协作完整链路 (The Remote Workflow)
> 
> 我们可以把整个过程串联起来，看看一个敏捷开发中的典型操作循环：
> 
> |**Step 步骤**|**Command 命令**|**Purpose 目的**|
> |---|---|---|
> |1. 获取最新|`git pull`|Get the latest work from teammates. 从队友那里获取最新工作。|
> |2. 编写代码|(Coding)|Implement your feature or fix. 实现你的功能或修复。|
> |3. 准备提交|`git add .`|Stage your changes. 暂存你的更改。|
> |4. 记录快照|`git commit -m "..."`|Save locally with a message. 带着信息保存在本地。|
> |5. 推送成果|`git push`|Share your work with the team. 与团队分享你的工作。|
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Pull before Push**: Always ensure your local environment is up-to-date to prevent merge errors. **先拉后推**：始终确保你的本地环境是最新的，以防止合并错误。
>     
> - **Team Harmony**: This flow keeps everyone's version of the project synchronized. **团队和谐**：这个流程保持了项目中每个人的版本同步。
>     
> 
> ---
> 
> ### **🤔 进阶思考**
> 
> 想象一下，如果你和队友分工明确：你负责 `login.py`，他负责 `database.py`。你们一直在各自的文件里忙碌。
> 
> 在这种**完全没有交集**的情况下，当你准备 `push` 时发现他已经 `push` 过了，你觉得这时候的 `git pull` 会发生什么？
> 
> 1. **Merge Conflict (合并冲突)**：Git 依然会报错，因为它不知道该听谁的。
>     
> 2. **Auto Merge (自动合并)**：Git 会聪明地把两个文件组合在一起，因为它们互不干扰。
>     
> 3. **Overwrite (覆盖)**：你的代码会直接把他的代码顶掉。
>     
> 
> 你觉得 Git 够聪明吗？

Auto Merge (自动合并)：Git 会聪明地把两个文件组合在一起，因为它们互不干扰。

> [!question] Question
> 没错！当你们修改的是完全不同的文件时，Git 确实非常聪明。它能意识到这些更改在逻辑上没有冲突，因此会通过 **Auto Merge (自动合并)** 悄无声息地处理好一切。🤝
> 
> 这种“互不干扰”的情况是团队协作中最理想的状态。Git 会自动创建一个新的 **Merge Commit (合并提交)**，将两人的工作成果整合在一起。
> 
> 既然我们已经掌握了 Git 的基础操作和远程同步，让我们按照讲义的顺序，深入到 Page 29--Page 30 中最强大的功能——**Branching (分支)**。
> 
> ---
> 
> # **Branching and Merging – 分支与合并 Page 29--Page 30**
> 
> ## **Page 29: Managing branches 英文标题 – 管理分支**
> 
> - **Branching is the "Killer Feature"**: Git makes branching incredibly fast and easy. **分支是“杀手级功能”**：Git 让分支的创建变得极其快速和简单。
>     
> - **Isolation**: Each branch is an independent line of development. **隔离性**：每个分支都是一条独立的开发线。
>     
>     - `git checkout -b <branch_name>`: Create a new branch and switch to it immediately. 创建新分支并立即切换。
>         
>     - `git branch`: List all branches in your repository. 列出仓库中的所有分支。
>         
> - **Why use branches?**: You can experiment with new features without breaking the "Main" production code. **为什么要用分支？**：你可以在不破坏“主线”生产代码的情况下尝试新功能。
>     
> 
> ![Git branching strategy, AI generated](https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS2Sd-dBaFtpWD0mT4T0066cp4SCP6C63B3pWeVsLDyom7eYOoLCbBkpkXc5KQQOLgJs6az6AXJG30IfhdHFWvYJ9Kb8BFe_muPr1Hdu7GQfP4SLfk)
> 
> Shutterstock
> 
> Explore
> 
> ## **Page 30: Merging branches 英文标题 – 合并分支**
> 
> - **Integration**: Merging is the process of bringing changes from one branch back into another. **整合**：合并是将更改从一个分支带回另一个分支的过程。
>     
> - **The Command**: Typically, you switch back to the `main` branch and run `git merge <feature-branch>`. **命令**：通常，你切回 `main` 分支并运行 `git merge <feature-branch>`。
>     
> - **Conflict Resolution**: If two people edited the _same line_ of the _same file_, Git will stop and ask you to fix it manually. **冲突解决**：如果两个人在_同一个文件_的_同一行_进行了修改，Git 会停下来要求你手动修复。
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Parallel Work**: Branches allow multiple team members to work on different features at the same time. **并行工作**：分支允许团队成员同时开发不同的功能。
>     
> - **Safety**: If a feature fails, you can simply delete the branch without affecting the rest of the project. **安全性**：如果某个功能开发失败，你可以直接删除分支而不影响项目的其他部分。
>     
> 
> ---
> 
> **🎓 习题分析 (Exercise Analysis)**
> 
> 在 Page 30 的合并操作中，最让初学者头疼的就是 **Merge Conflict (合并冲突)**。
> 
> **场景：**
> 
> 你和队友都在修改 `README.md`。
> 
> - 你在自己的分支把第一行改成了 "This is My Project"。
>     
> - 队友在主线把第一行改成了 "This is Our Project"。
>     
> - 当你尝试合并时，Git 提示：`CONFLICT (content): Merge conflict in README.md`。
>     
> 
> **分析：**
> 
> 此时 Git 会在文件中留下类似 `<<<<<<< HEAD` 和 `>>>>>>> branch-name` 的标记。它不会替你做决定，因为这涉及“语义”问题。
> 
> **引导问题：**
> 
> 根据你对协作的理解，当你看到这种冲突标记时，你应该采取什么行动来完成合并？
> 
> 1. **Delete everything**: 删除这个文件，重新写一遍。
>     
> 2. **Manual Edit**: 打开文件，删掉 Git 的标记，保留正确的文字，然后重新 `add` 和 `commit`。
>     
> 3. **Ignore it**: 不管它，直接 `push` 到 GitHub。
>     
> 
> 你觉得哪种做法最符合“敏捷开发”中团队协作的精神？

选择2. Manual Edit: 打开文件，删掉 Git 的标记，保留正确的文字，然后重新 add 和 commit。

> [!question] Question
> 选择得非常准确！这就是处理 **Merge Conflict (合并冲突)** 的标准做法。🤝 在敏捷开发中，代码冲突不是“错误”，而是团队协作中正常的沟通点。
> 
> 处理冲突的过程就像是在做一道“选择题”，你需要决定是保留你的想法、队友的想法，还是将两者结合。
> 
> ---
> 
> ## **Page 30: Conflict Resolution 冲突解决流程**
> 
> 当 Git 发现冲突时，它会在文件中插入特殊的标记，你需要按以下步骤操作：
> 
> ### **1. 识别冲突标记 Identify Markers**
> 
> 打开文件后，你会看到类似这样的结构：
> 
> Markdown
> 
> ```
> <<<<<<< HEAD
> This is My Project  // 你在当前分支修改的内容
> =======
> This is Our Project // 队友在主分支修改的内容
> >>>>>>> main
> ```
> 
> ### **2. 手动编辑 Manual Edit**
> 
> - **Action**: Delete the `<<<<`, `====`, and `>>>>` lines. **动作**：删除这些 Git 生成的标记行。
>     
> - **Action**: Edit the text to the final desired version. **动作**：将文字修改为你最终想要的正确版本。
>     
> 
> ### **3. 完成合并 Finalize Merge**
> 
> - **Step 1**: `git add README.md` (Tell Git the conflict is resolved. 告诉 Git 冲突已解决。)
>     
> - **Step 2**: `git commit -m "Resolve merge conflict in README.md"` (Create the merge commit. 创建合并提交。)
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Human Intervention**: Git handles the "mechanical" merging, but humans handle the "semantic" conflicts. **人工干预**：Git 处理“机械”合并，但人类处理“语义”冲突。
>     
> - **Final Snapshot**: A merge commit represents the point where two different histories are successfully joined. **最终快照**：合并提交代表了两个不同历史记录成功汇合的点。
>     
> 
> ---
> 
> ### **🌟 最后的知识点：GitHub 扮演的角色**
> 
> 我们已经讲完了本地 Git 的核心操作（Page 22-31）。在讲义的最后一页 **Page 32** 提到了 **GitHub**。
> 
> 如果说 **Git** 是你电脑上的“笔记软件”，记录了你所有的修改，那么 **GitHub** 就好比是一个“云端共享文档”。
> 
> **引导问题：**
> 
> 根据你目前对 Git 的理解，你觉得在敏捷团队中，GitHub 最主要的作用是什么？
> 
> 1. **Backup**: 仅仅是作为一个防止代码丢失的备份盘。
>     
> 2. **Central Hub**: 作为团队的“协作中心”，让所有人都能同步最新的分支和代码。
>     
> 3. **Code Editor**: 作为一个在线写代码的工具，取代本地的编辑器。
>     
> 
> 你认为哪一个描述最符合它在软件工程中的地位？

> [!warning] Warning
> 请问为什么在git push之前，需要git add呢？也就是说把它放到暂存里？

> [!question] Question
> 这是一个非常棒的问题！ 💡 很多初学者都会疑惑：既然我已经改了代码，为什么不能直接“存盘”，而非要多出一个“暂存区”（Staging Area）的步骤呢？
> 
> 让我们通过一个直观的类比来理解。
> 
> ### 📦 暂存区：你的“发货前理货台”
> 
> 想象你正在搬家，要把房间里的东西运到新家（远程仓库 GitHub）。
> 
> 1. **工作目录 (Working Directory) 🏠**：你的房间。你正在这里翻箱倒柜，修改代码、删除旧文件。
>     
> 2. **暂存区 (Staging Area) 📥**：房间门口的一个**空纸箱**。
>     
> 3. **本地仓库 (Local Repository) 🏛️**：已经封好口、贴好标签，准备运走的**集装箱**。
>     
> 
> 如果你直接把房间里所有的东西一股脑倒进集装箱，最后你可能发现里面混进了还没洗的脏衣服或者垃圾。
> 
> ### 为什么 `git add`（放入暂存区）如此重要？
> 
> - **精确挑选 (Granularity) 🎯**：
>     
>     假设你今天写了两个功能：一个是“登录页面”，一个是还没写完的“购物车测试”。你只想提交“登录页面”。
>     
>     如果没有暂存区，你只能一次性提交所有修改。有了暂存区，你可以只 `git add login.html`，把完整的功能放进“纸箱”，而把没写完的代码留在“房间”里继续改。
>     
> - **组织提交 (Organization) 🗂️**：
>     
>     你可以把相关的修改分批放入暂存区。例如：先 `add` 文档修改，做一个 `commit`；再 `add` 逻辑代码，再做一个 `commit`。这样你的版本历史会非常清晰。
>     
> - **最后检查的机会 (Review) 🔍**：
>     
>     在执行 `git add` 后，你可以运行 `git status` 看看箱子里都有什么。这是你在正式“封箱”（Commit）之前的最后一次反思机会。
>     
> 
> ### 💡 总结一下流程：
> 
> 1. **修改文件**（在房间里折腾）。
>     
> 2. **`git add`**（把想要搬走的东西放进纸箱）。
>     
> 3. **`git commit`**（封好纸箱，放到家里的储藏室，这步之后才有了正式的历史记录）。
>     
> 4. **`git push`**（把储藏室里所有的纸箱装上大卡车，发往 GitHub 远程中心）。
>     
> 
> ---
> 
> **🚩 想一想：**
> 
> 如果你现在正在开发一个大型作业，不小心在 `index.html` 里写错了一行代码，但同时你又完美地修复了 `style.css` 里的一个样式。
> 
> 如果你跳过 `add` 步骤，直接把所有东西都一键提交并推送，会对你的项目历史产生什么影响？你觉得这种“一次性全交”的做法，在多人合作时会带来麻烦吗？

请帮助我回答想一想这个问题

> [!question] Question
> 在多人协作的敏捷开发中，跳过 `add`（暂存）步骤而选择“一键全交”（比如使用 `git commit -a` 或类似的自动化操作），确实会带来不少麻烦。
> 
> 让我们针对你提到的“修改了 `style.css` 样式但改乱了”以及“修复了 `index.html` 代码”这个场景，分析一下这种做法的影响：
> 
> ### 1. 历史记录变得“不纯净” (Polluted History) 🛠️
> 
> - **问题**：你的提交记录里会包含那段“改乱了”的代码。
>     
> - **后果**：当队友查看你的提交时，他们会看到一堆错误的样式代码。如果将来需要回滚（Rollback）代码，由于正确的功能和错误的修改被捆绑在一起，你无法只撤销错误的样式而保留正确的功能。
>     
> 
> ### 2. 增加代码冲突的风险 (Merge Conflicts) 💥
> 
> - **问题**：你把不必要的修改也推送到远程了。
>     
> - **后果**：如果队友正好也在优化 `style.css`，即使你只是无意中改乱了一行，Git 也会因为你提交了这行代码而产生冲突。这迫使团队花费额外的时间去处理原本可以避免的合并问题。
>     
> 
> ### 3. 违反“原子提交”原则 (Atomic Commits) ⚛️
> 
> - **原则**：在软件工程中，理想的提交应该是“原子的”，即一个提交只做一件事（比如只修复一个 Bug 或只增加一个功能）。
>     
> - **后果**：一次性交出所有东西会让每个提交变得巨大且杂乱。队友很难通过你的提交信息（Commit Message）快速理解你到底改了什么。
>     
> 
> ---
> 
> ### 💡 总结暂存区的作用
> 
> 在 Page 27 的流程中，**暂存区（Staging Area）** 就像是一个“过滤器”。它允许我们：
> 
> - **只选对的**：通过 `git add index.html` 只把准备好的代码放进去。
>     
> - **留下乱的**：把改乱的 `style.css` 留在工作目录，等之后用命令（如 `git checkout -- style.css`）把它重置回正确的状态，或者干脆重新修改。
>     
> 
> ---
> 
> ### 🚀 下一阶段：Git 标签 (Git Tags)
> 
> 我们已经讨论了如何通过“提交”来记录日常工作。但在敏捷开发中，当我们完成了一个重要的版本（比如 1.0 版本发布）时，仅仅靠一串乱码一样的提交 ID（SHA 哈希值）是很难记忆的。
> 
> 这就是 **Page 31** 提到的 **Git Tags（标签）** 发挥作用的地方。
> 
> **想一想：**
> 
> 如果你和团队完成了期末大作业的最终版。为了方便以后随时找回这个“最终确认版”，你觉得下面哪种标记方式更直观、更专业？
> 
> 1. **记在小本本上**：记住那个长达 40 位的哈希 ID（例如 `7b5a1f...`）。
>     
> 2. **打个标签**：给那个特定的提交起一个别名，叫做 `v1.0-Final`。
>     
> 
> 你觉得标签和我们之前学的“分支”相比，最大的区别可能是什么？（提示：标签通常是不可变的标识点）。



> [!PDF|yellow] [[1. Week 1 - Module 1 - Agile Development and Git.pdf#page=31&selection=31,0,31,9&color=yellow|1. Week 1 - Module 1 - Agile Development and Git, p.31]]
> > Git tags

我们下面讲讲pdf中的Git tags部分  并且标注出对应pdf中讲义的页面范围......必要时给出图示

![[p.31.png]]



> [!note] Note
> 这幅图（出自 PDF 第 31 页）是理解 **Git 分支（Branching）与标签（Tags）核心区别**的关键。为了让你彻底弄明白，我们结合讲义的要点来拆解这张图。
> 
> ### 📊 深度解析：Git 分支与标签的对比
> 
> 这张图展示了 Git 历史记录的“动态”与“静态”两种状态：
> 
> #### 1. 分支（Branch）—— 动态的指针 (The "Living" Pointer)
> 
> - **本质**：分支是一个**可移动的指针**。
>     
> - **图示要点**：
>     
>     - 你会看到分支（如 `main` 或 `feature`）指向某个特定的提交（Commit）。
>         
>     - 当你提交（Commit）新代码时，分支指针会**自动向前移动**，指向最新的提交。
>         
> - **场景**：就像你在写草稿，只要你继续写，你的“进度条”就会不断推进。
>     
> 
> #### 2. 标签（Tag）—— 静态的里程碑 (The "Static" Milestone)
> 
> - **本质**：标签是一个**固定的书签**。
>     
> - **图示要点**：
>     
>     - 无论你在该提交之后又提交了多少次新代码，标签（如 `v1.0`）都**永远固定**在该提交上，不会随时间推移而移动。
>         
> - **场景**：就像你在书的某一页盖了一个印章，无论书后续增加了多少章节，这个印章永远都在那儿。
>     
> 
> ---
> 
> ### 💡 核心知识点对照 (结合讲义 Page 31)
> 
> |**特性**|**分支 (Branch)**|**标签 (Tag)**|
> |---|---|---|
> |**可变性**|**动态移动** (随提交自动更新)|**不可变** (永久固定)|
> |**用途**|开发新功能、修复 Bug、并行工作|发布版本、标记里程碑 (如 v1.0, v2.0)|
> |**在图中的表现**|箭头会随代码推进而跳跃|箭头永远指向那个特定的圆圈 (Commit)|
> 
> ---
> 
> ### 🔍 为什么要这样设计？(类比理解)
> 
> - **如果你用“分支”来标记发布版本**：
>     
>     当你发布了 `v1.0`，然后继续在主分支写代码，你的 `v1.0` 指针也会跟着跑，导致你以后想找回 `v1.0` 的代码时，它已经不在那里了！这会造成灾难性的历史混乱。
>     
> - **如果你用“标签”来标记发布版本**：
>     
>     无论后续代码怎么改，`v1.0` 标签就像一颗“钉子”一样钉在那个版本的提交上。这就是为什么在讲义中，标签被称为 **"Fixed reference" (固定引用)**。
>     
> 
> ---
> 
> ### 🎓 引导思考：Git 协作实战
> 
> 既然你已经看懂了标签是“固定”的，且主要用于发布版本，请思考一下：
> 
> **如果你的团队刚刚发布了一个名为 `v1.0` 的版本，但客户突然报告说 `v1.0` 有一个严重的致命 Bug，你需要修改它。**
> 
> 根据我们学到的知识：
> 
> 1. 你能直接在 `v1.0` 这个标签上进行 `git commit` 修改代码吗？
>     
> 2. 如果不能，你应该怎么做才能既修复 Bug 又不破坏 `v1.0` 这个里程碑？
>     
> 
> _提示：回想一下 Page 29 关于“分支”的作用，你可以从那个标签点出发，新开一个分支来处理它。_
> 
> 你想尝试回答这个问题吗？这正是敏捷开发中处理“线上紧急修复（Hotfix）”的标准流程。


> [!question] Question
> 请问：这幅图里，紫色的是一个分支，而浅蓝色的是主分支，而tag标记在主分支里，而代码写在紫色，即一个分支里，绿色也表示的是紫色分支的一个分支，到最后会都会merge到浅蓝色主分支里？

![[p.31.png]]

> [!question] Question
> 是的，你对第 31 页这幅图的理解非常准确！你观察到的颜色分层和指向关系正是 Git 多人协作和版本管理的核心逻辑。
> 
> 为了让你更透彻地理解，我们先深入拆解这幅图，然后再按你的要求对 **GitHub** 部分（Page 39--Page 47）进行逐页讲解。
> 
> ### 🔍 第 31 页 Git 拓扑图深度解析 (Diagram Analysis)
> 
> 在这张图中，横向的线条代表时间的推进，圆圈代表 **Commits（提交）**：
> 
> - **浅蓝色线条（Main Branch）**：这是**主分支**。它代表了项目最稳定、最核心的代码流。所有的发布版本通常都建立在这条线上。
>     
> - **紫色线条（Feature Branch）**：这是一个**功能分支**。它从主分支分叉出来，意味着开发者在这里编写新功能，而不会影响主分支的稳定性。
>     
> - **绿色线条（Sub-branch）**：这代表了**分支的分支**。例如，你在开发某个大功能（紫色）时，可能需要另一个人并行开发其中的一个小模块（绿色），于是从紫色分支再次分叉。
>     
> - **合并箭头（Merge）**：你看到的紫色和绿色线条最终指向浅蓝色线条的箭头，正是 **Merge（合并）** 动作。这表示功能开发完成并通过测试后，最终都要汇聚回主分支。
>     
> - **黄色标记（Tags）**：标记在主分支上的黄色标签（如 `v1.0`）是**静态的里程碑**。它告诉我们：当主分支进行到这个圆圈（提交）时，我们发布了一个正式版本。
>     
> 
> ---
> 
> 接下来，我将按照你的大纲要求，对讲义中关于 **GitHub** 的部分（Page 39--Page 47）进行逐页的综合讲解。
> 


> [!PDF|yellow] [[1. Week 1 - Module 1 - Agile Development and Git.pdf#page=34&selection=36,0,36,15&color=yellow|1. Week 1 - Module 1 - Agile Development and Git, p.34]]
> > Merge conflicts

> [!PDF|yellow] [[1. Week 1 - Module 1 - Agile Development and Git.pdf#page=35&selection=39,0,39,25&color=yellow|1. Week 1 - Module 1 - Agile Development and Git, p.35]]
> > Avoiding merge conflicts

> [!PDF|yellow] [[1. Week 1 - Module 1 - Agile Development and Git.pdf#page=36&selection=35,0,35,13&color=yellow|1. Week 1 - Module 1 - Agile Development and Git, p.36]]
> > Git utilities





> [!note] Note
> 这一部分涵盖了 Git 协作中最具挑战性的冲突处理，以及如何利用工具和快捷清单来提高效率。我们将从第 30 页继续，深入探讨冲突的规避与解决。
> 
> # **Merge Conflicts & Utilities 合并冲突与 Git 工具 (Page 35--Page 37)**
> 
> ## **Page 35--Page 36: Handling and Avoiding Conflicts 处理与规避冲突**
> 
> ### **Page 35 Merge conflicts – 合并冲突**
> 
> - **Why it happens**: When two people edit the same line of the same file, Git cannot decide which version to keep. 发生原因：当两个人在同一个文件的同一行进行修改时，Git 无法决定保留哪个版本。
>     
> - **Resolution**: You must manually edit the file to remove the conflict markers (`<<<<`, `====`, `>>>>`) and choose the correct code. 解决方式：你必须手动编辑文件，移除冲突标记并选择正确的代码。
>     
> - **After fixing**: Remember to `git add` and `git commit` to finalize the merge. 修复后：记得执行 `git add` 和 `git commit` 来完成合并。
>     
> 
> ### **Page 36 Avoiding merge conflicts – 规避合并冲突**
> 
> - **Communicate**: Talk to your team to ensure you aren't working on the same files simultaneously. 沟通：与团队交流，确保你们不会同时处理同一个文件。
>     
> - **Commit often**: Small, frequent commits make conflicts easier to manage. 频繁提交：小而频繁的提交让冲突更容易管理。
>     
> - **Pull frequently**: Always `pull` the latest changes from your teammates before you start working. 经常拉取：在开始工作前，始终先从队友那里 `pull` 最新的更改。
>     
> 
> ---
> 
> ## **Page 37: Git Utilities and Cheat Sheet Git 工具与备忘单**
> 
> ### **Page 37 Git utilities & Cheat sheet – Git 工具与备忘单**
> 
> - **GUIs vs CLI**: While the command line (CLI) is powerful, tools like GitHub Desktop or VS Code's Git integration provide a visual way to manage changes. 图形界面与命令行：虽然命令行很强大，但像 GitHub Desktop 或 VS Code 的 Git 插件提供了更直观的方式来管理更改。
>     
> - **Cheat Sheet**: This page provides a quick reference for the most common commands: `status`, `add`, `commit`, `push`, `pull`, and `log`. 备忘单：本页提供了最常用命令的快速参考：状态查看、添加、提交、推送、拉取和日志查看。
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Collaboration requires care**: Conflicts are a natural part of teamwork, but they can be minimized through good habits like frequent pulling. **协作需要谨慎**：冲突是团队合作中自然的一部分，但可以通过频繁拉取等好习惯来减至最少。
>     
> - **Tools for efficiency**: Using a Git cheat sheet or a visual GUI can help you avoid mistakes during complex merges. **提高效率的工具**：使用 Git 备忘单或图形化工具可以帮助你在复杂的合并过程中避免出错。
>     
> 
> ---
> 
> ### **📖 引导提问**
> 
> 在 **Page 35** 提到的规避建议中，有一条是 **“Pull frequently（经常拉取）”**。
> 
> 想象一下：你早上 9 点开始写代码，一直埋头写到下午 5 点才第一次执行 `git pull`。此时你的队友已经在这一天里提交并推送了 10 次代码。
> 
> **想一想：**
> 
> 如果你在这一整天中每隔一小时就 `pull` 一次，和你等到下午 5 点才 `pull` 一次相比，哪种做法更有利于你**尽早发现**并解决潜在的冲突？
> 
> 1. 每小时拉取一次：因为这样可以把大冲突拆解成容易解决的小问题。
>     
> 2. 下午 5 点拉取一次：因为这样可以一次性处理完所有问题，省时间。
>     
> 
> 你觉得在敏捷开发的快节奏下，哪种方式更安全？








> [!question] Question
> 每小时拉取一次：因为这样可以把大冲突拆解成容易解决的小问题。

> [!note] Note
> 分析得非常到位！ 🌟 频繁拉取（`git pull`）确实是敏捷团队保持同步的最佳实践。
> 
> 正如你所说，如果等到下午 5 点才拉取，原本互不干扰的 10 次修改可能会堆积成一个巨大的“冲突乱麻”，让你难以理清逻辑。而每小时同步一次，就像是**“小步快跑”**，即使有冲突，也通常只涉及几行代码，处理起来非常轻松。
> 
> ---
> 
> # **Version Control: Git Utilities & Summary 版本控制：Git 工具与总结 (Page 32)**
> 
> ## **Page 32: Git Utilities & Best Practices Git 工具与最佳实践**
> 
> 这是讲义关于 Git 部分的最后一页，它为我们提供了一套高效协作的“组合拳”：
> 
> ### **1. Git Utilities – Git 工具**
> 
> - **Command Line Interface (CLI)**: The standard way to use Git. It’s powerful and works everywhere. **命令行界面 (CLI)**：使用 Git 的标准方式。功能强大且随处可用。
>     
> - **Graphical User Interface (GUI)**: Tools like **GitHub Desktop** or the built-in Git extension in **VS Code**. **图形用户界面 (GUI)**：如 GitHub Desktop 或 VS Code 内置的 Git 插件。
>     
> - **Analogy**: CLI is like driving a manual car (total control), while GUI is like an automatic car (easier for daily navigation). **类比**：命令行就像开手动挡车（完全掌控），而图形界面像自动挡车（日常操作更简便）。
>     
> 
> ### **2. Git Cheat Sheet – Git 常用命令备忘单**
> 
> 讲义在这里总结了我们之前讨论过的核心命令，确保你在实际操作时有据可查：
> 
> |**Command 命令**|**Purpose 目的**|
> |---|---|
> |`git status`|Check the state of your working directory. 检查工作目录的状态。|
> |`git add .`|Stage all current changes. 暂存所有当前更改。|
> |`git commit -m "..."`|Save staged changes with a message. 带着说明信息保存暂存的更改。|
> |`git push`|Upload local commits to remote. 将本地提交上传到远程。|
> |`git pull`|Update local repo with remote changes. 用远程更改更新本地仓库。|
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Communication over Tools**: Tools help, but talking to your teammates is the best way to avoid conflicts. **沟通优于工具**：工具很有用，但与队友沟通是规避冲突的最佳方式。
>     
> - **Incremental Progress**: Small, frequent updates are the heart of both Git and Agile. **增量式进展**：小步、频繁的更新是 Git 和敏捷开发的核心。
>     
> 
> ---
> 
> ### **🎓 知识整合：敏捷与 Git 的结合**
> 
> 我们已经学完了敏捷方法论（理论）和 Git（工具）。在实际的 **Agile Web Development**（敏捷 Web 开发）中，这两个部分是密不可分的。
> 
> **最后一个引导问题：**
> 
> 想象你们团队正在进行一次为期两周的 **Sprint（冲刺）**。
> 
> 如果你发现一个功能比预期要复杂得多，无法在一次提交（Commit）中完成，根据我们学到的“敏捷”和“Git 分支”知识，你觉得最专业的做法是什么？
> 
> 1. **坚持不提交**：等到两周后全部写完再执行一次巨大的 `add`、`commit` 和 `push`。
>     
> 2. **创建功能分支**：在专门的 `feature-xxx` 分支上每天进行小额提交，完成后再合并回主线。
>     
> 3. **直接改主线**：不管写没写完，每天都往 `main` 分支推代码，哪怕代码现在运行不起来。
>     
> 
> 结合 Page 29 的分支知识和敏捷的迭代精神，你会怎么选？

> [!question] Question
> 请问一下，git status一般怎么使用？或者说使用场景是怎样的？能否举出具体例子？

> [!note] Note
> `git status` 就像是你的“进度检查站” 检查站，它能让你随时掌握代码仓库的当前状态。我会通过具体的场景和引导问题来带你掌握它的用法。
> 
> ### 📋 `git status` 的核心作用
> 
> 在 Git 的工作流中，`git status` 主要告诉你三件事：
> 
> 1. **哪些文件被修改了**，但还没放进暂存区（Working Directory 🏠）。
>     
> 2. **哪些文件已经放进暂存区了**，等待被提交（Staging Area 📦）。
>     
> 3. **哪些文件是新创建的**，Git 还没开始追踪它们（Untracked files）。
>     
> 
> ---
> 
> ### 💡 具体使用场景示例
> 
> 想象你正在为一个网页项目工作，你的文件夹里有三个动作：
> 
> 4. 你修改了 `index.html` 的标题。
>     
> 5. 你新创建了一个 `about.html` 页面。
>     
> 6. 你已经把修改好的 `style.css` 运行了 `git add` 放入了暂存区。
>     
> 
> 这时候你输入 `git status`，你会看到类似这样的反馈：
> 
> - **Changes to be committed (待提交的更改)**:
>     
>     - `modified: style.css` (绿色，表示已在暂存区 ✅)
>         
> - **Changes not staged for commit (未暂存的更改)**:
>     
>     - `modified: index.html` (红色，表示改了但还没 add ❌)
>         
> - **Untracked files (未追踪的文件)**:
>     
>     - `about.html` (红色，表示 Git 还不认识这个新朋友 🆕)
>         
> 
> ---
> 
> ### 🌟 总结
> 
> - **Checking before adding**: 在 `add` 之前执行，确认自己到底改了哪些文件。
>     
> - **Checking before committing**: 在 `commit` 之前执行，确保“箱子”里装的文件都是正确的。
>     
> - **Troubleshooting**: 当你忘记自己干了什么，或者发现代码报错时，它是第一个要用的命令。
>     
> 
> ---
> 
> ### 🧠 引导练习
> 
> 假设你刚刚完成了一个复杂的 Bug 修复，正准备下班。你觉得自己已经把所有修改过的文件都 `git add` 进去了。
> 
> **如果你在执行 `git commit` 之前运行了一次 `git status`，结果发现有一个非常关键的配置文件显示在 “Changes not staged for commit”（红字区域），这意味着什么？**
> 
> 1. 这个文件已经安全地保存到仓库历史中了。
>     
> 2. 这个文件虽然改了，但还没被放进暂存区，如果你现在直接 commit，这个改动会被遗漏。
>     
> 3. 这个文件被你删除了。
>     
> 
> 你觉得是哪一种情况？


> [!question] Question
> 
> 是不是只能查看自己的 哪些文件被修改了，但还没放进暂存区（Working Directory 🏠）。哪些文件已经放进暂存区了，等待被提交（Staging Area 📦）。哪些文件是新创建的，Git 还没开始追踪它们（Untracked files）。无法查看别人的status？

> [!warning] Warning
> 你说得对，`git status` **只能**查看你当前电脑上（即本地工作区）的状态。它就像是你个人的“办公桌检查”，看不到队友桌子上放了什么。
> 
> 这是因为 Git 是**分布式**的，每个人的电脑都有一个独立的本地仓库。在你或队友执行 `push`（推送）或 `pull`（拉取）操作之前，你们各自的修改都是互相不可见的。
> 
> 如果你想了解“别人的状态”或团队的进展，我们通常会用到以下几种方式：
> 
> ### 1. 查看已经上传的进度：`git log` 📜
> 
> 如果队友已经执行了 `commit` 并且 `push` 到了远程仓库（如 GitHub），你可以通过查看提交历史来了解他们做了什么。
> 
> - 使用 `git log` 可以查看当前分支的历史。
>     
> - 使用 `git fetch` 同步远程信息后，再看 `origin/main` 之类的远程分支进度。
>     
> 
> ### 2. 查看远程仓库的 Web 界面 🌐
> 
> 在 GitHub 或 GitLab 的网页上，你可以直观地看到：
> 
> - 谁在什么时候提交了代码。
>     
> - 目前有哪些活跃的分支（Branches）。
>     
> - 正在进行的拉取请求（Pull Requests）。
>     
> 
> ### 3. 团队沟通 💬
> 
> 正如讲义 **Page 31** 提到的规避冲突的方法：“Talk to your team”。在敏捷开发中，早会（Daily Stand-up）就是用来同步“我昨天做了什么”、“我今天打算做什么”以及“我遇到了什么困难”的。
> 
> ---
> 
> ### 💡 总结
> 
> |**工具**|**作用**|**范围**|
> |---|---|---|
> |**`git status`**|查看我还没提交的改动|仅限本地 💻|
> |**`git log`**|查看大家已经提交的历史|本地 + 已同步的远程 📚|
> |**GitHub 网页**|查看整个项目的实时进展|全局云端 ☁️|
> 
> ---
> 
> ### 🧠 引导思考
> 
> 既然 `git status` 只能看自己的，那么想象一下：如果你和队友都在改同一个文件，但谁也没告诉谁。
> 
> **如果你想在开始写代码前，确认一下队友有没有在远程仓库里提交过关于这个文件的新版本，你应该先执行哪条命令来更新你本地看到的“他人进度”？**
> 
> 1. `git add`
>     
> 2. `git commit`
>     
> 3. `git fetch` (或者 `git pull`)
>     
> 
> 你觉得哪一个能帮你获取“别人的状态”？

> [!PDF|yellow] [[1. Week 1 - Module 1 - Agile Development and Git.pdf#page=37&selection=0,0,2,11&color=yellow|1. Week 1 - Module 1 - Agile Development and Git, p.37]]
> > Git cheat sheet

> [!note] Note
> 这幅截图出自讲义的 **Page 37。它是整份 Git 教程的精髓，将最常用的操作简化为了一份“备忘单”（Cheat Sheet）。
> 
> 为了让你彻底掌握这些命令，我将结合 Page 27-32 的核心逻辑，以**中英文对照**的方式，针对每一个命令进行深度讲解，并配以**实际开发场景**的示例。
> 
> ---
> 
> # **Git Cheat Sheet & Practical Examples Git 备忘单与实战示例 (Page 37)**
> 
> ## **Page 37: Git Cheat Sheet – Git 常用命令备忘单**
> 
> ### **1. `git status` – Checking the current state 检查当前状态**
> 
> - **Key Point**: Shows the state of the working directory and the staging area. 它显示工作目录和暂存区的状态。
>     
> - **Scenario 场景**: You’ve been coding for an hour and forgotten which files you modified. 你写了一小时代码，忘了自己改过哪些文件。
>     
> - **Example 示例**:
>     
>     Bash
>     
>     ```
>     git status
>     # Output: modified: index.html (Red means not staged yet)
>     # 输出：修改了 index.html（红色表示尚未放入暂存区）
>     ```
>     
> 
> ### **2. `git add <file>` – Staging changes 暂存更改**
> 
> - **Key Point**: Moves changes from the working directory to the staging area. 将更改从工作目录移至暂存区。
>     
> - **Scenario 场景**: You finished the "Login" feature in `login.py` and want to prepare it for saving. 你完成了 `login.py` 中的“登录”功能，想准备保存它。
>     
> - **Example 示例**:
>     
>     Bash
>     
>     ```
>     git add login.py
>     # Now the file is in the "shipping box" (Staging Area).
>     # 现在文件已经在“装运箱”（暂存区）里了。
>     ```
>     
> 
> ### **3. `git commit -m "message"` – Saving a snapshot 记录快照**
> 
> - **Key Point**: Permanently records the staged changes in the local repository history. 将暂存的更改永久记录在本地仓库的历史中。
>     
> - **Scenario 场景**: You want to label this version of code as "Feature: User Login complete". 你想将这个版本的代码标记为“功能：用户登录完成”。
>     
> - **Example 示例**:
>     
>     Bash
>     
>     ```
>     git commit -m "Add user login logic"
>     # A new "brick" is added to your project's timeline.
>     # 你的项目时间轴上增加了一块新的“砖块”。
>     ```
>     
> 
> ### **4. `git push` – Uploading to GitHub 上传至 GitHub**
> 
> - **Key Point**: Sends your local commits to the remote repository. 将你的本地提交发送到远程仓库。
>     
> - **Scenario 场景**: Your work is done, and you want your teammates to see it on GitHub. 你的工作完成了，想让队友在 GitHub 上看到它。
>     
> - **Example 示例**:
>     
>     Bash
>     
>     ```
>     git push origin main
>     # Your code is now live on the server!
>     # 你的代码现在已发布到服务器上！
>     ```
>     
> 
> ### **5. `git pull` – Downloading updates 下载更新**
> 
> - **Key Point**: Fetches changes from the remote and merges them into your local branch. 从远程获取更改并将其合并到你的本地分支。
>     
> - **Scenario 场景**: Your teammate fixed a bug while you were asleep; you need that fix now. 你的队友在你睡觉时修复了一个错误；你现在需要那个修复。
>     
> - **Example 示例**:
>     
>     Bash
>     
>     ```
>     git pull origin main
>     # Your local code is now synced with the team's latest version.
>     # 你的本地代码现在已与团队的最新版本同步。
>     ```
>     
> 
> ### **6. `git log` – Reviewing history 查看历史**
> 
> - **Key Point**: Displays a list of all commits made in the current branch. 显示当前分支中所有提交的列表。
>     
> - **Scenario 场景**: You need to find out who changed the database config and when. 你需要查出是谁在什么时候改了数据库配置。
>     
> - **Example 示例**:
>     
>     Bash
>     
>     ```
>     git log --oneline
>     # Output: a1b2c3d Add database config
>     # 输出：a1b2c3d 添加数据库配置
>     ```
>     
> 
> ---
> 
> ### **💡 综合示例：敏捷开发的一天 (A Day in Agile Development)**
> 
> 1. **Start of Day**: Run `git pull` to make sure you have the team's latest work. **开启一天**：运行 `git pull` 确保你有团队最新的工作成果。
>     
> 2. **Coding**: Modify `app.py`. **编码**：修改 `app.py`。
>     
> 3. **Check Progress**: Use `git status` to see `app.py` is red. **检查进度**：使用 `git status` 看到 `app.py` 是红色的。
>     
> 4. **Stage**: Run `git add app.py` to move it to the staging area. **暂存**：运行 `git add app.py` 将其移至暂存区。
>     
> 5. **Save**: Run `git commit -m "Fix calculation bug"` to create a checkpoint. **保存**：运行 `git commit -m "修复计算错误"` 创建检查点。
>     
> 6. **Share**: Run `git push` so your teammates can use the fix. **分享**：运行 `git push` 让队友可以使用这个修复。
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - **The Cycle**: The core workflow is `Pull` -> `Code` -> `Add` -> `Commit` -> `Push`. **循环**：核心工作流是 `拉取` -> `编码` -> `添加` -> `提交` -> `推送`。
>     
> - **Safety First**: `git status` and `git log` are your eyes; use them often to avoid mistakes. **安全第一**：`git status` 和 `git log` 是你的眼睛；经常使用它们以避免犯错。
>     
> 
> ---
> 
> **🎓 最后的互动 (Final Interaction)**
> 
> 在这份 Cheat Sheet（第 32 页）中，所有的命令都是围绕**本地（Local）**和**远程（Remote）**的同步展开的。
> 
> **如果你在执行 `git push` 时报错，提示 "rejected (non-fast-forward)"，根据这份备忘单，你觉得最应该尝试的“救命”命令是哪一个？**
> 
> 1. `git add .`
>     
> 2. `git pull`
>     
> 3. `git log`
>     
> 
> 提示：这通常意味着别人先你一步上传了代码，你需要先同步他们的工作。你觉得是哪个？


> [!warning] Warning
> 这是一个非常经典的问题，触及了 Git 协作的核心逻辑。简单来说：**即使没有代码冲突（Conflict），GitHub 依然会拒绝你的推送。**
> 
> Git 要求的不仅是“代码不冲突”，更要求你的本地历史必须**包含**远程服务器上的所有提交。
> 
> ---
> 
> # **Non-Fast-Forward Errors – 非快进式错误解析 (Page 32)**
> 
> ## **1. 为什么不冲突也会拒绝？ (The Logical Requirement)**
> 
> 根据讲义 **Page 32** 的逻辑，Git 是基于“提交链”工作的。
> 
> - **GitHub 的立场**：GitHub 上的最新点是 **Commit B**（张三的）。
>     
> - **你的状态**：你本地的起点是 **Commit A**，你直接跳到了 **Commit C**。
>     
> - **矛盾点**：对 GitHub 来说，它不知道该如何处理 **B** 和 **C**。如果它接受了你的 **C**，那么张三的 **B** 就会在历史中“消失”或变得孤立。
>     
> 
> **Git 的原则是：** 任何推送（Push）都必须是“快进式”的。这意味着你的本地仓库必须已经“见过”并“整合”了服务器上的所有内容，才能往后继续写。
> 
> ---
> 
> ## **2. 重新举一个“不冲突但被拒绝”的例子**
> 
> ### **情境设定：**
> 
> - **项目结构**：有一个 `index.html`（主页）和一个 `style.css`（样式表）。
>     
> - **初始状态**：你和张三本地都有版本 **A**。
>     
> 
> ### **过程步骤：**
> 
> 1. **张三的操作**：
>     
>     - 他在 `style.css` 里改了背景颜色。
>         
>     - 执行 `add`, `commit (B)`, `push`。
>         
>     - **此时 GitHub 的状态**：`A -> B`。
>         
> 2. **你的操作**：
>     
>     - 你完全没碰 `style.css`，你只在 `index.html` 里改了标题。
>         
>     - 执行 `add`, `commit (C)`。
>         
>     - **你本地的状态**：`A -> C`。
>         
> 3. **冲突检测**：
>     
>     - 由于张三改的是 CSS，你改的是 HTML，**代码上完全没有冲突**。
>         
> 4. **执行 `git push`**：
>     
>     - **结果**：**拒绝 (Rejected)！**
>         
>     - **报错信息**：`fetch first... updates were rejected because the remote contains work that you do not have locally.`（更新被拒绝，因为远程包含你本地没有的工作）。
>         
> 
> ---
> 
> ## **3. 解决办法：为什么 `git pull` 是救命稻草？**
> 
> 当你执行 `git pull` 时，Git 会帮你做以下事情：
> 
> 1. **把 B 拉下来**：你的本地现在知道了有 **A, B, C** 三个点。
>     
> 2. **自动合并 (Auto-merge)**：Git 发现 **B** 改了 CSS，**C** 改了 HTML。它会由于没有代码冲突，自动创建一个新的 **合并提交 (Merge Commit D)**。
>     
> 3. **结果**：你本地的历史变成了 `A -> B -> D` 和 `A -> C -> D` 的汇合点。
>     
> 
> 此时，你的本地历史已经**包含**了张三的 **B**。当你再次 `git push` 时，GitHub 看到：_“哦，你已经把张三的 B 整合进去了，现在你的 D 是最新的。”_ 于是接受推送。
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Not just about code**: Git tracks **history**, not just file changes. **不只是代码**：Git 跟踪的是**历史**，而不只是文件改动。
>     
> - **Inclusive History**: Your local repo must be a "superset" of the remote repo before you can push. **包含性历史**：在推送之前，你的本地仓库必须是远程仓库的“超集”。
>     
> - **The Command**: `git pull` is the tool that ensures your history is inclusive and up-to-date. **命令**：`git pull` 是确保你的历史具有包含性且是最新的工具。
>     
> 
> ---
> 
> **🎓 延伸思考**
> 
> 在敏捷开发中，如果一个团队有 10 个人都在 `main` 分支上频繁推送。
> 
> **想象一下：如果你坚持“攒大招”，一周才 `pull` 一次。当你最终准备 `push` 的时候，你可能需要面对多少个来自队友的 `commit`？**
> 
> 1. 可能只有 1-2 个，没啥大碍。
>     
> 2. 可能有几十个，而且你得一次性处理这几十个提交带来的所有潜在风险。
>     
> 
> 根据 **Page 19** 的“持续集成”精神，你觉得频繁 `pull` 能够如何降低你周五下午“心态崩溃”的概率？

> [!PDF|yellow] [[1. Week 1 - Module 1 - Agile Development and Git.pdf#page=39&selection=0,0,0,6&color=yellow|1. Week 1 - Module 1 - Agile Development and Git, p.39]]
> > GitHub

> [!note] Note
> 我们将深入探讨讲义中关于 **GitHub** 的核心功能，涵盖从协作管理到文档编写的所有关键知识点。这一部分将展示如何将 Git 的本地操作转化为高效的团队协作流。
> 
> 根据讲义内容，我们将重点讲解 **Page 39 到 Page 47**（对应 PDF 中 GitHub 相关的详细章节）。
> 
> ---
> 
> # **GitHub and Team Collaboration GitHub 与团队协作 Page 39--Page 47**
> 
> ## **Page 39--Page 40: GitHub Fundamentals GitHub 基础**
> 
> ### **Page 39 What is GitHub? – 什么是 GitHub？**
> 
> - GitHub is a service that hosts Git repositories (repos). GitHub 是一个托管 Git 仓库（repos）的服务。
>     
> - You can develop collaboratively and use GitHub as the "main" copy of the repo. 你可以进行协作开发，并将 GitHub 作为仓库的“主”副本。
>     
> - GitHub repos can be public or private; public ones are visible to anyone. GitHub 仓库可以是公开的或私有的；公开仓库对任何人可见。
>     
> - **Analogy:** If Git is your local notebook, GitHub is the shared library where everyone can see and contribute to the book. **类比：** 如果 Git 是你的本地笔记本，那么 GitHub 就是一个共享图书馆，每个人都可以在那里查看并为书籍做出贡献。
>     
> 
> ### **Page 40 Agile project management in GitHub – GitHub 中的敏捷项目管理**
> 
> - Everyone works by pushing and pulling from the GitHub repo to their local copy. 每个人通过从 GitHub 仓库推送（push）和拉取（pull）到其本地副本来进行工作。
>     
> - Use the **Issues** tab to track and discuss your feature list. 使用 **Issues（议题）** 选项卡来跟踪和讨论你的功能列表。
>     
> - Use the **Pull Requests** tab to review feature branches before merging. 使用 **Pull Requests（拉取请求）** 选项卡在合并之前审查功能分支。
>     
> - Use **GitHub Actions** to automatically run test suites or deploy releases. 使用 **GitHub Actions** 自动运行测试套件或部署发布版本。
>     
> 
> ---
> 
> ## **Page 41--Page 43: Issues and Task Management 议题与任务管理**
> 
> ### **Page 41 Issues - New Features – 议题：新功能**
> 
> - Before developing a new feature, you should create an Issue to plan and document it. 在开发新功能之前，你应该创建一个 Issue 来规划和记录它。
>     
> - The first post should contain the feature's purpose and a proposed implementation. 第一条帖子应包含功能的目的和建议的实现方案。
>     
> - **Example:** Preventing students from signing up for multiple projects can be tracked as an "enhancement" issue. **示例：** 防止学生注册多个项目可以作为一个“增强（enhancement）”议题进行跟踪。
>     
> 
> ### **Page 42 Issues - Bug Reports – 议题：错误报告**
> 
> - When you find a bug, create an Issue containing a description of expected vs. actual behavior. 当你发现错误时，创建一个包含预期行为与实际行为描述的 Issue。
>     
> - Include steps to recreate the bug so others can verify it. 包含重现该错误的步骤，以便他人验证。
>     
> - **Key Detail:** Mention hypotheses or known causes for the bug to speed up the fix. **关键细节：** 提及错误的假设或已知原因，以加速修复过程。
>     
> 
> ### **Page 43 Issues Generally – 议题通用准则**
> 
> - Issues should contain enough detail that anyone from the team could fix the problem. 议题应包含足够的细节，以便团队中的任何人都能解决问题。
>     
> - This is vital if a team member falls ill or leaves the course unexpectedly. 如果团队成员生病或意外退课，这一点至关重要。
>     
> - Issues serve as forums to discuss alternative designs or fix strategies. 议题充当讨论替代设计或修复策略的论坛。
>     
> 
> ---
> 
> ## **Page 44--Page 45: Pull Requests and Code Quality 拉取请求与代码质量**
> 
> ### **Page 44 Pull Requests – 拉取请求**
> 
> - Instead of merging locally, push the feature branch to GitHub and open a Pull Request. 与其在本地合并，不如将功能分支推送到 GitHub 并开启一个拉取请求。
>     
> - This allows others to provide a code review and suggest improvements. 这允许他人进行代码审查并提出改进建议。
>     
> - **Workflow:** Push Branch → Open PR → Team Review → Approval → Merge. **工作流：** 推送分支 → 开启 PR → 团队审查 → 批准 → 合并。
>     
> 
> ### **Page 45 Pull Request Interaction – 拉取请求交互**
> 
> - GitHub shows all changes, and team members can add line-by-line comments. GitHub 显示所有更改，团队成员可以添加逐行评论。
>     
> - You can respond to comments and update the PR by pushing new commits to the same branch. 你可以通过向同一分支推送新提交来回应评论并更新 PR。
>     
> - Once everyone is satisfied, hit the "Merge" button to combine the code into `main`. 一旦大家都满意，点击“Merge”按钮将代码合并到 `main` 分支。
>     
> 
> ---
> 
> ## **Page 46--Page 47: Documentation with Markdown 使用 Markdown 编写文档**
> 
> ### **Page 46 README.md files – README.md 文件**
> 
> - GitHub repositories use a `README.md` file (lightweight subset of HTML) for project instructions. GitHub 仓库使用 `README.md` 文件（HTML 的轻量级子集）作为项目说明。
>     
> - This file is automatically rendered on the repository's landing page. 此文件会自动渲染在仓库的主页上。
>     
> - Markdown allows styling text (bold, italic), adding images, and creating lists. Markdown 允许设置文本样式（加粗、斜体）、添加图像和创建列表。
>     
> 
> ### **Page 47 Markdown Syntax – Markdown 语法**
> 
> - Use `#` for headers, `**` for bold, and `*` for italics. 使用 `#` 表示标题，`**` 表示加粗，`*` 表示斜体。
>     
> - Links use `[Text](URL)`, and images use `![Alt Text](URL)`. 链接使用 `[文本](URL)`，图像使用 `![描述](URL)`。
>     
> - Backslash escapes (`\`) allow using literal characters like `*` without triggering formatting. 反斜杠转义（`\`）允许使用星号等字面字符而不触发格式设置。
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - GitHub is the central "Source of Truth" for collaborative Agile projects. GitHub 是协作式敏捷项目的核心“事实来源”。
>     
> - Issues and Projects help teams track and prioritize tasks during iterations. 议题和项目管理功能帮助团队在迭代期间跟踪任务并确定优先级。
>     
> - Pull Requests act as a gatekeeper, ensuring code is reviewed before it enters the main branch. 拉取请求充当“守门员”，确保代码在进入主分支之前经过审查。
>     
> - Markdown provides a simple way to create professional project documentation. Markdown 提供了一种创建专业项目文档的简单方式。
>     
> 
> ---
> 
> 

> [!question] Question
> **🎓 最后的挑战 (Final Challenge)**
> 
> 我们已经走完了从敏捷理论到 Git 操作，再到 GitHub 协作的全过程。
> 
> **想一想：在 Page 44 中提到，Issue 必须写得足够详细，以便“任何人都能接手”。如果你是组长，发现有个组员提交了一个 Issue 只有一句话：“登录页面崩了”，你会怎么要求他改进？**
> 
> 1. 让他增加**重现步骤**：在什么环境下、点击了哪个按钮崩溃的？
>     
> 2. 让他增加**截图或错误代码**：崩溃时的提示信息是什么？
>     
> 3. 让他写出**预期结果**：正常的登录页面应该是怎样的？
>     
> 
> 你觉得在敏捷团队中，良好的沟通习惯（如写好 Issue）对于节省开发时间有多大的帮助？
> 


> [!warning] Warning
> 你的直觉非常准确！**“无法定位问题”**确实是技术层面最直接的阻碍。如果开发者无法在自己的电脑上看到错误发生，他们就无法调试（Debug），也就无法修复。
> 
> 结合 PDF 讲义第 43 页和第 44 页的要点，我们来深入分析为什么这种情况在敏捷开发中是“致命”的：
> 
> # **GitHub Issues Analysis: Bug Reporting GitHub 议题分析：错误报告 (Page 43--Page 44)**
> 
> ## **Page 43: Bug Report Requirements 错误报告要求**
> 
> - **Expected vs. Actual Behavior**: Without a comparison, the developer doesn't know what "correct" looks like. 如果没有对比，开发者不知道“正确”的状态是什么样的。
>     
> - **Steps to Reproduce**: This is the most critical part. It turns a "mystery" into a "task". **重现步骤**：这是最关键的部分。它将一个“谜团”转变成了一项“任务”。
>     
> 
> ## **Page 44: Knowledge Redundancy 知识冗余**
> 
> - **Individual Independence**: Issues must contain detail so _anybody_ can fix them. **个体独立性**：议题必须包含细节，以便_任何人_都能修复。
>     
> - **Risk Management**: If you are the only one who knows how to trigger the bug and you fall ill, the project stalls. **风险管理**：如果你是唯一知道如何触发错误的人且你生病了，项目就会停滞。
>     
> 
> ---
> 
> ### **为什么“无法定位问题”最影响进度？**
> 
> 在敏捷开发的快速迭代中，时间是极其宝贵的资源。
> 
> 1. **定位 vs 修复的时间比**：在软件工程中，通常 **90% 的时间花在找 Bug（定位）上，而只有 10% 的时间花在写代码修复上**。如果你不提供重现步骤，你实际上是把这 90% 的负担全丢给了队友。
>     
> 2. **“在我电脑上是好的” (It works on my machine)**：这是开发者之间最常听到的争论。没有重现步骤，队友运行后发现网页能打开，就会认为 Issue 无效，导致 Bug 被带入下一个迭代。
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Communication is Coding**: Writing a detailed Issue is as important as writing the code itself. **沟通即编码**：编写详细的议题与编写代码本身同样重要。
>     
> - **Efficiency Loss**: While all three points you mentioned (Difficulty locating, lower efficiency, failed fixes) are true, **Difficulty locating** is the "root cause" that triggers the other two. **效率损失**：虽然你提到的三点（定位难、效率低、修复失败）都是事实，但**无法定位问题**是触发其他两项的“根本原因”。
>     
> 
> ---
> 
> ### **🎓 进阶探讨**
> 
> 既然你认为“无法定位问题”是最大的障碍，那么在实际操作中，为了让队友能“一秒定位”，除了文字描述外，你觉得在 GitHub Issue 中**加入什么附件**最能直观地帮助他？
> 
> 1. **录制一段操作视频或截屏**：展示具体点击了哪里导致崩溃。
>     
> 2. **复制浏览器的控制台日志 (Console Logs)**：展示报错的红字代码。
>     
> 3. **提供你的操作系统和浏览器版本**：比如“在 Chrome 120 版本下报错”。
>     
> 
> 你觉得在你的小组项目中，哪一种辅助手段能最快结束“复现不了”的尴尬局面？

> [!warning] Warning
> 录制一段操作视频或截屏：展示具体点击了哪里导致崩溃。
> 
> 这是一个非常出色的选择！在敏捷开发的实际协作中，**“视觉证据”**（录制视频或截屏）往往比文字描述更有说服力且更高效。
> 
> 结合讲义 **Page 43** 关于 Issue 记录的要求，我们来深入分析为什么这一手段能最快结束“复现不了”的尴尬局面：
> 
> ---
> 
> # **Bug Reporting: Visual Evidence 错误报告：视觉证据 (Page 43--Page 44)**
> 
> ## **Page 43: Documentation of Actual Behavior 记录实际行为**
> 
> - **Seeing is Believing**: A screenshot confirms that the bug _actually_ exists. 一张截图证实了错误_确实_存在。
>     
> - **Context Clues**: A screen recording often captures background details that the reporter might have missed in text, such as a loading spinner that stayed too long or a specific browser extension that interfered. **上下文线索**：屏幕录制通常能捕捉到报告者在文字中可能忽略的背景细节，比如停留时间过长的加载动画，或某个产生干扰的浏览器插件。
>     
> 
> ## **Page 44: Minimizing Back-and-forth Communication 减少反复沟通**
> 
> - **Instant Understanding**: Your teammate can see exactly which button was clicked and in what sequence. 你的队友可以准确看到点击了哪个按钮以及操作顺序。
>     
> - **Reducing "Ping-Pong"**: Without a video, the teammate might reply "I can't reproduce this," leading to a long chain of comments. Video cuts through this noise. **减少“乒乓球式”沟通**：没有视频，队友可能会回复“我复现不了”，导致漫长的评论链。视频能直接消除这些杂音。
>     
> 
> ---
> 
> ### **💡 为什么视频/截屏在敏捷团队中被视为“必杀技”？**
> 
> 在 **Page 41** 提到的敏捷工作流中，团队需要快速推进。
> 
> 1. **消除误解 (Eliminate Ambiguity)**：文字上的“登录页面”在复杂的系统中可能指“主站登录”、“管理后台登录”或“第三方授权登录”。视频能消除这种称呼歧义。
>     
> 2. **捕捉瞬时错误 (Catch Transient Errors)**：有些 Bug 是一闪而过的（比如报错弹窗只出现 0.5 秒）。录屏可以逐帧回放，让开发者看清报错内容。
>     
> 3. **支持第 44 页的“任何人都能修复”**：即使是非技术人员（如 UI 设计师或产品负责人）提交的 Bug，只要带了视频，技术人员就能立刻明白问题所在。
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Evidence Matters**: In Agile, a screenshot is worth a thousand words of description. **证据至关重要**：在敏捷开发中，一张截图胜过千言万语的描述。
>     
> - **Efficiency Boost**: It directly solves the "Difficulty Locating" problem we discussed earlier. **效率提升**：它直接解决了我们之前讨论的“定位难”问题。
>     
> 
> ---
> 
> ### **🎓 总结性的回顾**
> 
> 我们已经完整学习了：
> 
> - **Agile** (理论：如何快速迭代)
>     
> - **Git** (工具：如何管理版本、分支与标签)
>     
> - **GitHub** (平台：如何通过 Issue 和 PR 进行团队协作)
>     
> 
> **最后一个问题，作为本课程 L1 的结语：**
> 
> 如果你现在是一个小组的 Scrum Master（敏捷教练），为了让大家在两周后的项目展示中不出现“代码最后合不到一起”的惨剧，根据 **Page 31** 和 **Page 45** 的内容，你会强制要求组员遵守哪条纪律？
> 
> 1. **禁止开分支**：所有人都在 `main` 分支上写，这样就不用合并了。
>     
> 2. **强制 PR 审查**：任何代码进 `main` 之前，必须先开 Pull Request 并由至少一名队友审查。
>     
> 3. **最后一天再合并**：大家各写各的，最后一天熬夜把所有代码凑在一起。
>     
> 
> 你会选择哪条“保命”准则？



> [!warning] Warning
> 强制 PR 审查：任何代码进 main 之前，必须先开 Pull Request 并由至少一名队友审查。

> [!note] Note
> 这是一个非常明智且专业的选择！在软件工程实践中，**“强制 PR 审查” (Mandatory Pull Request Review)** 被认为是保障项目成功的“生命线”。
> 
> 根据讲义 **Page 45** 和 **Page 46** 的内容，我们来深度解析为什么这条规则是敏捷开发中的最佳保命准则。
> 
> ---
> 
> # **Pull Requests and Code Quality 拉取请求与代码质量 (Page 45--Page 46)**
> 
> ## **Page 45: The Superior Workflow – 优化的工作流**
> 
> - **Gatekeeping**: Instead of merging locally, the PR acts as a "buffer zone" where code is staged but not yet integrated. 拉取请求（PR）充当了一个“缓冲区”，代码在这里暂存但尚未集成。
>     
> - **Verification**: It ensures the `main` branch always remains in a stable, working state. 它确保 `main` 分支始终保持在稳定、可运行的状态。
>     
> - **Analogy**: PR is like a "Quality Inspector" on a factory line—it catches defects before the product reaches the customer. **类比**：PR 就像工厂流水线上的“质量检测员”——在产品到达客户手中之前拦截缺陷。
>     
> 
> ## **Page 46: The Review Process – 审查流程**
> 
> - **Knowledge Sharing**: Reviewing a teammate's code helps you understand how other parts of the system work. 审查队友的代码有助于你理解系统其他部分的运作方式。
>     
> - **Collective Ownership**: When a teammate approves your PR, the code becomes a "team responsibility" rather than just yours. 当队友批准你的 PR 时，代码就变成了“团队的责任”，而不仅仅是你个人的。
>     
> - **Feedback Loop**: Line-by-line comments allow for precise suggestions and learning. 逐行评论允许进行精确的建议和学习。
>     
> 
> ---
> 
> ### **为什么其他选项不可行？**
> 
> - **选项 1 (禁止开分支)**：会导致“代码踩踏”。如果两个人在 `main` 上改了同一个文件，很容易出现一个人把另一个人的代码覆盖掉的情况，且无法运行的代码会拖累整个团队。
>     
> - **选项 3 (最后一天合并)**：这被称为“合并地狱” (Merge Hell)。敏捷开发强调持续集成，如果把所有冲突留到最后一天，往往会发现底层架构完全不兼容，导致项目崩盘。
>     
> 
> ---
> 
> ### **Summary 总结**
> 
> - **Stability First**: Using PRs keeps the `main` branch clean and deployable at any time. **稳定第一**：使用 PR 保持 `main` 分支整洁且随时可部署。
>     
> - **Early Detection**: Bugs are much cheaper to fix during a PR review than after they are merged. **早期发现**：在 PR 审查阶段修复 Bug 的成本远低于合并之后。
>     
> - **Team Growth**: Code reviews are the fastest way for junior developers to learn from senior peers. **团队成长**：代码审查是初级开发者向资深同事学习的最快途径。
>     
> 
> ---
> 
> ### **🎉 恭喜！**
> 
> 你已经成功完成了 **Agile Development, Git and GitHub** 这一单元的所有核心内容。
> 
> 通过这次学习，你掌握了：
> 
> 1. **敏捷思维**：理解如何通过迭代（Iterations）和反馈来应对复杂性。
>     
> 2. **Git 技能**：学会了利用 Commit、Branch、Tag 来精细化管理代码时间轴。
>     
> 3. **GitHub 协作**：理解了如何通过 Issue 记录任务，通过 PR 保障质量。
>     
> 
> **祝你在接下来的 Web 开发实践和小组项目中，能像专业的软件工程师一样，利用这些工具高效协作，顺利交付！** 🚀

