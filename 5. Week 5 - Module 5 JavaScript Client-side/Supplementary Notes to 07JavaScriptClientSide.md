# 1.  **Pages 3–7: The Document Object Model (DOM) – 文档对象模型**
## **📌 Page 2: JavaScript 的独特卖点（USP）**

### 英文中文术语对照

|英文|中文|含义解释|
|---|---|---|
|**Core JavaScript**|核心JavaScript|通用脚本语言（变量、函数、循环等基础功能）|
|**Client-side JavaScript**|客户端JavaScript|核心JS + 与网页交互的能力（通过DOM）|
|**USP**|独特卖点|Unique Selling Point - JavaScript相比其他语言的核心优势|
|**Why is JavaScript so useful for the web?**|为什么JavaScript对Web如此有用？|提问：JavaScript的价值在哪里？|
|**collection of objects, methods and properties**|一组对象、方法和属性|DOM提供的API工具集|
|**interact with HTML documents**|与HTML文档交互|能够改变网页内容|
|**Dynamic documents**|动态文档|网页内容实时改变（无需刷新）|
|**Client-side programming**|客户端编程|在浏览器端执行的编程范式|
|**bindings to the DOM**|绑定到DOM|JavaScript通过DOM接口与HTML通信的机制|

### 核心差异对比

```javascript
// ❌ Core JavaScript - 只能处理数据
var name = "Alice";
var age = 25;
console.log(name + " is " + age + " years old");
// 输出到控制台，用户在网页上看不到任何变化

// ✅ 客户端JavaScript - 可以改变网页内容（通过DOM）
document.getElementById("greeting").innerHTML = name + " is " + age;
// 用户在网页上立即看到: "Alice is 25"
// ↑ 这就是"动态文档"的含义

// ✅ 客户端编程 - 实时响应用户交互
document.querySelector("button").onclick = function() {
    alert("You clicked me!");
};
// 点击按钮后，网页立即做出反应
```

### 类比理解

```
HTML文档 = 建筑蓝图（静态的设计图）
Core JS = 工具箱（有锤子、钉子等工具）
DOM = 建筑工人（连接工具和蓝图的桥梁）

结果 = 通过DOM，JavaScript可以：
  • 改变窗户（改变元素内容）
  • 移动墙壁（增删节点）
  • 粉刷房间（修改样式）
```

---

## **📌 Page 4: DOM 定义详解**

### 关键英文短语分解

|英文短语|中文|详细说明|
|---|---|---|
|**platform- and language-neutral interface**|平台和语言无关的接口|DOM规范不限制操作系统和编程语言。Windows、Mac、Linux都能用；JavaScript、Python、Java都能用|
|**dynamically access and update**|动态访问和更新|程序运行时可以读取和修改HTML内容，不是静态的|
|**content, structure and style**|内容、结构、样式|**内容**=改变文本，**结构**=增删元素，**样式**=改变CSS|
|**document can be further processed**|文档可以被进一步处理|文档不是只读的，可以用程序修改它|
|**incorporated back into the presented page**|合并回所呈现的页面|修改后的内容立即显示在网页上|
|**abstract model**|抽象模型|DOM规范是理想化的、与具体实现无关的定义|
|**API between HTML and program**|HTML文档与程序之间的API|定义了程序如何与HTML通信的规则|
|**Interfaces describe methods and properties**|接口描述方法和属性|DOM规范规定了哪些操作和数据可用|
|**Different languages will bind**|不同语言将绑定|JavaScript、Python等各自实现DOM接口|
|**Data as properties, operations as methods**|数据表示为属性，操作表示为方法|读取数据用属性（如`.value`），修改数据用方法（如`.setAttribute()`）|

### 三种更新操作实例

```javascript
// 1️⃣ 更新内容（Content）- 改变文本
const heading = document.getElementById("title");
heading.textContent = "新的标题";  // 修改标题文本

// 2️⃣ 更新结构（Structure）- 增删元素
const newParagraph = document.createElement("p");
newParagraph.textContent = "这是新段落";
document.body.appendChild(newParagraph);  // 添加到网页

const oldElement = document.getElementById("oldDiv");
oldElement.remove();  // 删除元素

// 3️⃣ 更新样式（Style）- 改变CSS
const paragraph = document.getElementById("para");
paragraph.style.color = "blue";        // 改变文字颜色
paragraph.style.fontSize = "18px";     // 改变字体大小
paragraph.style.backgroundColor = "yellow";  // 改变背景色

// 使用classList管理CSS类
paragraph.classList.add("highlight");   // 添加CSS类
paragraph.classList.remove("old");      // 移除CSS类
paragraph.classList.toggle("active");   // 切换CSS类
```

---

## **📌 Page 5: DOM 树模型详解**

### 关键术语

