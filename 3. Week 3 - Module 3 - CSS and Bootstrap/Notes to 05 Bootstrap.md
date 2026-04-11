
# **CSS Frameworks – CSS框架 Page 2 -- Page 5**

---

## **Page 2--Page 5: CSS Frameworks – CSS框架**

### **Page 2: CSS Frameworks – CSS框架（章节封面）**

This page is the section title slide, introducing the topic of CSS Frameworks. 本页为章节标题页，引出 CSS 框架这一主题。

---

### **Page 3: Challenges with CSS – CSS的挑战**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=3&selection=44,0,44,20&color=yellow|05 Bootstrap, p.3]]
> > Challenges with CSS
> 
> 

CSS is powerful but has clear pain points that motivate the use of frameworks. CSS 虽强大，但存在明显痛点，这正是使用框架的动机。

|局限性|说明|
|---|---|
|**Unintuitive operations 操作不直观**|Simple tasks like centering text/images can be surprisingly tricky. 居中文字/图片等简单操作往往出乎意料地繁琐。|
|**Responsive design is hard 响应式设计困难**|Writing styles that adapt to different devices (mobile, tablet, PC) requires significant effort. 编写适配不同设备的样式需要大量工作。|
|**Over-engineering 过度设计**|Most sites don't need the full power of CSS; a simpler subset is sufficient. 大多数网站不需要完整的 CSS 能力，简单子集已足够。|
|**High creativity barrier 创意门槛高**|Making something look attractive is inherently creative and time-consuming. 让页面好看本身就是一项耗时的创造性工作。|

> 💡 **类比 Analogy**：CSS 就像拥有整箱工具，但拧一颗螺丝却要花大量时间找合适的螺丝刀。框架就是预装好的"工具包"。  
> CSS is like having a full toolbox but spending ages finding the right screwdriver. Frameworks are the pre-packaged toolkit.

---

