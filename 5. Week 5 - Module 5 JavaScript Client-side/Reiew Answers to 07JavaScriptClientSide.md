现在我将为第7章《客户端JavaScript》生成全面的双语对照习题集，按照您的要求进行组织。

------

# 📚 **Chapter 07 Client-side JavaScript 习题集**

## **英文 + 中文对照 + 页码 + 详细解答**

------

## **📖 第一部分：DOM基础（Pages 2-17）**

------

### **Q1 | Pages 2-3: 什么是客户端JavaScript的独特卖点？**

**英文题目：**

> **Question:** What is the USP (Unique Selling Point) of Client-side JavaScript, and how does the DOM binding enable dynamic document interaction?
>  **Explain with code example:** Show how a script can dynamically access and modify HTML document content using the DOM.

**中文对照：**

> **问题：** 客户端JavaScript（Client-side JavaScript）的独特卖点（USP）是什么，DOM绑定如何使动态文档交互成为可能？
>  **用代码示例说明：** 展示脚本如何通过DOM动态访问和修改HTML文档内容。

**关键术语对照：**

- USP (Unique Selling Point) — 独特卖点
- DOM binding — DOM绑定
- Dynamic documents — 动态文档
- Client-side programming — 客户端编程

**解答：**

客户端JavaScript的独特卖点在于它添加了一组**对象、方法和属性**，允许脚本与HTML文档交互，实现：

- **Dynamic documents（动态文档）** — 页面可以根据用户操作实时改变
- **Client-side programming（客户端编程）** — 在浏览器端执行计算和逻辑

**代码示例：**

```javascript
// 访问HTML元素
let heading = document.getElementById("title");

// 修改内容（Content）
heading.textContent = "Updated Title";

// 修改样式（Style）
heading.style.color = "red";
heading.style.fontSize = "24px";

// 修改属性（Attributes）
heading.setAttribute("class", "highlight");
```

这种交互是通过**DOM绑定（DOM binding）**实现的——JavaScript对象与HTML元素绑定，使得修改对象属性等同于修改页面显示。

------

### **Q2 | Pages 4-5: 解释DOM树模型中的三类节点，为什么理解它们很重要？**

**英文题目：**

> **Question:** The DOM represents documents as a tree structure. Identify and explain the three types of nodes (Element Nodes, Text Nodes, Attribute Nodes) with specific HTML examples. Why is understanding text nodes important when traversing the DOM?

**中文对照：**

> **问题：** DOM将文档表示为树结构。识别并解释三种节点类型（元素节点、文本节点、属性节点），并用具体HTML示例说明。为什么理解文本节点在DOM遍历时很重要？

**关键术语对照：**

- Element Node — 元素节点
- Text Node — 文本节点
- Attribute Node — 属性节点
- Document tree — 文档树
- Node traversal — 节点遍历

**解答：**

三类节点各司其职：

| 节点类型     | 英文           | 示例                         | 用途               |
| ------------ | -------------- | ---------------------------- | ------------------ |
| **元素节点** | Element Node   | `<p>`, `<div>`, `<h1>`       | 容纳其他节点和内容 |
| **文本节点** | Text Node      | HTML标签之间的纯文本         | 存储实际文本内容   |
| **属性节点** | Attribute Node | `id="header"`, `class="box"` | 元素的属性值       |

**重要示例：**

```html
<p id="intro" class="highlight">Hello World</p>
```

对应的DOM树：

```
p (Element Node)
├── Attribute: id = "intro"
├── Attribute: class = "highlight"
└── Text Node: "Hello World"
```

**为什么文本节点很重要？**

使用 `childNodes` 时，看似简单的结构实际包含**空白文本节点**：

```javascript
// HTML
<div>
    <p>First</p>
    <p>Second</p>
</div>

// 陷阱：firstChild可能是文本节点（换行符）
let div = document.querySelector("div");
console.log(div.firstChild);        // → Text Node (换行符) ⚠️
console.log(div.firstElementChild); // → <p>First</p> ✓（正确）

// 安全做法：使用 Element 属性
console.log(div.children);           // → [<p>, <p>]
console.log(div.firstElementChild);  // → <p>First</p>
```

------

### **Q3 | Pages 8-10: 三种访问HTML元素的方法对比**

**英文题目：**

> **Question:** Compare three methods to access HTML elements: (1) by type and index, (2) by name attribute, and (3) by ID. Provide code examples for each, and explain which method is most reliable and why.

**中文对照：**

> **问题：** 比较访问HTML元素的三种方法：(1) 按类型和索引，(2) 按name属性，(3) 按ID。为每种方法提供代码示例，解释哪种方法最可靠及原因。

**关键术语对照：**

- Access by type and index — 按类型和索引访问
- Access by name attribute — 按name属性访问
- Access by ID — 按ID访问
- Reliable — 可靠的
- Reference — 引用

**解答：**

**方法1：按类型和索引（By Type and Index）**

```javascript
// 访问所有图片的第一张
let firstImage = document.images[0];

// 访问所有表单的第二个
let secondForm = document.forms[1];

// 访问所有链接
let allLinks = document.links;
```

**风险：** ⚠️ 页面结构变化时索引会失效，**脆弱（fragile）**

------

**方法2：按Name属性（By Name Attribute）**

```html
<!-- HTML -->
<input type="text" name="email">
<input type="text" name="username">
<input type="radio" name="gender" value="M">
<input type="radio" name="gender" value="F">
// 访问单个name元素
let emailField = document.email;
let usernameField = document.username;

// 同名元素自动形成数组
let genderOptions = document.gender;  // NodeList [radio M, radio F]
console.log(genderOptions[0].value);  // → "M"
console.log(genderOptions[1].value);  // → "F"
```

**优点：** 方便，适合表单；**缺点：** HTML中必须明确设置name属性

------

**方法3：按ID（By ID）— **推荐 ⭐**

```html
<!-- HTML -->
<h1 id="pageTitle">Welcome</h1>
<div id="mainContent"></div>
// 最标准、最可靠的方法
let title = document.getElementById("pageTitle");
let content = document.getElementById("mainContent");

// 现代用法（CSS选择器）
let title2 = document.querySelector("#pageTitle");
```

**优点：** ✓ ID全局唯一，最精确；✓ 标准W3C方法；✓ 结构变化不影响

------

**对比表：**

| 方法         | 代码                        | 可靠性 | 适用场景 | 陷阱           |
| ------------ | --------------------------- | ------ | -------- | -------------- |
| **By Index** | `document.images[0]`        | ⭐ 低   | 临时脚本 | 页面变化会断裂 |
| **By Name**  | `document.email`            | ⭐⭐ 中  | 表单处理 | 需手动设置name |
| **By ID**    | `document.getElementById()` | ⭐⭐⭐ 高 | 生产环境 | 需保证ID唯一   |

------

### **Q4 | Pages 11-12: 使用多种方式访问表单元素**

**英文题目：**

> **Question:** Given the HTML below, write JavaScript code to access and manipulate form elements using all three methods. Demonstrate how to get the user's email and selected country.
>
> ```html
> <form name="userForm" id="registrationForm">
>   <input type="email" name="email" id="userEmail">
>   <select name="country" id="countrySelect">
>     <option value="US">United States</option>
>     <option value="UK">United Kingdom</option>
>   </select>
> </form>
> ```

**中文对照：**

> **问题：** 给定下方HTML代码，用三种方法编写JavaScript代码访问和操作表单元素。演示如何获取用户的邮箱和选中的国家。

**关键术语对照：**

- Form elements — 表单元素
- Selected value — 选中值
- Input field — 输入字段
- Option — 选项

**解答：**

```javascript
// 方法1：按name属性访问表单元素
let emailByName = document.userForm.email;          // 或 document.userForm["email"]
let countryByName = document.userForm.country;
let emailValue1 = document.userForm.email.value;

// 方法2：按类型和索引访问
let emailByIndex = document.forms[0].elements[0];   // 第一个form的第一个element
let countryByIndex = document.forms[0].elements[1];
let emailValue2 = emailByIndex.value;

// 方法3：按ID访问（推荐）
let emailByID = document.getElementById("userEmail");
let countryByID = document.getElementById("countrySelect");
let emailValue3 = document.getElementById("userEmail").value;  // 获取输入值
let selectedCountry = document.getElementById("countrySelect").value;  // 获取选中选项的值

// 演示修改
document.getElementById("userEmail").value = "user@example.com";
document.getElementById("countrySelect").value = "UK";
```

**实际应用：验证表单并获取数据**

```javascript
function processForm() {
    let email = document.getElementById("userEmail").value;
    let country = document.getElementById("countrySelect").value;
    
    // 检查邮箱是否为空
    if (email === "") {
        alert("Email is required!");  // 邮箱是必填项
        return;
    }
    
    console.log(`User email: ${email}, Country: ${country}`);
}
```

------

### **Q5 | Page 13: 同名元素自动形成数组**

**英文题目：**

> **Question:** When multiple HTML elements share the same `name` attribute (e.g., radio buttons or checkboxes), how does the DOM automatically group them? Write code to iterate through all radio options and identify which one is checked.
>
> ```html
> <input type="radio" name="color" value="red">
> <input type="radio" name="color" value="green">
> <input type="radio" name="color" value="blue" checked>
> ```

**中文对照：**

> **问题：** 当多个HTML元素共享相同的`name`属性（如单选框或复选框）时，DOM如何自动将它们分组？编写代码遍历所有单选项，找出哪一个被选中。

**关键术语对照：**

- Radio button — 单选按钮
- Checkbox — 复选框
- Checked attribute — 选中属性
- Array-like collection — 类数组集合

**解答：**

**同名元素自动分组机制：**

```javascript
// 获取同名元素集合
let colorOptions = document.color;  // NodeList [radio, radio, radio]

// 方式1：通过索引遍历所有选项
for (let i = 0; i < colorOptions.length; i++) {
    console.log(`Option ${i}: ${colorOptions[i].value}`);
}
// 输出：
// Option 0: red
// Option 1: green
// Option 2: blue

// 方式2：找出被选中的选项
let selectedColor = null;
for (let i = 0; i < colorOptions.length; i++) {
    if (colorOptions[i].checked) {
        selectedColor = colorOptions[i].value;
        break;
    }
}
console.log(`Selected color: ${selectedColor}`);  // → "blue"

// 方式3：使用现代方法（推荐）
let selected = Array.from(document.querySelectorAll('input[name="color"]'))
    .find(radio => radio.checked);
console.log(selected ? selected.value : "None");  // → "blue"

// 方式4：改变选中的选项
document.color[0].checked = true;  // 选择第一个（红色）
```

**复选框示例（CheckBox）：**

```html
<input type="checkbox" name="interests" value="sports">
<input type="checkbox" name="interests" value="music" checked>
<input type="checkbox" name="interests" value="reading" checked>
let interests = document.interests;  // 类数组集合

// 获取所有被选中的兴趣
let selectedInterests = [];
for (let i = 0; i < interests.length; i++) {
    if (interests[i].checked) {
        selectedInterests.push(interests[i].value);
    }
}
console.log(selectedInterests);  // → ["music", "reading"]
```

