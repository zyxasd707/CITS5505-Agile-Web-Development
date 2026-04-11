# **Git 完整学习总结（完善版）**

### 基于 cits5505-project 实际案例

------

## 一、Git 基本概念

### 四个核心区域

```
工作区 → 暂存区 → 本地仓库 → 远程仓库
         git add   git commit   git push
```

| 区域     | 说明               | 对应命令              |
| -------- | ------------------ | --------------------- |
| 工作区   | 实际编辑文件的地方 | 直接修改文件          |
| 暂存区   | 准备提交的文件列表 | `git add`             |
| 本地仓库 | 保存提交历史的地方 | `git commit`          |
| 远程仓库 | GitHub 上的仓库    | `git push / git pull` |

------

### 什么是 Commit？

每次 `git commit` 就是创建一个**存档点/快照**，记录：

- 📄 修改了哪些文件
- 👤 谁做的修改
- 🕐 什么时间
- 💬 提交信息（commit message）

**本次案例的 commit 历史（从旧到新）：**

```
Initial commit        ← Gaganish Yadav 初始化项目
test                  ← Nicholas Tiew
123                   ← Nicholas Tiew
Added new c file...   ← Gaganish Yadav
Merge pull request #2 ← origin/main 停在这里（未pull前）
Add test2.txt         ← 你的提交（test2-branch 领先一个）
```

------

## 二、分支（Branch）

### 什么是分支？

```
main 分支         = 正式稿（稳定版本，不直接修改）
test2-branch 分支 = 草稿本（开发新功能用）
```

### `git checkout` 详解

`checkout` 不只是"查看"，它有两种核心用法：

| 命令                           | 作用                |
| ------------------------------ | ------------------- |
| `git checkout main`            | 切换到 main 分支    |
| `git checkout -b test2-branch` | 创建 + 切换到新分支 |

`git checkout -b test2-branch` 等同于：

```powershell
git branch test2-branch    # 第一步：创建分支
git checkout test2-branch  # 第二步：切换分支
```

> `-b` 就是 `branch` 的缩写

### 新版替代命令（更直观）

| 旧命令                         | 新命令                       |
| ------------------------------ | ---------------------------- |
| `git checkout test2-branch`    | `git switch test2-branch`    |
| `git checkout -b test2-branch` | `git switch -c test2-branch` |

------

## 三、远程仓库与 `origin`

### 为什么命令里要加 `origin`？

因为 Git 允许连接**多个**远程仓库，`origin` 是用来指定去哪个远程仓库：

```
本地仓库
   ├── origin   → https://github.com/gaganishyadav/cits5505-project （主仓库）
   ├── upstream → https://github.com/其他人/cits5505-project         （别人的仓库）
   └── backup   → https://gitlab.com/zyxasd707/cits5505-project     （备份仓库）
```

### `origin` 是怎么来的？

`git clone` 时 Git **自动**把远程仓库地址命名为 `origin`：

```powershell
git clone https://github.com/gaganishyadav/cits5505-project.git
#  Git 自动把这个地址起名叫 origin
```

验证命令：

```powershell
git remote -v
# origin  https://github.com/gaganishyadav/cits5505-project.git (fetch)
# origin  https://github.com/gaganishyadav/cits5505-project.git (push)
```

> 💡 `origin` 就像手机通讯录里的联系人名字，代替了一长串 URL 地址

------

## 四、Git 的三个世界 ⭐️（最重要）

### Git 信息架构

```
第 1️⃣ 个世界：你的本地代码
   A ← B ← C  (你正在编辑和提交的)

第 2️⃣ 个世界：本地缓存的远程信息 (origin/main)
   A ← B      (上次 git fetch 时的快照)
              ↑ 可能是旧的！

第 3️⃣ 个世界：真实的 GitHub 服务器
   A ← B ← D  (队友刚推送的最新代码)
              ↑ 实时的，但你还不知道
```

### 为什么 `git status` 不实时？

