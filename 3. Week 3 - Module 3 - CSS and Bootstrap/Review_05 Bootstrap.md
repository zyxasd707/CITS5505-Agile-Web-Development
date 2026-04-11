先读取全部内容，确保无遗漏。 内容已全部读取完毕，Page 1–16 无遗漏。现在开始生成完整复习讲解材料。

---

# 1. **CSS Frameworks & Bootstrap 完整复习讲解 — Page 1–Page 16**

---

## 1. **课程概览 Page 1**

> **Page 1** — 封面页，课程定位：CITS3403 / CITS5505 Agile Web Development（敏捷 Web 开发），2026 Semester 1，主题为 CSS Frameworks: Bootstrap。

---

## 2. **CSS Frameworks – CSS框架 Page 2–Page 5**

---

### 2.1Q **Q: What is CSS and why does it have limitations? CSS是什么，为什么它有局限性？** — Page 3

**A:**

CSS (Cascading Style Sheets 层叠样式表) is a powerful language for creating and implementing a **presentation style 展示样式** for a website/application. CSS 是一种用于为网站/应用创建和实现**展示样式**的强大语言。

However, it has four core limitations 然而，它有四个核心局限性：

|#|Limitation 局限性|Explanation 说明|
|---|---|---|
|1|**Unintuitive operations 操作不直观**|Simple tasks like centering pictures/text can be surprisingly tricky. 居中图片/文字等简单操作往往意外繁琐。|
|2|**Responsive design is hard 响应式设计困难**|Difficult to create styles that change depending on the device. 难以创建根据设备变化的自适应样式。|
|3|**Over-engineering 过度设计**|Many sites only need a simpler subset of CSS operations. 许多网站只需要 CSS 操作的简单子集。|
|4|**High creativity barrier 高创意门槛**|Producing an attractive style is a highly creative activity. 制作美观样式本身是一项高度创造性的工作。|

> 💡 **核心洞察 Core Insight**：这四个局限性本质上指向同一个问题——**CSS 的灵活性与易用性之间的张力**。框架的出现正是为了在两者之间找到平衡点。 These four limitations all point to one tension: **flexibility vs. usability**. Frameworks exist to resolve this tension.

---

### 2.2Q **Q: What are CSS Frameworks and what is their core advantage? 什么是CSS框架，其核心优势是什么？** — Page 4

**A:**

CSS frameworks (CSS框架) are **open-source libraries 开源库** for developing **responsive web applications 响应式Web应用**。

- They use **CSS + JavaScript** to build style components in a reasonably aesthetic way with **very little effort 极少工作量**. 它们结合 CSS + JavaScript，以极少的工作量构建美观的样式组件。
- Core advantage 核心优势: They are normally designed to be **responsive 响应式的**, so **one application** looks good on **mobile devices 移动设备, tablets 平板, and PCs** with minimal effort. 核心优势：天然具备响应式设计，同一套应用只需极少工作量即可在手机、平板、PC 上呈现良好效果。

> 💡 **类比 Analogy**：CSS 框架就像乐高积木——预制好的标准件，让你无需从零塑形，直接拼装出专业外观。 CSS frameworks are like LEGO — pre-made standard pieces that let you build professional-looking layouts without starting from scratch.

> 🔑 **Why（底层逻辑）**：框架通过**封装复杂性（encapsulating complexity）**，把响应式断点、对齐逻辑、美观样式打包成类名，开发者只需"调用"而非"实现"。 Frameworks **encapsulate complexity** — breakpoints, alignment logic, and aesthetics are packaged into class names; developers "call" rather than "implement."

---

### 2.3Q **Q: What are the common CSS frameworks and what is their key trade-off? 常见CSS框架有哪些，核心权衡是什么？** — Page 5

**A:**

|Framework 框架|Tagline 定位语|
|---|---|
|**Bootstrap**|"Sleek, intuitive, and powerful front-end framework for faster and easier web development." 简洁、直观、强大的前端框架。|
|**Tailwind CSS**|"A Utility-First CSS Framework for Rapid UI Development." 实用优先，适合快速 UI 开发。|
|**Semantic UI**|"User Interface is the language of the web." 以语义化方式构建 UI。|
|**Foundation**|"The most advanced responsive front-end framework in the world." 最先进的响应式前端框架。|

⚠️ **Key Disadvantage 核心缺点**：

> Websites built with the **same framework 同一框架** will often appear **visually similar 视觉上大同小异**. 使用同一框架构建的网站在视觉上往往高度相似，缺乏独特性。

> 💡 **权衡取舍 Trade-off**：**开发效率 ↑，视觉独特性 ↓**。商业产品或品牌独特性要求高的项目需要额外定制化工作。 **Development speed ↑, Visual uniqueness ↓**. Projects requiring strong brand identity need extra customization work on top of any framework.

---

#### 📝 习题 Exercises — Page 3–5