|英文|中文|说明|代码例子|
|---|---|---|---|
|**DOM API**|DOM应用编程接口|JavaScript访问DOM的接口和方法|`document.getElementById()`|
|**tree structure**|树结构|有根节点、父子关系的层级结构|HTML标签嵌套|
|**document node**|文档节点|树的根节点，代表整个HTML文档|最顶层|
|**element node**|元素节点|HTML标签转化成的对象|`<div>`, `<p>`, `<table>`|
|**text node**|文本节点|标签内的纯文本|`<h1>Welcome</h1>` 中的"Welcome"|
|**attribute node**|属性节点|元素的属性|`id="container"`, `class="box"`|

### DOM 树具体示例

**原始HTML代码：**

```html
<html>
  <head>
    <title>A simple document</title>
  </head>
  <body>
    <table>
      <tr>
        <th>Breakfast</th>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <th>Lunch</th>
        <td>1</td>
        <td>0</td>
      </tr>
    </table>
  </body>
</html>
```

**对应的DOM树结构：**

```
Document (根)
├── <html> (元素节点)
│   ├── <head> (元素节点)
│   │   └── <title> (元素节点)
│   │       └── "A simple document" (文本节点)
│   └── <body> (元素节点)
│       └── <table> (元素节点)
│           ├── <tr> (第一行)
│           │   ├── <th> (元素)
│           │   │   └── "Breakfast" (文本)
│           │   ├── <td> (元素)
│           │   │   └── "0" (文本)
│           │   └── <td> (元素)
│           │       └── "1" (文本)
│           └── <tr> (第二行)
│               ├── <th> (元素)
│               │   └── "Lunch" (文本)
│               ├── <td> (元素)
│               │   └── "1" (文本)
│               └── <td> (元素)
│                   └── "0" (文本)
```

### 关键代码操作

```javascript
// 访问元素节点
const table = document.querySelector("table");
const firstRow = table.querySelector("tr");

// 访问文本节点
const thElement = firstRow.querySelector("th");
const textNode = thElement.firstChild;    // 获取文本节点
console.log(textNode.nodeValue);          // 输出: "Breakfast"

// 遍历所有子节点（包括文本和元素）
const allChildren = firstRow.childNodes;  // 包含所有子节点
allChildren.forEach(node => {
    if (node.nodeType === 1) {           // 1 = 元素节点
        console.log("元素:", node.tagName);
    } else if (node.nodeType === 3) {    // 3 = 文本节点
        console.log("文本:", node.nodeValue);
    }
});

// 只遍历元素节点（忽略文本节点）
const elementChildren = firstRow.children;
elementChildren.forEach(elem => {
    console.log(elem.tagName);  // 输出: TH, TD, TD 等
});

// 修改属性节点
table.setAttribute("border", "1");         // 设置属性
console.log(table.getAttribute("border")); // 获取属性值
```

---

## **📌 Page 6: BOM 执行环境**

### 关键术语对照

|英文|中文|用途|实例|
|---|---|---|---|
|**Browser Object Model**|浏览器对象模型|访问浏览器环境功能|`window.location`|
|**execution environment**|执行环境|JavaScript代码运行的上下文|浏览器引擎|
|**subsection**|子集|DOM是BOM的一部分，不是全部|BOM = DOM + 其他功能|
|**Type of browser**|浏览器类型|判断用户的浏览器|Chrome、Firefox、Safari|
|**User's history**|用户历史记录|浏览器的前进/后退功能|访问过的网址列表|
|**Cookies**|Cookie|浏览器存储小文件|保存用户偏好设置|
|**Screen size**|屏幕大小|显示器分辨率|1920×1080|
|**Geolocation**|地理定位|获取用户位置|GPS坐标|
|**Local storage**|本地存储|浏览器持久化存储|相当于浏览器内置的小数据库|
|**not supported by a fixed standard**|没有固定标准支持|与DOM不同，各浏览器实现不同|功能可能存在差异|

### BOM 功能代码示例

```javascript
// 1️⃣ 浏览器类型判断 (navigator)
console.log(navigator.userAgent);
// 输出: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."

// 2️⃣ 用户历史记录 (history)
history.back();      // 返回上一页
history.forward();   // 前进一页
history.go(-2);      // 后退两页
history.length;      // 历史记录条数

// 3️⃣ 处理Cookie
document.cookie = "username=Alice; expires=Wed, 31 Mar 2027 12:00:00 UTC;";
console.log(document.cookie);  // 读取所有cookie

// 4️⃣ 获取屏幕信息 (screen)
console.log(window.screen.width);   // 屏幕宽度
console.log(window.screen.height);  // 屏幕高度
console.log(window.screen.availWidth);  // 可用宽度

// 5️⃣ 地理定位 (geolocation)
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;   // 纬度
    const lon = position.coords.longitude;  // 经度
    console.log(`位置: ${lat}, ${lon}`);
});

// 6️⃣ 本地存储 (localStorage)
localStorage.setItem("userId", "12345");           // 保存
const userId = localStorage.getItem("userId");     // 读取
localStorage.removeItem("userId");                 // 删除
localStorage.clear();                              // 清空所有
```

---

