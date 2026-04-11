> [!PDF|yellow] [[04 CSS.pdf#page=2&selection=0,0,0,11&color=yellow|04 CSS, p.2]]
> > # CSS basics
让我先完整读取第2–9页的所有内容，确保不遗漏任何细节。

---

# **CSS Basics CSS 基础 Page 2 -- Page 9**

---

## **Page 2: What is CSS? – 什么是CSS？**

CSS stands for **Cascading Style Sheets**. CSS代表**层叠样式表**（Cascading Style Sheets）。

CSS is a language used to **style and layout** web pages. CSS是一种用于**样式化和布局**网页的语言。

The slide presents three core responsibilities of CSS: 幻灯片列出了CSS的三项核心职责：

- **Style elements** — e.g. change the colour and font of text. **样式化元素** —— 例如改变文本的颜色和字体。
- **Layout elements** — e.g. change how elements are positioned on a page. **布局元素** —— 例如改变元素在页面上的定位方式。
- **Adapt pages to different devices/screen sizes** — e.g. display differently on phones vs. desktops. **适配不同设备/屏幕尺寸** —— 例如在手机和桌面端以不同方式显示。

> 💡 类比理解：如果HTML是一栋建筑的**骨架**（结构），那么CSS就是**装修设计**——决定墙壁颜色、家具摆放位置，以及根据房间大小灵活调整布局。

---

## **Page 3: CSS Syntax – CSS语法**

A CSS **rule** consists of a **selector** and a **declaration block**. 一条CSS**规则**由一个**选择器**和一个**声明块**组成。

The slide shows the anatomy of a CSS rule with a diagram: 幻灯片通过图示展示了CSS规则的结构：

```css
h1 {                        /* 选择器: 目标HTML元素 / Selector: target HTML element */
    color: blue;            /* 声明: 属性:值 / Declaration: property: value */
    font-size: 12px;        /* 声明: 属性:值 / Declaration: property: value */
}
```

The four labelled parts in the diagram are: 图示中标注的四个部分为：

|术语 Term|含义 Meaning|示例 Example|
|---|---|---|
|**Selector（选择器）**|指向要设置样式的HTML元素 Points to the HTML element to style|`h1`|
|**Declaration Block（声明块）**|包含一条或多条声明，用花括号`{}`包围 Contains one or more declarations surrounded by `{}`|`{ color: blue; font-size: 12px; }`|
|**Property（属性）**|要设置样式的CSS属性名称 The CSS attribute name to style|`color`、`font-size`|
|**Value（值）**|为该属性指定的值 The value specified for the property|`blue`、`12px`|

**Key syntax rules（关键语法规则）：**

- Each declaration consists of a CSS **property** and a **value**, separated by a **colon** (`:`). 每条声明由CSS**属性**和**值**组成，用**冒号**（`:`）分隔。
- Each declaration ends with a **semicolon** (`;`). 每条声明以**分号**（`;`）结尾。
- The declaration block is surrounded by **curly braces** (`{}`). 声明块用**花括号**（`{}`）包围。

---

## **Page 4--6: Ways to Add CSS – 添加CSS的方式**

> 💡 类比理解：CSS有三种"安装"方式——外部样式表像"统一校服"（全站共用）、内部样式表像"个人定制服装"（仅当前页面）、内联样式像"临时改穿某件衣服"（仅当前元素）。

### **Page 4: Three Ways to Add CSS – 添加CSS的三种方式**

There are **3 ways** to add CSS to an HTML page: 向HTML页面添加CSS有**3种方式**：

|方式 Method|说明 Description|
|---|---|
|**External CSS（外部CSS）**|Link to a separate `.css` file 链接到独立的`.css`文件|
|**Internal CSS（内部CSS）**|Write CSS inside a `<style>` tag in the `<head>` 在`<head>`中的`<style>`标签内编写CSS|
|**Inline CSS（内联CSS）**|Write CSS directly in an element's `style` attribute 直接在元素的`style`属性中编写CSS|

---

### **Page 5: External and Internal CSS – 外部CSS与内部CSS**

**External CSS（外部CSS）:**

An external CSS file is linked using the `<link>` element inside the `<head>` section. 外部CSS文件通过`<head>`部分中的`<link>`元素链接。

```html
<head>                                   <!-- HTML文档头部 / HTML document head -->
    <link rel="stylesheet" href="styles.css">
    <!-- rel="stylesheet" : 说明链接资源类型为样式表 / specify link type as stylesheet -->
    <!-- href="styles.css": 指向外部CSS文件路径 / path to the external CSS file -->
</head>
```

The external CSS file (`styles.css`) looks like: 外部CSS文件（`styles.css`）内容如下：

```css
body {                                   /* 选择器：整个body元素 / selector: entire body */
    background-color: lightblue;         /* 背景色设为浅蓝色 / set background color to light blue */
}

h1 {                                     /* 选择器：所有h1标题 / selector: all h1 headings */
    color: navy;                         /* 文字颜色设为深蓝色 / set text color to navy */
    margin-left: 20px;                   /* 左外边距20像素 / set left margin to 20px */
}
```

The slide notes: **"An external stylesheet can be shared across multiple HTML files"**. 幻灯片注明：**"外部样式表可以在多个HTML文件之间共享"**。

---

**Internal CSS（内部CSS）:**

Internal CSS is written inside a `<style>` element, placed within the `<head>` section of the HTML page. 内部CSS写在`<style>`元素内，放置在HTML页面的`<head>`部分中。

```html
<head>                                   <!-- HTML文档头部 / HTML document head -->
    <style>                              <!-- style标签：内部CSS开始 / style tag: internal CSS start -->
        body {                           /* 选择器：body元素 / selector: body element */
            background-color: linen;     /* 背景色设为亚麻色 / background color: linen */
        }
        h1 {                             /* 选择器：所有h1标题 / selector: all h1 headings */
            color: maroon;               /* 文字颜色设为栗色 / text color: maroon */
            margin-left: 40px;           /* 左外边距40像素 / left margin: 40px */
        }
    </style>                             <!-- style标签结束 / style tag end -->
</head>
```

The slide notes: **"Only applies to the current HTML file"**. 幻灯片注明：**"仅适用于当前HTML文件"**。

---

### **Page 6: Inline CSS – 内联CSS**

Inline CSS is applied directly to a **single HTML element** using the `style` attribute. 内联CSS通过`style`属性直接应用于**单个HTML元素**。

```html
<h1 style="color:blue; text-align:center;">
    <!-- style属性：直接在元素上写CSS声明 / style attribute: CSS declarations directly on element -->
    <!-- color:blue       : 文字颜色为蓝色 / text color: blue -->
    <!-- text-align:center: 文字居中对齐 / text alignment: center -->
    This is a Blue, Centered Heading     <!-- 元素内容 / element content -->
</h1>

<p style="color:red;">                   <!-- 段落文字颜色为红色 / paragraph text color: red -->
    This is a Red Paragraph.             <!-- 元素内容 / element content -->
</p>
```

The slide notes: **"Only applies to the specific element"**. 幻灯片注明：**"仅适用于特定的那个元素"**。

> ⚠️ 注意：内联CSS的优先级最高，但会使HTML代码难以维护，不推荐大量使用。 ⚠️ Note: Inline CSS has the highest specificity, but makes HTML harder to maintain and is not recommended for widespread use.

---

## **Page 7: CSS Selectors – CSS选择器**

CSS selectors are used to **find (select) the HTML elements** you want to style. CSS选择器用于**找到（选中）**你想要设置样式的HTML元素。

The slide presents **five categories** of CSS selectors: 幻灯片呈现了CSS选择器的**五大类别**：

|选择器类别 Selector Category|说明 Description|
|---|---|
|**Simple selectors（简单选择器）**|Select elements based on name, id, or class 根据元素名、id或class进行选择|
|**Combinator selectors（组合选择器）**|Select elements based on a specific relationship between them 根据元素之间的特定关系进行选择|
|**Pseudo-class selectors（伪类选择器）**|Select elements based on a certain state 根据某种状态进行选择|
|**Pseudo-element selectors（伪元素选择器）**|Select and style a part of an element 选择并样式化元素的某个部分|
|**Attribute selectors（属性选择器）**|Select elements based on an attribute or attribute value 根据属性或属性值进行选择|

The slide states: **"We will focus on simple selectors"**. 幻灯片说明：**"我们将重点关注简单选择器"**。

---

## **Page 8--9: Simple Selectors – 简单选择器**

> 💡 类比理解：三种简单选择器就像在学校里寻找学生的三种方式——按"年级"（元素名，全体）、按"学号"（id，唯一一人）、按"兴趣小组"（class，一组人）。

### **Page 8: Element Selector and ID Selector – 元素选择器与ID选择器**

**① Element Selector（元素选择器）:**

The element selector selects HTML elements based on the **element name**. 元素选择器根据**元素名称**选择HTML元素。

```css
p {                                      /* 选择器：所有<p>段落元素 / selector: all <p> paragraph elements */
    text-align: center;                  /* 文字居中对齐 / text alignment: center */
    color: red;                          /* 文字颜色为红色 / text color: red */
}
```

This rule applies to **all** `<p>` elements on the page. 此规则适用于页面上**所有**`<p>`元素。

---

**② ID Selector（ID选择器）:**

The ID selector uses the `id` attribute of an HTML element to select a **specific element**. ID选择器使用HTML元素的`id`属性来选择**特定的某个元素**。

The slide states: **"The id of an element is unique within a page, so the id selector is used to select one unique element"**. 幻灯片说明：**"元素的id在页面中是唯一的，因此id选择器用于选择唯一的一个元素"**。

To select an element with a specific id, write a **`#`** character followed by the id of the element. 要选择具有特定id的元素，需在元素id前加**`#`**字符。

```css
#para1 {                                 /* 选择id为"para1"的元素 / select element with id="para1" */
    text-align: center;                  /* 文字居中对齐 / text alignment: center */
    color: red;                          /* 文字颜色为红色 / text color: red */
}
```

The slide also notes: **"An id name cannot start with a number"**. 幻灯片还注明：**"id名称不能以数字开头"**。

---

### **Page 9: Class Selector and Universal Selector – 类选择器与通用选择器**

**③ Class Selector（类选择器）:**

The class selector selects HTML elements that have a **specific class attribute**. 类选择器选择具有**特定class属性**的HTML元素。

To select elements with a specific class, write a **`.`** (period) character followed by the class name. 要选择具有特定class的元素，需在class名前加**`.`**（句点）字符。

```css
.center {                                /* 选择所有class="center"的元素 / select all elements with class="center" */
    text-align: center;                  /* 文字居中对齐 / text alignment: center */
    color: red;                          /* 文字颜色为红色 / text color: red */
}
```

You can also specify that only **specific HTML elements** with the class should be affected: 还可以指定只有**特定HTML元素**带有该class时才受影响：

```css
p.center {                               /* 仅选择class="center"的<p>元素 / only <p> elements with class="center" */
    text-align: center;                  /* 文字居中对齐 / text alignment: center */
    color: red;                          /* 文字颜色为红色 / text color: red */
}
```

The slide also notes: **"An HTML element can have multiple classes"**, demonstrated by: 幻灯片还注明：**"一个HTML元素可以有多个class"**，示例如下：

```html
<p class="center large">                 <!-- 元素同时属于"center"和"large"两个class -->
                                         <!-- element belongs to both "center" and "large" classes -->
    This paragraph refers to two classes.<!-- 元素内容 / element content -->
</p>
```

The slide also notes: **"A class name cannot start with a number"**. 幻灯片还注明：**"class名称不能以数字开头"**。

---

**④ Universal Selector（通用选择器）:**

The universal selector (`*`) selects **all** HTML elements on the page. 通用选择器（`*`）选择页面上的**所有**HTML元素。

```css
* {                                      /* 选择器：页面上所有元素 / selector: ALL elements on the page */
    text-align: center;                  /* 文字居中对齐 / text alignment: center */
    color: blue;                         /* 文字颜色为蓝色 / text color: blue */
}
```

---

#### 四种简单选择器对比总结表

|选择器 Selector|语法 Syntax|目标范围 Target Scope|示例 Example|
|---|---|---|---|
|元素选择器 Element|`element`|所有同名元素 All elements of that name|`p { }`|
|ID选择器 ID|`#idname`|页面中唯一一个元素 One unique element|`#para1 { }`|
|类选择器 Class|`.classname`|所有拥有该class的元素 All elements with that class|`.center { }`|
|类选择器（限定元素）|`element.classname`|拥有该class的特定类型元素 Specific element type with that class|`p.center { }`|
|通用选择器 Universal|`*`|页面上所有元素 All elements on page|`* { }`|

---

### Summary 总结

- **Page 2** defines CSS as a language for **styling, layout, and device adaptation** of web pages. **第2页**将CSS定义为用于网页**样式化、布局和设备适配**的语言。
- **Page 3** introduces CSS **rule syntax**: a rule consists of a **selector** + **declaration block**; each declaration has a **property** and **value** separated by `:`, terminated by `;`, and the block is wrapped in `{}`. **第3页**介绍CSS**规则语法**：规则由**选择器** + **声明块**组成；每条声明包含用`:`分隔的**属性**和**值**，以`;`结束，整个声明块用`{}`包围。
- **Pages 4–6** cover the **three ways to add CSS**: External (`.css` file linked via `<link>`, shareable across pages), Internal (`<style>` tag in `<head>`, page-specific), and Inline (`style` attribute on element, element-specific). **第4–6页**讲解**添加CSS的三种方式**：外部（通过`<link>`链接`.css`文件，可跨页面共享）、内部（`<head>`中的`<style>`标签，仅当前页）、内联（元素上的`style`属性，仅当前元素）。
- **Page 7** presents the **five categories of CSS selectors**, with emphasis that the course focuses on **simple selectors**. **第7页**呈现**CSS选择器的五大类别**，并强调课程重点关注**简单选择器**。
- **Pages 8–9** detail the **four simple selectors**: Element selector (by tag name, targets all matching elements), ID selector (`#id`, targets one unique element), Class selector (`.class`, targets all elements with that class; can be restricted to a specific element type with `element.class`), and Universal selector (`*`, targets all elements). **第8–9页**详细介绍**四种简单选择器**：元素选择器（按标签名，匹配所有同名元素）、ID选择器（`#id`，匹配唯一元素）、类选择器（`.class`，匹配所有拥有该class的元素；可用`element.class`限定为特定元素类型）、通用选择器（`*`，匹配所有元素）。
- **Important naming rules**: both id names and class names **cannot start with a number**. **重要命名规则**：id名称和class名称都**不能以数字开头**。
- An HTML element can belong to **multiple classes** simultaneously by listing class names separated by spaces in the `class` attribute. 一个HTML元素可以通过在`class`属性中用空格分隔class名称，同时属于**多个class**。

---

### 🧭 Guided Learning — 引导问题

**Q1 (Page 2):** CSS has three core responsibilities: styling, layout, and device adaptation. Can you give a concrete example of each responsibility for a webpage you use daily (e.g. a news site or social media)? **问题1（第2页）：** CSS有三项核心职责：样式化、布局和设备适配。你能针对每项职责，用你日常使用的某个网页（如新闻网站或社交媒体）举一个具体例子吗？

**Q2 (Page 3):** In CSS syntax, every declaration must end with a semicolon `;`. What do you think would happen if you **forgot the semicolon** after `color: blue` in a multi-declaration rule? Would only that declaration fail, or would other declarations also be affected? **问题2（第3页）：** CSS语法中，每条声明必须以分号`;`结尾。如果在一个多声明规则中**忘记了** `color: blue`后面的分号，你认为会发生什么？只有那条声明失效，还是其他声明也会受影响？

**Q3 (Pages 4–6):** The slide says external CSS "can be shared across multiple HTML files". If you have a website with 50 pages and need to change the font of all headings, which method (external, internal, or inline) would require the least effort? Why? **问题3（第4–6页）：** 幻灯片说外部CSS"可以在多个HTML文件之间共享"。如果你有一个包含50个页面的网站，需要更改所有标题的字体，哪种方式（外部、内部或内联）需要的工作量最少？为什么？

**Q4 (Page 7):** The slide lists five categories of selectors but says "we will focus on simple selectors". Looking at the five categories, can you guess from the names alone what a **pseudo-class selector** might be used for? (Hint: think about a link that changes appearance when you hover over it.) **问题4（第7页）：** 幻灯片列出了五类选择器，但说"我们将重点关注简单选择器"。仅从名称来看，你能猜测**伪类选择器**可能用于什么场景吗？（提示：想想鼠标悬停时会改变外观的链接。）

**Q5 (Page 8):** The ID selector selects **one unique element** because an `id` must be unique on a page. What would happen if you accidentally assigned the **same id** to two different elements on the same page and applied an ID selector rule to it? **问题5（第8页）：** ID选择器选择**唯一的一个元素**，因为`id`在页面中必须是唯一的。如果你不小心将**相同的id**赋予同一页面上的两个不同元素，并对其应用了ID选择器规则，会发生什么？

**Q6 (Page 9):** Consider a `<p>` element written as `<p class="center large">`. If the `.center` rule sets `color: red` and the `.large` rule sets `color: blue`, what color do you think the text will actually be? What principle determines this? **问题6（第9页）：** 考虑这样一个`<p>`元素：`<p class="center large">`。如果`.center`规则设置`color: red`，而`.large`规则设置`color: blue`，你认为文本实际上会是什么颜色？是什么原则决定这个结果的？

**Q7 (Pages 8–9):** You have three selectors: `p { color: red; }`, `p.highlight { color: green; }`, and `#special { color: blue; }`. If an element is `<p id="special" class="highlight">`, which color rule wins and why? (Hint: think about which selector is most **specific**.) **问题7（第8–9页）：** 你有三个选择器：`p { color: red; }`、`p.highlight { color: green; }`和`#special { color: blue; }`。如果一个元素是`<p id="special" class="highlight">`，哪条颜色规则生效？为什么？（提示：思考哪个选择器最具有**特异性**。）




> [!PDF|yellow] [[04 CSS.pdf#page=10&selection=0,0,0,14&color=yellow|04 CSS, p.10]]
> > # CSS selectors

# **CSS Selectors – CSS 选择器｜Page 10 -- Page 28**

---

## **Page 10--Page 12: Introduction & Selector Basics – 选择器简介与基础知识**

### **Page 10: CSS Selectors – CSS 选择器（章节封面）**

This page is the section title slide for "CSS Selectors." 本页是"CSS 选择器"章节的封面幻灯片。

> 💡 **类比 Analogy：** CSS 选择器就像图书馆的搜索系统——你可以按作者（ID）、按类别（Class）、按任意关键词（属性）来精确定位你想要的书（HTML 元素）。

---

### **Page 11: Selector Basics – 选择器基础**

A selector determines which elements the style applies to. 选择器决定了样式规则应用于哪些 HTML 元素。

There is a whole language for writing increasingly precise selectors. 存在一整套语言体系，用于编写精确度不断提升的选择器。

There are broadly two types: 选择器大致分为两大类：

- **Basic selectors** allow selection based on one specific criterion. **基础选择器**：基于单一条件进行选择。
- **Combinators** allow joining multiple criteria together in various ways. **组合选择器**：以多种方式将多个条件联合使用。

Writing sets of CSS selectors that scale to large webpages and don't clash with each other is a skill! 编写能在大型网页中良好扩展且互不冲突的 CSS 选择器集合，本身就是一项技能！

**📋 完整选择器速查表（来自 PDF Page 11）：**

|Basic Selectors 基础选择器|Example 示例|说明|
|---|---|---|
|Universal selector 通用选择器|`* {...}`|匹配所有元素|
|Element selector 元素选择器|`p {...}`|匹配特定标签|
|Attribute selector 属性选择器|`[secret="yes"] {...}`|匹配含特定属性值的元素|
|Class selector 类选择器|`.important {...}`|匹配指定 class 的元素|
|ID selector ID选择器|`#1234 {...}`|匹配指定 id 的唯一元素|
|Pseudo-class selector 伪类选择器|`:onhover {...}`|基于元素状态匹配|
|Pseudo-element selector 伪元素选择器|`::first-letter {...}`|匹配元素的特定部分|

| Selector Combinators 组合选择器         | Example 示例         | 说明       |
| ---------------------------------- | ------------------ | -------- |
| Group selector 分组选择器               | `s1, s2, s3 {...}` | 逻辑"或"    |
| Descendant selector 后代选择器          | `s1 s2 {...}`      | 任意层级后代   |
| Direct descendant selector 直接后代选择器 | `s1 > s2 {...}`    | 仅直接子元素   |
| Sibling selector 兄弟选择器             | `s1 ~ s2 {...}`    | 同级后续兄弟   |
| Direct sibling selector 相邻兄弟选择器    | `s1 + s2 {...}`    | 紧邻的下一个兄弟 |
|                                    |                    |          |

---
> [!PDF|yellow] [[04 CSS.pdf#page=12&selection=0,0,0,16&color=yellow|04 CSS, p.12]]
> > #### Selector example


### **Page 12: Selector Example – 选择器运行示例**

To illustrate all selectors, a reference HTML document is used throughout, replacing `SELECTOR` as appropriate. 为演示所有选择器，讲义全程使用同一份 HTML 文档，依次替换其中的 `SELECTOR`。

The HTML document structure (DOM tree) and the source code used throughout Pages 13–24 is as follows: 该 HTML 文档的 DOM 树结构与源码如下（贯穿第13–24页所有示例）：

**DOM 树结构：**

```
body
├── h1
├── h2
├── p
├── p
│   ├── b
│   └── span
│       └── b
├── h2
└── p
    └── b
```

**HTML 源码：**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      SELECTOR { color: red }   /* 依次替换为不同选择器 / Replace with each selector */
    </style>
  </head>
  <body>
    <h1 title="The first heading">Heading 1</h1>          <!-- 有 title 属性 / has title attribute -->
    <h2 id="heading1">Heading 2.a</h2>                    <!-- 有 id 属性 / has id attribute -->
    <p class="important">First paragraph</p>              <!-- 有 class 属性 / has class attribute -->
    <p>Second paragraph has a <b>bold</b> and             <!-- 含 b 和 span 子元素 / contains b and span children -->
       a <span>span with another <b>bold</b></span>
    </p>
    <h2 class="important">Heading 2.b</h2>                <!-- 有 class 属性 / has class attribute -->
    <p>Third paragraph has a <b>bold</b> as well</p>      <!-- 含 b 子元素 / contains b child -->
  </body>
</html>
```

> 💡 **关键点**：DOM 树清晰地展示了父子、兄弟等层级关系，是理解后续所有选择器的核心。 The DOM tree clearly shows parent-child and sibling relationships, which is the foundation for understanding all subsequent selectors.

---
> [!PDF|yellow] [[04 CSS.pdf#page=12&selection=0,0,0,16&color=yellow|04 CSS, p.12]]
> > #### Selector example


## **Page 13--Page 19: Basic Selectors – 基础选择器**

### **Page 13: Universal Selector `*` – 通用选择器**

The universal selector `*` matches **all elements** in the document. 通用选择器 `*` 匹配文档中的**所有元素**。

Applying `* { color: red }` results in every single element in the DOM tree being highlighted (i.e., `h1`, `h2`, `p`, `b`, `span` — all turn red). 应用 `* { color: red }` 后，DOM 树中**每一个**元素均被选中并高亮（即 `h1`、`h2`、`p`、`b`、`span` 全部变红）。

```css
* { color: red }   /* 选中文档中所有元素 / Selects ALL elements in the document */
```

> 💡 **类比**：通用选择器就像全场广播——不管是谁，所有人都会收到消息。 The universal selector is like a PA announcement — it targets everyone in the room without exception.

---
> [!PDF|yellow] [[04 CSS.pdf#page=14&selection=0,0,2,7&color=yellow|04 CSS, p.14]]
> > #### Element selector: element

### **Page 14: Element Selector `element` – 元素选择器**

An element selector matches **one specific type** of HTML element. 元素选择器匹配某一**特定类型**的 HTML 元素。

For example, matching on `p` results in all `<p>` elements being highlighted (3 paragraphs highlighted, headings and `<b>` elements are not). 例如，`p` 选择器会使所有 `<p>` 元素高亮（3个段落被选中，标题和 `<b>` 元素不受影响）。

```css
p { color: red }   /* 仅选中所有 <p> 段落元素 / Selects only all <p> paragraph elements */
```

> 💡 **类比**：元素选择器就像只叫某个职位的人起立——"所有老师请站起来"，其他人不受影响。

---
> [!PDF|yellow] [[04 CSS.pdf#page=15&selection=0,0,6,1&color=yellow|04 CSS, p.15]]
> > #### Attribute selector: [attribute=value]
> 
> 
### **Page 15: Attribute Selector `[attribute=value]` – 属性选择器**

An attribute selector matches any element that has a given attribute with the specified value. 属性选择器匹配拥有**指定属性且属性值符合**的任意元素。

The value may be omitted to select elements with that attribute set to **any** value. 属性值可省略，从而选中所有**拥有该属性**（无论值为何）的元素。

For example, matching on `[title="The first heading"]` results in only the `<h1>` element being highlighted, because it is the only element with `title="The first heading"`. 例如，`[title="The first heading"]` 仅高亮 `<h1>` 元素，因为它是唯一拥有该 `title` 值的元素。

```css
[title="The first heading"] { color: red }
/* 仅选中 title 属性值为 "The first heading" 的元素 */
/* Selects only the element whose title attribute equals "The first heading" */
```

> 💡 **类比**：属性选择器像是凭特定证件（如学生证号）进场——只有持有该证件的人才被选中。

---
> [!PDF|yellow] [[04 CSS.pdf#page=16&selection=0,0,4,6&color=yellow|04 CSS, p.16]]
> > #### Class selector: .class

### **Page 16: Class Selector `.class` – 类选择器**

Class selectors allow the **grouping** of a set of elements (that may not even use the same tag). 类选择器允许将一组元素（甚至可以使用不同的标签）**归组**到同一样式下。

The class is set using the special `class` attribute in HTML. 类名通过 HTML 中的特殊 `class` 属性来指定。

For example, matching on `.important` results in both `<p class="important">` and `<h2 class="important">` being highlighted — two different element types, same class name. 例如，`.important` 会同时高亮 `<p class="important">` 和 `<h2 class="important">`——两种不同的元素类型，但共享同一类名。

```css
.important { color: red }
/* 选中所有 class="important" 的元素，不论其标签类型 */
/* Selects all elements with class="important", regardless of their tag type */
```

> 💡 **类比**：类选择器像给一组人戴上相同颜色的帽子——不管他们是老师还是学生，只要戴了红帽子，就都被选中。

---

> [!PDF|yellow] [[04 CSS.pdf#page=17&selection=0,0,4,6&color=yellow|04 CSS, p.17]]
> #### Id selector: #id
 
### **Page 17: ID Selector `#id` – ID 选择器**

An ID selector selects the element with the special `id` attribute. ID 选择器选中拥有特定 `id` 属性的元素。

Unlike class where each value can occur on many tags, **each `id` value must only occur on a single tag** in the document — e.g., so they can be referenced in the URL and used for navigation. 与 class 不同，**每个 `id` 值在文档中只能出现在一个标签上**——例如，用于 URL 锚点导航（`#heading1`）。

Matching on `#heading1` results in only the `<h2 id="heading1">` element being highlighted. 匹配 `#heading1` 仅高亮 `<h2 id="heading1">` 这一个元素。

```css
#heading1 { color: red }
/* 仅选中 id="heading1" 的唯一元素 */
/* Selects the single element with id="heading1" */
```

> 💡 **类比**：ID 选择器像身份证号——全国唯一，精准定位一个人。 Class 像职业标签——同一职业可有多人。

---
> [!PDF|yellow] [[04 CSS.pdf#page=18&selection=0,0,4,6&color=yellow|04 CSS, p.18]]
> Pseudo-class selector: :state
### **Page 18: Pseudo-class Selector `:state` – 伪类选择器**

Pseudo-class selectors allow selecting elements based on their **state** (e.g., `hover`, `focus`, `valid`, `visited`). 伪类选择器允许根据元素的**状态**进行选择（如悬停、聚焦、验证通过、已访问等）。

For example, matching on `p:hover` results in paragraph elements being highlighted **when you hover over them** — this is a dynamic, interactive style. 例如，`p:hover` 会在鼠标**悬停于段落元素上时**将其高亮——这是一种动态交互样式。

```css
p:hover { color: red }
/* 当鼠标悬停在 <p> 元素上时，该元素变红 */
/* When the mouse hovers over a <p> element, it turns red */
```

**常见伪类 Common pseudo-classes：**

- `:hover` — 鼠标悬停 / mouse hover
- `:focus` — 元素获得焦点 / element is focused
- `:valid` — 表单验证通过 / form input is valid
- `:visited` — 链接已访问 / link has been visited

> 💡 **类比**：伪类选择器像是"当XXX状态发生时才触发"的条件规则——就像"当灯被触摸时才亮"。

---
> [!PDF|yellow] [[04 CSS.pdf#page=19&selection=0,0,4,6&color=yellow|04 CSS, p.19]]
> #### Pseudo-element selector: ::pseudo-element
### **Page 19: Pseudo-element Selector `::pseudo-element` – 伪元素选择器**

Pseudo-element selectors allow you to style a **specific part** of an element (e.g., `first-line`, `first-letter`, `backdrop`). 伪元素选择器允许对元素的**特定部分**设置样式（如首行、首字母、背景遮罩等）。

For example, matching on `p::first-letter` results in **the first letter of each paragraph element** being highlighted. 例如，`p::first-letter` 会将**每个段落元素的首字母**高亮显示。

```css
p::first-letter { color: red }
/* 仅将每个 <p> 元素的第一个字母变红 */
/* Only turns the very first letter of each <p> element red */
```


---

**伪类 vs 伪元素 Pseudo-class vs Pseudo-element**

| 对比项 | 伪类 Pseudo-class              | 伪元素 Pseudo-element              |
| --- | ---------------------------- | ------------------------------- |
| 针对  | 元素的**状态** element state      | 元素的**部分内容** element part        |
| 语法  | 单冒号 `:hover`                 | 双冒号 `::first-letter`            |
| 示例  | `:hover` `:focus` `:visited` | `::first-letter` `::first-line` |

> [!tip] 类比 Analogy 伪元素就像只给一篇文章的**第一个字母**印成红色——它不是整个元素，而是元素内部的一个"虚拟子元素"。 Pseudo-elements target a **virtual part** inside an element, not the element as a whole.


---

## **Page 20--Page 24: Combinator Selectors – 组合选择器**
> [!PDF|yellow] [[04 CSS.pdf#page=20&selection=0,0,2,6&color=yellow|04 CSS, p.20]]
> > #### Group selector: s1, s2


### **Page 20: Group Selector `s1, s2` – 分组选择器**

The group selector `s1, s2` acts as a **logical OR**, applying the style to elements that match **either** `s1` or `s2`. 分组选择器 `s1, s2` 相当于逻辑**"或"**，将样式应用于匹配 `s1` **或** `s2` 的所有元素。

For example, matching on `h2, b` results in both **all level-2 headings** and **all bold text** being selected simultaneously. 例如，`h2, b` 会同时选中**所有二级标题**和**所有加粗文本**。

```css
h2, b { color: red }
/* 选中所有 <h2> 元素 和 所有 <b> 元素（逻辑或） */
/* Selects all <h2> AND all <b> elements (logical OR) */
```

从 DOM 树来看，被选中的节点为：两个 `<h2>` + 三个 `<b>`，共5个节点。 From the DOM tree, the selected nodes are: two `<h2>` + three `<b>` = 5 nodes total.

> 💡 **类比**：分组选择器就像同时发邮件给"部门A"和"部门B"的所有人——两组都会收到。

---

> [!PDF|yellow] [[04 CSS.pdf#page=21&selection=0,0,2,5&color=yellow|04 CSS, p.21]]
> > #### Descendent selector: s1 s2
> 
> 

### **Page 21: Descendant Selector `s1 s2` – 后代选择器**

The descendant selector `s1 s2` selects anything that matches `s2` that is **below** something that matches `s1` in the DOM tree (at **any depth**). 后代选择器 `s1 s2` 选中 DOM 树中位于匹配 `s1` 的元素**之下任意层级**且匹配 `s2` 的所有元素。

For example, matching on `p b` results in every `<b>` element **below a `<p>` element** being selected — this includes the `<b>` directly inside `<p>` AND the `<b>` nested inside `<span>` inside `<p>`. 例如，`p b` 会选中所有**位于 `<p>` 内部的 `<b>` 元素**——包括直接在 `<p>` 下的 `<b>`，也包括嵌套在 `<span>` 里的 `<b>`。

```css
p b { color: red }
/* 选中所有作为 <p> 后代（任意深度）的 <b> 元素 */
/* Selects all <b> elements that are descendants (at any depth) of a <p> */
```

从 DOM 树分析：

- `<p> → <b>` ✅ 直接子节点，选中
- `<p> → <span> → <b>` ✅ 间接后代，也选中
- `<h2>` 内没有 `<b>`，不受影响

> 💡 **类比**：后代选择器就像查找"某人的所有后代（子、孙、曾孙……）"——不管隔几代都算。

---
> [!PDF|yellow] [[04 CSS.pdf#page=22&selection=0,0,2,5&color=yellow|04 CSS, p.22]]
> > #### Direct descendent selector: s1>s2
> 
> 
### **Page 22: Direct Descendant Selector `s1 > s2` – 直接后代选择器**

The direct descendant selector `s1 > s2` selects anything that matches `s2` that is **directly below** (i.e., an immediate child of) something that matches `s1`. 直接后代选择器 `s1 > s2` 仅选中**直接位于**匹配 `s1` 的元素之下（即直接子元素）且匹配 `s2` 的元素。

For example, matching on `p > b` results in every `<b>` element that is a **direct child** of a `<p>` being selected — the `<b>` nested inside `<span>` is **NOT** selected because it is not a direct child of `<p>`. 例如，`p > b` 仅选中**直接**位于 `<p>` 下的 `<b>`——嵌套在 `<span>` 内的 `<b>` **不会被选中**，因为它不是 `<p>` 的直接子元素。

```css
p > b { color: red }
/* 仅选中直接位于 <p> 之下的 <b>（不包括嵌套更深的 <b>） */
/* Only selects <b> elements that are DIRECT children of <p> (not deeper nested ones) */
```

**后代 vs 直接后代对比：**

```
<p>                    ← 匹配 s1
  <b>bold</b>          ← p b ✅  p > b ✅  (直接子元素 direct child)
  <span>
    <b>bold</b>        ← p b ✅  p > b ❌  (非直接，隔了 span / not direct, span is in between)
  </span>
</p>
```

> 💡 **类比**：`s1 s2` 是"所有后代"，`s1 > s2` 是"亲生子女"——只找第一代，不找孙辈。

---
> [!PDF|yellow] [[04 CSS.pdf#page=23&selection=0,0,2,5&color=yellow|04 CSS, p.23]]
> > #### Sibling selector: s1~S2
> 
> 
### **Page 23: Sibling Selector `s1 ~ s2` – 兄弟选择器**


The sibling selector `s1 ~ s2` selects anything that matches `s2` that **shares a parent** with something that matches `s1` in the DOM tree (i.e., all following siblings). 兄弟选择器 `s1 ~ s2` 选中与匹配 `s1` 的元素**共享同一父元素**且匹配 `s2` 的所有元素（即所有后续兄弟）。

For example, matching on `h1 ~ h2` results in every `<h2>` element that is to the **right of (following)** an `<h1>` element being selected. Both `<h2>Heading 2.a</h2>` and `<h2>Heading 2.b</h2>` are selected. 例如，`h1 ~ h2` 会选中所有位于 `<h1>` **之后**且与之同级的 `<h2>` 元素。`Heading 2.a` 和 `Heading 2.b` 均被选中。

```css
h1 ~ h2 { color: red }
/* 选中所有与 <h1> 共享父元素且位于其之后的 <h2> 兄弟元素 */
/* Selects all <h2> elements that are siblings of and come AFTER an <h1> */
```

从 DOM 树（body 的直接子元素顺序）： `h1` → `h2(2.a)` → `p` → `p` → `h2(2.b)` → `p`

- `h2(2.a)` ✅（`h1` 之后的兄弟）
- `h2(2.b)` ✅（`h1` 之后的兄弟）

> 💡 **类比**：兄弟选择器像找"排在我后面的所有同班同学（兄弟）"——只要在我后面、同班就算。

---
> [!PDF|yellow] [[04 CSS.pdf#page=24&selection=0,0,2,5&color=yellow|04 CSS, p.24]]
> > #### Direct sibling selector: s1+s2
> 
> 
### **Page 24: Direct Sibling Selector `s1 + s2` – 相邻兄弟选择器**

The direct sibling selector `s1 + s2` selects anything that matches `s2` that is the **next child along** (immediately following sibling) of something that matches `s1`. 相邻兄弟选择器 `s1 + s2` 仅选中紧跟在匹配 `s1` 的元素之后、**紧邻的下一个兄弟**且匹配 `s2` 的元素。

For example, matching on `h1 + h2` results in every `<h2>` element that is **directly to the right of** an `<h1>` being selected. Only `<h2>Heading 2.a</h2>` is selected (as it immediately follows `<h1>`), but `<h2>Heading 2.b</h2>` is **NOT** selected. 例如，`h1 + h2` 仅选中**紧接在** `<h1>` 之后的 `<h2>`。只有 `Heading 2.a` 被选中，`Heading 2.b` **不被选中**（因为它不紧邻 `<h1>`）。

```css
h1 + h2 { color: red }
/* 仅选中紧接在 <h1> 之后的那一个 <h2> 兄弟元素 */
/* Selects only the single <h2> element immediately following an <h1> */
```

**兄弟 vs 相邻兄弟对比：**

```
body
├── h1           ← s1 匹配
├── h2 (2.a)     ← h1~h2 ✅  h1+h2 ✅  (紧邻下一个/immediately next)
├── p
├── p
├── h2 (2.b)     ← h1~h2 ✅  h1+h2 ❌  (不紧邻/not immediately next)
└── p
```

> 💡 **类比**：`s1 ~ s2` 是"我后面所有的兄弟"，`s1 + s2` 是"我后面紧挨着的那个兄弟"——只找最近的一个。

---

## **Page 25--Page 28: Conflict Resolution – 冲突解析**
> [!PDF|yellow] [[04 CSS.pdf#page=25&selection=0,0,2,5&color=yellow|04 CSS, p.25]]
> > #### Conflict resolution

### **Page 25: Why Conflicts Occur – 冲突产生的原因**

An element may be the subject of more than one rule because: 一个元素可能同时受多条规则作用，原因如下：

1. A tag may be used twice as a selector. 同一标签可能被多条规则同时用作选择器。
2. A tag may inherit a property and be used as a selector. 标签可能继承了某个属性，同时又直接被选择器指定。

This is often unavoidable as your page will invariably contain **multiple style sheets** with conflicting definitions: 这往往不可避免，因为页面通常包含**多个样式表**，其中存在冲突的定义：

- **User style sheets:** Style sheets written by the user via browser settings. **用户样式表**：由用户通过浏览器设置编写的样式表。
- **Author style sheets:** Style sheets used by the developer. **作者样式表**：由开发者编写的样式表。
- **User agent style sheets:** Default style sheets provided by the browser. **用户代理样式表**：由浏览器提供的默认样式表。

CSS priority can be overridden by the **`!important`** modifier. CSS 优先级可通过 **`!important`** 修饰符手动覆盖。

---
> [!PDF|yellow] [[04 CSS.pdf#page=26&selection=0,0,2,5&color=yellow|04 CSS, p.26]]
> > #### (Simplified) precedence rules


### **Page 26: (Simplified) Precedence Rules – （简化）优先级规则**

When conflicts occur, CSS applies the following three-step resolution process: 当冲突发生时，CSS 按以下三步流程进行解析：

**Step 1 – 按来源与重要性排序（由高到低）：**

|Priority 优先级|Declaration Type 声明类型|
|---|---|
|最高 Highest|Transition declarations（动画过渡声明，本课不涉及）|
|↑|Important user agent declarations（重要用户代理声明）|
|↑|Important user declarations（重要用户声明）|
|↑|**Important author declarations（重要作者声明）**|
|↓|**Normal author declarations（普通作者声明）**|
|↓|Normal user declarations（普通用户声明）|
|最低 Lowest|Normal user agent declarations（普通用户代理声明）|

**Step 2 – 若仍平局，按特异性（Specificity）判断：**

$$\text{Specificity} : \text{Inline} > \text{ID selectors} > \text{Class/Attribute/Pseudo-class} > \text{Type/Pseudo-element}$$

- Inline styles > style sheet styles. 内联样式 > 样式表样式。
- Number of IDs in selector（ID 选择器数量）
- Number of classes, attributes and pseudo-classes in selector（类、属性、伪类选择器数量）
- Number of type and pseudo-elements in selector（类型、伪元素选择器数量）

**Step 3 – 若仍平局，选最后出现的规则：**

If still tied, then choose whichever selector **appears last** in the stylesheet. 若仍平局，则选取样式表中**位置靠后**的规则。

> 📎 完整规则参见官方文档：[https://www.w3.org/TR/css-cascade-3/](https://www.w3.org/TR/css-cascade-3/)

> 💡 **类比**：冲突解析就像裁判规则——先看"级别"（来源），再看"精准度"（特异性），最后看"谁说在后"（顺序）。

---
> [!PDF|yellow] [[04 CSS.pdf#page=27&selection=0,0,2,5&color=yellow|04 CSS, p.27]]
> > #### Conflict resolution ( IDs vs. Classes vs. Elements 

### **Page 27: Conflict Resolution Example – IDs vs. Classes vs. Elements**

This page demonstrates specificity with a concrete example. 本页通过具体示例演示特异性的优先级。

```html
<!DOCTYPE html>
<head>
  <title>Conflict Resolution</title>
  <style>
    p {                       /* 元素选择器 / Element selector — 最低优先级 lowest specificity */
      color: yellow;
    }
    #para {                   /* ID 选择器 / ID selector — 最高优先级 highest specificity */
      color: pink;
    }
    .paragraph {              /* 类选择器 / Class selector — 中等优先级 medium specificity */
      color: red;
    }
  </style>
</head>
<body>
  <p id="para" class="paragraph">  <!-- 同时匹配三条规则 / Matches all three rules -->
    Hello World!
  </p>
</body>
</html>
```

The `<p>` element matches all three rules simultaneously. The result is: 该 `<p>` 元素同时匹配三条规则。最终结果为：

| Selector 选择器 | Color 颜色 | Specificity 特异性 | 胜出？           |
| ------------ | -------- | --------------- | ------------- |
| `p`          | yellow   | 最低 lowest       | ❌             |
| `.paragraph` | red      | 中等 medium       | ❌             |
| `#para`      | **pink** | **最高 highest**  | ✅ **胜出 wins** |
|              |          |                 |               |

**Result 结果**："Hello World!" renders in **pink** color. **结果**："Hello World!" 最终显示为**粉色（pink）**。

---
> [!PDF|yellow] [[04 CSS.pdf#page=28&selection=0,0,2,5&color=yellow|04 CSS, p.28]]
> > #### Conflict resolution ( Inline vs. !Important)


### **Page 28: Conflict Resolution Example – Inline vs. `!important`**

This page demonstrates how `!important` overrides even inline styles. 本页演示 `!important` 如何覆盖甚至内联样式。

```html
<!DOCTYPE html>
<head>
  <title>Conflict Resolution</title>
  <style>
    p {
      color: yellow !important;   /* !important 声明 / !important declaration */
    }
    #para {
      color: pink;                /* 普通 ID 选择器 / Normal ID selector */
    }
    .paragraph
```



> [!PDF|yellow] [[04 CSS.pdf#page=29&selection=0,0,0,15&color=yellow|04 CSS, p.29]]
> > # CSS properties

# **CSS Properties – CSS 属性｜Page 29 -- Page 34**

---

## **Page 29: CSS Properties – CSS 属性（章节封面）**

This page is the section title slide for "CSS Properties." 本页是"CSS 属性"章节的封面幻灯片。

> 💡 **类比 Analogy：** 如果说 CSS 选择器是"找到谁"，那么 CSS 属性就是"对他们做什么"——属性决定了被选中元素的外观与排列方式。 If CSS selectors answer "who to style", then CSS properties answer "how to style them" — properties determine the visual appearance and layout of selected elements.

---

## **Page 30--Page 34: CSS Property Groups & Core Properties – CSS 属性分组与核心属性**

> [!PDF|yellow] [[04 CSS.pdf#page=30&selection=0,0,2,5&color=yellow|04 CSS, p.30]]
> > #### Property groups



### **Page 30: Property Groups – 属性分组**

There are many, many CSS properties and the list is continually growing. CSS 属性数量非常多，且这份列表还在持续增长。

### 📋 完整 CSS 属性分组总览表

|基础与排版 (Group 1)|布局与动态 (Group 2)|高级与特殊效果 (Group 3)|
|:--|:--|:--|
|Color 颜色|Table 表格|Paged Media 分页媒体|
|Background and Borders 背景与边框|Lists and Counters 列表与计数器|Generated Content 生成内容|
|Basic Box 基础盒模型|Animation 动画|Filter Effects 滤镜效果|
|Flexible Box 弹性盒|Transform 变形|Image/Replaced Content 图像/替换内容|
|Text 文本|Transition 过渡|Masking 遮罩|
|Text Decoration 文字装饰|Basic User Interface 基础用户界面|Speech 语音|
|Fonts 字体|Multi-column 多列|Marquee 滚动字幕|
|Writing Modes 书写模式|||

_(提示：我为你补充了三个表头名称，这样在 Obsidian 中表格结构会更清晰。如果不喜欢表头，也可以改成简单的“分类 1”、“分类 2”、“分类 3”。)_

放进 Obsidian 看看效果如何？如果还有其他排版乱掉的地方，随时发给我帮你调整！


The basic ones we will cover are: 本课程将重点讲解的基础属性分组为：

|将讲解的属性组 Groups Covered|对应内容|
|---|---|
|`text`|文本样式 Text styling|
|`background`|背景 Background|
|`borders`|边框 Borders|
|`the box model`|盒模型 Box model|
|`colors`|颜色 Colors|
|`tables`|表格 Tables|
|`lists`|列表 Lists|

> 💡 **类比**：CSS 属性分组就像工具箱中的不同抽屉——字体抽屉、颜色抽屉、布局抽屉……每个抽屉里装着一类专用工具。 CSS property groups are like different drawers in a toolbox — each drawer holds a specific type of tool for a specific styling purpose.

---
> [!PDF|yellow] [[04 CSS.pdf#page=31&selection=0,0,2,5&color=yellow|04 CSS, p.31]]
> > #### Font properties


### **Page 31: Font Properties – 字体属性**

The following properties control the font and text styling of an element. 以下属性用于控制元素的字体与文本样式。

**`font-size` – 字体大小**

`font-size` values: a number or a name, such as `smaller`, `xx-large`, etc. `font-size` 的值：数值或名称，如 `smaller`、`xx-large` 等。

```css
p { font-size: 14pt; }        /* 使用数值设置字体大小 / Set font size using a number */
p { font-size: xx-large; }    /* 使用名称设置字体大小 / Set font size using a name */
p { font-size: smaller; }     /* 相对当前字体缩小 / Smaller relative to current size */
```

**`font-style` – 字体样式**

`font-style` values: `italic`, `normal`. `font-style` 的值：`italic`（斜体）、`normal`（正常）。

```css
p { font-style: italic; }     /* 斜体 / Italic style */
p { font-style: normal; }     /* 正常 / Normal style */
```

**`font-weight` – 字体粗细（加粗程度）**

`font-weight` specifies degrees of boldness. `font-weight` 指定字体的加粗程度。

- Can specify as one of: `bolder`, `lighter`, `bold`, `normal`. 可使用关键字之一：`bolder`、`lighter`、`bold`、`normal`。
- Can specify as a multiple of 100 (100 – 900). 可使用100的倍数（100–900）来指定。

```css
p { font-weight: bold; }      /* 关键字加粗 / Bold using keyword */
p { font-weight: 700; }       /* 数值加粗（等同于 bold）/ Bold using number (equivalent to bold) */
p { font-weight: 100; }       /* 最细 / Thinnest weight */
p { font-weight: 900; }       /* 最粗 / Heaviest weight */
```

**`font` – 字体简写属性（Shorthand）**

`font` is for specifying a list of font properties at the same time. `font` 用于同时指定多个字体属性。

The order **must** be: style, weight, size, name(s). 顺序**必须**为：样式（style）、粗细（weight）、大小（size）、字体名称（name）。

```css
p { font: bolder 14pt Arial Helvetica; }
/* 同时设置：粗细=bolder，大小=14pt，字体=Arial 和 Helvetica */
/* Sets: weight=bolder, size=14pt, font-family=Arial then Helvetica as fallback */
```

> ⚠️ **注意 Note：** `font` 简写属性中，顺序不能颠倒，否则属性将失效或解析错误。 The order in the `font` shorthand cannot be reversed, otherwise the property will be invalid or parsed incorrectly.

**`text-decoration` – 文字装饰**

`text-decoration` values: `line-through`, `overline`, `underline`, `none`. `text-decoration` 的值：`line-through`（删除线）、`overline`（上划线）、`underline`（下划线）、`none`（无装饰）。

```css
p { text-decoration: underline; }     /* 下划线 / Underline */
p { text-decoration: line-through; }  /* 删除线 / Strikethrough */
p { text-decoration: overline; }      /* 上划线 / Overline */
p { text-decoration: none; }          /* 移除所有装饰（如去除链接默认下划线）/ Remove all decoration */
```

**`letter-spacing` – 字母间距**

`letter-spacing` values: any number. `letter-spacing` 的值：任意数值。

```css
p { letter-spacing: 5px; }    /* 增大字母间距 / Increase space between letters */
p { letter-spacing: -1px; }   /* 减小字母间距 / Decrease space between letters */
```

> 💡 **字体属性速查表 Font Property Quick Reference：**

|属性 Property|可选值 Values|说明 Description|
|---|---|---|
|`font-size`|number / `smaller` / `xx-large` 等|字体大小 Font size|
|`font-style`|`italic` / `normal`|是否斜体 Italic or normal|
|`font-weight`|`bold` / `bolder` / `lighter` / `normal` / 100–900|粗细程度 Boldness|
|`font`|style weight size name(s)|简写（顺序固定）Shorthand (fixed order)|
|`text-decoration`|`underline` / `overline` / `line-through` / `none`|文字装饰线 Text decoration|
|`letter-spacing`|任意数值 any number|字母间距 Letter spacing|

---
> [!PDF|yellow] [[04 CSS.pdf#page=32&selection=0,0,2,5&color=yellow|04 CSS, p.32]]
> > #### Text alignment


### **Page 32: Text Alignment – 文本对齐**

**`text-indent` – 文本首行缩进**

The `text-indent` property allows indentation. `text-indent` 属性用于设置文本首行缩进。

It takes either a length or a `%` value. 它接受长度值或百分比值（`%`）。

```css
p { text-indent: 20px; }    /* 固定长度缩进 / Fixed length indentation */
p { text-indent: 5%; }      /* 百分比缩进（相对于父元素宽度）/ Percentage indentation (relative to parent width) */
```

**`text-align` – 文本水平对齐**

The `text-align` property has 4 possible values. `text-align` 属性有4个可选值。

|值 Value|含义 Meaning|
|---|---|
|`left`|左对齐（**默认值** default）|
|`center`|居中对齐|
|`right`|右对齐|
|`justify`|两端对齐（分散对齐）|

```css
p { text-align: left; }      /* 左对齐（默认）/ Left-aligned (default) */
p { text-align: center; }    /* 居中对齐 / Center-aligned */
p { text-align: right; }     /* 右对齐 / Right-aligned */
p { text-align: justify; }   /* 两端对齐 / Justified */
```

**`float` – 浮动（文本环绕）**

Sometimes we want text to flow around another element — the `float` property. 有时我们希望文本环绕另一个元素排列，此时使用 `float` 属性。

The `float` property has the possible values: `left`, `right`, and `none` (the default). `float` 属性的可选值为：`left`、`right`、`none`（默认值）。

If we have an element we want on the right, with text flowing on its left, we use the default `text-align` value (`left`) for the text and the `right` value for `float` on the element we want on the right. 如果我们想让某元素（如图片）靠右，同时文字从左侧流动，则对文字使用默认的 `text-align: left`，对图片使用 `float: right`。

**讲义中给出的代码示例 Code Example from PDF (Page 32)：**

```html
<!-- 图片浮动到右侧，文字从左侧自动环绕 -->
<!-- Image floats to the right; text automatically wraps on its left -->
<img src="c210.jpg" style="float: right"/>
<!-- Some text with the default alignment - left -->
<!-- 文本使用默认的左对齐 -->
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

> 💡 **类比**：`float: right` 就像把一幅画挂到墙的右边，文字会自动绕着它的左侧排列，而不会被它遮挡。 `float: right` is like hanging a picture on the right side of a wall — text automatically wraps around its left side without being covered.

---
> [!PDF|yellow] [[04 CSS.pdf#page=33&selection=0,0,2,5&color=yellow|04 CSS, p.33]]
> > #### List properties


### **Page 33: List Properties – 列表属性**

The `list-style-type` property sets the **marker type** used for `<li>` elements. `list-style-type` 属性设置 `<li>` 元素所使用的**标记类型**（列表项前的符号）。

**作用范围 Scope of Application：**

- When set on the `<ul>`/`<ol>` element, the style applies to **all `<li>` elements** in the list. 当设置在 `<ul>`/`<ol>` 元素上时，样式应用于列表中的**所有 `<li>` 元素**。
- When set on the individual `<li>` element, it applies **only to that element**. 当设置在单个 `<li>` 元素上时，样式**仅应用于该元素**。

**可选值 Possible Values：**

|列表类型 List Type|可选值 Values|
|---|---|
|无序列表 Unordered list `<ul>`|`disc`（实心圆，默认）, `square`（方块）, `circle`（空心圆）, `none` 等|
|有序列表 Ordered list `<ol>`|`decimal`（数字1,2,3）, `upper-alpha`（大写字母A,B,C）, `upper-roman`（大写罗马数字I,II,III）等|

**讲义完整代码示例 Full Code Example from PDF (Page 33)：**

```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Some of my favourite things</h3>            <!-- 标题 / Heading -->

    <ul style="list-style-type: square">             <!-- 无序列表，方块标记 / Unordered list with square markers -->
      <li>Raindrops on roses</li>                    <!-- 继承 ul 的 square 样式 / Inherits square from ul -->
      <li>Whiskers on kittens</li>                   <!-- 继承 ul 的 square 样式 / Inherits square from ul -->
      <li>Bright copper kettles</li>                 <!-- 继承 ul 的 square 样式 / Inherits square from ul -->
    </ul>

    <ol>                                             <!-- 有序列表 / Ordered list -->
      <li style="list-style-type: upper-alpha">      <!-- 单独设置为大写字母标记 / Individual item: upper-alpha -->
        Warm woolen mittens
      </li>
      <li style="list-style-type: upper-roman">      <!-- 单独设置为大写罗马数字标记 / Individual item: upper-roman -->
        Brown paper packages
      </li>
    </ol>
  </body>
</html>
```

**对应的渲染效果 Rendered Output（来自 PDF Page 33）：**

```
Some of my favourite things

■ Raindrops on roses          ← square 方块标记
■ Whiskers on kittens         ← square 方块标记
■ Bright copper kettles       ← square 方块标记

A. Warm woolen mittens        ← upper-alpha 大写字母
II. Brown paper packages      ← upper-roman 大写罗马数字
```

> 💡 **类比**：`list-style-type` 就像给书的目录决定使用"实心圆点"、"方块"还是"罗马数字"作为章节标记。 `list-style-type` is like choosing whether your book's table of contents uses bullets, squares, or Roman numerals as chapter markers.

---
> [!PDF|yellow] [[04 CSS.pdf#page=34&selection=0,0,2,5&color=yellow|04 CSS, p.34]]
> > #### Colours


### **Page 34: Colours – 颜色**

The `color` property specifies the **foreground colour** of an element. `color` 属性指定元素的**前景色**（文字颜色）。

There are three colour collections: 有三种颜色指定方式：

**Collection 1 – 16种保证颜色（16 Guaranteed Colours）**

There is a set of **16 colours** that are guaranteed to be displayable by all graphical browsers on all colour monitors. 存在一组 **16 种颜色**，可保证在所有图形浏览器和所有彩色显示器上正常显示。

|颜色示例 16 Guaranteed Colours|
|---|
|`black`, `silver`, `gray`, `white`, `maroon`, `red`, `purple`, `fuchsia`|
|`green`, `lime`, `olive`, `yellow`, `navy`, `blue`, `teal`, `aqua`|

```css
p { color: red; }       /* 使用16种保证颜色之一 / Using one of the 16 guaranteed colours */
p { color: navy; }      /* 深蓝色 / Navy blue */
```

**Collection 2 – 140种命名颜色（140 Named Colours）**

There is a much larger set of **140 named colours** supported by all major browsers. 所有主流浏览器支持更大的一组 **140 种命名颜色**。

参考网站 Reference website: 🔗 `https://www.w3schools.com/cssref/css_colors.php`

```css
p { color: tomato; }       /* 140种命名颜色之一 / One of the 140 named colours */
p { color: cornflowerblue; } /* 矢车菊蓝 / Cornflower blue */
```

**Collection 3 – 1600万种十六进制颜色（16 Million Hex Colours）**

Any one of **16 million different colours**, specified in hexadecimal notation. 使用十六进制表示法指定的任意一种**1600万种颜色**之一。

The range is:
`#000000`, `#000001`, `#000002`, ..., `#FFFFFE`, `#FFFFFF`

格式说明：`#RRGGBB`，其中 `RR`、`GG`、`BB` 分别为红、绿、蓝通道的十六进制值（00–FF）。 Format: `#RRGGBB`, where `RR`, `GG`, `BB` are the red, green, blue channel values in hex (00–FF).

```css
p { color: #000000; }     /* 纯黑色 / Pure black (R=0, G=0, B=0) */
p { color: #FFFFFF; }     /* 纯白色 / Pure white (R=255, G=255, B=255) */
p { color: #FF0000; }     /* 纯红色 / Pure red  (R=255, G=0, B=0) */
p { color: #0000FF; }     /* 纯蓝色 / Pure blue (R=0, G=0, B=255) */
p { color: #1A2B3C; }     /* 自定义颜色 / Custom colour */
```

**三种颜色方式对比总结：**

|方式 Method|颜色数量 Count|示例 Example|参考 Reference|
|---|---|---|---|
|16 guaranteed colours 保证颜色|16|`red`, `blue`, `black`|所有浏览器均支持|
|140 named colours 命名颜色|140|`tomato`, `cornflowerblue`|主流浏览器支持 / `w3schools.com`|
|Hexadecimal hex 十六进制|16,777,216|`#FF5733`, `#1A2B3C`|精确控制任意颜色|

> 💡 **类比**：三种颜色方式就像画颜料的选择——16色是基础装（保证能用），140色是标准套装（满足大部分需求），而十六进制是专业调色板（可以调出任意颜色）。 The three colour methods are like paint sets: 16 guaranteed is the basic set, 140 named colours is the standard set, and hex codes are the professional palette — giving you any of 16 million exact colours.

---

### Summary 总结

- **Page 29 is the section title slide.** It marks the start of the "CSS Properties" section. **第29页为章节封面页。** 标志着"CSS 属性"章节的开始。（Page 29）
    
- **CSS property groups are numerous and growing.** The full list includes Color, Background and Borders, Basic Box, Flexible Box, Text, Text Decoration, Fonts, Animation, Transform, Transition, Table, Lists and Counters, Multi-column, Writing Modes, and many more. **CSS 属性分组数量众多且持续增长。** 完整列表涵盖颜色、背景与边框、基础盒模型、弹性盒、文本、文字装饰、字体、动画、变形、过渡、表格、列表与计数器、多列、书写模式等。（Page 30）
    
- **The course focuses on 7 core groups:** text, background, borders, the box model, colors, tables, and lists. **本课程聚焦7个核心属性组：** 文本、背景、边框、盒模型、颜色、表格、列表。（Page 30）
    
- **Font properties** include `font-size` (number or name), `font-style` (`italic`/`normal`), `font-weight` (keyword or 100–900), `font` (shorthand with fixed order: style → weight → size → name), `text-decoration` (`underline`/`overline`/`line-through`/`none`), and `letter-spacing` (any number). **字体属性**包括 `font-size`（数值或名称）、`font-style`（斜体/正常）、`font-weight`（关键字或100–900）、`font`（简写属性，顺序固定：样式→粗细→大小→名称）、`text-decoration`（下划线/上划线/删除线/无）和 `letter-spacing`（任意数值）。（Page 31）
    
- **Text alignment properties:** `text-indent` (length or `%`), `text-align` (`left`/`center`/`right`/`justify`), and `float` (`left`/`right`/`none`) for flowing text around elements. **文本对齐属性：** `text-indent`（长度或百分比）、`text-align`（左/居中/右/两端对齐）、`float`（左/右/无）用于使文本环绕元素排列。（Page 32）
    
- **List properties:** `list-style-type` controls the marker type for `<li>` elements; setting on `<ul>`/`<ol>` affects all items, while setting on individual `<li>` affects only that item. Unordered values: `disc`, `square`, `circle`, `none`; Ordered values: `decimal`, `upper-alpha`, `upper-roman`. **列表属性：** `list-style-type` 控制 `<li>` 的标记类型；设置于 `<ul>`/`<ol>` 则影响所有子项，设置于单个 `<li>` 则仅影响该项。无序列表值：`disc`、`square`、`circle`、`none`；有序列表值：`decimal`、`upper-alpha`、`upper-roman`。（Page 33）
    
- **Colour specification has three methods:** 16 guaranteed browser-safe colours (e.g., `red`, `blue`); 140 named colours supported by all major browsers (reference: `https://www.w3schools.com/cssref/css_colors.php`); and hexadecimal notation giving access to 16 million colours (`#000000` to `#FFFFFF`). **颜色指定有三种方式：** 16种保证颜色（如 `red`、`blue`）；所有主流浏览器支持的140种命名颜色（参考：`https://www.w3schools.com/cssref/css_colors.php`）；以及可访问1600万种颜色的十六进制表示法（`#000000` 至 `#FFFFFF`）。（Page 34）
    

---

## **🎯 Guided Learning – 引导性学习问题（Pages 29–34）**

**Q1（Page 30）** The lecture lists 7 core CSS property groups that will be covered. Name all 7 groups. Why do you think these particular groups were chosen as the "basics"? 讲义列出了将要讲解的7个核心 CSS 属性分组，请全部列出。你认为为什么这几组被选为"基础"？

> 💭 _Hint:_ Think about what every webpage fundamentally needs in terms of styling. 提示：思考每个网页在样式上最基本的需求是什么。

---

**Q2（Page 31）** When using the `font` shorthand property, the order of values is fixed. What is the correct order, and what happens if you write `font: 14pt bolder Arial` instead of `font: bolder 14pt Arial`? 使用 `font` 简写属性时，值的顺序是固定的。正确顺序是什么？如果写成 `font: 14pt bolder Arial` 而不是 `font: bolder 14pt Arial` 会怎样？

> 💭 _Hint:_ The order must be style, weight, size, name(s). What would the browser try to interpret `14pt` as if it comes first? 提示：顺序必须为样式、粗细、大小、名称。如果 `14pt` 放在第一位，浏览器会尝试将它解析为什么？

---

**Q3（Page 31）** What is the difference between `font-weight: bold` and `font-weight: 700`? And between `font-weight: bolder` and `font-weight: bold`? `font-weight: bold` 和 `font-weight: 700` 有什么区别？`font-weight: bolder` 和 `font-weight: bold` 又有什么区别？

> 💭 _Hint:_ `bold` = absolute value; `bolder` = relative to the inherited weight. 提示：`bold` 是绝对值；`bolder` 是相对于继承字重的相对值。

---

**Q4（Page 32）** You have an image and some text. You want the image to appear on the RIGHT side of the page, with the text flowing naturally on its LEFT. Write the minimal CSS/HTML needed to achieve this, based strictly on what Page 32 shows. 你有一张图片和一段文字，希望图片出现在页面右侧，文字自然地从图片左侧流动。请严格依据第32页的内容，写出实现这一效果所需的最简 CSS/HTML。

> 💭 _Hint:_ Look at the `float` example from the PDF: `<img src="c210.jpg" style="float: right"/>`. 提示：参考 PDF 中的 `float` 示例：`<img src="c210.jpg" style="float: right"/>`。

---

**Q5（Page 33）** Given the following HTML, what will the rendered list markers look like? Predict the output for each `<li>` item. 对于以下 HTML，渲染后的列表标记将是什么样子？请预测每个 `<li>` 的输出。

```html
<ul style="list-style-type: circle">
  <li>Item One</li>
  <li style="list-style-type: square">Item Two</li>
  <li>Item Three</li>
</ul>
```

> 💭 _Hint:_ Remember — styles set on `<ul>` apply to all items, but a style directly on a `<li>` overrides the parent's style for that item only. 提示：记住——设置在 `<ul>` 上的样式作用于所有子项，但直接设置在 `<li>` 上的样式仅覆盖该项。

---

**Q6（Page 34）** What colour will `color: #FF0000` produce? What about `#000000` and `#FFFFFF`? Explain the hexadecimal `#RRGGBB` format. `color: #FF0000` 会产生什么颜色？`#000000` 和 `#FFFFFF` 呢？请解释十六进制 `#RRGGBB` 格式的含义。

> 💭 _Hint:_ `FF` in hex = 255 in decimal (maximum). `00` = 0 (minimum). Think in terms of R, G, B channels. 提示：十六进制 `FF` = 十进制 255（最大值），`00` = 0（最小值）。从 R、G、B 三个通道的角度思考。

---

**Q7（Page 34）** The lecture mentions three ways to specify colour in CSS. Rank them from fewest to most colours available, and give one example of each. When would you prefer hexadecimal over a named colour? 讲义提到了三种 CSS 颜色指定方式。请按可用颜色数量从少到多排列，并各举一例。在什么情况下你会选择十六进制而不是命名颜色？

> 💭 _Hint:_ 16 colours → 140 colours → 16,777,216 colours. Named colours can't express every shade of a brand's specific colour. 提示：16种 → 140种 → 1600万种。命名颜色无法精确表达品牌特定颜色的每一种色调。




> [!PDF|yellow] [[04 CSS.pdf#page=35&selection=0,0,0,11&color=yellow|04 CSS, p.35]]
> > # CSS layout


# **CSS Layout – CSS 布局｜Page 35 -- Page 41**

---

## **Page 35: CSS Layout – CSS 布局（章节封面）**

This page is the section title slide for "CSS Layout." 本页是"CSS 布局"章节的封面幻灯片。

> 💡 **类比 Analogy：** 如果 CSS 属性是"给每件家具上色和装饰"，那么 CSS 布局就是"决定这些家具如何在房间里摆放"——位置、间距、层叠关系。 If CSS properties are about "painting and decorating each piece of furniture", then CSS layout is about "deciding how all the furniture is arranged in the room" — position, spacing, and stacking relationships.

---

## **Page 36--Page 38: The Box Model – 盒模型**

> [!PDF|yellow] [[04 CSS.pdf#page=36&selection=18,0,18,14&color=yellow|04 CSS, p.36]]
> > #### The Box model
> 
> 
### **Page 36: The Box Model – 盒模型（概述）**

Every element is essentially laid out as **four boxes**, which is known as the **box model**. 每个元素在本质上都被布局为**四个盒子**，这被称为**盒模型**。

It is used to control the spacing and borders around an element on the page. 盒模型用于控制页面上元素周围的间距和边框。

**盒模型四层结构示意图（从外到内）：**

```
┌─────────────────────────────────────┐
│               Margin                │  ← 外边距（透明）
│  ┌───────────────────────────────┐  │
│  │            Border             │  │  ← 边框
│  │  ┌─────────────────────────┐  │  │
│  │  │         Padding         │  │  │  ← 内边距（透明）
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │      Content      │  │  │  │  ← 内容区域
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

|层级 Layer|名称 Name|说明 Description|
|---|---|---|
|最内层 Innermost|**Content 内容**|实际元素被渲染的区域 Where the actual element is rendered|
|第二层|**Padding 内边距**|内容与边框之间的空间 Space between content and border|
|第三层|**Border 边框**|包围内边距和内容的边框线 The border surrounding padding and content|
|最外层 Outermost|**Margin 外边距**|元素边框与相邻元素之间的空间 Space between border and neighboring elements|

The content is where the actual element is rendered. 内容区域是实际元素被渲染的地方。

> 💡 **类比**：盒模型就像一幅装裱好的画——画本身是 Content（内容），画与画框之间的衬纸是 Padding（内边距），画框本身是 Border（边框），而画框与墙壁或其他画框之间的距离就是 Margin（外边距）。 The box model is like a framed picture: the picture itself = Content, the matting between picture and frame = Padding, the frame = Border, the gap between frames on the wall = Margin.

---
> [!PDF|yellow] [[04 CSS.pdf#page=37&selection=85,0,89,17&color=yellow|04 CSS, p.37]]
> > #### The Box model – margin and border


### **Page 37: The Box Model – Margin and Border – 盒模型 – 外边距与边框**

**Margin – 外边距**

The margin of an element is the space **between its border and its neighboring element**. 元素的外边距是其**边框与相邻元素之间**的空间。

The margin is always **transparent**, and its size can be set with `margin`, `margin-left`, `margin-top`, ... 外边距始终是**透明的**，其大小可通过 `margin`、`margin-left`、`margin-top` 等属性设置。

```css
p { margin: 20px; }             /* 四边均为20px外边距 / 20px margin on all four sides */
p { margin-left: 10px; }        /* 仅左侧外边距 / Left margin only */
p { margin-top: 15px; }         /* 仅上侧外边距 / Top margin only */
```

**Border – 边框**

The border of an element can be set using the following properties: 元素的边框可通过以下属性进行设置：

- **`border-style`**: `none` (default 默认), `dotted` (点线), `dashed` (虚线), etc. **`border-style`**：`none`（默认）、`dotted`（点线）、`dashed`（虚线）等。
    
- **`border-width`**: `thin`, `medium` (default 默认), `thick`, or a **length value in pixels**. **`border-width`**：`thin`（细）、`medium`（默认中等）、`thick`（粗），或**以像素为单位的长度值**。
    
- **`border-color`**: any colour. **`border-color`**：任意颜色。
    

```css
p {
  border-style: dashed;         /* 虚线边框 / Dashed border style */
  border-width: 2px;            /* 边框宽度2像素 / Border width of 2 pixels */
  border-color: blue;           /* 蓝色边框 / Blue border colour */
}
```

**边框属性速查表 Border Properties Quick Reference：**

|属性 Property|可选值 Values|默认值 Default|
|---|---|---|
|`border-style`|`none`, `dotted`, `dashed`, `solid`, etc.|`none`|
|`border-width`|`thin`, `medium`, `thick`, 或像素值 / or pixel value|`medium`|
|`border-color`|任意颜色 / any colour|—|

---
> [!PDF|yellow] [[04 CSS.pdf#page=37&selection=85,0,89,17&color=yellow|04 CSS, p.37]]
> > #### The Box model – margin and border
> 
> 
### **Page 38: The Box Model – Padding and Sizes – 盒模型 – 内边距与尺寸**

**Padding – 内边距**

The padding of an element is the space **between its border and its content**. 元素的内边距是其**边框与内容之间**的空间。

The padding is always **transparent**, and its size can be set with `padding`, `padding-left`, `padding-top`, … 内边距始终是**透明的**，其大小可通过 `padding`、`padding-left`、`padding-top` 等属性设置。

```css
p { padding: 10px; }            /* 四边均为10px内边距 / 10px padding on all four sides */
p { padding-left: 5px; }        /* 仅左侧内边距 / Left padding only */
p { padding-top: 8px; }         /* 仅上侧内边距 / Top padding only */
```

**Width & Height – 宽度与高度（尺寸计算规则）**

When you set the `width` and `height` properties of an element with CSS, you (normally) just set the **width and height of the content area**. 当你用 CSS 设置元素的 `width` 和 `height` 属性时，（通常）只是设置了**内容区域的宽度和高度**。

To calculate the **total width and height** of an element, you must also include the padding and borders. 要计算元素的**总宽度和总高度**，还必须加入内边距和边框。

The margin property also affects the **total space** that the box will take up on the page, but the margin is **not included** in the actual size of the box. The box's total width and height **stops at the border**. 外边距属性也影响盒子在页面上占用的**总空间**，但外边距**不计入**盒子的实际尺寸。盒子的总宽度和高度**止于边框**。

**总尺寸计算公式 Total Size Formula：**

$$\text{Total Width} = \text{margin-left} + \text{border-left} + \text{padding-left} + \text{content width} + \text{padding-right} + \text{border-right} + \text{margin-right}$$

$$\text{Total Height} = \text{margin-top} + \text{border-top} + \text{padding-top} + \text{content height} + \text{padding-bottom} + \text{border-bottom} + \text{margin-bottom}$$

> ⚠️ **关键区分 Key Distinction：**
> 
> - **Box size（盒子实际尺寸）** = content + padding + border（外边距**不包含**在内）
> - **Space taken on page（页面占用空间）** = content + padding + border + margin

**数值示例 Numerical Example：**

```
content width  = 200px
padding-left   = 10px,  padding-right  = 10px
border-left    = 2px,   border-right   = 2px
margin-left    = 20px,  margin-right   = 20px

Box actual width   = 200 + 10 + 10 + 2 + 2      = 224px
Space on page      = 224 + 20 + 20               = 264px
```

> 💡 **类比**：想象一个快递盒——`content` 是里面的商品，`padding` 是泡沫填充物（保护商品），`border` 是纸箱本身，`margin` 是包裹与其他包裹之间的间隔距离。CSS 的 `width` 只是商品本身的尺寸，不包括泡沫和纸箱。 Think of a shipping box: `content` = the product inside, `padding` = foam padding protecting the product, `border` = the cardboard box itself, `margin` = the gap between this box and other boxes. CSS `width` is only the product's size, not including foam or cardboard.

---

## **Page 39--Page 41: Overriding Normal Flow – 覆盖正常文档流**
> [!PDF|yellow] [[04 CSS.pdf#page=39&selection=51,0,51,37&color=yellow|04 CSS, p.39]]
> >####  Document flow and the float property


### **Page 39: Document Flow and the Float Property – 文档流与浮动属性**

By default, elements are laid out according to the **normal flow** of the document — they appear **sequentially above each other** in the order they are declared. 默认情况下，元素按照文档的**正常流**进行布局——它们按照声明的顺序**依次从上到下**排列。

There are **three ways** of overriding the normal flow. 有**三种方式**可以覆盖正常流。

**Way 1 – The `float` property 浮动属性**

The element is laid out according to the normal flow, then **shifted to lie to the left or right** of the previous element. 元素先按正常流布局，然后**向左或向右移动**，紧靠前一个元素旁边。

There are **three values**: `none`, `left`, `right`, `inherit`. 有**三个值（及继承值）**：`none`、`left`、`right`、`inherit`。

Used to, e.g., have **images and text on the same line**. 用途例如：实现**图片与文字在同一行**显示。

```css
img { float: left; }     /* 图片向左浮动，文字从右侧环绕 / Image floats left, text wraps on its right */
img { float: right; }    /* 图片向右浮动，文字从左侧环绕 / Image floats right, text wraps on its left */
img { float: none; }     /* 默认，不浮动 / Default, no float */
```

**浮动效果示意：**

```
float: left                    float: right
┌──────────────────────┐       ┌──────────────────────┐
│ ┌─────┐              │       │              ┌─────┐  │
│ │ img │  Text text   │       │  Text text   │ img │  │
│ │     │  text text   │       │  text text   │     │  │
│ └─────┘  text...     │       │  text...     └─────┘  │
└──────────────────────┘       └──────────────────────┘
```

> 💡 **类比**：`float` 就像在办公桌上放了一个文件架（图片）靠边放，其他文件（文字）自然绕着它排列，而不是被它压着叠放。 `float` is like placing a file holder (image) to one side of a desk — other documents (text) naturally arrange themselves around it rather than stacking on top.

---
> [!PDF|yellow] [[04 CSS.pdf#page=40&selection=95,0,95,17&color=yellow|04 CSS, p.40]]
> > #### Position property


### **Page 40: Position Property – 定位属性**

**Way 2 – The `position` property 定位属性**

Uses the **offset properties**: `top`, `left`, `right`, `bottom`. 使用**偏移属性**：`top`、`left`、`right`、`bottom`。

There are **five values**: 共有**五个值**：

|值 Value|说明 Description|是否脱离文档流 Removed from flow?|
|---|---|---|
|`static`|**默认值** Default — go with the normal flow，正常流布局|❌ 否 No|
|`relative`|元素相对于其**正常流位置**偏移，但元素**不脱离**文档流 The element is offset relative to its normal flow position, but the element is **not removed** from the flow|❌ 否 No|
|`absolute`|元素相对于其**最近已定位祖先元素**偏移，元素**完全脱离**正常流 The element is offset relative to its **most recently positioned ancestor**; the element is **removed entirely** from normal flow|✅ 是 Yes|
|`fixed`|元素相对于**固定视口（浏览器窗口）**偏移，元素**完全脱离**正常流 The element is offset relative to the **fixed viewport**; the element is **removed entirely** from normal flow|✅ 是 Yes|
|`sticky`|根据**滚动位置**在 `relative` 和 `fixed` 之间切换 Switches between `relative` and `fixed` depending on the **scroll position**|两者间切换 Switches|

```css
/* static — 默认，正常流 / Default, normal flow */
div { position: static; }

/* relative — 相对原位置偏移，不脱离流 / Offset from original position, stays in flow */
div {
  position: relative;           /* 相对定位 / Relative positioning */
  top: 10px;                    /* 向下偏移10px / Shift down 10px from normal position */
  left: 20px;                   /* 向右偏移20px / Shift right 20px from normal position */
}

/* absolute — 相对最近已定位祖先偏移，脱离流 / Offset from nearest positioned ancestor, out of flow */
div {
  position: absolute;           /* 绝对定位 / Absolute positioning */
  top: 0px;                     /* 距祖先顶部0px / 0px from ancestor's top */
  right: 0px;                   /* 距祖先右侧0px / 0px from ancestor's right */
}

/* fixed — 相对视口偏移，脱离流（如固定导航栏）/ Fixed to viewport, out of flow (e.g. sticky navbar) */
nav {
  position: fixed;              /* 固定定位 / Fixed positioning */
  top: 0;                       /* 固定在页面顶部 / Fixed at top of viewport */
}

/* sticky — 滚动到阈值前relative，超过后fixed / relative until scroll threshold, then fixed */
div { position: sticky; top: 0; } /* 粘性定位 / Sticky positioning */
```

> 📎 图片来源 Image source（来自 PDF Page 40）： `https://rajasekhar9860.hashnode.dev/css-position-property`

**五种定位值对比总结：**

```
static    → 正常流，不偏移     ← 默认
relative  → 正常流，可偏移，不脱离
absolute  → 脱离流，相对已定位祖先偏移
fixed     → 脱离流，相对浏览器视口偏移（如页面顶栏）
sticky    → relative + fixed 的混合（滚动触发）
```

> 💡 **类比：**
> 
> - `static`：普通员工按座位表坐（正常流）
> - `relative`：员工从自己座位向旁边移了几步，但座位依然保留
> - `absolute`：员工离开自己的座位，以部门（最近定位祖先）为参照点定位
> - `fixed`：员工钉在公司大门口（视口），不随人群移动
> - `sticky`：员工平时在座位，一旦滚动到某处就"粘"在可见区顶部

---

> [!PDF|yellow] [[04 CSS.pdf#page=41&selection=55,0,55,32&color=yellow|04 CSS, p.41]]
> > #### Position property and frameworks


### **Page 41: Display Property and CSS Frameworks – 显示属性与 CSS 框架**

Laying out your webpage manually with raw CSS is **hard!** Furthermore you must consider how the webpage looks across **many different screen types and sizes**. 手动使用原始 CSS 进行网页布局非常**困难！** 此外，还必须考虑网页在**多种不同屏幕类型和尺寸**上的显示效果。

**Way 3 – The `display` property 显示属性**

The `display` property determines **how the element is treated in normal flow**. `display` 属性决定了**元素在正常流中的处理方式**。

There are **approximately 20 possible values**: 共有**约20个可选值**：

- `block`, `inline`, `flex`, `grid`, `inline-flex`, etc.

Won't go into detail here but see various tutorials online. 此处不作详细介绍，可参阅各类在线教程。

```css
div  { display: block; }        /* 块级元素，独占一行 / Block-level, takes full line */
span { display: inline; }       /* 内联元素，在行内排列 / Inline, flows within a line */
div  { display: flex; }         /* 弹性盒布局 / Flexbox layout */
div  { display: grid; }         /* 网格布局 / Grid layout */
div  { display: inline-flex; }  /* 内联弹性盒 / Inline flexbox */
```

**CSS Frameworks – CSS 框架**

A much more **scalable way** is to use a **CSS framework** — which are libraries of CSS code allowing you to quickly build a **visually appealing and responsive** website. 更具**可扩展性**的方式是使用 **CSS 框架**——这是预编写 CSS 代码的库，能让你快速构建**美观且响应式**的网站。

See next Lecture for more details. 详细内容见下一讲。

**三种覆盖正常流的方式汇总（Pages 39–41）：**

|方式 Way|属性 Property|作用 Function|是否脱流 Out of flow?|
|---|---|---|---|
|1|`float`|元素左/右浮动，文字环绕 Float left/right, text wraps|部分（仍占位）/ Partially|
|2|`position`|通过偏移值精确定位 Precise offset positioning|视值而定 Depends on value|
|3|`display`|改变元素在流中的处理方式 Change how element is treated in flow|视值而定 Depends on value|

> 💡 **类比**：
> 
> - `float` 是让元素"靠边站"，其他内容绕行；
> - `position` 是给元素贴上"GPS坐标"，精确控制落点；
> - `display` 是改变元素的"身份证类型"（块级/内联/弹性/网格），从根本上改变排列规则；
> - CSS 框架则是"买了套精装房"——布局已经设计好了，你只需要填入内容。

---

### Summary 总结

- **Page 35 is the section title slide.** It marks the start of the "CSS Layout" section. **第35页为章节封面页。** 标志着"CSS 布局"章节的开始。（Page 35）
    
- **The Box Model is the foundational layout concept in CSS.** Every element is laid out as four nested boxes: Content（内容）, Padding（内边距）, Border（边框）, and Margin（外边距）, from innermost to outermost. It controls spacing and borders around every element. **盒模型是 CSS 布局的基础概念。** 每个元素都按四个嵌套盒子进行布局：内容、内边距、边框、外边距，由内到外。它控制每个元素周围的间距和边框。（Page 36）
    
- **Margin** is the space between an element's border and neighboring elements; it is always transparent and set via `margin`, `margin-left`, `margin-top`, etc. **外边距**是元素边框与相邻元素之间的空间；始终透明，通过 `margin`、`margin-left`、`margin-top` 等属性设置。（Page 37）
    
- **Border** is set via three properties: `border-style` (`none`/`dotted`/`dashed` etc., default `none`), `border-width` (`thin`/`medium`/`thick` or pixel value, default `medium`), and `border-color` (any colour). **边框**通过三个属性设置：`border-style`（`none`/`dotted`/`dashed` 等，默认 `none`）、`border-width`（`thin`/`medium`/`thick` 或像素值，默认 `medium`）、`border-color`（任意颜色）。（Page 37）
    
- **Padding** is the transparent space between the border and the content, set via `padding`, `padding-left`, `padding-top`, etc. **内边距**是边框与内容之间的透明空间，通过 `padding`、`padding-left`、`padding-top` 等属性设置。（Page 38）
    
- **The CSS `width`/`height` properties set only the content area.** Total element size = content + padding + border. Margin adds to the space on the page but is NOT included in the box's actual size (the box's total width/height stops at the border). **CSS 的 `width`/`height` 属性仅设置内容区域。** 元素总尺寸 = 内容 + 内边距 + 边框。外边距增加页面占用空间，但不计入盒子的实际尺寸（盒子总宽度/高度止于边框）。（Page 38）
    
- **By default, elements follow normal flow** — appearing sequentially in declaration order. There are three ways to override this normal flow. **默认情况下，元素遵循正常流**——按声明顺序依次排列。有三种方式可以覆盖正常流。（Page 39）
    
- **Way 1 – `float` property**: Shifts an element left or right; values are `none`, `left`, `right`, `inherit`. Used for e.g. placing images and text on the same line. **方式一 – `float` 属性**：将元素向左或向右移动；值为 `none`、`left`、`right`、`inherit`。用于例如将图片和文字放在同一行。（Page 39）
    
- **Way 2 – `position` property**: Uses offset properties (`top`, `left`, `right`, `bottom`). Has five values: `static` (default, normal flow), `relative` (offset from normal position, stays in flow), `absolute` (offset from nearest positioned ancestor, fully removed from flow), `fixed` (offset from fixed viewport, fully removed from flow), `sticky` (switches between relative and fixed based on scroll position). **方式二 – `position` 属性**：使用偏移属性（`top`、`left`、`right`、`bottom`）。有五个值：`static`（默认，正常流）、`relative`（相对正常位置偏移，不脱流）、`absolute`（相对最近已定位祖先偏移，完全脱流）、`fixed`（相对固定视口偏移，完全脱流）、`sticky`（根据滚动位置在两者间切换）。（Page 40）
    
- **Way 3 – `display` property**: Determines how an element is treated in normal flow; has approximately 20 values including `block`, `inline`, `flex`, `grid`, `inline-flex`. Detailed tutorials available online. **方式三 – `display` 属性**：决定元素在正常流中的处理方式；约有20个值，包括 `block`、`inline`、`flex`、`grid`、`inline-flex`。详细教程可在网上查阅。（Page 41）
    
- **CSS frameworks are the practical solution for scalable responsive layout.** They are libraries of pre-written CSS that allow quickly building visually appealing and responsive websites, to be covered in the next lecture. **CSS 框架是实现可扩展响应式布局的实用解决方案。** 它们是预编写 CSS 的库，可快速构建美观且响应式的网站，将在下一讲中详细介绍。（Page 41）
    

---

## **🎯 Guided Learning – 引导性学习问题（Pages 35–41）**

**Q1（Page 36）** The box model consists of four layers. Starting from the inside and working outward, what are they? What is rendered in the innermost layer? 盒模型由四个层次构成。从内到外依次是什么？最内层渲染的是什么？

> 💭 _Hint:_ Content → Padding → Border → Margin. What is "Content" exactly? 提示：内容 → 内边距 → 边框 → 外边距。"内容"具体指什么？

---

**Q2（Page 37）** What are the three CSS properties used to control an element's border? Give the default value for `border-style` and `border-width`. 控制元素边框有哪三个 CSS 属性？`border-style` 和 `border-width` 的默认值分别是什么？

> 💭 _Hint:_ Look at `border-style`, `border-width`, `border-color` and their defaults from Page 37. 提示：参考第37页的 `border-style`、`border-width`、`border-color` 及其默认值。

---

**Q3（Page 38）** An element has the following CSS applied: `width: 100px`, `padding: 10px`, `border-width: 5px`, `margin: 20px`. What is the **actual size of the box** (width stops at border)? What is the **total space it takes up on the page**? 一个元素应用了以下 CSS：`width: 100px`、`padding: 10px`、`border-width: 5px`、`margin: 20px`。**盒子的实际宽度**（宽度止于边框）是多少？它在页面上**占用的总空间宽度**是多少？

> 💭 _Hint:_ Box actual width = content + padding×2 + border×2. Space on page = box width + margin×2. 提示：盒子实际宽度 = 内容 + 内边距×2 + 边框×2。页面占用空间 = 盒子宽度 + 外边距×2。

---

**Q4（Page 39）** The `float` property has the values `none`, `left`, `right`, and `inherit`. Give a practical use case where `float: right` would be applied, and describe the visual effect. `float` 属性的值有 `none`、`left`、`right` 和 `inherit`。请举出一个使用 `float: right` 的实际场景，并描述其视觉效果。

> 💭 _Hint:_ The PDF mentions "have images and text on the same line" as a use case. 提示：PDF 中提到的使用场景是"使图片与文字在同一行显示"。

---

**Q5（Page 40）** What is the key difference between `position: relative` and `position: absolute`? Which one is removed entirely from the normal document flow? `position: relative` 和 `position: absolute` 的核心区别是什么？哪一个会完全脱离正常文档流？

> 💭 _Hint:_ `relative` = stays in flow but offsets visually; `absolute` = removed from flow, positioned relative to nearest positioned ancestor. 提示：`relative` = 留在文档流中但视觉上偏移；`absolute` = 脱离文档流，相对最近已定位祖先定位。

---

**Q6（Page 40）** Describe the behaviour of `position: fixed` and `position: sticky`. What is the key difference between them? 描述 `position: fixed` 和 `position: sticky` 的行为。它们之间的核心区别是什么？

> 💭 _Hint:_ `fixed` is always relative to the viewport; `sticky` starts as relative and switches to fixed based on scroll position. 提示：`fixed` 始终相对于视口；`sticky` 初始为 relative，根据滚动位置切换为 fixed。

---

**Q7（Page 41）** The lecture mentions three ways to override normal document flow. List all three (by property name) and briefly state what each one does. Which approach does the lecture recommend for building large-scale responsive websites, and why? 讲义提到了三种覆盖正常文档流的方式。请列出全部三种（按属性名称），并简述各自的作用。讲义推荐使用哪种方式构建大型响应式网站？为什么？

> 💭 _Hint:_ The three properties are `float`, `position`, and `display`. The recommended approach for scalability is mentioned at the end



> [!PDF|yellow] [[04 CSS.pdf#page=42&selection=0,0,0,6&color=yellow|04 CSS, p.42]]
> > # Other

现在我已经完整读取了 PDF 中所有页面的内容，并且已经在之前的对话中完成了 Pages 35–41 的讲解。用户说"继续"，结合上下文，需要继续讲解大纲中的第 5 部分，即 **Pages 42–45（Other – 其他）**。让我读取这些页面的详细内容确认完整性。 现在已完整确认 Pages 42–45 的所有内容。开始生成第 5 部分的完整讲解。

---

# **Other – 其他｜Page 42 -- Page 45**

---

## **Page 42: Other – 其他（章节封面）**

This page is the section title slide for "Other." 本页是"其他"章节的封面幻灯片。

> 💡 **类比 Analogy：** 本章节就像一门课的"附录"——虽然内容较为零散，但涵盖了实际开发中不可忽视的重要补充知识：浏览器兼容性处理、CSS 验证工具，以及对 CSS 表达力的延伸认识。 This chapter is like an "appendix" — though the content is varied, it covers important supplementary knowledge that cannot be ignored in real-world development: browser compatibility handling, CSS validation tools, and an extended appreciation of CSS's expressive power.

---

## **Page 43--Page 45: Vendor Prefixes, Validating CSS, and CSS Creativity – 浏览器厂商前缀、CSS 验证与 CSS 创造力**

### **Page 43: Vendor Prefixes – 浏览器厂商前缀**

Vendor prefixes are added by browser makers to support new CSS features before they become fully standardized and widely supported. 浏览器厂商前缀是由浏览器制造商添加的，用于在新 CSS 特性完全标准化并获得广泛支持之前，提前支持这些特性。

**讲义完整代码示例 Full Code Example from PDF (Page 43)：**

```css
.foo {
  -webkit-border-radius: 10px;  /* WebKit 内核浏览器（如早期 Chrome/Safari）/ For WebKit browsers (e.g. early Chrome/Safari) */
  -moz-border-radius: 10px;     /* Mozilla Firefox 浏览器 / For Mozilla Firefox */
  border-radius: 10px;          /* 标准属性，无前缀（现代浏览器）/ Standard property, no prefix (modern browsers) */
}
```

**三个前缀的含义 Meaning of each prefix：**

|前缀 Prefix|对应浏览器/引擎 Browser/Engine|
|---|---|
|`-webkit-`|WebKit 内核，早期 Chrome、Safari / Early Chrome, Safari|
|`-moz-`|Mozilla Firefox|
|`-ms-`|Microsoft Internet Explorer / Edge（旧版）|
|`-o-`|Opera（旧版）|
|（无前缀）no prefix|W3C 标准属性，现代浏览器通用 / W3C standard, all modern browsers|

> ⚠️ **为什么需要同时写三行 Why write all three lines：** 在 CSS 标准尚未最终确定时，不同浏览器各自使用自己的前缀版本实现新特性。为了确保跨浏览器兼容性，开发者需要同时写出所有前缀版本以及最终标准版本，由浏览器自己选择可识别的那一行。 While a CSS standard is not yet finalised, different browsers implement the new feature using their own prefixed version. To ensure cross-browser compatibility, developers must write all prefixed variants plus the final standard version, allowing each browser to pick the one it recognises.

**讲义引用语（来自 PDF Page 43）：**

> _"… force the vendors and the Working Group to work together to devise the tests necessary to determine interoperability. Those tests can then guide those who follow, helping them to achieve interoperable status much faster. They could literally ship the prefixed implementation in one public beta and drop the prefix in the next."_

这段引用描述了厂商前缀作为一种**积极的技术演进催化剂**的角色——它迫使浏览器厂商与 W3C 工作组协作制定互操作性测试，从而加速 CSS 标准化进程。 This quote describes vendor prefixes as **"a positive catalyst for the evolution to exciting technologies"** — they force browser vendors and the W3C Working Group to collaborate on interoperability tests, thereby accelerating CSS standardisation.

**厂商前缀使用流程示意：**

```
新 CSS 特性提出
New CSS feature proposed
        ↓
各厂商用前缀先行实现（-webkit-, -moz-, ...）
Browsers implement with their own prefix
        ↓
开发者同时写多个前缀版本确保兼容
Developers write all prefix versions for compatibility
        ↓
W3C 标准化完成，无前缀版本发布
W3C finalises standard, prefix-free version released
        ↓
旧前缀逐渐废弃（但仍需向后兼容）
Old prefixes gradually deprecated (but backward compat. needed)
```

> 💡 **类比**：厂商前缀就像新药上市前各地的临床试验——每个地区（浏览器）各自做实验（前缀版本），最终通过统一标准（W3C）后，才有了全球通用的产品（无前缀标准属性）。 Vendor prefixes are like clinical trials before a drug is approved — each region (browser) runs its own experiment (prefixed version), until a unified standard (W3C) produces the universally accepted product (the prefix-free standard property).

---

### **Page 44: Validating CSS – 验证 CSS**

The W3C provides a **CSS Validation Service** to check CSS and (X)HTML documents with style sheets. W3C 提供了 **CSS 验证服务**，用于检查含样式表的 CSS 和 (X)HTML 文档。

**工具界面说明（来自 PDF Page 44）：**

该工具界面截图展示了 W3C CSS Validation Service，提供三种验证输入方式： The tool interface screenshot shows the W3C CSS Validation Service, offering three input methods:

|验证方式 Validation Method|说明 Description|
|---|---|
|**By URI**|输入文档的网址进行在线验证 / Enter the URL of the document to validate online|
|**By file upload**|上传本地 CSS 文件进行验证 / Upload a local CSS file for validation|
|**By direct input**|直接粘贴 CSS 代码进行验证 / Directly paste CSS code for validation|

界面中还展示了： The interface also shows:

- **"Validate by URI"** 区域：输入 HTML with CSS 或纯 CSS 文档的地址（Address 字段），点击 **Check** 按钮即可验证。 The **"Validate by URI"** section: enter the address of an HTML-with-CSS or CSS-only document in the **Address** field, then click **Check** to validate.
    
- **"More Options"** 按钮：展开更多验证选项。 The **"More Options"** button: expands additional validation options.
    
- 页面底部还有 W3C 开发者社区的宣传信息： At the bottom of the page there is a W3C developer community message:
    
    > _"Interested in understanding what new technologies are coming out of W3C? Follow @w3cdevs on X to keep track of what the future looks like!"_
    
- 以及捐助链接：_"Donate and help us build better tools for a better web."_
    

**工具地址（可从 PDF 截图推断）：** The tool can be accessed at the W3C CSS Validation Service: 🔗 `https://jigsaw.w3.org/css-validator/`

**为什么需要验证 CSS Why validate CSS：**

- 发现语法错误 / Catch syntax errors
- 确保跨浏览器兼容性 / Ensure cross-browser compatibility
- 遵循 W3C 标准 / Conform to W3C standards
- 辅助调试 / Aid debugging

> 💡 **类比**：CSS 验证工具就像文章的语法检查器（Grammar Checker）——帮你找出代码中的拼写错误、语法问题，让你的样式表符合标准、减少浏览器解析错误。 The CSS validator is like a grammar checker for your stylesheet — it finds typos and syntax issues, ensuring your styles conform to the standard and reducing browser parsing errors.

---

### **Page 45: CSS is Boring... – CSS 并不无聊……**

You can build some amazing things with pure CSS. 你可以用纯 CSS 构建一些令人惊叹的作品。

**讲义提供的两个展示链接（来自 PDF Page 45）：**

🔗 `https://codepen.io/r4ms3s/pen/gaiVBG`

🔗 `https://codepen.io/stepan/pen/Nwmqdw`

这两个链接指向 CodePen 上的纯 CSS 创意作品示例，展示了 CSS 在视觉表达方面的巨大潜力。 These two links point to pure CSS creative works on CodePen, demonstrating the enormous visual potential of CSS.

**讲义标题用了一个反讽 The title uses irony：**

- 标题写的是 **"CSS is boring..."**（CSS 很无聊……）
- 但正文立即反驳：**"You can build some amazing things with pure CSS"**（你可以用纯 CSS 构建一些惊人的东西）
- 这是一种**反讽修辞**（Irony）：用"无聊"引发读者的好奇心，再通过实例展示 CSS 的强大创造力。

**意义：** Pure CSS (without any JavaScript or images) can be used to create complex animations, realistic illustrations, interactive UI components, and even mini-games. 纯 CSS（不使用任何 JavaScript 或图片）可以用来创建复杂动画、写实插图、交互式 UI 组件，甚至迷你游戏。

> 💡 **类比**：说"CSS 很无聊"就像说"铅笔很无聊"——工具本身或许朴素，但在有创造力的人手中，可以画出无限可能。 Saying "CSS is boring" is like saying "pencils are boring" — the tool itself may seem simple, but in the hands of a creative person, it can produce infinite possibilities.

---

### Summary 总结

- **Page 42 is the section title slide** for the final "Other" section of the CSS lecture. **第42页是"其他"章节的封面页**，是 CSS 讲义的最后一个章节。（Page 42）
    
- **Vendor prefixes** (Page 43) are added by browser makers to support new CSS features before they are fully standardised. Common prefixes include `-webkit-` (Chrome/Safari), `-moz-` (Firefox). To ensure cross-browser compatibility, developers must write all prefixed variants plus the final unprefixed standard version. The prefixes were described as "a positive catalyst for the evolution to exciting technologies" as they force collaboration between browser vendors and the W3C Working Group. **浏览器厂商前缀**（第43页）由浏览器制造商添加，用于在标准化之前支持新 CSS 特性。常见前缀包括 `-webkit-`（Chrome/Safari）、`-moz-`（Firefox）。为确保跨浏览器兼容性，开发者需同时写出所有前缀版本及最终无前缀标准版本。前缀被描述为"技术演进的积极催化剂"，因为它们迫使浏览器厂商与 W3C 工作组协作。（Page 43）
    
- **The W3C CSS Validation Service** (Page 44) allows checking CSS and (X)HTML documents for errors. It supports three input methods: By URI, By file upload, and By direct input. It helps catch syntax errors, ensure cross-browser compatibility, and conform to W3C standards. **W3C CSS 验证服务**（第44页）允许检查 CSS 和 (X)HTML 文档中的错误。支持三种输入方式：URI 输入、文件上传和直接输入。它有助于发现语法错误、确保跨浏览器兼容性并符合 W3C 标准。（Page 44）
    
- **"CSS is boring..."** (Page 45) is an ironic title — the lecture immediately contradicts it by pointing to two CodePen examples (`https://codepen.io/r4ms3s/pen/gaiVBG` and `https://codepen.io/stepan/pen/Nwmqdw`) that demonstrate that pure CSS can be used to build visually stunning and complex creations. **"CSS 很无聊……"**（第45页）是一个反讽标题——讲义随即通过指向两个 CodePen 示例进行反驳，证明纯 CSS 可以构建出视觉震撼、复杂精美的作品。（Page 45）
    

---

## **🎯 Guided Learning – 引导性学习问题（Pages 42–45）**

**Q1（Page 43）** What is the purpose of vendor prefixes in CSS? Why do developers need to write the same property three times (e.g., `-webkit-border-radius`, `-moz-border-radius`, and `border-radius`)? CSS 中浏览器厂商前缀的用途是什么？为什么开发者需要将同一属性写三次（如 `-webkit-border-radius`、`-moz-border-radius` 和 `border-radius`）？

> 💭 _Hint:_ Think about the timeline: new feature proposed → browsers implement with prefix → W3C finalises standard → prefix-free version released. 提示：思考时间线：新特性提出 → 浏览器带前缀实现 → W3C 标准化 → 发布无前缀版本。

---

**Q2（Page 43）** The lecture quotes a statement describing vendor prefixes as "a positive catalyst for the evolution to exciting technologies." In your own words, explain how vendor prefixes encourage collaboration between browser vendors and the W3C Working Group. 讲义引用了一段话，将厂商前缀描述为"技术演进的积极催化剂"。请用自己的话解释，厂商前缀如何促进浏览器厂商与 W3C 工作组之间的协作。

> 💭 _Hint:_ The quote mentions devising "tests necessary to determine interoperability." Why would having a prefixed implementation already deployed help the standardisation process? 提示：引用提到了制定"确定互操作性所需的测试"。已部署的前缀实现为何有助于标准化进程？

---

**Q3（Page 43）** Given the CSS code below, which line would a modern fully-standards-compliant browser (e.g., current Chrome) use, and which line(s) would be ignored? Why? 对于以下 CSS 代码，现代完全符合标准的浏览器（如当前版本的 Chrome）会使用哪一行？哪几行会被忽略？为什么？

```css
.foo {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}
```

> 💭 _Hint:_ Modern browsers support the unprefixed standard property. They will still parse (but effectively ignore or override with) the prefixed versions. 提示：现代浏览器支持无前缀的标准属性。它们仍会解析前缀版本，但实际上会被标准版本覆盖。

---

**Q4（Page 44）** The W3C CSS Validation Service offers three methods of input. Name all three. In which scenario would you use "By URI" versus "By direct input"? W3C CSS 验证服务提供了三种输入方式。请全部列出。在什么场景下你会选择"By URI"而不是"By direct input"？

> 💭 _Hint:_ "By URI" requires the document to be publicly accessible online; "By direct input" works for local/draft CSS that hasn't been deployed yet. 提示："By URI" 要求文档在线可访问；"By direct input" 适用于尚未部署的本地/草稿 CSS。

---

**Q5（Page 45）** The slide title says "CSS is boring..." but the content immediately contradicts this. What does the lecture use as evidence to show that CSS is NOT boring? What are the two specific resources provided? 幻灯片标题写着"CSS 很无聊……"，但正文立即进行了反驳。讲义用什么作为证据来说明 CSS 并不无聊？提供了哪两个具体资源？

> 💭 _Hint:_ Look for the two CodePen links provided on Page 45. 提示：查找第45页提供的两个 CodePen 链接。