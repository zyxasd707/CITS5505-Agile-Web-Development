---
aliases:
  - "Week 4 Tutorial: Agile Web Project & JavaScript Techniques"
---
# Week 4 Tutorial: Agile Web Project & JavaScript Techniques

# 第四周教程：敏捷Web项目 与 JavaScript 技术讲解

> **课程**：Agile Web Development 2026 | **日期**：20 March 2026 | **时长**：约 1 小时 54 分钟 **涵盖页面**：Page 1–21（全部讲义截图）

---

## 📋 Overview of Topics 主要主题概览

|主题|页码|
|---|---|
|项目简介 & Git 分支工作流|Page 1–2|
|JavaScript 三种引入方式|Page 3–8|
|函数、alert、prompt|Page 8–13|
|DOM 操作：getElementById / getElementsByTagName|Page 9–11|
|类型问题与 parseInt 修复|Page 12–13|
|递归阶乘 & 无限循环 & 调试工具|Page 14–17|
|全局变量 & 按钮点击计数器|Page 17–18|
|Git 分支推送 & Pull Request|Page 19–20|
|GitHub Issues 任务管理|Page 21|

---

## Page 1–2: Project Setup & Git Branching Workflow 项目设置 & Git 分支工作流

### 背景说明

The tutorial begins in VS Code with the `AgileWebDev2026` project already open. The lecturer demonstrates Git branching before writing any JavaScript. 教程在 VS Code 中的 `AgileWebDev2026` 项目中开始，讲师在编写任何 JavaScript 之前先演示 Git 分支操作。

### Git 分支命令演示

From the terminal shown at the bottom of Page 1, the workflow is: 从 Page 1 底部的终端可以看到以下工作流：

```bash
git pull                  # 拉取远程最新版本 Pull latest from remote
# Already up to date.    # 已是最新版本

git branch               # 查看当前所在分支 Check current branch
# * main                 # 当前在 main 分支

git branch javaScript    # 创建新分支 Create a new branch named "javaScript"

git checkout javaScript  # 切换到新分支 Switch to the new branch
# Now on branch javaScript
```

**类比 Analogy：**

> 把 `main` 分支想象成"正式出版的书"，`javaScript` 分支就是你在草稿纸上做的修改——改好了再并入正式版，出问题也不影响原书。 Think of `main` as the "published book", and `javaScript` branch as your draft paper — merge it back only when it's ready.

**为什么要先建新分支？Why create a new branch first?** 讲师说：_"What's the first thing we do when we are going to work on some sort of feature? We should create a new branch."_（做任何新功能，第一步都是创建新分支。）

---

## Page 2–3: Individual Project Brief 个人项目简介

讲师在课程前段介绍了个人项目要求（针对 CITS5505 / CITS3403 学生）：

**项目内容 Project Requirements：**

- 需要制作 **4个页面** Make 4 pages
- 包含 **Tutorial Page**（教程页）、**Quiz Page**（测验页）、**CV Page**（简历页）、**AI Reflection Log Page**（AI 反思日志页）
- Quiz 题目不应硬编码在 HTML 中，应从外部文件读取（如 local JSON 文件）
- **禁止使用前端框架**（如 React/Vue），鼓励使用自定义 CSS
- 会有 **Live Demo 演示环节**，评委会现场提问代码问题

**关于 AI 工具的使用 On Using AI Tools：**

> _"You need to log what prompts you used, how you have used AI... it sometimes gives you stupid suggestions and it does make errors."_ 你需要记录你使用了哪些 prompt、AI 如何帮助你……它有时会给出糟糕的建议，也会犯错。

---

## Page 3–5: Three Ways to Include JavaScript in HTML JavaScript 的三种引入方式

这是本节课的**核心主题**之一。与 CSS 的三种方式类似，JavaScript 也有：

### 方式一：Inline（内联）Page 3

```html
<!-- 直接在 HTML 标签的事件属性中写 JS -->
<!-- Write JS directly in the HTML event attribute -->
<button onclick="alert('Hello World!')">
    Click Me</button>  <!-- 点击时弹出 Hello World! -->
```

**特点**：

