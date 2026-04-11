

明白。我现在开始为你系统输出**第7章 Client-side JavaScript 完整复习讲解材料**，采用编号问答格式，严格对标页码，双语对照，包含深度学习维度。

------

# 第7章 Client-side JavaScript 完整复习讲解

## PART 1：DOM 基础（Pages 2–17）

------

### 1.1Q DOM是什么？为什么需要它？ | Page 2-3

**核心概念**

DOM（Document Object Model，文档对象模型）是浏览器对HTML文档的**编程接口表示**。它将HTML文档结构化为一棵**树形结构**，每个HTML元素、属性、文本都成为树上的一个**节点(Node)**。

**深度理解 | Why**

想象HTML文档就像一个图书馆的目录系统：

- 没有DOM前：你只能看到纸质HTML代码，无法操作
- 有DOM后：浏览器给你一份"活的、可交互的电子目录"，你可以随时查找、修改、删除任何部分

这就是DOM的意义：**从静态文本转换为动态可操作的对象树**。

**技术演进 | 知识关联**

- **Level 0**（最早）：browser-specific models，各浏览器互不兼容
- **DOM Level 1**（1998）：W3C标准化，引入core和HTML两个模块
- **DOM Level 2-3**：扩展事件、样式、遍历等功能
- **现代浏览器**：基本实现DOM Level 2，部分DOM Level 3特性

**应用迁移**

DOM在以下场景被大量使用：

- 表单验证（检查用户输入）
- 动态生成内容（SPA框架的基础）
- 交互响应（点击、悬停等）
- 样式动态修改（主题切换、响应式调整）

------

### 1.2Q DOM树结构是什么样的？节点类型有哪些？ | Page 3-4

**核心概念**

DOM树是一个**倒挂的树结构**：

```
                  document（根节点）
                      |
                   <html>
                   /    \
                 <head> <body>
                 /        |   \
              <title>   <h1> <p>
              |         |     |
            "标题"   "标题文本" "段落文本"
```

树的每一条"枝条"都是一个**节点(Node)**。

**节点类型详解**

| 节点类型 | 节点类型(Node Type) | 说明                       | 示例                          |
| -------- | ------------------- | -------------------------- | ----------------------------- |
| 文档节点 | Document Node       | 整个文档，即`document`对象 | `document`                    |
| 元素节点 | Element Node        | HTML元素，可有子节点和属性 | `<div>`, `<p>`                |
| 文本节点 | Text Node           | 元素内的纯文本内容         | `"Hello World"`               |
| 属性节点 | Attribute Node      | HTML元素的属性             | `id="main"`, `class="active"` |
| 注释节点 | Comment Node        | HTML注释内容               | `<!-- 这是注释 -->`           |

**关键深度 | 批判思维**

初学者常犯的错误：**把"元素"和"节点"混为一谈**

```javascript
// ❌ 错误理解
<p>Hello</p>  // 这是一个节点吗？

// ✓ 正确理解
<p>Hello</p>
// 实际上包含2个节点：
// 1. 元素节点 <p>
// 2. 文本节点 "Hello"
```

这个区分对后面的DOM遍历至关重要。

**应用迁移**

理解节点类型帮助你：

- 正确使用`childNodes`（包含所有节点类型）vs `children`（仅元素节点）
- 理解为什么`textContent`能获取文本但`innerHTML`包含标签
- 预测DOM操作的边界情况

------

### 1.3Q 如何访问DOM元素？三种主要方法各有什么优缺点？ | Page 5-6

**三种访问方法对比表**

| 方法         | 方法名(Method)       | 语法                                 | 优点                         | 缺点                                   | 最佳场景              |
| ------------ | -------------------- | ------------------------------------ | ---------------------------- | -------------------------------------- | --------------------- |
| **ID访问**   | getElementById       | `document.getElementById('id')`      | 返回单个精确对象，速度快     | 需要元素有id属性，不够灵活             | 页面关键元素          |
| **名称访问** | getElementsByName    | `document.getElementsByName('name')` | 返回实时集合，适合表单       | 返回数组需遍历，name属性仅部分标签支持 | 表单元素(form, input) |
| **索引访问** | getElementsByTagName | `document.getElementsByTagName('p')` | 返回实时集合，适合大批量操作 | 顺序依赖HTML结构，易脆弱               | 批量操作某类标签      |

**代码示例 | 逐行双语对照**

```javascript
// 1. ID访问 - 推荐 ★★★
const header = document.getElementById('header');
// 常量header存储ID为"header"的元素对象
// Const header stores element object with id="header"

// 2. 名称访问
const checkboxes = document.getElementsByName('agree');
// 获取name为"agree"的所有元素，返回HTMLCollection集合
// Get all elements with name="agree", returns HTMLCollection

for (let i = 0; i < checkboxes.length; i++) {
    // 需要遍历集合中的每一项
    // Must iterate through each item in collection
    console.log(checkboxes[i].checked);
}

// 3. 标签访问
const paragraphs = document.getElementsByTagName('p');
// 获取所有<p>标签，返回实时集合
// Get all <p> tags, returns live collection

// 现代替代方案（更推荐）★★★
const element = document.querySelector('#id');  // 等同于getElementById
const elements = document.querySelectorAll('.class'); // 类似getElementsByTagName
```

**深度理解 | Why这样设计**

为什么浏览器要设计三种不同的访问方法？

**历史原因**：早期没有统一标准，浏览器各自实现。后来JavaScript标准化后，为了兼容旧代码，这三种方法一直保留。

**实时集合 vs 静态集合**的核心区别：

- `getElementsByName()` 和 `getElementsByTagName()` 返回**实时集合(Live HTMLCollection)**：如果你修改HTML后，集合会自动更新
- `querySelectorAll()` 返回**静态集合(Static NodeList)**：修改HTML后不会变

```javascript
// 实时集合的坑
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length);  // 假设为5

// 页面添加新的<p>
document.body.innerHTML += '<p>新段落</p>';

console.log(paragraphs.length);  // 现在是6！（自动更新了）
// 这会导致循环遍历时的边界问题
```

**批判思维 | 设计局限**

三种方法都有局限性：

- ID访问：不够灵活，只能按id
- Name访问：仅支持表单元素，不够通用
- 标签访问：粒度太粗，常需结合其他判断

**现代解决方案**：`querySelector()` 和 `querySelectorAll()` 用CSS选择器统一了这些操作。

------

### 1.4Q querySelector() 和 querySelectorAll() 是什么？为什么现代代码都用它们？ | Page 6-7

**核心概念**

这两个方法用**CSS选择器语法**统一了DOM访问：

```javascript
// querySelector() - 返回第一个匹配元素
document.querySelector('#main');        // ID选择器
document.querySelector('.active');      // 类选择器
document.querySelector('div > p');      // 后代选择器
document.querySelector('[data-id="5"]'); // 属性选择器

// querySelectorAll() - 返回所有匹配元素（静态NodeList）
document.querySelectorAll('p');
document.querySelectorAll('.item');
document.querySelectorAll('ul > li');
```

**优势对比表 | 为什么现代代码用它**

| 特性           | getElementById | querySelector                        |
| -------------- | -------------- | ------------------------------------ |
| 选择器灵活性   | 仅ID           | CSS选择器（ID、class、属性、组合等） |
| 返回值         | 单个元素或null | 单个元素或null                       |
| 性能           | 极快           | 稍慢（需解析选择器）                 |
| 可读性         | 中等           | 高（接近CSS语法）                    |
| 现代代码覆盖率 | 30%            | 70%+                                 |

**深度理解 | Why现代代码都选择它**

1. **统一接口**：无需记住三种方法的差异
2. **灵活选择**：CSS选择器能表达的逻辑更复杂
3. **易维护**：团队代码风格一致

```javascript
// 旧方法需要多步
const container = document.getElementById('main');
const items = container.getElementsByClassName('item');

// 新方法一行搞定
const items = document.querySelectorAll('#main .item');
```

**应用迁移 | 实际场景**

表单验证场景：

```javascript
// 获取所有未填写的必填字段
const emptyFields = document.querySelectorAll('input[required]:invalid');

// 批量添加事件监听
document.querySelectorAll('.btn-submit').forEach(btn => {
    btn.addEventListener('click', validateForm);
});
```

------

### 1.5Q DOM遍历有哪些属性？childNodes 和 children 的区别是什么？ | Page 7-9

**核心概念**

DOM遍历是指从一个节点**逐层向上或向下移动**，访问其他节点。浏览器提供了一系列属性来支持这个操作。

**遍历属性完整表 | 双语对照**

| 属性                     | 属性名(Property) | 返回值类型     | 包含的节点类型 | 说明                           |
| ------------------------ | ---------------- | -------------- | -------------- | ------------------------------ |
| `childNodes`             | 子节点集合       | NodeList       | 所有类型       | 包括文本、元素、注释等所有节点 |
| `children`               | 子元素集合       | HTMLCollection | 仅元素         | 只包含元素节点，推荐用 ★★★     |
| `parentNode`             | 父节点           | Node           | 任意           | 返回直接父节点                 |
| `firstChild`             | 第一个子节点     | Node           | 任意           | 可能是文本节点！常见坑         |
| `lastChild`              | 最后一个子节点   | Node           | 任意           | 同上，易出错                   |
| `firstElementChild`      | 第一个子元素     | Element        | 仅元素         | 推荐替代firstChild ★★★         |
| `lastElementChild`       | 最后一个子元素   | Element        | 仅元素         | 推荐替代lastChild ★★★          |
| `nextSibling`            | 下一个兄弟节点   | Node           | 任意           | 可能跳过多个文本节点           |
| `previousSibling`        | 上一个兄弟节点   | Node           | 任意           | 同上                           |
| `nextElementSibling`     | 下一个兄弟元素   | Element        | 仅元素         | 推荐 ★★★                       |
| `previousElementSibling` | 上一个兄弟元素   | Element        | 仅元素         | 推荐 ★★★                       |

**关键易错点 | 文本节点陷阱 ⚠️**

这是**第7章最常见的考试坑**：

```html
<div id="container">
    <p>第一段</p>
    <p>第二段</p>
</div>
const container = document.getElementById('container');

// ❌ 错误写法 - 常见初学者错误
console.log(container.firstChild);  // 返回什么？
// 答案：#text (一个文本节点，即换行符和缩进空格！)
// 不是 <p>第一段</p>

// ✓ 正确写法
console.log(container.firstElementChild);  // <p>第一段</p> ✓
console.log(container.children[0]);        // <p>第一段</p> ✓

// 理解childNodes的真实内容
console.log(container.childNodes);
// NodeList(5) [#text, p, #text, p, #text]
// 注意：每对标签之间的换行和缩进都成了文本节点！
```

**深度理解 | Why有这么多属性？**

这是**HTML缩进格式导致的问题**：

```html
<!-- 格式化的HTML（人类可读）-->
<div>
    <p>段落</p>
</div>
```

浏览器解析后的真实树：

```
div
├─ #text (换行 + 4个空格)
├─ p
│  └─ #text ("段落")
├─ #text (换行)
```

所以浏览器设计了两套属性：

- `childNodes`、`firstChild`、`nextSibling`：严格按HTML源码解析（包含所有节点）
- `children`、`firstElementChild`、`nextElementSibling`：只看元素（过滤文本节点）

**应用迁移 | 实际编码建议 ★★★**

```javascript
// ❌ 避免这样写
for (let i = 0; i < element.childNodes.length; i++) {
    if (element.childNodes[i].nodeType === 1) {  // 1代表元素节点
        // 处理元素
    }
}

// ✓ 推荐这样写
for (let i = 0; i < element.children.length; i++) {
    // 直接处理元素，无需类型判断
}

// ✓✓ 最现代的写法
element.children.forEach(child => {
    // 使用forEach遍历
});
```

------

### 1.6Q 如何获取和修改HTML元素的内容和属性？ | Page 10-12

**核心方法对比表**

| 方法/属性           | 名称(Name) | 获取的内容  | 安全性   | 性能 | 最佳场景           |
| ------------------- | ---------- | ----------- | -------- | ---- | ------------------ |
| `innerHTML`         | 内部HTML   | 标签 + 文本 | 需防XSS  | 快   | 替换大段HTML结构   |
| `textContent`       | 文本内容   | 仅文本      | 安全 ★★★ | 快   | 修改纯文本内容     |
| `innerText`         | 可见文本   | 仅可见文本  | 安全     | 慢   | 少用（浏览器特定） |
| `getAttribute()`    | 获取属性   | 属性值      | 安全     | 快   | 读取属性           |
| `setAttribute()`    | 设置属性   | -           | 安全     | 快   | 修改属性           |
| `removeAttribute()` | 移除属性   | -           | 安全     | 快   | 删除属性           |
| `className`         | 类名       | 类字符串    | 安全     | 快   | 修改单个类         |
| `classList`         | 类列表     | 类集合API   | 安全 ★★★ | 快   | 添加/删除/切换类   |
| `style`             | 样式对象   | CSS属性对象 | 安全     | 快   | 动态样式修改       |

**代码示例 | 逐行双语对照**

```javascript
// ============ 获取和修改文本/HTML ============

const box = document.getElementById('box');

// 1. innerHTML - 包含标签
box.innerHTML = '<p>新内容</p>';
// 设置box内部的HTML为一个段落
// Set inner HTML of box to a paragraph tag

console.log(box.innerHTML);  // '<p>新内容</p>'

// 2. textContent - 仅文本（推荐 ★★★）
box.textContent = 'Hello World';
// 设置box的文本内容，自动转义HTML标签
// Set text content - HTML tags are automatically escaped

console.log(box.textContent);  // 'Hello World'

// ============ 获取和修改属性 ============

// 3. getAttribute() - 获取属性值
const id = box.getAttribute('id');  // 'box'
const dataId = box.getAttribute('data-id');  // 获取自定义属性

// 4. setAttribute() - 设置属性
box.setAttribute('data-status', 'active');
// 为box添加自定义属性data-status，值为'active'
// Add custom attribute data-status with value "active"

// 5. removeAttribute() - 删除属性
box.removeAttribute('data-status');

// ============ 修改类名（推荐方式） ============

// ❌ 旧方法 - 易出错
box.className = 'active';  // 覆盖所有类
box.className += ' disabled';  // 字符串拼接易出错

// ✓ 现代方法 - classList API ★★★
box.classList.add('active');        // 添加类
box.classList.remove('disabled');   // 移除类
box.classList.toggle('highlight');  // 切换类（有则删，无则加）
box.classList.contains('active');   // 判断是否有该类

// 实际场景：表单验证反馈
if (isValid) {
    input.classList.add('valid');
    input.classList.remove('invalid');
} else {
    input.classList.add('invalid');
    input.classList.remove('valid');
}

// ============ 修改CSS样式 ============

// 直接修改style属性
box.style.backgroundColor = 'red';    // 注意驼峰命名！
box.style.width = '100px';
box.style.display = 'none';

// 注意：CSS中的横线需转换为驼峰
// CSS: background-color  →  JS: backgroundColor
// CSS: font-size        →  JS: fontSize
```

**深度理解 | innerHTML 的安全隐患 ⚠️**

`innerHTML` 是一个**双刃剑**：

```javascript
// ❌ 危险场景 - XSS攻击
const userInput = '<img src=x onerror="alert(\'被黑了！\')">';
box.innerHTML = userInput;
// 用户输入的脚本被执行！这是XSS漏洞

// ✓ 安全做法
box.textContent = userInput;  // 文本被转义，脚本不执行
// 输出：<img src=x onerror="alert('被黑了！')">  (作为纯文本显示)
```

**规则记住**：

- 如果内容**来自用户输入**或**不可信源**，用 `textContent`
- 如果你**确实需要渲染HTML标签**，用 `innerHTML` 但需要**服务器端清理**(Sanitization)

**应用迁移 | 实际场景对比**

```javascript
// 场景1：修改用户界面的提示消息
const message = 'Your account has been created';  // 信任的内容
box.textContent = message;  // 用textContent就够了

// 场景2：富文本编辑器渲染
const richHTML = '<p><strong>重要公告</strong></p>';  // 需要标签效果
// 前提：这些HTML必须经过后端验证和清理(Sanitization)
box.innerHTML = richHTML;

// 场景3：动态生成元素（推荐用DOM API）
const p = document.createElement('p');
p.textContent = 'Hello';
box.appendChild(p);
```

------

### 1.7Q 如何动态创建、插入、删除DOM元素？ | Page 12-14

**核心方法对比表**

| 方法               | 方法名(Method) | 功能                 | 返回值       | 使用场景     |
| ------------------ | -------------- | -------------------- | ------------ | ------------ |
| `createElement()`  | 创建元素       | 创建新元素节点       | Element      | 动态生成DOM  |
| `createTextNode()` | 创建文本       | 创建文本节点         | Text         | 较少使用     |
| `appendChild()`    | 追加子节点     | 添加为最后一个子节点 | 追加的节点   | 常用         |
| `insertBefore()`   | 在之前插入     | 在指定节点前插入     | 插入的节点   | 需要特定位置 |
| `replaceChild()`   | 替换节点       | 用新节点替换旧节点   | 旧节点       | 替换操作     |
| `removeChild()`    | 移除子节点     | 删除指定子节点       | 被删除的节点 | 删除操作     |
| `remove()`         | 移除自己       | 删除元素自己         | undefined    | 现代方法 ★★★ |

**代码示例 | 从基础到进阶**