## **📌 Page 7: 完整 BOM 树结构**

### 树结构说明

```
window (全局根对象 - 浏览器窗口)
│
├── self, window, parent, top
│   └── 用于识别窗口关系（特别是iframe嵌套）
│
├── document (文档对象 - DOM入口)
│   ├── all[]          (所有元素)
│   ├── forms[]        (所有表单)
│   │   └── elements[] (表单内的输入框)
│   │       ├── Button      (按钮)
│   │       ├── Checkbox    (复选框)
│   │       ├── File        (文件上传)
│   │       ├── Hidden      (隐藏字段)
│   │       ├── Password    (密码框)
│   │       ├── Radio       (单选框)
│   │       ├── Reset       (重置按钮)
│   │       ├── Select      (下拉列表)
│   │       │   └── options[] (列表选项)
│   │       ├── Submit      (提交按钮)
│   │       ├── Text        (文本框)
│   │       └── Textarea    (文本域)
│   ├── images[]       (所有图片)
│   ├── links[]        (所有链接)
│   ├── anchors[]      (所有锚点)
│   ├── applets[]      (所有Java小程序)
│   ├── embeds[]       (所有嵌入对象)
│   └── layers[]       (所有图层)
│
├── frames[]  (所有iframe - 嵌入的页面)
│
├── location  (位置对象 - 当前URL信息)
│
├── history   (历史对象 - 浏览历史)
│
└── navigator (导航器对象 - 浏览器信息)
    ├── plugins[]      (浏览器插件列表)
    └── mimeTypes[]    (支持的文件类型)
```

### BOM 对象操作代码

```javascript
// ========== Window 对象 ==========
window.document;        // 访问DOM文档对象
window.location;        // 访问当前URL
window.history;         // 访问浏览历史
window.navigator;       // 访问浏览器信息
window.screen;          // 访问屏幕信息
window.alert("消息");   // 弹出提示框
window.setTimeout(() => {}, 1000);  // 延迟执行

// 简写（可省略window）
document;               // === window.document
location;               // === window.location
history;                // === window.history

// ========== Location 对象（URL信息） ==========
location.href = "https://example.com";  // 跳转到新网址
location.reload();                      // 刷新当前页面
location.reload(true);                  // 强制刷新（清除缓存）
location.hostname;                      // 获取域名: "example.com"
location.pathname;                      // 获取路径: "/page/index"
location.protocol;                      // 获取协议: "https:"

// ========== History 对象（浏览历史） ==========
history.back();                         // 返回上一页
history.forward();                      // 前进一页
history.go(-1);                         // 返回上一页
history.go(2);                          // 前进两页
history.length;                         // 历史记录数

// ========== Navigator 对象（浏览器信息） ==========
navigator.userAgent;                    // 浏览器标识
navigator.language;                     // 浏览器语言
navigator.onLine;                       // 是否在线
navigator.geolocation;                  // 地理定位API
navigator.plugins;                      // 浏览器插件列表

// ========== Document 对象（DOM入口） ==========
document.forms[];                       // 访问所有表单
document.images[];                      // 访问所有图片
document.links[];                       // 访问所有链接

// 访问特定表单和输入框
const myForm = document.forms[0];       // 第一个表单
const myInput = myForm.elements[0];     // 第一个输入框
myInput.value = "新值";                 // 修改输入框值
```

---

## **📌 完整场景示例：用户登录表单**

### HTML 代码

```html
<form id="loginForm">
    <input type="text" name="username" placeholder="用户名">
    <input type="password" name="password" placeholder="密码">
    <div id="error" style="display:none; color:red;"></div>
    <button type="submit">登录</button>
</form>
```

### JavaScript 处理（DOM + BOM 结合）

```javascript
// 第1步：获取表单元素（DOM）
const form = document.getElementById("loginForm");
const errorDiv = document.getElementById("error");

// 第2步：监听表单提交
form.addEventListener("submit", function(e) {
    e.preventDefault();  // 阻止默认提交行为
    
    // 第3步：读取用户输入（DOM）
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    
    // 第4步：客户端验证，显示错误（DOM）
    if (!username) {
        errorDiv.innerHTML = "用户名不能为空!";
        errorDiv.style.display = "block";
        return;
    }
    if (!password) {
        errorDiv.innerHTML = "密码不能为空!";
        errorDiv.style.display = "block";
        return;
    }
    
    // 第5步：保存用户信息到本地（BOM）
    localStorage.setItem("lastUsername", username);
    
    // 第6步：检查浏览器类型（BOM）
    if (navigator.userAgent.includes("Chrome")) {
        console.log("用户使用 Chrome 浏览器");
    }
    
    // 第7步：导航到新页面（BOM）
    location.href = "/dashboard";  // 登录成功后跳转
});

// 第8步：页面加载时恢复上次用户名（BOM + DOM）
window.addEventListener("load", function() {
    const lastUser = localStorage.getItem("lastUsername");
    if (lastUser) {
        form.elements.username.value = lastUser;  // 填充用户名
    }
});
```