- JS 代码作为**字符串**写在 `onclick` 属性里 JS code is written as a **string** in the `onclick` attribute
- 适合极简演示，不推荐用于实际项目

---

### 方式二：Internal Script（内部脚本）Page 5–8

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
    <link rel="stylesheet" href="style.css">  <!-- 链接外部CSS Link external CSS -->

    <script>
      <!-- 在 <head> 内的 <script> 标签中定义函数 -->
      <!-- Define function inside <script> tags in <head> -->
      function myFunction() {
        alert("Hello World!");  <!-- 弹出消息框 Pop up message box -->
      }
    </script>

  </head>
  <body style="background-color: lightpink;">
    <!-- ... -->
    <button onclick="myFunction()">    <!-- 按钮点击时调用函数 Call function on click -->
        Click Me</button>
  </body>
</html>
```

---

### 方式三：External Script（外部脚本）Page 5–7 ✅ 推荐

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="style.css"> <!-- 链接外部CSS -->
  <script src="script.js"></script>        <!-- 链接外部JS文件 Link external JS file -->
</head>
```

```javascript
// script.js（外部文件，不需要 <script> 标签）
// External file — NO <script> tags needed here

function myFunction() {           // 定义函数 Define function
  alert("Hello World!");          // 弹出提示框 Show alert dialog
}
```

**⚠️ 常见错误 Common Mistake（Page 5）：** 如图第5页所示，`<script>` 标签中同时存在 `src` 属性和内联代码会产生冲突：

```html
<!-- ❌ 错误写法 Wrong: cannot mix src and inline code -->
<script>
  <src = "script.js"></src>   <!-- 错误！不能这样写 Wrong! -->
</script>

<!-- ✅ 正确写法 Correct -->
<script src="script.js"></script>
```

---

### 三种方式对比总结 Comparison Summary

|方式|维护性|可复用性|推荐度|
|---|---|---|---|
|Inline（内联）|❌ 差|❌ 无|❌ 不推荐|
|Internal（内部）|⚠️ 一般|⚠️ 单页可用|⚠️ 仅演示|
|External（外部）|✅ 好|✅ 多页复用|✅ 强烈推荐|

**浏览器缓存优势 Browser Caching Advantage：**

> 讲师解释：_"The benefit of having a single external script is the browser can cache that CSS and it just has to load it once."_ 外部文件只需加载一次，之后浏览器从缓存读取，显著提升页面速度。

---

## Page 7–8: JavaScript 执行位置问题 Where to Place Your Script Tag

**重要问题 Key Question：** `<script>` 放在 `<head>` 还是 `<body>` 末尾？

### 放在 `<head>` 中（Page 8）

```html
<head>
  <script>
    alert("Hello World!");  <!-- 页面未加载完就执行！Page not rendered yet! -->
  </script>
</head>
```

**效果**：弹出框出现时，页面内容（图片、段落）**尚未渲染**，用户必须先点 OK 才能看到页面。 **Result**: The alert appears before the page body renders. User must click OK first.

### 放在 `<body>` 末尾（Page 7）✅ 推荐

```html
<body>
  <!-- ... 所有HTML内容 all content ... -->

  <script>
    alert("Hello World!");  <!-- 页面加载完后才执行 Executes after page is loaded -->
  </script>
</body>
```

**最佳实践 Best Practice（讲师总结）：**

1. 将可执行代码**封装在函数中** Wrap executable code in **functions**
2. 函数通过**事件触发**（如 `onclick`），而非直接执行 Trigger via **events**, not direct execution
3. 外部 JS 文件的 `<script src="...">` 链接放在 `<head>` 中 Put `<script src="...">` in `<head>`

---

## Page 8–9: Security Implications of External JavaScript CDN 外部JS的安全隐患

**讲师提问**：使用 CDN 引入外部 JavaScript 有什么安全风险？

**答案**：

> _"If you are relying on an external source, they can put any sort of code within that JavaScript file and they can have access to your front end web application."_ 如果你依赖外部来源，他们可以在 JS 文件中插入任意代码，完全访问你的前端。

**前端代码对用户可见 Frontend Code is Visible：**

```
Browser Inspector → Sources → script.js
```

用户在浏览器中按 F12 即可看到所有 JavaScript 代码，因此：

