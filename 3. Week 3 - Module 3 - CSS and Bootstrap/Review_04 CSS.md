
# 1 **CSS（层叠样式表）综合复习讲义 Page 2–Page 45**

---

## 1 **CSS 基础 CSS Basics｜Page 2–Page 9**

---

### 1.1Q **什么是CSS？ Page 2**

**Q:** CSS的定义及三项核心职责是什么？ What is CSS, and what are its three core responsibilities?

**A:**

**CSS = Cascading Style Sheets 层叠样式表** CSS is a language used to **style and layout** web pages. CSS是一种用于**样式化（style）和布局（layout）**网页的语言。

**三项核心职责 Three Core Responsibilities：**

- **Style elements 样式化元素** — e.g. change the colour and font of text. 例如改变文本的颜色和字体。
- **Layout elements 布局元素** — e.g. change how elements are positioned on a page. 例如改变元素在页面上的定位方式。
- **Adapt pages to different devices/screen sizes 适配设备/屏幕** — e.g. display differently on phones vs. desktops. 例如在手机和桌面端以不同方式显示。

> 💡 **类比 Analogy：** 如果HTML是建筑的**骨架（skeleton）**，那么CSS就是**装修设计（interior design）**——决定颜色、摆放位置，以及根据屏幕大小灵活调整。 If HTML is the structural skeleton, then CSS is the interior design — colours, positions, and responsive adjustments.

**🔍 核心洞察 Core Insight（Why）：** 三项职责本质上对应前端开发的三大关切：**视觉 → 结构 → 适应性**。CSS将这三者统一在一门语言中，这正是"层叠"设计哲学的体现——样式可以从多个来源叠加、覆盖。 The three responsibilities map to **visual → structural → adaptive**. CSS unifies all three in one language — this is the essence of "cascading" design philosophy.

---

**📝 习题 Practice Questions（Page 2）：**

**Q1.1-1:** What are the three core responsibilities of CSS? Give one concrete example for each. CSS有哪三项核心职责（responsibilities）？请各举一个具体例子。 _(答案：Style样式化、Layout布局、Adapt适配设备；例：改变字体颜色/控制元素位置/手机端不同布局)_

**Q1.1-2:** True or False: CSS is used to define the structure of a web page's content. 判断对错：CSS用于定义网页内容的结构（structure）。 _(答案：False — structure is HTML's job; CSS handles presentation. 错误——结构是HTML的职责，CSS负责表现)_

---

### 1.2Q **CSS规则语法结构 CSS Rule Syntax Page 3**

**Q:** 一条CSS规则的完整结构包含哪四个部分？各有何语法要求？ What are the four components of a CSS rule, and what are the syntax requirements?

**A:**

```css
h1 {                    /* 选择器 Selector: 指向目标HTML元素 / Points to target HTML element */
    color: blue;        /* 声明 Declaration: 属性:值 / Property: value — 以分号;结尾 / ends with semicolon */
    font-size: 12px;    /* 声明 Declaration: 属性:值 / Property: value — 以分号;结尾 / ends with semicolon */
}                       /* 声明块 Declaration block: 花括号{}包围 / Wrapped in curly braces {} */
```

**四个术语 Four Key Terms：**

- **Selector 选择器** — 指向要设置样式的HTML元素 / Points to the HTML element to style
- **Declaration Block 声明块** — 花括号`{}`包围的所有声明 / All declarations surrounded by `{}`
- **Property 属性** — CSS属性名称 / CSS attribute name → 如`color`、`font-size`
- **Value 值** — 为属性指定的值 / Value assigned to the property → 如`blue`、`12px`

**三条关键语法规则 Three Key Syntax Rules：**

- 属性与值之间用**冒号`:`**分隔 / Property and value separated by **colon `:`**
- 每条声明以**分号`;`**结尾 / Each declaration ends with **semicolon `;`**
- 声明块用**花括号`{}`**包围 / Declaration block wrapped in **curly braces `{}`**

**🔍 核心洞察（Why）：** 分号`;`的作用是告诉解析器"这条声明结束了，下一条开始"。遗漏分号会导致浏览器将**后续声明误解析为当前声明的值**，使多条声明连带失效。 The semicolon `;` tells the parser "this declaration has ended, the next begins". Missing it causes the browser to misparse subsequent declarations as part of the current value — a chain failure.

---

**📝 习题 Practice Questions（Page 3）：**

**Q1.2-1:** Identify all syntax errors in the following code: 找出以下代码中的所有语法错误（syntax errors）：

```
p  color: red  font-size 14px;
```

_(答案：缺花括号`{}`、`font-size`后缺冒号`:`、`red`后缺分号`;` / Missing `{}`, missing `:` after `font-size`, missing `;` after `red`)_

**Q1.2-2:** In a CSS rule, what is the difference between a **property（属性）** and a **value（值）**? Give an example of each. 在CSS规则中，属性（property）和值（value）有什么区别？各举一例。 _(答案：property是属性名如`color`；value是属性的具体设定如`red` / property is the attribute name e.g.`color`; value is the setting e.g.`red`)_

---

### 1.3Q **添加CSS的三种方式 Three Ways to Add CSS Page 4–6**

**Q:** 向HTML添加CSS有哪三种方式？各自的作用范围和特点是什么？ What are the three ways to add CSS, and what is the scope and characteristic of each?

**A:**

**方式一 External CSS 外部CSS（Page 5）：** 通过`<head>`中的`<link>`标签链接独立`.css`文件。 Linked via `<link>` element inside `<head>`, pointing to a separate `.css` file.

```html
<head>
    <link rel="stylesheet" href="styles.css">
    <!-- rel="stylesheet": 说明链接资源类型为样式表 / Specifies resource type as stylesheet -->
    <!-- href="styles.css": 外部CSS文件路径 / Path to the external CSS file -->
</head>
```

外部CSS文件内容示例：

```css
body {
    background-color: lightblue;  /* 背景色为浅蓝 / Background color: light blue */
}
h1 {
    color: navy;                  /* 标题文字深蓝色 / Heading color: navy */
    margin-left: 20px;            /* 左外边距20px / Left margin: 20px */
}
```

- 作用范围：**"An external stylesheet can be shared across multiple HTML files."**
- 作用范围：**"外部样式表可以在多个HTML文件之间共享。"**

**方式二 Internal CSS 内部CSS（Page 5）：** 写在`<head>`内的`<style>`标签中。 Written inside a `<style>` element in the `<head>` section.

```html
<head>
    <style>                              /* style标签开始 / style tag start */
        body {
            background-color: linen;     /* 背景色亚麻色 / Background: linen */
        }
        h1 {
            color: maroon;               /* 标题栗色 / Heading: maroon */
            margin-left: 40px;           /* 左外边距40px / Left margin: 40px */
        }
    </style>                             /* style标签结束 / style tag end */
</head>
```

- 作用范围：**"Only applies to the current HTML file."**
- 作用范围：**"仅适用于当前HTML文件。"**

**方式三 Inline CSS 内联CSS（Page 6）：** 直接写在元素的`style`属性中。 Applied directly to a single element via the `style` attribute.

```html
<h1 style="color:blue; text-align:center;">
    <!-- style属性：直接在元素上书写CSS声明 / CSS declarations directly on element -->
    <!-- color:blue: 文字蓝色 / text color blue -->
    <!-- text-align:center: 文字居中 / text center-aligned -->
    This is a Blue, Centered Heading
</h1>
<p style="color:red;">               <!-- 段落文字红色 / paragraph text red -->
    This is a Red Paragraph.
</p>
```

- 作用范围：**"Only applies to the specific element."**
- 作用范围：**"仅适用于该特定元素。"**

> ⚠️ **内联CSS优先级最高（highest specificity），但会使HTML代码难以维护，不推荐大量使用。** Inline CSS has the highest specificity but makes HTML harder to maintain — avoid overusing it.

**三种方式快速对比：**

- **External 外部** → 作用范围：多个文件 multiple files → 修改最省力 / Least effort to update
- **Internal 内部** → 作用范围：当前文件 current file only
- **Inline 内联** → 作用范围：单个元素 single element → 优先级最高但难维护

**🔍 核心洞察（Why）：** 外部CSS是**最佳实践（best practice）**，因为它实现了**内容（HTML）与表现（CSS）的分离（separation of content and presentation）**，体现了软件工程中的**DRY原则（Don't Repeat Yourself）**——50个页面只需改一个`.css`文件。 External CSS embodies the DRY principle: one `.css` file change updates all 50 pages simultaneously.

---

**📝 习题 Practice Questions（Page 4–6）：**

**Q1.3-1:** A website has 50 pages and needs all heading fonts changed. Which CSS method requires the least effort? Why? 一个包含50个页面的网站需要修改所有标题字体。哪种CSS引入方式（method）工作量最少？为什么？ _(答案：External CSS外部CSS — 只需改一个.css文件即可更新所有页面 / Only need to change one .css file to update all pages)_

**Q1.3-2:** What is the scope of **Internal CSS（内部CSS）**? Where exactly is it placed in the HTML document? 内部CSS（Internal CSS）的作用范围是什么？它在HTML文档中具体放置在哪里？ _(答案：仅适用于当前HTML文件 / current file only；放在`<head>`内的`<style>`标签中 / inside `<style>` in `<head>`)_

**Q1.3-3:** True or False: Inline CSS applies to all elements of the same type on a page. 判断对错：内联CSS（Inline CSS）适用于页面上所有相同类型的元素。 _(答案：False — it only applies to the specific element it is written on. 错误——它只适用于书写它的那个特定元素)_

---

### 1.4Q **CSS选择器五大类别 Five Selector Categories Page 7**

**Q:** CSS选择器分为哪五大类？本课程重点讲哪一类？ What are the five categories of CSS selectors, and which does this course focus on?

**A:**