------

### **Q6 | Pages 14-15: DOM树遍历与递归统计**

**英文题目：**

> **Question:** Write a recursive function to traverse the DOM tree and count the total number of elements. Explain why we need to use `childNodes` vs. `children` property, and what the difference is.
>
> ```html
> <div id="container">
>   <p>Paragraph 1</p>
>   <ul>
>     <li>Item 1</li>
>     <li>Item 2</li>
>   </ul>
> </div>
> ```

**中文对照：**

> **问题：** 编写递归函数遍历DOM树并统计元素总数。解释为什么需要使用`childNodes`与`children`属性，它们之间有什么区别。

**关键术语对照：**

- Recursive traversal — 递归遍历
- childNodes — 子节点集合（包含文本节点）
- children — 子元素集合（仅元素节点）
- Element node — 元素节点
- Text node — 文本节点

**解答：**

**两个属性的区别：**

| 属性           | 英文       | 包含内容 | 包含空白       | 用途         |
| -------------- | ---------- | -------- | -------------- | ------------ |
| **childNodes** | childNodes | 所有节点 | ✓ 包含文本节点 | 完整DOM遍历  |
| **children**   | children   | 仅元素   | ✗ 仅HTML元素   | 实际元素操作 |

**代码演示：**

```html
<div id="parent">
    <p>First</p>
    <p>Second</p>
</div>
let parent = document.getElementById("parent");

console.log(parent.childNodes.length);   // → 5 （2个<p> + 3个文本节点[换行/空格])
console.log(parent.children.length);     // → 2 （仅2个<p>元素）

// 迭代展示
parent.childNodes.forEach((node, i) => {
    console.log(`${i}: ${node.nodeType === 3 ? "TEXT" : node.tagName}`);
});
// 输出：
// 0: TEXT (换行符)
// 1: P
// 2: TEXT (换行符)
// 3: P
// 4: TEXT (换行符)
```

------

**递归函数 - 统计元素总数（Element Nodes Only）：**

```javascript
// 方法1：计数所有元素节点（推荐）
function countElements(node) {
    let count = 0;
    
    // 遍历所有子元素（仅元素节点）
    for (let child of node.children) {
        count++;                           // 计数当前元素
        count += countElements(child);     // 递归计数子元素
    }
    
    return count;
}

let totalElements = countElements(document.getElementById("container"));
console.log(`Total elements: ${totalElements}`);  // → 7 (div, 2×p, ul, 2×li)
```

**递归函数 - 包含所有节点（理论型）：**

```javascript
// 方法2：计数所有节点（包括文本节点）
function countAllNodes(node) {
    let count = 0;
    
    // 遍历所有子节点
    for (let child of node.childNodes) {
        count++;                          // 计数当前节点
        if (child.nodeType === 1) {       // nodeType 1 = 元素节点
            count += countAllNodes(child); // 递归
        }
    }
    
    return count;
}

let totalNodes = countAllNodes(document.getElementById("container"));
```

**Node Type 常量：**

```javascript
// nodeType 值
Node.ELEMENT_NODE         // 1
Node.TEXT_NODE            // 3
Node.COMMENT_NODE         // 8
Node.DOCUMENT_NODE        // 9
Node.DOCUMENT_FRAGMENT_NODE // 11
```

------

### **Q7 | Pages 16-17: DOM修改方法与document.write的陷阱**

**英文题目：**

> **Question:** Compare four DOM modification methods: `appendChild()`, `removeChild()`, `insertBefore()`, and `replaceChild()`. Then explain why `document.write()` is considered outdated and dangerous, and what modern alternatives should be used.

**中文对照：**

> **问题：** 比较四种DOM修改方法：`appendChild()`、`removeChild()`、`insertBefore()`和`replaceChild()`。然后解释为什么`document.write()`被认为已过时且危险，应该用什么现代替代方案。

**关键术语对照：**

- appendChild() — 添加子元素
- removeChild() — 移除子元素
- insertBefore() — 在...之前插入
- replaceChild() — 替换子元素
- document.write() — 文档写入
- innerHTML — 内部HTML
- textContent — 文本内容
- Overwrite — 覆盖

**解答：**

**DOM修改四大方法对比表：**

| 方法               | 英文           | 功能               | 代码示例                          |
| ------------------ | -------------- | ------------------ | --------------------------------- |
| **appendChild()**  | appendChild()  | 在末尾添加子元素   | `parent.appendChild(newEl)`       |
| **removeChild()**  | removeChild()  | 移除指定子元素     | `parent.removeChild(child)`       |
| **insertBefore()** | insertBefore() | 在指定子元素前插入 | `parent.insertBefore(newEl, ref)` |
| **replaceChild()** | replaceChild() | 替换指定子元素     | `parent.replaceChild(newEl, old)` |

------

**代码示例：**

```html
<ul id="list">
    <li id="item1">Apple</li>
    <li id="item2">Banana</li>
    <li id="item3">Cherry</li>
</ul>
let list = document.getElementById("list");

// 1. appendChild() - 添加到末尾
let newItem = document.createElement("li");
newItem.textContent = "Date";
list.appendChild(newItem);  // 结果: Apple, Banana, Cherry, Date

// 2. removeChild() - 移除指定元素
let itemToRemove = document.getElementById("item2");
list.removeChild(itemToRemove);  // 结果: Apple, Cherry, Date

// 3. insertBefore() - 在指定元素前插入
let beforeItem = document.getElementById("item1");
let newItemBefore = document.createElement("li");
newItemBefore.textContent = "Avocado";
list.insertBefore(newItemBefore, beforeItem);  // 结果: Avocado, Apple, Cherry, Date

// 4. replaceChild() - 替换元素
let oldElement = document.getElementById("item3");
let replacement = document.createElement("li");
replacement.textContent = "Elderberry";
list.replaceChild(replacement, oldElement);  // 结果: Avocado, Apple, Elderberry, Date
```

------

**为什么document.write()很危险？**

```javascript
// ⚠️ document.write() 的问题：

// 问题1：在页面加载后调用会覆盖整个文档
document.write("<p>Hello</p>");  // 页面加载中可以，加载完后会擦除所有内容！

// 代码示例：
window.onload = function() {
    document.write("New content");  
    // ❌ 危险：整个页面被替换为"New content"
};

// 问题2：阻塞DOM渲染
// document.write() 会暂停HTML解析

// 问题3：无法定位插入位置
// 无法指定插入到哪个元素内部
```

------

**现代替代方案（Modern Alternatives）：**

| 旧方法                                     | 现代方法                             | 优势       |
| ------------------------------------------ | ------------------------------------ | ---------- |
| `document.write("<p>Text</p>")`            | `element.innerHTML += "<p>Text</p>"` | 可指定位置 |
| `document.write("text")`                   | `element.textContent = "text"`       | 安全、简洁 |
| `document.write("<el>")` + `appendChild()` | `createElement()` + `appendChild()`  | 灵活可控   |

```javascript
// ✓ 现代做法1：使用innerHTML
let container = document.getElementById("container");
container.innerHTML = "<p>New content</p>";  // 安全且可控

// ✓ 现代做法2：使用textContent
let element = document.getElementById("element");
element.textContent = "Plain text";  // 防止XSS攻击

// ✓ 现代做法3：使用createElement + appendChild
let newDiv = document.createElement("div");
newDiv.textContent = "Content";
document.body.appendChild(newDiv);  // 灵活且高效

// ✓ 现代做法4：使用insertAdjacentHTML（最灵活）
element.insertAdjacentHTML("beforeend", "<p>Added</p>");
```

**当使用innerHTML时的安全注意：**

```javascript
// ⚠️ 小心XSS攻击
let userInput = '<img src=x onerror="alert(\'hacked\')">';
element.innerHTML = userInput;  // ❌ 危险，会执行脚本

// ✓ 安全做法：使用textContent处理用户输入
element.textContent = userInput;  // ✓ 安全，渲染为纯文本
```

------

## **📖 第二部分：BOM基础（Pages 18-24）**

------

### **Q8 | Pages 6-7: DOM vs BOM 区分**

**英文题目：**

> **Question:** Distinguish between the DOM (Document Object Model) and BOM (Browser Object Model). Create a table comparing their scope, standardization, root objects, and provide code examples for each.

**中文对照：**

> **问题：** 区分DOM（文档对象模型）和BOM（浏览器对象模型）。创建一个表格比较它们的范围、标准化程度、根对象，并为每个提供代码示例。

**关键术语对照：**

- Document Object Model (DOM) — 文档对象模型
- Browser Object Model (BOM) — 浏览器对象模型
- Standardized — 标准化的
- Execution environment — 执行环境
- Root object — 根对象

**解答：**

**DOM vs BOM 详细对比：**

| 特性             | DOM                           | BOM                    |
| ---------------- | ----------------------------- | ---------------------- |
| **关注对象**     | HTML文档内容                  | 浏览器执行环境         |
| **标准化**       | W3C国际标准 ✓                 | 无统一标准 ⚠️           |
| **根对象**       | `document`                    | `window`               |
| **主要任务**     | 访问/修改页面内容、结构、样式 | 浏览器信息、导航、存储 |
| **浏览器兼容性** | 一致                          | 各浏览器略有差异       |
| **关系**         | BOM的一部分                   | DOM的容器              |

------

**代码示例对比：**

```javascript
// ========== DOM 示例 ==========
// 访问和修改文档内容
let heading = document.getElementById("title");
heading.textContent = "New Title";

// 操作HTML结构
let newPara = document.createElement("p");
newPara.textContent = "New paragraph";
document.body.appendChild(newPara);

// 修改样式
heading.style.color = "blue";
heading.style.fontSize = "24px";

// ========== BOM 示例 ==========
// 获取浏览器信息
console.log(window.navigator.userAgent);   // 浏览器信息
console.log(window.location.href);         // 当前URL

// 导航操作
window.history.back();                     // 后退
window.location = "https://example.com";   // 跳转页面

// 弹窗（BOM特有）
window.alert("Hello");   // 警告框
let result = window.confirm("Continue?");  // 确认框
let input = window.prompt("Enter name:");   // 输入框

// 定时器（BOM特有）
window.setTimeout(() => {
    console.log("Delayed execution");
}, 2000);
```

------

### **Q9 | Page 7: BOM树结构与常用属性**

**英文题目：**

> **Question:** The BOM tree has `window` as its root node. Describe the main branches of the BOM tree, including `document`, `navigator`, `history`, and `location`. Explain what each object does and provide usage examples.

**中文对照：**

> **问题：** BOM树以`window`为根节点。描述BOM树的主要分支，包括`document`、`navigator`、`history`和`location`。解释每个对象的用途，并提供使用示例。

**关键术语对照：**