---

## **📌 DOM vs BOM 最终对比表**

|维度|**DOM**|**BOM**|
|---|---|---|
|**中文名称**|文档对象模型|浏览器对象模型|
|**关注点**|网页文档内容|浏览器环境|
|**入口对象**|`document`|`window`|
|**标准化**|✅ W3C标准（统一）|❌ 无固定标准（各浏览器实现不同）|
|**操作对象**|元素、文本、属性|历史、Cookie、位置、插件等|
|**修改后可见**|✅ 立即在网页显示|⚠️ 影响浏览器行为|
|**例子1**|`document.getElementById()`|`window.location.href`|
|**例子2**|`element.style.color = "red"`|`history.back()`|
|**例子3**|`document.createElement()`|`navigator.userAgent`|
|**例子4**|`element.textContent = "文本"`|`localStorage.setItem()`|
|**是否标准**|有固定W3C规范|各浏览器自行实现，功能略有差异|

---

# 2. Pages 8-17: JavaScript中的DOM - 英文中文对照完整详解

---

## **📌 Page 9: JavaScript中的DOM元素对象**

### 关键术语对照

|英文|中文|解释|
|---|---|---|
|**Elements**|元素|HTML文档中的标签|
|**element objects**|元素对象|元素在JavaScript中对应的对象|
|**bound to JavaScript objects**|绑定为JavaScript对象|HTML元素与JS对象的一一对应关系|
|**Attributes**|属性（HTML属性）|HTML标签的属性|
|**named properties**|命名属性|JavaScript对象的属性|
|**addressed in several ways**|通过多种方式访问|有不同的访问方法|
|**By type and position**|按类型和位置|如"第5张图片"|
|**By name**|按名称|使用name属性|
|**By id**|按id|使用id属性|

### 核心概念举例

```javascript
// HTML代码
<input type="text" name="address">

// 对应的JavaScript element object
const inputElement = document.querySelector('input[name="address"]');

// HTML属性 → JS对象属性
inputElement.type;      // → "text"
inputElement.name;      // → "address"
inputElement.value;     // → 输入框中的值

// 修改属性
inputElement.type = "password";  // HTML属性也随之改变
```

---

## **📌 Page 10: 方法一 - 按类型和索引访问元素**

### 关键术语

|英文|中文|说明|
|---|---|---|
|**array-like objects**|类数组对象|像数组一样可用索引访问，但不是真正的数组|
|**containing all elements of a certain type**|包含某种类型的所有元素|如所有form、所有image等|
|**getElementsByTagName**|按标签名获取元素|更通用的方法|
|**live collection**|活动集合|当DOM变化时自动更新|
|**HTMLCollection**|HTML集合|getElementsByTagName返回的集合类型|

### 代码示例

```javascript
// HTML
<body>
    <h2>Comic 1</h2>
    <image src="https://imgs.xkcd.com/comics/degree_off.png"></image>
    <h2>Comic 2</h2>
    <image src="https://imgs.xkcd.com/comics/ineffective_sorts.png"></image>
</body>

// JavaScript - 按类型和索引访问

// 1️⃣ 访问document的images属性（获取所有图片）
document.images;        // → HTMLCollection [image, image]
document.images[0];     // → 第一张图片的element object
document.images[1];     // → 第二张图片的element object

// 获取图片的src属性
console.log(document.images[0].src);  // → "https://imgs.xkcd.com/comics/degree_off.png"

// 2️⃣ 类似地访问其他类型的元素
document.forms;         // → 所有表单
document.links;         // → 所有链接
document.anchors;       // → 所有锚点
document.images;        // → 所有图片

// 3️⃣ 更通用的方法：getElementsByTagName
const allParagraphs = document.getElementsByTagName("p");
// 返回HTMLCollection，包含所有 <p> 元素

// 在特定元素内搜索
const divElement = document.getElementById("container");
const paragraphsInDiv = divElement.getElementsByTagName("p");
// 返回 #container 内的所有 <p> 元素

// 遍历HTMLCollection
for (let i = 0; i < allParagraphs.length; i++) {
    console.log(allParagraphs[i].textContent);  // 输出每个段落的文本
}

// ⚠️ 注意：HTMLCollection是活动集合
const images = document.getElementsByTagName("img");
console.log(images.length);  // 当前图片数
// 添加新图片
const newImg = document.createElement("img");
document.body.appendChild(newImg);
console.log(images.length);  // 自动更新！增加了
```

---

## **📌 Page 11: 方法二 - 按name属性访问元素**

### 关键术语

|英文|中文|说明|
|---|---|---|
|**name attribute**|name属性|HTML元素的name属性|
|**directly as a property**|直接作为属性访问|可以链式访问|
|**parent element object**|父元素对象|包含该元素的父级|
|**keys for sending data to server**|向服务器发送数据的键|form表单提交时的字段名|
|**linking with labels**|与label关联|HTML中label的for属性值|

### 代码示例