- **不要在前端存储密钥/密码** Never store secrets in frontend JS
- **客户端验证 ≠ 安全验证** Client-side validation ≠ secure validation（容易绕过 easily bypassed）

---

## Page 9–11: DOM Manipulation DOM 操作

### `getElementById` — 修改单个元素 Change One Element

```javascript
// script.js

function showAlert(msg) {          // 接收消息参数的函数 Function receiving a message param
  alert(msg);                      // 弹出消息框 Show alert
}

function myFunction() {            // 主函数 Main function
  let message = prompt("Enter your message:");  // 弹出输入框 Show prompt dialog
  showAlert(message);              // 调用 showAlert 并传入消息 Call showAlert with message
}

myFunction();                      // 立即调用（演示用）Call immediately (for demo)
```

```javascript
// 修改单个元素颜色 Change single element color
function changeColor() {
  document.getElementById("heding1")   // 通过 ID 获取元素 Get element by ID
    .style.color = "red";             // 修改其颜色为红色 Change its color to red
}
```

```html
<!-- index.html -->
<h1 id="heding1" style="background-color: blue;">HTML Basics</h1>
<button onclick="changeHeading()">Change all Heading</button>
```

---

### `getElementsByTagName` + 循环 — 修改所有元素 Page 9

```javascript
function changeHeading() {
  // 获取所有 h1 元素，返回类数组集合
  // Get all h1 elements, returns an array-like collection
  let headings = document.getElementsByTagName("h1");

  // 遍历所有 h1 元素
  // Loop through all h1 elements
  for (let i = 0; i < headings.length; i++) {

    // 将每个 h1 的文本内容改为 "Heading Changed!"
    // Change each h1's text content to "Heading Changed!"
    headings[i].innerText = "Heading Changed!";
  }
}
```

**进阶：用 `prompt` 获取用户输入 Page 11**

```javascript
function changeHeading() {
  let headings = document.getElementsByTagName("h1"); // 获取所有h1 Get all h1s

  for (let i = 0; i < headings.length; i++) {
    // 每次循环都弹出输入框，让用户输入每个标题的文字
    // Each iteration prompts user for new text of that heading
    let message = prompt("Enter the new heading text:");

    headings[i].innerText = message; // 更新该标题文字 Update heading text
  }
}
```

---

## Page 12–13: Type Coercion Bug & `parseInt` Fix 类型问题与 parseInt 修复

### sum 函数 — 发现 Bug

```javascript
function sum() {
  let num1 = prompt("Enter the first number:");   // 返回字符串! Returns STRING!
  let num2 = prompt("Enter the second number:");  // 返回字符串! Returns STRING!
  let result = num1 + num2;                        // "2" + "3" = "23" 字符串拼接！String concat!
  alert("The sum is: " + result);                  // 显示"23"而非5 Shows "23" not 5
}

sum();  // 立即调用 Call immediately
```

**❓ 思考题**：`2 + 3` 的结果是什么？ **答**：弹出的是 `"23"` 而不是 `5`！因为 `prompt()` 返回的是**字符串类型**，`+` 运算符对字符串执行**拼接**而非加法。

### 使用 console.log 调试 Page 13

```javascript
function sum() {
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");
  let result = num1 + num2;

  // 使用 console.log 在浏览器控制台查看类型
  // Use console.log to check types in browser console
  console.log("The sum is: " + result);   // 输出结果 Print result
  console.log(typeof num1);               // 输出 "string" Shows "string"
  // console.log(typeof num2);            // 同样是 "string" Also "string"
}
```

### 修复：使用 `parseInt` Page 13

```javascript
function sum() {
  // parseInt 将字符串转为整数 parseInt converts string to integer
  let num1 = parseInt(prompt("Enter the first number:"));
  let num2 = parseInt(prompt("Enter the second number:"));

  let result = num1 + num2;    // 现在是数字加法 Now numeric addition: 2+3=5
  console.log("The sum is: " + result);  // 输出 5 Outputs 5
}
```

**类比 Analogy：**

> `prompt()` 就像问你"几号"，答案总是用嘴说出来的（字符串），你需要翻译成数字才能计算。 `prompt()` is like asking "what number?", the answer is always spoken as words (string). You need to translate it into a number before calculating.

