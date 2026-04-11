
# **CITS3403 Agile Web — Tutorial 3 讲座全程讲解**

### 13 March | Topics: GitHub Branch · HTML Recap · CSS (Inline / Document / External) · CSS Specificity · Bootstrap

---

## **Segment 1: Course Opening & Audio Issue Recap – 课程开场与上周录音说明**

Last week had audio issues; a replacement video was shared via OneDrive link, accessible under **Module 2 → "Tutorial 2 Recording"**. 上周录音有问题，补录视频已通过 OneDrive 链接分享，可在 Module 2 的 "Tutorial 2 Recording" 中找到。

---

## **Segment 2: HTML5 Forgiving Nature – HTML5 的容错性**

**核心演示：** 新建 `test.html`，只写纯文字 `hello`，无任何 HTML 标签，保存后用浏览器打开 → **仍然正常渲染**。

- Browsers are designed to be **forgiving** — they auto-inject missing tags. 浏览器具有**容错性**，会自动补全缺失标签。
    
- If you right-click → **View Page Source / Inspect**，你会看到浏览器自动插入了：
    

```html
<html>
  <head></head>     <!-- 浏览器自动补全 -->
  <body>
    hello           <!-- 你写的文字 -->
  </body>
</html>
```

- Even a missing closing tag (e.g., `<p>`) will be auto-completed by the browser. 即使忘记写关闭标签（如 `</p>`），浏览器也会自动补全。

> 💡 **类比**：就像 Word 会自动修正拼写错误，浏览器会自动修补不完整的 HTML。

---

## **Segment 3: GitHub Branching Workflow – GitHub 分支工作流**

讲师回顾了上周 repo 的 commit 历史图，并强调最佳实践：

**工作流原则：**

> Each new feature → create a new branch → commit/push → Pull Request → merge to `main` 每个新功能 → 创建新分支 → 提交推送 → PR → 合并回 main

**本次演示的命令：**

```bash
git branch                # 查看当前所有分支，* 标记当前分支
git branch styling        # 创建新分支 "styling"（用于本次 CSS 工作）
git checkout styling      # 切换到 styling 分支（底部状态栏也会更新）
```

**为什么要新建分支而不复用旧分支？**

- 不同 feature 应该有独立分支，避免冲突，保持 `main` 始终是干净、稳定的版本。 Each feature should have its own branch to avoid conflicts and keep `main` clean and stable.

---

## **Segment 4: HTML Structure High-Level Recap – HTML 结构高层回顾**

学生投票选择了 **high-level overview** 而非逐行讲解，讲师快速过了一遍代码结构：

```html
<!DOCTYPE html>               <!-- 声明文档类型，必须写在第一行 -->
<html>
  <head>
    <!-- 元信息：不显示在浏览器窗口，供搜索引擎等使用 -->
    <!-- Meta info: not visible in browser, used by search engines -->
  </head>
  <body>
    <!-- 表单 form、表格 table、标题 heading、图片 image 等都在这里 -->
    <form>
      <input type="text">       <!-- 文字输入框 -->
      <input type="date">       <!-- 日期选择器（弹出日历控件）-->
      <input type="email">      <!-- 邮箱输入框 -->
      <input type="submit">     <!-- 提交按钮 -->
    </form>

    <table>
      <tr><th>表头</th></tr>    <!-- 第一行为 header row，用 th -->
      <tr><td>数据</td></tr>    <!-- 后续行用 td -->
    </table>
  </body>
</html>
```

> `<head>` 放元信息；`<body>` 放显示内容 — HTML 标签语义化、直观易懂。

---

## **Segment 5: CSS — Three Ways to Style – CSS 三种样式方式**

### **方式 1 — Inline Style 行内样式（不推荐 ❌）**

```html
<h1 style="color: red;">Heading</h1>  <!-- 直接在标签内写 style 属性 -->
```

**问题：**

