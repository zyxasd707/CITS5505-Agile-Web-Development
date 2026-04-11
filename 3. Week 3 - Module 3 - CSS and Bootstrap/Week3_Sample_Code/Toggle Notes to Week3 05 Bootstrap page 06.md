
---

## 📁 文件结构说明

```
📁 without-bootstrap/
    ├── index.html
    └── style.css

📁 with-bootstrap/
    └── index.html        ← 单文件，CDN加载Bootstrap
```

---

## 📄 第一个文件组：不使用 Bootstrap（纯 HTML + CSS）

---

### 📄 `without-bootstrap/index.html`

```html
<!DOCTYPE html>
<!-- 不使用Bootstrap的纯HTML页面 | Pure HTML page without Bootstrap -->
<html lang="en">
<head>
  <meta charset="utf-8">                  <!-- 字符编码 | Character encoding -->
  <meta name="viewport"
        content="width=device-width,
                 initial-scale=1">        <!-- 视口设置 | Viewport setting -->
  <title>Without Bootstrap</title>        <!-- 页面标题 | Page title -->
  <link rel="stylesheet"
        href="style.css">                 <!-- 引入外部CSS | Link external CSS -->
</head>
<body>

  <!-- 导航栏 | Navigation bar -->
  <nav class="navbar">
    <span class="brand">MyWebsite</span>  <!-- 网站名称 | Site brand -->
    <ul class="nav-links">                <!-- 导航链接列表 | Nav link list -->
      <li><a href="#">Home</a></li>       <!-- 主页链接 | Home link -->
      <li><a href="#">About</a></li>      <!-- 关于链接 | About link -->
      <li><a href="#">Contact</a></li>    <!-- 联系链接 | Contact link -->
    </ul>
  </nav>

  <!-- 主容器 | Main container -->
  <div class="container">

    <!-- 大标题横幅区 | Hero banner section -->
    <div class="hero">
      <h1>Welcome to My Page</h1>         <!-- 主标题 | Main heading -->
      <p>This is built with plain HTML and CSS only.</p>
      <!-- 说明文字：仅用纯HTML和CSS构建 | Description text -->
      <button class="btn-primary">
        Get Started                        <!-- 主按钮 | Primary button -->
      </button>
    </div>

    <!-- 三列网格 | Three-column grid -->
    <div class="grid-3">
      <div class="card">                  <!-- 卡片1 | Card 1 -->
        <h3>Column 1</h3>
        <p>Some content here. 一些内容。</p>
      </div>
      <div class="card">                  <!-- 卡片2 | Card 2 -->
        <h3>Column 2</h3>
        <p>Some content here. 一些内容。</p>
      </div>
      <div class="card">                  <!-- 卡片3 | Card 3 -->
        <h3>Column 3</h3>
        <p>Some content here. 一些内容。</p>
      </div>
    </div>

    <!-- 数据表格 | Data table -->
    <table class="my-table">
      <thead>
        <tr>
          <th>First Name 姓</th>          <!-- 表头：姓 | Header: First name -->
          <th>Last Name 名</th>           <!-- 表头：名 | Header: Last name -->
          <th>Email 邮箱</th>             <!-- 表头：邮箱 | Header: Email -->
          <th>Status 状态</th>            <!-- 表头：状态 | Header: Status -->
        </tr>
      </thead>
      <tbody>
        <tr>                              <!-- 默认行 | Default row -->
          <td>Alice</td>
          <td>Smith</td>
          <td>alice@example.com</td>
          <td>Active</td>
        </tr>
        <tr class="row-danger">           <!-- 危险行（需手动写CSS） | Danger row (manual CSS needed) -->
          <td>Bob</td>
          <td>Jones</td>
          <td>bob@example.com</td>
          <td>Failed</td>
        </tr>
        <tr class="row-success">          <!-- 成功行（需手动写CSS） | Success row (manual CSS needed) -->
          <td>Carol</td>
          <td>Lee</td>
          <td>carol@example.com</td>
          <td>Success</td>
        </tr>
        <tr class="row-warning">          <!-- 警告行（需手动写CSS） | Warning row (manual CSS needed) -->
          <td>Dave</td>
          <td>Kim</td>
          <td>dave@example.com</td>
          <td>Pending</td>
        </tr>
      </tbody>
    </table>

  </div><!-- /container -->

</body>
</html>
```