```javascript
// HTML
<form name="pets" action="">
    <label for="catName">Your cat's name:</label>
    <input type="text" name="catName">
    <label for="dogName">Your dog's name:</label>
    <input type="text" name="dogName">
</form>

// JavaScript - 按name属性访问

// 1️⃣ 访问form（通过document.pets）
const petsForm = document.pets;  // → <form name="pets">

// 2️⃣ 访问form内的input（通过name属性）
const catNameInput = document.pets.catName;     // → name="catName" 的input
const dogNameInput = document.pets.dogName;     // → name="dogName" 的input

// 3️⃣ 访问input的值
console.log(document.pets.catName.value);       // → 输入框中的值
console.log(document.pets.dogName.value);       // → 输入框中的值

// 4️⃣ 修改值
document.pets.catName.value = "Whiskers";       // 设置输入框值
document.pets.dogName.value = "Buddy";

// 5️⃣ 链式访问
const catValue = document.pets.catName.value;   // 一行代码完成访问

// 为什么这种方法方便？
// - name属性是form提交时的字段名，必须有
// - 避免了记住索引号
// - 代码更易读懂
```

---

## **📌 Page 12: 方法三 - 按id属性访问元素**

### 关键术语

|英文|中文|说明|
|---|---|---|
|**getElementById**|通过id获取元素|最精确的方法|
|**id attribute**|id属性|HTML元素的唯一标识|
|**matches the provided parameter**|匹配所提供的参数|精确匹配id值|

### 完整代码示例

```html
<!DOCTYPE html>
<html>
<body>
<h2>Finding HTML Elements Using document.forms</h2>

<!-- 定义一个表单，id="frm1" -->
<form id="frm1" action="/action_page.php">
  First name: <input type="text" name="fname" value="Donald"><br>
  Last name: <input type="text" name="lname" value="Duck"><br><br>
  <input type="submit" value="Submit">
</form>

<p>Click "Try it" to display the value of each element in the form.</p>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>

<script>
function myFunction() {
    // 1️⃣ 通过id获取表单
    var x = document.getElementById("frm1");
    // 等价于：var x = document.forms["frm1"];
    
    // 2️⃣ 初始化用于存储结果的字符串
    var text = "";
    
    // 3️⃣ 遍历表单中的每个元素
    for (var i = 0; i < x.length; i++) {
        // x[i] 是表单中第i个元素
        // x.elements[i] 也可以访问（更明确）
        text += x.elements[i].value + "<br>";  // 获取每个元素的值
    }
    
    // 4️⃣ 将结果写入#demo段落
    document.getElementById("demo").innerHTML = text;
}
</script>
</body>
</html>
```

### JavaScript解释

```javascript
// 1️⃣ 按id获取表单
const form = document.getElementById("frm1");
// → 找到 <form id="frm1">

// 2️⃣ 表单的length属性
console.log(form.length);  // → 3 (两个text input + 一个submit button)

// 3️⃣ 访问表单中的元素
console.log(form.elements[0].name);    // → "fname"
console.log(form.elements[0].value);   // → "Donald"

console.log(form.elements[1].name);    // → "lname"
console.log(form.elements[1].value);   // → "Duck"

console.log(form.elements[2].type);    // → "submit"
console.log(form.elements[2].value);   // → "Submit"

// 4️⃣ 构建结果字符串
let results = "";
for (let i = 0; i < form.length; i++) {
    results += form.elements[i].value + "<br>";
}
// results = "Donald<br>Duck<br>Submit<br>"

// 5️⃣ 将结果显示到页面
document.getElementById("demo").innerHTML = results;
// 页面显示：
// Donald
// Duck
// Submit
```

### 三种方法对比

|方法|语法|特点|何时使用|
|---|---|---|---|
|**按类型和索引**|`document.images[0]`|依赖元素顺序，脆弱|页面布局固定时|
|**按name**|`document.pets.catName`|需要name属性，方便|表单中的输入框|
|**按id**|`document.getElementById("demo")`|最精确，最常用|任何需要精确定位的元素|

---

## **📌 Page 13: 特定元素的访问方法**

### 关键术语

|英文|中文|说明|
|---|---|---|
|**element-specific methods**|特定元素的方法|针对特定元素类型的访问|
|**checkboxes and radio buttons**|复选框和单选按钮|特殊的表单元素|
|**implicit array**|隐式数组|同名元素自动形成数组|
|**checked**|被选中|复选框/单选框的选中状态|

### 代码示例