- Violates **separation of concerns** — HTML should only handle structure, not styling. 违反**关注点分离**原则，HTML 只应负责结构，不应混入样式。
- If you have hundreds of `<h1>` or `<p>` tags, you'd need to edit every single one individually. 若有上百个标签，每个都要单独修改，效率极低。

---

### **方式 2 — Document (Internal) Style Sheet 内部样式表**

在 `<head>` 内使用 `<style>` 标签：

```html
<head>
  <style>
    h1 { color: blue; }   /* 所有 h1 变蓝 */
    p  { color: red; }    /* 所有 p 变红 */
  </style>
</head>
```

**优点**：一处修改，影响整页所有同类标签。 **缺点**：若有多个 HTML 文件，需要在每个文件中重复复制这段 `<style>`。

---

### **方式 3 — External Style Sheet 外部样式表（推荐 ✅）**

新建 `style.css` 文件：

```css
h1 { color: blue; }    /* 所有 h1 变蓝 */
p  { color: red; }     /* 所有 p 变红 */
img { border: 3px solid green; }  /* 所有图片加绿色边框 */
```

在 HTML 的 `<head>` 中用 `<link>` 引入：

```html
<head>
  <link rel="stylesheet" href="style.css">
  <!-- rel 指明关系是样式表；href 指向文件路径 -->
</head>
```

**优点**：

- One CSS file shared across **multiple HTML pages** — change once, apply everywhere. 一个 CSS 文件可被**多个 HTML 页面**共享，改一处全站生效。
- Code is cleaner and easier to maintain. 代码更整洁，维护更方便。

---

## **Segment 6: CSS Specificity – CSS 优先级（特异性）**

当多个样式规则冲突时，按以下优先级决定哪个生效：

|优先级|选择器类型|写法示例|
|---|---|---|
|🔴 最高|`!important`|`color: blue !important;`|
|🟠 高|**ID 选择器**|`#catID { ... }` （用 `#`）|
|🟡 中|**Class 选择器**|`.cat { ... }` （用 `.`）|
|🟢 低|**Element 选择器**|`img { ... }`|
|⚪ 最低|**Universal 通用选择器**|`* { color: red; }` 选中页面所有元素|

**演示代码：**

```css
* { color: red; }                        /* 通用：选中所有元素 */
img { border: 3px solid green; }         /* 元素：所有 img */
.cat { border: 3px solid blue; }         /* 类：class="cat" 的元素 */
#catID { border: 3px solid yellow; }     /* ID：id="catID" 的元素（最具体）*/
```

**同级冲突 → 后者覆盖前者：**

> If two rules have the same specificity, the one appearing **later in the file** wins. 同级规则中，**文件中靠后**的那条生效。

**`!important` 覆盖一切：**

```css
h1 { color: blue !important; }  /* 无论其他规则如何，此处强制生效 */
```

**ID vs Class 的区别：**

- `ID`：页面中唯一，用 `#`，特异性最高
- `Class`：可多个元素共享，用 `.`，特异性次之

> 💡 **类比**：优先级就像法院的判决层级——最高法院（`!important`）> 高等法院（ID）> 地方法院（Class）> 普通规定（元素）。

---

## **Segment 7: CSS Pseudo-states & Multi-element Selectors – 伪类与多元素选择器**

**伪类（Pseudo-state）示例 — hover 效果：**

```css
p:hover {
  color: green;                 /* 鼠标悬停时段落变绿 */
  text-decoration: overline;   /* 悬停时文字上方加线 */
}
```

**同时选中多个元素：**

```css
h1, p { color: red; }   /* h1 和 p 同时变红，用逗号分隔 */
```

**其他样式示例：**

```css
li {
  font-size: larger;        /* 列表项字体变大 */
  text-decoration: line-through;  /* 加删除线效果 */
}
```

---

## **Segment 8: External CSS — Commit to Git – 提交外部 CSS 到 Git**

讲师在 `styling` 分支上完成了 document-level stylesheet 的工作后，进行了提交：

```bash
git add index.html    # 暂存修改的文件（文件显示 M = Modified）
git commit -m "not inline, document style sheet"  # 提交，说明这是内部样式表
```