---

## Page 14–17: Recursive Factorial & Debugging 递归阶乘 & 调试

### 递归阶乘函数（无 base case 版本）Page 14

```javascript
// ❌ 错误版本：缺少 base case，导致无限递归
// ❌ Wrong version: missing base case, causes infinite recursion
function factorial(n) {
  return n * factorial(n - 1);  // 无限调用自身 Calls itself indefinitely
}

factorial(5);  // 调用 Call
```

**Page 16 — 结果**：浏览器控制台显示：

```
Uncaught RangeError: Maximum call stack size exceeded
```

Stack（调用栈）不断累积 → 溢出 → 报错，但**页面仍然加载**（浏览器自动忽略该错误并继续渲染）。

---

### 修复：添加 base case Page 17

```javascript
// ✅ 正确版本：有 base case
// ✅ Correct version: with base case
function factorial(n) {
  if (n === 0 || n === 1) {    // base case: 0! = 1! = 1
    return 1;
  }
  return n * factorial(n - 1); // 递归调用 Recursive call
}

console.log(factorial(5));     // 输出 120 Outputs 120
```

---

### 使用浏览器 Breakpoints 调试 Page 15

讲师演示在 Chrome DevTools 中：

**打开 DevTools → Sources → script.js → 点击行号添加断点**

```
F12 → Sources → script.js → 点击第5行左边的行号 → 蓝色标记出现
```

调试面板说明：

|面板|功能|
|---|---|
|**Scope - Local**|查看当前函数内的变量值 View local variable values|
|**Scope - Global**|查看全局变量 View global variables|
|**Call Stack**|查看函数调用链 View function call chain|
|**Watch**|添加自定义表达式监控 Add custom expression watches|
|**Step Over**|执行下一行 Execute next line|
|**Step Into**|进入函数内部 Step into function|
|**Event Listener Breakpoints**|监听特定 DOM 事件 Monitor specific DOM events|

---

## Page 17–18: Global Variable & Button Click Counter 全局变量 & 按钮点击计数器

```javascript
// 全局变量：在函数外部声明
// Global variable: declared outside any function
let buttonPresses = 0;

// 修正后的阶乘函数（有 base case）
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));   // 输出 120 Outputs 120

// 按钮点击计数函数
// Button click counter function
function buttonClicked() {
  buttonPresses++;             // 每次调用加1 Increment by 1 each call
  console.log("The button has been pressed " + buttonPresses + " times.");
  // 控制台打印点击次数 Print click count to console
}
```

```html
<!-- index.html -->
<button onclick="changeHeading()">Change all Heading</button>
<br>
<button onclick="buttonClicked()">Click Me</button>  <!-- 点击计数按钮 Click counter button -->
```

**关键概念 Key Concept — 全局 vs 局部作用域**：

> `buttonPresses` 在函数外声明，因此每次点击按钮调用函数时，它的值都**保留上次的结果**（不重置为0）。 Declared outside the function, so its value **persists** between button clicks (does not reset to 0).

---

## Page 19–20: Git Push & Pull Request Git 推送与 Pull Request

Page 19 的终端显示推送流程：

```bash
# 提交修改 Commit changes
git add .                                # 暂存所有修改 Stage all changes
git commit -m "javaScript"               # 提交并附上消息 Commit with message
# 3 files changed, 92 insertions(+), 73 deletions(-)
# create mode 100644 script.js

# 推送到远程 Push to remote
# ❌ 错误尝试 Wrong attempt:
git push origin JavaScript               # 大小写错误 Case mismatch!
# fatal: JavaScript cannot be resolved to branch

# ✅ 正确命令 Correct command:
git push -u origin javaScript            # -u 设置上游追踪 -u sets upstream tracking
# * [new branch]   javaScript -> javaScript
# branch 'javaScript' set up to track 'origin/javaScript'
```

**Page 20 — 推送成功后：**

```bash
git push                  # 之后只需 git push 即可 After setting -u, just git push
# Everything up-to-date
```

**下一步 Next Step：在 GitHub 上创建 Pull Request**

讲师说：