- BOM tree — BOM树
- Root node — 根节点
- Navigator object — 导航器对象
- History object — 历史对象
- Location object — 位置对象
- User agent — 用户代理

**解答：**

**BOM树完整结构：**

```
window (根节点 / Root)
├── self, window, parent, top     (窗口引用)
├── document                       (DOM - 文档)
│   ├── all[], forms[], images[]
│   ├── links[], anchors[]
│   └── ...
├── navigator                      (浏览器信息)
│   ├── userAgent
│   ├── appName
│   ├── platform
│   └── plugins[]
├── location                       (URL相关)
│   ├── href
│   ├── protocol
│   ├── host
│   └── pathname
├── history                        (浏览历史)
│   ├── back()
│   ├── forward()
│   └── go()
└── frames[]                       (子框架)
```

------

**各对象详细用法：**

**1. navigator 对象（浏览器信息）**

```javascript
// 获取浏览器信息
console.log(window.navigator.userAgent);
// 输出: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36..."

console.log(navigator.appName);      // → "Netscape"
console.log(navigator.platform);     // → "Win32" 或 "Linux x86_64"
console.log(navigator.language);     // → "en-US"
console.log(navigator.onLine);       // → true/false （是否在线）

// 检测浏览器类型
let isChrome = /Chrome/.test(navigator.userAgent);
let isFirefox = /Firefox/.test(navigator.userAgent);
let isSafari = /Safari/.test(navigator.userAgent);

// 实际应用：禁用不支持的浏览器
if (!navigator.onLine) {
    alert("You are offline. Some features may not work.");
}
```

------

**2. history 对象（浏览历史）**

```javascript
// 返回上一页（Back Button）
window.history.back();           // 等同于点击浏览器"后退"按钮
// 或
history.go(-1);                  // 参数-1表示后退一页

// 前进一页（Forward Button）
history.forward();               // 等同于点击浏览器"前进"按钮
// 或
history.go(1);                   // 参数1表示前进一页

// 返回指定页面
history.go(-2);                  // 后退两页
history.go(0);                   // 刷新当前页

// 获取历史记录长度
console.log(history.length);     // → 历史记录页数

// 实际应用：实现"返回"按钮
document.getElementById("backBtn").onclick = function() {
    if (history.length > 1) {
        history.back();
```





继续生成第二部分的习题集...

------

**2. history 对象（浏览历史）**

```javascript
// 返回上一页（Back Button）
window.history.back();           // 等同于点击浏览器"后退"按钮
// 或
history.go(-1);                  // 参数-1表示后退一页

// 前进一页（Forward Button）
history.forward();               // 等同于点击浏览器"前进"按钮
// 或
history.go(1);                   // 参数1表示前进一页

// 返回指定页面
history.go(-2);                  // 后退两页
history.go(0);                   // 刷新当前页

// 获取历史记录长度
console.log(history.length);     // → 历史记录页数

// 实际应用：实现"返回"按钮
document.getElementById("backBtn").onclick = function() {
    if (history.length > 1) {
        history.back();
    } else {
        alert("No previous page");
    }
};
```

------

**3. location 对象（URL与页面导航）**

```javascript
// 获取当前URL的各部分
let currentURL = location.href;
// 例如: "https://example.com:8080/path/page.html?id=123#section"

// location 对象的各属性
console.log(location.href);       // → 完整URL
console.log(location.protocol);   // → "https:"
console.log(location.host);       // → "example.com:8080"（包括端口）
console.log(location.hostname);   // → "example.com"（不包括端口）
console.log(location.port);       // → "8080"
console.log(location.pathname);   // → "/path/page.html"
console.log(location.search);     // → "?id=123" （查询字符串）
console.log(location.hash);       // → "#section" （锚点）

// 导航到新页面
location.href = "https://google.com";  // 跳转（添加到历史记录）
location.replace("https://google.com"); // 跳转（不添加到历史记录）
location.reload();                      // 刷新当前页
location.reload(true);                  // 强制刷新（不使用缓存）

// 实际应用：提取查询参数
function getQueryParam(param) {
    let query = location.search.substring(1);  // 移除"?"
    let params = query.split("&");
    for (let p of params) {
        let [key, value] = p.split("=");
        if (key === param) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

let userId = getQueryParam("id");  // 从 ?id=123 获取值
console.log(userId);               // → "123"
```

------

### **Q10 | Pages 25-26: 浏览器事件模型基础**

**英文题目：**

> **Question:** Explain the event-driven programming model in JavaScript. What is an "event (事件)"? Describe three ways to register event handlers and discuss which method is recommended for modern web development. Provide code examples for each.

**中文对照：**

> **问题：** 解释JavaScript中的事件驱动编程模型。什么是"事件（event）"？描述注册事件处理器的三种方式，讨论哪种方法推荐用于现代Web开发。为每种方法提供代码示例。

**关键术语对照：**

- Event-driven programming — 事件驱动编程
- Event handler — 事件处理器
- Event listener — 事件监听器
- HTML attribute — HTML属性方式
- Object property — 对象属性方式
- addEventListener() — 添加事件监听器方法
- Semantic — 语义化的

**解答：**

**事件（Event）是什么？**

事件是用户或浏览器在网页上执行的动作，例如：

- **用户操作：** 点击、双击、鼠标悬停、键盘输入、表单提交
- **浏览器行为：** 页面加载完成、资源加载、窗口调整大小
- **系统消息：** 网络变化、焦点变化等

当事件发生时，浏览器会自动调用与该事件关联的**事件处理器（Event Handler）**——一段JavaScript代码。

------

**注册事件处理器的三种方式：**

**方式1：HTML属性方式（Inline，不推荐 ⚠️）**

```html
<button onclick="handleClick()">Click Me</button>
<button ondblclick="alert('Double clicked!')">Double Click</button>
<input onchange="processInput(this.value)">
function handleClick() {
    console.log("Button was clicked");
    alert("Hello!");
}

function processInput(value) {
    console.log("Input value: " + value);
}
```

**缺点：**

- ❌ HTML和JavaScript混合，不符合分离原则（Separation of Concerns）
- ❌ 难以维护和扩展
- ❌ 事件处理器名称暴露在HTML中
- ❌ 无法添加多个处理器到同一事件

------

**方式2：对象属性方式（DOM属性，可接受）**

```javascript
// 获取元素
let btn = document.getElementById("myButton");

// 分配事件处理器
btn.onclick = function() {
    console.log("Button clicked via property");
};

// 修改处理器
btn.onclick = function() {
    console.log("This replaces the previous handler");
};

// 移除处理器
btn.onclick = null;

// 常见事件类型
let input = document.getElementById("textInput");
input.onchange = function() {
    console.log("Input changed: " + this.value);
};

input.onblur = function() {
    console.log("Input lost focus");
};

input.onfocus = function() {
    console.log("Input gained focus");
};
```

**缺点：**

- ⚠️ 一个元素只能分配一个处理器（后赋值会覆盖前面的）
- ⚠️ 事件对象传递不方便
- ⚠️ 捕获阶段不支持

**优点：**

- ✓ 简洁清晰
- ✓ 与HTML分离（分离原则）

------

**方式3：addEventListener() 方式（推荐 ⭐）**

```javascript
// 获取元素
let btn = document.getElementById("myButton");

// 添加事件监听器
btn.addEventListener("click", function(event) {
    console.log("Button clicked via addEventListener");
    console.log("Event object:", event);
});

// 可以添加多个处理器到同一事件
btn.addEventListener("click", function(event) {
    console.log("Second handler for the same event");
});

btn.addEventListener("click", function(event) {
    console.log("Third handler");
});
// 点击按钮时，三个处理器都会执行

// 支持捕获阶段
btn.addEventListener("click", handleClick, true);  // 捕获阶段
btn.addEventListener("click", handleClick, false); // 冒泡阶段（默认）

function handleClick(event) {
    console.log("Handling click at:", event.phase === 1 ? "Capture" : "Bubble");
}

// 移除特定监听器
btn.removeEventListener("click", handleClick);
```

**优点：**

- ✓ 可添加多个处理器
- ✓ 支持事件捕获（Capture Phase）
- ✓ 现代标准，W3C推荐
- ✓ 提供完整的事件对象
- ✓ 可精确控制移除

------

**三种方式对比表：**

| 方式                 | 方法         | 代码示例                          | 多处理器 | 捕获支持 | 推荐度 |
| -------------------- | ------------ | --------------------------------- | -------- | -------- | ------ |
| **HTML属性**         | Inline       | `onclick="func()"`                | ❌        | ❌        | ⭐ 低   |
| **对象属性**         | DOM Property | `btn.onclick = func`              | ❌        | ❌        | ⭐⭐ 中  |
| **addEventListener** | 标准方法     | `addEventListener("click", func)` | ✓        | ✓        | ⭐⭐⭐ 高 |

------

### **Q11 | Pages 27-28: 事件流（Event Flow）与事件阶段**

**英文题目：**

> **Question:** Explain the three phases of event flow: Capturing Phase (捕获阶段), Target Phase (目标阶段), and Bubbling Phase (冒泡阶段). With HTML structure below, demonstrate how events propagate through nested elements and how to control propagation using `stopPropagation()`.
>
> ```html
> <div id="outer" style="border:2px solid blue; padding:20px">
>   Outer Div
>   <div id="middle" style="border:2px solid green; padding:20px">
>     Middle Div
>     <button id="btn">Click Me</button>
>   </div>
> </div>
> ```

**中文对照：**

> **问题：** 解释事件流的三个阶段：捕获阶段（Capturing Phase）、目标阶段（Target Phase）和冒泡阶段（Bubbling Phase）。使用下方HTML结构，演示事件如何在嵌套元素间传播，以及如何使用`stopPropagation()`控制传播。

**关键术语对照：**

- Event flow — 事件流
- Capturing phase — 捕获阶段
- Target phase — 目标阶段
- Bubbling phase — 冒泡阶段
- Event propagation — 事件传播
- stopPropagation() — 停止传播
- preventDefault() — 阻止默认行为

**解答：**

**事件流三阶段详解：**

```
第1阶段：捕获阶段（Capturing Phase）
↓ 从window到目标元素
window → document → html → body → outer → middle → btn

第2阶段：目标阶段（Target Phase）
事件到达目标元素本身

第3阶段：冒泡阶段（Bubbling Phase）
↑ 从目标元素返回到window
btn → middle → outer → body → html → document → window
```

------

**代码演示：事件传播**

```javascript
let outer = document.getElementById("outer");
let middle = document.getElementById("middle");
let btn = document.getElementById("btn");

// 为所有元素注册事件处理器（默认冒泡阶段，第三个参数=false）
outer.addEventListener("click", function(event) {
    console.log("Outer clicked (Bubble phase)");
}, false);

middle.addEventListener("click", function(event) {
    console.log("Middle clicked (Bubble phase)");
}, false);

btn.addEventListener("click", function(event) {
    console.log("Button clicked (Target phase)");
}, false);

// 添加捕获阶段的处理器（第三个参数=true）
outer.addEventListener("click", function(event) {
    console.log("Outer clicked (Capture phase)");
}, true);

middle.addEventListener("click", function(event) {
    console.log("Middle clicked (Capture phase)");
}, true);

btn.addEventListener("click", function(event) {
    console.log("Button clicked (Capture phase)");
}, true);
```