```bash
git status 比较的是：
  你的本地代码  vs  本地缓存的远程 (origin/main)
  
不是和真实的 GitHub 服务器比较！

所以可能显示错误的信息
```

### ⚠️ 完整例子：信息滞后

```bash
上午 10:00：
远程服务器：A ← B ← C
你的本地：   A ← B ← C
你的缓存：   A ← B ← C
都同步 ✅

中午（你不知道的）：
队友推送代码到远程服务器：
远程服务器：A ← B ← C ← D ← E (最新！)

下午 2:00：你检查状态
git status

输出：Your branch is up to date ✅
      (错的！这是谎言！)

为什么错？
因为你的缓存 origin/main 还是：A ← B ← C
(因为你没有 git fetch)

正确做法：
git fetch origin main   ← 更新本地缓存
现在你的缓存变成：A ← B ← C ← D ← E

git status
输出：Your branch is behind 'origin/main' by 2 commits
      (现在正确了！)
```

------

## 五、三个同步状态与解决方案

### 状态 1️⃣：完全同步 ✅ (up to date)

```bash
git fetch origin main
git status
# Your branch is up to date with 'origin/main'

本地：   A ← B ← C
缓存：   A ← B ← C
远程：   A ← B ← C
         (都一样)

✅ 直接开始工作！
```

------

### 状态 2️⃣：你领先 🚀 (ahead)

```bash
git fetch origin main
git status
# Your branch is ahead of 'origin/main' by 1 commit

本地：   A ← B ← C ← D (你的新提交)
缓存：   A ← B ← C ← D
远程：   A ← B ← C

❌ 问题：别人看不到你的代码！

✅ 解决：
git push origin main

推送后：
本地：   A ← B ← C ← D
缓存：   A ← B ← C ← D
远程：   A ← B ← C ← D
         (现在同步了)
```

------

### 状态 3️⃣：你落后 ⬇️ (behind)

```bash
git fetch origin main
git status
# Your branch is behind 'origin/main' by 1 commit

本地：   A ← B ← C
缓存：   A ← B ← C ← D (刚才 fetch 更新的)
远程：   A ← B ← C ← D

⚠️ 问题：你缺少队友的新代码！

✅ 解决：
git pull origin main  (或 git merge origin/main)

合并后：
本地：   A ← B ← C ← D (现在有队友的代码了)
缓存：   A ← B ← C ← D
远程：   A ← B ← C ← D
         (完全同步)
```

------

### 状态 4️⃣：分叉 ⚠️ (both ahead and behind)

```bash
git fetch origin main
git status
# Your branch is ahead 1, behind 1

本地：   A ← B ← C ← D (你的新提交)
缓存：   A ← B ← C ← E (队友的新提交)
远程：   A ← B ← C ← E

分支分叉了！

✅ 解决：
git pull origin main

Git 自动合并：
本地：   A ← B ← C ← D (你的)
         ↘     ↗
         A ← B ← C ← E (队友的)
             ↓
          merge commit (自动生成，包含双方代码)

现在同步 ✅
```

------

## 六、冲突处理 🔥

### 冲突发生的场景

当你和队友**同时修改了同一个文件的同一行**时，会产生冲突：

```bash
你的版本：print("Hello World!")
队友的版本：print("你好 世界!")

git pull 后：
<<<<<<< HEAD
print("Hello World!")        ← 你的本地版本
=======
print("你好 世界!")           ← 队友的远程版本
>>>>>>> origin/main
```

### ✨ 重点：你的代码不会丢失！

冲突只是 Git 在问："这里有两个版本，你选一个"

```bash
你可以：
✓ 保留你的版本
✓ 保留队友的版本
✓ 融合两个版本
✓ 创建全新的融合版本

都是你自己选择！
```

### 三种解决方案

**方案 1️⃣：保留你的版本**

```bash
git checkout --ours hello.js
git add hello.js
git commit -m "Resolve conflict: keep my version"
git push origin main
```

**方案 2️⃣：保留队友的版本**