**习题1 (Page 3)** Q (EN): List the four limitations of CSS described in the lecture. Which limitation is most directly addressed by Bootstrap's responsive grid system? 列出讲义中描述的 CSS 的四个局限性（limitations）。哪个局限性最直接被 Bootstrap 的响应式网格系统（responsive grid system）所解决？

**习题2 (Page 4–5)** Q (EN): What is the key advantage AND the key disadvantage of using a CSS framework? 使用 CSS 框架（CSS framework）的核心优势（advantage）和核心缺点（disadvantage）各是什么？

**习题3 (Page 5)** Q (EN): True or False: Tailwind CSS and Bootstrap are described with the same design philosophy. Justify your answer. 判断题：Tailwind CSS 和 Bootstrap 的设计理念（design philosophy）相同。请说明理由。 _(Answer: False. Bootstrap is component-based; Tailwind is utility-first. 错误。Bootstrap 基于组件，Tailwind 基于实用类。)_

---

## 3. **The Bootstrap Framework – Bootstrap框架 Page 6–Page 16**

---

## 3.1 **Loading Bootstrap – 加载Bootstrap Page 7**

### 3.1.1Q **Q: How do you load Bootstrap into a web page? 如何将Bootstrap加载到网页中？** — Page 7

**A:**

Two methods 两种方式：

|Method 方式|Description 说明|
|---|---|
|**Download 下载**|Host the code yourself on your own server. 将代码托管在自己的服务器上。|
|**CDN (Content Delivery Network 内容分发网络)**|Reference an external link in `<head>` — no download needed. 在 `<head>` 中引用外部链接，无需下载。|

Bootstrap consists of 三个组成部分:

- A **CSS file CSS文件** — handles styling 处理样式
- A **JavaScript file JavaScript文件** — handles interactive components 处理交互组件
- Optional **theme files 主题文件**

**CDN Code Example 代码示例：**

```html
<!-- Latest compiled and minified CSS -->
<!-- 最新压缩版 Bootstrap CSS 样式文件 -->
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
  integrity="sha384-..."           <!-- 安全完整性校验哈希值 -->
  crossorigin="anonymous">        <!-- 允许跨域加载 -->

<!-- Optional theme -->
<!-- 可选：Bootstrap 主题文件 -->

<!-- Latest compiled and minified JavaScript -->
<!-- 最新压缩版 Bootstrap JavaScript 文件 -->
<script
  integrity="sha384-Tc5IQib027qvyjSMfHj0MaLkfuWVxZxUPnCJA712mCWNIpG9mGCD8wGNIcPD7Txa"
  <!-- 安全完整性校验哈希值 -->
  crossorigin="anonymous">        <!-- 允许跨域加载 -->
</script>
```

> 💡 **类比 Analogy**：CDN 就像流媒体——不下载电影，直接在线播放；自托管就像买实体碟，自己存。 CDN is like streaming — no download, play directly; self-hosting is like owning a physical disc.

> 🔑 **Why CDN is preferred 为什么CDN更常用**：用户浏览器可能已经**缓存 cached** 了同一 CDN 上的 Bootstrap 文件，直接命中缓存，**零加载时间**。 Browsers may have already **cached** Bootstrap from the same CDN — **zero load time** for returning visitors.

---

## 3.2 **Your First Bootstrap Page – 第一个Bootstrap页面 Page 8**

### 3.2.1Q **Q: What are the two essential setup steps for a Bootstrap page? Bootstrap页面的两个关键设置步骤是什么？** — Page 8

**A:**

1. Include the **CDN libraries 引入CDN库** in `<head>`
2. Add a **viewport meta-tag 视口meta标签** — sets viewport width to device width for zooming and scaling 将视口宽度设置为设备宽度，支持缩放

The **`.container` class** automatically sets **margins 边距** that respond to the page size. **`.container` 类**会自动设置随页面大小响应的**边距**。

**Complete Code Example 完整代码示例：**

```html
<!DOCTYPE html>                                    <!-- HTML5文档类型声明 -->
<html lang="en">                                   <!-- 设置页面语言为英文 -->
<head>
  <title>Bootstrap Example</title>                 <!-- 浏览器标签页标题 -->
  <meta charset="utf-8">                           <!-- 字符编码设置为UTF-8 -->
  <meta name="viewport"                            <!-- 视口meta标签，关键！移动端缩放控制 -->
        content="width=device-width,               <!-- 视口宽度等于设备实际宽度 -->
                 initial-scale=1">                 <!-- 初始缩放比例为1，不放大不缩小 -->
  <script src="https://ajax.googleapis.com/        <!-- 引入jQuery，Bootstrap JS依赖它 -->
    ajax/libs/jquery/3.3.1/jquery.min.js">
  </script>
</head>
<body>
  <div class="container">                          <!-- Bootstrap容器，自动设置响应式边距、居中 -->
    <h1>My First Bootstrap Page</h1>              <!-- 一级标题 -->
    <p>This part is inside a .container class.</p><!-- 段落，受container类控制宽度和边距 -->
  </div>                                           <!-- 容器结束 -->
</body>
</html>
```