**点击按钮时的输出顺序：**

```
1. Outer clicked (Capture phase)      ← 捕获：从外到内
2. Middle clicked (Capture phase)
3. Button clicked (Capture phase)
4. Button clicked (Target phase)      ← 目标阶段
5. Middle clicked (Bubble phase)      ← 冒泡：从内到外
6. Outer clicked (Bubble phase)
```

------

**事件对象（Event Object）的关键属性：**

```javascript
btn.addEventListener("click", function(event) {
    // 事件类型
    console.log(event.type);              // → "click"
    
    // 事件目标（接收事件的元素）
    console.log(event.target);            // → <button id="btn">
    console.log(event.currentTarget);     // → 正在处理事件的元素
    
    // 事件阶段
    console.log(event.eventPhase);
    // 1 = CAPTURING_PHASE, 2 = AT_TARGET, 3 = BUBBLING_PHASE
    
    // 时间戳
    console.log(event.timeStamp);         // → 毫秒数
    
    // 鼠标坐标
    console.log(event.clientX, event.clientY);     // 相对于窗口
    console.log(event.pageX, event.pageY);         // 相对于文档
    console.log(event.screenX, event.screenY);     // 相对于屏幕
});
```

------

**使用stopPropagation()阻止传播：**

```javascript
middle.addEventListener("click", function(event) {
    console.log("Middle clicked");
    event.stopPropagation();  // ⛔ 停止冒泡，不会触发outer的处理器
}, false);

outer.addEventListener("click", function(event) {
    console.log("Outer clicked");  // ❌ 这不会执行
}, false);

// 点击按钮的输出：
// Button clicked (Target phase)
// Middle clicked (Bubble phase)
// Outer clicked (Bubble phase)  ← 被阻止了
```

------

**使用preventDefault()阻止默认行为：**

```html
<a id="link" href="https://google.com">Go to Google</a>
<form id="myForm">
    <input type="checkbox" id="terms">
    <label>I agree to terms</label>
    <button type="submit">Submit</button>
</form>
// 阻止链接跳转
let link = document.getElementById("link");
link.addEventListener("click", function(event) {
    event.preventDefault();  // 阻止默认的页面跳转
    console.log("Link clicked, but navigation prevented");
    // 可以在此执行自定义逻辑，如验证或分析
});

// 阻止表单提交
let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    let terms = document.getElementById("terms");
    if (!terms.checked) {
        event.preventDefault();  // 阻止表单提交
        alert("You must agree to the terms");
    }
});
```

------

### **Q12 | Pages 29-30: 事件委托（Event Delegation）**

**英文题目：**

> **Question:** Explain the concept of "Event Delegation (事件委托)". Given a dynamic list where items can be added/removed, demonstrate how event delegation is more efficient than attaching handlers to individual items. When would you use event delegation vs. direct event handlers?

**中文对照：**

> **问题：** 解释"事件委托（Event Delegation）"的概念。给定一个可以动态添加/删除项目的列表，演示事件委托相比为每个项目附加处理器的效率优势。何时使用事件委托，何时使用直接事件处理器？

**关键术语对照：**

- Event delegation — 事件委托
- Event target — 事件目标
- Matches method — 匹配方法
- Selector — 选择器
- Efficiency — 效率
- Performance — 性能

**解答：**

**事件委托的核心概念：**

不是为每个子元素附加事件处理器，而是为**父元素**附加一个处理器，利用事件冒泡机制捕获所有子元素的事件。

**好处：**

- ✓ 减少内存占用（1个处理器 vs 多个处理器）
- ✓ 自动支持动态添加的元素（无需重新绑定）
- ✓ 性能更高
- ✓ 代码更简洁

------

**代码对比：直接方式 vs 事件委托**

**❌ 低效做法：直接为每个项附加处理器**

```html
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<button id="addBtn">Add Item</button>
// ❌ 方式1：直接附加处理器（低效）
function attachHandlers() {
    let items = document.querySelectorAll("li");
    items.forEach(item => {
        item.addEventListener("click", handleItemClick);
    });
}

function handleItemClick(event) {
    console.log("Clicked: " + this.textContent);
}

// 初始化
attachHandlers();

// 添加新项时必须重新绑定
document.getElementById("addBtn").addEventListener("click", function() {
    let list = document.getElementById("list");
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
    
    // ⚠️ 必须重新附加处理器
    attachHandlers();  // 低效：遍历所有项重新绑定
});
```

**问题：**

- 每次添加项都要遍历所有项并重新绑定
- 性能随列表增长而下降
- 容易出错

------

**✓ 高效做法：事件委托**

```javascript
// ✓ 方式2：事件委托（高效）
let list = document.getElementById("list");

// 只为列表附加一个处理器
list.addEventListener("click", function(event) {
    // 检查点击的是否是 <li> 元素
    if (event.target.tagName === "LI") {
        console.log("Clicked: " + event.target.textContent);
        event.target.style.backgroundColor = "yellow";
    }
});

// 添加新项时无需重新绑定
document.getElementById("addBtn").addEventListener("click", function() {
    let list = document.getElementById("list");
    let newItem = document.createElement("li");
    newItem.textContent = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);
    
    // ✓ 无需重新绑定！新项自动应用处理器
});
```

------

**使用matches()进行精确选择器匹配：**

```html
<ul id="list">
    <li class="item">Item 1 <span class="delete">✕</span></li>
    <li class="item">Item 2 <span class="delete">✕</span></li>
    <li class="item">Item 3 <span class="delete">✕</span></li>
</ul>
let list = document.getElementById("list");

list.addEventListener("click", function(event) {
    // 检查点击的元素是否匹配选择器
    if (event.target.matches(".delete")) {
        // 找到最近的 <li> 父元素
        let item = event.target.closest("li");
        console.log("Deleting: " + item.textContent);
        item.remove();  // 删除项
    }
    
    if (event.target.matches("li.item")) {
        console.log("Selected: " + event.target.textContent);
        event.target.style.backgroundColor = "lightblue";
    }
});
```

**重要方法：**

- `event.target.matches(selector)` — 检查元素是否匹配CSS选择器
- `event.target.closest(selector)` — 找到最近的符合选择器的祖先元素

------

**事件委托 vs 直接处理器对比表：**

| 特性           | 直接处理器         | 事件委托           |
| -------------- | ------------------ | ------------------ |
| **内存占用**   | 随项数增长         | 恒定（1个）        |
| **初始化**     | 复杂，需遍历所有项 | 简单，只绑定父元素 |
| **动态元素**   | 需重新绑定         | 自动支持           |
| **性能**       | 低（项数多时）     | 高                 |
| **代码复杂度** | 简单但重复         | 稍复杂但高效       |
| **使用场景**   | 少量静态元素       | 大量或动态元素     |

------

### **Q13 | Pages 31-32: 常见事件类型**

**英文题目：**

> **Question:** Categorize and explain the following event types: (1) Mouse Events (鼠标事件), (2) Keyboard Events (键盘事件), (3) Form Events (表单事件), (4) Window Events (窗口事件). Provide practical code examples for each category.

**中文对照：**

> **问题：** 分类并解释以下事件类型：(1) 鼠标事件（Mouse Events），(2) 键盘事件（Keyboard Events），(3) 表单事件（Form Events），(4) 窗口事件（Window Events）。为每个类别提供实际代码示例。

**关键术语对照：**

- Mouse events — 鼠标事件
- Keyboard events — 键盘事件
- Form events — 表单事件
- Window events — 窗口事件
- Modifier keys — 修饰键（Ctrl, Shift, Alt）
- Key code — 按键代码

**解答：**

**常见事件类型分类表：**

| 类别         | 事件名     | 触发时机                      |
| ------------ | ---------- | ----------------------------- |
| **鼠标事件** | click      | 单击                          |
|              | dblclick   | 双击                          |
|              | mousedown  | 鼠标按下                      |
|              | mouseup    | 鼠标抬起                      |
|              | mouseover  | 鼠标进入（包括子元素）        |
|              | mouseout   | 鼠标离开                      |
|              | mouseenter | 鼠标进入（不冒泡）            |
|              | mouseleave | 鼠标离开（不冒泡）            |
|              | mousemove  | 鼠标移动                      |
| **键盘事件** | keydown    | 按键按下                      |
|              | keyup      | 按键抬起                      |
|              | keypress   | 按键按下（已废弃，用keydown） |
| **表单事件** | focus      | 获得焦点                      |
|              | blur       | 失去焦点                      |
|              | change     | 值改变（失焦后）              |
|              | input      | 值改变（实时）                |
|              | submit     | 表单提交                      |
|              | reset      | 表单重置                      |
| **窗口事件** | load       | 页面加载完成                  |
|              | unload     | 页面卸载                      |
|              | resize     | 窗口大小改变                  |
|              | scroll     | 滚动                          |

------

**1. 鼠标事件（Mouse Events）代码示例：**

```html
<button id="btn">Hover & Click Me</button>
<div id="info"></div>
let btn = document.getElementById("btn");
let info = document.getElementById("info");

// click — 单击
btn.addEventListener("click", function(event) {
    console.log("Clicked at: " + event.clientX + "," + event.clientY);
    info.textContent = "Button was clicked";
});

// dblclick — 双击
btn.addEventListener("dblclick", function(event) {
    console.log("Double clicked!");
    alert("Double click detected!");
});

// mousedown & mouseup
btn.addEventListener("mousedown", function(event) {
    console.log("Mouse button pressed");
    btn.style.backgroundColor = "gray";
});

btn.addEventListener("mouseup", function(event) {
    console.log("Mouse button released");
    btn.style.backgroundColor = "";
});

// mouseover & mouseout（包括子元素）
btn.addEventListener("mouseover", function(event) {
    console.log("Mouse over button");
    btn.style.backgroundColor = "lightblue";
});

btn.addEventListener("mouseout", function(event) {
    console.log("Mouse left button");
    btn.style.backgroundColor = "";
});

// mouseenter & mouseleave（不冒泡，更高效）
btn.addEventListener("mouseenter", function(event) {
    info.textContent = "Mouse entered";
});

btn.addEventListener("mouseleave", function(event) {
    info.textContent = "Mouse left";
});

// mousemove — 鼠标移动（高频事件）
document.addEventListener("mousemove", function(event) {
    // console.log("Mouse at: " + event.clientX + "," + event.clientY);
    // ⚠️ 注意：mousemove触发频率很高，避免在处理器中执行复杂操作
});
```

------

**2. 键盘事件（Keyboard Events）代码示例：**