> 养成习惯：每完成一个阶段性工作就 commit，保持清晰的提交历史。

---

## **Segment 9: Bootstrap Introduction – Bootstrap 框架入门**

### **为什么用 Bootstrap？**

手写 CSS 的问题：页面不响应式，元素贴着浏览器边缘，表格撑满全屏等。 Bootstrap 提供**预编译好的 CSS + JavaScript**，让网页快速变得美观且响应式。

> 💡 **类比**：Bootstrap 就像 Python 的 `sklearn` 库——你不用从头实现算法，只需调用正确的函数（类名）即可。

---

### **引入方式：CDN（Content Delivery Network 内容分发网络）**

访问 [getbootstrap.com](https://getbootstrap.com/) → Docs → Download → 复制 CDN 链接：

```html
<head>
  <!-- Bootstrap CSS — 放在 head 中 -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/css/bootstrap.min.css">
</head>
<body>
  <!-- 页面内容 ... -->

  <!-- Bootstrap JS Bundle — 放在 body 最底部 -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/js/bootstrap.bundle.min.js">
  </script>
</body>
```

> **为什么 JS 放在 body 底部？** 先让 HTML 内容加载完，再加载脚本，避免阻塞页面渲染（下周详解）。

---

### **Bootstrap 常用类演示**

**容器（响应式布局基础）：**

```html
<div class="container">
  <!-- 内容自动居中，不贴边，响应式缩放 -->
</div>
```

**标题显示类（Display headings）：**

```html
<h1 class="display-1">最大标题</h1>   <!-- display-1 到 display-6，逐渐变小 -->
<h1 class="display-6">最小标题</h1>
```

**按钮（Buttons）：**

```html
<!-- 不加 Bootstrap：丑陋的默认 HTML 按钮 -->
<button>Plain Button</button>

<!-- 加 Bootstrap：自动有悬停效果和美观样式 -->
<button class="btn btn-primary">Primary 主要</button>    <!-- 蓝色 -->
<button class="btn btn-secondary">Secondary 次要</button>
<button class="btn btn-success">Success 成功</button>    <!-- 绿色 -->
<button class="btn btn-danger">Danger 危险</button>      <!-- 红色 -->
<button class="btn btn-warning">Warning 警告</button>    <!-- 黄色 -->
<button class="btn btn-info">Info 信息</button>
```

**字体与背景：**

```html
<p class="fw-light bg-primary">
  轻字重 + 主题色背景
</p>
```

**表格（Table）：**

```html
<table class="table table-dark">  <!-- 深色主题表格 -->
  ...
</table>
```

**链接样式：**

```html
<a href="#" class="btn btn-primary">styled link 带样式的链接</a>
```

**整页深色主题（Dark Mode）：**

```html
<html data-bs-theme="dark">
  <!-- 整页切换为深色模式，Bootstrap 自动调整文字颜色 -->
</html>
```

> **关键点**：Bootstrap 会智能调整文字颜色以配合背景（纯 HTML 不会这样做）。

---

## **Segment 10: Next Week Preview – 下周预告**

讲师宣布下周内容：

- Tidy up code and build a formal **sign-up page** for group project. 整理代码，正式制作**注册页面**（用于 group project）。
- Add **client-side form validation** 添加客户端表单验证。
- Introduce **Web Developer Tools（浏览器开发者工具）** — important for **mid-semester exam**! 介绍浏览器开发者工具 — **期中考试**会考！
- Dynamic element inspection & modification using browser tools. 用浏览器工具动态查看和修改网页元素。
- Go through the **individual project brief** 介绍个人项目要求。

---

### ✅ Summary 总结

- **HTML5 is forgiving** — browsers auto-inject missing tags; always inspect source to understand what the browser renders. HTML5 具容错性，浏览器会自动补全缺失标签。
- **GitHub Best Practice**: one feature = one branch → PR → merge to `main`. Never work directly on `main`. GitHub 最佳实践：每个功能一个分支，PR 后再合并。
- **3 CSS methods**: Inline（行内，不推荐）→ Document/Internal（内部 `<style>`）→ External（外部 `.css` 文件，推荐）。
- **Specificity order（优先级）**: `!important` > ID(`#`) > Class(`.`) > Element > Universal(`*`). 同级规则后者覆盖前者。
- **Pseudo-states** like `:hover` allow dynamic visual effects without JavaScript. 伪类可实现无 JS 的动态视觉效果。
- **Bootstrap = CSS library**. Link via CDN; apply predefined classes to get responsive, styled components instantly. Bootstrap 是 CSS 框架，CDN 引入后直接用类名即可。
- **JS script tag goes at bottom of `<body>`** to avoid blocking HTML rendering. JS 放 body 底部，避免阻塞渲染。

---

## 🧭 Guided Learning — 引导学习问题

1. **(Segment 2)** 为什么浏览器在没有任何 HTML 标签的情况下仍然能显示内容？当你用 "Inspect" 查看时，你看到了哪些自动插入的标签？ Why can a browser render a plain text file saved as `.html` with no tags? What tags does it auto-inject?
    
2. **(Segment 3)** 在 Git 中，如果你直接在 `main` 分支上开发新功能（CSS 样式），会有什么潜在风险？为什么讲师要创建 `styling` 分支？ What risks arise from working directly on `main`? Why create a separate `styling` branch?
    
3. **(Segment 5)** 请解释 Inline Style 违反了哪个 Web 开发原则？如果一个网站有 50 个页面，External Style Sheet 相比 Document Style Sheet 的优势是什么？ What principle does inline style violate? Why is an external stylesheet better than internal when you have 50 HTML pages?
    
4. **(Segment 6)** 给定以下代码，`<img class="cat" id="catID">` 这张图片最终显示什么颜色的边框？请说明原因。 Given `img { border: green }`, `.cat { border: blue }`, `#catID { border: yellow }` — which border color wins, and why?
    
5. **(Segment 6)** `!important` 什么时候应该使用？为什么不建议滥用它？ When should you use `!important`? What problems can arise from overusing it?
    
6. **(Segment 9)** Bootstrap 的 CDN 链接为什么要将 CSS 放在 `<head>`，而将 JS Bundle 放在 `<body>` 的最底部？ Why does Bootstrap CSS go in `<head>` but the JS bundle goes at the very bottom of `<body>`?
    
7. **(Segment 9)** 如果没有为某个元素指定任何 Bootstrap 类，Bootstrap 的引入会对它产生影响吗？为什么？ If you link Bootstrap but don't add any classes to an element, will it be affected? Why or why not?

---
# 🧭 Guided Learning — 引导问题解答

---

## Q1 (Segment 2) — HTML5 Forgiving Nature HTML5 容错性

> 为什么浏览器在没有任何 HTML 标签的情况下仍然能显示内容？当你用 "Inspect" 查看时，你看到了哪些自动插入的标签？

**答：**

HTML5 was designed to be rendered in a **forgiving way**. HTML5 被设计为以**容错方式**渲染，这是浏览器的底层设计原则。

讲师在课上做了如下演示：

- 新建 `test.html`，只写纯文字 `hello`，无任何 HTML 标签
- 用浏览器打开 → **正常显示**

浏览器会自动识别缺失的结构并补全，右键 → Inspect 后你会看到：

```html
<html>        <!-- 浏览器自动注入 -->
  <head></head>   <!-- 自动补全 head -->
  <body>
    hello         <!-- 你写的文字 -->
  </body>
</html>
```

> 原文：_"Browsers are designed in a way that they can recognise missing bits and try to put those things in it."_ 浏览器被设计成能识别缺失的部分并尝试自动补全。

即使忘记写关闭标签（如 `</p>`），浏览器也会**自动插入**该关闭标签。

---

## Q2 (Segment 3) — GitHub Branching 分支策略

> 如果直接在 `main` 上开发新功能，会有什么风险？为什么讲师要创建 `styling` 分支？

**答：**

讲师在课上提问学生：_"Should I keep using this branch or create a new one?"_ 然后讲解了 Git 最佳实践：

|做法|风险|
|---|---|
|直接在 `main` 上开发|`main` 不再稳定，团队协作会产生冲突，无法安全回滚|
|创建独立 feature 分支 ✅|`main` 始终干净稳定，feature 开发隔离，冲突可控|

> 原文：_"Whenever you are working on some feature, you should always have a copy of main. Create a branch from there, and once you are working on it, you keep committing... once you think that I have developed this feature and now it's ready to be merged into the main, then you put that into the main."_

创建 `styling` 分支的命令：

```bash
git branch styling      # 创建分支
git checkout styling    # 切换分支（可在 VS Code 左下角确认）
```

特别强调：

> _"Because you will be working in groups, it is something that you should practise."_ 因为你们将以小组协作，这是必须养成的习惯。

---

## Q3 (Segment 5) — CSS Separation of Concerns 关注点分离

> Inline Style 违反了哪个原则？50个页面时，External 比 Document Style Sheet 好在哪里？

**答：**

**Inline Style 的问题：**

> 原文：_"This is against what we talked about that HTML should provide a separation of concern. HTML should only be responsible for laying out our web pages and should not consider anything about the styles."_ 这违反了关注点分离原则——HTML 只应负责页面结构，样式不应混入其中。

课上演示：复制了多个 `<h1>` 和 `<p>` 标签后，如果要改颜色，**必须逐个手动修改每一个标签**，效率极低。

---

**Document（内部）vs External（外部）：**

讲师演示了新建 `test.html` 的场景：

> 原文：_"One way is I have to again go here and copy these style sheet and put it here in my test.html. So what I'll do if I have 20 files, I have to do the same thing for 20 files, then again it makes your code a little bit messier."_ 如果有 20 个文件，就要把同一段 `<style>` 复制 20 次，代码越来越乱。

✅ **External 解法**：创建 `style.css`，所有 HTML 页面只需一行 `<link>` 引入：

```html
<link rel="stylesheet" href="style.css">
```

> _"I had another page, I'll just go and put this link tag in the header and then I can link those styles to those pages and then I can link it to as many pages I want."_ 只需在每个页面的 head 中放一个 link 标签，想链接多少页面就链接多少。

---

## Q4 (Segment 6) — CSS Specificity 特异性优先级

> `<img class="cat" id="catID">` 最终显示什么颜色的边框？

**答：🟡 黄色（Yellow）**

讲师在课上用完全相同的例子演示：

```css
img    { border: 3px solid green; }   /* 元素选择器，优先级最低 */
.cat   { border: 3px solid blue; }    /* Class 选择器，优先级中 */
#catID { border: 3px solid yellow; }  /* ID 选择器，优先级最高 */
```

> 原文：_"The IDs have more specificity than the classes... ID can only be associated with just one element, and that's why we are more specific about it."_ ID 选择器比 class 有更高特异性，因为 ID 在页面中是唯一的。

**优先级逻辑（讲师原文总结）：**

1. 先看 **Origin（来源）**：都来自作者，相同
2. 再看 **Specificity（特异性）**：ID > Class > Element
3. → **`#catID` 的黄色边框胜出** ✅

> 若该图片**没有** class 也**没有** ID，则使用 `img` 的绿色边框（讲师在课上验证过这一点）。

---

## Q5 (Segment 6) — `!important` 的使用

> `!important` 什么时候应该使用？为什么不建议滥用？

**答：**

讲师在课上演示了 `!important` 的效果：

> 原文：_"Whenever you put important, then it overrides all the things... it is given preference over any other styles."_ 加了 `!important` 的样式会覆盖**所有其他规则**，无视特异性。

```css
h1 { color: blue !important; }  /* 无论有多少其他规则，此处强制生效 */
```

**使用场景（原文语境）：** 当你的页面存在**样式来源冲突**（如继承自父容器、外部框架如 Bootstrap 的默认样式），且无法通过提高特异性来覆盖时，可以使用 `!important` 强制应用。

**为什么不建议滥用：**

> 原文：_"At times you come to certain cases where you can't have that sort of specificity. Sometimes you're just inheriting some of the things from the parent container, so you should be able to have that understanding of how to resolve those conflicts."_

滥用 `!important` 会：

- 破坏正常的**级联（Cascade）机制**，使 CSS 难以预测
- 未来需要覆盖时，只能用更多 `!important`，形成恶性循环
- 令团队协作时调试样式冲突变得极其困难

> 💡 正确做法：优先通过提高**选择器特异性**（ID > Class > Element）来解决冲突，`!important` 是最后手段。

---

## Q6 (Segment 9) — Bootstrap CSS vs JS 放置位置

> 为什么 Bootstrap CSS 放 `<head>`，JS Bundle 放 `<body>` 最底部？

**答：**

讲师在课上明确说明了这一规则，并预告下周详细讲解：

> 原文：_"This is something for the JavaScript, which is within the script tags. So I'll put this at the very last of my web page. And we'll talk this like why we put it at the very end, but for now you can just assume that we're putting the JavaScript bundle at the very bottom."_

```html
<head>
  <!-- CSS 放 head：页面内容渲染前就加载样式，避免页面闪烁（无样式的HTML先出现）-->
  <link rel="stylesheet" href="bootstrap.min.css">
</head>
<body>
  <!-- 页面内容 ... -->

  <!-- JS 放 body 底部：等 HTML 全部加载完再执行脚本，避免阻塞页面渲染 -->
  <script src="bootstrap.bundle.min.js"></script>
</body>
```

|位置|原因|
|---|---|
|CSS → `<head>`|先加载样式，页面一出现就有正确外观，避免无样式闪烁|
|JS → `<body>` 底部|不阻塞 HTML 渲染，让页面内容先显示，JS 后执行|

> 讲师说：_"We'll talk about why we put it at the very end"_（下周的 JavaScript 内容中会详解）。

---

## Q7 (Segment 9) — Bootstrap 不加类名的影响

> 如果没有为某个元素指定任何 Bootstrap 类，Bootstrap 的引入会对它产生影响吗？

**答：**

讲师在课上演示了引入 Bootstrap CDN 后但**不加任何 class** 的情况：

> 原文：_"So why don't you see any effect on the page over here... you see this boring same boring sort of text on the web page. Why is it so? — Exactly, so we have just provided the link, but we haven't told that it needs to be applied to this particular element on my page."_ 我们只提供了链接，但没有告诉浏览器要把 Bootstrap 的样式应用到哪个元素上。

**结论：部分影响，非全无影响。**

|情况|说明|
|---|---|
|**无任何影响** ❌|不准确|
|**有轻微影响** ✅|Bootstrap 有全局 `reset/normalize` CSS，会统一浏览器默认样式（如字体、间距等），这对所有元素都生效|
|**显著 Bootstrap 样式**|需要你主动添加对应 class，如 `class="btn btn-primary"`、`class="container"` 等|

讲师随后演示了加上 `class="container"` 后页面立刻有了**左右边距和居中效果**的变化，对比没加 class 时"贴着浏览器边缘"的情况：

> _"You might have noticed that there is a shift from the left side of the browser... it stays intact even if I'm stretching too much."_

---

### ✅ 总结一览

|#|核心答案|
|---|---|
|Q1|浏览器自动补全 `<html>` `<head>` `<body>` 及关闭标签|
|Q2|直接在 main 开发破坏稳定性，应创建独立 feature 分支|
|Q3|违反 Separation of Concerns；External CSS 一份文件链接所有页面|
|Q4|黄色边框，因 `#catID`（ID 选择器）特异性最高|
|Q5|`!important` 是最后手段，滥用会破坏 CSS 级联机制|
|Q6|CSS → head（先渲染外观）；JS → body 底部（不阻塞渲染）|
|Q7|有轻微全局影响（normalize）；显著样式需主动加 class|