- **Simple selectors 简单选择器** — Select elements based on name, id, or class. 根据元素名、id或class选择。
- **Combinator selectors 组合选择器** — Select elements based on a specific relationship between them. 根据元素之间的特定关系选择。
- **Pseudo-class selectors 伪类选择器** — Select elements based on a certain state. 根据某种状态选择。
- **Pseudo-element selectors 伪元素选择器** — Select and style a part of an element. 选择并样式化元素的某个部分。
- **Attribute selectors 属性选择器** — Select elements based on an attribute or attribute value. 根据属性或属性值选择。

> 📌 **讲义重点 Lecture focus：** "We will focus on **simple selectors**." 课程将重点关注**简单选择器**。

---

### 1.5Q **四种简单选择器 Four Simple Selectors Page 8–9**

**Q:** 四种简单选择器各自的语法、目标范围和命名限制是什么？ What are the syntax, scope, and naming restrictions of the four simple selectors?

**A:**

```css
/* ① 元素选择器 Element Selector — 按标签名选中所有同名元素 */
/* Selects ALL elements of that tag name on the page */
p {
    text-align: center;   /* 所有<p>文字居中 / All <p> text center-aligned */
    color: red;           /* 所有<p>文字红色 / All <p> text red */
}

/* ② ID选择器 ID Selector — 页面中唯一的一个元素 */
/* The id is unique on a page, so it selects exactly ONE element */
#para1 {
    text-align: center;   /* 特定元素文字居中 / Specific element text center-aligned */
    color: red;           /* 特定元素文字红色 / Specific element text red */
}

/* ③ 类选择器 Class Selector — 所有拥有该class的元素（可跨标签类型）*/
/* Selects ALL elements with that class, regardless of tag type */
.center {
    text-align: center;   /* 所有.center元素居中 / All .center elements centered */
    color: red;           /* 所有.center元素红色 / All .center elements red */
}

/* ③a 限定元素的类选择器 — 仅特定标签+该class */
/* Only <p> elements with class="center" — other tags with same class NOT selected */
p.center {
    text-align: center;   /* 仅class="center"的<p>元素 / Only <p> with class="center" */
    color: red;
}

/* ④ 通用选择器 Universal Selector — 页面上所有元素 */
/* Selects EVERY SINGLE element on the page */
* {
    text-align: center;   /* 所有元素居中 / ALL elements centered */
    color: blue;          /* 所有元素蓝色 / ALL elements blue */
}
```

**多class示例 Multiple Classes Example（Page 9）：**

```html
<p class="center large">
    <!-- 元素同时属于"center"和"large"两个class -->
    <!-- This element belongs to BOTH "center" and "large" classes simultaneously -->
    This paragraph refers to two classes.
</p>
```

**四种选择器对比：**

- **元素 Element** `p {}` → 所有同名元素 / All matching tags → 命名限制：无
- **ID** `#id {}` → 页面唯一一个 / Exactly one element → ⚠️ **"An id name cannot start with a number."（不能以数字开头）**
- **类 Class** `.class {}` → 所有带该class的元素 → ⚠️ **"A class name cannot start with a number."（不能以数字开头）**
- **通用 Universal** `* {}` → 页面所有元素 / All elements → 命名限制：无

**🔍 核心洞察（Why）：** ID唯一性规则不仅是CSS约定，更服务于**URL锚点导航（URL anchor navigation）**（如`#heading1`）和JavaScript DOM操作。因此整个文档中ID必须唯一——这是HTML规范层面的要求，CSS只是遵循它。 ID uniqueness is not just a CSS convention — it also enables URL anchor navigation (`#heading1`) and JavaScript DOM targeting, making it an HTML specification requirement that CSS follows.

> ⚠️ **边界情况 Edge Case：** `p.center`与`.center`的区别：前者仅选`<p>`标签且有`class="center"`的元素；后者选**所有**有`class="center"`的元素（包括`<h2 class="center">`等）。 `p.center` vs `.center`: the former only selects `<p>` elements with that class; the latter selects ALL element types with that class.

---

**📝 习题 Practice Questions（Page 8–9）：**

**Q1.5-1:** What is the difference between `p.highlight` and `.highlight`? `p.highlight`和`.highlight`有什么区别？ _(答案：`p.highlight`仅选class="highlight"的`<p>`元素；`.highlight`选所有class="highlight"的元素，不限标签类型 / `p.highlight` only selects `<p>` with that class; `.highlight` selects ALL element types with that class)_

**Q1.5-2:** Which of the following are **valid（有效的）** CSS selector names? `#123`, `#user1`, `.my-class`, `.3items` 以下哪些CSS选择器名称是有效的（valid）？ _(答案：`#user1`和`.my-class`有效；`#123`和`.3items`无效——不能以数字开头 / `#user1` and `.my-class` are valid; `#123` and `.3items` are invalid — cannot start with a number)_

**Q1.5-3:** An element is written as `<p class="center large">`. How many class selectors can target this element? 一个元素写作`<p class="center large">`，有多少个类选择器（class selectors）能作用于它？ _(答案：至少两个：`.center`和`.large`都能作用于它 / At least two: both `.center` and `.large` can target it)_

---

## 2 **CSS 选择器详解 CSS Selectors｜Page 10–Page 28**

---

### 2.1Q **选择器完整分类速查表 Full Selector Reference Page 11**

**Q:** 基础选择器和组合选择器各有哪些类型？ What are all the basic selectors and combinators?

**A:**

讲义说明：**"There is a whole language for writing increasingly precise selectors."**（存在一整套语言体系，用于编写精确度不断提升的选择器。） 选择器大致分为两大类：

- **Basic selectors 基础选择器** — based on one specific criterion. 基于单一条件。
- **Combinators 组合选择器** — joining multiple criteria. 联合多个条件。

**Basic Selectors 基础选择器：**

- `* {...}` → Universal selector 通用选择器 — 匹配所有元素 / Matches all elements
- `p {...}` → Element selector 元素选择器 — 匹配特定标签 / Matches specific tag
- `[secret="yes"] {...}` → Attribute selector 属性选择器 — 匹配含特定属性值的元素 / Matches specific attribute value
- `.important {...}` → Class selector 类选择器 — 匹配指定class / Matches specified class
- `#1234 {...}` → ID selector ID选择器 — 匹配指定id的唯一元素 / Matches unique id
- `:hover {...}` → Pseudo-class selector 伪类选择器 — 基于元素状态 / Based on element state
- `::first-letter {...}` → Pseudo-element selector 伪元素选择器 — 匹配元素特定部分 / Matches part of element

**Selector Combinators 组合选择器：**

- `s1, s2 {...}` → Group selector 分组选择器 — 逻辑"或" / Logical OR
- `s1 s2 {...}` → Descendant selector 后代选择器 — 任意层级后代 / Any depth
- `s1 > s2 {...}` → Direct descendant selector 直接后代选择器 — 仅直接子元素 / Direct children only
- `s1 ~ s2 {...}` → Sibling selector 兄弟选择器 — 同级后续所有兄弟 / All following siblings
- `s1 + s2 {...}` → Direct sibling selector 相邻兄弟选择器 — 仅紧邻的下一个 / Immediately next sibling only

---

### 2.2Q **贯穿示例的DOM树 Reference DOM Tree Page 12**

**Q:** Pages 13–24所有选择器示例使用的DOM树结构是什么？为什么要使用同一个DOM树？ What DOM tree is used across all selector examples on Pages 13–24, and why use one consistent DOM tree?

**A:**

讲义说明：**"To illustrate all selectors, a reference HTML document is used throughout, replacing SELECTOR as appropriate."**（为演示所有选择器，讲义全程使用同一份HTML文档，依次替换其中的SELECTOR。）

``` shell
DOM树结构 DOM Tree Structure:
body
├── h1  (title="The first heading")      ← 有title属性 / has title attribute
├── h2  (id="heading1")                  ← Heading 2.a，有id属性 / has id attribute
├── p   (class="important")              ← First paragraph，有class属性 / has class attribute
├── p                                    ← Second paragraph
│   ├── b                                →   bold（<p>的直接子元素 direct child of <p>）
│   └── span
│       └── b                            →   <b>嵌套在<span>中 nested inside <span>
├── h2  (class="important")              ← Heading 2.b，有class属性 / has class attribute
└── p                                    ← Third paragraph
    └── b                                →   bold（<p>的直接子元素 direct child of <p>）
```

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      SELECTOR { color: red }   /* 依次替换为不同选择器 / Replace with each selector in turn */
    </style>
  </head>
  <body>
    <h1 title="The first heading">Heading 1</h1>          <!-- 有title属性 / has title attribute -->
    <h2 id="heading1">Heading 2.a</h2>                    <!-- 有id属性 / has id -->
    <p class="important">First paragraph</p>              <!-- 有class属性 / has class -->
    <p>Second paragraph has a <b>bold</b> and             <!-- 含b和span子元素 / contains b and span -->
       a <span>span with another <b>bold</b></span>
    </p>
    <h2 class="important">Heading 2.b</h2>                <!-- 有class属性 / has class -->
    <p>Third paragraph has a <b>bold</b> as well</p>      <!-- 含b子元素 / contains b -->
  </body>
</html>
```

> 💡 **为什么用同一棵DOM树（Why）：** 控制变量原则——固定HTML结构，只改变SELECTOR，可以**精确对比**每种选择器的作用范围差异，这是讲义最有教学价值的设计。 Control variables principle: fix the HTML structure, change only the SELECTOR — this allows **precise comparison** of each selector's scope.

---

### 2.3Q **7种基础选择器应用效果 Basic Selectors Page 13–19**

**Q:** 通用、元素、属性、类、ID、伪类、伪元素选择器分别选中参考DOM树的哪些节点？ Which nodes does each basic selector target in the reference DOM tree?

**A:**

```css
/* Page 13: 通用选择器 Universal Selector * */
/* 所有节点全部变红 / ALL nodes turn red — h1, h2×2, p×3, b×3, span all selected */
* { color: red }

/* Page 14: 元素选择器 Element Selector p */
/* 仅3个<p>变红 / Only the 3 <p> elements turn red — headings and <b> unaffected */
p { color: red }