> _"Once you think that you are done with this feature, it's ready to be merged into main — then you create a pull request and assign it to someone for review."_ 当你认为功能完成、可以合并到 main 时，创建 pull request 并分配给他人审查。

---

## Page 21: GitHub Issues for Project Management GitHub Issues 项目管理

Page 21 显示在 GitHub 上创建 Issue：**"Create Sign up form #5"**

**Issue 内容：**

- Group Sign up form
- Get rid of `<p>`, `<h>` tags
- Tidy up the index.html page（附截图）
- 标签：**enhancement** | 分配给：**MairaAlvi**

**使用 Issues 的好处 Why Use GitHub Issues：**

|用途|说明|
|---|---|
|功能规划|记录待实现的功能 Plan features|
|Bug 报告|追踪和修复问题 Track and fix bugs|
|团队协作|分配任务、留下注释 Assign tasks and leave comments|
|项目证据|作为个人贡献的证明 Evidence of individual contribution|

**讲师强调（对组项目标记有影响）：**

> _"This is something which will be visible on the GitHub and we can see your individual participation through the logs."_ 这些在 GitHub 上都可见，我们通过日志记录看到你的个人参与度。

---

## 🔑 Key Concepts Summary 核心概念总结

|概念|要点|
|---|---|
|JS 三种引入方式|Inline / Internal / External，推荐 External|
|`alert()`|弹出提示框，阻塞页面渲染|
|`prompt()`|弹出输入框，返回类型为 **string**|
|`parseInt()`|将字符串转为整数，用于数值计算|
|`document.getElementById()`|通过 ID 获取单个 DOM 元素|
|`document.getElementsByTagName()`|获取同类标签的所有元素（返回集合）|
|`.innerText` / `.innerHTML`|修改元素文本/HTML内容|
|`console.log()`|调试利器，在控制台输出信息|
|无限递归|缺少 base case → Stack Overflow → 页面仍加载但控制台报错|
|全局 vs 局部变量|全局变量在函数调用间保留值|
|Git 工作流|branch → 修改 → add → commit → push → PR|
|GitHub Issues|规划功能、报告Bug、分配任务|

---

## 💡 Guided Learning Questions 引导学习问题

**Q1（Page 3）**：HTML 中 `<button onclick="alert('Hello')">` 属于哪种 JavaScript 引入方式？它有什么缺点？ What type of JS inclusion is `onclick="alert('Hello')"` in HTML? What are its disadvantages?

**Q2（Page 5–6）**：如果 `<script src="script.js">` 标签内还写了内联代码，会发生什么？ What happens if you write inline code inside a `<script src="...">` tag?

**Q3（Page 7–8）**：为什么把 `<script>` 放在 `<body>` 末尾比放在 `<head>` 中更有利于用户体验？ Why is placing `<script>` before `</body>` better for user experience than placing it in `<head>`?

**Q4（Page 12–13）**：`prompt("Enter a number")` 返回的数据类型是什么？如果直接用 `+` 相加会发生什么？如何修复？ What data type does `prompt()` return? What happens with `+` addition? How do you fix it?

**Q5（Page 14–16）**：在 `factorial(n)` 中去掉 base case 会导致什么错误？浏览器会直接崩溃吗？ What error occurs when removing the base case from `factorial(n)`? Does the browser crash?

**Q6（Page 15）**：在浏览器 DevTools 的 Sources 面板中，Breakpoint 和 Watch 的区别是什么？ In Chrome DevTools Sources panel, what is the difference between a **Breakpoint** and a **Watch**?

**Q7（Page 17）**：`let buttonPresses = 0;` 声明在函数外部，每次按钮点击后它的值会重置吗？为什么？ Declared outside a function, does `buttonPresses` reset to 0 on each click? Why or why not?

**Q8（Page 19–20）**：`git push origin javaScript` 和 `git push -u origin javaScript` 的区别是什么？`-u` 标志有什么作用？ What is the difference between `git push origin javaScript` and `git push -u origin javaScript`? What does `-u` do?

**Q9（Page 21）**：在团队项目中使用 GitHub Issues 的 `enhancement` 和 `bug` 标签各适用于什么情况？ When should you use the `enhancement` label vs the `bug` label in GitHub Issues for a team project?