---

### 📄 `without-bootstrap/style.css`

```css
/* ── 全局重置 Global Reset ── */
* {
  box-sizing: border-box;                 /* 盒模型包含padding和border | Box model includes padding/border */
  margin: 0;                              /* 去除默认外边距 | Remove default margin */
  padding: 0;                             /* 去除默认内边距 | Remove default padding */
}

body {
  font-family: Arial, sans-serif;         /* 字体设置 | Font setting */
  background-color: #f5f5f5;             /* 背景色：浅灰 | Background: light grey */
  color: #333;                            /* 文字颜色：深灰 | Text color: dark grey */
}

/* ── 导航栏 Navbar ── */
.navbar {
  background-color: #333;                 /* 导航背景色：深色 | Navbar background: dark */
  color: white;                           /* 文字颜色：白 | Text color: white */
  display: flex;                          /* 弹性布局，让品牌名和链接左右排列 | Flexbox for brand + links */
  align-items: center;                    /* 垂直居中 | Vertical center */
  justify-content: space-between;         /* 两端对齐 | Space between brand and links */
  padding: 12px 24px;                     /* 内边距 | Padding */
}

.brand {
  font-size: 1.5rem;                      /* 品牌名字体大小 | Brand font size */
  font-weight: bold;                      /* 粗体 | Bold */
}

.nav-links {
  list-style: none;                       /* 去除列表样式 | Remove list style */
  display: flex;                          /* 横向排列 | Horizontal layout */
  gap: 20px;                              /* 链接间距 | Gap between links */
}

.nav-links a {
  color: white;                           /* 链接颜色：白 | Link color: white */
  text-decoration: none;                  /* 去除下划线 | Remove underline */
}

/* ── 主容器 Container ── */
/* ⚠️ 注意：需要手动设置最大宽度、居中和响应式边距 */
/* ⚠️ Note: Must manually set max-width, centering, and responsive margins */
.container {
  max-width: 960px;                       /* 最大宽度 | Max width */
  margin: 0 auto;                         /* 水平居中 | Center horizontally */
  padding: 0 15px;                        /* 左右内边距 | Left/right padding */
}

/* ── 英雄横幅 Hero Banner ── */
/* ⚠️ 注意：Bootstrap的Jumbotron一行class就能实现，这里需要手动写全部样式 */
/* ⚠️ Note: Bootstrap Jumbotron does this with one class; here we write it all manually */
.hero {
  background-color: #e9ecef;             /* 背景色：浅灰 | Background: light grey */
  padding: 40px 20px;                     /* 内边距 | Padding */
  margin: 20px 0;                         /* 上下外边距 | Top/bottom margin */
  border-radius: 6px;                     /* 圆角 | Border radius */
  text-align: center;                     /* 文字居中 | Text center */
}

.hero h1 {
  font-size: 2rem;                        /* 标题字体大小 | Heading font size */
  margin-bottom: 10px;                    /* 下方间距 | Bottom spacing */
}

.hero p {
  margin-bottom: 20px;                    /* 段落下方间距 | Paragraph bottom spacing */
  color: #666;                            /* 颜色：中灰 | Color: medium grey */
}

/* ── 按钮 Button ── */
/* ⚠️ 注意：Bootstrap用btn btn-primary一行搞定，这里手写全部样式 */
/* ⚠️ Note: Bootstrap uses "btn btn-primary"; here we write all styles manually */
.btn-primary {
  background-color: #007bff;             /* 背景色：Bootstrap蓝 | Background: Bootstrap blue */
  color: white;                           /* 文字颜色：白 | Text: white */
  border: none;                           /* 去除边框 | No border */
  padding: 10px 20px;                     /* 内边距 | Padding */
  border-radius: 4px;                     /* 圆角 | Border radius */
  cursor: pointer;                        /* 鼠标指针 | Cursor pointer */
  font-size: 1rem;                        /* 字体大小 | Font size */
}

.btn-primary:hover {
  background-color: #0056b3;             /* 悬停变深蓝 | Hover: darker blue */
}

/* ── 三列网格 3-Column Grid ── */
/* ⚠️ 注意：Bootstrap用row + col-md-4即可，这里需要手写flex布局和响应式 */
/* ⚠️ Note: Bootstrap uses row + col-md-4; here we manually write flex + responsive */
.grid-3 {
  display: flex;                          /* 弹性布局 | Flexbox */
  gap: 20px;                              /* 列间距 | Column gap */
  margin: 20px 0;                         /* 上下外边距 | Top/bottom margin */
  flex-wrap: wrap;                        /* 允许换行（基本响应式） | Allow wrap (basic responsive) */
}

.card {
  background-color: white;               /* 卡片背景：白 | Card background: white */
  border: 1px solid #dee2e6;             /* 边框 | Border */
  border-radius: 4px;                     /* 圆角 | Border radius */
  padding: 20px;                          /* 内边距 | Padding */
  flex: 1 1 250px;                        /* 自动增长，最小250px | Grow, min 250px */
}

.card h3 {
  margin-bottom: 10px;                    /* 标题下方间距 | Heading bottom spacing */
}

/* ── 表格 Table ── */
/* ⚠️ 注意：Bootstrap用class="table"一键样式，这里手写全部表格样式 */
/* ⚠️ Note: Bootstrap uses class="table" for instant styling; here it's all manual */
.my-table {
  width: 100%;                            /* 表格全宽 | Full width */
  border-collapse: collapse;             /* 合并边框 | Collapse borders */
  margin: 20px 0;                         /* 上下外边距 | Top/bottom margin */
  background-color: white;               /* 背景色：白 | Background: white */
}

.my-table th,
.my-table td {
  border: 1px solid #dee2e6;             /* 单元格边框 | Cell border */
  padding: 10px 14px;                     /* 单元格内边距 | Cell padding */
  text-align: left;                       /* 文字左对齐 | Text left-align */
}

.my-table thead {
  background-color: #343a40;             /* 表头背景：深色 | Header background: dark */
  color: white;                           /* 表头文字：白 | Header text: white */
}

/* ── 表格上下文颜色（需手动全部定义） | Table contextual colors (all manual) ── */
/* ⚠️ Bootstrap只需加class="danger"等，这里需要自定义每一个颜色 */
/* ⚠️ Bootstrap just adds class="danger"; here we define every color ourselves */
.row-danger {
  background-color: #f8d7da;             /* 危险行：浅红色 | Danger: light red */
  color: #721c24;                         /* 文字：深红 | Text: dark red */
}

.row-success {
  background-color: #d4edda;             /* 成功行：浅绿色 | Success: light green */
  color: #155724;                         /* 文字：深绿 | Text: dark green */
}

.row-warning {
  background-color: #fff3cd;             /* 警告行：浅黄色 | Warning: light yellow */
  color: #856404;                         /* 文字：深黄 | Text: dark yellow */
}

/* ── 基本响应式（手动媒体查询） | Basic responsive (manual media query) ── */
/* ⚠️ Bootstrap自动处理所有断点，这里需要手写每一个媒体查询 */
/* ⚠️ Bootstrap handles all breakpoints automatically; here we write each manually */
@media (max-width: 600px) {
  .grid-3 {
    flex-direction: column;               /* 小屏：单列排列 | Small screen: single column */
  }

  .navbar {
    flex-direction: column;               /* 小屏：导航栏垂直排列 | Small screen: vertical navbar */
    gap: 10px;                            /* 间距 | Gap */
  }
}
```