/* Page 15: 属性选择器 Attribute Selector [title="The first heading"] */
/* 仅<h1>被选中（唯一有该title值的元素）/ Only <h1> selected (the only element with that title value) */
[title="The first heading"] { color: red }
/* 注：省略属性值写[title]则选中所有拥有title属性的元素 */
/* Note: omitting value [title] selects ALL elements with any title attribute */

/* Page 16: 类选择器 Class Selector .important */
/* <p class="important"> 和 <h2 class="important"> 同时选中 */
/* BOTH <p class="important"> AND <h2 class="important"> selected — two different tag types, same class */
.important { color: red }

/* Page 17: ID选择器 ID Selector #heading1 */
/* 仅<h2 id="heading1"> (Heading 2.a) 被选中 / Only <h2 id="heading1"> selected */
#heading1 { color: red }

/* Page 18: 伪类选择器 Pseudo-class Selector p:hover */
/* 鼠标悬停时<p>变红（动态效果）/ <p> turns red on mouse hover (dynamic) */
p:hover { color: red }

/* Page 19: 伪元素选择器 Pseudo-element Selector p::first-letter */
/* 每个<p>的首字母变红 / First letter of EACH <p> element turns red */
p::first-letter { color: red }
```

**伪类 vs 伪元素对比 Pseudo-class vs Pseudo-element（Page 19）：**

- **伪类 Pseudo-class**
    
    - 针对：元素的**状态** element **state**
    - 语法：单冒号 single colon → `:hover`
    - 常见示例：`:hover` `:focus` `:valid` `:visited`
- **伪元素 Pseudo-element**
    
    - 针对：元素的**特定部分** a **specific part** of an element
    - 语法：双冒号 double colon → `::first-letter`
    - 常见示例：`::first-letter` `::first-line` `::backdrop`

> 💡 **类比 Analogy：** 伪元素就像只给一篇文章的**第一个字母**印成红色——它不是整个元素，而是元素内部的一个"虚拟子元素（virtual sub-element）"。 A pseudo-element targets a virtual part inside an element, not the element as a whole.

---

**📝 习题 Practice Questions（Page 13–19）：**

**Q2.3-1:** Using the reference DOM tree, what is the difference between `[title]` and `[title="The first heading"]`? 使用参考DOM树，`[title]`和`[title="The first heading"]`有什么区别？ _(答案：`[title]`选中所有有title属性的元素；`[title="The first heading"]`仅选中title值精确匹配的那一个元素 / `[title]` selects all with any title attribute; `[title="The first heading"]` only selects the exact value match)_

**Q2.3-2:** Using the reference DOM, what does `.important` select? How many and which nodes? 在参考DOM树中，`.important`选中了哪些节点？共几个？ _(答案：2个节点：`<p class="important">`和`<h2 class="important">` / 2 nodes: the `<p>` and the `<h2>` both with class="important")_

**Q2.3-3:** What is the syntactic difference between a pseudo-class（伪类）and a pseudo-element（伪元素）selector? 伪类（pseudo-class）和伪元素（pseudo-element）选择器在语法上有何区别？ _(答案：伪类用单冒号`:`如`:hover`；伪元素用双冒号`::`如`::first-letter` / pseudo-class uses single colon `:` e.g. `:hover`; pseudo-element uses double colon `::` e.g. `::first-letter`)_

---

### 2.4Q **5种组合选择器 Combinator Selectors Page 20–24**

**Q:** 五种组合选择器分别选中参考DOM树的哪些节点？核心区别是什么？ Which nodes does each combinator select in the reference DOM tree, and what are the key distinctions?

**A:**

```css
/* Page 20: 分组选择器 Group Selector h2, b */
/* 逻辑"或"：同时选中所有<h2> 和 所有<b> / Logical OR: all <h2> AND all <b> */
/* 结果：h2×2 + b×3 = 共5个节点 / Result: 2 h2 + 3 b = 5 nodes total */
h2, b { color: red }

/* Page 21: 后代选择器 Descendant Selector p b */
/* 选中<p>内任意深度的<b> / ALL <b> descendants of <p> at ANY depth */
/* 结果：直接子<b> ✅ + <span>内的<b> ✅ = 共2个 / Result: direct b + nested b = 2 nodes */
p b { color: red }

/* Page 22: 直接后代选择器 Direct Descendant Selector p > b */
/* 仅选中直接位于<p>之下的<b> / ONLY <b> that are DIRECT children of <p> */
/* 结果：直接子<b> ✅ ; <span>内的<b> ❌（隔了span）/ Result: direct b only; span's b excluded */
p > b { color: red }

/* Page 23: 兄弟选择器 Sibling Selector h1 ~ h2 */
/* 选中所有与<h1>同级、位于其后的<h2> / ALL <h2> siblings that come AFTER <h1> */
/* 结果：Heading 2.a ✅ + Heading 2.b ✅ 两个都被选中 / Result: BOTH h2 nodes selected */
h1 ~ h2 { color: red }

/* Page 24: 相邻兄弟选择器 Direct Sibling Selector h1 + h2 */
/* 仅选中紧接<h1>之后的那个<h2> / ONLY the IMMEDIATELY following <h2> after <h1> */
/* 结果：仅Heading 2.a ✅ ; Heading 2.b ❌（不紧邻）/ Result: only Heading 2.a; 2.b excluded */
h1 + h2 { color: red }
```

**后代 vs 直接后代 核心对比（Page 21–22）：**

```
<p>                    ← s1 匹配
  <b>bold</b>          ← p b ✅   p > b ✅  (直接子元素 direct child)
  <span>
    <b>bold</b>        ← p b ✅   p > b ❌  (非直接，中间隔了span / span is in between)
  </span>
</p>
```

**兄弟 vs 相邻兄弟 核心对比（Page 23–24）：**

```
body
├── h1           ← s1 匹配
├── h2 (2.a)     ← h1~h2 ✅   h1+h2 ✅  (紧邻下一个 immediately next)
├── p
├── p
├── h2 (2.b)     ← h1~h2 ✅   h1+h2 ❌  (不紧邻 not immediately next)
└── p
```

> 💡 **类比 Analogy：**
> 
> - `p b`（后代）：找"某人的所有后代（子、孙、曾孙……）"——不管隔几代都算。Find all descendants at any depth.
> - `p > b`（直接后代）：只找"亲生子女"——只认第一代。Only direct children.
> - `h1 ~ h2`（兄弟）：找"我后面所有的兄弟姐妹"——只要在我后面、同一父级都算。All following siblings.
> - `h1 + h2`（相邻兄弟）：只找"紧挨着我后面的那一个兄弟"——只找最近的一个。Only the immediately next sibling.

**🔍 核心洞察（Why）：** 设计`>`和`+`的精确版本，根本目的是**控制样式的作用范围**。若只有`p b`（任意后代），深层嵌套元素会意外继承样式；`p > b`让开发者精确控制"只到第一层"，防止样式渗透到不期望的深度。This precision prevents unintended style bleeding into deeply nested elements.

---

**📝 习题 Practice Questions（Page 20–24）：**

**Q2.4-1:** Using the reference DOM tree, what does `body > p` select? What does `body p b` select? 使用参考DOM树，`body > p`选中什么？`body p b`选中什么？ _(答案：`body > p` 选中3个直接子`<p>`；`body p b` 选中所有`<p>`后代中的`<b>`共3个 / `body > p` selects 3 direct `<p>` children; `body p b` selects all 3 `<b>` descendants inside `<p>`)_

**Q2.4-2:** What is the difference between `h2, b` and `h2 b`? `h2, b`和`h2 b`有什么区别？ _(答案：`h2, b` 是分组选择器，选中所有`<h2>`和所有`<b>`；`h2 b` 是后代选择器，只选中在`<h2>`内部的`<b>`，参考DOM中无此结构所以无匹配 / `h2, b` is group selector selecting all h2 AND all b; `h2 b` is descendant selector selecting only `<b>` inside `<h2>`, which doesn't exist in reference DOM)_

**Q2.4-3:** For the reference DOM, how many nodes does `p > b` select? How many does `p b` select? Explain the difference. 在参考DOM中，`p > b`选中几个节点？`p b`选中几个？解释区别。 _(答案：`p > b` 选中2个（两个`<p>`中的直接子`<b>`）；`p b` 选中3个（含span内那个）/ `p > b` selects 2 direct child `<b>`; `p b` selects 3 including the `<b>` nested in `<span>`)_

---

### 2.5Q **CSS冲突解析三步规则 Conflict Resolution Page 25–28**

**Q:** 当多条规则同时作用于一个元素时，如何决定哪条生效？三步解析规则和`!important`如何工作？ When multiple rules target the same element, how is conflict resolved? How do the three-step rules and `!important` work?

**A:**

**冲突产生原因（Page 25）：** An element may be subject to more than one rule because: 一个元素可能同时受多条规则作用，原因：

- 同一标签被多条规则用作选择器 / A tag may be used twice as a selector
- 标签可能继承属性同时被选择器直接指定 / A tag may inherit and be directly targeted

**三类样式表来源 Three Style Sheet Sources：**

- **User style sheets 用户样式表** — 用户通过浏览器设置编写 / Written by user via browser settings
- **Author style sheets 作者样式表** — 开发者编写 / Written by the developer
- **User agent style sheets 用户代理样式表** — 浏览器默认 / Browser defaults

---

**三步解析规则 Three-Step Resolution（Page 26）：**

**Step 1 — 按来源与重要性排序（由高到低）：**

```
最高 ↑  Transition declarations（过渡声明）
       Important user agent declarations（重要用户代理声明）
       Important user declarations（重要用户声明）
       Important author declarations（重要作者声明）← !important开发者声明
       Normal author declarations（普通作者声明）← 日常开发CSS
       Normal user declarations（普通用户声明）