```javascript
// ============ 创建元素 ============

// 1. 创建新元素
const newParagraph = document.createElement('p');
// 创建一个<p>元素，但还没插入文档
// Create a <p> element (not yet in document)

// 2. 设置内容
newParagraph.textContent = 'This is a new paragraph';
// 设置段落的文本内容
// Set text content of paragraph

// 3. 设置属性
newParagraph.setAttribute('class', 'important');
newParagraph.id = 'para1';
// 或更简洁的方式
newParagraph.className = 'important';

// ============ 插入元素 ============

const container = document.getElementById('container');

// 方法1：appendChild() - 追加到末尾
container.appendChild(newParagraph);
// 将newParagraph添加为container的最后一个子元素
// Append newParagraph as last child of container

// 方法2：insertBefore() - 在指定位置前插入
const firstChild = container.firstElementChild;
container.insertBefore(newParagraph, firstChild);
// 将newParagraph插入到container的第一个子元素前
// Insert newParagraph before first child

// 方法3：insertAdjacentHTML() - 在元素周围插入（推荐 ★★★）
container.insertAdjacentHTML('beforeend', '<p>新段落</p>');
// 四个位置选项：
// 1. 'beforebegin' - 元素前
// 2. 'afterbegin' - 元素内部开始
// 3. 'beforeend' - 元素内部结束
// 4. 'afterend' - 元素后

/*
    <!-- beforebegin 位置 -->
    <container>
        <!-- afterbegin 位置 -->
        ... 内容 ...
        <!-- beforeend 位置 -->
    </container>
    <!-- afterend 位置 -->
*/

// ============ 删除元素 ============

// 方法1：removeChild() - 从父元素移除（旧方法）
const parent = newParagraph.parentNode;
parent.removeChild(newParagraph);
// 从parent中删除newParagraph子节点
// Remove newParagraph from its parent

// 方法2：remove() - 删除自己（现代方法 ★★★）
newParagraph.remove();
// 直接删除元素，无需获取父节点
// Directly remove element, no need for parent reference

// ============ 替换元素 ============

const oldElement = document.getElementById('old');
const newElement = document.createElement('div');
newElement.textContent = 'Replacement content';

oldElement.parentNode.replaceChild(newElement, oldElement);
// 用newElement替换oldElement
// Replace oldElement with newElement
```

**完整实例 | 动态生成列表**

```javascript
// 场景：根据数据动态生成列表

const items = ['项目1', '项目2', '项目3'];
const listContainer = document.getElementById('list');

// 方法1：逐个createElement + appendChild（传统）
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listContainer.appendChild(li);
});

// 方法2：innerHTML（快但需谨慎）
listContainer.innerHTML = items
    .map(item => `<li>${item}</li>`)
    .join('');
// 使用模板字符串生成HTML，一次性插入
// 优点：性能快
// 缺点：重新创建了所有子节点，失去事件监听器

// 方法3：DocumentFragment（最优 ★★★）
const fragment = document.createDocumentFragment();
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);  // 先加入fragment
});
listContainer.appendChild(fragment);  // 一次性插入
// fragment是虚拟的，不在DOM中，所以批量操作很快
// 只执行一次重排(Reflow)，性能最优
```

**深度理解 | 性能对比**

```javascript
// ❌ 低效 - 每次appendChild都触发重排(Reflow)
const container = document.getElementById('container');
for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    container.appendChild(div);  // 1000次重排！
}

// ✓ 高效 - 只触发1次重排
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div);  // 0次重排（fragment不在DOM中）
}
container.appendChild(fragment);  // 1次重排
```

**应用迁移 | 实际场景**

```javascript
// 场景：AJAX加载数据后动态渲染列表

fetch('/api/users')
    .then(response => response.json())
    .then(users => {
        const fragment = document.createDocumentFragment();
        
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
            li.id = `user-${user.id}`;
            fragment.appendChild(li);
        });
        
        document.getElementById('userList').appendChild(fragment);
    });
```

------

### 1.8Q Document对象和Window对象是什么？它们有什么区别？ | Page 2-3, 18

**概念澄清 | 这是BOM的入门**

`document` 和 `window` 是JavaScript中两个最重要的对象，但初学者常混淆它们：

| 特性         | window对象                             | document对象                        |
| ------------ | -------------------------------------- | ----------------------------------- |
| **作用域**   | 全局对象，所有全局变量都是window的属性 | document是window的一个属性          |
| **代表什么** | 浏览器窗口本身                         | 当前加载的网页文档                  |
| **管理什么** | 浏览器功能（导航、计时、存储等）       | 网页内容（HTML、DOM树等）           |
| **访问方式** | 直接使用 `window`                      | `window.document` 或简写 `document` |

**关系图**

```
window (浏览器窗口对象)
├─ document (网页文档对象) ← DOM树根
├─ location (当前URL)
├─ history (访问历史)
├─ navigator (浏览器信息)
├─ localStorage (持久存储)
├─ setTimeout() (延迟执行)
└─ ...其他BOM功能
```

**代码示例**

```javascript
// 它们的关系
console.log(window.document === document);  // true
// window.document和document是同一个对象

// window是全局对象
console.log(window.innerWidth);   // 浏览器视口宽度
console.log(window.setTimeout);   // 计时器函数

// document是网页内容
console.log(document.title);      // 网页标题
console.log(document.body);       // <body>元素
```

------

## PART 2：BOM 基础（Pages 18–24）

------

### 2.1Q BOM是什么？DOM和BOM的核心区别是什么？ | Page 18

**核心概念 | 一句话区别**

- **DOM（Document Object Model）**：管理网页**内容**（HTML文档结构）
- **BOM（Browser Object Model）**：管理**浏览器窗口**本身及其功能

**对比表 | 深度理解**

| 维度         | DOM                      | BOM                                                          |
| ------------ | ------------------------ | ------------------------------------------------------------ |
| **管理对象** | HTML文档及其元素         | 浏览器窗口及其功能                                           |
| **核心对象** | `document`               | `window`                                                     |
| **功能示例** | 修改网页内容、样式、结构 | 导航、刷新、获取屏幕分辨率 Navigation, refresh, get screen resolution |
| **标准化**   | W3C标准                  | 无官方标准（事实标准）                                       |
| **作用范围** | 页面内                   | 浏览器级别                                                   |
| **关系**     | DOM是BOM的一部分         | BOM是顶层容器                                                |

**代码示例 | DOM vs BOM操作对比**

```javascript
// ============ DOM操作 - 修改网页内容 ============

// 修改网页中的元素
document.getElementById('title').textContent = '新标题';
// 通过DOM修改网页内容
// Modify webpage content via DOM

const newPara = document.createElement('p');
newPara.textContent = '新段落';
document.body.appendChild(newPara);
// 动态添加新元素到网页
// Dynamically add new element to webpage

// ============ BOM操作 - 控制浏览器 ============

// 获取浏览器窗口大小
console.log(window.innerWidth);   // 浏览器内视口宽度
console.log(window.innerHeight);  // 浏览器内视口高度
// Get browser window dimensions
// innerWidth/innerHeight 不包括浏览器工具栏

// 导航到新页面
window.location.href = 'https://example.com';
// 改变当前URL，跳转页面
// Change URL and navigate to new page

// 刷新页面
window.location.reload();
// 重新加载当前页面
// Reload current page

// 打开新窗口
window.open('https://example.com', 'newWindow');
// 在新窗口中打开URL
// Open URL in new window

// 显示警告框
window.alert('Hello!');
// 浏览器弹出警告，需要用户确认
// Browser shows alert dialog
```

**应用迁移 | 何时用DOM，何时用BOM**

```javascript
// 场景1：修改网页显示 → 用DOM
function updateUserProfile(user) {
    document.getElementById('name').textContent = user.name;
    document.getElementById('email').textContent = user.email;
}

// 场景2：控制浏览器行为 → 用BOM
function goBack() {
    window.history.back();  // 返回上一页
}

function getDeviceInfo() {
    const width = window.screen.width;   // 屏幕分辨率
    const userAgent = navigator.userAgent;  // 浏览器信息
    return { width, userAgent };
}
```

------

### 2.2Q location对象有什么方法和属性？如何实现页面导航？ | Page 19-20

**location对象属性表 | 获取和修改URL各部分**

假设当前URL是：`https://user:password@example.com:8080/path/file.html?id=123&name=john#section`

| 属性       | 属性名(Property) | 返回值                                                       | 说明                      |
| ---------- | ---------------- | ------------------------------------------------------------ | ------------------------- |
| `href`     | 完整URL          | `https://user:password@example.com:8080/path/file.html?id=123&name=john#section` | 完整URL，修改它会导航 ★★★ |
| `protocol` | 协议             | `https:`                                                     | URL的协议部分             |
| `host`     | 主机和端口       | `example.com:8080`                                           | 域名+端口号               |
| `hostname` | 主机名           | `example.com`                                                | 仅域名                    |
| `port`     | 端口             | `8080`                                                       | 端口号                    |
| `pathname` | 路径             | `/path/file.html`                                            | URL的路径部分             |
| `search`   | 查询字符串       | `?id=123&name=john`                                          | URL的查询参数部分         |
| `hash`     | 片段标识符       | `#section`                                                   | URL中#后的部分            |
| `username` | 用户名           | `user`                                                       | URL中的用户名（少用）     |
| `password` | 密码             | `password`                                                   | URL中的密码（少用）       |

**location对象方法表 | 页面导航**

| 方法         | 方法名(Method) | 功能                  | 说明                 |
| ------------ | -------------- | --------------------- | -------------------- |
| `assign()`   | 导航到新页面   | 加载新URL             | 等同于设置href       |
| `replace()`  | 替换当前页面   | 加载新URL但不保存历史 | 不能用back()返回     |
| `reload()`   | 刷新页面       | 重新加载当前页面      | 可强制刷新(绕过缓存) |
| `toString()` | 返回URL字符串  | 返回完整URL           | 等同于href           |

**代码示例 | 获取和修改URL**

```javascript
// ============ 获取URL各部分 ============

// 完整URL
console.log(location.href);  // https://example.com/page?id=5#top

// 分离查询参数
console.log(location.search);  // '?id=5&name=john'
// 需要手动解析查询字符串
// 现代方法：使用URLSearchParams
const params = new URLSearchParams(location.search);
console.log(params.get('id'));    // '5'
console.log(params.get('name'));  // 'john'

// 获取路径
console.log(location.pathname);   // '/page'

// 获取协议
console.log(location.protocol);   // 'https:'

// ============ 页面导航方法 ============

// 方法1：assign() - 导航到新页面，可以返回
location.assign('https://google.com');
// 加载新URL，当前页面进入历史记录

// 方法2：replace() - 导航到新页面，不能返回
location.replace('https://google.com');
// 加载新URL，替换当前历史记录条目
// 用户不能通过back()返回原页面

// 方法3：直接修改href（最常用 ★★★）
location.href = 'https://google.com';  // 等同于assign()

// 方法4：reload() - 刷新页面
location.reload();           // 从缓存刷新
location.reload(true);       // 强制刷新，忽略缓存

// ============ 修改URL的某一部分 ============

// 修改hash（不会刷新页面） ★★★
location.hash = '#section2';
// URL变为 https://example.com/page#section2
// 页面滚动到section2，但不刷新

// 修改search（会刷新页面）
location.search = '?id=10';
// URL变为 https://example.com/page?id=10
// 页面会刷新，加载新参数

// 实际场景：创建返回链接
function goBack() {
    if (document.referrer) {
        location.assign(document.referrer);  // 返回上一页
    } else {
        location.href = '/';  // 如果没有referrer，返回首页
    }
}
```

**深度理解 | assign() vs replace() 的区别**

这个区别常在考试中出现：

```javascript
// 场景：用户在页面A，导航到页面B

// ✓ 使用assign()
location.assign('pageB.html');
// 历史记录: A → B（当前）
// 用户可以点back()返回到A

// ✗ 使用replace()
location.replace('pageB.html');
// 历史记录: B（当前）
// 用户点back()返回到A之前的页面，不是A！

// 应用场景
// • 登录页面：用户登录成功后，用replace()跳转
//   （防止用户返回登录页面）
// • 内容导航：用assign()跳转
//   （用户可以返回上一页）
```

**实际场景 | 检测URL变化**

```javascript
// 监听hash变化（不刷新页面）
window.addEventListener('hashchange', function() {
    console.log('URL hash changed to:', location.hash);
    // 根据hash加载不同内容（SPA原理）
});

// 用户点击#section1，触发hashchange事件
location.hash = '#section1';

// 这个技术是单页应用(SPA)的基础
```

------

### ~~2.3Q history对象有哪些方法？如何实现页面前进和后退？ | Page 20-21~~

**history对象方法表 | 浏览历史导航**

| 方法             | 方法名(Method) | 功能                       | 说明                     |
| ---------------- | -------------- | -------------------------- | ------------------------ |
| `back()`         | 后退           | 加载历史列表中的前一个URL  | 等同于点击浏览器后退按钮 |
| `forward()`      | 前进           | 加载历史列表中的下一个URL  | 等同于点击浏览器前进按钮 |
| `go(n)`          | 跳转           | 加载历史列表中的第n个URL   | n可正可负                |
| `pushState()`    | 添加历史       | 添加历史记录不刷新页面     | HTML5新增 ★★             |
| `replaceState()` | 替换历史       | 替换当前历史记录不刷新页面 | HTML5新增 ★★             |

**代码示例 | 逐行双语对照**

```javascript
// ============ 基础导航方法 ============

// 后退一步（返回上一页）
history.back();
// 等同于点击浏览器的"后退"按钮
// Equivalent to clicking browser back button

// 前进一步（返回下一页）
history.forward();
// 如果之前后退过，可以再次前进
// If previously went back, can move forward again

// 跳转到指定位置
history.go(-1);    // 后退1页，等同于back()
history.go(1);     // 前进1页，等同于forward()
history.go(-2);    // 后退2页
history.go(3);     // 前进3页

// 检查是否可以前进/后退（某些浏览器支持）
console.log(history.length);  // 历史记录数量
// 如果length为1，说明没有前一页可以返回

// ============ HTML5 新增方法 - 不刷新页面改变URL ============

// pushState() - 添加新的历史记录
history.pushState(
    {page: 1, name: 'data'},           // state对象：可保存状态信息
    'Page 1',                          // title：浏览器标题（通常忽略）
    '/page1.html'                      // URL：显示在地址栏的URL
);
// 添加新历史记录，URL变为/page1.html，但页面不刷新
// Add new history entry, URL changes but page not reloaded
// 用户现在可以点back()返回之前的页面

// 获取状态对象
window.addEventListener('popstate', (event) => {
    console.log('popstate triggered');
    console.log(event.state);  // {page: 1, name: 'data'}
    // 用户点击back/forward时触发此事件
    // Triggered when user clicks back/forward
});

// replaceState() - 替换当前历史记录
history.replaceState(
    {page: 2},
    'Page 2',
    '/page2.html'
);
// 替换当前历史条目，不能通过back()返回这次修改前的记录
// Replace current history entry, can't return to previous via back()

// ============ 实际场景：单页应用(SPA)路由 ============

function navigateTo(pageName) {
    // 1. 获取页面内容
    fetchPageContent(pageName).then(content => {
        // 2. 更新DOM
        document.getElementById('app').innerHTML = content;
        
        // 3. 更新URL和历史记录
        history.pushState(
            {page: pageName},
            pageName,
            '/' + pageName
        );
    });
}

// 监听浏览器前进/后退
window.addEventListener('popstate', (event) => {
    if (event.state) {
        // 用户点击了back或forward
        navigateTo(event.state.page);
    }
});

// 用户点击链接时
document.querySelector('a[href="/about"]').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('about');
});
```

**深度理解 | history.go() 的安全性**

```javascript
// ⚠️ 需要小心的操作

// 这些可能导致页面错误
history.go(-10);  // 如果历史记录不足10条怎么办？
// 答案：浏览器会尽可能后退，但如果达到历史起点就停止

// 检查是否安全
if (history.length > 1) {
    history.go(-1);  // 安全地后退
} else {
    location.href = '/';  // 无法后退则导航到首页
}
```

**关键区别 | location.replace() vs history 的差异**

```javascript
// 场景：用户在历史中有 A → B → C

// location.replace('D')
// 结果：A → B → D
// C被替换为D，用户back()到B

// history.replaceState(..., '/D')
// 结果：A → B → D
// 类似，但不刷新页面

// 应用场景对比
// • location.replace()：需要完全刷新页面加载新内容
// • history.replaceState()：SPA中修改URL但保持页面状态
```

------

### ~~2.4Q navigator对象有哪些主要属性和方法？如何获取浏览器信息？ | Page 21-22~~

**navigator对象属性表 | 获取浏览器和设备信息**

| 属性                  | 属性名(Property) | 返回值示例                                    | 说明                   | 用途                |
| --------------------- | ---------------- | --------------------------------------------- | ---------------------- | ------------------- |
| `userAgent`           | 用户代理字符串   | `Mozilla/5.0 (Windows; U; Windows NT 5.1...)` | 包含浏览器、系统信息   | 检测浏览器/系统 ★★★ |
| `appName`             | 应用名称         | `Netscape`                                    | 应用程序名称（已废弃） | 少用                |
| `appVersion`          | 应用版本         | `5.0 (Windows NT 10.0...)`                    | 版本信息（精度低）     | 少用                |
| `platform`            | 操作系统平台     | `Win32` / `MacIntel` / `Linux x86_64`         | 用户的操作系统平台     | 检测系统            |
| `language`            | 浏览器语言       | `en-US` / `zh-CN`                             | 浏览器UI语言           | 国际化              |
| `onLine`              | 是否在线         | `true` / `false`                              | 网络连接状态           | 检测网络 ★★         |
| `cookieEnabled`       | Cookie是否启用   | `true` / `false`                              | 用户是否启用Cookie     | 存储权限检查        |
| `geolocation`         | 地理定位对象     | Geolocation对象                               | 用户地理位置信息       | 获取地理位置        |
| `hardwareConcurrency` | CPU核心数        | `8`                                           | 逻辑处理器数量         | 性能检测            |
| `deviceMemory`        | 设备内存         | `8` / `16`                                    | 设备总内存GB           | 性能检测            |

**代码示例 | 获取浏览器信息**