---

## 📄 第二个文件：使用 Bootstrap（单文件）

---

### 📄 `with-bootstrap/index.html`

```html
<!DOCTYPE html>
<!-- 使用Bootstrap的页面 | Page using Bootstrap -->
<!-- ✅ 对比：所有样式都通过Bootstrap类名完成，无需写任何CSS -->
<!-- ✅ Compare: All styling done via Bootstrap class names, zero CSS written -->
<html lang="en">
<head>
  <meta charset="utf-8">                  <!-- 字符编码 | Character encoding -->
  <meta name="viewport"
        content="width=device-width,
                 initial-scale=1">        <!-- 移动端视口 | Mobile viewport -->
  <title>With Bootstrap</title>           <!-- 页面标题 | Page title -->

  <!-- ✅ Bootstrap CSS — CDN一行引入，取代整个style.css -->
  <!-- ✅ Bootstrap CSS — One CDN line replaces the entire style.css -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

</head>
<body>

  <!-- ✅ 导航栏 Navbar -->
  <!-- 对比：无需手写.navbar样式，Bootstrap类名直接搞定 -->
  <!-- Compare: No manual .navbar CSS needed; Bootstrap classes handle everything -->
  <nav class="navbar navbar-expand-sm
              navbar-dark bg-dark px-3">  <!-- navbar-dark:白字 bg-dark:深色背景 px-3:左右padding -->
    <span class="navbar-brand">
      MyWebsite                           <!-- 网站品牌名 | Site brand -->
    </span>
    <ul class="navbar-nav ml-auto">       <!-- ml-auto：自动左边距，推到右侧 | Push links to right -->
      <li class="nav-item">
        <a class="nav-link"
           href="#">Home</a>              <!-- 导航链接 | Nav link -->
      </li>
      <li class="nav-item">
        <a class="nav-link"
           href="#">About</a>             <!-- 导航链接 | Nav link -->
      </li>
      <li class="nav-item">
        <a class="nav-link"
           href="#">Contact</a>           <!-- 导航链接 | Nav link -->
      </li>
    </ul>
  </nav>

  <!-- ✅ 主容器 Main container -->
  <!-- 对比：.container一行 vs 手写max-width+margin+padding -->
  <!-- Compare: .container one class vs manual max-width + margin + padding -->
  <div class="container mt-4">           <!-- container:响应式容器 mt-4:上外边距 -->

    <!-- ✅ 英雄横幅 Hero Banner (Jumbotron) -->
    <!-- 对比：Bootstrap一个class，vs 手写整个.hero样式块 -->
    <!-- Compare: One Bootstrap class vs entire manual .hero style block -->
    <div class="jumbotron text-center">  <!-- jumbotron:大横幅 text-center:文字居中 -->
      <h1 class="display-4">
        Welcome to My Page               <!-- 主标题 | Main heading -->
      </h1>
      <p class="lead text-muted">
        This is built with Bootstrap.    <!-- lead:大字段落 text-muted:灰色文字 -->
        使用Bootstrap构建。
      </p>
      <!-- ✅ 按钮 Button -->
      <!-- 对比：btn btn-primary两个class vs 手写整个.btn-primary样式 -->
      <!-- Compare: Two Bootstrap classes vs entire manual .btn-primary style block -->
      <a href="#"
         class="btn btn-primary">
        Get Started                      <!-- 主按钮 | Primary button -->
      </a>
    </div>

    <!-- ✅ 三列网格 Three-column Grid -->
    <!-- 对比：row+col-md-4 vs 手写flex布局+媒体查询 -->
    <!-- Compare: row + col-md-4 vs manual flex layout + media queries -->
    <div class="row mb-4">               <!-- row:行容器 mb-4:底部外边距 -->

      <div class="col-md-4">            <!-- col-md-4：中屏及以上占1/3，小屏自动全宽 -->
        <div class="card p-3">          <!-- card:卡片组件 p-3:内边距 -->
          <h3>Column 1</h3>
          <p>Some content here. 一些内容。</p>
        </div>
      </div>

      <div class="col-md-4">            <!-- col-md-4：占1/3 -->
        <div class="card p-3">
          <h3>Column 2</h3>
          <p>Some content here. 一些内容。</p>
        </div>
      </div>

      <div class="col-md-4">            <!-- col-md-4：占1/3，三列合计12 ✓ -->
        <div class="card p-3">
          <h3>Column 3</h3>
          <p>Some content here. 一些内容。</p>
        </div>
      </div>

    </div><!-- /row -->

    <!-- ✅ 数据表格 Data Table -->
    <!-- 对比：class="table"一行 vs 手写.my-table全部样式 -->
    <!-- Compare: class="table" one line vs entire manual .my-table style block -->
    <table class="table
                  table-bordered
                  table-hover">          <!-- table:基础样式 table-bordered:边框 table-hover:悬停高亮 -->
      <thead class="thead-dark">         <!-- thead-dark：深色表头，无需手写背景色 -->
        <tr>
          <th>First Name 姓</th>
          <th>Last Name 名</th>
          <th>Email 邮箱</th>
          <th>Status 状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>                             <!-- 默认行 | Default row -->
          <td>Alice</td>
          <td>Smith</td>
          <td>alice@example.com</td>
          <td>Active</td>
        </tr>

        <!-- ✅ 上下文颜色：只需一个class，无需自定义CSS颜色 -->
        <!-- ✅ Contextual color: just one class, no custom CSS color needed -->
        <tr class="table-danger">        <!-- table-danger：自动红色，对应"危险"状态 -->
          <td>Bob</td>
          <td>Jones</td>
          <td>bob@example.com</td>
          <td>Failed</td>
        </tr>
        <tr class="table-success">       <!-- table-success：自动绿色，对应"成功"状态 -->
          <td>Carol</td>
          <td>Lee</td>
          <td>carol@example.com</td>
          <td>Success</td>
        </tr>
        <tr class="table-warning">       <!-- table-warning：自动黄色，对应"警告"状态 -->
          <td>Dave</td>
          <td>Kim</td>
          <td>dave@example.com</td>
          <td>Pending</td>
        </tr>
      </tbody>
    </table>

  </div><!-- /container -->

  <!-- ✅ Bootstrap JS（jQuery依赖） | Bootstrap JS (requires jQuery) -->
  <script src="https://code.jquery.com/
    jquery-3.6.0.min.js">               <!-- jQuery：Bootstrap JS的依赖 | jQuery: required by Bootstrap JS -->
  </script>
  <script src="https://cdn.jsdelivr.net/npm/
    bootstrap@4.6.2/dist/js/
    bootstrap.bundle.min.js">           <!-- Bootstrap JS：模态框、轮播等交互组件 | Bootstrap JS for interactive components -->
  </script>

</body>
</html>
```