最低 ↓  Normal user agent declarations（浏览器默认声明）
```

**Step 2 — 若平局，按特异性 Specificity 判断：**

$$\text{Inline} > \text{ID selectors} > \text{Class/Attribute/Pseudo-class} > \text{Type/Pseudo-element}$$

- 内联样式 Inline > 样式表样式 Stylesheet
- ID选择器数量越多越优先 / More ID selectors = higher priority
- 类、属性、伪类选择器数量 / Class, attribute, pseudo-class count
- 类型、伪元素选择器数量 / Type, pseudo-element count

**Step 3 — 若仍平局，选样式表中位置靠后的规则：** If still tied, choose whichever selector **appears last** in the stylesheet. 若仍平局，选取样式表中**位置靠后**的规则。

---

**完整代码示例 — IDs vs Classes vs Elements（Page 27）：**

```css
p {                  /* 元素选择器 Element selector — 最低特异性 lowest specificity */
    color: yellow;   /* 若无更高优先级规则则生效 / Only wins if no higher specificity rule */
}
#para {              /* ID选择器 ID selector — 最高特异性 highest specificity */
    color: pink;     /* 特异性最高，胜出 / Highest specificity, wins */
}
.paragraph {         /* 类选择器 Class selector — 中等特异性 medium specificity */
    color: red;      /* 高于element但低于ID / Higher than element, lower than ID */
}
```

```html
<!-- 同时匹配三条规则 / Matches all three rules simultaneously -->
<p id="para" class="paragraph">Hello World!</p>
```

**特异性对决结果：**

- `p` → yellow → 最低特异性 lowest → ❌
- `.paragraph` → red → 中等特异性 medium → ❌
- `#para` → **pink** → **最高特异性 highest → ✅ 胜出 wins**

**结果 Result：** 文本显示为 **pink（粉色）**。

---

**`!important`覆盖示例（Page 28）：**

```css
p {
    color: yellow !important;   /* !important声明，在作者样式表内覆盖所有普通声明 */
                                /* !important declaration overrides all normal declarations */
}
#para {
    color: pink;                /* 普通ID选择器，特异性虽高但被!important覆盖 */
                                /* Normal ID selector; high specificity but overridden by !important */
}
.paragraph {
    color: red;                 /* 普通类选择器，同样被覆盖 / Normal class selector, also overridden */
}
```

**结果 Result：** 文本显示为 **yellow（黄色）** ✅ — `!important`作者声明优先级高于普通ID声明。

> ⚠️ **`!important`的完整优先级位置：** `!important` author declarations **rank above** normal author declarations but **below** `!important` user declarations in the full cascade order.（在完整层叠顺序中，`!important`作者声明高于普通作者声明，但低于`!important`用户声明。）

**🔍 核心洞察（Why）：** 特异性本质上是CSS为**"谁更了解这个元素"**设计的评分系统：

- 内联样式（直接写在元素上）→ 最了解
- ID（页面唯一标识）→ 次之
- 类（分组标识）→ 再次
- 标签（最宽泛的分类）→ 最不了解

Specificity is a scoring system for "who knows this element best" — inline knows best (written directly on it), then ID (unique), class (grouped), and finally tag (most generic). This design enables ordered inheritance and override.

> ⚠️ **边界情况 Edge Case：** `!important`不应滥用——它打破了正常的层叠秩序，会使CSS难以维护和调试。讲义明确将其定性为"优先级覆盖机制"而非"常规工具"。 `!important` should not be overused — it breaks the natural cascade order, making CSS hard to maintain and debug.

---

**📝 习题 Practice Questions（Page 25–28）：**

**Q2.5-1:** An element is `<p id="special" class="highlight">`. Three rules apply: `p {color:red}`, `p.highlight {color:green}`, `#special {color:blue}`. What is the final colour? Why? 一个元素`<p id="special" class="highlight">`，三条规则：`p {color:red}` / `p.highlight {color:green}` / `#special {color:blue}`。最终颜色是什么？为什么？ _(答案：blue — `#special`是ID选择器，特异性最高胜出 / blue — `#special` is an ID selector with highest specificity)_

**Q2.5-2:** What are the three sources of style sheets that can cause conflicts? Name them in order from highest to lowest priority (for normal declarations). 导致冲突的三类样式表来源（style sheet sources）是什么？按普通声明的优先级从高到低排列。 _(答案：作者样式表Author > 用户样式表User > 用户代理样式表User agent / Author > User > User agent)_

**Q2.5-3:** Two rules for the same element appear in the same stylesheet with the same specificity: `p {color: red}` and `p {color: blue}`. Which wins? Why? 同一样式表中两条具有相同特异性的规则：`p {color: red}`和`p {color: blue}`。哪条胜出？为什么？ _(答案：`p {color: blue}`——出现顺序靠后的规则胜出 / `p {color: blue}` — the rule that appears last wins when specificity is equal)_

**Q2.5-4:** True or False: `!important` always overrides everything, including user `!important` declarations. 判断对错：`!important`总能覆盖一切，包括用户的`!important`声明。 _(答案：False — 用户的!important声明优先级高于作者的!important声明 / False — user !important declarations rank above author !important declarations)_

---

## 3 **CSS 属性 CSS Properties｜Page 29–Page 34**

---

### 3.1Q **CSS属性分组总览 Property Groups Page 30**

**Q:** CSS有哪些属性分组？本课程重点讲解哪7组？ What CSS property groups exist, and which 7 does this course focus on?

**A:**

讲义说明：**"There are many, many CSS properties and the list is continually growing."**（CSS属性数量非常多，且这份列表还在持续增长。）

**完整属性分组总览（三列排布 Three columns from PDF）：**

- **Color 颜色** / Table 表格 / Paged Media 分页媒体
- **Background and Borders 背景与边框** / Lists and Counters 列表与计数器 / Generated Content 生成内容
- **Basic Box 基础盒模型** / Animation 动画 / Filter Effects 滤镜效果
- **Flexible Box 弹性盒** / Transform 变形 / Image/Replaced Content 图像/替换内容
- **Text 文本** / Transition 过渡 / Masking 遮罩
- **Text Decoration 文字装饰** / Basic User Interface 基础用户界面 / Speech 语音
- **Fonts 字体** / Multi-column 多列 / Marquee 滚动字幕
- **Writing Modes 书写模式**

**本课程讲解的7个核心属性组 7 Core Groups Covered：**

- `text` — 文本样式 Text styling
- `background` — 背景 Background
- `borders` — 边框 Borders
- `the box model` — 盒模型 Box model
- `colors` — 颜色 Colors
- `tables` — 表格 Tables
- `lists` — 列表 Lists

> 💡 **类比 Analogy：** CSS属性分组就像工具箱中的不同抽屉——字体抽屉、颜色抽屉、布局抽屉……每个抽屉装着一类专用工具。CSS property groups are like different drawers in a toolbox — each holds a specific type of styling tool.

---

### 3.2Q **字体属性 Font Properties Page 31**

**Q:** 字体相关的CSS属性有哪些？`font`简写属性的顺序要求是什么？ What are the font-related CSS properties, and what is the fixed order requirement for the `font` shorthand?

**A:**

```css
/* font-size — 字体大小 Font size */
p { font-size: 14pt; }        /* 数值设置 / Numeric value */
p { font-size: xx-large; }    /* 名称关键字 / Named keyword */
p { font-size: smaller; }     /* 相对当前字体缩小 / Smaller relative to current */

/* font-style — 字体样式 Font style */
p { font-style: italic; }     /* 斜体 / Italic */
p { font-style: normal; }     /* 正常 / Normal */

/* font-weight — 字体粗细 Font weight */
/* specifies degrees of boldness（指定加粗程度）*/
p { font-weight: bold; }      /* 关键字粗体 / Bold keyword */
p { font-weight: 700; }       /* 数值（等同bold）/ Numeric, equivalent to bold */
p { font-weight: 100; }       /* 最细 / Thinnest */
p { font-weight: 900; }       /* 最粗 / Heaviest */
p { font-weight: bolder; }    /* 相对当前更粗 / Bolder than inherited */
p { font-weight: lighter; }   /* 相对当前更细 / Lighter than inherited */

/* font — 简写属性 Shorthand（顺序固定！FIXED ORDER!）*/
/* 顺序必须为：style → weight → size → name(s) */
/* Order MUST be: style → weight → size → name(s) */
p { font: bolder 14pt Arial Helvetica; }
/* bolder=weight, 14pt=size, Arial=first choice font, Helvetica=fallback font */
/* bolder=粗细, 14pt=大小, Arial=首选字体, Helvetica=备用字体 */

/* text-decoration — 文字装饰线 Text decoration */
p { text-decoration: underline; }     /* 下划线 / Underline */
p { text-decoration: line-through; }  /* 删除线 / Strikethrough */
p { text-decoration: overline; }      /* 上划线 / Overline */
p { text-decoration: none; }          /* 无装饰（常用于去除链接下划线）/ Remove decoration */

/* letter-spacing — 字母间距 Letter spacing */
p { letter-spacing: 5px; }    /* 增大间距 / Increase spacing */
p { letter-spacing: -1px; }   /* 减小间距 / Decrease spacing */
```

**字体属性速查：**

- `font-size` → 数值 / `smaller` / `xx-large`等关键字
- `font-style` → `italic` / `normal`
- `font-weight` → `bold`/`bolder`/`lighter`/`normal` / 100–900
- `font` → **style → weight → size → name(s)** ⚠️ **顺序固定**
- `text-decoration` → `underline`/`overline`/`line-through`/`none`
- `letter-spacing` → 任意数值（正值增大，负值减小）

> ⚠️ **`font`简写属性顺序颠倒将导致解析错误：** `font: 14pt bolder Arial` ❌ → `font: bolder 14pt Arial` ✅ **"The order must be: style, weight, size, name(s)"（顺序必须为：样式、粗细、大小、字体名称）**

**🔍 核心洞察（Why）：** `font`简写顺序固定的原因是CSS解析器（parser）需要消除歧义：如果size（14pt）和weight（bold）都可以排在任意位置，解析器无法判断"bold"是字重还是字体名称，因此固定顺序是**消除语法歧义的必要设计**。 The fixed order exists because the CSS parser needs to disambiguate: if `14pt` (size) and `bold` (weight) could appear in any order, the parser couldn't determine what role each value plays. Fixed order eliminates parsing ambiguity.