```javascript
// ============ 基础属性查询 ============

// 1. 获取完整用户代理字符串
console.log(navigator.userAgent);
// 返回类似：
// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
//  (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

// 2. 获取操作系统
console.log(navigator.platform);
// "Win32" (Windows)
// "MacIntel" (Mac)
// "Linux x86_64" (Linux)

// 3. 获取浏览器语言
console.log(navigator.language);   // 'en-US' 或 'zh-CN'
console.log(navigator.languages);  // ['en-US', 'en']

// 4. 检查网络连接
console.log(navigator.onLine);
// true = 在线，false = 离线

// ============ 浏览器检测 ============

// 解析userAgent字符串来检测浏览器
function detectBrowser() {
    const ua = navigator.userAgent;
    
    if (ua.includes('Chrome')) {
        return 'Chrome';
    } else if (ua.includes('Firefox')) {
        return 'Firefox';
    } else if (ua.includes('Safari')) {
        return 'Safari';
    } else if (ua.includes('Edge')) {
        return 'Edge';
    } else {
        return 'Unknown';
    }
}

console.log(detectBrowser());  // 输出检测到的浏览器名称

// ============ 网络状态监听 ============

// 监听网络变化
window.addEventListener('online', () => {
    console.log('网络连接已恢复 (Network restored)');
    // 尝试重新同步数据
    syncData();
});

window.addEventListener('offline', () => {
    console.log('网络连接已断开 (Network disconnected)');
    // 显示离线提示
    showOfflineNotice();
});

// 主动检查网络状态
if (navigator.onLine) {
    console.log('当前在线 (Currently online)');
} else {
    console.log('当前离线 (Currently offline)');
}

// ============ 地理定位 ============

// 获取用户地理位置（需用户授权）
navigator.geolocation.getCurrentPosition(
    (position) => {
        // 成功回调
        const latitude = position.coords.latitude;    // 纬度
        const longitude = position.coords.longitude;  // 经度
        const accuracy = position.coords.accuracy;    // 精度（米）
        
        console.log(`位置：${latitude}, ${longitude}`);
        console.log(`精度：${accuracy}米`);
    },
    (error) => {
        // 错误回调
        console.error('获取位置失败:', error.message);
        // 用户可能拒绝了权限
    }
);

// 持续追踪用户位置
const watchId = navigator.geolocation.watchPosition(
    (position) => {
        console.log('新位置:', position.coords);
    },
    (error) => {
        console.error('追踪失败:', error);
    }
);

// 停止追踪
navigator.geolocation.clearWatch(watchId);
```

**深度理解 | userAgent字符串为什么这么复杂？**

这是历史遗留问题：

```javascript
// 现代Chrome的userAgent：
// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
//  (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

// 为什么包含"Mozilla", "AppleWebKit", "Safari"？
// 答案：历史原因
// 1. "Mozilla"：Netscape浏览器时代的遗留（现已停产）
// 2. "Safari"：为了兼容检测Safari的网站，Chrome假扮自己
// 3. "Gecko"：Firefox的渲染引擎名
// 4. "WebKit"：Safari/Chrome的渲染引擎名

// 这导致userAgent字符串变得臃肿且容易欺骗
// 现代做法是使用User-Agent Client Hints API（推荐 ★★）
```

**应用迁移 | 实际场景**

```javascript
// 场景1：根据浏览器显示不同内容
function showBrowserSpecificContent() {
    const ua = navigator.userAgent;
    
    if (ua.includes('Chrome') && !ua.includes('Edge')) {
        // 仅针对Chrome的优化
        loadChromeSpecificFeature();
    }
}

// 场景2：在线/离线处理
let dataCache = [];

fetch('/api/data').then(r => r.json()).then(data => {
    dataCache = data;  // 缓存数据
});

// 离线时使用缓存
if (!navigator.onLine) {
    useCache(dataCache);
}

// 场景3：国际化（根据浏览器语言显示对应语言）
const language = navigator.language || 'en-US';
loadLanguageFile(language);
```

------

### 2.5Q 什么是Cookie？如何创建、读取、删除Cookie？ | Page 22-23

**Cookie基础概念**

Cookie是一种**客户端存储机制**，用来在用户浏览器中保存小量数据。每次发送HTTP请求时，浏览器都会自动将Cookie发送给服务器。

**Cookie的生命周期**

| 阶段     | 说明                                                   | 时机                       |
| -------- | ------------------------------------------------------ | -------------------------- |
| **创建** | 服务器通过Set-Cookie响应头创建，或客户端JavaScript创建 | 服务器响应或JavaScript执行 |
| **存储** | 浏览器将Cookie存储在本地                               | 客户端磁盘                 |
| **发送** | 每个HTTP请求自动携带相应Domain的Cookie                 | 与服务器通信               |
| **过期** | Cookie到达过期时间自动删除                             | 指定时间或关闭浏览器       |

**Cookie属性表 | 创建和配置**

| 属性         | 属性名(Property) | 示例值                          | 说明                                 |
| ------------ | ---------------- | ------------------------------- | ------------------------------------ |
| `name=value` | 键值对           | `user=john`                     | Cookie的名称和值                     |
| `expires`    | 过期时间         | `Wed, 09 Jun 2021 10:18:14 GMT` | 绝对过期时间（GMT）                  |
| `max-age`    | 最大年龄         | `3600`                          | 相对过期时间（秒数）                 |
| `path`       | 路径             | `/` 或 `/app`                   | 哪些路径可以访问此Cookie             |
| `domain`     | 域名             | `example.com`                   | 哪些域名可以访问此Cookie             |
| `secure`     | 安全标记         | -                               | 仅在HTTPS连接中发送 ★★★              |
| `httponly`   | HTTP仅标记       | -                               | JavaScript无法访问（服务器设置） ★★★ |
| `samesite`   | 同站策略         | `Strict` / `Lax`                | 防止CSRF攻击 ★★                      |

**代码示例 | 创建、读取、删除Cookie**

```javascript
// ============ 创建Cookie ============

// 1. 简单Cookie（会话Cookie，浏览器关闭时删除）
document.cookie = 'username=john';
// 设置名为username，值为john的Cookie
// 不设置expires时，浏览器关闭自动删除
// Set cookie that expires when browser closes

// 2. 持久化Cookie（指定过期时间）
document.cookie = 'remember=yes; max-age=2592000';  // 30天
// max-age=2592000 表示30天后过期
// expires或max-age任选其一

// 使用expires（旧方式，但兼容性更好）
const expiryDate = new Date();
expiryDate.setTime(expiryDate.getTime() + (30 * 24 * 60 * 60 * 1000));  // 30天后
document.cookie = `token=abc123; expires=${expiryDate.toUTCString()}`;

// 3. 带完整属性的Cookie ★★★
document.cookie = 'sessionId=xyz789; ' +
    'max-age=3600; ' +           // 1小时后过期
    'path=/; ' +                 // 网站所有路径可访问
    'domain=.example.com; ' +    // 所有子域名可访问
    'secure; ' +                 // 仅HTTPS连接发送
    'samesite=Strict';           // 防止CSRF攻击

// ============ 读取Cookie ============

// 1. 获取所有Cookie（一个长字符串）
console.log(document.cookie);
// 返回：'username=john; remember=yes; token=abc123'
// 所有Cookie用分号分隔
// Get all cookies as semicolon-separated string

// 2. 解析Cookie（常用工具函数）
function getCookie(name) {
    // 通过Cookie名称获取其值
    // Get cookie value by name
    const cookies = document.cookie.split('; ');
    
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(value);
            // 解码URL编码的值
            // Decode URL-encoded value
        }
    }
    
    return null;  // 找不到则返回null
}

// 使用例子
console.log(getCookie('username'));  // 'john'
console.log(getCookie('remember'));  // 'yes'
console.log(getCookie('nonexist'));  // null

// 3. 现代方法：Cookie对象（某些库提供）
// document.cookie.split('; ')
//     .map(c => c.split('='))
//     .reduce((obj, [k, v]) => ({...obj, [k]: decodeURIComponent(v)}), {})

// ============ 删除Cookie ============

// 1. 直接删除（设置过期时间为过去）
document.cookie = 'username=; max-age=0';
// 设置max-age为0，或expires为过去时间
// Set max-age=0 or expires to past time

// 2. 通用删除函数
function deleteCookie(name) {
    document.cookie = `${name}=; max-age=0; path=/`;
}

deleteCookie('username');
deleteCookie('remember');

// ============ 实际场景：用户记住我功能 ============

// 登录时
function login(username, password) {
    // 验证用户...
    
    // 如果用户勾选"记住我"
    if (rememberMe.checked) {
        // 存储用户名，7天过期
        document.cookie = `lastUser=${username}; max-age=${7 * 24 * 60 * 60}; path=/`;
    }
}

// 页面加载时
function loadRememberedUser() {
    const lastUser = getCookie('lastUser');
    if (lastUser) {
        document.getElementById('username').value = lastUser;
        document.getElementById('username').focus();  // 自动聚焦到密码框
    }
}

// 退出登录时
function logout() {
    deleteCookie('lastUser');
    // 清理其他敏感Cookie
}
```

**深度理解 | Cookie的安全隐患 ⚠️**

```javascript
// ❌ 不安全的做法

// 1. 在Cookie中存储敏感信息
document.cookie = 'password=mypassword123';
// 任何JavaScript都可以读取，不要这样做！
// Anyone can read this via JavaScript!

// 2. 不设置secure标记
document.cookie = 'token=secret123';  // HTTP和HTTPS都发送
// 在HTTP连接中会被中间人攻击者截获
// Can be intercepted over HTTP

// ✓ 正确做法

// 1. 服务器端设置HttpOnly（JavaScript无法读取）
// Set-Cookie: token=secret123; HttpOnly; Secure
// JavaScript不能访问这个Cookie
// JavaScript cannot access this cookie

// 2. 始终使用Secure标记
// Set-Cookie: sessionId=xyz; Secure; SameSite=Strict
// 仅HTTPS连接发送
// Only sent over HTTPS

// 3. 设置SameSite防止CSRF
// Set-Cookie: session=abc; SameSite=Strict
// 防止跨站请求伪造
// Prevents cross-site request forg
```

------

### 2.6Q localStorage和sessionStorage有什么区别？如何使用？ | Page 23-24

**Web Storage概述 | 现代存储方案**

Web Storage是HTML5引入的**客户端存储机制**，用来在浏览器中保存数据。相比Cookie，它有更大的存储空间（通常5-10MB）。

**localStorage vs sessionStorage vs Cookie对比表 | 深度对比**

| 特性             | localStorage             | sessionStorage   | Cookie            |
| ---------------- | ------------------------ | ---------------- | ----------------- |
| **存储大小**     | 5-10MB                   | 5-10MB           | 4KB               |
| **过期时间**     | 永久存储，需手动删除     | 标签页关闭时删除 | 可设置过期时间    |
| **作用域**       | 同域名下所有标签页共享   | 当前标签页隔离   | 同域名下共享      |
| **发送到服务器** | 不自动发送               | 不自动发送       | 每个请求自动发送  |
| **安全性**       | 中等（JavaScript可访问） | 中等             | 可设HttpOnly保护  |
| **访问方式**     | `localStorage`           | `sessionStorage` | `document.cookie` |
| **最佳场景**     | 持久用户偏好             | 临时会话数据     | 身份认证 ★★★      |

**代码示例 | 创建、读取、删除**

```javascript
// ============ localStorage - 持久存储 ============

// 1. 存储数据
localStorage.setItem('username', 'john');
// 键值对存储，键为'username'，值为'john'
// Set key-value pair in localStorage

localStorage.setItem('theme', 'dark');

// 2. 读取数据
const username = localStorage.getItem('username');  // 'john'
console.log(username);

// 如果键不存在，返回null
const notExist = localStorage.getItem('nonexistent');  // null
console.log(notExist);

// 3. 删除单个数据
localStorage.removeItem('username');
// 删除键为'username'的数据
// Remove specific key-value pair

// 4. 清空所有数据
localStorage.clear();
// 删除当前域名下所有localStorage数据
// Remove all localStorage data for current domain

// 5. 获取所有键
console.log(localStorage.length);  // 返回数据个数
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);  // 获取第i个键
    console.log(key);
}

// ============ sessionStorage - 会话存储 ============

// 用法完全与localStorage相同
sessionStorage.setItem('tempData', 'temporary');
console.log(sessionStorage.getItem('tempData'));  // 'temporary'

// 关闭标签页后自动删除
// sessionStorage data is automatically deleted when tab closes

// ============ 存储复杂数据（对象/数组）============

// 数据必须序列化为JSON字符串
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

// ✓ 存储对象
localStorage.setItem('user', JSON.stringify(user));
// 对象转换为JSON字符串后存储
// Convert object to JSON string before storing

// ✓ 读取对象
const storedUser = localStorage.getItem('user');
const userObj = JSON.parse(storedUser);  // 将JSON字符串转换回对象
console.log(userObj.name);  // 'John'

// ⚠️ 注意：直接存储对象不起作用
localStorage.setItem('user', user);  // ❌ 错误
// 结果会变成：'[object Object]'
// Result becomes: '[object Object]'

// ============ 监听存储变化 ============

// 当其他标签页修改localStorage时，当前标签页可以收到通知
window.addEventListener('storage', (event) => {
    console.log('Storage changed!');
    console.log('Key:', event.key);           // 改变的键
    console.log('New value:', event.newValue);  // 新值
    console.log('Old value:', event.oldValue);  // 旧值
    
    // 应用场景：多标签页同步
    // Use case: Sync data across multiple tabs
    if (event.key === 'theme') {
        applyTheme(event.newValue);
    }
});

// ============ 实际场景1：用户主题偏好 ============

function setTheme(themeName) {
    // 1. 应用主题
    document.body.className = themeName;
    
    // 2. 保存到localStorage
    localStorage.setItem('theme', themeName);
}

function loadTheme() {
    // 页面加载时恢复用户主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

// 页面加载时
loadTheme();

// 用户切换主题时
document.getElementById('themeToggle').addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// ============ 实际场景2：购物车数据（会话期间） ============

class ShoppingCart {
    constructor() {
        this.items = JSON.parse(sessionStorage.getItem('cart')) || [];
    }
    
    addItem(product) {
        this.items.push(product);
        this.save();
        // 保存到sessionStorage
        // Save cart to sessionStorage
    }
    
    getItems() {
        return this.items;
    }
    
    save() {
        sessionStorage.setItem('cart', JSON.stringify(this.items));
        // 序列化后保存
        // Serialize and save
    }
    
    clear() {
        this.items = [];
        sessionStorage.removeItem('cart');
    }
}

const cart = new ShoppingCart();
cart.addItem({id: 1, name: 'Laptop', price: 999});
// 关闭标签页后购物车自动清空
// Cart automatically clears when tab closes

// ============ 实际场景3：表单草稿自动保存 ============

const form = document.getElementById('articleForm');

// 定时保存表单内容
form.addEventListener('input', () => {
    const formData = new FormData(form);
    const data = {
        title: formData.get('title'),
        content: formData.get('content'),
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('articleDraft', JSON.stringify(data));
    console.log('Draft saved at', new Date());
});

// 页面加载时恢复草稿
window.addEventListener('load', () => {
    const draft = localStorage.getItem('articleDraft');
    if (draft) {
        const data = JSON.parse(draft);
        form.title.value = data.title;
        form.content.value = data.content;
        console.log('Draft restored');
    }
});

// 提交表单时清除草稿
form.addEventListener('submit', () => {
    localStorage.removeItem('articleDraft');
});
```

**深度理解 | localStorage的字符串转换陷阱**

```javascript
// ❌ 常见错误

const count = 5;
localStorage.setItem('count', count);

const retrievedCount = localStorage.getItem('count');
console.log(retrievedCount + 1);  // '51' 不是 6！
// 原因：localStorage存储的都是字符串
// '5' + 1 = '51' (字符串连接)

// ✓ 正确做法
localStorage.setItem('count', String(count));
const count2 = Number(localStorage.getItem('count'));
console.log(count2 + 1);  // 6 ✓

// 或者直接转换
const count3 = parseInt(localStorage.getItem('count'), 10);
```

**关键区别 | localStorage vs sessionStorage的应用选择**

```javascript
// 场景1：用户登录token - 使用localStorage
// 原因：用户刷新页面后仍需保持登录状态
localStorage.setItem('authToken', token);

// 场景2：CSRF防护token - 使用sessionStorage
// 原因：每个页面会话独立，安全性更好
sessionStorage.setItem('csrfToken', token);

// 场景3：临时表单数据 - 使用sessionStorage
// 原因：用户关闭标签页后自动清空
sessionStorage.setItem('formDraft', formData);

// 场景4：用户偏好设置 - 使用localStorage
// 原因：持久化保存，跨会话保留
localStorage.setItem('userPreferences', JSON.stringify(prefs));
```

------

## PART 3：事件驱动编程（Pages 25–35）

------

### ❗3.1Q 什么是事件？事件流的三个阶段是什么？ | Page 25-26

**事件基础概念**

事件(Event)是指**用户与网页交互时发生的事情**。当事件发生时，浏览器会通知JavaScript代码，让程序作出响应。

**事件的本质 | Why需要事件系统**

想象网页是一个收银员系统：

- 没有事件系统：网页只能显示静态内容，无法对用户操作作出反应
- 有事件系统：用户点击、输入、滚动时，程序会立即响应

事件系统是**交互式网页的基础**。

**事件流的三个阶段 | 关键知识点 ★★★**

当一个事件发生时，事件在DOM树中会经历三个阶段：

```
1. 捕获阶段 (Capturing Phase)
   ↓
   window → document → html → body → target元素
   
2. 目标阶段 (Target Phase)
   ↓
   事件到达目标元素
   
3. 冒泡阶段 (Bubbling Phase)
   ↑
   target元素 → body → html → document → window
```

**事件流详细表 | 三个阶段**

| 阶段         | 阶段名(Phase) | 方向       | 特点                         | 处理器选项                            |
| ------------ | ------------- | ---------- | ---------------------------- | ------------------------------------- |
| **捕获阶段** | Capturing     | 从外到内 ↓ | 从祖先元素向下传播，很少使用 | `addEventListener(..., true)`         |
| **目标阶段** | Target        | -          | 事件到达触发元素本身         | 任何处理器都会触发                    |
| **冒泡阶段** | Bubbling      | 从内到外 ↑ | 从触发元素向上传播，最常用   | `addEventListener(..., false)` 或默认 |

**代码示例 | 事件流的三个阶段**

```html
<!-- HTML结构 -->
<div id="outer" style="padding: 50px; background: blue;">
    <div id="middle" style="padding: 50px; background: green;">
        <button id="inner" style="padding: 20px;">Click Me</button>
    </div>
</div>

<script>
// ============ 捕获阶段演示 ============

// 为outer元素添加捕获阶段监听器
document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer (capturing)');
}, true);  // 第三个参数true表示捕获阶段
// true表示在捕获阶段处理事件
// true = handle in capturing phase

// 为middle元素添加捕获阶段监听器
document.getElementById('middle').addEventListener('click', () => {
    console.log('Middle (capturing)');
}, true);

// ============ 目标阶段 ============

const button = document.getElementById('inner');

// 添加目标阶段监听器（两种写法都会在目标阶段触发）
button.addEventListener('click', () => {
    console.log('Button (target - bubbling handler)');
}, false);  // false表示冒泡阶段

button.addEventListener('click', () => {
    console.log('Button (target - capturing handler)');
}, true);   // true表示捕获阶段

// 两个处理器都会执行，因为都会经过目标阶段

// ============ 冒泡阶段演示 ============

document.getElementById('middle').addEventListener('click', () => {
    console.log('Middle (bubbling)');
}, false);  // 第三个参数false表示冒泡阶段
// false表示在冒泡阶段处理事件
// false = handle in bubbling phase

document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer (bubbling)');
}, false);

// ============ 点击按钮时的输出顺序 ============

/*
输出：
1. Outer (capturing)       ← 捕获阶段：从外向内
2. Middle (capturing)
3. Button (target - capturing handler)
4. Button (target - bubbling handler)  ← 目标阶段
5. Middle (bubbling)       ← 冒泡阶段：从内向外
6. Outer (bubbling)

事件流的完整生命周期：
捕获 ↓ → 目标 → 冒泡 ↑
*/
</script>
```