> 📌 **核心点**：`.container` class provides a **responsive fixed-width 响应式固定宽度** container — content is centered automatically. `.container` 提供响应式固定宽度容器，内容自动居中。

---

## 3.3 **Bootstrap Container – Bootstrap容器 Page 9**

### 3.3.1Q **Q: What are the three container classes in Bootstrap and when to use each? Bootstrap的三种容器类分别是什么，各自适用场景？** — Page 9

**A:**

|Class 类名|Behavior 行为|Use Case 使用场景|
|---|---|---|
|`.container`|**Fixed-width 固定宽度**, responsive — max-width adjusts at breakpoints (xs, sm, md, lg, xl, xxl). Centers content. 最大宽度随断点调整，内容居中。|通用页面内容区|
|`.container-fluid`|Always **100% viewport width 100%视口宽度**, regardless of screen size. 始终全宽，不受屏幕大小影响。|全屏横幅、地图、背景区|
|`.container-{breakpoint}` e.g. `.container-sm`, `.container-md`|**Fluid (full-width) until 全宽直到** the specified breakpoint, then fixed-width. 到达断点前全宽，之后转为固定宽度。|需要在特定屏幕尺寸切换布局时|

> 💡 **类比 Analogy**：
> 
> - `.container` = 固定尺寸相框，随屏幕换档位但内容不变宽
> - `.container-fluid` = 橡皮筋，永远撑满整个屏幕
> - `.container-{breakpoint}` = 到某个尺寸之前一直拉伸，之后才"卡住"

> 🔑 **Why breakpoints matter 为什么断点重要**：Bootstrap 使用**媒体查询 media queries** 在 CSS 中根据屏幕宽度切换样式，断点（xs/sm/md/lg/xl/xxl）是这套切换机制的触发点。 Bootstrap uses **media queries** to switch styles based on screen width; breakpoints are the trigger thresholds.

---

## 3.4 **The Bootstrap Grid System – Bootstrap网格系统 Page 10–Page 13**

### 3.4.1Q **Q: What is the Bootstrap Grid System and what are its fundamental rules? Bootstrap网格系统是什么，基本规则是什么？** — Page 10

**A:**

Bootstrap uses **rows of 12 columns 12列行** for layout. Bootstrap 使用 **12列行**进行页面布局。

- Every component (or `div`) can be specified to **span 跨越** a number of these columns. 每个组件（或 `div`）可指定跨越若干列。
- Layout can be specified per **device size 设备尺寸**: extra small 超小, small 小, medium 中, large 大. 可针对不同**设备尺寸**分别指定布局。
- ⚠️ **The number of spanned columns should ALWAYS add up to 12. 列数之和必须始终等于12。**

**Visual Layout Patterns 视觉布局模式（PDF Page 10）：**

```
|span1|span1|span1|span1|span1|span1|span1|span1|span1|span1|span1|span1|  ← 12个单列
|    span4    |    span4    |    span4    |                                 ← 三等分
|    span4    |         span8            |                                 ← 1/3 + 2/3
|      span6      |      span6      |                                      ← 二等分
|                    span12                    |                           ← 整行
```

**Code Example 代码示例（Page 10）：**

```html
<div class="col-3"                                 <!-- 占12列中的3列（行宽的1/4） -->
  style="background-color:rgb(172,232,51);
         border:1cm">
  col-3                                            <!-- 内容文字 -->
</div>
<div class="col-9"                                 <!-- 占12列中的9列（行宽的3/4） -->
  style="background-color:rgb(232,51,223);
         border:1cm">
  col-9                                            <!-- 内容文字 -->
</div>
```

> 🔑 **Why 12 columns 为什么是12列**：12 = 2 × 2 × 3，因数最多（1,2,3,4,6,12），可被整除为 **1/2, 1/3, 1/4, 1/6** 等常用比例，灵活性最强。 12 = 2×2×3, the most divisors among small numbers, enabling 1/2, 1/3, 1/4, 1/6 — maximum layout flexibility.

---

### 3.4.2Q **Q: How does `col` create equal-width columns? `col`如何创建等宽列？** — Page 11

**A:**

The class **`col`** creates **equal-width columns 等宽列** across **all devices and viewports 所有设备和视口**. **`col`** 类在所有设备和视口中创建等宽列。

Columns are **centered in the page** with the parent **`.container`**. 列通过父级 **`.container`** 居中显示。