---

**📝 习题 Practice Questions（Page 31）：**

**Q3.2-1:** What is the correct order for the `font` shorthand property（字体简写属性）? Write a valid example. `font`简写属性的正确顺序是什么？写一个有效的示例。 _(答案：style → weight → size → name；例如：`font: italic bold 16pt Georgia` / e.g. `font: italic bold 16pt Georgia`)_

**Q3.2-2:** What is the difference between `font-weight: bold` and `font-weight: bolder`? `font-weight: bold`和`font-weight: bolder`有什么区别？ _(答案：`bold`是绝对值（等于700）；`bolder`是相对于继承的字重更粗 / `bold` is absolute (=700); `bolder` is relative, bolder than the inherited weight)_

**Q3.2-3:** Which `text-decoration` value would you use to remove the default underline from a hyperlink? 要去除超链接默认的下划线，应使用哪个`text-decoration`值？ _(答案：`text-decoration: none` / `text-decoration: none`)_

---

### 3.3Q **文本对齐与浮动 Text Alignment & Float Page 32**

**Q:** `text-indent`、`text-align`和`float`属性各有哪些值？`float`如何实现图文混排？ What are the values for `text-indent`, `text-align`, and `float`? How does `float` achieve image-text layout?

**A:**

```css
/* text-indent — 首行缩进 First-line indentation */
p { text-indent: 20px; }    /* 固定长度 / Fixed length */
p { text-indent: 5%; }      /* 百分比（相对父元素宽度）/ Percentage relative to parent width */

/* text-align — 水平对齐 Horizontal alignment（4个值 4 values）*/
p { text-align: left; }     /* 左对齐（默认）/ Left-aligned (default) */
p { text-align: center; }   /* 居中 / Center-aligned */
p { text-align: right; }    /* 右对齐 / Right-aligned */
p { text-align: justify; }  /* 两端对齐（分散排列）/ Justified */

/* float — 浮动 Float（使文字环绕其他元素）*/
/* Shifts element left or right; text flows naturally around it */
/* 元素按正常流布局，然后向左或向右移动，文字自动环绕 */
img { float: left; }     /* 图片靠左，文字从右绕排 / Image left, text wraps right */
img { float: right; }    /* 图片靠右，文字从左绕排 / Image right, text wraps left */
img { float: none; }     /* 默认，不浮动 / Default, no float */
/* 还有: inherit — 继承父元素float值 / Also: inherit parent's float value */
```

**讲义代码示例 Code Example from PDF (Page 32)：**

```html
<!-- 图片浮动到右侧，文字从左侧自动环绕 -->
<!-- Image floats to right; text automatically wraps on its left -->
<img src="c210.jpg" style="float: right"/>
<!-- Some text with the default alignment - left -->
<!-- 文本使用默认的左对齐 text uses default left alignment -->
```

**效果示意 Visual Illustration：**

```
┌──────────────────────────────────┐
│ Some text with the   ┌─────────┐ │
│ default alignment -  │  image  │ │
│ left                 │(float:  │ │
│                      │ right)  │ │
│                      └─────────┘ │
└──────────────────────────────────┘
```

> 💡 **类比 Analogy：** `float: right`就像把一幅画挂到墙的右边——文字会自动绕着它的左侧排列，而不会被它遮挡。`float: right` is like hanging a picture on the right side of a wall — text wraps naturally to its left without being covered.

---

**📝 习题 Practice Questions（Page 32）：**

**Q3.3-1:** What are the four possible values（可选值）for `text-align`? Which is the default? `text-align`有哪四个可选值？哪个是默认值（default）？ _(答案：`left`（默认）/ `center` / `right` / `justify`；默认值为`left` / Default is `left`)_

**Q3.3-2:** You want an image to appear on the LEFT side of the page with text flowing to its right. Write the minimal HTML/CSS to achieve this. 你想让图片出现在页面左侧，文字从其右侧流动。写出实现这一效果的最简HTML/CSS。 _(答案：`<img src="..." style="float: left"/>` 后接文字内容 / `<img src="..." style="float: left"/>` followed by text)_

---

### 3.4Q **列表属性 List Properties Page 33**

**Q:** `list-style-type`如何控制列表标记？设置在`<ul>`上与`<li>`上有何区别？ How does `list-style-type` control list markers? What's the difference between setting it on `<ul>` vs `<li>`?

**A:**

```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Some of my favourite things</h3>

    <ul style="list-style-type: square">
        <!-- 设置在<ul>上：所有子<li>全部继承 / Set on <ul>: ALL child <li> items inherit -->
        <li>Raindrops on roses</li>       <!-- ■ 继承square / inherits square -->
        <li>Whiskers on kittens</li>      <!-- ■ 继承square / inherits square -->
        <li>Bright copper kettles</li>    <!-- ■ 继承square / inherits square -->
    </ul>

    <ol>
        <!-- 设置在单个<li>上：仅该项生效 / Set on individual <li>: only that item affected -->
        <li style="list-style-type: upper-alpha">   <!-- A. 大写字母 / Upper-alpha -->
            Warm woolen mittens
        </li>
        <li style="list-style-type: upper-roman">   <!-- II. 大写罗马数字 / Upper-roman -->
            Brown paper packages
        </li>
    </ol>
  </body>
</html>
```

**渲染效果 Rendered Output：**

```
Some of my favourite things

■ Raindrops on roses         ← square（继承自<ul>）
■ Whiskers on kittens        ← square（继承自<ul>）
■ Bright copper kettles      ← square（继承自<ul>）

A.  Warm woolen mittens      ← upper-alpha（单独设置）
II. Brown paper packages     ← upper-roman（单独设置）
```

**作用范围 Scope：**

- 设置在`<ul>`/`<ol>`上 → 所有子`<li>`**全部继承** / Set on `<ul>`/`<ol>` → ALL `<li>` children inherit
- 设置在单个`<li>`上 → **仅该项**生效，覆盖父级设置 / Set on `<li>` → **that item only**, overrides parent

**可选值速查：**

- 无序`<ul>` → `disc`（实心圆，默认）/ `square`（方块）/ `circle`（空心圆）/ `none`
- 有序`<ol>` → `decimal`（1,2,3）/ `upper-alpha`（A,B,C）/ `upper-roman`（I,II,III）

---

**📝 习题 Practice Questions（Page 33）：**

**Q3.4-1:** Given the following HTML, what marker appears before each `<li>`? 对于以下HTML，每个`<li>`前面显示什么标记（marker）？

```html
<ul style="list-style-type: circle">
  <li>Item One</li>
  <li style="list-style-type: square">Item Two</li>
  <li>Item Three</li>
</ul>
```

---

_(答案：○ Item One — 继承circle / inherits circle；■ Item Two — 单独设置覆盖为square / individually overridden to square；○ Item Three — 继承circle / inherits circle)_

**Q3.4-2:** When `list-style-type` is set on `<ol>`, does it affect all `<li>` items or just one? 当`list-style-type`设置在`<ol>`上时，它影响所有`<li>`项还是只影响一个？ _(答案：所有子`<li>`项全部继承 / All child `<li>` items inherit it)_

---

### 3.5Q **颜色的三种指定方式 Colour Specification Page 34**

**Q:** CSS中指定颜色的三种方式各有多少种颜色可用？格式分别是什么？ What are the three methods for specifying colours in CSS, how many colours does each provide, and what is each format?

**A:**

**Collection 1 — 16种保证颜色 16 Guaranteed Colours：** A set of **16 colours** guaranteed to be displayable by **all graphical browsers on all colour monitors**. 一组**16种颜色**，可保证在**所有图形浏览器和所有彩色显示器**上正常显示。

```css
p { color: red; }     /* 使用16种保证颜色之一 / Using one of the 16 guaranteed colours */
p { color: navy; }    /* 深蓝色 / Navy blue */
/* 完整16色：black, silver, gray, white, maroon, red, purple, fuchsia, */
/* green, lime, olive, yellow, navy, blue, teal, aqua */
```

**Collection 2 — 140种命名颜色 140 Named Colours：** A larger set of **140 named colours** supported by **all major browsers**. 所有**主流浏览器**支持的更大一组**140种命名颜色**。

```css
p { color: tomato; }          /* 140种命名颜色之一 / One of the 140 named colours */
p { color: cornflowerblue; }  /* 矢车菊蓝 / Cornflower blue */
/* 参考 Reference: https://www.w3schools.com/cssref/css_colors.php */
```

**Collection 3 — 十六进制颜色 Hexadecimal Colours：** Any one of **16,777,216 colours**, specified in **hexadecimal notation（十六进制表示法）**. 使用十六进制表示法指定的任意一种**1600万种颜色**之一。

```css
/* 格式 Format: #RRGGBB */
/* RR=红色通道 Red channel, GG=绿色通道 Green, BB=蓝色通道 Blue */
/* FF = 十进制255（最大值 maximum）; 00 = 十进制0（最小值 minimum）*/
p { color: #000000; }   /* 纯黑 Pure black  (R=0,   G=0,   B=0)   */
p { color: #FFFFFF; }   /* 纯白 Pure white  (R=255, G=255, B=255) */
p { color: #FF0000; }   /* 纯红 Pure red    (R=255, G=0,   B=0)   */
p { color: #0000FF; }   /* 纯蓝 Pure blue   (R=0,   G=0,   B=255) */
p { color: #1A2B3C; }   /* 自定义颜色 Custom colour */
```

**三种方式速查对比：**

- **16 Guaranteed 保证颜色** → 16种 → `red` `black` `blue`… → 所有浏览器保证支持
- **140 Named 命名颜色** → 140种 → `tomato` `cornflowerblue`… → 主流浏览器支持
- **Hexadecimal 十六进制** → **16,777,216种** → `#FF5733`… → 精确匹配任意颜色