**深度理解 | 为什么需要三个阶段？**

这是浏览器事件系统的**优雅设计**：

```javascript
// 场景：用户在表格中点击一个删除按钮

// 冒泡阶段最常用 ★★★
// 原因：从具体到抽象，符合人类思维
document.getElementById('table').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        // 处理删除操作
        // 这样不需要为每个按钮单独添加监听器
    }
});

// 捕获阶段很少用
// 应用场景：全局事件拦截（如阻止某类操作）
document.addEventListener('click', (event) => {
    if (isUserLocked()) {
        event.preventDefault();  // 在捕获阶段阻止操作
    }
}, true);
```

**关键规则 | 事件流顺序**

```javascript
// 记住这个顺序
// 1. 捕获阶段（从window向下）
// 2. 目标阶段（到达元素本身）
// 3. 冒泡阶段（从元素向上回到window）

// 99%的场景使用冒泡阶段（false或不写第三参数）
element.addEventListener('click', handler);  // 默认使用冒泡

// 特殊场景才使用捕获阶段（true）
element.addEventListener('click', handler, true);
```

------

### 3.2Q 什么是事件对象(Event Object)？它有哪些常用属性和方法？ | Page 26-28

**事件对象基础**

当事件发生时，浏览器会**自动创建一个事件对象**，并作为参数传递给事件处理器。这个对象包含了事件的所有相关信息。

**事件对象常用属性表**

| 属性                | 属性名(Property)     | 返回类型 | 说明                                      |
| ------------------- | -------------------- | -------- | ----------------------------------------- |
| `type`              | 事件类型             | String   | 事件的类型，如 'click', 'input', 'submit' |
| `target`            | 事件目标             | Element  | **触发事件的元素**（目标元素） ★★★        |
| `currentTarget`     | 当前处理器所在的元素 | Element  | 添加事件监听器的元素                      |
| `eventPhase`        | 事件阶段             | Number   | 1=捕获, 2=目标, 3=冒泡                    |
| `timeStamp`         | 事件时间戳           | Number   | 事件发生的时间（毫秒）                    |
| `bubbles`           | 是否冒泡             | Boolean  | 该事件是否会冒泡                          |
| `cancelable`        | 是否可取消           | Boolean  | 是否可以调用preventDefault()阻止默认行为  |
| `defaultPrevented`  | 默认行为是否被阻止   | Boolean  | 是否已调用preventDefault()                |
| `clientX / clientY` | 鼠标相对于视口的位置 | Number   | 鼠标离视口左/上边的距离                   |
| `pageX / pageY`     | 鼠标相对于页面的位置 | Number   | 鼠标离页面左/上边的距离（含滚动）         |
| `screenX / screenY` | 鼠标相对于屏幕的位置 | Number   | 鼠标离屏幕左/上边的距离                   |
| `offsetX / offsetY` | 鼠标相对于元素的位置 | Number   | 鼠标离元素左/上边的距离                   |
| `key`               | 按键名称（键盘事件） | String   | 按下的键，如 'Enter', 'a', 'Shift'        |
| `code`              | 按键代码（键盘事件） | String   | 按键的物理位置代码                        |

**事件对象常用方法表**

| 方法                         | 方法名(Method) | 功能                         | 说明                 |
| ---------------------------- | -------------- | ---------------------------- | -------------------- |
| `preventDefault()`           | 阻止默认行为   | 阻止事件的默认动作           | 如阻止链接跳转 ★★★   |
| `stopPropagation()`          | 停止事件传播   | 阻止事件冒泡或捕获           | 事件不再向上传播 ★★★ |
| `stopImmediatePropagation()` | 停止立即传播   | 阻止传播并阻止其他监听器执行 | 少用                 |
| `getModifierState()`         | 获取修饰键状态 | 检查Shift/Ctrl/Alt等是否按下 | 较少使用             |

**代码示例 | 事件对象的使用**

```javascript
// ============ 基础属性访问 ============

const button = document.getElementById('myButton');

button.addEventListener('click', (event) => {
    // event是事件对象，自动传入
    // event is automatically passed in as parameter
    
    console.log('事件类型:', event.type);           // 'click'
    console.log('触发元素:', event.target);         // <button>
    console.log('事件时间:', event.timeStamp);      // 1234567890
    console.log('是否冒泡:', event.bubbles);        // true
    console.log('是否可取消:', event.cancelable);   // true
});

// ============ target vs currentTarget 区别 ============

const parent = document.getElementById('parent');

parent.addEventListener('click', (event) => {
    console.log('event.target:', event.target);
    // 点击子元素时，target是子元素
    // When clicking child, target is the child element
    
    console.log('event.currentTarget:', event.currentTarget);
    // currentTarget总是添加监听器的元素（parent）
    // currentTarget is always the element where listener is attached
    
    // 如果点击parent本身：target === currentTarget
    // If clicking parent itself: target === currentTarget
});

// HTML: <div id="parent">
//         <button id="child">Click me</button>
//       </div>

// 点击button时的输出：
// event.target: <button id="child">
// event.currentTarget: <div id="parent">

// ============ 阻止默认行为 ============

// 例子1：阻止链接跳转
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();  // 阻止链接默认跳转行为
    console.log('链接被点击，但不跳转');
    
    // 可以改为AJAX加载
    loadPageViaAjax(event.target.href);
});

// 例子2：阻止表单提交
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();  // 阻止表单默认提交
    
    // 改为AJAX提交
    submitFormViaAjax(form);
});

// 例子3：阻止右键菜单
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();  // 禁用右键菜单
    showCustomMenu(event.pageX, event.pageY);
});

// ============ 停止事件传播 ============

const outer = document.getElementById('outer');
const inner = document.getElementById('inner');

outer.addEventListener('click', () => {
    console.log('Outer clicked');
});

inner.addEventListener('click', (event) => {
    console.log('Inner clicked');
    event.stopPropagation();  // 阻止事件冒泡到outer
    // 点击inner时，outer的click处理器不会执行
    // outer's click handler won't execute
});

// ============ 鼠标位置信息 ============

document.addEventListener('mousemove', (event) => {
    // clientX/clientY - 相对于视口
    // 如果页面滚动，值不变
    const clientPos = {
        x: event.clientX,
        y: event.clientY
    };
    
    // pageX/pageY - 相对于整个页面
    // 包括滚动的部分
    const pagePos = {
        x: event.pageX,
        y: event.pageY
    };
    
    // screenX/screenY - 相对于整个屏幕
    // 包括浏览器外的部分
    const screenPos = {
        x: event.screenX,
        y: event.screenY
    };
    
    console.log('Client:', clientPos);   // 常用于相对视口的操作
    console.log('Page:', pagePos);       // 常用于相对页面的操作
    console.log('Screen:', screenPos);   // 很少使用
});

// ============ 键盘事件 ============

document.addEventListener('keydown', (event) => {
    console.log('按下的键:', event.key);      // 'a', 'Enter', 'Shift'
    console.log('按键代码:', event.code);     // 'KeyA', 'Enter', 'ShiftLeft'
    
    // 检查特定键
    if (event.key === 'Enter') {
        console.log('用户按下回车键');
    }
    
    // 检查组合键
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        console.log('用户按下Ctrl+S');
        saveDocument();
    }
});

// ============ 鼠标事件中的按钮识别 ============

document.addEventListener('mousedown', (event) => {
    // event.button: 0=左键, 1=滚轮, 2=右键
    if (event.button === 0) {
        console.log('左键点击');
    } else if (event.button === 1) {
        console.log('滚轮点击');
    } else if (event.button === 2) {
        console.log('右键点击');
    }
});

// ============ 实际场景：表单验证提示 ============

document.getElementById('email').addEventListener('invalid', (event) => {
    event.preventDefault();  // 阻止浏览器默认错误提示
    
    // 显示自定义错误信息
    showError(event.target, '请输入有效的电子邮件地址');
});

// ============ 实际场景：快捷键绑定 ============

const shortcuts = {
    'ctrl+s': saveDocument,
    'ctrl+z': undoAction,
    'ctrl+y': redoAction
};

document.addEventListener('keydown', (event) => {
    const key = `${event.ctrlKey ? 'ctrl+' : ''}${event.key.toLowerCase()}`;
    
    if (shortcuts[key]) {
        event.preventDefault();
        shortcuts[key]();
    }
});
```

**深度理解 | target vs currentTarget的陷阱**

这是**最常出错**的地方：

```javascript
// ❌ 常见错误
document.getElementById('list').addEventListener('click', (event) => {
    // 假设想删除被点击的列表项
    
    const item = event.currentTarget;  // ❌ 错误
    // 这是<ul>元素，不是被点击的<li>
    
    item.remove();  // 删除了整个列表！
});

// ✓ 正确做法
document.getElementById('list').addEventListener('click', (event) => {
    const item = event.target.closest('li');  // ✓ 正确
    // 找到被点击的<li>元素
    
    if (item) {
        item.remove();
    }
});
```

**关键记住**

- `event.target`：**实际被点击的元素**（可能是嵌套子元素）
- `event.currentTarget`：**添加监听器的元素**（总是那个)

------

### 3.3Q addEventListener()方法的三个参数是什么？如何正确使用？ | Page 28-29

**addEventListener()方法语法**

```javascript
element.addEventListener(
    event,           // 第1个参数：事件类型
    handler,         // 第2个参数：处理函数
    options          // 第3个参数：选项对象或布尔值
);
```

**参数详细说明表**

| 参数        | 参数名(Parameter) | 类型              | 说明                                                       |
| ----------- | ----------------- | ----------------- | ---------------------------------------------------------- |
| **event**   | 事件类型          | String            | 事件名称，如'click', 'input', 'submit'等                   |
| **handler** | 处理函数          | Function          | 当事件触发时调用的回调函数                                 |
| **options** | 选项/捕获标记     | Boolean or Object | 可选。如果为布尔值表示useCapture；如果为对象可配置多个选项 |

**options对象属性表 | 第三个参数的详细配置**

| 属性      | 属性名(Property) | 类型        | 说明                                        | 默认值 |
| --------- | ---------------- | ----------- | ------------------------------------------- | ------ |
| `capture` | 捕获标记         | Boolean     | 是否在捕获阶段触发（true=捕获, false=冒泡） | false  |
| `once`    | 仅执行一次       | Boolean     | 事件触发后自动删除监听器                    | false  |
| `passive` | 被动监听         | Boolean     | 承诺不调用preventDefault()，允许浏览器优化  | false  |
| `signal`  | 中止信号         | AbortSignal | 用于中止监听器                              | -      |

**代码示例 | 三种使用方式**

```javascript
// ============ 方式1：简单用法（最常用）============

const button = document.getElementById('btn');

// 最常见的用法：只传前两个参数
button.addEventListener('click', (event) => {
    console.log('按钮被点击');
});

// 默认在冒泡阶段执行，相当于：
// button.addEventListener('click', handler, false);

// ============ 方式2：使用布尔值作为第三参数 ============

// 捕获阶段（true）
button.addEventListener('click', (event) => {
    console.log('捕获阶段');
}, true);

// 冒泡阶段（false）- 最常用
button.addEventListener('click', (event) => {
    console.log('冒泡阶段');
}, false);

// ============ 方式3：使用选项对象（现代写法） ============

// 单次监听（once）
button.addEventListener('click', (event) => {
    console.log('只执行一次');
}, { once: true });

// 点击一次后，监听器自动移除
// 再点击就不会有反应

// 捕获阶段 + 单次执行
button.addEventListener('click', (event) => {
    console.log('捕获阶段，仅一次');
}, { capture: true, once: true });

// 被动监听（对滚动事件性能优化）
document.addEventListener('scroll', (event) => {
    // 承诺不调用preventDefault()
    // 浏览器可以立即滚动，不必等待JS
    console.log('页面滚动中');
}, { passive: true });
// passive=true时，调用preventDefault()会被忽略

// ============ 使用AbortSignal移除监听器 ============

const controller = new AbortController();

button.addEventListener('click', (event) => {
    console.log('按钮被点击');
}, { signal: controller.signal });

// 随时可以移除监听器
controller.abort();
// 之后点击按钮不会有反应

// 实际场景：临时监听
const tempController = new AbortController();

function setupTemporaryListener() {
    document.addEventListener('scroll', updateScrollBar, {
        signal: tempController.signal,
        passive: true
    });
}

function removeTemporaryListener() {
    temp
```

------

### 3.3Q addEventListener()方法的三个参数是什么？如何正确使用？| Page 28-29（续）

```javascript
// ============ 使用AbortSignal移除监听器（续） ============

function removeTemporaryListener() {
    tempController.abort();
}

// ============ 对比旧方法：removeEventListener() ============

// ❌ removeEventListener()的问题
function handleClick(event) {
    console.log('点击');
}

button.addEventListener('click', handleClick);

// 移除需要保存函数引用
button.removeEventListener('click', handleClick);
// 必须是同一个函数引用才能移除

// 如果这样写就无法移除（匿名函数）
button.addEventListener('click', () => {
    console.log('点击');
});
// 没有引用，无法移除！

// ✓ 使用once比较方便
button.addEventListener('click', (event) => {
    console.log('自动执行一次');
}, { once: true });
// 自动移除，无需手动处理

// ✓ 使用AbortSignal最灵活
const controller = new AbortController();

button.addEventListener('click', (event) => {
    console.log('点击');
}, { signal: controller.signal });

// 任何时候都可以移除
button.style.color = 'red';
controller.abort();  // 移除监听器

// ============ passive选项的作用 ============

// 性能优化：用于scroll和touchstart事件
// 因为JS可能会调用preventDefault()来阻止默认行为
// 但实际上不需要阻止时，应该设置passive=true

// ❌ 低性能方案
document.addEventListener('scroll', (event) => {
    // 浏览器必须等待JS执行完才能滚动
    // 因为可能调用preventDefault()
    console.log('滚动');
});

// ✓ 高性能方案
document.addEventListener('scroll', (event) => {
    // 浏览器立即滚动，不等待JS
    // 承诺不调用preventDefault()
    console.log('滚动');
}, { passive: true });

// 如果在passive=true的监听器中调用preventDefault()会被忽略
document.addEventListener('touchstart', (event) => {
    event.preventDefault();  // 这会被浏览器忽略
}, { passive: true });

// ============ 实际场景1：单次执行的初始化 ============

window.addEventListener('load', (event) => {
    console.log('页面加载完成，初始化应用');
    initApp();
}, { once: true });

// 页面加载完后，这个监听器自动移除
// 即使触发load事件也不会再执行

// ============ 实际场景2：清理资源 ============

class LiveSearch {
    constructor(inputElement) {
        this.input = inputElement;
        this.controller = new AbortController();
        
        // 添加带signal的监听器
        this.input.addEventListener('input', (e) => {
            this.onSearch(e.target.value);
        }, { signal: this.controller.signal });
    }
    
    onSearch(query) {
        console.log('搜索:', query);
        // AJAX搜索...
    }
    
    destroy() {
        // 销毁组件时清理所有事件监听器
        this.controller.abort();
    }
}

const search = new LiveSearch(document.getElementById('searchBox'));

// 页面切换时
search.destroy();  // 自动移除所有监听器
```

**深度理解 | 为什么要三个参数？**

```javascript
// 参数3的演变历史

// 最初（ES3）：只支持布尔值
element.addEventListener('click', handler, false);

// 现在（ES5+）：支持选项对象
element.addEventListener('click', handler, {
    capture: false,
    once: false,
    passive: false,
    signal: undefined
});

// 好处：
// 1. 更灵活 - 可同时配置多个选项
// 2. 向后兼容 - 布尔值仍然工作
// 3. 便于扩展 - 将来可添加新选项
```

**应用建议 | 何时使用哪种方式**

```javascript
// 情况1：普通事件监听（99%的场景）
button.addEventListener('click', handleClick);

// 情况2：需要单次执行
window.addEventListener('load', initApp, { once: true });

// 情况3：需要后续移除
const controller = new AbortController();
element.addEventListener('change', handleChange, { 
    signal: controller.signal 
});
// 之后：controller.abort();

// 情况4：需要捕获阶段（少见）
element.addEventListener('click', handleCapture, { 
    capture: true 
});

// 情况5：scroll/touchstart性能优化
document.addEventListener('scroll', handleScroll, { 
    passive: true 
});
```

------

### 3.4Q 常见的事件类型有哪些？鼠标事件、键盘事件、表单事件的区别是什么？ | Page 29-31

**事件类型分类表 | 完整清单**