```html
<div class="container">                            <!-- 外层容器，内容居中 -->
  <h1 class="mb-5">Bootstrap Grid Columns</h1>    <!-- 标题，mb-5为底部外边距 -->

  <!-- Basic Grid Layout 基本网格布局 -->
  <div class="row">                                <!-- 行容器，包裹所有列 -->
    <div class="col text-bg-light border">         <!-- col：自动均分，此处为1/2 -->
      1 of 2                                       <!-- 内容 -->
    </div>
    <div class="col bg-light border">             <!-- col：自动均分，此处为1/2 -->
      2 of 2                                       <!-- 内容 -->
    </div>
  </div>

  <div class="row">                                <!-- 第二行 -->
    <div class="col bg-light border">1 of 3</div> <!-- col：自动均分，此处为1/3 -->
    <div class="col bg-light border">2 of 3</div> <!-- col：自动均分，此处为1/3 -->
    <div class="col bg-light border">3 of 3</div> <!-- col：自动均分，此处为1/3 -->
  </div>
</div>
```

> 📌 **`col` without a number = Bootstrap auto-distributes 12 columns equally.** 不带数字的 `col` = Bootstrap 自动均分12列。

---

### 3.4.3Q **Q: How do `col-{n}` classes control fixed column proportions? `col-{n}`如何控制固定列宽比例？** — Page 12

**A:**

You can **specify the number of slices 指定所占格数** with `col-{n}`.

|Class 类名|Width 占宽|Visual 视觉|
|---|---|---|
|`col-6`|6/12 = **50%**|行宽的一半|
|`col-4`|4/12 ≈ **33%**|行宽的三分之一|
|`col-8`|8/12 ≈ **67%**|行宽的三分之二|

```html
<!-- Equal halves 均等两半 -->
<div class="row">                                  <!-- 行容器 -->
  <div class="col-6 bg-light border">1 of 2</div> <!-- 占6列 = 行宽50% -->
  <div class="col-6 bg-light border">2 of 2</div> <!-- 占6列 = 行宽50%，共12列 ✓ -->
</div>

<!-- Uneven layout 不均等布局 -->
<div class="row">                                  <!-- 行容器 -->
  <div class="col-4 bg-light border">1 of 2</div> <!-- 占4列 = 行宽约33% -->
  <div class="col-8 bg-light border">2 of 2</div> <!-- 占8列 = 行宽约67%，共12列 ✓ -->
</div>
```

---

### 3.4.4Q **Q: What is `col-{breakpoint}-{n}` and how does it enable responsive layouts? `col-{breakpoint}-{n}`是什么，如何实现响应式布局？** — Page 13

**A:**

Use `col-{breakpoint}-{n}` to specify **different layouts for different screen sizes 针对不同屏幕尺寸指定不同布局**.

|Class 类名|Effect 效果|
|---|---|
|`col-md-6`|On **medium+ screens 中等及以上屏幕**: 2 columns (50% each). 每列占50%，形成两列布局。|
|`col-sm-6` + `col-lg-3`|**Small screens 小屏**: 2 columns; **Large screens 大屏**: 4 columns. 小屏2列，大屏4列。|

```html
<!-- Responsive 2-column layout 响应式两列布局 -->
<div class="row">                                       <!-- 行容器 -->
  <div class="col-md-6 bg-light border">1 of 2</div>   <!-- 中等屏及以上占6列(50%) -->
  <div class="col-md-6 bg-light border">2 of 2</div>   <!-- 中等屏及以上占6列(50%) -->
</div>

<!-- 2-col on small, 4-col on large 小屏2列，大屏4列 -->
<div class="row">                                            <!-- 行容器 -->
  <div class="col-sm-6 col-lg-3 bg-light border">1 of 4</div> <!-- 小屏占6列，大屏占3列 -->
  <div class="col-sm-6 col-lg-3 bg-light border">2 of 4</div> <!-- 小屏占6列，大屏占3列 -->
  <div class="col-sm-6 col-lg-3 bg-light border">3 of 4</div> <!-- 小屏占6列，大屏占3列 -->
  <div class="col-sm-6 col-lg-3 bg-light border">4 of 4</div> <!-- 小屏占6列，大屏占3列 -->
</div>
```

> 💡 **类比 Analogy**：就像餐厅根据人数调整桌椅排列——2人小桌，4人大桌，桌子（div）大小随"房间（屏幕）"自动变化。 Like a restaurant rearranging seats — 2-person layout for a small room, 4-person for a large one.


---

> 🔑 **核心洞察 Core Insight — Grid System Summary**

| Class          |   Responsive?    | Control                   |
| :------------- | :--------------: | :------------------------ |
| `col`          |   ✅ All sizes    | Auto equal-width 自动等宽     |
| `col-{n}`      |  ❌ Fixed always  | Manual proportion 手动比例    |
| `col-{bp}-{n}` | ✅ Per breakpoint | Breakpoint-specific 按断点控制 |


---

## 3.5 **Bootstrap Tables – Bootstrap表格 Page 14**

### 3.5.1Q **Q: How does Bootstrap enhance HTML tables? Bootstrap如何增强HTML表格？** — Page 14

**A:**

The class **`table`** adds basic styling: **horizontal lines 水平分割线** + **padding 内边距**. **`table`** 类添加基本样式：水平分割线 + 内边距。