```javascript
// HTML
<form id="topGroup">
    <label><input type="checkbox" name="toppings" value="olives"> Olives</label>
    <label><input type="checkbox" name="toppings" value="cheese"> Cheese</label>
    <label><input type="checkbox" name="toppings" value="tomatoes"> Tomatoes</label>
</form>

// JavaScript - 访问同名复选框

// 1️⃣ 获取表单
const form = document.getElementById("topGroup");

// 2️⃣ 访问同名复选框（自动形成隐式数组）
console.log(form.toppings);         // → NodeList [input, input, input]
console.log(form.toppings.length);  // → 3

// 3️⃣ 遍历并检查哪些被选中
let selectedToppings = [];
for (let i = 0; i < form.toppings.length; i++) {
    if (form.toppings[i].checked) {
        // checked属性为true表示被选中
        selectedToppings.push(form.toppings[i].value);
    }
}
console.log(selectedToppings);  // → ["olives", "tomatoes"]（用户选择的）

// 4️⃣ 也可以直接设置
form.toppings[0].checked = true;   // 选中第一个
form.toppings[1].checked = false;  // 取消选中第二个

// 5️⃣ 单选按钮（radio）的用法类似
<form id="sizeForm">
    <label><input type="radio" name="size" value="small"> Small</label>
    <label><input type="radio" name="size" value="medium"> Medium</label>
    <label><input type="radio" name="size" value="large"> Large</label>
</form>

const sizeForm = document.getElementById("sizeForm");
for (let i = 0; i < sizeForm.size.length; i++) {
    if (sizeForm.size[i].checked) {
        console.log("Selected size:", sizeForm.size[i].value);
        break;  // 单选框只有一个被选中
    }
}
```

---

## **📌 Page 14: DOM遍历**

### 关键术语

|英文|中文|说明|
|---|---|---|
|**traverse the tree**|遍历树|在DOM树中移动|
|**abstractly**|抽象地|不依赖具体页面结构|
|**without knowing the page structure**|不知道页面结构|使用通用导航属性|
|**parentNode**|父节点|上一级节点|
|**previousSibling**|前一个兄弟节点|同级的前一个节点|
|**nextSibling**|后一个兄弟节点|同级的后一个节点|
|**firstChild**|第一个子节点|最上面的子节点|
|**lastChild**|最后一个子节点|最下面的子节点|
|**childNodes**|子节点列表|所有子节点的集合|
|**NodeList**|节点列表|类数组对象，包含多个节点|

### 代码示例

```javascript
// HTML
<div id="parent">
    <p id="first">First</p>
    <p id="second">Second</p>
    <p id="third">Third</p>
</div>

// JavaScript - DOM遍历

// 1️⃣ 获取父节点
const parent = document.getElementById("parent");

// 2️⃣ 访问子节点
console.log(parent.firstChild);       // → 第一个子节点（可能是text节点）
console.log(parent.lastChild);        // → 最后一个子节点
console.log(parent.childNodes);       // → NodeList [text, p, text, p, text, p, text]
console.log(parent.childNodes.length);// → 7（包括换行和空格产生的text节点）

// 3️⃣ 获取特定节点
const second = document.getElementById("second");

console.log(second.parentNode);       // → <div id="parent">
console.log(second.previousSibling);  // → #first 的 <p>（可能是text节点）
console.log(second.nextSibling);      // → #third 的 <p>（可能是text节点）

// 4️⃣ 遍历所有兄弟节点
let current = parent.firstChild;
while (current !== null) {
    console.log(current);              // 输出每个子节点
    current = current.nextSibling;     // 移到下一个兄弟
}

// ⚠️ 常见陷阱：text节点

// 问题：firstChild可能是空白text节点，不是<p>元素
console.log(parent.firstChild.nodeType);  // → 3（text节点）
console.log(parent.firstChild.nodeValue); // → "\n    "（换行和空格）

// 解决方案：使用Element特定的属性
console.log(parent.firstElementChild);    // → <p id="first">（忽略text节点）
console.log(parent.lastElementChild);     // → <p id="third">
console.log(parent.children);             // → HTMLCollection [p, p, p]（只有元素）

// 获取下一个元素兄弟
console.log(second.nextElementSibling);   // → <p id="third">
console.log(second.previousElementSibling);// → <p id="first">
```

### 重要概念：text节点 vs 元素节点

```javascript
// HTML（注意换行和缩进）
<div id="container">
    <p>First</p>
    <p>Second</p>
</div>

// 实际的DOM树包含
container.childNodes = [
    TextNode("\n    "),      // 换行 + 空格
    ElementNode(<p>First</p>),
    TextNode("\n    "),      // 换行 + 空格
    ElementNode(<p>Second</p>),
    TextNode("\n")           // 最后的换行
]

// 使用firstChild会得到text节点
container.firstChild.nodeType === 3  // true（text节点）

// 使用firstElementChild会跳过text节点
container.firstElementChild.nodeType === 1  // true（element节点）
```

---

## **📌 Page 15: DOM遍历示例 - 递归计算标签数**

### 关键术语

|英文|中文|说明|
|---|---|---|
|**recursive function**|递归函数|调用自身的函数|
|**countTags**|计数标签|统计Element节点数|
|**nodeType**|节点类型|标识节点是元素、文本还是注释|
|**Node.ELEMENT_NODE**|元素节点常量|值为1|

### nodeType 值对照表