```bash
git checkout --theirs hello.js
git add hello.js
git commit -m "Resolve conflict: accept team's version"
git push origin main
```

**方案 3️⃣：融合两个版本**

```bash
# 手动编辑文件，删除冲突标记，保留需要的代码
vim hello.js

# 编辑后可能是：
print("Hello 世界!")  # 两个都保留并融合
# 或
print("Hello World!")
print("你好 世界!")    # 两个都保留

git add hello.js
git commit -m "Resolve conflict: merge both versions"
git push origin main
```

### 冲突标记含义

```bash
<<<<<<< HEAD
...你的本地代码...        ← 在 merge 之前
=======
...队友的远程代码...      ← 在 merge 之后
>>>>>>> origin/main

三个标记都要删除！
```

------

## 七、`git pull` 与 `git push`

### 命令拆解

```
git pull   origin        main
  ↑          ↑             ↑
拉取命令  远程仓库名字   要拉取的分支
```

### push vs pull

```
git push origin main  →  本地 推送到 远程（上传）⬆️
git pull origin main  ←  远程 拉取到 本地（下载）⬇️
```

### `git pull` 其实是两步合并

```powershell
git fetch origin main   # 第一步：从远程下载最新代码
git merge origin/main   # 第二步：合并到本地当前分支
```

用快递来理解：

```
git fetch = 快递送到门口（下载但不合并）
git merge = 把快递拆开放进房间（合并到本地）
git pull  = 直接把快递拆开放进房间（一步完成）
```

### ⚠️ `git pull` 会直接改变你的文件！

```bash
git pull = 自动执行 fetch + merge

风险：
❌ 你一条命令，本地文件直接改了
❌ 可能来不及检查队友改了什么
❌ 自动 merge 产生的结果可能有 bug

更安全的做法：
✅ git fetch origin main      ← 只获取信息
✅ git diff main origin/main  ← 看清楚改了什么
✅ git log origin/main -3     ← 看提交历史
✅ git merge origin/main      ← 确认后再合并
```

------

## 八、为什么 `git pull` 前要先 `git checkout main`？

这是今天一个非常重要的细节！

### ⚠️ `git pull` 永远作用于**当前所在分支**

```
❌ 错误流程（你在 test2-branch 直接 pull）：
你在 test2-branch → git pull origin main → 代码合并到 test2-branch！

✅ 正确流程：
git checkout main    ← 先切换到 main
git pull origin main ← 再拉取，代码正确合并到 main
```

### 用办公室比喻

```
git pull = 把文件更新放到你"当前桌子"上

❌ 坐在 test2-branch 的桌子 → 文件放错桌子
✅ 先走到 main 的桌子       → 文件放到正确位置
```

### 如何确认自己在哪个分支？

```powershell
git branch

# 输出：
  main
* test2-branch    ← * 号表示你现在在这里
```

> 💡 **执行任何操作前，先用 `git branch` 确认自己在哪个分支！**

------

## 九、每天早上的正确检查流程 ✅

### 完整步骤（推荐）

```bash
早上来公司的第一件事：

1️⃣  git fetch origin main
    ↓ 更新本地对远程的认识
    
2️⃣  git status
    ↓ 查看同步情况
    
3️⃣  根据结果判断：
    
    如果显示 "up to date"
    → ✅ 直接开始工作
    
    如果显示 "behind 1"
    → ⬇️ git pull origin main
    
    如果显示 "ahead 1"
    → 🚀 git push origin main
    
    如果显示 "ahead 1, behind 1"
    → git pull origin main (自动合并或出现冲突)
    → 解决冲突（如果有）
    → git push origin main
    
4️⃣  开始工作！💻
```

### 快速判断表

| git status 显示     | 含义                     | 操作                           |
| ------------------- | ------------------------ | ------------------------------ |
| `up to date`        | 完全同步                 | ✅ 直接工作                     |
| `ahead 1`           | 你有新 commit 未推送     | 🚀 `git push`                   |
| `behind 1`          | 远程有新 commit 你未拉取 | ⬇️ `git pull`                   |
| `ahead 1, behind 1` | 分叉了（可能有冲突）     | `git pull`（可能需要解决冲突） |