**Additional table modifier classes 附加表格修饰类：**

|Class 类名|Effect 效果|
|---|---|
|`table-striped`|Alternating row background colors 奇偶行交替背景色|
|`table-bordered`|Borders on all cells and the table 所有单元格和表格添加边框|
|`table-hover`|Highlight row on mouse hover 鼠标悬停时高亮该行|
|`table-condensed`|Compact cell padding 更紧凑的单元格内边距|

**Contextual row/cell classes 上下文行/单元格类（状态语义化）：**

|Class 类名|Color 颜色|Meaning 含义|
|---|---|---|
|`success`|🟢 Green 绿色|Positive action 成功/正面操作|
|`danger`|🔴 Red 红色|Error/warning 危险/错误|
|`info`|🔵 Blue 蓝色|Informational 信息提示|
|`warning`|🟡 Yellow 黄色|Caution 警告|
|`active`|⬜ Grey 灰色|Currently selected 当前激活|

```html
<tbody>
  <tr>                                              <!-- 默认行，无特殊背景色 -->
    <td>Default</td>                                <!-- 姓 -->
    <td>Defaultson</td>                             <!-- 名 -->
    <td>def@somemail.com</td>                       <!-- 邮箱 -->
  </tr>
  <tr class="danger">                               <!-- danger类：红色背景，表示危险/错误 -->
    <td>Danger</td>
    <td>Moe</td>
    <td>mary@example.com</td>
  </tr>
  <tr class="info">                                 <!-- info类：蓝色背景，表示信息 -->
    <td>Info</td>
    <td>Dooley</td>
    <td>july@example.com</td>
  </tr>
  <tr class="warning">                              <!-- warning类：黄色背景，表示警告 -->
    <td>Warning</td>
    <td>Refs</td>
    <td>bo@example.com</td>
  </tr>
  <tr class="active">                               <!-- active类：灰色背景，表示激活/选中 -->
    <td>Active</td>
    <td>Activeson</td>
    <td>act@example.com</td>
  </tr>
</tbody>
```

---

## 3.6 **Glyphicons – 图标字体 Page 15**

### 3.6.1Q **Q: What are Glyphicons and how are they used? 什么是Glyphicons，如何使用？** — Page 15

**A:**

Bootstrap comes with **200 built-in icons 200个内置图标** called **Glyphicons**. Bootstrap 内置 200 个图标，称为 **Glyphicons**。

Key property 核心特性:

- Rendered **as text 以文本渲染** → they **resize automatically 自动缩放** with headers, buttons, etc. 以文本形式渲染，随标题、按钮等元素自动缩放，不失真。

Syntax 语法: apply a class to an **empty `<span>` 空span元素**. 语法：将类名应用于一个**空的 `<span>`** 元素。

```html
<p>Search icon on a button:                        <!-- 段落说明文字 -->
  <button type="button"                            <!-- 按钮元素 -->
          class="btn btn-default">                 <!-- btn：Bootstrap按钮基础类；btn-default：默认灰色风格 -->
    <span class="glyphicon                         <!-- 空span，应用Glyphicon基础类 -->
                 glyphicon-search">               <!-- glyphicon-search：具体的搜索图标类 -->
    </span>
    Search                                         <!-- 按钮文字，图标+文字组合 -->
  </button>
</p>
```

Result 效果: `🔍 Search` — a button displaying a search icon followed by the word "Search". 结果：一个带搜索图标和"Search"文字的按钮。

> 💡 **类比 Analogy**：Glyphicon 就像字体中的特殊字符（如 © ® ™），放大缩小完全不失真，因为它本质上是**矢量字形**而非像素图片。 Glyphicons are like special font characters — they scale perfectly because they're **vector glyphs**, not pixel images.

> 🔑 **Why text-based icons 为什么用文本渲染图标**：图片放大会模糊（像素化），而文本/字体在任何分辨率下都清晰锐利，尤其适合**高分辨率屏幕（Retina display 视网膜屏幕）**。 Image-based icons blur when scaled; text-based icons remain crisp at any resolution — ideal for **Retina displays**.

---

## 3.7 **Other Features of Bootstrap – Bootstrap其他功能 Page 16**

### 3.7.1Q **Q: What other advanced components does Bootstrap provide? Bootstrap还提供哪些高级组件？** — Page 16

**A:**

Bootstrap also supports advanced **widgets 组件** and layouts:

|Component 组件|Description 说明|
|---|---|
|**Jumbotron 巨幕**|Large hero/banner section at the top of a page. 页面顶部的大型横幅展示区域。|
|**Modals 模态框**|Pop-up dialog boxes for alerts, forms, or content. 弹出对话框，用于警告、表单或内容展示。|
|**Form Layouts 表单布局**|Styled, responsive form components. 美观且响应式的表单组件。|
|**Carousels 轮播图**|Sliding image or content galleries. 滑动图片或内容的轮播展示。|