|nodeType|常量名|含义|例子|
|---|---|---|---|
|**1**|ELEMENT_NODE|元素节点|`<div>`, `<p>`|
|**2**|ATTRIBUTE_NODE|属性节点|`id="main"`|
|**3**|TEXT_NODE|文本节点|"Hello World"|
|**8**|COMMENT_NODE|注释节点|`<!-- comment -->`|
|**9**|DOCUMENT_NODE|文档节点|`document`|

### 递归函数代码详解

```javascript
// 递归函数：统计DOM树中的Element节点总数
function countTags(n) {
    var numtags = 0;                    // ① 初始化计数器
    
    if (n.nodeType == 1) {              // ② 检查n是否为Element节点
        numtags++;                      // 如果是，计数器加1
    }
    
    var children = n.childNodes;        // ③ 获取n的所有子节点
    
    for(var i = 0; i < children.length; i++) {  // ④ 遍历所有子节点
        numtags += countTags(children[i]);      // ⑤ 递归统计每个子节点
    }
    
    return numtags;                     // ⑥ 返回总标签数
}

// 使用示例
alert('This document has ' + countTags(document) + ' tags');
```

### 执行流程示例

```html
<html>
  <body>
    <i>Sample</i> document.
  </body>
</html>

// 调用：countTags(document)
// 执行流程（简化）：

1. countTags(document)
   ├─ document.nodeType = 9（DOCUMENT_NODE） → numtags不加
   ├─ 获取children = [<html>, ...]
   └─ 递归遍历：
      
2. countTags(<html>)
   ├─ <html>.nodeType = 1 → numtags = 1
   ├─ 获取children = [<head>, <body>, ...]
   └─ 递归遍历：

3. countTags(<head>) [浏览器可能自动添加]
   ├─ <head>.nodeType = 1 → numtags = 2
   └─ <head>无子元素或只有空白text → 返回2

4. countTags(<body>)
   ├─ <body>.nodeType = 1 → numtags = 3
   ├─ 获取children = [<i>, text节点]
   └─ 递归遍历：

5. countTags(<i>)
   ├─ <i>.nodeType = 1 → numtags = 4
   ├─ 获取children = ["Sample"文本节点]
   └─ 递归遍历：

6. countTags(text节点"Sample")
   ├─ text.nodeType = 3（TEXT_NODE） → numtags不加
   └─ 无子节点 → 返回4

// 最终结果：4个Element节点
// <html>, <head>, <body>, <i>
```

### 习题

```javascript
// 题目：对以下HTML，countTags(document) 返回多少？
<html><body><i>Sample</i> document.</body></html>

// 答案：
// - 最少3个：<html>, <body>, <i>
// - 最多4个：<html>, <head>, <body>, <i>（浏览器可能自动补全<head>）
// 注意："Sample" 和 " document." 是TEXT_NODE（nodeType=3），不计入
```

---

## **📌 Page 16: DOM修改**

### 关键术语

|英文|中文|说明|语法|
|---|---|---|---|
|**insertBefore**|在...前插入|在参考节点前插入新节点|`parent.insertBefore(new, ref)`|
|**replaceChild**|替换子节点|用新节点替换旧节点|`parent.replaceChild(new, old)`|
|**removeChild**|移除子节点|删除一个子节点|`parent.removeChild(child)`|
|**appendChild**|追加子节点|在末尾添加新子节点|`parent.appendChild(child)`|
|**create a DOM tree dynamically**|动态构建DOM树|程序运行时生成HTML结构|React、Vue等框架的基础|
|**document.open()**|打开文档流|准备写入文档|清空现有内容|
|**document.close()**|关闭文档流|完成文档写入|刷新显示|
|**document.write()**|写入内容|输出HTML到文档|已过时|
|**document.writeln()**|写入一行|写入HTML并换行|已过时|

### 修改DOM的代码示例

```javascript
// 1️⃣ 使用createElement创建新元素
const newP = document.createElement("p");    // 创建 <p> 元素
const text = document.createTextNode("Hello!");  // 创建文本节点

newP.appendChild(text);                      // 将文本添加到 <p>
document.body.appendChild(newP);             // 将 <p> 添加到 <body> 末尾

// 结果：<p>Hello!</p> 被添加到页面底部

// 2️⃣ 使用appendChild添加元素
const div = document.createElement("div");
div.innerHTML = "<h1>Title</h1>";
document.body.appendChild(div);

// 3️⃣ 使用insertBefore在特定位置插入
const firstP = document.querySelector("p");
const newDiv = document.createElement("div");
firstP.parentNode.insertBefore(newDiv, firstP);  // 在firstP之前插入newDiv

// 4️⃣ 使用replaceChild替换节点
const oldElement = document.getElementById("old");
const newElement = document.createElement("span");
newElement.innerHTML = "New Content";
oldElement.parentNode.replaceChild(newElement, oldElement);  // 替换

// 5️⃣ 使用removeChild删除元素
const elementToRemove = document.getElementById("remove-me");
elementToRemove.parentNode.removeChild(elementToRemove);

// 简写：使用remove()方法（现代浏览器）
elementToRemove.remove();

// 6️⃣ 使用innerHTML修改内容（更简便）
const container = document.getElementById("container");
container.innerHTML = "<h1>New Title</h1><p>New Content</p>";
// 替换container内的所有内容
```