| 事件分类     | 事件类型(Event Type) | 触发条件           | 可冒泡 | 说明                   |
| ------------ | -------------------- | ------------------ | ------ | ---------------------- |
| **鼠标事件** | `click`              | 单击元素           | ✓      | 最常用 ★★★             |
|              | `dblclick`           | 双击元素           | ✓      | 连续点击两次           |
|              | `mousedown`          | 按下鼠标按键       | ✓      | 在click前触发          |
|              | `mouseup`            | 释放鼠标按键       | ✓      | 在click后触发          |
|              | `mousemove`          | 鼠标移动           | ✓      | 频繁触发（高性能考量） |
|              | `mouseenter`         | 鼠标进入元素       | ✗      | 不冒泡 ★★              |
|              | `mouseleave`         | 鼠标离开元素       | ✗      | 不冒泡 ★★              |
|              | `mouseover`          | 鼠标进入元素       | ✓      | 冒泡版的enter          |
|              | `mouseout`           | 鼠标离开元素       | ✓      | 冒泡版的leave          |
|              | `contextmenu`        | 右键点击           | ✓      | 弹出上下文菜单         |
|              | `wheel`              | 滚轮滚动           | ✓      | 更精确的滚动事件       |
| **键盘事件** | `keydown`            | 按下键盘按键       | ✓      | 最常用 ★★★             |
|              | `keyup`              | 释放键盘按键       | ✓      | keydown后触发          |
|              | `keypress`           | 按下产生字符的键   | ✓      | 已废弃，避免使用       |
| **表单事件** | `input`              | 输入框值改变       | ✓      | 实时触发 ★★★           |
|              | `change`             | 输入框值改变且失焦 | ✓      | 用户完成输入后 ★★★     |
|              | `submit`             | 提交表单           | ✓      | form元素上 ★★★         |
|              | `reset`              | 重置表单           | ✓      | form元素上             |
|              | `focus`              | 元素获得焦点       | ✗      | 不冒泡                 |
|              | `blur`               | 元素失去焦点       | ✗      | 不冒泡                 |
|              | `focusin`            | 元素获得焦点       | ✓      | focus的冒泡版          |
|              | `focusout`           | 元素失去焦点       | ✓      | blur的冒泡版           |
| **页面事件** | `load`               | 页面加载完毕       | ✗      | 重要 ★★★               |
|              | `unload`             | 页面卸载           | ✗      | 页面关闭/离开          |
|              | `beforeunload`       | 页面即将卸载       | ✗      | 可保存数据 ★★          |
|              | `scroll`             | 页面滚动           | ✗      | 高频触发               |
|              | `resize`             | 窗口大小改变       | ✗      | 响应式设计             |
| **拖拽事件** | `drag`               | 拖拽中             | ✓      | 频繁触发               |
|              | `dragstart`          | 拖拽开始           | ✓      | 拖拽初始               |
|              | `dragend`            | 拖拽结束           | ✓      | 拖拽完成               |
|              | `drop`               | 放下拖拽物         | ✓      | 接收拖拽               |
| **触摸事件** | `touchstart`         | 触摸开始           | ✓      | 移动设备               |
|              | `touchmove`          | 触摸移动           | ✓      | 频繁触发               |
|              | `touchend`           | 触摸结束           | ✓      | 手指离开               |

**代码示例 | 常见事件的使用**

```javascript
// ============ 鼠标事件 ============

// 1. click - 单击
document.getElementById('btn').addEventListener('click', (event) => {
    console.log('按钮被单击');
    console.log('点击位置:', event.clientX, event.clientY);
});

// 2. dblclick - 双击
document.getElementById('box').addEventListener('dblclick', (event) => {
    console.log('盒子被双击');
    // 常用于编辑功能：双击进入编辑模式
});

// 3. mousedown / mouseup - 按下/释放
document.addEventListener('mousedown', (event) => {
    console.log('鼠标按下，按键:', event.button);  // 0=左, 1=中, 2=右
});

document.addEventListener('mouseup', (event) => {
    console.log('鼠标释放');
});

// 4. mousemove - 鼠标移动（频繁触发，谨慎使用） ⚠️
let moveCount = 0;
document.addEventListener('mousemove', (event) => {
    moveCount++;
    // 可能每秒触发50-100次！
    // 应该使用节流(throttle)优化性能
});

// ✓ 改进：使用节流
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

const throttledMouseMove = throttle((event) => {
    console.log('鼠标位置:', event.clientX, event.clientY);
}, 100);  // 最多100ms执行一次

document.addEventListener('mousemove', throttledMouseMove);

// 5. mouseenter / mouseleave - 进入/离开（不冒泡） ★★★
const menu = document.getElementById('menu');
const submenu = document.getElementById('submenu');

menu.addEventListener('mouseenter', () => {
    submenu.style.display = 'block';
    console.log('鼠标进入菜单');
});

menu.addEventListener('mouseleave', () => {
    submenu.style.display = 'none';
    console.log('鼠标离开菜单');
});

// 为什么用mouseenter而不是mouseover？
// • mouseenter不冒泡 - 进入嵌套子元素时不重复触发
// • mouseover会冒泡 - 进入子元素时会再次触发

// 演示：
// <div id="parent">
//     <div id="child"></div>
// </div>

document.getElementById('parent').addEventListener('mouseover', () => {
    console.log('Parent: mouseover');
    // 进入parent时触发一次
    // 进入child时再触发一次（冒泡）
});

document.getElementById('parent').addEventListener('mouseenter', () => {
    console.log('Parent: mouseenter');
    // 无论进入child还是parent，都只触发一次（不冒泡）
});

// ============ 键盘事件 ============

// 1. keydown - 按下任何键（包括Ctrl、Shift等功能键）
document.addEventListener('keydown', (event) => {
    console.log('按下:', event.key, event.code);
    
    // 检查特定键
    if (event.key === 'Enter') {
        console.log('用户按下回车');
    }
    
    if (event.key === 'Escape') {
        console.log('用户按下ESC，关闭对话框');
        closeDialog();
    }
    
    // 检查组合键
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        console.log('Ctrl+S 保存');
        saveDocument();
    }
    
    // 检查修饰键
    console.log('Ctrl:', event.ctrlKey);
    console.log('Shift:', event.shiftKey);
    console.log('Alt:', event.altKey);
    console.log('Meta(Win/Cmd):', event.metaKey);
});

// 2. keyup - 释放键
document.addEventListener('keyup', (event) => {
    console.log('释放:', event.key);
});

// ============ 表单事件（最重要） ============

const input = document.getElementById('email');
const form = document.getElementById('form');

// 1. input - 实时输入反馈 ★★★
input.addEventListener('input', (event) => {
    const value = event.target.value;
    console.log('当前输入:', value);
    
    // 实时验证
    if (isValidEmail(value)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});

// 输出：
// 用户输入"j"时：当前输入: j
// 用户输入"o"时：当前输入: jo
// 用户输入"h"时：当前输入: joh
// 实时反馈，无需等待用户完成输入

// 2. change - 值改变且失焦 ★★★
input.addEventListener('change', (event) => {
    const value = event.target.value;
    console.log('最终输入:', value);
    
    // 只在用户完成输入并离开输入框时触发
    // 常用于保存数据
    saveUserData('email', value);
});

// 输出：
// 用户离开input时才触发一次
// 特别适合和服务器交互

// input vs change 的区别
// • input: 实时反馈，每次值改变都触发
// • change: 最终提交，用户完成输入后触发

// 3. submit - 表单提交 ★★★
form.addEventListener('submit', (event) => {
    event.preventDefault();  // 阻止默认提交行为
    
    console.log('表单被提交');
    
    // 验证表单
    if (!validateForm(form)) {
        console.log('表单验证失败');
        return;
    }
    
    // 通过AJAX提交
    submitFormViaAjax(form);
});

// 提交的触发方式：
// 1. 用户点击<button type="submit">
// 2. 用户在input框中按Enter键
// 3. form.submit()方法调用（不会触发submit事件！）

// 4. focus / blur - 焦点获得/失去 ★★
input.addEventListener('focus', (event) => {
    console.log('输入框获得焦点');
    // 可以显示帮助提示、改变样式等
    event.target.style.border = '2px solid blue';
});

input.addEventListener('blur', (event) => {
    console.log('输入框失去焦点');
    // 可以隐藏帮助提示、进行验证等
    event.target.style.border = '1px solid gray';
});

// 注意：focus/blur不冒泡
// focusin/focusout是冒泡版本
document.addEventListener('focusin', (event) => {
    console.log('任何input获得焦点:', event.target);
});

// ============ 页面事件 ============

// 1. load - 页面加载完毕 ★★★
window.addEventListener('load', (event) => {
    console.log('页面加载完毕');
    // 此时所有资源（图片、样式表等）都已加载
    // 可以安全使用DOM和资源信息
    
    initApp();  // 初始化应用
    
    const img = new Image();
    console.log('图片大小:', img.width, img.height);  // 现在有正确值
});

// 注意：DOMContentLoaded vs load
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM构建完毕（不等待图片等外部资源）');
    // 触发时间更早，通常用于DOM操作
});

// load触发时间更晚，但资源完全就绪

// 2. beforeunload - 页面即将卸载 ★★
window.addEventListener('beforeunload', (event) => {
    // 检查是否有未保存数据
    if (hasUnsavedData()) {
        // 显示确认对话框
        event.preventDefault();
        event.returnValue = '你有未保存的数据，确定要离开吗？';
    }
});

// 3. scroll - 页面滚动
window.addEventListener('scroll', (event) => {
    console.log('页面滚动，当前位置:', window.scrollY);
    // 频繁触发，需要优化性能
    // 可用于无限加载、吸顶导航等
}, { passive: true });

// 4. resize - 窗口大小改变
window.addEventListener('resize', (event) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log('窗口大小:', width, 'x', height);
    
    // 响应式适应
    if (width < 768) {
        activateMobileLayout();
    } else {
        activateDesktopLayout();
    }
});
```

**深度理解 | 为什么有mouseover/mouseout和mouseenter/mouseleave？**

```javascript
// 这是一个历史遗留和使用场景的区别

// 场景：嵌套菜单
// <div class="menu">
//     <ul>
//         <li>选项1</li>
//         <li>选项2</li>
//     </ul>
// </div>

const menu = document.querySelector('.menu');

// ❌ 使用mouseover的问题
menu.addEventListener('mouseover', () => {
    console.log('mouseover触发');
    // 鼠标进入menu时触发 ✓
    // 但当鼠标进入li时也触发 ✗（冒泡导致）
    // 导致处理逻辑重复或复杂
});

// ✓ 使用mouseenter的优势
menu.addEventListener('mouseenter', () => {
    console.log('mouseenter触发');
    // 只在鼠标真正进入menu时触发一次
    // 无论在子元素中移动都不会重复触发
});

// 结论：
// • 菜单/下拉框：使用mouseenter/mouseleave
// • 需要精确控制冒泡：使用mouseover/mouseout
// • 现代代码：优先使用mouseenter/mouseleave ★★★
```

------

### 3.5Q 什么是表单验证？客户端验证和服务器端验证有什么区别？ | Page 32-35

**表单验证的重要性 ★★★**

表单验证分为两层：

- **客户端验证(Client-side)**：提升用户体验，减少服务器负担
- **服务器端验证(Server-side)**：保证数据安全，不能省略

**验证层次对比表**

| 维度         | 客户端验证        | 服务器端验证       |
| ------------ | ----------------- | ------------------ |
| **位置**     | 浏览器JavaScript  | 服务器后端         |
| **何时执行** | 用户输入时/提交时 | 表单提交到服务器后 |
| **速度**     | 快（本地执行）    | 慢（需网络往返）   |
| **用户体验** | 好（即时反馈）    | 一般（等待响应）   |
| **安全性**   | 低（可被绕过） ⚠️  | 高（必须执行） ★★★ |
| **是否必须** | 否（可选优化）    | 是（不能省略）     |
| **绕过方式** | 禁用JS、修改HTML  | 无法绕过           |

**关键原则 ★★★**

```
客户端验证 = 用户体验优化（not 安全保证）
服务器端验证 = 数据安全保证（必须的）

永远不要信任客户端验证！
Always validate on server!
```

**代码示例 | 完整的表单验证**

```html
<!-- HTML表单 -->
<form id="registerForm">
    <div>
        <label>用户名 (Username)</label>
        <input type="text" id="username" name="username" required>
        <span class="error" id="usernameError"></span>
    </div>
    
    <div>
        <label>邮箱 (Email)</label>
        <input type="email" id="email" name="email" required>
        <span class="error" id="emailError"></span>
    </div>
    
    <div>
        <label>密码 (Password)</label>
        <input type="password" id="password" name="password" required>
        <span class="error" id="passwordError"></span>
    </div>
    
    <div>
        <label>确认密码 (Confirm Password)</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required>
        <span class="error" id="confirmError"></span>
    </div>
    
    <button type="submit">注册 (Register)</button>
</form>

<script>
// ============ 验证规则定义 ============

const validators = {
    // 验证用户名：3-20字符，仅字母和数字
    username: (value) => {
        if (!value) return '用户名不能为空 (Username is required)';
        if (value.length < 3) return '用户名至少3个字符 (Min 3 characters)';
        if (value.length > 20) return '用户名最多20个字符 (Max 20 characters)';
        if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            return '用户名只能包含字母、数字和下划线 (Only letters, numbers, underscore)';
        }
        return '';  // 验证通过，返回空字符串
    },
    
    // 验证邮箱
    email: (value) => {
        if (!value) return '邮箱不能为空 (Email is required)';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return '请输入有效的邮箱地址 (Please enter valid email)';
        }
        return '';
    },
    
    // 验证密码：至少8字符，包含大小写和数字
    password: (value) => {
        if (!value) return '密码不能为空 (Password is required)';
        if (value.length < 8) return '密码至少8个字符 (Min 8 characters)';
        if (!/[A-Z]/.test(value)) return '密码需要包含大写字母 (Need uppercase)';
        if (!/[a-z]/.test(value)) return '密码需要包含小写字母 (Need lowercase)';
        if (!/[0-9]/.test(value)) return '密码需要包含数字 (Need number)';
        return '';
    },
    
    // 验证确认密码：必须与密码一致
    confirmPassword: (value, form) => {
        if (!value) return '请再次输入密码 (Please confirm password)';
        const password = form.password.value;
        if (value !== password) {
            return '两次输入的密码不一致 (Passwords do not match)';
        }
        return '';
    }
};

// ============ 实时验证（input事件） ============

const form = document.getElementById('registerForm');

['username', 'email', 'password', 'confirmPassword'].forEach(fieldName => {
    const field = form[fieldName];
    
    field.addEventListener('input', (event) => {
        // 实时验证，用户输入时立即反馈
        // Real-time validation as user types
        
        const error = validators[fieldName](
            event.target.value,
            form
        );
        
        const errorElement = document.getElementById(fieldName + 'Error');
        
        if (error) {
            // 验证失败，显示错误信息
            errorElement.textContent = error;
            field.classList.add('invalid');
            field.classList.remove('valid');
        } else {
            // 验证成功
            errorElement.textContent = '';
            field.classList.add('valid');
            field.classList.remove('invalid');
        }
    });
});

// ============ 表单提交验证 ============

form.addEventListener('submit', (event) => {
    event.preventDefault();  // 阻止默认提交
    
    console.log('提交表单');
    
    // 验证所有字段
    let isFormValid = true;
    
    Object.keys(validators).forEach(fieldName => {
        const field = form[fieldName];
        const error = validators[fieldName](field.value, form);
        
        const errorElement = document.getElementById(fieldName + 'Error');
        
        if (error) {
            errorElement.textContent = error;
            field.classList.add('invalid');
            field.classList.remove('valid');
            isFormValid = false;
        } else {
            errorElement.textContent = '';
            field.classList.add('valid');
            field.classList.remove('invalid');
        }
    });
    
    if (!isFormValid) {
        console.log('表单验证失败，不提交');
        return;
    }
    
    console.log('表单验证成功，准备提交');
    
    // 提交表单到服务器
    submitFormToServer(form);
});

// ============ 服务器端验证（通过AJAX） ============

function submitFormToServer(form) {
    const formData = new FormData(form);
    
    fetch('/api/register', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('注册成功！');
            // 重定向到登录页面
            window.location.href = '/login';
        } else {
            // 服务器验证失败
            console.error('注册失败:', data.errors);
            
            // 显示服务器端的验证错误
            Object.entries(data.errors).forEach(([field, error]) => {
                const errorElement = document.getElementById(field + 'Error');
                errorElement.textContent = error;
                form[field].classList.add('invalid');
            });
        }
    })
    .catch(error => {
        console.error('提交失败:', error);
        alert('网络错误，请重试');
    });
}

// ============ HTML5内置验证（补充） ============

// HTML5提供了一些内置验证属性
// <input type="email" required>  // 自动验证邮箱格式
// <input type="number" min="0" max="100">  // 数字范围验证
// <input pattern="[0-9]{3}-[0-9]{4}">  // 正则模式验证

// 但不能完全依赖HTML5验证，因为：
// 1. 用户可以禁用JavaScript
// 2. 用户可以修改HTML
// 3. 攻击者可以直接发送请求

// 始终在服务器端再次验证！
</script>

<style>
input.invalid {
    border: 2px solid red;
    background-color: #ffeeee;
}

input.valid {
    border: 2px solid green;
    background-color: #eeffee;
}

.error {
    color: red;
    display: block;
    font-size: 12px;
    margin-top: 4px;
}
</style>
```

**深度理解 | 客户端验证的缺陷**

```javascript
// ⚠️ 客户端验证很容易被绕过

// 方法1：禁用JavaScript
// <noscript>提醒用户启用
```

------

### 3.5Q 什么是表单验证？客户端验证和服务器端验证有什么区别？ | Page 32-35（续）

**深度理解 | 客户端验证的缺陷（续）**

```javascript
// ⚠️ 客户端验证很容易被绕过

// 方法1：禁用JavaScript
// 用户在浏览器中禁用JS，所有客户端验证失效

// 方法2：修改HTML
// <input type="password"> 改为 <input type="text">
// 或删除required属性

// 方法3：使用开发者工具修改DOM
// document.getElementById('email').value = 'invalid@';
// 直接提交

// 方法4：绕过AJAX验证
// 使用curl或Postman直接发送请求
// curl -X POST https://example.com/register \
//   -d "username=admin&password=123"

// ✓ 正确的做法

// 1. 服务器端验证（必须）
// POST /register
// 后端验证：
// - 检查用户名是否存在
// - 检查邮箱格式
// - 检查密码强度
// - 检查是否是机器人（CAPTCHA）

// 2. 客户端验证（可选优化）
// 目的：改善用户体验，减少无效请求

// 分层验证策略
// 第1层：客户端（用户体验）→ 快速反馈
// 第2层：服务器（数据安全）→ 最终决定

console.log('永远不要只依赖客户端验证！');
console.log('Always implement server-side validation!');
```

**实际场景 | 完整的验证流程**