These components make a web page look **professional 专业** with **relatively little effort 相对少的工作量**. 这些组件能以极少的工作量使网页呈现专业外观。

---

**Further Resources 延伸学习资源：**

|Resource 资源|URL 链接|
|---|---|
|W3Schools Bootstrap Tutorial W3Schools教程|[https://www.w3schools.com/bootstrap/default.asp](https://www.w3schools.com/bootstrap/default.asp)|
|Official Bootstrap Docs 官方Bootstrap文档|[https://getbootstrap.com/docs/4.3/getting-started/](https://getbootstrap.com/docs/4.3/getting-started/)|

> 📌 Bootstrap is described on W3Schools as: "the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web." W3Schools 将 Bootstrap 描述为："开发响应式、移动优先（mobile-first）Web 项目最流行的 HTML、CSS 和 JS 框架。"

> 🔑 **核心洞察 Core Insight**：这些进阶组件（Jumbotron / Modal / Carousel）的共同逻辑是：**用一个 class 名调用一套完整的 CSS + JS 行为**，开发者无需手动编写动画、弹窗逻辑或滑动机制。 The shared logic of advanced components: **one class name invokes a full CSS + JS behavior** — no manual animation, popup logic, or slide mechanism needed.

---

## 📝 习题 Exercises — Page 6–16

---

### 习题组1：Loading Bootstrap 加载Bootstrap（Page 7–8）

**Q1.1 (Page 7)** EN: What are the two ways to include Bootstrap in a web page? What does Bootstrap consist of? 两种将 Bootstrap 引入网页的方式是什么？Bootstrap 由哪些文件组成（consists of）？

_(Answer: Download/self-host or use CDN. Bootstrap consists of a CSS file, a JavaScript file, and optional theme files. 答：下载自托管或使用 CDN。Bootstrap 由 CSS 文件、JavaScript 文件和可选主题文件组成。)_

---

**Q1.2 (Page 8)** EN: Write the two essential lines that must be added to the `<head>` of a Bootstrap page (besides the CDN links) to ensure it works correctly on mobile devices. 除 CDN 链接外，写出必须添加到 Bootstrap 页面 `<head>` 中的两个关键行，以确保在移动设备（mobile devices）上正常运行。

_(Answer: `<meta charset="utf-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1">` 答：字符编码 meta 标签和 viewport meta 标签。)_

---

**Q1.3 (Page 8) — 深度理解** EN: Why does the `.container` class need to be used? What would happen to the layout if you removed it and placed content directly in `<body>`? 为什么需要使用 `.container` 类？如果去掉它，直接把内容放在 `<body>` 里，布局会发生什么？

_(Answer: `.container` sets responsive margins and centers content. Without it, content would stretch edge-to-edge with no responsive margin control. 答：`.container` 设置响应式边距并使内容居中。没有它，内容会从边到边延伸，失去响应式边距控制。)_

---

### 习题组2：Bootstrap Container 容器（Page 9）

**Q2.1 (Page 9)** EN: Fill in the table: what is the width behavior of `.container`, `.container-fluid`, and `.container-md` on a large screen?

|Class 类名|Width on large screen 大屏宽度行为|
|---|---|
|`.container`|?|
|`.container-fluid`|?|
|`.container-md`|?|

_(Answer: `.container` → fixed max-width; `.container-fluid` → 100% viewport; `.container-md` → fixed max-width (past md breakpoint).)_

---

**Q2.2 (Page 9) — 批判思维** EN: In what situation would `.container-fluid` be a **poor** choice? Give a concrete example. 在什么情况下使用 `.container-fluid` 是**不合适的**？给出一个具体例子。

_(Answer: For text-heavy article content — lines become too long on wide screens, reducing readability. Fixed-width `.container` is better. 答：对于大段文字内容，行宽过长会影响可读性，此时应使用固定宽度的 `.container`。)_

---

### 习题组3：Bootstrap Grid System 网格系统（Page 10–13）

**Q3.1 (Page 10) — 核心概念** EN: What is the fundamental rule of Bootstrap's 12-column grid that must NEVER be violated? Bootstrap 12 列网格系统中，有一条绝对不能违反的基本规则是什么？

_(Answer: The number of spanned columns in a row must always add up to 12. 答：一行中所有列的列数之和必须始终等于 12。)_

---

**Q3.2 (Page 10) — Why理解** EN: Why does Bootstrap use **12** columns specifically, rather than 10 or 16? Bootstrap 为什么具体选择 **12** 列，而不是 10 列或 16 列？

_(Answer: 12 has the most divisors among small numbers (1, 2, 3, 4, 6, 12), enabling clean 1/2, 1/3, 1/4, and 1/6 splits. 答：12 的因数最多（1,2,3,4,6,12），可整除为 1/2, 1/3, 1/4, 1/6 等常用布局比例，灵活性最强。)_

---

**Q3.3 (Page 11–12) — 应用迁移** EN: Write the HTML structure (using Bootstrap grid classes only — no inline styles) to create the following layout:

- Row 1: Three equal columns 三等分
- Row 2: Left column takes 1/4, right column takes 3/4

使用 Bootstrap 网格类（不使用内联样式）写出以下布局的 HTML 结构：

- 第一行：三等分
- 第二行：左侧占 1/4，右侧占 3/4

```html
<!-- Row 1: Three equal columns 第一行：三等分 -->
<div class="row">                                  <!-- 行容器 -->
  <div class="col">Column 1</div>                 <!-- 自动等宽，占1/3 -->
  <div class="col">Column 2</div>                 <!-- 自动等宽，占1/3 -->
  <div class="col">Column 3</div>                 <!-- 自动等宽，占1/3 -->
</div>

<!-- Row 2: 1/4 + 3/4 第二行：1/4 + 3/4 -->
<div class="row">                                  <!-- 行容器 -->
  <div class="col-3">Left</div>                   <!-- 占3列 = 3/12 = 1/4 -->
  <div class="col-9">Right</div>                  <!-- 占9列 = 9/12 = 3/4，合计12 ✓ -->
</div>
```

---

**Q3.4 (Page 13) — 响应式布局** EN: What classes would you use to make a div display as:

- Full-width on extra-small screens 超小屏全宽
- Half-width on medium screens 中等屏半宽
- One-quarter-width on large screens 大屏四分之一宽

写出使一个 div 在以下情况下响应的类名：

_(Answer: `class="col-12 col-md-6 col-lg-3"` — Note: `col-12` is the default full-width on xs. 答：`class="col-12 col-md-6 col-lg-3"`。注意：`col-12` 为超小屏的全宽默认设置。)_

---

**Q3.5 (Page 13) — 对比分析** EN: What is the difference between `col-6` and `col-md-6`? Complete the table:

|Class|xs screen 超小屏|sm screen 小屏|md screen 中等屏|lg screen 大屏|
|---|---|---|---|---|
|`col-6`|?|?|?|?|
|`col-md-6`|?|?|?|?|

_(Answer: `col-6`: 50% on ALL screen sizes at all breakpoints. `col-md-6`: Full-width (100%) on xs/sm; 50% on md and above. 答：`col-6` 在所有屏幕尺寸下都占50%；`col-md-6` 在 xs/sm 下全宽，md 及以上占50%。)_

---

### 习题组4：Bootstrap Tables 表格（Page 14）

**Q4.1 (Page 14)** EN: Match the contextual class to its visual color and semantic meaning:

|Class 类名|Color 颜色|Meaning 语义|
|---|---|---|
|`success`|?|?|
|`danger`|?|?|
|`warning`|?|?|
|`info`|?|?|
|`active`|?|?|

_(Answer: success→Green/正面; danger→Red/危险; warning→Yellow/警告; info→Blue/信息; active→Grey/激活)_

---

**Q4.2 (Page 14) — 应用迁移** EN: You are building an order management table. Which contextual class would you apply to rows representing: (a) a successfully delivered order, (b) a payment failure, (c) an order under review? 你在构建一个订单管理表格。以下情形分别使用哪个上下文类（contextual class）：(a) 成功送达的订单，(b) 付款失败的订单，(c) 审核中的订单？

_(Answer: (a) `success`, (b) `danger`, (c) `warning` or `info`)_

---

### 习题组5：Glyphicons 图标（Page 15）

**Q5.1 (Page 15)** EN: Write the correct HTML to display a search icon (🔍) inside a Bootstrap default button, followed by the text "Find". 写出正确的 HTML，在一个 Bootstrap 默认按钮（btn-default）内显示搜索图标（glyphicon-search），后跟文字"Find"。

```html
<button type="button"                              <!-- 按钮元素，type="button"防止表单提交 -->
        class="btn btn-default">                   <!-- btn：Bootstrap按钮基础样式；btn-default：默认灰色风格 -->
  <span class="glyphicon glyphicon-search">        <!-- 空span：应用Glyphicon搜索图标 -->
  </span>
  Find                                             <!-- 图标右侧文字 -->
</button>
```

---

**Q5.2 (Page 15) — Why深度理解** EN: Why are Glyphicons rendered as **text** rather than as image files (`.png`, `.jpg`)? What is the main technical advantage? 为什么 Glyphicons 以**文本**而非图片文件（`.png`、`.jpg`）渲染？主要技术优势是什么？

_(Answer: Text-based rendering means icons scale perfectly at any size without pixelation, especially on high-resolution (Retina 视网膜) displays. They also inherit font color, so they automatically match surrounding text styling. 答：以文本渲染意味着图标在任何尺寸下都完美缩放，不会像素化，尤其适合高分辨率屏幕。同时继承字体颜色，自动匹配周围文本样式。)_

---

### 习题组6：Other Features 其他功能（Page 16）

**Q6.1 (Page 16)** EN: Name the four advanced Bootstrap widgets mentioned in the lecture. For each, give a real-world UI example of where you would use it. 说出讲义中提到的四个高级 Bootstrap 组件（widgets）。对每个组件，给出一个真实 UI 使用场景。

*(Answer:

- Jumbotron 巨幕 → Hero banner on homepage 首页大型横幅
- Modal 模态框 → Login popup / confirmation dialog 登录弹窗/确认对话框
- Form Layout 表单布局 → Registration/checkout form 注册/结账表单
- Carousel 轮播图 → Product image slideshow 产品图片幻灯片)*

---

---

## 🎯 应试要点总结 Exam Key Points Summary

---

### ✅ 必考核心概念 Must-Know Concepts

|#|考点 Exam Point|页码 Page|
|---|---|---|
|1|CSS 的四大局限性（unintuitive / responsive / over-engineering / creativity）|Page 3|
|2|CSS 框架的定义：开源库 + CSS+JS 构建响应式组件|Page 4|
|3|框架核心优点（响应式）vs 缺点（视觉同质化）|Page 4–5|
|4|Bootstrap 加载方式：CDN vs 自托管；三个组成文件|Page 7|
|5|Viewport meta 标签的作用：移动端正确缩放|Page 8|
|6|三种容器类的区别：`.container` / `.container-fluid` / `.container-{bp}`|Page 9|
|7|12列网格基本规则：列数必须加总为12|Page 10|
|8|`col` / `col-{n}` / `col-{bp}-{n}` 三类列类的区别与使用|Page 11–13|
|9|表格类：`table` 基础 + 四个修饰类 + 五个上下文类|Page 14|
|10|Glyphicons：200个图标、文本渲染、空`<span>`语法|Page 15|
|11|四个高级组件：Jumbotron / Modal / Form Layout / Carousel|Page 16|

---

### ⚠️ 边界情况与特殊案例 Edge Cases & Special Cases

|情况|说明|页码|
|---|---|---|
|**列数不等于12**|列数 < 12：右侧留白 gap；列数 > 12：溢出换行到下一行。两者都是设计错误。 Columns < 12: gap on right; > 12: overflow wraps to next line. Both are design errors.|Page 10|
|**`col` 与 `col-{n}` 混用**|混用时，`col-{n}` 先占固定列数，剩余列由 `col` 均分。 When mixed, `col-{n}` takes its fixed columns first; remaining columns are split equally by `col`.|Page 11–12|
|**`col-md-6` 在小屏的行为**|在 xs/sm 屏幕上自动变为**全宽（100%）**，不是 50%。On xs/sm screens, it automatically becomes **full-width (100%)**, not 50%.|Page 13|
|**Glyphicon 在空span外有内容**|Glyphicon `<span>` 必须为空，不能有内容，否则图标不渲染。The Glyphicon `<span>` must be **empty** — content inside will break the icon rendering.|Page 15|
|**不使用 `.row` 直接用列类**|列类 `col-*` 必须嵌套在 `.row` 内，否则响应式布局行为不可预期。Column classes must be nested inside `.row`, otherwise responsive behavior is unpredictable.|Page 10–13|

---

### 🧠 知识关联图 Knowledge Connection Map

```
CSS 局限性 (Page 3)
       ↓ 催生了
CSS 框架 (Page 4)
       ↓ 代表框架
Bootstrap (Page 5)
       ↓ 加载方式
CDN / Download (Page 7)
       ↓ 页面基础结构
<meta viewport> + .container (Page 8–9)
       ↓ 核心布局系统
12-Column Grid System (Page 10–13)
   ├── col          → 等宽，所有屏幕
   ├── col-{n}      → 固定比例，所有屏幕
   └── col-{bp}-{n} → 响应式，按断点
       ↓ 组件增强
Tables (Page 14) → Glyphicons (Page 15) → Widgets (Page 16)
```

---

### 📋 快速对照卡 Quick Reference Card

```
Bootstrap Grid Cheatsheet
─────────────────────────────────────────
col        → 等宽，自动均分，所有屏幕
col-6      → 固定50%，所有屏幕
col-md-6   → 中等屏及以上50%，小屏全宽
col-sm-6 col-lg-3 → 小屏50%，大屏25%

Container Cheatsheet
─────────────────────────────────────────
.container         → 固定最大宽度，居中
.container-fluid   → 始终100%视口宽度
.container-{bp}    → 到达断点前全宽，之后固定

Table Classes Cheatsheet
─────────────────────────────────────────
table              → 基础样式（必须加）
table-striped      → 斑马纹
table-bordered     → 所有边框
table-hover        → 悬停高亮
table-condensed    → 紧凑
success / danger / warning / info / active → 行/单元格语义色

Glyphicon Syntax
─────────────────────────────────────────
<span class="glyphicon glyphicon-[name]"></span>
```