```html
<input id="textInput" type="text" placeholder="Type here">
<div id="keyInfo"></div>
let input = document.getElementById("textInput");
let keyInfo = document.getElementById("keyInfo");

// keydown — 按键按下（任何按键）
input.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);
    
    // 检查修饰键
    if (event.ctrlKey) console.log("Ctrl pressed");
    if (event.shiftKey) console.log("Shift pressed");
    if (event.altKey) console.log("Alt pressed");
    
    // 阻止某些按键（如禁用空格）
    if (event.key === " ") {
        event.preventDefault();
        console.log("Space key is disabled");
    }
    
    keyInfo.textContent = `Pressed: ${event.key} (code: ${event.code})`;
});

// keyup — 按键抬起
input.addEventListener("keyup", function(event) {
    console.log("Key released: " + event.key);
});

// 快捷键示例（Ctrl+S 保存）
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();  // 阻止浏览器默认保存行为
        console.log("Custom save function triggered");
    }
});

// 实际应用：实时输入验证
input.addEventListener("input", function(event) {
    let value = this.value;
    if (value.length > 10) {
        this.style.borderColor = "red";
        keyInfo.textContent = "Input too long";
    } else {
        this.style.borderColor = "green";
        keyInfo.textContent = "Valid input";
    }
});
```

**常见按键值（event.key）：**

- 字母/数字：`"a"`, `"1"`, 等
- 特殊键：`"Enter"`, `"Tab"`, `"Escape"`, `"Backspace"`, `"Delete"`, `"Space"`
- 方向键：`"ArrowUp"`, `"ArrowDown"`, `"ArrowLeft"`, `"ArrowRight"`
- 修饰键：`"Control"`, `"Shift"`, `"Alt"`, `"Meta"`

------

**3. 表单事件（Form Events）代码示例：**

```html
<form id="myForm">
    <input id="email" type="email" placeholder="Email" required>
    <input id="password" type="password" placeholder="Password" required>
    <input id="remember" type="checkbox"> Remember me
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
</form>
<div id="feedback"></div>
let form = document.getElementById("myForm");
let emailInput = document.getElementById("email");
let feedback = document.getElementById("feedback");

// focus — 获得焦点
emailInput.addEventListener("focus", function(event) {
    console.log("Email field focused");
    this.style.borderColor = "blue";
    feedback.textContent = "Enter your email address";
});

// blur — 失去焦点
emailInput.addEventListener("blur", function(event) {
    console.log("Email field blurred");
    // 验证邮箱格式
    let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
    if (!isValid && this.value !== "") {
        this.style.borderColor = "red";
        feedback.textContent = "Invalid email format";
    } else {
        this.style.borderColor = "green";
        feedback.textContent = "Email valid";
    }
});

// change — 值改变（仅在失焦后触发）
document.getElementById("remember").addEventListener("change", function(event) {
    console.log("Checkbox changed: " + this.checked);
});

// input — 值改变（实时触发）
emailInput.addEventListener("input", function(event) {
    console.log("Current value: " + this.value);
    // 实时验证或搜索
});

// submit — 表单提交
form.addEventListener("submit", function(event) {
    event.preventDefault();  // 阻止默认提交行为
    
    // 服务器端验证前的客户端验证
    let email = emailInput.value;
    let password = document.getElementById("password").value;
    
    if (email === "" || password === "") {
        feedback.textContent = "All fields are required";
        return;
    }
    
    console.log("Form submitted with email: " + email);
    // 发送表单数据到服务器
});

// reset — 表单重置
form.addEventListener("
```

继续生成习题集...

------

**reset — 表单重置**

```javascript
form.addEventListener("reset", function(event) {
    console.log("Form was reset");
    feedback.textContent = "Form has been cleared";
});
```

------

**4. 窗口事件（Window Events）代码示例：**

```javascript
// load — 页面加载完成
window.addEventListener("load", function(event) {
    console.log("Page fully loaded");
    console.log("All images, stylesheets, and scripts loaded");
    // 初始化页面
    initializePage();
});

// 或使用window.onload（旧方式）
// window.onload = function() { ... };

// unload — 页面卸载（用户离开页面）
window.addEventListener("unload", function(event) {
    console.log("Page is unloading");
    // 保存数据到localStorage
    localStorage.setItem("lastVisit", new Date().toISOString());
});

// beforeunload — 页面即将卸载（可显示确认对话框）
window.addEventListener("beforeunload", function(event) {
    if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Are you sure?";
        return "You have unsaved changes. Are you sure?";
    }
});

// resize — 窗口大小改变
window.addEventListener("resize", function(event) {
    console.log("Window resized to: " + window.innerWidth + "x" + window.innerHeight);
    // 响应式布局调整
    adjustLayout();
});

// scroll — 页面滚动
window.addEventListener("scroll", function(event) {
    // console.log("Scroll position: " + window.scrollY);
    // ⚠️ scroll 事件触发频率很高，谨慎使用
    
    // 实际应用：显示"回到顶部"按钮
    let scrollTopBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

function initializePage() {
    console.log("Page initialization complete");
}

function adjustLayout() {
    if (window.innerWidth < 768) {
        console.log("Mobile layout");
    } else {
        console.log("Desktop layout");
    }
}
```

------

## **📖 第三部分：客户端存储（Pages 33-36）**

------

### **Q14 | Pages 33-34: Cookie 的使用与限制**

**英文题目：**

> **Question:** Explain what a Cookie (cookie) is, its characteristics, and limitations. Demonstrate how to create, read, update, and delete cookies using JavaScript. What is the difference between session cookies and persistent cookies?

**中文对照：**

> **问题：** 解释什么是Cookie（cookie），它的特性和限制。演示如何使用JavaScript创建、读取、更新和删除Cookie。会话Cookie和持久Cookie有什么区别？

**关键术语对照：**

- Cookie — 客户端存储文件
- Session cookie — 会话Cookie
- Persistent cookie — 持久Cookie
- Expiration date — 过期日期
- Domain — 域名
- Path — 路径
- Secure — 安全（仅HTTPS）
- HttpOnly — HTTP only（JS无法访问）
- Maximum size — 最大大小

**解答：**

**Cookie 基本概念：**

Cookie是存储在**客户端（浏览器）**的小文本文件，用于保存用户信息。每次HTTP请求时，浏览器会自动将该域名的所有Cookie发送到服务器。

**Cookie 的特性：**

| 特性         | 说明                       |
| ------------ | -------------------------- |
| **最大大小** | 4KB（很小）                |
| **存储位置** | 客户端浏览器               |
| **传输**     | 每次HTTP请求自动发送       |
| **作用域**   | 域名和路径限制             |
| **过期机制** | 需手动设置过期时间         |
| **安全性**   | 纯文本，用户可见且可修改 ⚠️ |

------

**Cookie 类型对比：**

| 类型           | 过期时间           | 生命周期         | 使用场景             |
| -------------- | ------------------ | ---------------- | -------------------- |
| **会话Cookie** | 未设置（当前会话） | 浏览器关闭时删除 | 临时数据             |
| **持久Cookie** | 设置具体日期       | 到指定日期才删除 | 长期数据（记住登录） |

------

**创建/读取/更新/删除 Cookie 的操作：**

**1. 创建 Cookie（Create）：**

```javascript
// 方法1：基础用法
document.cookie = "username=john";

// 方法2：设置过期时间（持久Cookie）
// 创建一个7天后过期的Cookie
let expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 7);  // 7天后
document.cookie = "username=john; expires=" + expirationDate.toUTCString();

// 方法3：使用max-age（秒数）
document.cookie = "username=john; max-age=" + (7 * 24 * 60 * 60);  // 7天

// 方法4：完整参数设置
document.cookie = "username=john; " +
    "expires=" + expirationDate.toUTCString() + "; " +
    "path=/; " +                           // 整个网站可访问
    "domain=example.com; " +               // 域名
    "secure; " +                           // 仅HTTPS
    "samesite=strict";                     // CSRF防护

// 实际应用：记住用户名（30天）
function rememberUsername(username) {
    let expiration = new Date();
    expiration.setDate(expiration.getDate() + 30);
    document.cookie = "savedUsername=" + encodeURIComponent(username) +
        "; expires=" + expiration.toUTCString() +
        "; path=/";
}

rememberUsername("john_doe");
```

------

**2. 读取 Cookie（Read）：**

```javascript
// 所有Cookie都在 document.cookie 中（以分号分隔）
console.log(document.cookie);
// 输出: "username=john; savedUsername=john_doe; sessionId=abc123"

// 创建辅助函数读取指定Cookie
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

// 使用
let username = getCookie("username");
console.log(username);  // → "john"

let savedUsername = getCookie("savedUsername");
console.log(savedUsername);  // → "john_doe"
```

------

**3. 更新 Cookie（Update）：**

```javascript
// 使用相同的name重新赋值即可覆盖
document.cookie = "username=jane";  // 覆盖原有值

// 更新过期时间
let newExpiration = new Date();
newExpiration.setDate(newExpiration.getDate() + 14);  // 14天
document.cookie = "username=jane; expires=" + newExpiration.toUTCString();
```

------

**4. 删除 Cookie（Delete）：**

```javascript
// 方法：将过期时间设置为过去
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// 或使用max-age=0
document.cookie = "username=; max-age=0; path=/;";

// 创建辅助函数删除Cookie
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// 使用
deleteCookie("username");
deleteCookie("savedUsername");
```

------

**Cookie 参数详解：**

```javascript
document.cookie = "key=value; " +
    "expires=Wed, 09 Jun 2025 10:18:14 GMT; " +    // 过期日期（GMT）
    "max-age=604800; " +                            // 或生存秒数（优先级更高）
    "path=/admin; " +                               // 只在/admin路径及其子路径可用
    "domain=example.com; " +                        // 该域名及子域名可用
    "secure; " +                                    // 仅在HTTPS上发送
    "samesite=strict";                              // CSRF防护（strict/lax/none）

// SameSite属性说明：
// - strict: Cookie不在任何跨域请求中发送
// - lax: 仅在顶级导航（如链接）时发送
// - none: 所有情况都发送（需要secure）
```

------

**Cookie 限制与风险：**

```javascript
// ⚠️ 限制1：最大4KB
// ⚠️ 限制2：每个域名最多180-200个Cookie
// ⚠️ 限制3：不安全，可被用户或恶意脚本修改

// ⚠️ 风险：Cookie注入（XSS攻击）
// 恶意脚本可以修改Cookie
document.cookie = "sessionId=FAKE123";  // ❌ 可被篡改

// ✓ 防护：服务器端验证
// 服务器应该验证Cookie的完整性（如使用签名）
```

------

### **Q15 | Pages 35-36: localStorage 与 sessionStorage**

**英文题目：**

> **Question:** Compare localStorage and sessionStorage. Explain their differences, maximum capacity, and use cases. Demonstrate common operations: setItem(), getItem(), removeItem(), and clear(). Why is localStorage preferred over cookies for large data storage?