### **Page 4: Frameworks – 框架（什么是CSS框架）**
> [!PDF] [[05 Bootstrap.pdf#page=4&selection=25,0,25,11|05 Bootstrap, p.4]]
> > Frameworks
> 

CSS frameworks are **open-source libraries** for developing responsive web applications. CSS 框架是用于开发响应式 Web 应用的**开源库**。

- They use **CSS + JavaScript** to build aesthetic style components with very little effort. 它们结合 **CSS + JavaScript**，以极少的工作量构建出美观的样式组件。
- Key advantage — **built-in responsiveness**: one codebase looks good on mobile, tablet, and PC automatically. 核心优势——**内置响应式**：同一套代码在手机、平板、PC 上自动呈现良好效果。

> 💡 The page shows a visual demo of a Bootstrap page resizing across different screen widths, illustrating responsive behavior in action. 本页展示了一个 Bootstrap 页面在不同屏幕宽度下的响应效果演示图。

---

### **Page 5: Common Frameworks – 常见框架**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=5&selection=0,0,0,17&color=yellow|05 Bootstrap, p.5]]
> > Common frameworks


Four major CSS frameworks are introduced: 本页介绍了四个主流 CSS 框架：

|框架|描述|
|---|---|
|**Bootstrap**|"Sleek, intuitive, and powerful front-end framework for faster and easier web development." 简洁、直观、强大的前端框架。|
|**Tailwind CSS**|"A Utility-First CSS Framework for Rapid UI Development." 实用优先，适合快速 UI 开发。|
|**Semantic UI**|"User Interface is the language of the web." 以语义化方式构建 UI。|
|**Foundation**|"The most advanced responsive front-end framework in the world." 强调高级响应式能力。|

⚠️ **Key Disadvantage – 核心缺点**：

> Websites built with the same framework will often **appear visually similar**. 使用同一框架构建的网站在视觉上往往**大同小异**，缺乏独特性。

---

### **Summary 总结**

- CSS has real limitations in responsive design, alignment, and creativity. CSS 在响应式设计、对齐和创意方面存在明显局限。
- Frameworks solve these with pre-built CSS + JS components. 框架通过预构建的 CSS + JS 组件解决了这些问题。
- Frameworks are inherently responsive — one codebase works across all devices. 框架天然支持响应式，一套代码适配所有设备。
- The trade-off: speed and convenience **vs.** visual uniqueness. 权衡点：开发效率与视觉独特性之间的取舍。
- Bootstrap is the most popular example, alongside Tailwind CSS, Semantic UI, and Foundation. Bootstrap 是最流行的框架，其次还有 Tailwind CSS、Semantic UI 和 Foundation。

---

## 🧭 Guided Learning Questions 引导思考问题

1. **(Page 3)** What specific CSS task do you find most frustrating, and how might a framework simplify it? 你觉得哪个 CSS 操作最头疼？框架会如何简化它？
    
2. **(Page 3)** Why is "creating responsive styles" considered a challenge in pure CSS? What does "responsive" mean? 为什么"创建响应式样式"在纯 CSS 中是个难题？"响应式"是什么意思？
    
3. **(Page 4)** Frameworks rely on both CSS and JavaScript — why might JavaScript be needed for styling components? 框架同时依赖 CSS 和 JavaScript——为什么样式组件也需要 JavaScript？
    
4. **(Page 5)** All four frameworks claim to be "responsive" — what technical mechanism makes a layout responsive? 四个框架都声称支持响应式——是什么技术机制让布局具备响应式能力？
    
5. **(Page 5)** The disadvantage is "visual similarity." In what real-world scenarios would this matter most — and when would it NOT matter? 缺点是"视觉趋同"——在哪些真实场景下这个问题最关键？哪些场景下根本不重要？
[[3. Week 3 - Module 3 - CSS and Bootstrap/Toggle Notes to Week 3 05Bootstap.md]]
---

# **The Bootstrap Framework – Bootstrap框架 Page 6 -- Page 16**

## **Page 6--Page 8: Loading & First Page – 加载Bootstrap与第一个页面**

### **Page 6: The Bootstrap Framework – Bootstrap框架（章节封面）**

> [!PDF|yellow] [[05 Bootstrap.pdf#page=6&selection=0,0,2,10&color=yellow|05 Bootstrap, p.6]]
> > The Bootstrap framework



[[3. Week 3 - Module 3 - CSS and Bootstrap/Week3_Sample_Code/Toggle Notes to Week3 05 Bootstrap page 06.md]]

This page is the section title slide, introducing the Bootstrap Framework chapter. 本页为章节标题页，引入 Bootstrap 框架这一主题。


---

### **Page 7: Loading Bootstrap – 加载Bootstrap**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=7&selection=18,0,18,18&color=yellow|05 Bootstrap, p.7]]
> > Loading Bootstrap

There are **two ways** to include Bootstrap in your page: 有**两种方式**将 Bootstrap 引入页面：

|方式|说明|
|---|---|
|**Download 下载**|Host the code yourself on your own server. 将代码托管在自己的服务器上。|
|**CDN 内容分发网络**|Reference an external CDN link in the `<head>` — no download needed. 在 `<head>` 中引用外部 CDN 链接，无需下载。|

Bootstrap consists of: Bootstrap 由以下部分组成：

- A **CSS file** — handles styling. 一个 **CSS 文件**——处理样式。
- A **JavaScript file** — handles interactive components. 一个 **JavaScript 文件**——处理交互组件。
- Optional **theme files** 可选的**主题文件**。

**CDN Code 代码示例：**

```html
<!-- Latest compiled and minified CSS -->
<!-- 最新压缩版 Bootstrap CSS -->
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
  integrity="sha384-..."
  crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<!-- 最新压缩版 Bootstrap JavaScript -->
<script
  integrity="sha384-Tc5IQib027qvyjSMfHj0MaLkfuWVxZxUPnCJA7..."
  crossorigin="anonymous">
</script>
```

> 💡 **类比 Analogy**：CDN 就像订阅流媒体平台——不用把电影下载到本地，直接在线播放即可。 CDN is like a streaming service — you don't download the movie; you just stream it directly.

---

### **Page 8: Your First Bootstrap Page – 第一个Bootstrap页面**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=8&selection=12,0,12,26&color=yellow|05 Bootstrap, p.8]]
> > Your first Bootstrap page


Two essential setup steps: 两个关键设置步骤：

1. Include the **CDN libraries** in `<head>`. 在 `<head>` 中引入 **CDN 库**。
2. Add a **viewport meta-tag** for zooming and scaling on mobile devices. 添加 **viewport meta 标签**以支持移动设备缩放。

The **`.container` class** automatically sets margins that respond to the page size. **`.container` 类**会自动设置随页面大小响应的外边距。

**Full Example Code 完整示例代码：**

```html
<!DOCTYPE html>                                    <!-- HTML5文档类型声明 -->
<html lang="en">                                   <!-- 设置语言为英文 -->
<head>
  <title>Bootstrap Example</title>                 <!-- 页面标题 -->
  <meta charset="utf-8">                           <!-- 字符编码设置为UTF-8 -->
  <meta name="viewport"                            <!-- 视口meta标签 -->
        content="width=device-width, initial-scale=1">              <!-- 宽度等于设备宽度 -->
                                  <!-- 初始缩放比例为1 -->
  <script  src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">       <!-- 引入jQuery库 -->
    
  </script>
</head>
<body>
  <div class="container">                          <!-- Bootstrap容器，自动设置响应式边距 -->
    <h1>My First Bootstrap Page</h1>              <!-- 一级标题 -->
    <p>This part is inside a .container class.</p><!-- 段落内容 -->
  </div>
</body>
</html>
```

> 📌 The `.container` class provides a **responsive fixed-width** container, centering content on the page. `.container` 类提供**响应式固定宽度**容器，使内容在页面中居中显示。

---

## **Page 9: Bootstrap Container – Bootstrap容器**

> [!PDF|yellow] [[05 Bootstrap.pdf#page=9&selection=183,0,183,19&color=yellow|05 Bootstrap, p.9]]
> > Bootstrap Container



Three container classes with different width behaviors: 三种容器类，宽度行为各不相同：

|类名 Class|行为 Behavior|
|---|---|
|`.container`|Fixed-width, responsive — max-width adjusts at breakpoints (xs/sm/md/lg/xl/xxl). 固定宽度响应式，最大宽度随断点动态调整。|
|`.container-fluid`|Always **100% viewport width**, regardless of screen size. 始终占**视口100%宽度**，不受屏幕大小影响。|
|`.container-{breakpoint}` e.g. `.container-sm`, `.container-md`|**Fluid (full-width) until** the breakpoint is reached, then behaves like `.container`. 在到达断点前为**全宽流式**，到达后转为固定宽度。|

> 💡 **类比 Analogy**：
> 
> - `.container` = 固定尺寸的相框，随屏幕换框但内容居中。
> - `.container-fluid` = 橡皮筋，永远拉满整个屏幕宽度。
> - `.container-{breakpoint}` = 超过某个尺寸后才"固定"的弹性边框。

---

## **Page 10--Page 13: The Bootstrap Grid System – Bootstrap网格系统**

### **Page 10: Grid Concept – 网格基本概念**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=10&selection=38,0,38,26&color=yellow|05 Bootstrap, p.10]]
> > The Bootstrap grid system

Bootstrap uses **rows of 12 columns** for layout. Bootstrap 使用 **12列行**进行布局。

- Every `div` can be specified to **span a number of these columns**. 每个 `div` 可以指定**跨越若干列**。
- Layout can be defined per **device size**: extra small, small, medium, large. 可针对不同**设备尺寸**（超小、小、中、大）分别定义布局。
- ⚠️ **The column numbers must always add up to 12.** ⚠️ **列数之和必须始终等于 12。**

Visual layout pattern shown in the PDF: PDF 中展示的视觉布局模式：

|示例|列分配|
|---|---|
|12个等宽列|span1 × 12|
|三等分|span4 + span4 + span4|
|不均等|span4 + span8|
|二等分|span6 + span6|
|整行|span12|

**Code Example 代码示例：**

```html
<div class="col-3"                                 <!-- 占12列中的3列（1/4宽） -->
  style="background-color:rgb(172,232,51);
         border:1cm">
  col-3
</div>
<div class="col-9"                                 <!-- 占12列中的9列（3/4宽） -->
  style="background-color:rgb(232,51,223);
         border:1cm">
  col-9
</div>
```

---

### **Page 11: Equal-Width Columns with `col` – 使用`col`创建等宽列**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=11&selection=34,0,34,26&color=yellow|05 Bootstrap, p.11]]
> > The Bootstrap grid system


The class **`col`** creates **equal-width columns** across all devices and viewports. **`col`** 类在所有设备和视口中创建**等宽列**。

Columns are **centered in the page** with the parent `.container`. 列通过父级 `.container` **居中显示**在页面中。

**Code Example 代码示例：**

```html
<div class="container">                            <!-- Bootstrap容器 -->
  <h1 class="mb-5">Bootstrap Grid Columns</h1>    <!-- 标题，底部外边距5 -->

  <!-- Basic Grid Layout 基本网格布局 -->
  <div class="row">                                <!-- 行容器 -->
    <div class="col text-bg-light border">         <!-- 等宽列1，共2列 -->
      1 of 2
    </div>
    <div class="col bg-light border">             <!-- 等宽列2，共2列 -->
      2 of 2
    </div>
  </div>

  <div class="row">                                <!-- 第二行 -->
    <div class="col bg-light border">1 of 3</div> <!-- 等宽列1，共3列 -->
    <div class="col bg-light border">2 of 3</div> <!-- 等宽列2，共3列 -->
    <div class="col bg-light border">3 of 3</div> <!-- 等宽列3，共3列 -->
  </div>
</div>
```

> 📌 `col` without a number = Bootstrap **auto-distributes** the 12 columns equally. 不带数字的 `col` = Bootstrap **自动均分** 12 列。

---

### **Page 12: Fixed-Width Column Sizes – 固定列宽`col-n`**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=12&selection=52,0,52,26&color=yellow|05 Bootstrap, p.12]]
> > The Bootstrap grid system


You can **specify the number of slices** a column takes up with `col-{n}`. 可以使用 `col-{n}` **指定列所占的格数**。

|类名|占宽 Width|
|---|---|
|`col-6`|6/12 = **50%** of row 行宽的50%|
|`col-4`|4/12 = **33%** of row 行宽的33%|
|`col-8`|8/12 = **67%** of row 行宽的67%|

**Code Example 代码示例：**

```html
<!-- Equal halves 均等两半 -->
<div class="row">
  <div class="col-6 bg-light border">1 of 2</div> <!-- 占6列，即行宽的一半 -->
  <div class="col-6 bg-light border">2 of 2</div> <!-- 占6列，即行宽的一半 -->
</div>

<!-- Uneven layout 不均等布局 -->
<div class="row">
  <div class="col-4 bg-light border">1 of 2</div> <!-- 占4列，即行宽的1/3 -->
  <div class="col-8 bg-light border">2 of 2</div> <!-- 占8列，即行宽的2/3 -->
</div>
```

---

### **Page 13: Responsive Grid – 响应式网格`col-{breakpoint}-{n}`**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=13&selection=143,0,143,26&color=yellow|05 Bootstrap, p.13]]
> > The Bootstrap grid system


Use `col-{breakpoint}-{n}` to specify **different layouts for different screen sizes**. 使用 `col-{breakpoint}-{n}` 为**不同屏幕尺寸**指定不同布局。

|类名|效果|
|---|---|
|`col-md-6`|On **medium+** screens: 2 columns (50% each). 在**中等及以上**屏幕：2列（各占50%）。|
|`col-sm-6` + `col-lg-3`|On **small** screens: 2 columns; on **large** screens: 4 columns. 在**小**屏：2列；在**大**屏：4列。|

**Code Example 代码示例：**

```html
<!-- Responsive 2-column layout 响应式两列布局 -->
<div class="row">
  <div class="col-md-6 bg-light border">1 of 2</div> <!-- 中等屏及以上占6列 -->
  <div class="col-md-6 bg-light border">2 of 2</div> <!-- 中等屏及以上占6列 -->
</div>

<!-- Responsive 2-col on small, 4-col on large 小屏2列，大屏4列 -->
<div class="row">
  <div class="col-sm-6 col-lg-3 bg-light border">1 of 4</div> <!-- 小屏占6列，大屏占3列 -->
  <div class="col-sm-6 col-lg-3 bg-light border">2 of 4</div> <!-- 小屏占6列，大屏占3列 -->
  <div class="col-sm-6 col-lg-3 bg-light border">3 of 4</div> <!-- 小屏占6列，大屏占3列 -->
  <div class="col-sm-6 col-lg-3 bg-light border">4 of 4</div> <!-- 小屏占6列，大屏占3列 -->
</div>
```

> 💡 **类比 Analogy**：就像同一张桌子，小房间里只能放2把椅子，大房间里放4把。布局随"房间大小"自动调整。 Like seating: 2 chairs in a small room, 4 in a large one — the layout adapts to the "room size" automatically.

---

## **Page 14: Bootstrap Tables – Bootstrap表格**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=14&selection=41,0,41,17&color=yellow|05 Bootstrap, p.14]]
> > Bootstrap tables

The class **`table`** adds basic styling: horizontal lines + padding. **`table`** 类添加基本样式：水平分割线 + 内边距。

**Additional table classes 附加表格类：**

|类名 Class|效果 Effect|
|---|---|
|`table-striped`|Alternating row colors 奇偶行颜色交替|
|`table-bordered`|Borders on all cells 所有单元格添加边框|
|`table-hover`|Highlight row on hover 鼠标悬停时高亮行|
|`table-condensed`|Compact padding 紧凑内边距|

**Contextual row/cell classes 上下文行/单元格类：**

|类名 Class|含义 Meaning|
|---|---|
|`success` ✅|Green — positive action 绿色，表示成功|
|`danger` ❌|Red — error/warning 红色，表示危险|
|`info` ℹ️|Blue — informational 蓝色，表示信息|
|`warning` ⚠️|Yellow — caution 黄色，表示警告|
|`active`|Grey — currently selected 灰色，表示激活状态|

**Code Example 代码示例（contextual rows 上下文行）：**

```html
<tbody>
  <tr>                                              <!-- 默认行（无特殊样式） -->
    <td>Default</td>
    <td>Defaultson</td>
    <td>def@somemail.com</td>
  </tr>
  <tr class="danger">                               <!-- 危险行：红色背景 -->
    <td>Danger</td>
    <td>Moe</td>
    <td>mary@example.com</td>
  </tr>
  <tr class="info">                                 <!-- 信息行：蓝色背景 -->
    <td>Info</td>
    <td>Dooley</td>
    <td>july@example.com</td>
  </tr>
  <tr class="warning">                              <!-- 警告行：黄色背景 -->
    <td>Warning</td>
    <td>Refs</td>
    <td>bo@example.com</td>
  </tr>
  <tr class="active">                               <!-- 激活行：灰色背景 -->
    <td>Active</td>
    <td>Activeson</td>
    <td>act@example.com</td>
  </tr>
</tbody>
```

---

## **Page 15: Glyphicons – 图标字体**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=15&selection=19,0,19,11&color=yellow|05 Bootstrap, p.15]]
> > Glyphicons
> 
> 


Bootstrap includes **200 built-in icons** called **Glyphicons**. Bootstrap 内置 **200 个图标**，称为 **Glyphicons**。

Key properties: 核心特性：

- Rendered **as text** → they **scale automatically** with headings, buttons, etc. 以**文本形式**渲染 → 随标题、按钮等元素**自动缩放**。
- Syntax: apply a class to an **empty `<span>`**. 语法：将类应用于一个**空的 `<span>`** 元素。

**Code Example 代码示例：**

```html
<p>Search icon on a button:                        <!-- 段落：按钮上的搜索图标 -->
  <button type="button"                            <!-- 按钮元素 -->
          class="btn btn-default">                 <!-- Bootstrap默认按钮样式 -->
    <span class="glyphicon                         <!-- 空span，应用Glyphicon类 -->
                 glyphicon-search">
    </span>
    Search                                         <!-- 按钮文字 -->
  </button>
</p>
```

> 📌 Result: A button displaying a 🔍 search icon followed by the word "Search". 结果：显示一个带有 🔍 搜索图标和文字"Search"的按钮。

> 💡 **类比 Analogy**：Glyphicon 就像字体中的特殊字符（如 ©️ ®️），放大缩小都不失真，因为它本质上是"字"而非图片。 Glyphicons are like special font characters — they scale perfectly because they're text, not images.

---

## **Page 16: Other Features of Bootstrap – Bootstrap的其他功能**
> [!PDF|yellow] [[05 Bootstrap.pdf#page=13&selection=143,0,143,26&color=yellow|05 Bootstrap, p.13]]
> > The Bootstrap grid system


Bootstrap also supports advanced **widgets and components**: Bootstrap 还支持以下高级**组件和部件**：

|组件 Component|说明 Description|
|---|---|
|**Jumbotron 巨幕**|Large hero/banner section at top of page 页面顶部的大型横幅区域|
|**Modals 模态框**|Pop-up dialog boxes 弹出对话框|
|**Form Layouts 表单布局**|Styled, responsive forms 美观的响应式表单|
|**Carousels 轮播图**|Sliding image/content galleries 滑动图片/内容轮播|

These components make a web page look **professional with relatively little effort**. 这些组件能以**相对较少的工作量**使网页呈现出**专业外观**。

**Further Resources 延伸学习资源：**

|资源|链接|
|---|---|
|W3Schools Bootstrap Tutorial|[https://www.w3schools.com/bootstrap/default.asp](https://www.w3schools.com/bootstrap/default.asp)|
|Official Bootstrap Docs|[https://getbootstrap.com/docs/4.3/getting-started/](https://getbootstrap.com/docs/4.3/getting-started/)|

---

### Summary 总结

- Bootstrap is loaded via **CDN** (CSS + JS files) or self-hosted; a **viewport meta-tag** is also required. Bootstrap 通过 **CDN**（CSS + JS 文件）加载或自行托管，同时需要 **viewport meta 标签**。
- Three container types: **`.container`** (fixed responsive), **`.container-fluid`** (always 100%), **`.container-{breakpoint}`** (fluid until breakpoint). 三种容器：**固定响应式**、**始终全宽**、**到断点前全宽**。
- The **12-column grid** is the core layout tool; columns must **always sum to 12**. **12列网格**是核心布局工具，列数**必须始终加总为12**。
- Use **`col`** for equal widths, **`col-{n}`** for fixed proportions, **`col-{bp}-{n}`** for device-specific responsive layouts. 用 **`col`** 均等分配，**`col-{n}`** 固定比例，**`col-{bp}-{n}`** 针对不同设备响应。
- **Table classes** (`table`, `table-striped`, etc.) and **contextual classes** (`success`, `danger`, etc.) style tables quickly. **表格类**和**上下文类**可快速美化表格。
- **Glyphicons** provide 200 scalable text-based icons via an empty `<span>`. **Glyphicons** 通过空 `<span>` 提供200个可缩放文本图标。
- Advanced widgets (Jumbotron, Modal, Carousel, Forms) further enhance professional appearance. 高级组件（巨幕、模态框、轮播图、表单）进一步提升专业外观。

---

## 🧭 Guided Learning Questions 引导思考问题

1. **(Page 7)** What is the difference between loading Bootstrap via CDN vs. downloading it? When might you prefer one over the other? 通过 CDN 加载 Bootstrap 和直接下载有何区别？在什么情况下你会优先选择其中一种？
    
2. **(Page 8)** Why is the `<meta name="viewport">` tag necessary in a Bootstrap page? What happens if you omit it? Bootstrap 页面中为什么需要 `<meta name="viewport">` 标签？如果省略会发生什么？
    
3. **(Page 9)** When would you choose `.container-fluid` over `.container`? Can you think of a real website layout that uses each? 什么情况下选择 `.container-fluid` 而非 `.container`？你能想到分别使用这两种容器的真实网站布局吗？
    
4. **(Page 10)** Why does Bootstrap's grid system use exactly **12** columns instead of 10 or 16? Bootstrap 网格系统为什么选择 **12** 列而不是10列或16列？（提示：12的因数有哪些？）
    
5. **(Page 12-13)** What is the difference between `col-6` and `col-md-6`? Write the column classes needed to make a layout that shows **1 column on mobile** and **3 columns on large screens**. `col-6` 和 `col-md-6` 有何区别？请写出实现"手机端1列、大屏3列"所需的列类名。
    
6. **(Page 14)** What contextual class would you apply to a row showing a **failed payment** in a table? What about a **pending review**? 在表格中显示**付款失败**的行应使用哪个上下文类？**待审核**呢？
    
7. **(Page 15)** Glyphicons are rendered as text rather than images. What are the **advantages** of this approach for responsive design? Glyphicons 以文本而非图片渲染。这种方式对响应式设计有哪些**优势**？


---