> 💡 **类比 Analogy：** 三种颜色方式就像颜料选择——16色是基础装（保证能用），140色是标准套装（满足大部分需求），十六进制是专业调色板（可调出任意颜色）。The three colour methods are like paint sets: 16 guaranteed = basic set; 140 named = standard set; hex codes = professional palette.

**🔍 核心洞察（Why）：** 十六进制颜色为什么是16,777,216种？`#RRGGBB`每个通道00–FF有256个值，三通道组合 = 256³ = **16,777,216**。这是**RGB色彩空间（RGB colour space）**的数学必然，也是显示器的物理呈色原理。 Hex gives 16,777,216 colours because each of the 3 channels (RR, GG, BB) has 256 values (00–FF), and 256³ = 16,777,216 — the mathematical consequence of the RGB colour space.

---

**📝 习题 Practice Questions（Page 34）：**

**Q3.5-1:** What colour does `#FF0000` produce? What about `#00FF00`? And `#FFFF00`? Explain using the `#RRGGBB` format. `#FF0000`产生什么颜色？`#00FF00`呢？`#FFFF00`呢？用`#RRGGBB`格式（format）解释。 _(答案：纯红red / 纯绿green / 黄色yellow（R全开+G全开+B关）/ Pure red; pure green; yellow — R=max, G=max, B=0)_

**Q3.5-2:** Rank the three colour specification methods from fewest to most colours available. When would you prefer hex over a named colour? 将三种颜色指定方式按可用颜色数量从少到多排列。什么情况下选择十六进制（hexadecimal）而不是命名颜色（named colour）？ _(答案：16→140→16,777,216；当需要精确匹配品牌专属颜色时选十六进制 / When needing exact brand colour that has no named equivalent)_

---

## 4 **CSS 布局 CSS Layout｜Page 35–Page 41**

---

### 4.1Q **盒模型四层结构 Box Model Page 36–38**

**Q:** 盒模型的四层结构是什么？`width`设置的是哪层？盒子实际尺寸与页面占用空间的计算公式是什么？ What are the four layers of the box model? Which layer does `width` set? What are the formulas for box size vs page space?

**A:**

讲义说明：**"Every element is essentially laid out as four boxes, which is known as the box model."**（每个元素在本质上都被布局为四个盒子，这被称为盒模型。）

**盒模型四层结构（从内到外）：**

```
┌─────────────────────────────────────┐
│               Margin                │  ← 外边距（透明 transparent）
│  ┌───────────────────────────────┐  │
│  │            Border             │  │  ← 边框
│  │  ┌─────────────────────────┐  │  │
│  │  │         Padding         │  │  │  ← 内边距（透明 transparent）
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │      Content      │  │  │  │  ← 内容区域（CSS width/height只设置此层）
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

**四层含义：**

- **Content 内容** — 实际元素被渲染的区域 / Where the actual element is rendered
- **Padding 内边距** — 内容与边框之间的空间，**始终透明** / Space between content and border, **always transparent**
- **Border 边框** — 包围内边距和内容的边框线 / The border surrounding padding and content
- **Margin 外边距** — 元素边框与相邻元素之间的空间，**始终透明** / Space between border and neighbors, **always transparent**

**边框三属性 Border Properties（Page 37）：**

```css
p {
    border-style: dashed;   /* 虚线边框 Dashed — 默认none，不设置则看不到边框 / Default: none */
    border-width: 2px;      /* 边框宽度 Width — 默认medium / Default: medium */
    border-color: blue;     /* 边框颜色 Colour — 任意颜色 / Any colour */
}
/* ⚠️ border-style必须设置，否则边框不显示 / border-style MUST be set, or border is invisible */
```

**Padding 内边距（Page 38）：**

```css
p { padding: 10px; }        /* 四边均为10px / All four sides 10px */
p { padding-left: 5px; }    /* 仅左侧 / Left only */
p { padding-top: 8px; }     /* 仅上侧 / Top only */
```

**⚠️ 核心区分 Key Distinction — width设置的是什么：** 讲义原文：**"When you set the width and height of an element with CSS, you (normally) just set the width and height of the content area."**（当你用CSS设置元素的width和height时，通常只是设置了**内容区域**的宽高。）

**总尺寸计算公式 Total Size Formula：**

$$\text{Box Width} = \text{border-left} + \text{padding-left} + \text{content width} + \text{padding-right} + \text{border-right}$$

$$\text{Space on Page} = \text{margin-left} + \text{Box Width} + \text{margin-right}$$

> ⚠️ **关键区分：**
> 
> - **Box size 盒子实际尺寸** = content + padding + border → **外边距不计入**
> - **Space on page 页面占用空间** = Box size + margin → **margin影响页面空间但不是盒子尺寸**
> - **"The box's total width and height stops at the border."**（盒子的总宽高止于边框。）

**数值示例 Numerical Example：**

```
content width  = 200px
padding        = 10px (each side 每侧)
border         = 2px  (each side 每侧)
margin         = 20px (each side 每侧)

Box actual width  = 2 + 10 + 200 + 10 + 2  = 224px  ← 止于border
Space on page     = 20 + 224 + 20           = 264px  ← 含margin
```

> 💡 **类比 Analogy：** 盒模型就像装裱好的画——`content`是画本身，`padding`是画与画框之间的衬纸（透明），`border`是画框，`margin`是画框与相邻画框之间的距离。CSS的`width`只是画本身的尺寸，不包括衬纸和画框。The box model is like a framed picture: `content` = the picture, `padding` = the matting (transparent), `border` = the frame, `margin` = the gap between frames.

**🔍 核心洞察（Why）：** `width`只设置内容区域这一设计，源于**内容与装饰分离**的原则——内容的逻辑尺寸不应该因为加了边框或内边距而改变。但这也是大量布局Bug的来源，因此CSS3引入了`box-sizing: border-box`，可将`width`重定义为包含padding和border的总尺寸。 This design separates content logic from decoration. However, it is also the source of many layout bugs — hence CSS3 introduced `box-sizing: border-box` to redefine `width` as including padding and border.

---

**📝 习题 Practice Questions（Page 36–38）：**

**Q4.1-1:** An element has `width: 100px`, `padding: 10px`, `border-width: 5px`, `margin: 20px`. What is the **actual box width（盒子实际宽度）**? What is the **total space（页面占用总空间）** it takes up on the page? 一个元素有`width: 100px`、`padding: 10px`、`border-width: 5px`、`margin: 20px`。盒子的实际宽度（actual box width）是多少？页面占用总空间（total space）宽度是多少？ _(答案：Box = 5+10+100+10+5 = 130px；Space = 20+130+20 = 170px)_

**Q4.1-2:** You set `border-width: 3px` and `border-color: red` but the border is not visible. What is most likely missing? 你设置了`border-width: 3px`和`border-color: red`，但边框不可见。最可能缺少什么？ _(答案：`border-style`未设置——默认值为`none`，不设置则边框不显示 / `border-style` is missing — its default is `none`, so no border appears)_

**Q4.1-3:** True or False: Margin is included in the box's actual size. 判断对错：外边距（Margin）包含在盒子的实际尺寸（actual size）中。 _(答案：False — margin affects space on page but is NOT part of the box's actual size. 错误——外边距影响页面占用空间，但不计入盒子实际尺寸)_

---

### 4.2Q **覆盖正常文档流的三种方式 Three Ways to Override Normal Flow Page 39–41**

**Q:** 正常文档流是什么？覆盖它的三种方式分别是什么？各自是否脱流？ What is normal document flow? What are the three ways to override it, and does each remove elements from the flow?

**A:**

**正常流 Normal Flow：** **"By default, elements are laid out according to the normal flow of the document — they appear sequentially above each other in the order they are declared."** 默认情况下，元素按照文档的**正常流**进行布局——按声明顺序**依次从上到下**排列。

---

**方式一 Way 1 — `float`属性（Page 39）：**

**"The element is laid out according to the normal flow, then shifted to lie to the left or right of the previous element."** （元素先按正常流布局，然后**向左或向右移动**，紧靠前一个元素旁边。）

```css
img { float: left; }     /* 图片向左浮动，文字从右侧环绕 / Image floats left, text wraps right */
img { float: right; }    /* 图片向右浮动，文字从左侧环绕 / Image floats right, text wraps left */
img { float: none; }     /* 默认，不浮动 / Default, no float */
/* 还有 inherit：继承父元素float值 / Also: inherit parent's float value */
```

用途：实现**图片与文字在同一行** / Used for **images and text on the same line**.

```
float: left                       float: right
┌──────────────────────┐          ┌──────────────────────┐
│ ┌─────┐              │          │              ┌─────┐  │
│ │ img │  Text text   │          │  Text text   │ img │  │
│ │     │  text text   │          │  text text   │     │  │
│ └─────┘  text...     │          │  text...     └─────┘  │
└──────────────────────┘          └──────────────────────┘
```

---

**方式二 Way 2 — `position`属性（Page 40）：**

Uses **offset properties（偏移属性）**: `top`, `left`, `right`, `bottom`. Has **five values（五个值）**: 使用偏移属性：`top`、`left`、`right`、`bottom`。共有**五个值**：

```css
/* static — 默认正常流，不偏移 / Default, normal flow, no offset */
div { position: static; }

/* relative — 相对原位置偏移，不脱流，原空间保留 */
/* Offset from normal position; element stays in flow, space is preserved */
div {
    position: relative;    /* 相对定位 / Relative positioning */
    top: 10px;             /* 向下偏移10px / Shift down 10px */
    left: 20px;            /* 向右偏移20px / Shift right 20px */
}

/* absolute — 完全脱流，相对最近已定位祖先偏移 */
/* Fully removed from flow; offset relative to nearest positioned ancestor */
div {
    position: absolute;    /* 绝对定位 / Absolute positioning */
    top: 0px;              /* 距祖先顶部0px / 0px from ancestor's top */
    right: 0px;            /* 距祖先右侧0px / 0px from ancestor's right */
}