------

## 十、本次案例完整流程

### 项目信息

- 仓库：`gaganishyadav/cits5505-project`
- 你的用户名：`zyxasd707`
- 你创建的分支：`test2-branch`

### 完整命令流程

```bash
#若是使得得一个文件夹成为Git文件夹
git init
```



```powershell
# 1️⃣ 克隆远程仓库到本地
git clone https://github.com/gaganishyadav/cits5505-project.git
cd cits5505-project

# 2️⃣ 确认当前分支
git branch

# 3️⃣ 创建并切换到新分支（不在 main 上直接开发）
git checkout -b test2-branch

# 4️⃣ 创建/修改文件
echo "This is test2" > test2.txt

# 5️⃣ 添加到暂存区
git add test2.txt

# 6️⃣ 提交到本地仓库
git commit -m "Add test2.txt"

# 7️⃣ 推送到远程仓库
git push origin test2-branch

# 8️⃣ GitHub 上创建 Pull Request → 组员 Review → Merge

# 9️⃣ 合并后同步本地（注意：先切换到 main 再 pull！）
git checkout main        ← 先切换到 main
git pull origin main     ← 再同步远程代码
```

------

## 十一、Pull Request 流程

```
本地开发（test2-branch）
        ↓  git push origin test2-branch
GitHub 上出现新分支
        ↓  创建 Pull Request
组员 Review / Approve
        ↓  Merge 到 main
        ↓  git checkout main → git pull origin main
本地与远程同步完成 ✅
```

### 本次 PR 记录

| PR   | 标题                                  | 作者            | 状态     |
| ---- | ------------------------------------- | --------------- | -------- |
| #1   | Added code file                       | gaganishyadav   | Closed   |
| #2   | Added new c file to print hello world | gaganishyadav   | Merged ✅ |
| #6   | Added Nicfile                         | Nickguin        | Merged ✅ |
| #7   | Add test2.txt                         | zyxasd707（你） | Merged ✅ |
| #8   | Revert "Add test2.txt"                | zyxasd707（你） | Closed   |

------

## 十二、常见问题回顾

### ❓ 为什么本地提交历史图和 GitHub 不一样？

```
原因：本地没有执行 git pull，本地信息是旧的
解决：git checkout main → git pull origin main
```

### ❓ 为什么分支会"领先" main 一个 commit？

```
原因：test2-branch 有新 commit 但还未合并到 main
解决：在 GitHub 创建 Pull Request 合并到 main
```

### ❓ git checkout 是查看还是切换？

```
git checkout           = 切换分支
git checkout -b        = 创建 + 切换分支（-b 即 branch）
新版替代：git switch / git switch -c
```

### ❓ 为什么 push/pull 要加 origin？

```
原因：本地可以连接多个远程仓库，需要指定是哪一个
origin = git clone 时自动创建的默认远程仓库别名
```

### ❓ 为什么 git pull 前要先 git checkout main？

```
原因：git pull 作用于当前所在分支
      如果在 test2-branch 执行，代码会合并到错误的分支
解决：先 git checkout main，确保在正确分支再 pull
```

### ❓ 为什么 git status 显示的不是实时的？

```
原因：git status 比较的是本地代码和本地缓存的远程信息
     本地缓存的远程信息是上次 git fetch 的快照，可能是旧的
     
三个世界的关系：
本地代码 vs origin/main(本地缓存) ← git status 比较这两个
          vs 真实GitHub服务器 ← 需要 git fetch 才能同步

解决：先 git fetch，再 git status，就是最新的
```

### ❓ 拉取远程代码后，我未推送的代码会不会白干了？