```javascript
// ============ 场景：用户注册 ============

// 客户端流程
class RegistrationForm {
    constructor(formElement) {
        this.form = formElement;
        this.setupValidation();
        this.setupSubmit();
    }
    
    setupValidation() {
        // 1. 实时验证（input事件）
        this.form.addEventListener('input', (e) => {
            if (e.target.name === 'username') {
                this.validateUsername(e.target.value);
            }
            if (e.target.name === 'email') {
                this.validateEmail(e.target.value);
            }
        });
    }
    
    validateUsername(username) {
        // 客户端快速验证
        const error = document.getElementById('usernameError');
        
        if (!username) {
            error.textContent = '用户名不能为空';
            return false;
        }
        
        if (username.length < 3) {
            error.textContent = '用户名至少3个字符';
            return false;
        }
        
        error.textContent = '';
        return true;
    }
    
    validateEmail(email) {
        const error = document.getElementById('emailError');
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!regex.test(email)) {
            error.textContent = '请输入有效的邮箱';
            return false;
        }
        
        error.textContent = '';
        return true;
    }
    
    setupSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 2. 提交前验证
            if (!this.validateAll()) {
                return;
            }
            
            // 3. 发送到服务器
            this.submitToServer();
        });
    }
    
    validateAll() {
        const username = this.form.username.value;
        const email = this.form.email.value;
        const password = this.form.password.value;
        
        const usernameValid = this.validateUsername(username);
        const emailValid = this.validateEmail(email);
        // ... 其他字段验证
        
        return usernameValid && emailValid;  // 所有字段都通过
    }
    
    submitToServer() {
        const formData = new FormData(this.form);
        
        fetch('/api/register', {
            method: 'POST',
            body: formData
        })
        .then(r => r.json())
        .then(data => {
            if (data.success) {
                alert('注册成功！');
                window.location.href = '/dashboard';
            } else {
                // 显示服务器验证错误
                this.showServerErrors(data.errors);
            }
        })
        .catch(error => {
            alert('网络错误：' + error.message);
        });
    }
    
    showServerErrors(errors) {
        // 服务器返回的验证错误
        // 例如：{ username: '用户名已存在', email: '邮箱已被使用' }
        
        Object.entries(errors).forEach(([field, message]) => {
            const errorElement = document.getElementById(field + 'Error');
            if (errorElement) {
                errorElement.textContent = message;
            }
        });
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new RegistrationForm(document.getElementById('registerForm'));
});

// ============ 服务器端验证伪代码 ============

/*
后端代码（以Node.js为例）

POST /api/register
{
    username: "john_doe",
    email: "john@example.com",
    password: "SecurePass123"
}

验证步骤：
1. 检查必填字段
   if (!username || !email || !password) {
       return { success: false, errors: {...} }
   }

2. 验证格式
   if (!isValidEmail(email)) {
       return { success: false, errors: { email: '邮箱格式错误' } }
   }

3. 检查唯一性（数据库查询）
   const existingUser = db.findUser({ username });
   if (existingUser) {
       return { success: false, errors: { username: '用户名已存在' } }
   }

4. 检查是否是机器人（CAPTCHA验证）

5. 密码加密存储
   const hashedPassword = bcrypt.hash(password);

6. 创建账户
   db.createUser({ username, email, password: hashedPassword });

7. 返回成功
   return { success: true, message: '注册成功' };
*/
```

**关键规则总结 ★★★**

```
表单验证三层模型：

第1层：HTML5原生验证
    <input type="email" required>
    优点：无需JavaScript
    缺点：易被绕过

第2层：客户端JavaScript验证  ← 用户体验
    实时反馈、减少无效请求
    优点：快速、友好
    缺点：可被绕过

第3层：服务器端验证  ← 数据安全
    最终验证、业务逻辑验证
    优点：无法绕过
    缺点：延迟大

必须实现：第3层（服务器端）
推荐实现：第2+第3层（最佳实践）
可选实现：第1层（增强体验）

顺序：HTML5 → JavaScript → Server
信任度：Server >> JavaScript >> HTML5
```

------

## PART 4：jQuery 基础（Pages 37–44）

------

### 4.1Q jQuery是什么？为什么要使用jQuery？它与原生JavaScript有什么关系？ | Page 37-38

**jQuery基本概念**

jQuery是一个**JavaScript库**，提供了一套简洁易用的API来操作DOM、处理事件、执行AJAX等常见任务。核心目标是"**Write Less, Do More**"。

**jQuery的历史地位**

```
时间线：
2006年 → jQuery发布（解决浏览器兼容性问题）
2010年代 → jQuery统治前端（90%的网站使用）
2015年+ → 现代框架崛起（React、Vue、Angular）
2020年+ → jQuery逐渐退出（现代JS足够强大）

现状（2024年）：
• 大型遗留项目：仍在使用jQuery
• 新项目：极少使用jQuery
• 学习价值：理解前端演进历史 ★★★
```

**jQuery vs 原生JavaScript对比表**

| 任务             | 原生JavaScript                           | jQuery                             |
| ---------------- | ---------------------------------------- | ---------------------------------- |
| **选择元素**     | `document.getElementById('id')`          | `$('#id')`                         |
| **修改内容**     | `element.innerHTML = '...'`              | `$('#id').html('...')`             |
| **添加类**       | `element.classList.add('class')`         | `$('#id').addClass('class')`       |
| **添加事件**     | `element.addEventListener('click', ...)` | `$('#id').click(function() {...})` |
| **AJAX**         | `fetch(url).then(...)`                   | `$.ajax({url: ...})`               |
| **代码行数**     | 多                                       | 少（3-5倍）                        |
| **性能**         | 快                                       | 略慢（但差异小）                   |
| **浏览器兼容性** | 需手工处理                               | 自动处理 ★★★                       |
| **学习曲线**     | 陡峭                                     | 平缓                               |

**代码对比 | 为什么jQuery曾经流行**

```javascript
// ============ 场景：获取元素并修改样式 ============

// 原生JavaScript（ES5）
var elements = document.getElementsByClassName('item');
for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = 'red';
}
// 3行变成7行代码

// jQuery
$('.item').css('color', 'red');
// 一行代码！

// 现代JavaScript（ES6+）
document.querySelectorAll('.item').forEach(el => {
    el.style.color = 'red';
});
// 结合了原生和jQuery的优点

// ============ 场景：处理浏览器兼容性 ============

// 原生JavaScript（兼容老浏览器）
var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');  // IE6
}
// 需要处理多个浏览器特定代码

// jQuery（自动处理）
$.ajax({
    url: '/api/data',
    success: function(data) {
        console.log(data);
    }
});
// jQuery内部处理所有兼容性

// 现代JavaScript（自动兼容）
fetch('/api/data')
    .then(r => r.json())
    .then(data => console.log(data));
// 现代浏览器已统一API
```

**深度理解 | jQuery为什么衰落？**

```javascript
// 原因1：ES6让原生JavaScript更强大

// jQuery时代（2010年）
var items = $('.item');
items.each(function() {
    console.log($(this).text());
});

// 现代JavaScript
const items = document.querySelectorAll('.item');
items.forEach(el => {
    console.log(el.textContent);
});

// forEach比each更原生、更快

// 原因2：浏览器兼容性问题解决了
// 2015年，IE6/7/8基本淘汰
// 现代浏览器API统一
// jQuery的兼容性优势消失

// 原因3：现代框架的出现
// React、Vue、Angular：数据驱动、组件化
// 比手工操作DOM更高效、更易维护

// 原因4：性能优化
// jQuery操作DOM比现代框架慢
// 现代项目更看重性能

结论：
jQuery是一个伟大的库，解决了其时代的问题
但时代已经改变，现代项目应该使用现代工具
学习jQuery能帮助理解前端演进
```

**应用迁移 | 何时还需要jQuery？**

```javascript
// 场景1：维护老项目
// 公司有大量jQuery代码，维护比重写便宜

// 场景2：简单网站
// 纯静态页面，不需要复杂框架
// jQuery足够了

// 场景3：学习历史
// 理解前端技术演进
// 面试可能被问到

// 场景4：避免
// 新项目 ✗ 不要用jQuery
// 学习现代框架应该优先
```

------

### 4.2Q jQuery的$()函数和对象是什么？jQuery对象与DOM对象有什么区别？ | Page 38-39

**jQuery核心概念**

jQuery的核心是**$()函数**（也叫jQuery()），它返回一个**jQuery对象**，而不是原生的DOM对象。这是使用jQuery的基础。

**$()函数的作用**

$()函数将DOM元素**包装成jQuery对象**，提供jQuery的链式方法调用。

**代码示例 | 理解$()和jQuery对象**

```javascript
// ============ 基本用法 ============

// 1. 通过选择器获取元素
const $button = $('#myButton');    // 获取ID为myButton的元素
// $button是一个jQuery对象，不是DOM对象

const $items = $('.item');         // 获取所有class为item的元素
// 返回jQuery对象集合

const $divs = $('div');            // 获取所有div元素

// 2. 通过DOM对象创建jQuery对象
const domElement = document.getElementById('myButton');
const $element = $(domElement);    // 将DOM对象包装成jQuery对象

// 3. 通过HTML字符串创建jQuery对象
const $newDiv = $('<div class="box">Hello</div>');
// 创建新的HTML元素

// ============ jQuery对象 vs DOM对象 ============

// 获取元素的两种方式对比
const domElement = document.getElementById('myButton');
const $element = $('#myButton');

console.log(typeof domElement);    // 'object' (HTMLButtonElement)
console.log(typeof $element);      // 'object' (jQuery对象)

console.log(domElement instanceof HTMLElement);  // true
console.log($element instanceof jQuery);         // true
console.log($element instanceof HTMLElement);    // false

// ============ 互相转换 ============

// jQuery对象 → DOM对象
const $btn = $('#myButton');
const domBtn = $btn[0];            // 获取jQuery对象中的第一个DOM元素
const domBtn2 = $btn.get(0);       // 另一种方式

console.log(domBtn instanceof HTMLElement);  // true

// DOM对象 → jQuery对象
const domElement = document.getElementById('myButton');
const $element = $(domElement);    // 包装成jQuery对象

// ============ jQuery对象的链式调用 ============

// jQuery的强大特性：链式调用
$('#myButton')
    .css('color', 'red')           // 修改样式
    .addClass('highlight')         // 添加类
    .text('Click Me!')             // 修改文本
    .on('click', function() {      // 添加事件
        console.log('clicked');
    });

// 为什么能链式调用？
// 因为每个jQuery方法都返回jQuery对象本身

// ============ jQuery对象的集合操作 ============

// jQuery对象可以包含多个元素
const $items = $('.item');
console.log($items.length);        // 获取元素个数

// 遍历集合
$items.each(function(index, element) {
    // index: 当前索引
    // element: 当前DOM元素（不是jQuery对象）
    console.log(index, element);
    
    // 如果要在回调中使用jQuery方法，需要包装
    $(element).css('color', 'blue');
    
    // 或使用this
    $(this).css('color', 'blue');
});

// ============ 常见错误 ============

// ❌ 错误1：混淆jQuery对象和DOM对象
const $input = $('#myInput');
$input.value = 'hello';            // ❌ 错误！jQuery对象没有value属性
$input.textContent = 'hello';      // ❌ 错误！

// ✓ 正确做法
$input.val('hello');               // jQuery方法
$input[0].value = 'hello';         // 先转换为DOM对象
$(#myInput).prop('value', 'hello'); // jQuery prop方法

// ❌ 错误2：DOM方法用在jQuery对象上
const $div = $('#myDiv');
$div.addEventListener('click', handler);  // ❌ 错误！

// ✓ 正确做法
$div.on('click', handler);         // jQuery方法
$div[0].addEventListener('click', handler);  // 转换为DOM对象

// ✓ 两个库的混用
const $element = $('#myElement');

// jQuery方法
$element.css('color', 'red');

// DOM方法需要转换
$element[0].addEventListener('click', handler);
```

**深度理解 | 为什么要有jQuery对象？**

```javascript
// jQuery对象的优势：统一接口和链式调用

// 场景：修改元素的多个属性

// 原生JavaScript（冗长）
const element = document.getElementById('box');
element.style.backgroundColor = 'red';
element.style.borderRadius = '5px';
element.style.padding = '10px';
element.className += ' active';
element.innerHTML = 'Hello';

// jQuery（简洁）
$('#box')
    .css({
        backgroundColor: 'red',
        borderRadius: '5px',
        padding: '10px'
    })
    .addClass('active')
    .html('Hello');

// 现代JavaScript（也简洁）
const element = document.getElementById('box');
Object.assign(element.style, {
    backgroundColor: 'red',
    borderRadius: '5px',
    padding: '10px'
});
element.classList.add('active');
element.innerHTML = 'Hello';
```

------

### 4.3Q jQuery的选择器有哪些？如何使用选择器获取元素？ | Page 39-40

**jQuery选择器完整表 | 支持CSS选择器**

| 类型           | 选择器语法                         | 说明                       | 示例                 |
| -------------- | ---------------------------------- | -------------------------- | -------------------- |
| **ID选择器**   | `$('#id')`                         | 选择ID为id的元素           | `$('#header')`       |
| **类选择器**   | `$('.class')`                      | 选择class为class的所有元素 | `$('.item')`         |
| **标签选择器** | `$('tag')`                         | 选择所有指定标签的元素     | `$('p')`             |
| **属性选择器** | `$('[attr="value"]')`              | 选择属性值匹配的元素       | `$('[data-id="5"]')` |
| **后代选择器** | `$('parent child')`                | 选择parent内的所有child    | `$('ul li')`         |
| **子选择器**   | `$('parent > child')`              | 选择parent的直接子元素     | `$('ul > li')`       |
| **相邻选择器** | `$('prev + next')`                 | 选择紧邻prev的next元素     | `$('h2 + p')`        |
| **通用选择器** | `$('*')`                           | 选择所有元素               | `$('*')`             |
| **组合选择器** | `$('sel1, sel2')`                  | 选择sel1或sel2的所有元素   | `$('h1, h2, h3')`    |
| **jQuery专有** | `:first`, `:last`, `:even`, `:odd` | jQuery扩展的伪选择器       | `$('li:first')`      |

**jQuery选择器特殊扩展表 | jQuery独有的选择器**

| 选择器            | 说明                      | 示例                          |
| ----------------- | ------------------------- | ----------------------------- |
| `:first`          | 第一个匹配元素            | `$('li:first')` 第一个li      |
| `:last`           | 最后一个匹配元素          | `$('li:last')` 最后一个li     |
| `:even`           | 偶数位置的元素（0-based） | `$('tr:even')` 偶数行         |
| `:odd`            | 奇数位置的元素            | `$('tr:odd')` 奇数行          |
| `:eq(n)`          | 第n个元素（0-based）      | `$('li:eq(2)')` 第3个li       |
| `:gt(n)`          | 索引大于n的元素           | `$('li:gt(2)')` 第4个之后的li |
| `:lt(n)`          | 索引小于n的元素           | `$('li:lt(2)')` 前2个li       |
| `:contains(text)` | 包含指定文本的元素        | `$('li:contains("Apple")')`   |
| `:visible`        | 可见的元素                | `$(':visible')`               |
| `:hidden`         | 隐藏的元素                | `$(':hidden')`                |
| `:checked`        | 被选中的复选框/单选框     | `$(':checked')`               |
| `:enabled`        | 启用的表单元素            | `$('input:enabled')`          |
| `:disabled`       | 禁用的表单元素            | `$('input:disabled')`         |

**代码示例 | 选择器使用**

```javascript
// ============ 基础选择器 ============

// 1. ID选择器
const $header = $('#header');      // <div id="header">

// 2. 类选择器
const $items = $('.item');         // 所有class="item"的元素

// 3. 标签选择器
const $paragraphs = $('p');        // 所有<p>标签

// 4. 属性选择器
const $disabled = $('input[disabled]');  // 所有disabled的input
const $dataId = $('[data-id="5"]');      // data-id为5的元素

// ============ 组合选择器 ============

// 1. 后代选择器（空格）
const $menuItems = $('#menu li');   // menu内的所有li

// 2. 子选择器（>）
const $directLi = $('ul > li');    // 直接子li，不包含嵌套ul的li

// 3. 相邻选择器（+）
const $nextP = $('h2 + p');        // h2紧邻的第一个p

// 4. 组合多个选择器（,）
const $headings = $('h1, h2, h3');  // 所有标题

// ============ jQuery特殊选择器 ============

// 1. 获取第一个/最后一个
const $firstItem = $('.item:first');    // 第一个item
const $lastItem = $('.item:last');      // 最后一个item

// 2. 按位置获取
const $rows = $('tr:even');             // 偶数行（0,2,4...）
const $cols = $('tr:odd');              // 奇数行（1,3,5...）
const $third = $('li:eq(2)');           // 第3个li（0-based）

// 3. 过滤元素
const $bigItems = $('li:gt(5)');        // 索引>5的li
const $smallItems = $('li:lt(5)');      // 索引<5的li

// 4. 文本内容过滤
const $apple = $('li:contains("Apple")');  // 包含"Apple"的li

// 5. 可见性过滤
const $visible = $('div:visible');      // 可见的div
const $hidden = $('div:hidden');        // 隐藏的div

// 6. 表单状态过滤
const $checked = $('input:checked');    // 被选中的复选框
const $enabled = $('input:enabled');    // 启用的input
const $disabled = $('input:disabled');  // 禁用的input

// ============ 选择器组合使用 ============

// 复杂选择：表单中所有启用的文本输入框
const $textInputs = $('form input[type="text"]:enabled');

// 选择第一个表格的偶数行
const $evenRows = $('table:first tr:even');

// 选择data属性匹配的元素
const $data = $('[data-status="active"]');

// ============ 选择器性能优化 ============

// ❌ 低效：让jQuery每次都重新搜索
for (let i = 0; i < 1000; i++) {
    $('ul li').css('color', 'red');  // 每次循环都搜索所有li
}

// ✓ 高效：缓存选择结果
const $items = $('ul li');           // 只搜索一次
$items.css('color', 'red');          // 复用结果

// ✓✓ 更高效：一次性操作
$('ul li').css('color', 'red');

// ============ 实际场景：表格行选择 ============

// HTML: <table id="users">
//         <tr><td>John</td><td>30</td></tr>
//         <tr><td>Jane</td><td>28</td></tr>
//         <tr><td>Bob</td><td>32</td></tr>
//       </table>

// 高亮偶数行
$('#users tr:even').css('background', '#f0f0f0');

// 或更清晰的方式
$('#users tbody tr:even').addClass('stripe');

// 隐藏超过50岁的用户（需要检查内容）
$('#users tr').each(function() {
    const age = parseInt($(this).find('td:eq(1)').text());
    if (age > 50) {
        $(this).hide();
    }
});

// ============ 选择器vs querySelectorAll对比 ============

// jQuery选择器
$('li:eq(2)');           // 第3个li

// CSS选择器（querySelectorAll）
document.querySelectorAll('li')[2];  // 需要先选所有再取index

// 差异：jQuery的伪选择器(:eq, :gt等)
// CSS选择器中没有对应物
// 需要用JavaScript处理
```