/* fixed — 完全脱流，相对固定视口偏移（如固定导航栏）*/
/* Fully removed from flow; offset relative to fixed viewport (e.g. sticky navbar) */
nav {
    position: fixed;       /* 固定定位 / Fixed positioning */
    top: 0;                /* 固定在页面顶部 / Fixed at top of viewport */
}

/* sticky — 根据滚动位置在relative和fixed之间切换 */
/* Switches between relative and fixed based on scroll position */
div { position: sticky; top: 0; }
```

**五种定位值速查：**

- `static` → 正常流，不偏移 → ❌ 不脱流 → **默认值**
- `relative` → 相对原位偏移，原空间保留 → ❌ 不脱流
- `absolute` → 相对最近已定位祖先 → ✅ **完全脱流**
- `fixed` → 相对浏览器视口 → ✅ **完全脱流**
- `sticky` → `relative` + `fixed`混合，滚动触发 → 两者间切换

---

**方式三 Way 3 — `display`属性（Page 41）：**

**"The `display` property determines how the element is treated in normal flow."** （`display`属性决定了元素在正常流中的处理方式。）

**"There are approximately 20 possible values."**（约有20个可选值。）

```css
div  { display: block; }        /* 块级，独占一行 / Block-level, takes full line */
span { display: inline; }       /* 内联，行内排列 / Inline, flows within a line */
div  { display: flex; }         /* 弹性盒布局 / Flexbox layout */
div  { display: grid; }         /* 网格布局 / Grid layout */
div  { display: inline-flex; }  /* 内联弹性盒 / Inline flexbox */
```

---

**CSS框架 CSS Frameworks（Page 41）：**

讲义说明：**"A much more scalable way is to use a CSS framework — which are libraries of CSS code allowing you to quickly build a visually appealing and responsive website."** （更具可扩展性的方式是使用**CSS框架**——这是预编写CSS代码的库，能让你快速构建**美观且响应式**的网站。）

> **"See next Lecture for more details."**（详细内容见下一讲。）

**三种方式汇总速查：**

- **`float`** — 左/右浮动，文字环绕 — 值：`none`/`left`/`right`/`inherit` — 部分脱流
- **`position`** — 精确坐标定位 — 值：5个（static/relative/absolute/fixed/sticky） — 视值而定
- **`display`** — 改变排列身份 — 值：约20个 — 视值而定

> 💡 **类比 Analogy：**
> 
> - `float`：元素靠边站，其他内容绕行。
> - `position`：给元素贴GPS坐标，精确控制落点。
> - `display`：改变元素的"身份证类型"（块级/内联/弹性/网格）。
> - CSS框架：买了套精装房——布局已设计好，填入内容即可。

**🔍 核心洞察（Why）：** 三种方式是递进关系：`float`是最早的布局工具（为图文混排设计），`position`是精确坐标系定位，`display`是现代布局的基础（flex/grid是目前最强大的布局方案）。讲义特别指出手动CSS布局"**hard!**"，推荐CSS框架——这正是工程化思维的体现：**不重复造轮子**。 The three methods are progressive: `float` is the oldest (designed for text wrap), `position` enables coordinate-based placement, and `display` is the foundation of modern layout. The lecture explicitly says raw CSS layout is "hard!" — recommending frameworks reflects the engineering principle of not reinventing the wheel.

---

**📝 习题 Practice Questions（Page 39–41）：**

**Q4.2-1:** What is the key difference between `position: relative` and `position: absolute`? Which one is removed entirely from the normal document flow（正常文档流）? `position: relative`和`position: absolute`的核心区别是什么？哪一个会完全脱离正常文档流（normal document flow）？ _(答案：relative不脱流，相对原位置偏移，原空间保留；absolute完全脱流，相对最近已定位祖先定位 / relative stays in flow, offset from normal position; absolute is fully removed, positioned relative to nearest positioned ancestor)_

**Q4.2-2:** Describe `position: fixed` vs `position: sticky`. What is the key difference? 描述`position: fixed`和`position: sticky`的行为。核心区别（key difference）是什么？ _(答案：fixed始终相对于视口，完全脱流；sticky初始为relative，滚动到阈值后切换为fixed / fixed is always relative to viewport, fully out of flow; sticky starts as relative and switches to fixed at scroll threshold)_

**Q4.2-3:** The `float` property has four possible values. List them all. `float`属性有哪四个可选值（possible values）？ _(答案：`none` / `left` / `right` / `inherit`)_

**Q4.2-4:** What is a CSS framework（CSS框架）? Why does the lecture recommend using one for large responsive websites? 什么是CSS框架（CSS framework）？讲义为什么推荐在大型响应式网站中使用它？ _(答案：预编写CSS代码的库，可快速构建美观响应式网站 / A library of pre-written CSS code for quickly building visually appealing responsive websites；因为手动CSS布局非常困难且难以跨屏幕适配 / because raw CSS layout is hard and difficult to scale across screen sizes)_

---

## 5 **其他 Other｜Page 42–Page 45**

---

### 5.1Q **浏览器厂商前缀 Vendor Prefixes Page 43**

**Q:** 什么是浏览器厂商前缀？为什么要同时写带前缀和不带前缀的三个版本？讲义如何评价它？ What are vendor prefixes, why must all three versions be written, and how does the lecture characterise them?

**A:**

**定义 Definition：** Vendor prefixes are added by **browser makers（浏览器制造商）** to support new CSS features **before they become fully standardised and widely supported**. 浏览器厂商前缀由**浏览器制造商**添加，用于在新CSS特性**完全标准化并获得广泛支持之前**，提前支持这些特性。

**完整代码示例 Full Code Example（Page 43）：**

```css
.foo {
    -webkit-border-radius: 10px;  /* WebKit内核（早期Chrome/Safari）/ Early Chrome, Safari */
    -moz-border-radius: 10px;     /* Mozilla Firefox */
    border-radius: 10px;          /* W3C标准属性，现代浏览器 / W3C standard, modern browsers */
}
```

**前缀速查表：**

- `-webkit-` → WebKit内核，早期Chrome、Safari / Early Chrome, Safari
- `-moz-` → Mozilla Firefox
- `-ms-` → Microsoft Internet Explorer / 旧版Edge
- `-o-` → 旧版Opera / Old Opera
- **无前缀 No prefix** → W3C标准，现代浏览器通用 / W3C standard, all modern browsers

**为什么要同时写三行 Why write all three lines：** 在CSS标准尚未最终确定时，不同浏览器各自使用自己的前缀实现新特性。为确保**跨浏览器兼容性（cross-browser compatibility）**，开发者需同时写出所有前缀版本以及最终标准版本，**由浏览器自行选择可识别的那一行**。 While the standard is not finalised, each browser uses its own prefix. Developers write all variants so **each browser picks the one it recognises**.

**讲义引用语（Page 43）：**

> _"…force the vendors and the Working Group to work together to devise the tests necessary to determine interoperability. Those tests can then guide those who follow, helping them to achieve interoperable status much faster."_

厂商前缀被描述为**"a positive catalyst for the evolution to exciting technologies"（技术演进的积极催化剂）**——迫使浏览器厂商与W3C工作组协作制定互操作性测试，从而加速CSS标准化。 Vendor prefixes are a **positive catalyst** — they force browser vendors and the W3C Working Group to collaborate on interoperability tests, accelerating standardisation.

**厂商前缀演进流程：**

```
新CSS特性提出 New CSS feature proposed
        ↓
各厂商带前缀先行实现 Browsers implement with prefix (-webkit-, -moz-...)
        ↓
开发者写所有前缀版本确保兼容 Developers write all versions for compatibility
        ↓
W3C标准化完成，无前缀版本发布 W3C finalises standard, prefix-free version released
        ↓
旧前缀逐渐废弃（仍需向后兼容）Old prefixes deprecated (backward compat. still needed)
```

> 💡 **类比 Analogy：** 厂商前缀就像新药上市前各地的临床试验——每个地区（浏览器）各自做实验（前缀版本），最终通过统一标准（W3C）后，才有了全球通用的产品（无前缀标准属性）。Vendor prefixes are like regional drug trials before global approval — each region (browser) experiments with its own version, until a unified standard produces the universally accepted product.

**🔍 核心洞察（Why）：** 厂商前缀机制本质上是CSS标准化过程的**"灰度发布（staged rollout）"**——先在真实浏览器环境中测试，发现问题再修正，最终标准化。这虽然造成了短期的兼容性负担，却大幅降低了"制定了错误标准"的风险。 Vendor prefixes are essentially a **staged rollout** of CSS standardisation — testing in real environments, fixing issues, then standardising. Short-term compatibility overhead; much lower risk of locking in a flawed standard.

---

**📝 习题 Practice Questions（Page 43）：**

**Q5.1-1:** Given the following code, which line would a modern fully standards-compliant browser (e.g., current Chrome) use? Which lines are effectively overridden? 对于以下代码，现代完全符合标准的浏览器（如当前Chrome）会使用哪一行？哪几行被覆盖（overridden）？

```css
.foo {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}
```

_(答案：使用`border-radius: 10px`（无前缀标准属性）；前缀版本被标准版本覆盖 / Uses `border-radius: 10px` (unprefixed standard); prefixed lines are overridden)_

**Q5.1-2:** What does the lecture describe vendor prefixes as, in terms of their role in CSS evolution? 讲义将厂商前缀（vendor prefixes）描述为在CSS演进（CSS evolution）中扮演什么角色？ _(答案："a positive catalyst for the evolution to exciting technologies"（技术演进的积极催化剂）/ "a positive catalyst for the evolution to exciting technologies")_


---

### 5.2Q **CSS验证服务 CSS Validation Service Page 44**

**Q:** W3C CSS验证服务的地址是什么？支持哪三种输入方式？各适用什么场景？ What is the URL of the W3C CSS Validation Service, what are the three input methods, and when is each used?

**A:**

**工具名称 Tool Name：** W3C CSS Validation Service **工具地址 URL：** 🔗 `https://jigsaw.w3.org/css-validator/`

**三种输入方式 Three Input Methods：**