**中文对照：**

> **问题：** 比较localStorage和sessionStorage。解释它们的区别、最大容量和使用场景。演示常见操作：setItem()、getItem()、removeItem()和clear()。为什么localStorage相比Cookie更适合大数据存储？

**关键术语对照：**

- localStorage — 本地存储
- sessionStorage — 会话存储
- setItem() — 设置项目
- getItem() — 获取项目
- removeItem() — 移除项目
- clear() — 清空存储
- Capacity — 容量
- Persistence — 持久性
- Same-origin policy — 同源策略

**解答：**

**localStorage vs sessionStorage 对比表：**

| 特性           | localStorage           | sessionStorage       |
| -------------- | ---------------------- | -------------------- |
| **最大容量**   | 5-10MB（浏览器相关）   | 5-10MB               |
| **过期时间**   | 永久（除非手动删除）   | 页面关闭时自动删除   |
| **作用域**     | 同源域名下所有标签页   | 仅当前标签页         |
| **服务器访问** | ❌ 仅客户端可访问       | ❌ 仅客户端可访问     |
| **同源策略**   | ✓ 受限（同源才能访问） | ✓ 受限               |
| **使用场景**   | 长期存储（偏好、缓存） | 临时存储（表单草稿） |

------

**1. localStorage 操作示例：**

```javascript
// 存储数据（setItem）
localStorage.setItem("username", "john");
localStorage.setItem("theme", "dark");

// 获取数据（getItem）
let username = localStorage.getItem("username");
console.log(username);  // → "john"

let theme = localStorage.getItem("theme");
console.log(theme);     // → "dark"

// 获取不存在的数据
let nonExistent = localStorage.getItem("notThere");
console.log(nonExistent);  // → null

// 删除特定项（removeItem）
localStorage.removeItem("theme");

// 清空所有数据（clear）
// localStorage.clear();  // ⚠️ 谨慎使用

// 获取键的数量
console.log(localStorage.length);  // → 1（只剩username）

// 获取第n个键
let firstKey = localStorage.key(0);
console.log(firstKey);  // → "username"

// 遍历所有存储的数据
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(key + ": " + value);
}
```

------

**2. 存储对象（JSON）：**

```javascript
// ⚠️ 直接存储对象会转为字符串
let user = { name: "John", age: 30 };
localStorage.setItem("user", user);
console.log(localStorage.getItem("user"));  // → "[object Object]" ❌

// ✓ 正确做法：转为JSON字符串
localStorage.setItem("user", JSON.stringify(user));

// 读取时需要解析
let retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name);   // → "John"
console.log(retrievedUser.age);    // → 30

// 实际应用：存储用户设置
function saveUserSettings(settings) {
    localStorage.setItem("settings", JSON.stringify(settings));
}

function loadUserSettings() {
    let settings = localStorage.getItem("settings");
    return settings ? JSON.parse(settings) : {};
}

// 使用
saveUserSettings({
    theme: "dark",
    fontSize: "14px",
    language: "en"
});

let userSettings = loadUserSettings();
console.log(userSettings.theme);  // → "dark"
```

------

**3. sessionStorage 操作示例：**

```javascript
// sessionStorage 的API与 localStorage 完全相同
// 唯一区别是生命周期

// 存储表单草稿
sessionStorage.setItem("formDraft", JSON.stringify({
    email: "user@example.com",
    message: "This is a draft"
}));

// 用户刷新页面，草稿仍在
let draft = JSON.parse(sessionStorage.getItem("formDraft"));
console.log(draft.email);  // → "user@example.com"

// 用户关闭标签页，sessionStorage 自动清空 ✓

// 实际应用：表单自动保存
let form = document.getElementById("myForm");
form.addEventListener("input", function() {
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    sessionStorage.setItem("autoDraft", JSON.stringify(data));
    console.log("Draft saved");
});

// 页面加载时恢复草稿
window.addEventListener("load", function() {
    let draft = sessionStorage.getItem("autoDraft");
    if (draft) {
        let data = JSON.parse(draft);
        for (let [key, value] of Object.entries(data)) {
            let input = form.elements[key];
            if (input) input.value = value;
        }
        console.log("Draft restored");
    }
});
```

------

**localStorage vs Cookie 的优势：**

| 方面           | Cookie                   | localStorage       |
| -------------- | ------------------------ | ------------------ |
| **容量**       | 4KB ❌                    | 5-10MB ✓           |
| **HTTP传输**   | ✓ 每次都发送（浪费带宽） | ❌ 仅客户端（高效） |
| **过期管理**   | 需手动设置               | 自动持久           |
| **安全性**     | 可在HTTP上发送 ⚠️         | 仅客户端访问 ✓     |
| **使用复杂度** | 字符串拆分               | API简洁            |

------

**Storage 事件监听（跨标签页通信）：**

```javascript
// 在一个标签页中修改localStorage
localStorage.setItem("notification", "New message");

// 其他标签页可以监听变化
window.addEventListener("storage", function(event) {
    if (event.key === "notification") {
        console.log("New value: " + event.newValue);  // → "New message"
        console.log("Old value: " + event.oldValue);  // → null
        showNotification(event.newValue);
    }
});

// event 对象的属性：
// - key: 修改的键名
// - oldValue: 旧值
// - newValue: 新值
// - url: 修改页面的URL
// - storageArea: 被修改的存储（localStorage或sessionStorage）
```

------

## **📖 第四部分：DOM高级操作（Pages 37-44）**

------

### **Q16 | Pages 37-38: 动态创建与删除元素**

**英文题目：**

> **Question:** Demonstrate how to dynamically create HTML elements using `document.createElement()` and add them to the DOM using `appendChild()`, `insertBefore()`, and `insertAdjacentHTML()`. Then show how to efficiently delete multiple elements.

**中文对照：**

> **问题：** 演示如何使用`document.createElement()`动态创建HTML元素，并使用`appendChild()`、`insertBefore()`和`insertAdjacentHTML()`将它们添加到DOM。然后展示如何高效地删除多个元素。

**关键术语对照：**

- createElement() — 创建元素
- appendChild() — 在末尾添加子元素
- insertBefore() — 在指定元素前插入
- insertAdjacentHTML() — 相邻HTML插入
- DocumentFragment — 文档片段（高性能）

**解答：**

**1. 创建单个元素：**

```javascript
// 创建基础元素
let newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
newDiv.id = "myDiv";
newDiv.className = "highlight";

// 设置属性
newDiv.setAttribute("data-value", "123");
newDiv.setAttribute("title", "Hover me");

// 设置样式
newDiv.style.color = "blue";
newDiv.style.fontSize = "16px";
newDiv.style.padding = "10px";

// 添加到DOM
document.body.appendChild(newDiv);

// 创建带属性的完整元素
let button = document.createElement("button");
button.type = "button";
button.className = "btn btn-primary";
button.textContent = "Click Me";
button.onclick = function() {
    alert("Button clicked!");
};
document.body.appendChild(button);
```

------

**2. 插入位置控制：**

```html
<ul id="list">
    <li id="item1">Item 1</li>
    <li id="item3">Item 3</li>
</ul>
// appendChild - 在末尾添加
let list = document.getElementById("list");
let newItem = document.createElement("li");
newItem.textContent = "Item 4";
list.appendChild(newItem);  // 结果: Item 1, Item 3, Item 4

// insertBefore - 在指定元素前插入
let refElement = document.getElementById("item3");
let item2 = document.createElement("li");
item2.id = "item2";
item2.textContent = "Item 2";
list.insertBefore(item2, refElement);  // 结果: Item 1, Item 2, Item 3, Item 4

// insertAdjacentHTML - 在特定位置插入HTML
// 位置选项: "beforebegin", "afterbegin", "beforeend", "afterend"
list.insertAdjacentHTML("beforebegin", "<p>List starts here</p>");
list.insertAdjacentHTML("afterbegin", "<li>Item 0</li>");
list.insertAdjacentHTML("beforeend", "<li>Item 5</li>");
list.insertAdjacentHTML("afterend", "<p>List ends here</p>");
```

------

**3. 高性能创建多个元素（DocumentFragment）：**

```javascript
// ❌ 低效做法：逐个添加（触发多次重排）
function createItemsInefficient(count) {
    let list = document.getElementById("list");
    for (let i = 0; i < count; i++) {
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        list.appendChild(item);  // 每次都触发重排 ⚠️
    }
}

// ✓ 高效做法：使用DocumentFragment（只触发一次重排）
function createItemsEfficient(count) {
    let list = document.getElementById("list");
    let fragment = document.createDocumentFragment();
    
    for (let i = 0; i < count; i++) {
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        fragment.appendChild(item);  // 添加到片段，不触发重排
    }
    
    list.appendChild(fragment);  // 一次性添加整个片段，仅一次重排
}

// 使用
createItemsEfficient(1000);  // 创建1000项，性能远优于逐个添加
```

------

**4. 删除元素：**

```html
<ul id="list">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
</ul>
<button id="deleteBtn">Delete All</button>
// 删除单个元素
let list = document.getElementById("list");
let firstItem = list.firstElementChild;
list.removeChild(firstItem);  // 删除第一项

// 或使用remove()方法（更简洁）
firstItem.remove();  // 直接删除自身

// 删除所有class为"item"的元素
let items = document.querySelectorAll(".item");
items.forEach(item => {
    item.remove();  // 每个都调用remove()
});

// ✓ 高效做法：使用innerHTML清空
document.getElementById("deleteBtn").addEventListener("click", function() {
    list.innerHTML = "";  // 一次性清空所有子元素
});

// 或使用replaceChildren()（新方法）
list.replaceChildren();  // 清空所有子元素

// 删除具有特定条件的元素
function deleteItemsWithCondition(condition) {
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        if (condition(item)) {
            item.remove();
        }
    });
}

// 使用：删除文本包含"delete"的项
deleteItemsWithCondition(item => {
    return item.textContent.toLowerCase().includes("delete");
});
```

------

### **Q17 | Pages 39-40: 克隆元素与操作属性**

**英文题目：**

> **Question:** Show how to clone an existing DOM element using `cloneNode()`. Explain the difference between shallow and deep cloning. Then demonstrate how to dynamically modify element attributes using `setAttribute()`, `getAttribute()`, `removeAttribute()`, and `dataset`.

**中文对照：**

> **问题：** 展示如何使用`cloneNode()`克隆现有DOM元素。解释浅克隆和深克隆的区别。然后演示如何使用`setAttribute()`、`getAttribute()`、`removeAttribute()`和`dataset`动态修改元素属性。

**关键术语对照：**

- cloneNode() — 克隆节点
- Shallow clone — 浅克隆（仅元素）
- Deep clone — 深克隆（元素及子节点）
- setAttribute() — 设置属性
- getAttribute() — 获取属性
- removeAttribute() — 移除属性
- dataset — 数据集（data-*属性）

**解答：**

**1. cloneNode() 浅克隆 vs 深克隆：**