**深度理解 | jQuery伪选择器 vs CSS选择器**

```javascript
// jQuery支持一些CSS中没有的伪选择器
// 这是jQuery被现代CSS选择器逐步替代的原因

// jQuery时代
$('tr:odd');           // 奇数行

// 现代CSS（:nth-child）
document.querySelectorAll('tr:nth-child(odd)');

// jQuery时代
$('li:contains("text")');  // 包含文本

// 现代方式（无直接选择器，需要JS过滤）
Array.from(document.querySelectorAll('li'))
    .filter(li => li.textContent.includes('text'));

// 结论：
// • jQuery伪选择器曾是优势
// • 现代CSS和JavaScript都足够强大
// • jQuery的选择器优势已不明显
```

------

### 4.4Q jQuery如何操作DOM？如何修改内容、属性、样式和类名？ | Page 40-42

**jQuery DOM操作方法表 | 完整清单**

| 方法类别     | 方法名               | 功能              | 说明                |
| ------------ | -------------------- | ----------------- | ------------------- |
| **内容操作** | `html()`             | 获取/设置HTML内容 | 包含标签            |
|              | `text()`             | 获取/设置文本内容 | 仅文本              |
|              | `val()`              | 获取/设置表单值   | 用于input/select    |
| **属性操作** | `attr(name)`         | 获取/设置HTML属性 | 标准属性            |
|              | `removeAttr(name)`   | 移除属性          | 删除属性            |
|              | `prop(name)`         | 获取/设置DOM属性  | 如checked, selected |
| **样式操作** | `css(name)`          | 获取/设置CSS样式  | 单个或多个          |
|              | `addClass(class)`    | 添加类            | 推荐用 ★★★          |
|              | `removeClass(class)` | 移除类            | 推荐用 ★★★          |
|              | `toggleClass(class)` | 切换类            | 有则删，无则加      |
|              | `hasClass(class)`    | 判断是否有类      | 返回boolean         |
| **元素操作** | `append()`           | 追加为子元素      | 内部末尾            |
|              | `prepend()`          | 前置为子元素      | 内部开头            |
|              | `before()`           | 插入到前面        | 外部前面            |
|              | `after()`            | 插入到后面        | 外部后面            |
|              | `remove()`           | 删除元素          | 移除自己            |
|              | `empty()`            | 清空内容          | 保留元素            |

**代码示例 | DOM操作详解**

```javascript
// ============ 内容操作 ============

// 1. html() - 获取/设置HTML
const $box = $('#box');

// 获取HTML内容
console.log($box.html());           // 返回：<p>Hello</p>

// 设置HTML内容
$box.html('<p>新内容</p>');         // 替换为新HTML
// Set HTML content to new HTML

// 2. text() - 获取/设置纯文本
console.log($box.text());           // 返回：Hello（不包含标签）

// 设置文本内容
$box.text('新文本');                 // 自动转义HTML
// Set text content (HTML is escaped)

// ✓ 区别演示
const $div = $('<div>');

$div.html('<script>alert("xss")</script>');
// HTML设置，脚本会执行（危险！）

$div.text('<script>alert("xss")</script>');
// 文本设置，脚本作为纯文本显示（安全）

// 3. val() - 获取/设置表单值
const $input = $('#email');

// 获取input值
const email = $input.val();
// Get input value

// 设置input值
$input.val('user@example.com');
// Set input value

// 用于各种表单元素
$('select').val('option2');         // 设置选中选项
$('textarea').val('长文本内容');     // 设置文本框

// ============ 属性操作 ============

// 1. attr() - 获取/设置HTML属性
const $link = $('a');

// 获取属性
const href = $link.attr('href');    // 获取href属性值

// 设置单个属性
$link.attr('href', 'https://google.com');
// Set href attribute

// 设置多个属性
$link.attr({
    'href': 'https://google.com',
    'target': '_blank',
    'title': '点击访问Google'
});

// 2. removeAttr() - 移除属性
$link.removeAttr('title');          // 删除title属性

// 3. prop() - 获取/设置DOM属性（而非HTML属性）
const $checkbox = $('input[type="checkbox"]');

// checked是DOM属性，不是HTML属性
$checkbox.prop('checked', true);    // 勾选复选框
// Check checkbox

const isChecked = $checkbox.prop('checked');  // true

// attr() vs prop()的区别：
// attr('checked')    返回：'checked'  (HTML属性值)
// prop('checked')    返回：true       (DOM属性值)

// ============ 样式操作 ============

// 1. css() - 获取/设置CSS样式
const $box = $('#myBox');

// 获取样式
const color = $box.css('color');    // 获取文字颜色

// 设置单个样式
$box.css('color', 'red');           // 设置文字颜色
// Set CSS property

// 设置多个样式
$box.css({
    'color': 'white',
    'background-color': 'black',
    'padding': '10px',
    'border-radius': '5px'
});

// CSS属性驼峰命名
$box.css('backgroundColor', 'blue');   // 等同于background-color

// 2. addClass() - 添加类 ★★★
$box.addClass('active');            // 添加active类
$box.addClass('active highlight');  // 添加多个类（空格分隔）
// Add class

// 3. removeClass() - 移除类 ★★★
$box.removeClass('active');         // 移除active类
$box.removeClass('active highlight'); // 移除多个类
// Remove class

// 4. toggleClass() - 切换类
$box.toggleClass('active');         // 有则删，无则加
// Toggle class

// 使用场景：按钮点击切换
$('#toggleBtn').click(function() {
    $('#menu').toggleClass('open');
    // 每次点击切换open类
});

// 5. hasClass() - 判断是否有类
if ($box.hasClass('active')) {
    console.log('元素有active类');
} else {
    console.log('元素没有active类');
}

// ============ 元素操作 ============

// 1. append() - 追加子元素
const $list = $('ul');

$list.append('<li>新项目</li>');
// 在ul的末尾追加li

// 也可以传入jQuery对象或DOM对象
const $newItem = $('<li>项目</li>');
$list.append($newItem);

// 2. prepend() - 前置子元素
$list.prepend('<li>第一项</li>');
// 在ul的开头前置li

// 3. before() - 在元素前插入
const $para = $('p:first');
$para.before('<p>前面的段落</p>');
// 在第一个p前插入新p

// 4. after() - 在元素后插入
$para.after('<p>后面的段落</p>');
// 在第一个p后插入新p

// 插入位置示意：
// before() ← 位置
// <element>
// after() ← 位置

// 5. remove() - 删除元素
$('#tempDiv').remove();             // 删除元素
// 元素及其所有内容都被移除

// 6. empty() - 清空内容（保留元素）
$('#myDiv').empty();                // 清空内容
// myDiv元素保留，但内部内容被清空

// 差异演示：
// <div id="box"><p>内容</p></div>

$('#box').remove();                 // 整个div被删除
// 结果：（什么都没有）

$('#box').empty();                  // 只清空内容
// 结果：<div id="box"></div>

// ============ 实际场景1：动态列表 ============

// HTML
// <ul id="todoList"></ul>
// <input type="text" id="taskInput">
// <button id="addBtn">添加任务</button>

$('#addBtn').click(function() {
    const task = $('#taskInput').val();
    
    if (task.trim()) {
        // 创建新列表项
        const $item = $('<li>')
            .text(task)
            .append(' <button class="delete">删除</button>');
        
        // 追加到列表
        $('#todoList').append($item);
        
        // 清空输入框
        $('#taskInput').val('');
    }
});

// 删除任务
$(document).on('click', '.delete', function() {
    $(this).parent().remove();  // 删除列表项
});

// ============ 实际场景2：表单切换 ============

// HTML
// <div id="loginForm">...</div>
// <div id="registerForm" style="display: none;">...</div>
// <button id="toggleForm">切换到注册</button>

$('#toggleForm').click(function() {
    const $login = $('#loginForm');
    const $register = $('#registerForm');
    
    // 切换显示/隐藏
    if ($login.css('display') !== 'none') {
        $login.hide();          // 隐藏登录表单
        $register.show();       // 显示注册表单
        $(this).text('切换到登录');
    } else {
        $login.show();
        $register.hide();
        $(this).text('切换到注册');
    }
});

// 或用class切换（更优雅）
$('#toggleForm').click(function() {
    $('#loginForm').toggleClass('hidden');
    $('#registerForm').toggleClass('hidden');
});

// ============ 实际场景3：表格行操作 ============

// HTML
// <table id="userTable">
//     <tr><td>John</td><td>john@example.com</td>
//         <td><button class="edit">编辑</button></td>
//     </tr>
// </table>

// 点击编辑按钮
$(document).on('click', '.edit', function() {
    const $row = $(this).closest('tr');  // 获取所在行
    
    // 获取当前值
    const $cells = $row.find('td');
    const name = $cells.eq(0).text();    // 第一列
    const email = $cells.eq(1).text();   // 第二列
    
    // 替换为编辑框
    $cells.eq(0).html(`<input type="text" value="${name}">`);
    $cells.eq(1).html(`<input type="email" value="${email}">`);
    
    // 改为保存按钮
    $cells.eq(2).html('<button class="save">保存</button>');
});

// 保存按钮
$(document).on('click', '.save', function() {
    const $row = $(this).closest('tr');
    const $cells = $row.find('td');
    
    // 获取编辑框的值
    const name = $cells.eq(0).find('input').val();
    const email = $cells.eq(1).find('input').val();
    
    // 恢复为文本
    $cells.eq(0).text(name);
    $cells.eq(1).text(email);
    
    // 改为编辑按钮
    $cells.eq(2).html('<button class="edit">编辑</button>');
});

// ============ 链式调用的威力 ============

// 原生JavaScript（冗长）
const element = document.getElementById('box');
element.style.color = 'red';
element.style.fontSize = '18px';
element.className += ' active';
element.innerHTML = 'Hello';

// jQuery（简洁）
$('#box')
    .css({
        'color': 'red',
        'font-size': '18px'
    })
    .addClass('active')
    .html('Hello');

// 链式调用的原理：每个方法都返回jQuery对象本身
```

**深度理解 | attr() vs prop() 的关键区别**

```javascript
// 这是考试常问的题目 ★★★

// attr() - HTML属性（页面源代码中看得到）
// prop() - DOM属性（JavaScript运行时的属性）

// 场景：复选框
// <input type="checkbox" id="agree" checked>

const $checkbox = $('#agree');

// attr('checked') - 获取HTML源代码中的属性
console.log($checkbox.attr('checked'));  // 'checked'
// 返回字符串'checked'或undefined

// prop('checked') - 获取当前DOM状态
console.log($checkbox.prop('checked'));  // true
// 返回布尔值

// 用户点击复选框后
// HTML源代码不变，但DOM属性改变

console.log($checkbox.attr('checked'));  // 仍然是'checked'
console.log($checkbox.prop('checked'));  // false（已取消选中）

// ✓ 正确做法

// 获取用户是否勾选
if ($checkbox.prop('checked')) {
    console.log('用户已同意');
}

// 程序设置勾选状态
$checkbox.prop('checked', true);    // 勾选
$checkbox.prop('checked', false);   // 取消勾选

// ❌ 常见错误

// 这样不会改变可视状态
$checkbox.attr('checked', 'checked');
// HTML属性改变了，但DOM状态没改

// 记住规则：
// • checked, selected, disabled → 用prop()
// • 其他自定义属性 → 用attr()
```

------

### 4.5Q jQuery如何绑定和处理事件？event对象是什么？ | Page 42-43

**jQuery事件处理方法表**

| 方法         | 说明                       | 语法                                          |
| ------------ | -------------------------- | --------------------------------------------- |
| `.on()`      | 绑定事件监听器             | `$('#btn').on('click', handler)`              |
| `.off()`     | 移除事件监听器             | `$('#btn').off('click')`                      |
| `.one()`     | 绑定一次性事件             | `$('#btn').one('click', handler)`             |
| `.click()`   | 绑定click事件（快捷方法）  | `$('#btn').click(handler)`                    |
| `.submit()`  | 绑定submit事件             | `$('#form').submit(handler)`                  |
| `.change()`  | 绑定change事件             | `$('#input').change(handler)`                 |
| `.focus()`   | 绑定focus事件              | `$('#input').focus(handler)`                  |
| `.blur()`    | 绑定blur事件               | `$('#input').blur(handler)`                   |
| `.keydown()` | 绑定keydown事件            | `$('#input').keydown(handler)`                |
| `.hover()`   | 绑定mouseenter和mouseleave | `$('#box').hover(enterHandler, leaveHandler)` |

**代码示例 | 事件处理**

```javascript
// ============ 基础事件绑定 ============

// 1. on() - 最通用的方法 ★★★
const $button = $('#myButton');

$button.on('click', function(event) {
    console.log('按钮被点击');
    console.log('事件对象:', event);
});

// 2. 快捷方法（实际上调用on）
$button.click(function(event) {
    console.log('按钮被点击');
});

// click() 等同于 on('click', ...)
// 但on()更灵活，推荐使用on()

// ============ jQuery事件对象 ============

$button.on('click', function(event) {
    // event是jQuery包装的事件对象
    // 包含所有原生事件信息 + jQuery扩展
    
    console.log(event.type);        // 'click'
    console.log(event.target);      // 触发元素
    console.log(event.currentTarget); // 绑定监听器的元素
    console.log(event.pageX);       // 鼠标X坐标
    console.log(event.pageY);       // 鼠标Y坐标
    
    // jQuery方法
    event.preventDefault();         // 阻止默认行为
    event.stopPropagation();        // 停止事件冒泡
});

// ============ 事件委托（重要！） ============

// ❌ 旧方法 - 为每个元素绑定事件（低效）
$('li').on('click', function() {
    console.log('列表项被点击');
});

// 问题：如果列表是动态生成的，新的li没有监听器

// ✓ 新方法 - 事件委托（推荐 ★★★）
$('ul').on('click', 'li', function() {
    console.log('列表项被点击');
});

// 事件委托的工作原理：
// 1. 在ul上绑定click监听器
// 2. 当click发生时，检查是否由li触发
// 3. 如果是，执行处理器
// 
// 好处：
// • 新增的li也能被处理
// • 更少的监听器，性能更好

// ============ 移除事件监听器 ============

// 1. off() - 移除所有同名事件
$button.off('click');              // 移除所有click事件

// 2. off() - 移除特定处理器
function handleClick() {
    console.log('点击');
}

$button.on('click', handleClick);

$button.off('click', handleClick);  // 只移除这个处理器

// 3. one() - 单次事件（自动移除）
$button.one('click', function() {
    console.log('只执行一次');
});

// 点击一次后自动移除监听器

// ============ 多个事件 ============

// 1. 为多个事件绑定同一处理器
$button.on('click focus', function() {
    console.log('点击或获得焦点');
});

// 2. 为多个事件绑定不同处理器
$input.on({
    'focus': function() {
        console.log('获得焦点');
        $(this).css('border', '2px solid blue');
    },
    'blur': function() {
        console.log('失去焦点');
        $(this).css('border', '1px solid gray');
    },
    'input': function() {
        console.log('值改变:', $(this).val());
    }
});

// ============ hover() - 快捷方法 ============

// hover()同时处理mouseenter和mouseleave
$('#menu').hover(
    function() {
        // mouseenter处理器
        $(this).find('.submenu').slideDown();
    },
    function() {
        // mouseleave处理器
        $(this).find('.submenu').slideUp();
    }
);

// 等价于
$('#menu').on('mouseenter', function() {
    $(this).find('.submenu').slideDown();
});

$('#menu').on('mouseleave', function() {
    $(this).find('.submenu').slideUp();
});

// ============ 实际场景1：表单验证 ============

// 实时验证email
$('#email').on('input', function() {
    const email = $(this).val();
    const $error = $(this).next('.error');
    
    if (!isValidEmail(email)) {
        $error.text('邮箱格式不正确');
        $(this).addClass('invalid');
    } else {
        $error.text('');
        $(this).removeClass('invalid');
    }
});

// ============ 实际场景2：动态列表项处理 ============

// HTML
// <ul id="todoList"></ul>
// <button id="addBtn">添加</button>

// 添加按钮
$('#addBtn').on('click', function() {
    const item = prompt('输入任务:');
    if (item) {
        const $li = $('<li>')
            .text(item)
            .append(' <button class="delete">删除</button>');
        
        $('#todoList').append($li);
    }
});

// 删除按钮 - 使用事件委托
// 这样即使动态添加的button也能被处理
$('#todoList').on('click', '.delete', function() {
    $(this).closest('li').fadeOut(function() {
        $(this).remove();
    });
});

// ============ 实际场景3：键盘快捷键 ============

$(document).on('keydown', function(event) {
    // Ctrl+S 保存
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        saveDocument();
        console.log('已保存');
    }
    
    // ESC 关闭对话框
    if (event.key === 'Escape') {
        closeDialog();
    }
});

// ============ this在事件处理器中的用法 ============

$('.button').on('click', function() {
    // this指向触发事件的DOM元素
    console.log(this);                      // DOM元素
    console.log($(this));                   // jQuery对象
    
    // 获取点击的按钮的文本
    const text = $(this).text();
    
    // 改变这个按钮的颜色
    $(this).css('color', 'red');
    
    // 获取兄弟元素
    $(this).siblings().hide();
});

// ============ event.preventDefault() 常见用途 ============

// 1. 阻止链接跳转
$('a').on('click', function(event) {
    event.preventDefault();
    // 用AJAX加载内容
    loadContent($(this).attr('href'));
});

// 2. 阻止表单提交
$('#form').on('submit', function(event) {
    event.preventDefault();
    // 用AJAX提交
    submitFormViaAjax($(this));
});

// 3. 阻止右键菜单
$(document).on('contextmenu', function(event) {
    event.preventDefault();
    // 显示自定义菜单
    showContextMenu(event.pageX, event.pageY);
});

// ============ event.stopPropagation() 用途 ============

// 场景：嵌套元素的事件冒泡

// <div id="parent">
//     <button id="child">点击我</button>
// </div>

$('#parent').on('click', function() {
    console.log('父元素被点击');
});

$('#child').on('click', function(event) {
    console.log('按钮被点击');
    event.stopPropagation();  // 阻止事件冒泡到父元素
});

// 如果不调用stopPropagation()
// 点击按钮会输出：
// 按钮被点击
// 父元素被点击

// 调用stopPropagation()后
// 点击按钮只输出：
// 按钮被点击
```