```
验证方式 Method          说明 Description                          适用场景 Use Case
─────────────────────────────────────────────────────────────────────────────
By URI               输入文档网址在线验证                        文档已公开部署在网上
                     Enter document URL to validate              Document is publicly online

By file upload       上传本地CSS文件进行验证                     有本地CSS文件
                     Upload a local CSS file                     Local CSS file available

By direct input      直接粘贴CSS代码进行验证                     草稿阶段，尚未部署
                     Paste CSS code directly                     Draft/unpublished CSS
```

**界面功能 Interface Features（来自 Page 44 截图）：**

- **Address字段** → 输入HTML with CSS 或纯CSS文档的地址 / Enter URL of HTML-with-CSS or CSS-only document
- **Check按钮** → 点击执行验证 / Click to execute validation
- **More Options** → 展开更多验证选项 / Expand additional validation options

**验证的价值 Value of Validation：**

- 发现语法错误 / Catch syntax errors
- 确保跨浏览器兼容性 / Ensure cross-browser compatibility
- 遵循W3C标准 / Conform to W3C standards
- 辅助调试 / Aid debugging

**W3C社区信息（Page 44底部）：**

> _"Interested in understanding what new technologies are coming out of W3C? Follow @w3cdevs on X to keep track of what the future looks like!"_ _"Donate and help us build better tools for a better web."_

> 💡 **类比 Analogy：** CSS验证工具就像文章的**语法检查器（Grammar Checker）**——帮你找出代码中的拼写错误和语法问题，让样式表符合标准，减少浏览器解析错误。 The CSS validator is like a grammar checker for your stylesheet — it finds syntax issues and ensures your styles conform to W3C standards.

---

**📝 习题 Practice Questions（Page 44）：**

**Q5.2-1:** Name all three input methods（输入方式）of the W3C CSS Validation Service. For each, state one scenario when it is most appropriate. 说出W3C CSS验证服务的全部三种输入方式，并分别说明各自最适合的一种场景。 _(答案：By URI→文档已在线/By file upload→有本地文件/By direct input→草稿阶段；/ By URI→document online; By file upload→local file available; By direct input→draft/unpublished)_

**Q5.2-2:** True or False: The W3C CSS Validation Service can only validate CSS files, not HTML documents with embedded CSS. 判断对错：W3C CSS验证服务只能验证CSS文件，不能验证内嵌了CSS的HTML文档。 _(答案：False — it checks "CSS and (X)HTML documents with style sheets". 错误——它能检查"含样式表的CSS和(X)HTML文档")_

---

### 5.3Q **CSS的创造力 CSS Creativity Page 45**

**Q:** 讲义标题"CSS is Boring..."使用了什么修辞手法？讲义提供了哪两个证据来反驳它？ What rhetorical device does the title "CSS is Boring..." use, and what two pieces of evidence does the lecture provide to contradict it?

**A:**

**修辞手法 Rhetorical Device：反讽（Irony）**

- 标题：**"CSS is boring..."**（CSS很无聊……）
- 正文立即反驳：**"You can build some amazing things with pure CSS."**（你可以用纯CSS构建令人惊叹的作品。）

这是**反讽修辞（Irony）**——用"无聊"引发读者好奇，再立即以实例推翻，使印象更深刻。 This is **irony** — using "boring" to provoke curiosity, then immediately refuting it with visual examples for maximum impact.

**两个CodePen示例（来自 PDF Page 45）：**

- 🔗 `https://codepen.io/r4ms3s/pen/gaiVBG`
- 🔗 `https://codepen.io/stepan/pen/Nwmqdw`

这两个链接指向**纯CSS创意作品**，展示了不使用任何JavaScript或图片，仅用CSS可以创建： These links point to **pure CSS creative works** demonstrating that CSS alone (no JavaScript, no images) can create:

- 复杂动画 / Complex animations
- 写实插图 / Realistic illustrations
- 交互式UI组件 / Interactive UI components
- 甚至迷你游戏 / Even mini-games

> 💡 **类比 Analogy：** 说"CSS很无聊"就像说"铅笔很无聊"——工具本身或许朴素，但在有创造力的人手中，可以画出无限可能。 Saying "CSS is boring" is like saying "pencils are boring" — the tool itself may seem simple, but in creative hands it produces infinite possibilities.

---

**📝 习题 Practice Questions（Page 45）：**

**Q5.3-1:** What rhetorical device（修辞手法）is used in the slide title "CSS is boring..."? What is the lecture's intent in using this device? 幻灯片标题"CSS is boring..."使用了什么修辞手法？讲义使用这种手法的目的是什么？ _(答案：反讽Irony；目的是引发好奇心，再通过实例展示CSS的强大创造力 / Irony; to provoke curiosity and then demonstrate CSS's creative power)_

**Q5.3-2:** What does the lecture mean when it says "pure CSS"? What does "pure" exclude? 讲义说"pure CSS（纯CSS）"时是什么意思？"pure"排除了什么？ _(答案：仅使用CSS，不使用JavaScript或图片 / CSS only, excluding JavaScript and images)_

---

## 6 **⚡ 应试要点总结 Exam Key Points Summary｜Page 2–Page 45**

---

### 6.1 **高频考点速查 High-Frequency Exam Points**

**📌 CSS基础（Page 2–6）：**

- CSS三项职责 → 样式化 Style / 布局 Layout / 适配设备 Adapt
- CSS规则四要素 → Selector / Declaration Block / Property / Value
- 三个语法规则 → 冒号`:`分隔属性值 / 分号`;`结尾 / 花括号`{}`包围
- 三种引入方式作用范围：
    - External → **多个文件** multiple files
    - Internal → **当前文件** current file only
    - Inline → **单个元素** single element only

**📌 选择器（Page 7–24）：**

- id与class命名限制 → **均不能以数字开头** / Cannot start with a number
- `p b` vs `p > b` → 任意深度后代 any depth vs 仅直接子元素 direct children only
- `h1 ~ h2` vs `h1 + h2` → 所有后续兄弟 all following siblings vs 仅紧邻下一个 immediately next only
- 伪类`:` → 元素**状态** state（单冒号）
- 伪元素`::` → 元素**部分** part（双冒号）

**📌 冲突解析（Page 25–28）：**

- 三步解析顺序：**来源重要性 → 特异性 → 出现顺序**
- 特异性顺序：**Inline > ID > Class/Attr/Pseudo-class > Type/Pseudo-element**
- `!important`作者声明 → 高于普通作者声明，但低于`!important`用户声明

**📌 属性（Page 30–34）：**

- `font`简写固定顺序 → **style → weight → size → name(s)** ⚠️ **不可颠倒**
- `border-style`默认值 → **`none`（不设置则无边框）**
- `text-align`四值 → `left`（默认）/ `center` / `right` / `justify`
- `float`四值 → `none` / `left` / `right` / `inherit`
- 十六进制格式 → `#RRGGBB`，`FF`=255（最大），`00`=0（最小）
- 颜色数量：16保证色 / 140命名色 / 16,777,216十六进制色

**📌 布局（Page 36–41）：**

- `width`/`height` → 只设置**内容区域 content area**
- 盒子实际尺寸 = content + padding + border（**不含margin**）
- 页面占用空间 = 盒子尺寸 + margin
- **"The box's total width and height stops at the border."**（盒子总宽高止于边框）
- `position`五值：`static`（默认）/ `relative`（不脱流）/ `absolute`（脱流）/ `fixed`（脱流）/ `sticky`（混合）
- `display`约有**20**个可选值

**📌 其他（Page 43–45）：**

- 厂商前缀作用 → 标准化前跨浏览器兼容
- 讲义评价 → **"a positive catalyst for the evolution to exciting technologies"**
- CSS验证三种方式 → By URI / By file upload / By direct input
- CSS验证工具URL → `https://jigsaw.w3.org/css-validator/`

---

### 6.2 **⚠️ 高频易错点 Common Mistakes**

```
❌ 误以为width:200px是元素页面总宽度
✅ 实际是内容宽度，总宽度还要加padding和border

❌ 设置border-width和border-color但看不到边框
✅ border-style默认none，必须显式设置才显示

❌ font简写写成 font: 14pt bold Arial
✅ 正确顺序：font: bold 14pt Arial（style→weight→size→name）

❌ p b 只选直接子<b>
✅ p b选所有层级后代（含span内的b）；p>b才只选直接子元素

❌ h1+h2选所有后续<h2>
✅ h1+h2只选紧邻的那一个；h1~h2才选所有后续

❌ margin计入盒子实际尺寸
✅ 盒子止于border，margin只影响页面占用空间

❌ id/class可以以数字开头
✅ 两者均不能以数字开头

❌ !important总能覆盖一切
✅ !important用户声明仍高于!important作者声明

❌ position:absolute相对页面左上角
✅ 相对最近已定位祖先元素，没有则相对initial containing block
```

---

### 6.3 **知识链条总览 Complete Knowledge Chain**

```
CSS是什么（三项职责）
        ↓
语法结构（Selector + Declaration Block + Property + Value）
        ↓
引入方式（External→多页 / Internal→当页 / Inline→单元素）
        ↓
选择器体系
  基础：通用* / 元素 / 属性 / 类 / ID / 伪类: / 伪元素::
  组合：分组, / 后代(空格) / 直接后代> / 兄弟~ / 相邻兄弟+
        ↓
冲突解析（来源重要性 → 特异性 → 出现顺序）→ !important
        ↓
核心属性（字体font / 文本text / 列表list / 颜色color）
        ↓
盒模型（Content + Padding + Border + Margin）
  width只设内容区；盒子止于border；margin影响页面空间
        ↓
覆盖正常流
  float（左/右浮动，文字环绕）
  position（5值：static/relative/absolute/fixed/sticky）
  display（约20值：block/inline/flex/grid...）
        ↓
工程实践
  厂商前缀（-webkit-/-moz-/无前缀）→ 跨浏览器兼容
  CSS验证服务（URI/上传/直接输入）→ 发现语法错误
  CSS框架 → 快速构建响应式网站（下一讲）
```

---