```
不会！Git 会自动合并：

分叉情况：
你的本地：A ← B ← C ← D (你的新提交)
远程：    A ← B ← C ← E (队友的新提交)

git pull 后：
自动合并生成 merge commit
你的本地：A ← B ← C ← D (你的代码)
          ↘     ↗
          A ← B ← C ← E (队友的代码)
              ↓
            merge commit (两个都包含)

你的代码 100% 保留，只需要你决定如何处理冲突
```

### ❓ git pull 直接改了我的文件，为什么这样设计？

```
原因 1：网络效率
git status 很快（本地操作，毫秒级）
git fetch 很慢（网络操作，5-10 秒）
如果 status 每次都 fetch，会很卡

原因 2：给你控制权
fetch 只是获取信息，merge 才是改代码
你可以先看清楚，再决定是否合并

原因 3：安全性
推荐流程：fetch → 查看改动 → merge（更安全）
快速流程：pull（自动完成，但风险更大）
```

### ❓Git 命令语法学习 — 完整总结（最终版）

#### 1. 核心洞察

你掌握的不只是"怎么用"，而是**为什么是这样设计**的本质：

**Git 命令的语法差异源于命令本身的功能定位，而非概念的变化。**

------

#### 2. 两套语法体系

##### 远程通信类（跨网络）

```bash
git <command> <remote> <branch>
# 告诉远程服务器做什么
```

- **命令**：fetch、pull、push

- **特点**：需要明确指定**两个独立参数**（远程名 + 分支名），因为涉及网络通信

- **例子**

  ```bash
  git push origin fix/local-docker-dev-setup      # 推送到远程git fetch origin main                           # 从远程拉取信息
  ```

##### 本地操作类（本机引用）

```bash
git <command> <reference>
# 操作本地已存在的引用
```

- **命令**：merge、checkout、rebase 等

- **特点**：操作的是本地已存在的**完整引用**，格式需要消除歧义

- **例子**

  ```bash
  git merge origin/fix/local-docker-dev-setup     # 合并本地的远程追踪分支git checkout main                               # 切换到本地 main 分支
  ```

------

#### 3. 关键理解：远程追踪分支

`origin/fix/local-docker-dev-setup` 是一个**单一的引用**

❌ 错误理解：是"origin"+"fix/local-docker-dev-setup"两个东西

✅ 正确理解：是一个完整的引用名，用 `/` 来区分层级

```
origin/fix/local-docker-dev-setup
└─ 本地存储的"远程追踪分支"
   （用来记录远程 origin 上的这个分支现在在哪里）
```

当你执行 `git merge origin/fix/local-docker-dev-setup` 时

```
当前分支（比如 main）  +  远程追踪分支（origin/fix/local-docker-dev-setup）
           ↓
         合并结果
```

**两者都是本地的**，但类型不同：

- **`main`** — 本地分支，会自动向前移动
- **`origin/fix/local-docker-dev-setup`** — 远程追踪分支，记录你上次 `fetch` 时远程的状态

------

#### 4. 完整对比

| 操作       | 命令                                          | 涉及       | 说明                             |
| ---------- | --------------------------------------------- | ---------- | -------------------------------- |
| 推送到远程 | `git push origin fix/local-docker-dev-setup`  | 远程服务器 | 告诉远程"推送这个分支给你"       |
| 从远程更新 | `git fetch origin main`                       | 远程服务器 | 从远程拉取最新信息到本地追踪分支 |
| 合并引用   | `git merge origin/fix/local-docker-dev-setup` | 本地引用   | 合并**本地记录**的远程分支状态   |
| 切换分支   | `git checkout main`                           | 本地分支   | 切换到本地分支                   |

------

#### 5. 引用体系

**引用是分支的上位概念**，不是反过来的：

```
┌─ 引用（广义：指向 commit 的指针）
│  ├─ 分支（会自动向前）
│  │  ├─ 本地分支：main、fix/local-docker-dev-setup
│  │  └─ 远程追踪分支：origin/main、origin/fix/local-docker-dev-setup
│  │
│  └─ 非分支类引用
│     ├─ 标签：v1.0、v2.0（固定）
│     └─ 特殊指针：HEAD、HEAD~1
```