**深度理解 | jQuery vs 原生事件监听**

```javascript
// jQuery时代的优势已不存在

// jQuery事件绑定
$('#btn').on('click', handler);

// 原生事件监听（现代）
document.getElementById('btn').addEventListener('click', handler);

// 差异已不大，现代推荐用原生API

// 但jQuery事件委托仍有价值
$('#list').on('click', '.item', handler);  // jQuery简洁

// 原生替代方案（更冗长）
document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        handler.call(e.target, e);
    }
});
```

------

### 4.6Q jQuery的AJAX方法有哪些？如何实现数据交互？ | Page 43-44

**jQuery AJAX方法表**

| 方法          | 功能         | 说明                 |
| ------------- | ------------ | -------------------- |
| `$.ajax()`    | 通用AJAX请求 | 最灵活，推荐使用 ★★★ |
| `$.get()`     | GET请求      | 快捷方法             |
| `$.post()`    | POST请求     | 快捷方法             |
| `$.getJSON()` | GET请求JSON  | 快捷方法             |
| `.load()`     | 加载HTML片段 | 加载到元素中         |

**代码示例 | AJAX操作**

```javascript
// ============ $.ajax() - 完整示例 ============

$.ajax({
    url: '/api/users',              // 请求URL
    type: 'GET',                    // 请求方法
    dataType: 'json',               // 响应数据格式
    data: {                         // 请求参数
        page: 1,
        limit: 10
    },
    timeout: 5000,                  // 超时时间（毫秒）
    
    success: function(data, textStatus, xhr) {
        // 成功回调
        console.log('请求成功');
        console.log('响应数据:', data);
        
        // 处理数据
        displayUsers(data);
    },
    
    error: function(xhr, textStatus, errorThrown) {
        // 错误回调
        console.log('请求失败');
        console.log('状态:', xhr.status);       // HTTP状态码
        console.log('错误信息:', errorThrown); // 错误信息
        
        alert('加载失败，请重试');
    },
    
    complete: function() {
        // 完成回调（无论成功还是失败）
        console.log('请求完成');
        
        // 隐藏加载提示
        hideLoadingSpinner();
    }
});

// ============ GET请求 - 快捷方法 ============

// 1. $.get() - 获取任何类型数据
$.get('/api/users', function(data) {
    console.log('获取数据:', data);
});

// 带参数
$.get('/api/users', {
    page: 1,
    limit: 10
}, function(data) {
    console.log('用户列表:', data);
});

// 2. $.getJSON() - 获取JSON数据
$.getJSON('/api/users', function(data) {
    // 自动解析为JSON
    console.log(data);
    data.forEach(user => {
        console.log(user.name);
    });
});

// ============ POST请求 ============

// 1. $.post() - 发送数据
$.post('/api/users', {
    name: 'John',
    email: 'john@example.com'
}, function(response) {
    console.log('创建成功:', response);
});

// 2. $.ajax() - 更详细的POST请求
$.ajax({
    url: '/api/users',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',  // 发送JSON
    data: JSON.stringify({
        name: 'John',
        email: 'john@example.com'
    }),
    success: function(response) {
        console.log('用户已创建:', response);
    },
    error: function(xhr) {
        if (xhr.status === 400) {
            console.log('请求参数错误');
        } else if (xhr.status === 401) {
            console.log('未授权，请登录');
        } else if (xhr.status === 500) {
            console.log('服务器错误');
        }
    }
});

// ============ .load() - 加载HTML片段 ============

// 加载HTML文件并插入到元素中
$('#content').load('page.html', function(response, status, xhr) {
    if (status === 'success') {
        console.log('页面加载成功');
    } else {
        console.log('页面加载失败');
    }
});

// 加载特定选择器的内容
$('#content').load('page.html #section1', function() {
    console.log('已加载section1的内容');
});

// ============ 实际场景1：用户列表分页 ============

function loadUsers(page = 1) {
    const $loading = $('#loading');
    const $container = $('#userList');
    
    // 显示加载提示
    $loading.show();
    
    $.ajax({
        url: '/api/users',
        type: 'GET',
        data: {
            page: page,
            limit: 20
        },
        success: function(data) {
            // 清空列表
            $container.empty();
            
            // 添加用户
            data.users.forEach(user => {
                const $row = $('<tr>')
                    .append($('<td>').text(user.id))
                    .append($('<td>').text(user.name))
                    .append($('<td>').text(user.email));
                
                $container.append($row);
            });
            
            // 更新分页
            updatePagination(data.totalPages, page);
        },
        error: function() {
            $container.html('<tr><td colspan="3">加载失败</td></tr>');
        },
        complete: function() {
            $loading.hide();
        }
    });
}

// 分页按钮点击事件
$(document).on('click', '.pagination a', function(e) {
    e.preventDefault();
    const page = $(this).data('page');
    loadUsers(page);
});

// ============ 实际场景2：表单AJAX提交 ============

$('#registerForm').on('submit', function(e) {
    e.preventDefault();
    
    const $form = $(this);
    const $submitBtn = $form.find('button[type="submit"]');
    
    // 禁用提交按钮
    $submitBtn.prop('disabled', true).text('提交中...');
    
    $.ajax({
        url: $form.attr('action'),
        type: 'POST',
        data: $form.serialize(),  // 自动序列化表单数据
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                alert('注册成功！');
                $form.reset();      // 清空表单
                window.location.href = '/dashboard';
            } else {
                // 显示服务器验证错误
                Object.entries(response.errors).forEach(([field, message]) => {
                    const $field = $form.find(`[name="${field}"]`);
                    $field.after(`<span class="error">${message}</span>`);
                });
            }
        },
        error: function(xhr) {
            alert('提交失败：' + xhr.status);
        },
        complete: function() {
            // 恢复提交按钮
            $submitBtn.prop('disabled', false).text('提交');
        }
    });
});

// ============ 实际场景3：动态搜索 ============

// 搜索输入框
let searchTimeout;

$('#searchInput').on('input', function() {
    const keyword = $(this).val();
    
    // 防止频繁请求，延迟500ms
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(function() {
        if (keyword.length >= 2) {
            searchUsers(keyword);
        }
    }, 500);
});

function searchUsers(keyword) {
    $.getJSON('/api/users/search', {
        q: keyword
    }, function(data) {
        const $results = $('#searchResults');
        $results.empty();
        
        if (data.length === 0) {
            $results.html('<p>未找到匹配的用户</p>');
            return;
        }
        
        data.forEach(user => {
            const $item = $('<div class="result">')
                .text(`${user.name} (${user.
```

------

### 4.6Q jQuery的AJAX方法有哪些？如何实现数据交互？ | Page 43-44（续）

```javascript
// ============ 实际场景3：动态搜索（续） ============

function searchUsers(keyword) {
    $.getJSON('/api/users/search', {
        q: keyword
    }, function(data) {
        const $results = $('#searchResults');
        $results.empty();
        
        if (data.length === 0) {
            $results.html('<p>未找到匹配的用户</p>');
            return;
        }
        
        data.forEach(user => {
            const $item = $('<div class="result">')
                .text(`${user.name} (${user.email})`)
                .on('click', function() {
                    loadUserDetail(user.id);
                });
            
            $results.append($item);
        });
    });
}

// ============ 全局AJAX事件处理 ============

// 全局的AJAX开始事件（显示加载提示）
$(document).on('ajaxStart', function() {
    $('#globalLoading').show();
});

// 全局的AJAX完成事件（隐藏加载提示）
$(document).on('ajaxComplete', function() {
    $('#globalLoading').hide();
});

// 全局的AJAX错误事件
$(document).on('ajaxError', function(event, xhr, settings, error) {
    if (xhr.status === 401) {
        // 未授权，重定向到登录
        window.location.href = '/login';
    }
});

// ============ 设置全局AJAX配置 ============

$.ajaxSetup({
    timeout: 10000,                 // 全局超时时间
    headers: {
        'X-Requested-With': 'XMLHttpRequest'  // 标记AJAX请求
    },
    error: function(xhr, status, error) {
        // 全局错误处理
        console.error('AJAX错误:', error);
    }
});

// ============ jQuery AJAX vs fetch() 对比 ============

// jQuery AJAX
$.get('/api/data', function(data) {
    console.log(data);
});

// 现代fetch API
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data));

// 区别：
// • jQuery: 简洁，但已过时
// • fetch: 现代，是未来标准
// • 新项目推荐用fetch，但理解jQuery对学习有帮助
```

------

## 总结与应试要点

------

### 📚 核心知识点总结 | 应试重点 ★★★

**PART 1：DOM（必考）**

1. **DOM vs BOM区别** ★★★
   - DOM：管理网页内容（HTML文档）
   - BOM：管理浏览器窗口及其功能
2. **三种访问元素方法** ★★★
   - `getElementById()`：最精确但不灵活
   - `getElementsByName()`：仅表单元素
   - `getElementsByTagName()`：粒度太粗
   - **现代：`querySelector()/querySelectorAll()`** ★★★
3. **DOM遍历的文本节点陷阱** ★★★
   - `childNodes`：包含文本节点（换行符、空格）
   - `children`：仅元素节点（推荐用）
   - 使用`firstElementChild`而非`firstChild`
4. **内容修改方法** ★★
   - `innerHTML`：包含标签（XSS风险，需清理）
   - `textContent`：仅文本（安全，推荐用）
   - `innerText`：可见文本（少用）
5. **动态创建元素** ★★
   - `createElement()`：创建元素
   - `appendChild()`：追加
   - `insertBefore()`：在指定位置前插入
   - `DocumentFragment`：批量操作性能最优

**PART 2：BOM（必考）**

1. **location对象** ★★★
   - `href`：完整URL（修改会导航）
   - `pathname`：路径
   - `search`：查询参数
   - `hash`：片段标识符
   - `assign()`：导航（可返回）
   - `replace()`：导航（不可返回）
2. **history对象** ★★
   - `back()`：后退
   - `forward()`：前进
   - `go(n)`：跳转到第n个页面
   - `pushState()`、`replaceState()`：HTML5不刷新改URL
3. **navigator对象** ★★
   - `userAgent`：浏览器标识
   - `onLine`：是否在线
   - `language`：浏览器语言
4. **存储机制** ★★★
   - **Cookie**：4KB，自动发送到服务器，可设过期时间
   - **localStorage**：5-10MB，永久存储，同域共享
   - **sessionStorage**：5-10MB，标签页隔离，关闭自动删除
   - **重点**：localStorage中所有数据都是字符串，复杂对象需JSON序列化

**PART 3：事件（必考）**

1. **事件流三阶段** ★★★
   - 捕获阶段：从外向内
   - 目标阶段：事件到达元素本身
   - 冒泡阶段：从内向外（最常用）
2. **事件对象属性** ★★★
   - `event.target`：触发事件的元素
   - `event.currentTarget`：添加监听器的元素
   - `event.type`：事件类型
   - `event.preventDefault()`：阻止默认行为
   - `event.stopPropagation()`：停止冒泡
3. **addEventListener三参数** ★★
   - 第1个：事件类型
   - 第2个：处理函数
   - 第3个：选项对象（capture/once/passive/signal）
4. **常见事件类型** ★★
   - **鼠标**：click、dblclick、mouseenter、mouseleave
   - **键盘**：keydown、keyup
   - **表单**：input、change、submit、focus、blur
   - **页面**：load、beforeunload、scroll、resize
5. **表单验证** ★★★
   - **客户端验证**：改善用户体验（可被绕过）
   - **服务器端验证**：保证数据安全（必须实现）
   - 永远不要信任客户端验证！

**PART 4：jQuery（理解为主）**

1. **jQuery的地位** ★★
   - 曾是前端主流库（2010-2015年代）
   - 解决了浏览器兼容性问题
   - 现已逐步被现代框架和ES6替代
   - 学习价值：理解前端演进历史
2. **jQuery vs DOM对象** ★★
   - jQuery对象是DOM对象的包装
   - 转换：`jQuery对象[0]` = DOM对象，`$(DOM对象)` = jQuery对象
   - jQuery支持链式调用
3. **jQuery选择器** ★★
   - 支持CSS选择器：`$('#id')`, `$('.class')`, `$('tag')`
   - jQuery特殊伪选择器：`:first`, `:last`, `:eq(n)`, `:contains()`
   - 现代CSS选择器已基本覆盖
4. **jQuery DOM操作** ★★
   - 内容：`html()`, `text()`, `val()`
   - 属性：`attr()`, `prop()`, `removeAttr()`
   - 样式：`css()`, `addClass()`, `removeClass()`, `toggleClass()`
   - 元素：`append()`, `prepend()`, `before()`, `after()`, `remove()`, `empty()`
5. **jQuery事件和AJAX** ★
   - 事件：`.on()`, `.off()`, `.one()`
   - 事件委托：`.on('click', '.selector', handler)`
   - AJAX：`$.ajax()`, `$.get()`, `$.post()`, `.load()`

------

### ⚠️ 常见易错点总结

**考试高频错误**

| 错误点                                        | 正确做法                                          | 页码       |
| --------------------------------------------- | ------------------------------------------------- | ---------- |
| 混淆`childNodes`和`children`                  | 使用`children`或元素版本属性                      | Page 7-9   |
| `innerHTML`的XSS风险                          | 用户数据用`textContent`                           | Page 10    |
| `attr()`和`prop()`混用                        | checked/selected/disabled用`prop()`               | Page 40    |
| 只做客户端验证                                | 必须在服务器端再验证一次                          | Page 32-35 |
| 给动态元素逐个绑定事件                        | 使用事件委托`.on('click', '.selector')`           | Page 42    |
| 混淆`onclick`属性和`addEventListener`         | 后赋值的onclick会覆盖前者，推荐用addEventListener | Page 28    |
| `document.write()`页面加载后调用              | 会清空整个页面！                                  | Page 12    |
| localStorage字符串类型不转换                  | `parseInt(localStorage.getItem('count'))`         | Page 23-24 |
| 混淆`location.assign()`和`location.replace()` | assign可返回，replace不可返回                     | Page 19-20 |
| event.target和event.currentTarget混用         | target=实际点击的，currentTarget=绑定监听的       | Page 26-28 |

------

### 🎯 应试技巧

**考试出题规律**

1. **选择题常考**
   - DOM vs BOM的区别
   - childNodes vs children
   - `target` vs `currentTarget`
   - `attr()` vs `prop()`
   - 事件流的三个阶段
2. **简答题常考**
   - 解释某个概念的本质
   - 描述某个技术的工作原理
   - 对比两个方法的区别
   - 说明设计决策的原因
3. **代码题常考**
   - DOM遍历和修改
   - 事件处理（特别是阻止冒泡、阻止默认）
   - 表单验证
   - 事件委托
   - localStorage操作

**答题要点**

- **涉及安全的问题**：强调"永远在服务器端验证"
- **涉及性能的问题**：提出事件委托、缓存、`DocumentFragment`
- **涉及兼容性的问题**：提现代方案（`querySelector`、`classList`）
- **涉及设计的问题**：解释为什么要这样设计（Why而非How）

------

### 📝 快速记忆表

**选择器对比**

```
getElementById()      → 精确，快，不灵活
getElementsByName()  → 仅表单，冗长
getElementsByTagName() → 粗糙，易脆弱
querySelector()      → 推荐 ★★★（现代）
querySelectorAll()   → 推荐 ★★★（现代）
```

**属性访问对比**

```
childNodes       → 包含文本节点（易出错）
children         → 仅元素节点（推荐 ★★★）
firstChild       → 可能是文本节点
firstElementChild → 推荐 ★★★
```

**内容修改对比**

```
innerHTML   → 包含标签，有XSS风险
textContent → 仅文本，安全（推荐 ★★★）
innerText   → 可见文本，少用
```

**存储机制对比**

```
Cookie         → 4KB，自动发送，有过期时间
localStorage   → 5-10MB，永久，同域共享（推荐用户偏好 ★★★）
sessionStorage → 5-10MB，临时，标签页隔离（推荐临时数据 ★★★）
```

**验证层次**

```
HTML5属性验证  → 第1层（体验优化）
JavaScript验证 → 第2层（用户体验）
服务器验证     → 第3层（数据安全，必须 ★★★）
```

**事件处理对比**

```
onclick属性      → 可被覆盖，避免用
addEventListener → 推荐（支持多个监听器 ★★★）
jQuery.on()      → 支持事件委托（推荐 ★★★）
```

------

### 💡 学习建议

1. **理论 + 实践结合**
   - 不要只读概念，要动手写代码
   - 在浏览器控制台测试每个例子
2. **对比学习**
   - 理解why而非记住what
   - 比较新旧方法的优劣
3. **重点突破**
   - DOM遍历（文本节点坑）
   - 事件流和委托
   - 表单验证双层模型
   - 存储机制的区别
4. **历史视角**
   - 理解jQuery为什么存在又为什么衰落
   - 学习前端技术演进的规律
5. **应试准备**
   - 整理常见易错点卡片
   - 练习手写代码（特别是DOM操作和事件处理）
   - 模拟考试，检验理解程度

------

## 核心知识检验清单

**在准备考试前，确保能回答这些问题**

-  能清楚解释DOM和BOM的区别吗？
-  能说出为什么要用`children`而不是`childNodes`吗？
-  能解释事件流的三个阶段吗？
-  能区分`target`和`currentTarget`吗？
-  能解释为什么客户端验证不能替代服务器验证吗？
-  能手写一个完整的表单验证流程吗？
-  能区分`attr()`和`prop()`的使用场景吗？
-  能实现事件委托吗？
-  能解释localStorage中为什么所有数据都是字符串吗？
-  能说出jQuery衰落的原因吗？

**如果所有问题都能清楚回答，说明已掌握Chapter 07的核心知识！**

------

本复习讲解材料已涵盖Pages 2–44的所有核心知识点，采用编号问答格式、双语对照、深度学习维度（Why、关联、批判、应用），并标注了所有对应页码和应试重点。

**建议使用方式：**

1. 按章节逐部分学习（DOM→BOM→事件→jQuery）
2. 对照代码示例，在开发者工具中实践
3. 使用快速记忆表进行复习
4. 通过易错点清单进行自测
5. 完成核心知识检验清单确认掌握

祝考试顺利！🎓