### document.write() 方法（已过时）

```javascript
// document.open() / close() / write() / writeln()

// ① 基本用法
document.write("<h1>Hello</h1>");
document.writeln("<p>World</p>");  // writeln = write + 换行

// ② 完整示例：打开→写入→关闭
document.open();
document.write("<h1>Page Title</h1>");
document.write("<p>Content</p>");
document.close();

// ③ 在页面加载完成后调用write()
setTimeout(() => {
    document.write("<h1>Hello World!</h1>");  // 覆盖整个页面！
}, 2000);

// ⚠️ 问题：write()会覆盖整个页面
// 如果页面已加载，document.write()会：
// 1. 调用document.open()
// 2. 清空现有内容
// 3. 写入新内容
// 结果：之前的所有HTML都被替换

// 现代替代方案：使用innerHTML或DOM操作
document.getElementById("container").innerHTML = "<h1>Hello</h1>";
// 或
const div = document.createElement("div");
div.innerHTML = "<h1>Hello</h1>";
document.body.appendChild(div);
```

---

## **📌 Page 17: document.write() 示例**

### 完整代码分析

```html
<!DOCTYPE html>
<html>
<body>
<!-- 页面初始内容 -->
<p>I'm having such a quiet, peaceful day...</p>
</body>

<script>
// 延迟2秒后执行write()
setTimeout(
    () => document.write("<h1>Hello World!</h1>"),  // 写入内容
    2000                                               // 延迟2000毫秒
);
</script>
</html>
```

### 执行流程

```
时间轴：
0秒   → 页面开始加载
       → 浏览器解析HTML、CSS、JS
       → 显示：<p>I'm having such a quiet, peaceful day...</p>
       → setTimeout注册，2秒后执行

2秒   → setTimeout回调执行
       → document.write("<h1>Hello World!</h1>")被调用
       → ⚠️ 页面已加载完成，write()触发：
          1. document.open()     // 清空页面
          2. 清除现有内容        // <p>...消失了！
          3. write新内容        // 写入<h1>Hello World!</h1>
          4. document.close()    // 完成写入

结果：
页面从显示 "I'm having such a quiet, peaceful day..."
变成 "Hello World!" (粗体大标题)
```

### 为什么会覆盖页面

```javascript
// 在文档加载过程中使用write()：正常工作
<script>
document.write("<p>During loading</p>");  // ✓ 追加内容
</script>

// 在文档加载完成后使用write()：覆盖页面
<script>
setTimeout(() => {
    document.write("<p>After loading</p>");  // ✗ 覆盖整个页面！
}, 1000);
</script>

// 原因：write()实际的流程
document.open();   // 打开文档流
// （当文档已加载时，open()会清空document）
document.write(...);  // 写入新内容
document.close();  // 关闭文档流
```

### 现代替代方案

```javascript
// ❌ 过时的方式
document.write("<h1>Hello</h1>");

// ✅ 现代方式1：innerHTML
document.getElementById("container").innerHTML = "<h1>Hello</h1>";

// ✅ 现代方式2：createElement + appendChild
const h1 = document.createElement("h1");
h1.textContent = "Hello";
document.body.appendChild(h1);

// ✅ 现代方式3：insertAdjacentHTML（更灵活）
document.getElementById("container").insertAdjacentHTML("beforeend", "<h1>Hello</h1>");

// 位置选项：
// - "beforebegin"  → 在元素前面
// - "afterbegin"   → 在元素内部最开始
// - "beforeend"    → 在元素内部最后面
// - "afterend"     → 在元素后面
```

---

## **📌 完整方法对比总结表**

|方法|用途|示例|现状|
|---|---|---|---|
|**document.write()**|在文档加载时写入|`document.write("<h1>Title</h1>")`|❌ 已过时|
|**document.writeln()**|写入+换行|`document.writeln("<p>Text</p>")`|❌ 已过时|
|**element.innerHTML**|修改元素内容|`div.innerHTML = "<h1>Title</h1>"`|✅ 现代推荐|
|**element.textContent**|修改纯文本|`div.textContent = "Text"`|✅ 推荐|
|**document.createElement()**|创建新元素|`document.createElement("div")`|✅ 推荐|
|**parentNode.appendChild()**|添加子节点|`body.appendChild(div)`|✅ 推荐|
|**parentNode.insertBefore()**|在前面插入|`parent.insertBefore(new, ref)`|✅ 推荐|
|**parentNode.replaceChild()**|替换子节点|`parent.replaceChild(new, old)`|✅ 推荐|
|**parentNode.removeChild()**|删除子节点|`parent.removeChild(child)`|✅ 推荐|

---

现在清楚了吗？如有疑问继续问！ 😊