**分支是引用的一种**。

**所有分支都是引用，但不是所有引用都是分支。**

| 概念             | 定义                           | 例子                                               |
| ---------------- | ------------------------------ | -------------------------------------------------- |
| **引用**         | 指向 commit 的指针（广义范畴） | `main`、`origin/main`、`v1.0`                      |
| **分支**         | 引用的一种，会自动向前移动     | `main`、`fix/local-docker-dev-setup`               |
| **远程追踪分支** | 本地记录的远程分支状态         | `origin/main`、`origin/fix/local-docker-dev-setup` |
| **特殊指针**     | 固定或相对位置的引用           | `HEAD`、`HEAD~1`                                   |

------

#### 6. 实战应用：PR 合并后的同步

当你的 PR 被合并后，同步流程是：

```bash
git fetch origin              # 从远程获取最新信息，更新本地的追踪分支
git merge origin/main        # 合并本地记录的 main 分支状态到当前分支
```

或简化为：

```bash
git pull origin main         # 等价于上面两条命令的组合
```

------

#### 7. 思考方法论

遇到 Git 命令时的思考步骤：

1. **这是什么类型的命令？**
   - 远程通信（push/pull/fetch）→ 用简写格式
   - 本地操作（merge/checkout/rebase）→ 用完整引用
2. **它需要什么参数？**
   - 由命令类型决定，不是由"是不是分支"决定
3. **参数应该怎么写？**
   - 远程通信：`<remote> <branch>`
   - 本地操作：`<reference>`（完整的本地引用路径）

**不要问"这是不是分支"，要问"这个命令想做什么"。**

#### 🔔 8. 一个案例

场景：同学推送了新修改

**之前：**

- 远程 `fix/local-docker-dev-setup` → commit `abc123f`
- 你本地的 `origin/fix/local-docker-dev-setup` → commit `abc123f`（同步）

**同学推送：** 创建新 commit `def456e`，执行 `git push origin fix/local-docker-dev-setup`

- 远程 `fix/local-docker-dev-setup` → commit `def456e`
- 你本地的 `origin/fix/local-docker-dev-setup` → 仍然 `abc123f`（不同步了）

**你执行 `git fetch origin`：**

- Git 自动从远程拉回 commit `def456e` 到你的本地对象库
- Git 自动更新你本地的 `origin/fix/local-docker-dev-setup` → commit `def456e`

**结果：** 你的本地对象库里有了 `def456e`，可以用 `git merge origin/fix/local-docker-dev-setup` 来合并它


> [!QUESTION]
> git merge origin/fix/local-docker-dev-setup
> 
> 这个是在本地合并 从远程仓库克隆到本地的main和fix/local-docker-dev-setup分支中的 中的内容
> 
> 远程不更新，远程更新要用 git push origin fix/local-docker-dev-setup
> 
> 才能使得远程和本地记录保持一致？

你的理解**基本正确**，但需要澄清一下上下文：

**核心原则：**

- `git merge origin/XXX` — **只影响本地**，不改动远程仓库
- 要更新远程，**必须用 `git push`**

**具体场景：**

假设你在 main 分支上执行：

```bash
git merge origin/fix/local-docker-dev-setup
```

此时：

- ✅ 本地 main 包含了 fix/local-docker-dev-setup 的内容
- ❌ 远程 main 还没变化

要同步回远程：

```bash
git push origin main
```

这样远程 main 才会更新。

---

**关于你说的 `git push origin fix/local-docker-dev-setup`：**

这个命令用在不同场景：

- 如果你在本地 **fix/local-docker-dev-setup** 分支上做了修改，要推送给远程的同名分支
- 如果你在 main 上合并了远程 fix/local-docker-dev-setup，要推送 main 则用 `git push origin main`

**简单记法：**

```
git push origin <你要推送的本地分支>
```

你当前如果是在 main 上合并，就 `git push origin main`；如果在 fix/local-docker-dev-setup 分支上自己做了改动，就 `git push origin fix/local-docker-dev-setup`。