**Q10（Page 44–46，讲师口头提到）**：从 CDN 引入外部 CSS 和引入外部 JavaScript 在安全性上有何不同？为什么 JavaScript 的风险更大？ What is the security difference between loading external CSS vs external JavaScript from a CDN? Why is JS riskier?




---

# Week 4 完整代码讲解 Full Code Walkthrough

## AgileWebDev2026 — JavaScript Tutorial

> 共生成 **5 个文件**，每个文件对应讲座的一个核心主题，可直接在浏览器中打开运行。

---

## 文件结构 File Structure

```
AgileWebDev2026/
├── index.html               ← 主页面，整合所有讲座内容（Page 1–21）
├── style.css                ← 外部CSS（Page 1–4 各种选择器）
├── script.js                ← 外部JS（Page 5–18 所有函数）
├── demo_three_js_methods.html ← 三种JS引入方式对比（Page 5–8）
└── demo_debugging.html      ← 调试演示：sum/factorial/console（Page 12–17）
```

---

## `style.css` — 外部CSS文件（Page 1–4）

文件中依次演示了讲座 Page 1 和 Page 4 出现的四种 CSS 选择器：

|选择器类型|代码示例|对应页码|
|---|---|---|
|元素选择器|`h1, p { color: rgb(72,0,255); }`|Page 1|
|伪类选择器|`p:hover { color: green; }`|Page 1|
|类选择器|`.cat { border-radius: 50%; }`|Page 4|
|ID 选择器|`#catId { border-radius: 50%; }`|Page 4|

---

## `script.js` — 外部JS文件（Page 5–18）

文件按讲座顺序包含 **7 个函数**，每一行都附有中英文注释：

|函数名|功能|对应页码|
|---|---|---|
|`showAlert(msg)`|接收参数并弹出 alert|Page 8|
|`myFunction()`|用 prompt 获取输入 → 调用 showAlert|Page 11|
|`sum()`|两数相加（含 parseInt 修复）|Page 12–13|
|`changeColor()`|`getElementById` 改单个元素颜色|Page 9|
|`changeHeading()`|`getElementsByTagName` + 循环改所有标题|Page 9–11|
|`factorial(n)`|递归阶乘（含 base case）|Page 14–17|
|`buttonClicked()`|全局变量计数器|Page 17–18|

---

## `demo_three_js_methods.html` — 三种JS引入方式（Page 5–8）

这个文件在**同一个页面**中完整对比三种方式，可以点击按钮直接体验效果，无需切换文件：

- **❌ 方式一 Inline**：`onclick="alert('...')"`，代码混在字符串里
- **⚠️ 方式二 Internal**：`<script>` 在 `<head>` 里，可用但无法缓存
- **✅ 方式三 External**：`<script src="script.js">`，推荐，浏览器可缓存

---

## `demo_debugging.html` — 调试演示（Page 12–17）

这个文件最适合配合 **F12 DevTools** 使用，包含四个可交互的演示：

**DEMO 1 — prompt() 类型陷阱（Page 12–13）**： 点击"❌ Buggy Sum"按钮输入 `2` 和 `3`，会得到 `"23"` 而不是 `5`；点击"✅ Fixed Sum"则正确输出 `5`，同时在 Console 中可以看到 `typeof` 的变化。

**DEMO 2 — 无限递归 vs 正确递归（Page 14–16）**： 点击"❌ No base case"会触发 `RangeError: Maximum call stack size exceeded`，但页面**仍然正常加载**（这正是讲师在 Page 16 演示的效果）。

**DEMO 3 — 全局变量计数器（Page 17–18）**： 每次点击"Click Me"，`buttonPresses` 全局变量都会+1并保留——这展示了全局变量与局部变量的核心区别。

**DEMO 4 — console 调试方法汇总（Page 13）**： 点击按钮后打开 F12 → Console，可以看到 `log`、`warn`、`error`、`info` 四种颜色的输出，以及 `typeof` 和 `console.time()` 的用法。

---

**使用建议**：建议先打开 `demo_three_js_methods.html` 理解三种引入方式，再打开 `demo_debugging.html`（配合 F12）体验调试过程，最后看 `index.html` + `script.js` 理解完整项目结构。