```html
<div id="original">
    <h2>Title</h2>
    <p>Content</p>
</div>
let original = document.getElementById("original");

// 浅克隆（Shallow Clone）— 仅克隆元素本身
let shallowClone = original.cloneNode(false);
console.log(shallowClone.children.length);  // → 0（没有子元素）

// 深克隆（Deep Clone）— 克隆元素及所有后代
let deepClone = original.cloneNode(true);
console.log(deepClone.children.length);  // → 2（包括h2和p）

// 添加到DOM
document.body.appendChild(shallowClone);
document.body.appendChild(deepClone);
```

**浅克隆 vs 深克隆对比表：**

| 方式       | 元素 | 子节点 | 属性 | 事件监听器 | 用途           |
| ---------- | ---- | ------ | ---- | ---------- | -------------- |
| **浅克隆** | ✓    | ❌      | ✓    | ❌          | 快速创建空容器 |
| **深克隆** | ✓    | ✓      | ✓    | ❌          | 完整复制元素   |

------

**2. 属性操作（Attributes）：**

```html
<button id="btn" class="primary" data-action="save">Save</button>
let btn = document.getElementById("btn");

// 获取属性（getAttribute）
let classValue = btn.getAttribute("class");
console.log(classValue);  // → "primary"

let dataAction = btn.getAttribute("data-action");
console.log(dataAction);  // → "save"

// 设置属性（setAttribute）
btn.setAttribute("disabled", "true");
btn.setAttribute("title", "Click to save");
btn.setAttribute("data-timeout", "5000");

// 检查属性是否存在（hasAttribute）
if (btn.hasAttribute("disabled")) {
    console.log("Button is disabled");
}

// 移除属性（removeAttribute）
btn.removeAttribute("disabled");
btn.removeAttribute("title");

// 获取所有属性
let attributes = btn.attributes;
for (let attr of attributes) {
    console.log(attr.name + "=" + attr.value);
}
```

------

**3. 数据属性（data-\* 和 dataset）— 推荐 ⭐：**

```html
<div id="card" 
     data-id="123" 
     data-type="product" 
     data-price="29.99"
     data-in-stock="true">
    Product Card
</div>
let card = document.getElementById("card");

// 使用 dataset 对象访问 data-* 属性（推荐）
console.log(card.dataset.id);       // → "123"
console.log(card.dataset.type);     // → "product"
console.log(card.dataset.price);    // → "29.99"
console.log(card.dataset.inStock);  // → "true"（注意驼峰命名）

// ✓ 优势：自动转换驼峰命名（data-in-stock → inStock）

// 修改数据属性
card.dataset.price = "19.99";
card.dataset.discount = "10%";     // 动态添加新属性

// 检查属性
if (card.dataset.inStock === "true") {
    console.log("Product is available");
}

// 遍历所有数据属性
for (let key in card.dataset) {
    console.log(key + ": " + card.dataset[key]);
}

// 删除数据属性
delete card.dataset.discount;
```

**vs getAttribute() 对比：**

```javascript
// ❌ 使用getAttribute（繁琐）
let id1 = card.getAttribute("data-id");
card.setAttribute("data-new-field", "value");

// ✓ 使用dataset（简洁）
let id2 = card.dataset.id;
card.dataset.newField = "value";
```

------

**4. 实际应用：动态生成购物车**

```html
<div id="cart"></div>
function addToCart(productData) {
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    
    // 使用dataset存储数据
    cartItem.dataset.productId = productData.id;
    cartItem.dataset.quantity = productData.quantity;
    cartItem.dataset.price = productData.price;
    
    cartItem.innerHTML = `
        <h3>${productData.name}</h3>
        <p>Price: $${productData.price}</p>
        <button class="delete-btn">Delete</button>
    `;
    
    // 为删除按钮添加事件
    cartItem.querySelector(".delete-btn").addEventListener("click", function() {
        console.log("Deleting product: " + cartItem.dataset.productId);
        cartItem.remove();
    });
    
    document.getElementById("cart").appendChild(cartItem);
}

// 使用
addToCart({ id: 1, name: "Laptop", price: 999, quantity: 1 });
addToCart({ id: 2, name: "Mouse", price: 29, quantity: 2 });
```

------

### **Q18 | Pages 41-42: 修改样式与CSS类名**

**英文题目：**

> **Question:** Demonstrate three methods to modify element styling: (1) inline styles via `style` property, (2) CSS classes via `classList`, and (3) dynamic stylesheets. Which method is best for performance and maintainability?

**中文对照：**

> **问题：** 演示修改元素样式的三种方法：(1) 通过`style`属性的内联样式，(2) 通过`classList`的CSS类名，(3) 动态样式表。哪种方法在性能和可维护性方面最好？

**关键术语对照：**

- Inline styles — 内联样式
- style property — style属性
- classList — 类列表
- add/remove/toggle — 添加/移除/切换
- CSS classes — CSS类名
- Dynamic stylesheets — 动态样式表
- Maintainability — 可维护性
- Performance — 性能

**解答：**

**1. 方法1：直接修改 style 属性（不推荐 ⚠️）：**

```javascript
let box = document.getElementById("box");

// 设置单个样式
box.style.color = "red";
box.style.fontSize = "16px";
box.style.backgroundColor = "lightblue";
box.style.padding = "10px";
box.style.margin = "20px";

// CSS属性转驼峰命名
// CSS: background-color  →  JS: backgroundColor
// CSS: border-left       →  JS: borderLeft
// CSS: z-index           →  JS: zIndex

// 获取样式值
console.log(box.style.color);        // → "red"
console.log(box.style.backgroundColor);  // → "lightblue"

// 删除样式
box.style.color = "";  // 移除color样式

// 一次设置多个样式（不推荐）
box.style.cssText = "color: red; font-size: 16px; background-color: blue;";
```

**缺点：**

- ❌ 样式与HTML混合，难以维护
- ❌ 无法利用CSS预处理、媒体查询等
- ❌ 容易出错（驼峰命名容易搞混）
- ❌ 性能不佳（每次修改触发重排）

------

**2. 方法2：使用 classList 管理CSS类（推荐 ⭐）：**

```html
<style>
    .highlight {
        background-color: yellow;
        color: black;
        padding: 10px;
    }
    
    .disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    .active {
        border: 2px solid green;
    }
</style>

<button id="btn" class="primary">Click Me</button>
let btn = document.getElementById("btn");

// 添加类名（add）
btn.classList.add("highlight");
// HTML 变为: <button class="primary highlight">

// 添加多个类名
btn.classList.add("active", "disabled");

// 移除类名（remove）
btn.classList.remove("disabled");

// 切换类名（toggle）— 有则移除，无则添加
btn.classList.toggle("highlight");
btn.classList.toggle("highlight");  // 再次点击移除

// 检查是否包含类名（contains）
if (btn.classList.contains("active")) {
    console.log("Button is active");
}

// 替换类名（replace）
btn.classList.replace("primary", "secondary");

// 获取所有类名
console.log(btn.classList);  // DOMTokenList(...)
for (let className of btn.classList) {
    console.log(className);
}

// 获取类名数量
console.log(btn.classList.length);

// 遍历所有类名
btn.classList.forEach(className => {
    console.log(className);
});
```

**classList 方法对比表：**

| 方法           | 功能     | 代码示例                             |
| -------------- | -------- | ------------------------------------ |
| **add()**      | 添加类名 | `el.classList.add("active")`         |
| **remove()**   | 移除类名 | `el.classList.remove("active")`      |
| **toggle()**   | 切换类名 | `el.classList.toggle("active")`      |
| **contains()** | 检查类名 | `el.classList.contains("active")`    |
| **replace()**  | 替换类名 | `el.classList.replace("old", "new")` |

**优点：**

- ✓ 样式与逻辑分离
- ✓ 支持CSS的所有功能（媒体查询、伪类等）
- ✓ 易于维护和复用
- ✓ 性能更好（浏览器优化）

------

**3. 实际应用：主题切换**

```html
<style>
    /* 亮色主题 */
    body {
        background-color: white;
        color: black;
    }
    
    /* 暗色主题 */
    body.dark-theme {
        background-color: #333;
        color: #fff;
    }
</style>

<button id="themeToggle">Switch Theme</button>
let themeToggle = document.getElementById("themeToggle");

// 读取保存的主题偏好
let savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

// 切换主题
themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    
    // 保存用户选择
    let currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
});
```

------

**4. 方法3：使用computed styles 获取样式（只读）：**

```javascript
let box = document.getElementById("box");

// 获取计算后的样式（包括CSS文件中定义的样式）
let computedStyle = window.getComputedStyle(box);

console.log(computedStyle.color);           // 实际的颜色值
console.log(computedStyle.backgroundColor);  // 实际的背景色
console.log(computedStyle.width);           // 实际的宽度
console.log(computedStyle.height);          // 实际的高度
console.log(computedStyle.margin);          // 实际的外边距

// ⚠️ 注意：getComputedStyle 是只读的，不能修改
// computedStyle.color = "red";  // ❌ 无效

// 应用：获取元素的实际大小
let width = parseFloat(computedStyle.width);
let height = parseFloat(computedStyle.height);
console.log(`Width: ${width}px, Height: ${height}px`);
```

------

**5. 方法4：动态创建样式表（高级）：**