现在你是在哪个分支，想推送什么内容？

---



## 十三、核心原则

> 1. ✅ **不直接在 main 上开发**，每个功能建一个新分支
> 2. ✅ **操作前先确认分支**，用 `git branch` 查看当前位置
> 3. ✅ **fetch 后再 push/pull**，用 `git fetch` 更新本地信息
> 4. ✅ **pull 前先切换到 main**，确保代码合并到正确分支
> 5. ✅ **通过 Pull Request 合并**，让组员 review 后再合并
> 6. ✅ **合并后记得 pull**，保持本地与远程同步
> 7. ✅ **commit 信息要清晰**，方便组员理解你做了什么
> 8. ✅ **遇到冲突不要慌**，你的代码都还在，自己决定取舍

------

## 十四、常用命令速查表

| 命令                           | 作用                               |
| ------------------------------ | ---------------------------------- |
| `git clone <url>`              | 克隆远程仓库到本地                 |
| `git branch`                   | 查看所有本地分支（* 号为当前分支） |
| `git checkout -b <branch>`     | 创建并切换到新分支                 |
| `git checkout <branch>`        | 切换分支                           |
| `git switch <branch>`          | 切换分支（新版命令）               |
| `git add .`                    | 添加所有修改到暂存区               |
| `git commit -m "msg"`          | 提交到本地仓库                     |
| `git push origin <branch>`     | 推送分支到远程                     |
| `git fetch origin main`        | 更新本地对远程的认识（不改代码）   |
| `git status`                   | 查看当前状态                       |
| `git pull origin main`         | 拉取远程最新代码到本地 main        |
| `git merge origin/main`        | 手动合并（pull = fetch + merge）   |
| `git log --oneline`            | 查看提交历史                       |
| `git log origin/main -3`       | 查看远程最新 3 个提交              |
| `git diff main origin/main`    | 查看本地和远程的差异               |
| `git remote -v`                | 查看远程仓库地址和别名             |
| `git checkout --ours <file>`   | 冲突时保留本地版本                 |
| `git checkout --theirs <file>` | 冲突时保留远程版本                 |

------

## 十五、实战速查：日常工作流

### 📅 典型工作日流程

```bash
# 早上 9:00 - 检查最新状态
git fetch origin main
git status

# 根据结果
git pull origin main  # 如果 behind
git push origin main  # 如果 ahead

    如果显示 "ahead 1, behind 1"
    → git pull origin main (自动合并或出现冲突)
    → 解决冲突（如果有）
    → git push origin main
4️⃣  开始工作！💻
# 10:00 - 开始功能开发
git checkout -b feature/new-function

# 全天 - 多次提交
git add .
git commit -m "Add new function part 1"
git add .
git commit -m "Add new function part 2"

# 下班前 5:00 - 推送代码
git push origin feature/new-function

# 在 GitHub 创建 Pull Request
# → 组员 Review
# → 组员 Merge to main

# 次日 - 同步本地（必做！）
git checkout main
git pull origin main

# 继续开发新功能
git checkout -b feature/next-function
```

------

## 十六、脑图总结

```
                    Git 工作流程
                        |
            ┌───────────┼───────────┐
            |           |           |
        创建分支    本地开发      推送上传
            |           |           |
    git checkout -b   git add     git push
      feature       git commit    origin
            |           |           |
            └───────────┼───────────┘
                        |
                  创建 Pull Request
                        |
            ┌───────────┼───────────┐
            |           |           |
        Code Review  讨论改进    Approve
            |           |           |
        组员检查      交流反馈      通过
            |           |           |
            └───────────┼───────────┘
                        |
                    Merge to main
                        |
            ┌───────────┼───────────┐
            |           |           |
        检查状态    同步本地代码   开始新功能
            |           |           |
        git fetch   git checkout   git checkout -b
        git status    git pull      feature
```

------

**🎉 恭喜！你已经掌握了团队协作中的 Git 核心知识！**