---

## 🔍 核心差异对比表 Key Difference Comparison

|功能 Feature|❌ Without Bootstrap|✅ With Bootstrap|
|---|---|---|
|**CSS引入**|单独的 `style.css` 文件|CDN一行 `<link>`|
|**响应式容器**|手写 `max-width` + `margin:auto` + `padding`|`class="container"`|
|**三列网格**|手写 `display:flex` + `flex-wrap` + `@media` 查询|`class="row"` + `class="col-md-4"`|
|**英雄横幅**|手写整个 `.hero` 样式块（~15行CSS）|`class="jumbotron"`|
|**主按钮**|手写整个 `.btn-primary` 样式块（~8行CSS）|`class="btn btn-primary"`|
|**表格样式**|手写 `.my-table` 全部CSS（~15行）|`class="table table-bordered"`|
|**表格行颜色**|手写 `.row-danger` / `.row-success` 等自定义CSS|`class="table-danger"` / `class="table-success"`|
|**导航栏**|手写 `.navbar` + flex布局（~20行CSS）|`class="navbar navbar-dark bg-dark"`|
|**移动端适配**|手写 `@media` 媒体查询|Bootstrap 自动处理所有断点|
|**总CSS代码量**|~100行 CSS|**0行自定义CSS**|

> 💡 **核心洞察 Core Insight**： Without Bootstrap, you're **building every visual detail from scratch** — every color, spacing, and responsive rule must be manually written and tested. 不用Bootstrap，你需要**从零手建每一个视觉细节**——每个颜色、间距和响应式规则都必须手动编写和测试。
> 
> With Bootstrap, **the framework is your CSS** — you only write class names. 用Bootstrap，**框架就是你的CSS**——你只需要写类名。