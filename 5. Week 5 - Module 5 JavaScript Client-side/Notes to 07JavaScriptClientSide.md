# **Chapter 07: Client-side JavaScript – 客户端JavaScript (Pages 1–44)**

---

## **Page 1: Title Slide – 标题页**

Client-side JavaScript, CITS3403 and CITS5505 - Agile Web Development, 2026 Semester 1. 客户端JavaScript，CITS3403和CITS5505 - 敏捷Web开发，2026学年第一学期。

---

## **Pages 2: What is the USP of JavaScript? – JavaScript的独特卖点是什么？**
> [!PDF|yellow] [[07JavaScriptClientSide.pdf#page=2&selection=44,0,44,31&color=yellow|07JavaScriptClientSide, p.2]]
> > What is the USP of JavaScript?


We've seen core JavaScript that provides a general scripting language. 我们已经学过核心JavaScript，它提供了一种通用脚本语言。

But why is JavaScript so useful for the web? 但为什么JavaScript对Web如此有用？

Client-side JavaScript adds a collection of objects, methods and properties that allow scripts to interact with HTML documents: 客户端JavaScript添加了一组对象、方法和属性，允许脚本与HTML文档交互：

- Dynamic documents — 动态文档
- Client-side programming — 客户端编程

This is done by bindings to the **Document Object Model (DOM)**. 这是通过绑定到**文档对象模型（DOM）**来实现的。

> **💡 类比说明（Analogy）**
> 
> 把 HTML 文档想象成一栋**大楼的蓝图**（blueprint）。Core JavaScript 就像你手里的**工具箱**（toolbox），而 DOM 就是把蓝图变成**实际可操控的建筑模型**的桥梁。通过 DOM，JavaScript 可以打开窗户（改变元素内容）、移动墙壁（增删节点）、粉刷房间（修改样式）。

---

## **Pages 3–7: The Document Object Model (DOM) – 文档对象模型**

[[5. Week 5 - Module 5 JavaScript Client-side/Supplementary Notes to 07JavaScriptClientSide.md#1. **Pages 3–7 The Document Object Model (DOM) – 文档对象模型**]]

### **Page 3: Section Title – 章节标题页**

The Document Object Model (DOM). 文档对象模型（DOM）。

---

### **Page 4: The Document Object Model – 文档对象模型定义**
> [!PDF|yellow] [[07JavaScriptClientSide.pdf#page=4&selection=79,0,79,26&color=yellow|07JavaScriptClientSide, p.4]]
> > The Document Object Model


The DOM is a **platform- and language-neutral interface** that allows programs and scripts to dynamically access and update the content, structure and style of documents. DOM是一个**平台和语言无关的接口**，允许程序和脚本动态访问和更新文档的内容、结构和样式。

The document can be further processed, and the results of that processing can be incorporated back into the presented page. 文档可以被进一步处理，处理结果可以再被合并回所呈现的页面。

DOM specifications describe an **abstract model** of a document: DOM规范描述了文档的**抽象模型**：

- API between an HTML document and a program — HTML文档与程序之间的API
- Interfaces describe methods and properties — 接口描述方法和属性
- Different languages will **bind** the interfaces to specific implementations — 不同语言将接口**绑定**到具体实现
- Data is represented as **properties** and operations as **methods** — 数据表示为**属性**，操作表示为**方法**

> **🧠 引导问题（Guided Learning）**
> 
> Q: 为什么说DOM是"platform- and language-neutral"？ A: 因为DOM只定义了接口（interface），不限定实现语言。JavaScript、Python、Java都可以通过各自的DOM绑定来操作HTML文档。在浏览器中，JavaScript是最常见的绑定语言。

---

### **Page 5: The DOM Tree Model – DOM树模型**
> [!PDF|yellow] [[07JavaScriptClientSide.pdf#page=5&selection=12,0,12,19&color=yellow|07JavaScriptClientSide, p.5]]
> > The DOM Tree Model

DOM API describes a **tree** structure — the "document" node reflects the hierarchy in the HTML document. DOM API描述了一种**树**结构——"document"节点反映了HTML文档中的层级关系。

**示例：一段HTML对应的DOM树**

```html
<html>
  <head>
    <title> A simple document </title>
  </head>
  <body>
    <table>
      <tr>
        <th>Breakfast</th>    <!-- 文本节点: "Breakfast" -->
        <td>0</td>            <!-- 文本节点: "0" -->
        <td>1</td>            <!-- 文本节点: "1" -->
      </tr>
      <tr>
        <th>Lunch</th>        <!-- 文本节点: "Lunch" -->
        <td>1</td>
        <td>0</td>
      </tr>
    </table>
  </body>
</html>
```

对应的DOM树结构：

```
Document
├── <head>
│   └── <title>
│       └── "A simple document"   ← 文本节点 (text node)
└── <body>
    └── <table>
        ├── <tr>
        │   ├── <th> → "Breakfast"
        │   ├── <td> → "0"
        │   └── <td> → "1"
        └── <tr>
            ├── <th> → "Lunch"
            ├── <td> → "1"
            └── <td> → "0"
```

> **💡 关键理解**：DOM树不仅包含元素节点（element nodes），还包含**文本节点（text nodes）**和**属性节点（attribute nodes）**。这在遍历DOM时非常重要。

---

### **Page 6: The BOM Execution Environment – BOM执行环境**

However, the DOM tree is just one subsection of a larger **Browser Object Model (BOM)** tree that also includes nodes for the execution environment in a browser. 然而，DOM树只是更大的**浏览器对象模型（BOM）**树的一个子集，BOM还包含浏览器执行环境的节点。

This is not specific to the current page (document) being rendered and includes: 这不特定于当前正在渲染的页面（文档），它包括：

| BOM Feature             | 中文        |
| ----------------------- | --------- |
| Type of browser         | 浏览器类型     |
| User's history          | 用户历史记录    |
| Cookies                 | Cookie    |
| Screen size             | 屏幕大小      |
| Geolocation             | 地理定位      |
| Local (browser) storage | 本地（浏览器）存储 |
|                         |           |

Unlike the DOM, the BOM is **not supported by a fixed standard**, but there is a common set of features most browsers support. 与DOM不同，BOM**没有固定标准支持**，但大多数浏览器支持一组通用特性。

 **💡 DOM vs BOM 区分**
 
Unlike the DOM, the BOM is **not supported by a fixed standard**, but there is a common set of features most browsers support. 与DOM不同，BOM**没有固定标准支持**，但大多数浏览器支持一组通用特性。

> **💡 DOM vs BOM 区分**
> 

> [!NOTE]
> > ||DOM|BOM|
> > |---|---|---|
> > |关注对象|页面文档内容|浏览器环境|
> > |标准化|W3C标准|无固定标准|
> > |入口对象|`document`|`window`|
> > |例子|`document.getElementById()`|`window.history.back()`|


---

### **Page 7: The full BOM tree – 完整BOM树**

The full BOM tree has `window` as the root node. 完整的BOM树以`window`为根节点。

```
window
├── self, window, parent, top  (Window objects / 窗口对象)
├── document                    (document object / 文档对象)
│   ├── all[]
│   ├── forms[]  → elements[] (Button, Checkbox, File, Hidden,
│   │                          Password, Radio, Reset, Select → options[],
│   │                          Submit, Text, Textarea)
│   ├── images[]
│   ├── links[]
│   ├── anchors[]
│   ├── applets[]
│   ├── embeds[]
│   └── layers[]
├── frames[]                    (array of Window objects / 窗口对象数组)
├── location                    (Location object / 位置对象)
├── history                     (History object / 历史对象)
└── navigator                   (Navigator object / 导航器对象)
    ├── plugins[]
    └── mimeTypes[]
```

---

## **Pages 8–17: The DOM in JavaScript – JavaScript中的DOM**

[[5. Week 5 - Module 5 JavaScript Client-side/Supplementary Notes to 07JavaScriptClientSide.md#2. Pages 8-17 JavaScript中的DOM - 英文中文对照完整详解]]

### **Page 8: Section Title – 章节标题页**

The DOM in JavaScript. JavaScript中的DOM。

---

### **Page 9: The DOM in JavaScript – JavaScript中的DOM元素对象**

Elements in the HTML document are bound to JavaScript objects, known as **element objects**. HTML文档中的元素被绑定为JavaScript对象，称为**元素对象（element objects）**。

Attributes of the elements become **named properties** of element objects. 元素的属性（attributes）成为元素对象的**命名属性（named properties）**。

**示例代码：**

```html
<input type="text" name="address">
<!-- 
  对应的JS element object 有两个属性:
  - type 属性值为 "text"
  - name 属性值为 "address"
-->
```

Element objects can be addressed in several ways: 元素对象可以通过以下方式访问：

1. By **type and position** (e.g. the 5th image on the page) — 按**类型和位置**（如页面上第5张图片）
2. By **name** — 按**名称**
3. By **id** — 按**id**

---

### **Page 10: Method 1: Accessing elements by type & index – 方法一：按类型和索引访问元素**

The `document` object has various properties that reference **array-like objects** containing all the elements of a certain type (e.g. `forms`, `images`, `links`). `document`对象有各种属性，引用包含某种类型所有元素的**类数组对象**（如`forms`、`images`、`links`）。

**示例代码：**

```html
<body>
    <h2> Comic 1 </h2>
    <image src="https://imgs.xkcd.com/comics/degree_off.png"> </image>
    <h2> Comic 2 </h2>
    <image src="https://imgs.xkcd.com/comics/ineffective_sorts.png"> </image>
</body>
```

```javascript
// 访问第一张图片 (index 0)
document.images[0];    // → degree_off.png 的元素对象

// 访问第二张图片 (index 1)
document.images[1];    // → ineffective_sorts.png 的元素对象
```

The more general method is `getElementsByTagName`. 更通用的方法是`getElementsByTagName`。

```javascript
// 返回节点x内的所有<p>元素
x.getElementsByTagName("p")   // 返回一个 HTMLCollection
```

> **⚠️ 注意**：`getElementsByTagName` 返回的是**活动集合（live collection）**，当DOM变化时集合会自动更新。

---

### **Page 11: Method 2: Accessing elements by name – 方法二：按名称访问元素**

Adding a `name` attribute to an element allows you to access that element directly as a property of the parent element object. 为元素添加`name`属性，可以直接作为父元素对象的属性来访问。

**示例代码：**

```html
<form name="pets" action="">
    <label for="catName"> Your cat's name: </label>
    <input type="text" name="catName">
</form>
```

```javascript
// 通过 name 链式访问 input 元素
document.pets.catName          // → 访问 name="catName" 的 input 元素
document.pets.catName.value    // → 获取输入框中的值
```

Names are often required for many other purposes (as keys for sending data to server scripts, for linking with labels etc.), so this method is often convenient. 名称（name）通常也用于其他目的（作为向服务器发送数据的键、与label关联等），因此这种方法很方便。

---

### **Page 12: Method 3: Accessing elements by id – 方法三：按id访问元素**

The method `getElementById` finds the element with the `id` attribute that matches the provided parameter. `getElementById`方法查找`id`属性与所提供参数匹配的元素。

**完整示例代码（来自PPT）：**

```html
<!DOCTYPE html>
<html>
<body>
<h2>Finding HTML Elements Using document.forms</h2>

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
    var x = document.forms["frm1"];     // 通过forms集合获取表单
    var text = "";                       // 初始化结果字符串
    var i;
    for (i = 0; i < x.length; i++) {    // 遍历表单中每个元素
        text += x.elements[i].value + "<br>";  // 获取每个元素的值
    }
    document.getElementById("demo").innerHTML = text; // 输出到#demo
}
</script>
</body>
</html>
```

**运行结果：** 点击按钮后 `#demo` 段落显示：

```
Donald
Duck
Submit
```

 **🔑 三种方法对比总结：**
 
| 方法     | 语法示例                    | 特点          |
| ------ | ----------------------- | ----------- |
| 按类型和索引 | `document.images[0]`    | 依赖元素顺序，脆弱   |
| 按name  | `document.pets.catName` | 需要name属性，方便 |
> |按id|`document.getElementById("demo")`|最精确，最常用|

---

### **Page 13: Element-specific access methods – 特定元素的访问方法**

There are a range of other element-specific methods for accessing the DOM. 还有一系列其他针对特定元素的DOM访问方法。

For example, checkboxes and radio buttons have an **implicit array**, which has their name as the array name. 例如，复选框和单选按钮有一个**隐式数组**，以它们的name作为数组名。

**示例代码：**

```html
<form id="topGroup">
    <input type="checkbox" name="toppings" value="olives" />
    <!-- ... 其他 checkbox ... -->
    <input type="checkbox" name="toppings" value="tomatoes" />
</form>
```

```javascript
let toppingsSelected = 0;
let form = document.getElementById("topGroup"); // 获取表单
for (let index = 0; index < form.toppings.length; index++) {
    // form.toppings 是一个隐式数组，包含所有name="toppings"的checkbox
    if (form.toppings[index].checked) {   // 检查是否被选中
        toppingsSelected++;                // 计数器加1
    }
}
// toppingsSelected 现在是被选中的topping数量
```

> **💡 关键点**：同名（same `name`）的checkbox/radio会自动形成一个类数组集合，可以通过索引遍历。

---

### **Page 14: DOM traversal – DOM遍历**

How can we traverse the tree more abstractly without knowing the page structure? 如何在不知道页面结构的情况下更抽象地遍历树？

Element objects have properties to support **traversing** the document tree: 元素对象有以下属性支持**遍历**文档树：

|Property|说明|
|---|---|
|`parentNode`|引用父节点|
|`previousSibling`|前一个兄弟节点|
|`nextSibling`|后一个兄弟节点|
|`firstChild`|第一个子节点|
|`lastChild`|最后一个子节点|
|`childNodes`|返回子节点的 NodeList（类数组）|

**自行理解的最小示例：**

```html
<div id="parent">
    <p id="first">First</p>
    <p id="second">Second</p>
    <p id="third">Third</p>
</div>
```

```javascript
let parent = document.getElementById("parent");
parent.firstChild;          // → #first 的 <p> (注意可能是text节点!)
parent.childNodes;          // → NodeList [<p>, <p>, <p>] (加上text节点)
parent.childNodes.length;   // → 子节点数量

let second = document.getElementById("second");
second.parentNode;          // → <div id="parent">
second.previousSibling;     // → #first 的 <p> (或text节点)
second.nextSibling;         // → #third 的 <p> (或text节点)
```

> **⚠️ 常见陷阱**：`firstChild`、`nextSibling` 等可能返回**空白文本节点**（whitespace text nodes），而不是你期望的元素节点。如果只想获取元素节点，可以使用 `firstElementChild`、`nextElementSibling` 等。

---

### **Page 15: Example of traversing the DOM – DOM遍历示例**

A recursive function that counts the total number of Element objects in the DOM tree. 一个递归函数，统计DOM树中元素对象的总数。

```html
<html>
<script>
// 这个递归函数接收一个DOM Node对象，检查该节点及其子节点
// 是否为HTML标签（即Element对象）。
// 返回它遇到的Element对象总数。
// 如果传入Document对象，则遍历整个DOM树。

function countTags(n) {                    // n 是一个 Node
    var numtags = 0;                       // 初始化标签计数器
    if (n.nodeType == 1 /*Node.ELEMENT_NODE*/)  // 检查n是否为Element
        numtags++;                         // 如果是，计数器+1

    var children = n.childNodes;           // 获取n的所有子节点
    for(var i=0; i < children.length; i++) {    // 遍历子节点
        numtags += countTags(children[i]); // 递归统计每个子节点
    }
    return numtags;                        // 返回标签总数
}
</script>

<!-- 使用示例：页面加载时弹出标签数 -->
<body onload="alert('This document has ' + countTags(document) + ' tags')">
  <i>Sample</i> document.
</body>
</html>
```

 **🧠 引导问题**

 Q: `n.nodeType == 1` 代表什么？还有哪些常见的 nodeType？ A:
 
| nodeType值 | 常量名              | 含义                    |
| --------- | ---------------- | --------------------- |
| 1         | `ELEMENT_NODE`   | 元素节点，如 `<div>`, `<p>` |
| 2         | `ATTRIBUTE_NODE` | 属性节点                  |
| 3         | `TEXT_NODE`      | 文本节点                  |
| 8         | `COMMENT_NODE`   | 注释节点                  |
| 9         | `DOCUMENT_NODE`  | 文档节点（根）               |
|           |                  |                       |

**📝 典型习题** 

**题目**：对以下HTML，`countTags(document)` 返回什么值？

 ```html
<html><body><i>Sample</i> document.</body></html>
 ```

---


> **答案**：4 **解析**：Element节点有：`<html>`、`<head>`(浏览器自动补全)、`<body>`、`<i>` = 4个。注意 `" document."` 和 `"Sample"` 是text节点（nodeType=3），不计入。实际浏览器可能自动添加`<head>`，所以答案可能为3或4，取决于浏览器解析。PPT中的极简HTML可能只算 `<html>` `<body>` `<i>` = 3。

---

### **Page 16: DOM modification – DOM修改**

There are methods that allow you to modify or construct a DOM tree: 有一些方法允许修改或构建DOM树：

|Method|说明|
|---|---|
|`insertBefore(new, ref)`|在 ref 节点前插入 new 作为父节点的子节点|
|`replaceChild(new, old)`|用 new 替换 old 子节点|
|`removeChild(child)`|移除一个子节点|
|`appendChild(child)`|在子节点列表末尾添加新子节点|

This means you can construct part or whole document **dynamically**! 这意味着你可以**动态地**构建部分或整个文档！

Document writing methods include: 文档写入方法包括：

- `open()` — 打开文档输出流
- `close()` — 关闭文档输出流
- `write()` — 写入内容
- `writeln()` — 写入内容并换行

This is how front-end frameworks like **Angular** or **React** dynamically build the entire document on the client side! 这就是**Angular**或**React**等前端框架在客户端动态构建整个文档的原理！

**自制最小示例：**

```javascript
// 创建一个新的 <p> 元素并添加到页面
let newP = document.createElement("p");        // 创建 <p> 元素
let text = document.createTextNode("Hello!");  // 创建文本节点
newP.appendChild(text);                         // 将文本放入 <p>
document.body.appendChild(newP);               // 将 <p> 添加到 <body> 末尾

// 删除一个元素
let oldP = document.getElementById("remove-me");
oldP.parentNode.removeChild(oldP);             // 通过父节点删除
```

---

### **Page 17: Example – document.write 示例**

```html
<!DOCTYPE html>
<html>
<body>
<p>I'm having such a quiet, peaceful day...</p>
</body>

<script>
setTimeout(
    () => document.write("<h1> Hello World! </h1>"),  // 2秒后写入
    2000                                               // 延迟2000毫秒
);
</script>
</html>
```

> **⚠️ 重要提醒**：在文档加载完成后调用 `document.write()` 会**覆盖整个页面**！这里 `setTimeout` 确保 `write` 在页面加载完成后执行，所以原来的 `<p>` 内容会被完全替换为 `<h1>Hello World!</h1>`。
> 
> 在现代开发中，**不推荐使用 `document.write()`**，而是使用 `innerHTML` 或 DOM 操作方法。

---

## **Pages 18–24: The BOM in JavaScript – JavaScript中的BOM**

### **Page 18: Section Title – 章节标题页**

The BOM in JavaScript. JavaScript中的BOM。

---

### **Page 19: The BOM tree – BOM树（重复展示）**

（与Page 7相同的BOM树结构图，此处强调的是从JavaScript角度访问BOM。） `window` 是整个BOM的根对象，在浏览器中，`window` 也是全局作用域的对象。

```javascript
// window 是全局对象，以下写法等价：
window.document === document   // true
window.alert("Hi") === alert("Hi")  // 等价
```

---

### **Page 20: The Navigator object – Navigator对象**

The `window.navigator` object contains information about the browser: `window.navigator`对象包含浏览器信息：

|Property|Description|中文|
|---|---|---|
|`appCodeName`|Returns the code name of the browser|返回浏览器代码名|
|`appName`|Returns the name of the browser|返回浏览器名称|
|`appVersion`|Returns the version information|返回版本信息|
|`cookieEnabled`|Determines whether cookies are enabled|判断Cookie是否启用|
|`geolocation`|Returns a Geolocation object to locate user|返回地理定位对象|
|`language`|Returns the language of the browser|返回浏览器语言|
|`onLine`|Determines whether the browser is online|判断浏览器是否在线|
|`platform`|Returns the platform the browser is compiled for|返回浏览器运行平台|
|`product`|Returns the engine name|返回引擎名称|
|`userAgent`|Returns the user-agent header|返回user-agent头|

Many properties such as `geolocation` need **permission from the user** to access. 许多属性（如`geolocation`）需要**用户授权**才能访问。

```javascript
// 示例：获取用户地理位置
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (pos) => console.log(pos.coords.latitude, pos.coords.longitude),
        (err) => console.log("Error: " + err.message)
    );
}
```

---

### **Page 21: The History object – History对象**

The `window.history` object contains methods for moving backwards and forwards. `window.history`对象包含前进和后退的方法。

|Property/Method|Description|中文|
|---|---|---|
|`back()`|Loads the previous URL in the history list|加载历史列表中的上一个URL|
|`forward()`|Loads the next URL in the history list|加载历史列表中的下一个URL|
|`go()`|Loads a specific URL from the history list|加载历史列表中的特定URL|
|`length`|Returns the number of URLs in the history list|返回历史列表中URL的数量|

```javascript
history.back();      // 等同于点击浏览器的"后退"按钮
history.forward();   // 等同于点击"前进"按钮
history.go(-2);      // 后退两页
```

Other BOM objects include: 其他BOM对象包括：

- `Window.console` — 控制台对象
- `Window.screen` — 屏幕信息对象
- `window.location` — 当前URL信息对象

---

### **Page 22: Persistent state in the browser – 浏览器中的持久状态**

By default, HTTP(S) requests are **stateless** — neither the server nor the client maintains information once the user navigates away from the webpage. 默认情况下，HTTP(S)请求是**无状态的**——用户离开网页后，服务器和客户端都不保留信息。

This makes it difficult to identify returning users or maintain state between sessions. 这使得识别回访用户或在会话之间维持状态变得困难。

Two main ways to store state: **cookies** and **local storage**: 两种主要的状态存储方式：**Cookie**和**本地存储（local storage）**：

1. A **cookie** is a string containing key-value pairs. **Cookie**是一个包含键值对的字符串。
    
2. **Local storage** is a key-value dictionary where values are stored as strings. **本地存储**是一个键值字典，值以字符串形式存储。
    

|特性|Cookies|Local Storage|
|---|---|---|
|大小限制|~4KB|~10MB|
|传输到服务器？|✅ 每次HTTP请求都带上|❌ 仅客户端可用|
|同域限制|✅|✅|
|过期机制|可设置过期时间|不过期（除非手动清除）|

Both are only available to pages within the **same domain** they were created by. 两者都只对**创建它们的同域**页面可用。

---

### **Page 23: The Cookies object – Cookie对象**

A cookie is a small (**max 4KB**) text file containing key-value pairs. Cookie是一个小型（**最大4KB**）文本文件，包含键值对。

Cookies for the current web-page are accessible through `document.cookie`. 当前网页的Cookie通过`document.cookie`访问。

Cookies are specified with an expiry date or will be deleted when the browser is closed. Cookie需指定过期日期，否则在浏览器关闭时删除。

```javascript
// 设置Cookie（带过期时间）
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
```

**设置Cookie的函数（来自PPT）：**

```javascript
function setCookie(cname, cvalue, exdays) {
    var d = new Date();                            // 获取当前日期
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); // 计算过期时间
    var expires = "expires=" + d.toUTCString();    // 转为UTC格式
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // 将cookie写入 document.cookie
}
```

**读取Cookie的函数（来自PPT）：**

```javascript
function getCookie(cname) {
    var name = cname + "=";                        // 构造查找键
    var decodedCookie = decodeURIComponent(document.cookie); // 解码
    var ca = decodedCookie.split(';');             // 按分号分割
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {              // 去除前导空格
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {               // 找到匹配的cookie
            return c.substring(name.length, c.length); // 返回值
        }
    }
    return "";                                     // 未找到返回空字符串
}
```

---

### **Page 24: Web storage – Web存储**

A larger and more secure alternative to cookies is **Web Storage**. 一种比Cookie更大、更安全的替代方案是**Web存储**。

Particularly useful for large forms where there is a chance a session could end before the user submits the form. 尤其适用于大型表单——会话可能在用户提交前结束的场景。

All values are automatically converted to **strings** internally. 所有值在内部都自动转换为**字符串**。

Can store much more data than a cookie (**10MB**). 可以存储比Cookie多得多的数据（**10MB**）。

```javascript
// localStorage 示例：计算按钮点击次数
if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
    // Number()将字符串转为数字，因为localStorage只存字符串
} else {
    localStorage.clickcount = 1;   // 首次点击，初始化为1
}
document.getElementById("result").innerHTML = "You have clicked the button " +
    localStorage.clickcount + " time(s).";
```

> **🧠 引导问题**
> 
> Q: 为什么代码中需要 `Number(localStorage.clickcount) + 1` 而不是直接 `localStorage.clickcount + 1`？ A: 因为 localStorage 只存储字符串。如果直接 `"3" + 1`，JavaScript 会做字符串拼接得到 `"31"`，而不是数字相加的 `4`。所以必须先用 `Number()` 转换。

> **📝 典型习题**
> 
> **题目**：以下代码执行后 `localStorage.clickcount` 的值是什么？（假设之前值为 `"5"`）
> 
> ```javascript
> localStorage.clickcount = localStorage.clickcount + 1;
> ```
> 
> **答案**：`"51"`（字符串） **解析**：没有用 `Number()` 转换，`"5" + 1` 会触发字符串拼接，结果是 `"51"` 而非 `6`。

---

## **Pages 25–35: Event-driven Programming – 事件驱动编程**

### **Page 25: Section Title – 章节标题页**

Event-driven programming. 事件驱动编程。

---

### **Page 26: Event driven programming – 事件驱动编程概念**

Event-driven programming or event-based programming is: 事件驱动编程或基于事件的编程是：

- A programming paradigm in which the flow of the program is determined by **sensor outputs** or **user actions** (mouse clicks, key presses) or **messages from other programs**. 一种编程范式，程序流由**传感器输出**、**用户操作**（鼠标点击、按键）或**其他程序的消息**决定。
    
- Not unique to the web — crops up in many other places: hardware interrupts, multi-process operating systems, distributed programming, Java listeners, exceptions... 不是Web独有的——在许多地方都会出现：硬件中断、多进程操作系统、分布式编程、Java监听器、异常...
    

It is fundamental to web-based programming: 它是Web编程的基础：

- Client-server model — 客户端-服务器模型
- Stateless programming — 无状态编程
- Controlled from browser end — 由浏览器端控制

Event-driven programming drives many technologies in this unit: 事件驱动编程驱动本课程中的许多技术：

- Sockets — 套接字
- AJAX — 异步JavaScript和XML
- JavaScript callbacks — JavaScript回调

> **💡 类比说明**
> 
> 事件驱动编程就像**餐厅服务**：服务员（浏览器）不会一直盯着每桌客人看，而是等客人**举手示意**（触发事件）后才过来服务（执行事件处理器）。这比一直轮询询问"请问需要什么？"要高效得多。

---

### **Page 27: Implementing event-driven programs – 实现事件驱动程序**

Event-driven programs are usually structured as a **program loop** which consists of two parts: 事件驱动程序通常由**程序循环**组成，包含两部分：

1. **Event detection** — 事件检测
2. **Event handling** — 事件处理

Example: an asynchronous program that polls for events from a keyboard: 示例：一个从键盘轮询事件的异步程序：

```
set counter K to 0                          // 设置计数器K为0
repeat {                                     // 重复循环
    if a number has been entered (from the keyboard) {  // 【事件检测】
        store in A[K] and increment K       // 【事件处理】存入A[K]并K++
        if K equals 2                       // 如果K等于2
            print A[0]+A[1] and reset K to 0  // 【事件处理】打印和，重置K
    }
}
```

The diagram shows: **EventEmitters** → Events (queue) → **Event Loop** → **Event Handlers**. 图示：**事件发射器** → 事件（队列）→ **事件循环** → **事件处理器**。

---

### **Page 28: Avoiding implementing the event loop – 避免手动实现事件循环**

The programmer may be freed from event detection in several ways: 程序员可以通过以下方式免于事件检测：

1. Embedded programs may use **interrupts** — handled by hardware (no loop needed). 嵌入式程序可以使用**中断**——由硬件处理（不需要循环）。
    
2. The **execution environment itself** may implement the loop. **执行环境本身**可以实现循环。
    

**Browsers use the second approach** to allow the programmer to focus on event handling. **浏览器采用第二种方式**，让程序员专注于事件处理。

The browser **listens** (using polls or interrupts) for events, such as: 浏览器**监听**（通过轮询或中断）事件，如：

1. User actions (e.g. `<enter>`, mouse clicks, ...) — 用户操作
2. Server responses (e.g. page loaded, AJAX responses, ...) — 服务器响应

When it recognises an event, it invokes the correct **event listener**, a piece of code to handle the event. 当识别到事件时，浏览器调用正确的**事件监听器**——一段处理事件的代码。

For the browser to know what code to invoke, the event listener code must be **registered** to a specific event. 要让浏览器知道调用什么代码，事件监听器必须**注册**到特定事件。

---

### **Page 29: Common events and their tags – 常见事件及其标签属性**

|Event 事件|Tag Attribute 标签属性|
|---|---|
|blur（失焦）|onblur|
|change（改变）|onchange|
|click（点击）|onclick|
|dblclick（双击）|ondblclick|
|focus（获焦）|onfocus|
|keydown（按键按下）|onkeydown|
|keypress（按键）|onkeypress|
|keyup（按键释放）|onkeyup|
|load（加载完成）|onload|
|mousedown（鼠标按下）|onmousedown|
|mousemove（鼠标移动）|onmousemove|
|mouseout（鼠标离开）|onmouseout|
|mouseover（鼠标悬停）|onmouseover|
|mouseup（鼠标松开）|onmouseup|
|reset（重置）|onreset|
|select（选中）|onselect|
|submit（提交）|onsubmit|
|unload（卸载）|onunload|

**PPT代码示例：**

```html
<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the date.</p>

<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
    // 点击按钮后，将当前日期时间写入#demo段落
}
</script>

<p id="demo"></p>

</body>
</html>
```

输出：点击按钮后显示类似 `Wed Mar 13 2019 13:12:10 GMT+0800`。

---

### **Page 30: Event listener registration (1/2) – 事件监听器注册（上）**

There are **three ways** to register an event handler in HTML/JavaScript: 在HTML/JavaScript中有**三种方式**注册事件处理器：

**方法1：Assign the event handler script to an event attribute** **方法1：将事件处理脚本赋给事件属性**

```html
<!-- 直接在属性中写代码 -->
<button onclick="alert('Hi!');">  Greetings  </button>

<!-- 更常见：调用函数 -->
<button onclick="myHandler()">  Greetings  </button>
```

```javascript
function myHandler(e) {
    // ... 处理逻辑
}
```

**方法2：Assign the handler to the appropriate property of the element's object** **方法2：将处理函数赋给元素对象的对应属性**

```html
<button id="myButton">  Greetings  </button>
```

```javascript
// ⚠️ 注意：是 myHandler（函数引用），不是 myHandler()（函数调用）！
document.getElementById("myButton").onclick = myHandler;
```

> **⚠️ 关键区别**
> 
> |写法|含义|
> |---|---|
> |`onclick = myHandler`|把函数**引用**赋值给属性 ✅|
> |`onclick = myHandler()`|立即**调用**函数，把返回值赋给属性 ❌|

Statement must follow both handler function and form element, so the JavaScript interpreter has seen both. 该语句必须放在处理函数和表单元素之后，确保JavaScript解释器已经解析过两者。

---

### **Page 31: Event listener registration (2/2) – 事件监听器注册（下）**

**方法3 (preferred): Use the `addEventListener` method** **方法3（推荐）：使用`addEventListener`方法**

```javascript
button = document.getElementById("myButton");
button.addEventListener("click", myHandler, false);
//                       ↑事件类型   ↑处理函数   ↑是否在捕获阶段执行
```

三个参数：

1. A string naming the **event type** (e.g. `"click"`) — 事件类型字符串
2. The **handler function** — 处理函数
3. An optional Boolean specifying if the handler is enabled for the **capture phase** — 可选布尔值，指定是否在**捕获阶段**启用

**Why `addEventListener` is preferred (`addEventListener`为什么是推荐方式):**

1. **Separation of concerns** — control code is kept separate from HTML. **关注点分离**——控制代码与HTML分离。
    
2. **Multiple handlers** can be added to the same event for the same element. 同一元素的同一事件可以添加**多个处理器**。
    
3. Can add the **same handler to many elements** in a loop (unlike approach 1). 可以在循环中为**多个元素添加同一处理器**（方法1做不到）。
    

**自制对比示例：**

```javascript
// 方法2的缺点：第二个处理器会覆盖第一个
btn.onclick = handler1;
btn.onclick = handler2;  // handler1 被覆盖了！只有handler2执行

// 方法3的优点：两个处理器都会执行
btn.addEventListener("click", handler1);
btn.addEventListener("click", handler2);  // 两个都保留！
```

---

### **Page 32: Event flow – 事件流**

The HTML element receiving an event is called the **target node**, however its ancestor nodes in the DOM tree will also receive the event. 接收事件的HTML元素称为**目标节点（target node）**，但其DOM树中的祖先节点也会接收到该事件。

The order in which elements receive the event is called the **event flow** and has **3 phases**: 元素接收事件的顺序称为**事件流（event flow）**，有**3个阶段**：

```
     Document          Document
        ↓                  ↑
       HTML               HTML
        ↓                  ↑
       BODY               BODY
        ↓                  ↑
       DIV                DIV
        ↓                  ↑
      BUTTON ← ← ← ← BUTTON

  [Phase 1:           [Phase 3:
   Capturing]          Bubbling]
             [Phase 2:
              Target]
```

1. **Capturing phase（捕获阶段）**: Each node from the document root to the target is examined. If a capture-enabled handler exists, it is executed. 从文档根节点到目标节点逐个检查。如果存在启用了捕获的处理器，则执行。
    
2. **Target phase（目标阶段）**: All handlers registered for the target node are executed. 目标节点上注册的所有处理器都被执行。
    
3. **Bubbling phase（冒泡阶段）**: Each node from the target's parent to the root is examined. If a non-capture handler exists, it is executed. 从目标的父节点到根节点逐个检查。如果存在非捕获处理器，则执行。
    

> **💡 类比说明**
> 
> 想象往池塘里扔一块石头（点击按钮）：
> 
> - **捕获阶段** = 石头从空中**落向**水面（从外到内）
> - **目标阶段** = 石头**击中**水面（目标元素处理）
> - **冒泡阶段** = 水波**向外扩散**（从内到外）

---

### **Page 33: Event objects – 事件对象**

Handling the event in the **bubbling phase is the default** behaviour, i.e. child elements handle events first before parents. 在**冒泡阶段处理事件是默认**行为，即子元素先于父元素处理事件。

Certain events **do not bubble**: `load`, `unload`, `blur` and `focus`. 某些事件**不冒泡**：`load`、`unload`、`blur`和`focus`。

The **event object** is passed as an argument to every event handler: **事件对象（event object）**作为参数传递给每个事件处理器：

|Property/Method|说明|
|---|---|
|`target`|事件的目标节点（事件实际发生的元素）|
|`currentTarget`|处理器注册到的节点（当前正在处理事件的元素）|
|`stopPropagation()`|阻止事件继续冒泡到父元素|

Some event types extend the interface with additional info. For example, a mouse event includes the location of the mouse: 某些事件类型扩展了接口，包含额外信息。例如鼠标事件包含鼠标位置：

```javascript
function handleMouseClick(e) {
    console.log("Coordinates: " + e.pageX + "," + e.pageY);
    // pageX/pageY 是鼠标点击时相对于页面的坐标
}
```

> **📝 典型习题**
> 
> **题目**：点击下面HTML中的`<span>`时，事件处理器的执行顺序是什么？
> 
> ```html
> <div id="outer">
>   <span id="inner">Click me</span>
> </div>
> <script>
>   document.getElementById("outer").addEventListener("click", () => console.log("outer-bubble"));
>   document.getElementById("inner").addEventListener("click", () => console.log("inner-bubble"));
>   document.getElementById("outer").addEventListener("click", () => console.log("outer-capture"), true);
> </script>
> ```
> 
> **答案**：`outer-capture` → `inner-bubble` → `outer-bubble`
> 
> **解析**：
> 
> 1. 捕获阶段：从根到目标，`outer`有一个capture=true的处理器 → 输出 `"outer-capture"`
> 2. 目标阶段：`inner`上的处理器执行 → 输出 `"inner-bubble"`
> 3. 冒泡阶段：从`inner`的父节点向上，`outer`有一个bubble处理器 → 输出 `"outer-bubble"`

---

### **Page 34: Some useful events – 一些常用事件**

- `load` — fires when the **whole page** has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images. `load`——当**整个页面**加载完成（包括所有样式表、脚本、iframe和图片）时触发。
    
- `mouseover`/`mousemove`/`mouseout` — fires when the mouse **enters/moves in/leaves** an HTML element. `mouseover`/`mousemove`/`mouseout`——当鼠标**进入/在内移动/离开**HTML元素时触发。
    
- `keydown` — fires when a **key is pressed**. `keydown`——当**按下键**时触发。
    
- `focus`/`blur` — fired when an HTML element **gains/loses focus**, i.e. cursor placed in text area, paragraph highlighted. `focus`/`blur`——当HTML元素**获得/失去焦点**时触发（如光标放入文本区域）。
    

**自制示例：综合运用多种事件**

```html
<input id="myInput" type="text" placeholder="Type here...">
<p id="output"></p>

<script>
let input = document.getElementById("myInput");
let output = document.getElementById("output");

input.addEventListener("focus", () => {
    output.innerHTML = "Input is focused!";      // 获得焦点
});

input.addEventListener("blur", () => {
    output.innerHTML = "Input lost focus.";      // 失去焦点
});

input.addEventListener("keydown", (e) => {
    output.innerHTML = "Key pressed: " + e.key;  // 显示按下的键
});
</script>
```

---

### **Page 35: Using events to validate a form – 使用事件验证表单**

An important use of events is to **validate the content of forms** without using bandwidth and time to access a remote server. 事件的一个重要用途是**验证表单内容**，无需消耗带宽和时间去访问远程服务器。

By reacting to `focus` and `input` events, the user can be prevented from entering invalid values. 通过响应`focus`和`input`事件，可以阻止用户输入无效值。

By reacting to the `submit` event, the user can be prevented from submitting an invalid form. 通过响应`submit`事件，可以阻止用户提交无效表单。

**PPT代码示例：**

```javascript
form.addEventListener("submit", (e) => {
    // if the email field is valid, we let the form submit
    // 如果email字段有效，允许表单提交
    if (!isValid(form.email)) {
        // If it isn't, we display an appropriate error message
        // 如果无效，显示错误消息
        showError();
        // Then we prevent the form from being sent by canceling the event
        // 然后通过取消事件来阻止表单发送
        e.preventDefault();    // ← 关键：阻止表单的默认提交行为
    }
});
```

> **⚠️ 安全警告（来自PPT）**：Client-side validation is **easy to work around**: 客户端验证**很容易被绕过**：
> 
> - Delete the validation code in the browser inspector panel — 在浏览器检查器中删除验证代码
> - Simulate an HTTP request directly with socket-level programming — 直接用socket编程模拟HTTP请求
> 
> **If the validity of data is important, the server needs to check it!** **如果数据有效性很重要，服务器必须验证！**

---

## **Pages 36–44: jQuery – jQuery库**

### **Page 36: Section Title – 章节标题页**

jQuery.

---

### **Page 37: jQuery motivation – jQuery的动机**

The core JavaScript DOM manipulation function names are **verbose**, composing them is hard. 核心JavaScript DOM操作函数名**冗长**，组合使用困难。

jQuery is the **most popular JavaScript library** in the world. It was first released in **2006** and is available under a **MIT license**. jQuery是世界上**最流行的JavaScript库**。**2006年**首次发布，采用**MIT许可证**。

The goal of jQuery is to make DOM manipulation and other client-side JavaScript code **more concise and easier to write**. jQuery的目标是使DOM操作和其他客户端JavaScript代码**更简洁、更易编写**。

The jQuery library has features for: jQuery库的功能包括：

- HTML/DOM manipulation — HTML/DOM操作
- CSS manipulation — CSS操作
- HTML event handling — HTML事件处理
- Effects and animations — 效果和动画
- AJAX message handling — AJAX消息处理
- Some utilities — 一些工具函数

**PPT代码片段：**

```javascript
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");      // 设置文本内容
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>"); // 设置HTML内容
    });
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");          // 设置输入框的值
    });
});
```

---

### **Page 38: Getting started with jQuery – jQuery入门**

jQuery is usually accessed through a **CDN**: jQuery通常通过**CDN**加载：

```html
<script
    src="https://code.jquery.com/jquery-3.7.1.min.js">
</script>
```

Basic jQuery syntax is `$(selector).action()`: jQuery基本语法为`$(selector).action()`：

- `$` is an abbreviation for `jQuery` — `$`是`jQuery`的缩写
- `selector` is a query to find HTML elements (syntax is a **superset of CSS**) — `selector`用CSS超集语法查找HTML元素
- `action` is a jQuery function to be applied to the selected elements — `action`是要应用于选中元素的jQuery函数

| Syntax                   | Description                                  | 中文                      |
| ------------------------ | -------------------------------------------- | ----------------------- |
| `$("*")`                 | Selects all elements                         | 选择所有元素                  |
| `$(this)`                | Selects the current HTML element             | 选择当前HTML元素              |
| `$("p.intro")`           | Selects all `<p>` with class="intro"         | 选择class为"intro"的所有`<p>` |
| `$("p:first")`           | Selects the first `<p>` element              | 选择第一个`<p>`元素            |
| `$("ul li:first")`       | Selects the first `<li>` of the first `<ul>` | 选择第一个`<ul>`的第一个`<li>`   |
| `$("ul li:first-child")` | Selects the first `<li>` of every `<ul>`     | 选择每个`<ul>`的第一个`<li>`    |
|                          |                                              |                         |

> **💡 原生JS vs jQuery 对比**

| 操作     | 原生JS                                   | jQuery         |
| ------ | -------------------------------------- | -------------- |
| 按ID选择  | `document.getElementById("demo")`      | `$("#demo")`   |
| 按类选择   | `document.getElementsByClassName("c")` | `$(".c")`      |
| 按标签选择  | `document.getElementsByTagName("p")`   | `$("p")`       |
| CSS选择器 | `document.querySelectorAll("p.intro")` | `$("p.intro")` |

---

### **Page 39: DOM element manipulation with jQuery – jQuery的DOM元素操作**

jQuery can select elements and classes, traverse the DOM, get/set elements and attributes, add/remove elements. jQuery可以选择元素和类，遍历DOM，获取/设置元素和属性，增删元素。

**Basic actions（基本操作）:**

|Method|说明|
|---|---|
|`text()`|Get or set the **text** content（获取/设置文本内容）|
|`html()`|Get or set the **raw html**（获取/设置原始HTML）|
|`val()`|Get or set the **value** of a field（获取/设置字段值）|
|`attr()`|Get or set an **attribute** value（获取/设置属性值）|

**Get（获取）：** No argument = return current value. **获取**：不传参数 = 返回当前值。

```javascript
$(".h1").text();          // 获取class="h1"元素的文本
$(".age").attr("max");    // 获取class="age"元素的max属性值
```

**Set（设置）：** Pass argument(s) = set the value. **设置**：传入参数 = 设置值。

```javascript
$(".h1").text("The beginning...");   // 设置文本
$(".age").attr("max", 105);          // 设置max属性为105
```

---

### **Page 40: DOM tree manipulation with jQuery – jQuery的DOM树操作**

You can alter the DOM tree with the following functions: 可以用以下函数修改DOM树：

|Method|说明|
|---|---|
|`a.prepend(b1, b2, …)`|将b1, b2...添加为a的**第一个**子元素|
|`a.append(b1, b2, …)`|将b1, b2...添加为a的**最后一个**子元素|
|`a.before(b1, b2, …)`|将b1, b2...添加为a**前面的**兄弟元素|
|`a.after(b1, b2, …)`|将b1, b2...添加为a**后面的**兄弟元素|

**PPT代码示例：**

```javascript
function afterText() {
    var txt1 = "<b>I </b>";                    // 用HTML创建元素
    var txt2 = $("<i></i>").text("love ");     // 用jQuery创建元素
    var txt3 = document.createElement("b");    // 用DOM创建元素
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);          // 在<img>后插入三个元素
}
// 结果：<img> 后面出现 "I love jQuery!"
```

> **💡 理解 prepend/append vs before/after**
> 
> ```
> before(b) → [b] [a 的开始 → prepend(c) → [c] ...原有子节点... append(d) → [d] ← a 的结束] after(e) → [e]
> ```
> 
> - `prepend/append` 操作的是**子节点**（在a内部）
> - `before/after` 操作的是**兄弟节点**（在a外部）

---

### **Page 41: Events in jQuery – jQuery中的事件**

jQuery has various action functions to assign a JavaScript function to DOM events. jQuery有各种操作函数来将JavaScript函数分配给DOM事件。

|Mouse Events|Keyboard Events|Form Events|Document/Window Events|
|---|---|---|---|
|click|keypress|submit|load|
|dblclick|keydown|change|resize|
|mouseenter|keyup|focus|scroll|
|mouseleave||blur|unload|

**Assigning a click event to all paragraphs（为所有段落分配点击事件）:**

```javascript
$("p").click(() => {
    //code                // 点击任何<p>元素时执行
});
```

**The `on` method allows multiple events on the same selector:** **`on`方法允许在同一选择器上绑定多个事件：**

```javascript
$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray"); // 鼠标进入→灰色背景
    },
    mouseleave: function(){
        $(this).css("background-color", "lightblue"); // 鼠标离开→蓝色背景
    },
});
```

---

### **Page 42: Delaying code in jQuery – jQuery中延迟执行代码**

`$(document).ready()` delays executing jQuery code until the document is fully loaded. `$(document).ready()`延迟执行jQuery代码直到文档完全加载。

It is common to wrap your jQuery code in this way. 通常用这种方式包裹jQuery代码。

**PPT完整代码示例：**

```html
<head>
<script>
$(document).ready(() => {          // 等待文档加载完成
    $("button").click(() => {      // 为所有<button>注册点击事件
        $(".zap").hide();          // 隐藏所有class="zap"的元素
    });
});
</script>
</head>

<body>
    <p class="zap"> Wands </p>       <!-- 有zap类 → 会被隐藏 -->
    <p class="zap"> Broomsticks </p> <!-- 有zap类 → 会被隐藏 -->
    <p> Owls </p>                     <!-- 无zap类 → 不受影响 -->
    <button> Evanesco! </button>      <!-- 点击触发隐藏 -->
</body>
```

点击 "Evanesco!" 按钮后，"Wands" 和 "Broomsticks" 消失，"Owls" 保留。

> **🧠 引导问题**
> 
> Q: 为什么需要 `$(document).ready()`？如果去掉会怎样？ A: `<script>` 在 `<head>` 中，此时 `<body>` 还没被解析。如果去掉 `ready()`，`$("button")` 找不到任何元素（因为 `<button>` 还不存在），点击事件不会被注册。`ready()` 确保代码在DOM树构建完成后才执行。
> 
> 替代方案：把 `<script>` 放在 `</body>` 前面，此时DOM已经构建完成，不需要 `ready()`。

---

### **Page 43: Effects in jQuery – jQuery中的效果**

Some jQuery actions implement useful effects, including `hide`, `show`, `fade`, `slide` and `animate`. 一些jQuery操作实现了有用的效果，包括`hide`、`show`、`fade`、`slide`和`animate`。

**PPT完整代码示例：**

```html
<head>
<script>
$(document).ready(() => {
    $("#flip").click(() => {
        $("#panel").slideDown("slow");  // 点击时慢速向下滑动显示
    });
});
</script>

<style>
#flip, #panel {
    padding: 5px;
    text-align: center;
    background-color: lightgrey;
    border: solid 1px;
}
#panel {
    padding: 5px;
    display: none;              /* 初始状态：隐藏 */
}
</style>
</head>

<body>
    <div id="flip"> Click me! </div>        <!-- 可点击区域 -->
    <div id="panel"> Hello world! </div>    <!-- 初始隐藏的面板 -->
</body>
```

点击 "Click me!" 后，"Hello world!" 面板缓慢向下滑出显示。

**常用效果方法速查：**

|Method|说明|
|---|---|
|`hide(speed)` / `show(speed)`|隐藏/显示元素|
|`fadeIn(speed)` / `fadeOut(speed)`|淡入/淡出|
|`slideDown(speed)` / `slideUp(speed)`|向下滑出/向上收起|
|`toggle()`|在hide/show之间切换|
|`animate({params}, speed)`|自定义动画|

---

### **Page 44: Chaining in jQuery – jQuery中的链式调用**

Most jQuery functions that mutate an element object, **return that mutated element object** instead of returning nothing. 大多数修改元素对象的jQuery函数，会**返回被修改的元素对象**而不是不返回任何东西。

Consequently, you can apply many effects to elements in **a single statement**. 因此，你可以在**单条语句**中对元素应用多个效果。

**PPT代码示例：**

```javascript
$("li")                              // 1. 选择所有 <li> 元素
    .filter(".first, .last")         // 2. 筛选出class为"first"或"last"的
    .css("color", "red")             // 3. 设置文字颜色为红色
    .css("backgroundColor", "yellow"); // 4. 设置背景色为黄色
```

步骤分解：

1. All `<li>` elements are selected. — 选择所有`<li>`元素。
2. Ones which don't belong to the "first" or "last" classes are filtered out. — 过滤掉不属于"first"或"last"类的元素。
3. The remaining ones have both their foreground and background colour set. — 对剩余元素同时设置前景色和背景色。

This style of programming is known as **chaining**. 这种编程风格称为**链式调用（chaining）**。

> **💡 为什么chaining能工作？**
> 
> 因为每个方法都 `return this;`（返回自身），所以可以继续在返回值上调用下一个方法。这和 JavaScript 中 **Builder Pattern** 的思想类似。
> 
> ```javascript
> // 等价的非链式写法：
> let selected = $("li");
> let filtered = selected.filter(".first, .last");
> filtered.css("color", "red");
> filtered.css("backgroundColor", "yellow");
> ```

---

## **Summary 总结**

### DOM（文档对象模型）— Pages 2-17

- DOM 是平台和语言无关的接口，将HTML文档表示为**树结构**，允许JavaScript动态访问和修改内容、结构和样式。
- 三种访问元素的方式：按**类型/索引**（`document.images[0]`）、按**name**（`document.pets.catName`）、按**id**（`getElementById`，最常用）。
- DOM遍历属性：`parentNode`、`childNodes`、`firstChild`、`nextSibling` 等。
- DOM修改方法：`appendChild`、`removeChild`、`insertBefore`、`replaceChild`。
- `document.write()` 在文档加载后调用会**覆盖**整个页面。

### BOM（浏览器对象模型）— Pages 18-24

- BOM以 `window` 为根，包含 `document`、`navigator`、`history`、`location` 等。
- `navigator` 提供浏览器信息；`history` 提供前进/后退导航。
- **Cookie**：最大4KB，每次HTTP请求都发送到服务器，需设置过期时间。
- **localStorage**：最大10MB，仅客户端可用，不随HTTP请求发送，不会自动过期。
- 两者都受**同源策略（same domain）**限制。

### 事件驱动编程 — Pages 25-35

- 浏览器实现事件循环，程序员只需注册事件处理器。
- 三种注册方式：HTML属性、对象属性、**`addEventListener`**（推荐）。
- 事件流三阶段：**捕获** → **目标** → **冒泡**（默认在冒泡阶段处理）。
- 事件对象属性：`target`、`currentTarget`、`stopPropagation()`。
- `e.preventDefault()` 阻止默认行为（如阻止表单提交）。
- **客户端验证不可信赖**，服务器端验证是必须的。

### jQuery — Pages 36-44

- 语法：`$(selector).action()`，`$` = `jQuery`。
- 操作方法：`text()`/`html()`/`val()`/`attr()`（无参数=获取，有参数=设置）。
- DOM树操作：`append()`/`prepend()`（子节点）、`before()`/`after()`（兄弟节点）。
- 事件：`click()`、`on()`；延迟执行用`$(document).ready()`。
- 效果：`hide()`/`show()`/`fadeIn()`/`slideDown()`/`animate()`。
- **链式调用（chaining）**：每个方法返回自身，可在一条语句中连续操作。