```javascript
// 动态创建 <style> 标签
let styleSheet = document.createElement("style");
styleSheet.textContent = `
    .custom-button {
        background-color: green;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .custom-button:hover {
        background-color: darkgreen;
    }
`;
document.head.appendChild(styleSheet);

// 现在可以使用这些类名
let btn = document.createElement("button");
btn.textContent = "Click";
btn.classList.add("custom-button");
document.body.appendChild(btn);
```

------

**6. 性能与可维护性对比表：**

| 方法                 | 性能   | 可维护性 | 推荐度       |
| -------------------- | ------ | -------- | ------------ |
| **style属性**        | ⭐ 低   | ⭐ 低     | ❌ 不推荐     |
| **classList**        | ⭐⭐⭐ 高 | ⭐⭐⭐ 高   | ✓ 推荐       |
| **getComputedStyle** | ⭐⭐ 中  | ⭐⭐ 中    | ✓ 获取样式用 |
| **动态样式表**       | ⭐⭐⭐ 高 | ⭐⭐ 中    | ✓ 动态主题用 |

------

### **Q19 | Pages 43-44: 表单处理与客户端验证**

**英文题目：**

> **Question:** Create a comprehensive form validation example that demonstrates: (1) real-time input validation, (2) custom validation rules, (3) error message display, and (4) form submission handling. Why is client-side validation insufficient without server-side validation?

**中文对照：**

> **问题：** 创建一个综合表单验证示例，演示：(1) 实时输入验证，(2) 自定义验证规则，(3) 错误消息显示，(4) 表单提交处理。为什么仅有客户端验证而没有服务器端验证是不够的？

**关键术语对照：**

- Form validation — 表单验证
- Real-time validation — 实时验证
- Custom validation — 自定义验证
- Error handling — 错误处理
- Server-side validation — 服务器端验证
- Client-side validation — 客户端验证
- Regular expression — 正则表达式
- Security risk — 安全风险

**解答：**

**完整的表单验证示例：**

```html
<form id="registrationForm">
    <div class="form-group">
        <label for="username">Username:</label>
        <input id="username" type="text" name="username" required>
        <span class="error-msg" id="usernameError"></span>
    </div>
    
    <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" required>
        <span class="error-msg" id="emailError"></span>
    </div>
    
    <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" name="password" required>
        <span class="error-msg" id="passwordError"></span>
        <span class="hint">密码要求：至少8个字符，包含大小写字母和数字</span>
    </div>
    
    <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input id="confirmPassword" type="password" name="confirmPassword" required>
        <span class="error-msg" id="confirmError"></span>
    </div>
    
    <div class="form-group">
        <label for="age">Age:</label>
        <input id="age" type="number" name="age" min="18" max="120" required>
        <span class="error-msg" id="ageError"></span>
    </div>
    
    <div class="form-group">
        <input id="terms" type="checkbox" name="terms" required>
        <label for="terms">I agree to the terms and conditions</label>
        <span class="error-msg" id="termsError"></span>
    </div>
    
    <button type="submit">Register</button>
    <button type="reset">Clear</button>
</form>

<style>
    .form-group { margin-bottom: 15px; }
    input, textarea { width: 100%; padding: 8px; }
    .error-msg { color: red; font-size: 12px; display: none; }
    .error-msg.show { display: block; }
    .hint { color: gray; font-size: 12px; }
    input.invalid { border-color: red; }
    input.valid { border-color: green; }
</style>
```

------

**验证规则定义：**

```javascript
const validationRules = {
    username: {
        rules: [
            {
                test: (value) => value.length >= 3,
                message: "Username must be at least 3 characters"
            },
            {
                test: (value) => /^[a-zA-Z0-9_]+$/.test(value),
                message: "Username can only contain letters, numbers, and underscores"
            }
        ]
    },
    email: {
        rules: [
            {
                test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                message: "Please enter a valid email address"
            }
        ]
    },
    password: {
        rules: [
            {
                test: (value) => value.length >= 8,
                message: "Password must be at least 8 characters"
            },
            {
                test: (value) => /[A-Z]/.test(value),
                message: "Password must contain an uppercase letter"
            },
            {
                test: (value) => /[a-z]/.test(value),
                message: "Password must contain a lowercase letter"
            },
            {
                test: (value) => /[0-9]/.test(value),
                message: "Password must contain a number"
            }
        ]
    },
    confirmPassword: {
        rules: [
            {
                test: (value, form) => value === form.password.value,
                message: "Passwords do not match"
            }
        ]
    },
    age: {
        rules: [
            {
                test: (value) => value >= 18 && value <= 120,
                message: "Age must be between 18 and 120"
            }
        ]
    },
    terms: {
        rules: [
            {
                test: (value, form) => form.terms.checked,
                message: "You must agree to the terms and conditions"
            }
        ]
    }
};
```

------

**实时验证实现：**

```javascript
const form = document.getElementById("registrationForm");

// 为每个输入字段添加实时验证
Object.keys(validationRules).forEach(fieldName => {
    let field = form.elements[fieldName];
    if (!field) return;
    
    // 实时验证（input事件）
    field.addEventListener("input", function() {
        validateField(fieldName, form);
    });
    
    // 失焦验证（blur事件）
    field.addEventListener("blur", function() {
        validateField(fieldName, form);
    });
});

// 验证单个字段
function validateField(fieldName, form) {
    let field = form.elements[fieldName];
    let rules = validationRules[fieldName].rules;
    let errorElement = document.getElementById(fieldName + "Error");
    let value = field.type === "checkbox" ? field.checked : field.value.trim();
    
    // 检查是否为空（必填字段）
    if (field.hasAttribute("required") && value === "") {
        showError(field, errorElement, "This field is required");
        return false;
    }
    
    // 应用自定义规则
    for (let rule of rules) {
        if (!rule.test(value, form)) {
            showError(field, errorElement, rule.message);
            return false;
        }
    }
    
    // 验证通过
    clearError(field, errorElement);
    return true;
}

// 显示错误
function showError(field, errorElement, message) {
    field.classList.remove("valid");
    field.classList.add("invalid");
    errorElement.textContent = message;
    errorElement.classList.add("show");
}

// 清除错误
function clearError(field, errorElement) {
    field.classList.remove("invalid");
    field.classList.add("valid");
    errorElement.textContent = "";
    errorElement.classList.remove("show");
}

// 验证整个表单
function validateForm(form) {
    let isValid = true;
    Object.keys(validationRules).forEach(fieldName => {
        if (!validateField(fieldName, form)) {
            isValid = false;
        }
    });
    return isValid;
}

// 表单提交处理
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // 客户端验证
    if (!validateForm(form)) {
        console.log("Form validation failed");
        return;
    }
    
    // 收集表单数据
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    
    console.log("Form data valid, sending to server:", data);
    
    // 发送到服务器（模拟）
    submitFormToServer(data);
});

// 模拟提交到服务器
function submitFormToServer(data) {
    console.log("Submitting:", data);
    // 实际项目中使用 fetch 或 XMLHttpRequest
    // fetch('/api/register', {
    //     method: 'POST',
    //     body: JSON.stringify(data)
    // })
}
```

------

**客户端验证 vs 服务器端验证：**

| 方面           | 客户端验证       | 服务器端验证   |
| -------------- | ---------------- | -------------- |
| **用户体验**   | 即时反馈 ✓       | 延迟（往返）   |
| **安全性**     | 可被绕过 ⚠️       | 安全 ✓         |
| **数据完整性** | 无法保证         | 完全保证 ✓     |
| **性能**       | 减少服务器请求 ✓ | 所有请求都验证 |
| **必要性**     | 可选             | 必需 ✓         |

------

**为什么需要服务器端验证？**

```javascript
// ⚠️ 客户端验证的漏洞：

// 1. 用户可以禁用JavaScript
// 2. 用户可以修改HTML
document.getElementById("age").min = "1";  // 绕过年龄限制

// 3. 用户可以直接发送HTTP请求
// 使用curl或Postman直接发送未验证的数据

// 4. 恶意用户可以修改浏览器验证
// 在浏览器开发者工具中删除验证代码

// ✓ 解决方案：服务器端必须再次验证所有数据
```

------

**服务器端验证示例（伪代码）：**

```javascript
// 后端 Node.js/Express 示例
app.post("/api/register", (req, res) => {
    let { username, email, password, age } = req.body;
    
    // ✓ 重新验证所有数据
    if (!username || username.length < 3) {
        return res.status(400).json({ error: "Invalid username" });
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Invalid email" });
    }
    
    if (age < 18 || age > 120) {
        return res.status(400).json({ error: "Invalid age" });
    }
    
    // 保存到数据库
    saveUser({ username, email, password, age });
    res.json({ success: true });
});
```

------

## **📚 完整学习总结表**

**第7章核心概念速记：**

| 页码      | 主题       | 核心内容            | 关键API/方法                                             |
| --------- | ---------- | ------------------- | -------------------------------------------------------- |
| **2-7**   | DOM基础    | DOM树结构、节点类型 | `getElementById()`, `querySelector()`                    |
| **8-10**  | 访问元素   | 三种访问方法        | `document.images[]`, `document.name`, `getElementById()` |
| **11-13** | 表单元素   | 同名元素数组        | `document.forms[]`, `elements[]`                         |
| **14-15** | 树遍历     | DOM遍历、递归       | `childNodes`, `children`, `parentNode`                   |
| **16-17** | DOM修改    | 添加/删除元素       | `appendChild()`, `removeChild()`, `innerHTML`            |
| **18-24** | BOM基础    | 浏览器环境          | `window`, `navigator`, `history`, `location`             |
| **25-32** | 事件系统   | 事件流、委托        | `addEventListener()`, `event`, `stopPropagation()`       |
| **33-36** | 客户端存储 | Cookie、Storage     | `localStorage.setItem()`, `document.cookie`              |
| **37-44** | 高级操作   | 样式、验证          | `classList`, `createElement()`, 正则验证                 |

------

**双语速记表（英文 + 中文）：**

| 英文                 | 中文       | 代码示例                                  |
| -------------------- | ---------- | ----------------------------------------- |
| **Element Node**     | 元素节点   | `<div>`, `<p>`, `<button>`                |
| **Text Node**        | 文本节点   | HTML标签间的文本                          |
| **Event Listener**   | 事件监听器 | `addEventListener("click", fn)`           |
| **Event Delegation** | 事件委托   | 为父元素绑定处理器                        |
| **DOM Traversal**    | DOM遍历    | `parentNode`, `childNodes`, `nextSibling` |
| **Reflow/Repaint**   | 重排/重绘  | 修改样式触发                              |
| **DocumentFragment** | 文档片段   | 高性能批量添加                            |
| **classList**        | 类列表     | `add()`, `remove()`, `toggle()`           |
| **Computed Styles**  | 计算样式   | `getComputedStyle(element)`               |
| **XSS Attack**       | XSS攻击    | 恶意脚本注入                              |

------

**易错点总结：**

```javascript
// ❌ 常见错误1：混淆 childNodes 和 children
let children = element.childNodes;  // ⚠️ 包含文本节点
let children = element.children;    // ✓ 仅元素节点

// ❌ 常见错误2：事件监听器覆盖
element.onclick = fn1;
element.onclick = fn2;  // ⚠️ fn1被覆盖
element.addEventListener("click", fn1);
element.addEventListener("click", fn2);  // ✓ 两个都执行

// ❌ 常见错误3：document.write的危险
window.onload = () => {
    document.write("content");  // ❌ 擦除整个页面
};

// ❌ 常见错误4：忘记JSON转换
localStorage.setItem("user", {name: "John"});  // ⚠️ "[object Object]"
localStorage.setItem("user", JSON.stringify({name: "John"}));  // ✓

// ❌ 常见错误5：假设客户端验证就够了
// ⚠️ 必须在服务器端再验证一遍

// ❌ 常见错误6：驼峰命名混淆
element.style.backgroundColor;  // ✓ 正确
element.style.backgroundcolor;  // ❌ 错误
element.style.background-color; // ❌ 语法错误
```

------

这份习题集涵盖了第7章《客户端JavaScript》的**全部核心知识点**，包括：

- ✓ DOM基础与树结构
- ✓ 元素访问与操作
- ✓ 事件系统与事件流
- ✓ 客户端存储（Cookie/Storage）
- ✓ 动态元素创建与删除
- ✓ 样式与CSS类名管理
- ✓ 表单验证与提交

每道题目都包含**英文 + 中文对照、页码标注、详细代码示例和实际应用**，符合您要求的双语对照标准！