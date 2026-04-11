# 1. Introduction to JavaScript – JavaScript简介 (Pages 2–5)

## **Event-driven Computation – 事件驱动计算 Page 4**
---

### **Page 4: Event-driven Computation – 事件驱动计算**
---

### **1. 什么是事件 What are Events**

> User's actions, such as mouse clicks and key presses, are referred to as _events_. 用户的操作，如鼠标点击和按键，被称为**事件（events）**。

> The main task of many JavaScript programs is to respond to events. 许多JavaScript程序的主要任务就是**响应事件**。

**类比说明：** 可以把JS程序想象成一个**前台接待员**——它平时什么都不做，但一旦有人（用户）按了铃（点击/按键），它就立刻行动。这和传统的"从上到下逐行执行完毕"的程序截然不同。

---

### **2. 课件代码示例 Slide Code Example**

课件中展示了一个 onclick 事件的完整HTML示例：

```html
<html>
<body>

<p> What did the web-dev's dog say? </p>  <!-- 页面上的一段文字 -->
<button onclick="getElementById('demo').innerHTML='Href href!'">
  Tell me!                                <!-- 按钮文字 -->
</button>                                 <!-- 点击按钮 → 触发onclick事件 -->

<p id="demo"></p>                         <!-- 空段落，等待被填充内容 -->

</body>
</html>
```

**运行效果（课件右侧截图所示）：**

|操作|页面显示|
|---|---|
|页面加载后|显示文字"What did the web-dev's dog say?"和一个"Tell me!"按钮，下方空白|
|用户点击按钮后|下方的 `<p id="demo">` 中出现文字 **"Href href!"**|

**逐行解析：**

|代码|作用|
|---|---|
|`<button onclick="...">`|将JS代码绑定到按钮的 **click事件** 上（内联方式）|
|`getElementById('demo')`|找到页面中 `id="demo"` 的元素|
|`.innerHTML='Href href!'`|将该元素的HTML内容替换为 "Href href!"|

这就是**事件驱动**的核心模式：**定义"当某事件发生时，执行某代码"**。

---

### **3. 实际用途：表单验证 Practical Use: Form Validation**

> For example, a JavaScript program could validate data in a form before it is submitted to a server. 例如，JavaScript程序可以在表单提交到服务器之前验证数据。

---

### **4. ⚠️ 安全警告 Caution**

> _Caution_: It is important that crucial validation be done by the server. It is easy to bypass client-side controls. **警告**：关键验证必须由服务器完成。客户端控制很容易被绕过。

> For example, a user might create a copy of a web page but remove all the validation code. 例如，用户可能复制一份网页副本，然后删除所有验证代码。

**类比说明：** 客户端验证就像商店门口的"请自觉排队"告示牌——守规矩的人会遵守，但想插队的人可以直接无视。服务器端验证才是真正的**保安**。

---

### **5. 示例代码 Example Code（辅助理解）**

以下代码演示了 Page 4 的三个核心点：**事件响应**、**表单验证**、**客户端验证可被绕过**。

```html
<!-- ===== 示例1: 响应点击事件 (对应课件中的onclick示例) ===== -->
<button onclick="document.getElementById('out').innerHTML = 'Href href!'">
  Tell me!              <!-- 用户点击 → 触发事件 → 修改页面 -->
</button>
<p id="out"></p>

<!-- ===== 示例2: 表单提交前验证 ===== -->
<script>
function validateForm() {
  let name = document.getElementById("name").value; // 获取输入值
  if (name === "") {                                 // 检查是否为空
    alert("Name cannot be empty! 名字不能为空!");    // 弹出警告
    return false;                                    // 阻止表单提交
  }
  return true;                                       // 允许提交
}
</script>

<!--
  ⚠️ 但是用户可以：
  1. 右键 → 查看源代码 → 复制整个页面
  2. 删除 validateForm() 函数
  3. 在本地打开修改后的副本 → 直接提交空表单！
  所以：服务器端必须再次验证！
-->
```

以下是一个可以直接在浏览器Console中运行的纯JS版本，体会事件驱动的思维模式：

```javascript
// ===== 事件驱动 vs 传统顺序执行 =====

// 传统方式：代码从上到下执行一遍就结束了
// Traditional: code runs top-to-bottom, then stops
console.log("Step 1");
console.log("Step 2");
console.log("Done");

// 事件驱动方式：注册一个"当事件发生时才执行"的函数
// Event-driven: register a function to run WHEN an event happens
// 这个函数现在不执行，只有用户点击时才执行
document.addEventListener("click", function() {
  console.log("You clicked! 你点击了!");  // 只在点击时运行
});
// 程序到这里并没有结束，它在"等待"事件
// The program doesn't end here — it WAITS for events
```


---

#### **问题分析**

##### **示例1（按钮）**

✓ 代码完整，但需要**你手动点击**才执行

- 打开页面时不自动运行
- 你必须点"Tell me!"按钮才触发 onclick

##### **示例2（validateForm函数）**

✗ **严重问题**：函数有了，但**没有表单**来调用它！

- 函数只是定义，没有任何事件触发它
- 看不见执行是正常的——没有"钩子"

---

##### **完整可运行版本**



缺的是 `<form>` 标签。这是完整代码：
```HTML
<!DOCTYPE html>
<!-- ===== 示例1: 响应点击事件 ===== -->

<button onclick="document.getElementById('out').innerHTML = 'Href href!'">

  Tell me!

</button>

<p id="out"></p>

<!-- ===== 示例2: 表单提交前验证 ===== -->

<script>

function validateForm() {

  let name = document.getElementById("name").value;

  if (name === "") {

    alert("Name cannot be empty! 名字不能为空!");

    return false;  // 阻止提交

  }

  return true;  // 允许提交

}

</script>

  

<!-- ← 这部分原代码缺了！ -->

<form onsubmit="return validateForm()">

  <input type="text" id="name" placeholder="输入名字">

  <button type="submit">提交</button>

</form>

</html>
```


```html
<!DOCTYPE html>

<!-- ===== 示例1: 响应点击事件 ===== -->
<!-- 按钮：当用户点击时触发 onclick 事件 -->
<button onclick="document.getElementById('out').innerHTML = 'Href href!'">
  Tell me!
</button>
<!-- onclick 事件执行的步骤：
     1. 通过id找到下面的 <p> 元素
     2. 修改其内容为 'Href href!' -->

<!-- 空段落：初始为空，点击按钮后会显示内容 -->
<p id="out"></p>

<!-- ===== 示例2: 表单提交前验证 ===== -->
<script>
// 定义验证函数：在表单提交前检查用户输入
function validateForm() {
  // 步骤1：获取输入框的值（id="name"）
  let name = document.getElementById("name").value;
  
  // 步骤2：检查名字是否为空
  if (name === "") {
    // 步骤2a：如果为空，弹出警告窗口
    alert("Name cannot be empty! 名字不能为空!");
    
    // 步骤2b：返回 false，阻止表单提交
    return false;
  }
  
  // 步骤3：如果不为空，返回 true，允许表单提交
  return true;
}
</script>

<!-- 表单：当用户点击提交时触发 onsubmit 事件 -->
<form onsubmit="return validateForm()">
  <!-- onsubmit="return validateForm()" 的含义：
       1. 执行 validateForm() 函数
       2. 如果函数返回 false → 表单不提交 ❌
       3. 如果函数返回 true  → 表单正常提交 ✓ -->
  
  <!-- 输入框：用户输入名字 -->
  <input type="text" id="name" placeholder="输入名字">
  
  <!-- 提交按钮：点击时触发 onsubmit 事件 -->
  <button type="submit">提交</button>
</form>

</html>
```

---

##### **关键流程总结**

```te
用户点击"提交按钮"
        ↓
触发 form 的 onsubmit 事件
        ↓
执行 validateForm() 函数
        ↓
检查 name 是否为空？
    ├─ 为空 → 弹警告 → return false → ❌ 表单不提交
    └─ 不为空 → return true → ✓ 表单提交
```

---

#### **现在的执行流程**

|操作|结果|
|---|---|
|打开页面|看到按钮、输入框、提交按钮|
|点"Tell me!"|p 标签显示 "Href href!"|
|点"提交"（输入框为空）|弹警告，表单不提交|
|点"提交"（输入框有内容）|表单正常提交|

**关键**：事件驱动（onclick、onsubmit），不是自动执行


---

##### **Summary 总结**

- **事件（Event）** = 用户操作（鼠标点击、按键等）
- **事件驱动** = JS程序的主要模式：不是"从头到尾执行一遍"，而是"注册事件处理器，等待用户操作，然后响应"
- **onclick** 是最基本的事件绑定方式（内联在HTML属性中）
- **实际用途**：表单验证——在提交前用JS检查数据合法性
- ⚠️ **安全底线**：客户端验证只是用户体验优化，**关键验证必须在服务器端**完成，因为用户可以轻松绕过客户端代码

---

### **Guided Learning 引导问题**

1. **为什么JS要采用事件驱动模式，而不是传统的从上到下执行？** 提示：想想网页加载完成后，程序应该做什么——等待用户操作。
2. **课件示例中，如果用户从未点击按钮，`<p id="demo">` 里会显示什么？** 答案：什么都没有（空），因为事件从未被触发。
3. **为什么"客户端验证 + 服务器端验证"要同时存在，而不是只做服务器端？** 提示：用户体验——客户端验证能让用户不必等待服务器往返就立刻得到反馈。
---

# 2. **JavaScript in the Browser – 浏览器中的JavaScript Pages 6–9**

---

## **Page 6: JavaScript in the Browser – 浏览器中的JavaScript（章节标题页）**

本页是这一节的标题封面页，正文内容从Page 7开始。

---

## **Page 7: Including JavaScript in the Browser – 在浏览器中引入JavaScript**

### **1. 三种引入方式 Three Ways to Include JS**

> There are several ways to include JavaScript in a web-page: 在网页中引入JavaScript有几种方式：

|方式|原文|中文|示例|
|:-:|---|---|---|
|①|Inline in a tag attribute (e.g. `onclick`)|内联在标签属性中|`<button onclick="...">`|
|②|Included in the document in the body of a `<script>` tag|在文档中通过 `<script>` 标签的主体部分包含|`<script> ... </script>`|
|③|From an external file referenced via a URL, using the `src` attribute of the `<script>` tag|从通过URL引用的外部文件中引入，使用 `<script>` 标签的 `src` 属性|`<script src="app.js"></script>`|

**类比说明：** 三种方式好比你在文章中引入一段话——① 直接写在句子里（内联） ② 在文章中插入一整个段落（内嵌script） ③ 写个"详见附录A"然后去附录里看（外部文件）。

### **2. 课件代码示例 Slide Code Example**

课件展示了一个**方式②（`<script>`内嵌在`<head>`中）+ 方式①（onclick属性调用函数）**结合使用的完整HTML页面：

```html
<!DOCTYPE html>
<html>

<head>
<script>
function myFunction() {                                     // 在<head>中定义函数
   document.getElementById("demo").innerHTML = "Paragraph changed.";
                                                            // 找到id="demo"的元素，修改其内容
}
</script>
</head>
<body>

<h1>A Web Page</h1>                                         <!-- 标题 -->
<p id="demo">A Paragraph</p>                                <!-- 一个段落，初始内容为"A Paragraph" -->
<button type="button" onclick="myFunction()">Try it</button>
                                                            <!-- 按钮，点击时调用myFunction() -->
</body>
</html>
```

**运行效果（课件右侧截图所示）：**

|阶段|页面显示|
|---|---|
|页面加载后|标题 "JavaScript in Head"，段落显示 "A Paragraph"，一个 "Try it" 按钮|
|用户点击按钮后|段落内容变为 **"Paragraph changed."**|

**代码执行流程：**

```
页面加载 → <head>中的函数myFunction被定义（但不执行）
        → <body>中的HTML被渲染到页面上
        → 用户点击 "Try it" 按钮
        → 触发 onclick 属性
        → 调用 myFunction()
        → getElementById("demo") 找到段落
        → .innerHTML = "Paragraph changed." 替换内容
```

---

## **Page 8: Debugging JavaScript in the Browser – 在浏览器中调试JavaScript**

> JavaScript errors are detected by the browser. We will look at Chrome, but other browsers offer similar functionality. JavaScript错误由浏览器检测。我们以Chrome为例，但其他浏览器也提供类似功能。

课件展示了 Chrome DevTools 的**三个截图**，分别演示三种调试能力：

### **DevTools 三大功能**

|功能|课件原文|中文|打开方式|
|:-:|---|---|---|
|**Sources** 面板|DevTools allows you to browse code.|DevTools允许你**浏览代码**。|F12 → Sources 标签|
|**Console** 面板|Console allows you to interact with the code and the page.|Console允许你**与代码和页面交互**。|F12 → Console 标签|
|**Breakpoints**|Breakpoints and debugger allows you to interact with the code as it executes.|断点和调试器允许你在**代码执行过程中**与之交互。|Sources 面板中点击行号|

### **课件截图中的具体内容**

**截图1 — Sources面板：** 左侧文件树显示 `hello.js`，中间显示代码：

```javascript
function hello(name) {                // 定义hello函数
   let phrase = `Hello, ${name}!`;    // 模板字符串，拼接问候语
   say(phrase);                        // 调用say函数
}

function say(phrase) {                 // 定义say函数
   alert(`** ${phrase} **`);           // 弹出带星号装饰的短语
}
```

右侧可以看到 Watch、Call Stack、Scope、Breakpoints 等调试面板。

**截图2 — Console面板：** 展示了交互式输入/输出：

```
> 1 + 2         // 用户在Console中输入表达式
< 3             // 浏览器立刻返回计算结果

> hello("debugger")   // 用户调用函数
< undefined           // 函数没有return值，所以返回undefined
                      // （但会弹出alert窗口显示 "** Hello, debugger! **"）
```

**截图3 — Breakpoints面板：** 显示在 `hello.js:4`（say(phrase)）和 `hello.js:8`（alert行）设置了两个断点，代码执行到这些行时会**暂停**，可以查看当时的变量值。

---

## **Page 9: JavaScript IO – JavaScript输入输出**

### **1. 标准输出 Standard Output**

> The standard output for JavaScript embedded in a browser is the window displaying the page in which the JavaScript is embedded. 嵌入浏览器的JavaScript的标准输出是显示该JavaScript所在页面的窗口。

### **2. 调试输出 Debug Output**

> Writing logs or error messages to the document object is now considered bad practice. For simple debugging use `console.log`. 将日志或错误信息写入document对象现在被认为是**不好的做法**。简单调试请使用 `console.log`。

### **3. 用户输出 Output to User**

> To output information to the user, you can use `alert` or `confirm`. 要向用户输出信息，可以使用 `alert` 或 `confirm`。

### **4. 用户输入 Input from User**

> To get input from the user, you can use the `prompt` function. 要从用户获取输入，可以使用 `prompt` 函数。

课件截图展示了一个 **prompt 弹窗**：显示 "What's your sign?"，带有一个文本输入框和 Cancel / OK 两个按钮。

### **四种IO方式总结表**

|方法|方向|用途|是否推荐|
|---|---|---|---|
|`console.log(...)`|输出 → 开发者|调试信息，输出到DevTools Console|✓ 调试首选|
|`alert(...)`|输出 → 用户|弹窗显示一条消息，用户点OK关闭|简单场景可用|
|`confirm(...)`|输出+输入 → 用户|弹窗显示消息+OK/Cancel按钮，返回true/false|需要用户确认时|
|`prompt(...)`|输入 ← 用户|弹窗让用户输入文字，返回输入的字符串|需要用户输入时|
|`document.write(...)`|输出 → 页面|直接写入HTML文档|✗ **不推荐**|

---

## **示例代码 Example Code**

以下代码涵盖 Pages 7–9 的所有知识点，可以保存为 `.html` 文件在浏览器中打开运行：

```html
<!DOCTYPE html>
<html>
<head>
<!-- ===== 方式②: <script>标签内嵌在<head>中 (P7) ===== -->
<script>
function greet() {                                          // 定义函数
  document.getElementById("output").innerHTML = "Hello!";   // 修改页面内容
  console.log("greet() was called");                        // 调试输出到Console (P9)
}

function askName() {
  let name = prompt("What is your name?");                  // 用prompt获取用户输入 (P9)
  if (name !== null) {                                      // 用户没有按Cancel
    alert("Welcome, " + name + "!");                        // 用alert输出给用户 (P9)
    console.log("User entered:", name);                     // 调试输出 (P9)
  }
}

function doConfirm() {
  let result = confirm("Are you sure?");                    // confirm返回true或false (P9)
  document.getElementById("output").innerHTML =
    "You clicked: " + (result ? "OK" : "Cancel");           // 显示用户的选择
}
</script>
</head>
<body>

<h1>JS in Browser Demo (Pages 7-9)</h1>
<p id="output">Original text</p>

<!-- ===== 方式①: 内联在onclick属性中 (P7) ===== -->
<button onclick="greet()">Greet (onclick调用函数)</button>
<button onclick="askName()">Prompt (获取输入)</button>
<button onclick="doConfirm()">Confirm (确认对话框)</button>

<!-- ===== 方式③: 从外部文件引入 (P7) ===== -->
<!-- <script src="myExternalFile.js"></script> -->
<!-- 以上为外部文件引入方式，此处注释展示格式 -->

</body>
</html>
```

以下是可以直接粘贴到浏览器 Console（F12→Console）中运行的纯JS示例：

```javascript
// ===== console.log: 开发者调试用 (P9) =====
console.log("This goes to the Console, not the page");   // 输出到控制台
console.log("1 + 2 =", 1 + 2);                           // 可以输出多个值，用逗号分隔

// ===== alert: 向用户弹出信息 (P9) =====
alert("Hello from alert!");                               // 弹窗，用户点OK关闭

// ===== confirm: 向用户询问 是/否 (P9) =====
let sure = confirm("Do you like JavaScript?");            // 弹窗，OK→true, Cancel→false
console.log("User confirmed:", sure);                     // 在Console查看结果

// ===== prompt: 向用户获取文本输入 (P9) =====
let name = prompt("Enter your name:");                    // 弹窗，用户输入文字
console.log("User typed:", name);                         // 输入的内容（Cancel则为null）

// ===== ✗ 不推荐: 直接写入document (P9) =====
// document.write("Bad practice!");                       // 会覆盖整个页面! 不要这样做
```

---

### **Summary 总结**

- **Page 6**：章节标题页 "JavaScript in the browser"
- **Page 7 — 三种引入方式**：① 标签属性内联（`onclick="..."`） ② `<script>`标签内嵌 ③ 外部文件（`<script src="...">`）；课件示例展示了②和①的组合使用
- **Page 8 — DevTools调试**：Chrome DevTools三大功能——**Sources**浏览代码、**Console**交互式执行、**Breakpoints**断点逐步调试
- **Page 9 — 四种IO**：`console.log`（调试输出✓）、`alert`（用户弹窗）、`confirm`（用户确认，返回true/false）、`prompt`（用户输入，返回字符串）；直接写入document对象是**不推荐的做法**

---

### **Guided Learning 引导问题**

1. **（P7）三种引入方式中，哪一种最适合大型项目？为什么？** 提示：外部文件方式③——代码与HTML分离，便于维护和缓存。
   
2. **（P7）课件示例中，函数定义在 `<head>` 里，按钮在 `<body>` 里，为什么可以工作？** 提示：浏览器先解析 `<head>`（函数已定义），再渲染 `<body>`（此时onclick已经能找到函数）。
   
3. **（P8）如果你的JS代码有bug但页面没有任何视觉异常，你怎么发现错误？** 答案：打开DevTools Console（F12），错误信息会显示在那里，包括行号。
   
4. **（P9）`prompt("问题")` 用户点Cancel后返回什么？和用户什么都不输入直接点OK返回什么？** 答案：Cancel返回 `null`；空输入点OK返回 `""`（空字符串）。两者不同！
---
# 3. Basics of Core JavaScript – 核心JavaScript基础 (Pages 10–28)

这一段从 Page 10 到 Page 28，共19页，涵盖了大约 **12个不同的知识点**。一口气学完确实容易混乱。我建议把它拆成 **4个学习单元**，按依赖关系排序：

---

**单元A：语法基础（5分钟就够）** Pages 11–13 | 变量声明、关键字、注释、分号

这部分类似"交通规则"——规则本身简单，但不知道会出事。重点只有一个：**ASI陷阱**（return后换行）。

---

**单元B：六种数据类型（核心基础）** Pages 14–22 | 原始类型 → Number → String → Boolean → null/undefined → typeof

这六页是后面一切的根基。每个类型单独看很简单，关键是要在Console里亲手敲几个例子建立手感。重点：**typeof null === "object"** 这个历史bug。

---

**单元C：类型转换 ★★（最难也最重要）** Pages 23–26 | 隐式转换规则 → Falsy/Truthy → == vs === → 经典陷阱

这是整个 Pages 10–28 的**核心考点**，也是最反直觉的部分。建议花最多时间。单元B是它的前置知识——你必须先知道有哪些类型，才能理解类型之间怎么转换。

---

**单元D：控制结构（最轻松）** Pages 27–28 | for、for-in、while、if-else、switch、三元运算符

如果你学过任何编程语言，这部分几乎不需要学，语法和C/Java/Python大同小异。快速扫一遍语法差异即可。

---

**建议学习顺序：A → B → C → D**

你想从哪个单元开始？或者如果你觉得某些部分已经熟悉，可以告诉我直接跳过，我们集中火力在你觉得难的地方。选一个你想先攻克的部分，我来针对性地详细讲解。如果你已经有编程基础，建议直接跳到 **C（类型转换）**——那是考试最爱出的、也最需要花时间理解的部分。

---

## A. JavaScript Variables & Syntax – JavaScript变量与语法 Pages 10–13

### **1. 注释 Comments**

> Single line comments are written `//` and multi-line comments `/* … */` 单行注释用`//`，多行注释用`/* … */`

```javascript
// This is a single line comment       // 这是单行注释

/* This is a                            /* 这是
   multi-line comment */                   多行注释 */
```

### **2. 分号 Semicolons**

> Statements _should_ be terminated with a semicolon ';' however the interpreter will insert the semicolon if missing and the statement seems to be complete. 语句_应该_以分号`;`结尾，但如果缺少分号且语句看起来已经完整，解释器会自动插入分号。

> This is because, like HTML, the JavaScript will tolerate incorrect code as much as possible.... and will just keep going! 这是因为，和HTML一样，JavaScript会尽可能地容忍不正确的代码……然后继续执行下去！

**类比说明：** JS的"容错性"就像一个过于善解人意的朋友——你说话说一半，他自己脑补了后半句。大多数时候脑补对了，但偶尔会闹出大笑话。

### **3. ⚠️ ASI陷阱 ASI Trap (Automatic Semicolon Insertion)**

> Can be a _big_ problem, e.g. 这可能是一个_大_问题，例如：

课件展示了经典的ASI陷阱：

```
return          ——被解释器理解为——→       return;
x;                                        x;
```

你写的是`return`后换行再写`x;`，你的意思是"返回x"。但JS在`return`后面自动插入了分号，变成了"返回undefined"，而`x;`永远不会执行。

课件右侧配了一张**香蕉皮导致翻车**的图片，形象地表示ASI就像代码路上的"香蕉皮"。

---

## **示例代码 Example Code**

以下代码涵盖 Pages 11–13 的所有知识点，可以在浏览器Console（F12）中逐行粘贴运行：

```javascript
// ============================================
// Page 11: Variable naming 变量命名
// ============================================

let myScore = 100;               // ✓ camelCase 驼峰命名
let _private = "secret";         // ✓ 下划线开头
let $price = 9.99;               // ✓ 美元符号开头
// let 2fast = "error";          // ✗ 数字开头 → SyntaxError!
// let my-name = "error";        // ✗ 包含连字符 → SyntaxError!

// Case sensitive 区分大小写
let name = "Alice";
let Name = "Bob";
let NAME = "Charlie";
console.log(name, Name, NAME);   // "Alice" "Bob" "Charlie" — 三个不同变量!


// ============================================
// Page 11: Four declarations 四种声明
// ============================================

// --- let: reassignable 可重赋值 ---
let score = 100;
score = 200;                     // ✓ OK
console.log("let:", score);      // 200

// --- const: NOT reassignable 不可重赋值 ---
const PI = 3.14;
// PI = 3.15;                    // ✗ 取消注释 → TypeError: Assignment to constant!
console.log("const:", PI);       // 3.14

// --- const trap: object properties CAN change! ---
// --- const陷阱: 对象属性可以修改! ---
const user = { name: "Alice" };
user.name = "Bob";               // ✓ 修改属性没问题!
// user = { name: "Charlie" };   // ✗ 但重赋值整个对象不行!
console.log("const obj:", user.name);  // "Bob"

// --- Multiple on one line 同行多变量 (P11) ---
let a, b, c = 10, d = "hello";
console.log("multi:", a, b, c, d);     // undefined undefined 10 "hello"


// ============================================
// Page 12: Keywords 关键字不能做变量名
// ============================================

// let class = "Math";           // ✗ SyntaxError: Unexpected token!
// let return = 5;               // ✗ SyntaxError!
// let function = "test";        // ✗ SyntaxError!
let klass = "Math";              // ✓ 变通写法: 改个拼写
console.log("keyword workaround:", klass);


// ============================================
// Page 13: Comments 注释
// ============================================

// This is a single line comment 这是单行注释

/*
  This is a
  multi-line comment
  这是多行注释
*/


// ============================================
// Page 13: Semicolons & ASI 分号与ASI
// ============================================

// --- 正常情况: JS自动补分号，大多数时候没问题 ---
let x = 5     // 没写分号，JS自动补上，OK
let y = 10    // 同上，OK
console.log("auto semicolon:", x + y);  // 15

// --- ⚠️ ASI TRAP: return后换行! ---
function correct() {
  return 42;                     // ✓ return和值在同一行
}

function broken() {
  return                         // ⚠️ JS在这里插入了 return;
    42;                          // 这行永远不会执行!
}

console.log("correct():", correct());   // 42
console.log("broken():", broken());     // undefined — NOT 42!

// --- 另一个ASI安全写法 ---
function safe() {
  return (                       // 左括号告诉JS"语句没结束"
    42                           // 所以JS不会在return后插入分号
  );
}
console.log("safe():", safe());         // 42 ✓
```

---

### **Summary 总结**

- **Page 10**：章节标题页 "Basics of Core JavaScript"
- **Page 11 — 变量**：命名规则（`$`/`_`/字母开头，区分大小写，camelCase）；四种声明方式（`let`默认✓、`const`优先✓、`var`避免✗、未声明危险✗✗）；可同行声明多个变量
- **Page 12 — 关键字**：保留字（约60个）不能用作变量名，包含 class*、enum*、export*、extends*、import*、super* 等未来保留字
- **Page 13 — 语法**：注释（`//`单行、`/* */`多行）；语句应以`;`结尾；ASI会自动补分号但可能出错；**⚠️ 经典陷阱：`return`后换行会被插入分号，导致返回`undefined`**

---

### **Guided Learning 引导问题**

1. **（P11）以下哪些是合法的变量名？** `_count`、`3rdPlace`、`$total`、`my-var`、`let` 提示：`_count` ✓、`3rdPlace` ✗（数字开头）、`$total` ✓、`my-var` ✗（连字符）、`let` ✗（保留字）
   
2. **（P11）`const arr = [1,2,3]; arr.push(4);` 会报错吗？为什么？** 提示：不会。const阻止的是**变量重赋值**（`arr = ...`），不阻止修改对象/数组的内容。
   
3. **（P13）以下代码返回什么？为什么？**
   
    ```javascript
    function f() {
      return
      { name: "Alice" }
    }
    ```
    
    答案：返回 `undefined`。ASI在`return`后插入了分号。`{ name: "Alice" }` 永远不执行。修复方法：把 `{` 放到 `return` 同一行。
    

---


Let me re-examine the pages I haven't looked at closely:现在所有页面细节已确认，以下是完整讲解。

---

## B.  **JavaScript Data Types – JavaScript数据类型 Pages 14–22**

---

## **Page 14: JavaScript Primitives and Objects – JavaScript原始类型与对象**

### **1. 两大类型阵营 Two Categories**

> JavaScript primitive data types: Number, String, Boolean, null, undefined JavaScript原始数据类型：Number、String、Boolean、null、undefined

> Some common JavaScript object datatypes: Function, Array, Date, Math, etc. 一些常见的JavaScript对象数据类型：Function、Array、Date、Math等

### **2. 内存模型图 Memory Model (Figure 4.1)**

课件展示了一张内存模型图，这张图是理解JS值传递vs引用传递的基础：

```
  Nonheap memory (栈内存)          Heap memory (堆内存)
  ┌──────────────────┐
  │  prim  │   17    │← 原始类型: 值直接存在栈里
  ├────────┼─────────┤          ┌─────────────┐
  │  obj   │    ●────┼─────────→│  an object  │
  └────────┴─────────┘          │     17      │← 对象: 栈里存引用(箭头)                                            
                                └─────────────┘   实际数据在堆里
```

**类比说明：** 原始类型像纸条上直接写了数字（`prim = 17`，值就在纸上）；对象像纸条上写了一个"快递柜号码"（`obj = →`），真正的东西存在快递柜（堆）里。复制纸条时：原始类型复制的是数字本身，对象复制的只是快递柜号码——两张纸条指向同一个柜子。

### **3. 属性访问与垃圾回收 Properties & GC**

> Object properties (either data or methods) are referred to using the standard dot `.` syntax, e.g. 对象属性（数据或方法）通过标准的点`.`语法访问，例如：

```javascript
"abc".length          // 3      — 访问属性(data property)
Math.sin(...)         //        — 调用方法(method)
```

> Objects are automatically garbage collected when there no longer exist any references to them. 当不再有任何引用指向对象时，对象会被自动垃圾回收。

---

## **Pages 15–16: Numbers in JavaScript – JavaScript中的数值**

### **Page 15: Numbers in JavaScript – JavaScript中的数值（基本特性）**

> All Number values are represented internally as _double-precision floating-point_. 所有Number值在内部都表示为_双精度浮点数_。

> According to the JavaScript language specification, they are all _double-precision 64-bit format_ IEEE 754 values. As always, you must be a little careful with arithmetic: 根据JavaScript语言规范，它们都是_双精度64位格式_的IEEE 754值。和往常一样，做算术时要小心：

```javascript
0.1 + 0.2 = 0.30000000000000004   // 浮点精度问题!
```

> Standard arithmetic operators available: `+`, `*`, `-`, `/`, `%`, etc. 可用的标准算术运算符：`+`、`*`、`-`、`/`、`%`等。

> Increment and decrement operators: `--`, `++` 自增和自减运算符：`--`、`++`

> Compound assignment operators: `+=` `-=` `/=` `*=` `%=` etc. 复合赋值运算符：`+=` `-=` `/=` `*=` `%=`等

> `a += 7` means the same as `a = a + 7` `a += 7` 等价于 `a = a + 7`

### **Page 16: Numbers in JavaScript – JavaScript中的数值（特殊值与转换）**

> The Number object in JavaScript has constants for various special values: JavaScript的Number对象有各种特殊值的常量：

课件展示了一张完整的常量表格：

|Property 属性|Meaning 含义|
|---|---|
|`MAX_VALUE`|Largest representable number 最大可表示数|
|`MIN_VALUE`|Smallest representable number 最小可表示正数|
|`NaN`|Not a number 非数字|
|`POSITIVE_INFINITY`|Special value to represent infinity 正无穷|
|`NEGATIVE_INFINITY`|Special value to represent negative infinity 负无穷|
|`PI`|The value of π 圆周率π的值|

课件代码：

```javascript
let v = 1 / 0;  // v now contains POSITIVE_INFINITY
                 // v 现在是正无穷
```

> e.g. `Number.POSITIVE_INFINITY` 例如：`Number.POSITIVE_INFINITY`

> For advanced mathematical operations you can use the built-in `Math` object 进行高级数学运算可以使用内置的`Math`对象

```javascript
let value = Math.sin(3.5);                  // Math对象的sin方法
```

> You can convert a string to an integer by using the `parseInt` function: 可以使用`parseInt`函数将字符串转为整数：

```javascript
let i = parseInt("124");  // i now contains 124
                          // i 现在是 124
```

---

## **Page 17: When is a Number Not a Number? – 什么时候数字不是数字？**

> Invalid operations return a special value `NaN` - "Not a number". 无效运算返回一个特殊值`NaN`——"不是一个数字"。

> For example, `NaN` is returned for a non-numeric argument to `parseInt`: 例如，给`parseInt`传入一个非数字参数会返回`NaN`：

```javascript
let value = parseInt("hello", 10);  // value now contains NaN
                                    // value 现在是 NaN
```

> `NaN` is infectious – if it is an input to any mathematical operation, the result will also be `NaN`: `NaN`是有传染性的——如果它是任何数学运算的输入，结果也会是`NaN`：

```javascript
let value = NaN + 5;  // value is now NaN
                      // value 现在是 NaN
```

> You can check for `NaN` by using the built-in `isNaN` function: 可以使用内置的`isNaN`函数来检测`NaN`：

```javascript
isNaN(value);  // will return true if value is NaN
               // 如果value是NaN则返回true
```

课件右上角配有香蕉皮图片（与P13相同），暗示NaN也是JS中的"陷阱"之一。

---

## **Pages 18–19: Strings in JavaScript – JavaScript中的字符串**

### **Page 18: Strings in JavaScript – JavaScript中的字符串（基本特性）**

> All String values in JavaScript are sequence of Unicode characters, where each character is represented by a 16-bit number. JavaScript中所有String值都是Unicode字符的序列，每个字符由一个16位数字表示。

> This is a _very good_ news to anyone who must deal with internationalization as they can represent characters in any alphabet. 对于需要处理国际化的人来说这是_非常好的_消息，因为它们可以表示任何字母表中的字符。

> A String literal is delimited by either single or double quotes 字符串字面量可以用单引号或双引号界定

> – There is no difference between single and double quotes. – 单引号和双引号没有区别。

> – Certain characters may be escaped in strings – 某些字符可以在字符串中转义

|转义序列|原文|含义|
|---|---|---|
|`\'` 或 `\"`|to use a quote in a string delimited by the same quotes|在用同种引号界定的字符串中使用引号|
|`\\`|to use a literal backslash|使用字面反斜杠|
|`\n`|new line|换行|
|`\t`|tab|制表符|

> – The empty string `''` has no characters – 空字符串`''`没有字符

> JavaScript doesn't have any Character data-type. So, if you want to represent a single character, you need to use a string of length 1. JavaScript没有任何Character数据类型。所以，如果想表示单个字符，需要使用长度为1的字符串。

### **Page 19: Manipulating Strings – 操作字符串**

> Character positions in strings begin at index 0. 字符串中的字符位置从索引0开始。

> One property `length` which returns the number of characters in the string and several methods on String objects: 一个`length`属性返回字符串中的字符数，以及String对象上的几个方法：

课件展示了完整的方法表格：

|Method 方法|Parameters 参数|Result 结果|
|---|---|---|
|`charAt`|A number 一个数字|Returns the character in the String object that is at the specified position 返回字符串中指定位置的字符|
|`indexOf`|One-character string 单字符字符串|Returns the position in the String object of the parameter 返回参数在字符串中的位置|
|`substring`|Two numbers 两个数字|Returns the substring of the String object from the first parameter position to the second 返回从第一个参数位置到第二个参数位置的子串|
|`toLowerCase`|None 无|Converts any uppercase letters in the string to lowercase 将大写字母转为小写|
|`toUpperCase`|None 无|Converts any lowercase letters in the string to uppercase 将小写字母转为大写|

> The `toString` method converts a number to string. `toString`方法将数字转为字符串。

> You can use `+` to concatenate two strings and you can also use it to convert a string to a number 你可以用`+`拼接两个字符串，也可以用它将字符串转为数字

```javascript
let value = + "123";   // 一元+运算符，将字符串"123"转为数字123
```

---

## **Page 20: Booleans in JavaScript – JavaScript中的布尔值**

> JavaScript has a Boolean type, with possible values of `true` and `false`. JavaScript有一个Boolean类型，可能的值为`true`和`false`。

> Basic Boolean operators 基本布尔运算符

|运算符|原文|含义|
|---|---|---|
|`!`|Logical not|逻辑非|
|`&&`|Logical and|逻辑与|
|`\|`|Logical or|逻辑或|

> The `&&` and `||` operators short-circuit, which means whether they will evaluate their second operand depends on the result of the first. `&&`和`||`运算符是短路的，意味着它们是否计算第二个操作数取决于第一个操作数的结果。

---

## **Page 21: Null and Undefined – Null与Undefined**

> JavaScript is relatively unusual as it has _two_ different ways to indicate that a variable does not have a value assigned to it. JavaScript相当不寻常，因为它有_两种_不同的方式来表示变量没有被赋值。

> `Null`: a variable that is intentionally not assigned a value has a null value `Null`：一个被故意不赋值的变量具有null值

> `Undefined`: the value of a variable that is not declared or not assigned `Undefined`：未声明或未赋值的变量的值

### **课件图片类比 Slide Visual Analogy（卫生纸架类比）**

课件用四张卫生纸架的照片做了形象类比：

|图片|对应值|含义|
|---|---|---|
|纸架上有满卷纸|**Non-zero value** 非零值|有值，有内容|
|纸架上有空纸筒|**0**|有值，但值是0（空筒还在）|
|纸架空着，无纸筒|**null**|故意留空（架子在，刻意不放纸）|
|连纸架都没有，只有墙上的洞|**undefined**|根本不存在（连架子都没装）|

**类比说明：** `null`就是你有一个衣架但故意不挂衣服——"这个位置是留出来的"。`undefined`是连衣架都没有——"这个位置从来没有被安排过"。

---

## **Page 22: JavaScript Typing – JavaScript类型系统**

> In JavaScript is dynamically typed, and so variables have no assigned types. JavaScript是动态类型的，因此变量没有固定的类型。

> A variable can therefore hold different types of values at different times during program execution. 因此，一个变量在程序执行期间可以在不同时刻持有不同类型的值。

课件代码：

```javascript
let value = 5;          // value是Number
value = "Hello";        // 现在value是String — No error! 不报错!
```

> The `typeOf` function returns the current type of its argument `typeof`函数返回其参数的当前类型

|原文|typeof返回值|
|---|---|
|returns "number" or "string" or "boolean" for primitive types|对原始类型返回"number"、"string"或"boolean"|
|returns "object" for an object or null|对对象或**null**返回"object"|
|returns "function" for functions|对函数返回"function"|
|returns "undefined" for uninitialised variables|对未初始化的变量返回"undefined"|

⚠️ **注意：** `typeof null` 返回 `"object"` 是一个著名的历史性bug，但因为太多代码依赖这个行为，所以永远不会被修复。

---

## **示例代码 Example Code**

在浏览器Console（F12）中逐段粘贴运行：

> [!NOTE 如何清空控制台？]
> 清空控制台有几种方式：
> 
> **方法1：点击清空按钮**（最直接） 在 Console 标签栏的左上角，有一个 **圆圈+斜线** 的图标（🚫），点击它即可清空所有消息。
> 
> **方法2：输入命令** 在控制台直接输入：
> 
> ```javascript
> clear()
> ```
> 
> 然后按 Enter，控制台就会清空。
> 
> **方法3：快捷键**
> 
> - **Windows/Linux**：`Ctrl + L`
> - **Mac**：`Cmd + L`
> 
> **方法4：刷新页面** 按 `F5` 或 `Ctrl + R` 刷新整个页面，控制台会重新开始（新的会话）。
> 
> ---
> 
> 💡 **提示**：如果你想保留某些重要消息但隐藏噪音，可以用 Console 顶部的 **Filter** 输入框来过滤特定关键词。例如输入 `Error` 只显示错误信息。



```javascript
// ============================================
// Page 14: Primitives vs Objects 原始类型 vs 对象
// ============================================

// --- Primitive: 值直接存储 ---
let a = 10;
let b = a;       // 复制了值本身
b = 20;          // 改b不影响a
console.log("a:", a, "b:", b);   // a:10 b:20

// --- Object: 存储的是引用(地址) ---
let objA = { x: 10 }; // [对象1: {x: 10}]
let objB = objA;     // 复制了引用(地址)! 指向同一个对象!
objB.x = 20;         // 改objB的属性 = 改objA的属性 (同一个对象!)
console.log("objA.x:", objA.x);   // 20 — 被影响了!

// --- Dot syntax 点语法访问属性 ---
console.log('"abc".length:', "abc".length);    // 3
console.log("Math.PI:", Math.PI);              // 3.141592653589793


// ============================================
// Page 15-16: Numbers 数值
// ============================================

// --- Floating-point trap 浮点陷阱 ---
console.log("\n--- Numbers ---");
console.log("0.1 + 0.2 =", 0.1 + 0.2);          // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3?", 0.1 + 0.2 === 0.3);  // false!

// --- Operators 运算符 ---
let x = 10;
x += 5;        // x = x + 5 = 15      复合赋值
x++;           // x = 16               自增
x--;           // x = 15               自减
console.log("x after +=5, ++, --:", x);

// --- Special values 特殊值 ---
console.log("1/0:", 1 / 0);                 // Infinity
console.log("-1/0:", -1 / 0);               // -Infinity
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);

// --- parseInt 字符串→整数 ---
console.log("parseInt('124'):", parseInt("124"));     // 124
console.log("parseInt('3.99'):", parseInt("3.99"));   // 3 — 截断! 不是四舍五入!

// --- Math object ---
console.log("Math.sin(3.5):", Math.sin(3.5));
console.log("Math.round(4.7):", Math.round(4.7));    // 5


// ============================================
// Page 17: NaN
// ============================================
console.log("\n--- NaN ---");

let bad = parseInt("hello", 10);
console.log("parseInt('hello'):", bad);             // NaN

// NaN is infectious 传染性
console.log("NaN + 5:", NaN + 5);                   // NaN
console.log("NaN * 100:", NaN * 100);               // NaN

// NaN is NOT equal to itself! NaN不等于自己!
console.log("NaN === NaN:", NaN === NaN);            // false!

// Use isNaN() to check 用isNaN()来检测
console.log("isNaN(NaN):", isNaN(NaN));              // true
console.log("isNaN(42):", isNaN(42));                // false
console.log("isNaN('hello'):", isNaN("hello"));      // true — 因为"hello"转Number是NaN


// ============================================
// Page 18-19: Strings 字符串
// ============================================
console.log("\n--- Strings ---");

// Single quotes = Double quotes, no difference 单双引号无区别
let s1 = "Hello";
let s2 = 'Hello';
console.log("single == double?", s1 === s2);  // true

// Escape characters 转义字符
console.log('Escaped quote: "hi"');      // 用\"在双引号串中放双引号
console.log("Backslash: \\");            // \\得到一个\
console.log("New line: line1\nline2");   // \n换行
console.log("Tab: col1\tcol2");          // \t制表符

// No char type! 无char类型
console.log("typeof 'A':", typeof 'A');  // "string" — 不是char

// String methods (P19)
let str = "JavaScript";
console.log("\n--- String Methods ---");
console.log("length:", str.length);              // 10
console.log("charAt(0):", str.charAt(0));        // "J"  — 索引从0开始!
console.log("charAt(4):", str.charAt(4));        // "S"
console.log("indexOf('Script'):", str.indexOf("Script"));   // 4
console.log("substring(0,4):", str.substring(0, 4));        // "Java"
console.log("toLowerCase:", str.toLowerCase());  // "javascript"
console.log("toUpperCase:", str.toUpperCase());  // "JAVASCRIPT"

// Concatenation 拼接
console.log("'Hello' + ' World':", "Hello" + " World");

// Type conversion tricks 类型转换技巧
console.log("(42).toString():", (42).toString(), typeof (42).toString());  // "42" string
console.log("+ '123':", + "123", typeof (+"123"));    // 123 number


// ============================================
// Page 20: Booleans 布尔值
// ============================================
console.log("\n--- Booleans ---");

console.log("!true:", !true);                // false
console.log("!false:", !false);              // true
console.log("true && false:", true && false); // false
console.log("true || false:", true || false); // true

// Short-circuit 短路求值
console.log("0 && 'hello':", 0 && "hello");      // 0    (第一个falsy, 直接返回)
console.log("1 && 'hello':", 1 && "hello");      // "hello" (第一个truthy, 返回第二个)
console.log("'' || 'default':", '' || "default"); // "default" (第一个falsy, 返回第二个)


// ============================================
// Page 21: null vs undefined
// ============================================
console.log("\n--- null vs undefined ---");

let declared;              // 声明但未赋值
let intentional = null;    // 故意赋值为null
console.log("declared:", declared);       // undefined — 没有架子
console.log("intentional:", intentional); // null      — 有架子，故意留空

console.log("typeof undefined:", typeof undefined);  // "undefined"
console.log("typeof null:", typeof null);             // "object" ⚠️ 历史bug!


// ============================================
// Page 22: Dynamic typing 动态类型
// ============================================
console.log("\n--- Dynamic Typing ---");

let dynamic = 42;
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // 42, "number"

dynamic = "now a string";
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // "now a string", "string"

dynamic = true;
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // true, "boolean"

dynamic = null;
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // null, "object" ⚠️

dynamic = undefined;
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // undefined, "undefined"

dynamic = function() { return 1; };
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // function..., "function"

// typeof 完整总结表:
console.log("\n--- typeof 总结 ---");
console.log("typeof 42:", typeof 42);                 // "number"
console.log("typeof 'hi':", typeof "hi");             // "string"
console.log("typeof true:", typeof true);             // "boolean"
console.log("typeof undefined:", typeof undefined);   // "undefined"
console.log("typeof null:", typeof null);             // "object" ⚠️
console.log("typeof {}:", typeof {});                 // "object"
console.log("typeof []:", typeof []);                 // "object" ← 数组也是!
console.log("typeof function(){}:", typeof function(){});  // "function"
```

---

### **Summary 总结**

- **Page 14 — 两大阵营**：原始类型(Number/String/Boolean/null/undefined)直接存值在栈上；对象类型(Function/Array/Date/Math等)在栈上存引用、实际数据在堆上。用点`.`语法访问属性。无引用时自动GC。
- **Page 15 — Number基本**：全部是64位双精度浮点(IEEE 754)；`0.1+0.2≠0.3`；运算符`+ - * / %`、`++ --`、`+= -= *= /= %=`
- **Page 16 — Number特殊值**：`MAX_VALUE`/`MIN_VALUE`/`NaN`/`POSITIVE_INFINITY`/`NEGATIVE_INFINITY`；`Math`对象做高级运算；`parseInt`字符串转整数
- **Page 17 — NaN**：无效运算返回NaN；NaN有**传染性**（任何含NaN的运算结果都是NaN）；`NaN !== NaN`（不等于自己!）；用`isNaN()`检测
- **Page 18 — String基本**：Unicode 16位序列；单双引号无区别；转义`\' \" \\ \n \t`；空串`''`无字符；无char类型
- **Page 19 — String方法**：`charAt`/`indexOf`/`substring`/`toLowerCase`/`toUpperCase`/`length`；`toString`数字转串；一元`+`串转数字；`+`拼接
- **Page 20 — Boolean**：`true`/`false`；运算符`!`、`&&`、`||`；`&&`和`||`短路求值
- **Page 21 — null vs undefined**：`null`=故意留空（有架子没纸）；`undefined`=未声明或未赋值（连架子都没有）
- **Page 22 — 动态类型**：变量无固定类型，可随时改变；`typeof`返回类型字符串；⚠️ `typeof null === "object"` 是历史bug

---

### **Guided Learning 引导问题**

1. **（P14）** `let a = [1,2]; let b = a; b.push(3);` 执行后 `a` 是什么？为什么？ 提示：`[1,2,3]`。数组是对象，`b = a` 复制的是引用，两者指向同一个数组。
   
2. **（P17）** 以下表达式结果是什么？`typeof NaN` 答案：`"number"`。NaN虽然名叫"不是数字"，但它的类型居然是number！
   
3. **（P19）** `"Hello".charAt(0)` 和 `"Hello"[0]` 有区别吗？ 答案：在现代JS中结果相同，都返回`"H"`。课件使用`charAt`是更传统的方式。
   
4. **（P21）** `null == undefined` 和 `null === undefined` 分别返回什么？ 答案：`true` 和 `false`。`==`认为它们相等，`===`因为类型不同所以不等。（这一点会在单元C类型转换中深入讲。）
   
5. **（P22）** 为什么 `typeof []` 返回 `"object"` 而不是 `"array"`？ 答案：因为在JS中数组就是对象。想判断是否是数组要用 `Array.isArray([])`。
   

---

Let me re-examine every detail on these crucial pages:所有细节确认完毕。这四页是整个Ch06中**最容易出考题**的部分，请认真读。

---

## C. **JavaScript Implicit Type Conversion – JavaScript隐式类型转换 ★★ Pages 23–26**

---

## **Page 23: JavaScript Implicit Type Conversion – JavaScript隐式类型转换（→Number / →String）**

> JavaScript attempts to convert values to be able to perform operations JavaScript会尝试转换值以便能够执行运算

**类比说明：** JS就像一个"过度热心的翻译"——你说的是中文，对方说的是英文，JS不会报错说"语言不通"，而是自作主张帮你翻译。大部分时候翻得对，但偶尔闹出大笑话。

### **1. 当期望Number时 When a Number is expected**

> When a Number is expected: 当期望Number时：

|原值|转换规则 (原文)|中文|示例|
|---|---|---|---|
|`true` / `false`|`true` and `false` are converted to 1 and 0|true→1，false→0|`4 - true // = 3`|
|String|Strings are converted to their value or NaN|字符串转为对应数值或NaN|`7 * "3" // = 21`|
|`null`|`null` is converted to 0|null转为0|`4 + null // = 4`|
|`undefined`|`undefined` is converted to NaN|undefined转为NaN|`4 + undefined // = NaN`|

**关键点：** `null → 0` 但 `undefined → NaN`，这两个要区分清楚。

### **2. 当期望String时 When a String is expected**

> When a String is expected: 当期望String时：

|原值|转换规则 (原文)|中文|
|---|---|---|
|Numbers|Numbers are converted to their string value, e.g. 1 -> "1"|数字转为对应字符串，如 1→"1"|
|Booleans|Booleans are converted to `"true"` and `"false"`|布尔转为"true"和"false"|
|`null`|`null` is converted to `"null"`|null转为"null"|
|`undefined`|`undefined` is converted `"undefined"`|undefined转为"undefined"|

---

## **Page 24: JavaScript Implicit Type Conversion – JavaScript隐式类型转换（→Boolean / 实际应用 / 手动转换）**

### **1. 当期望Boolean时 When a Boolean is expected ★★必考**

> When a Boolean is expected: 当期望Boolean时：

课件原文逐条列出了四条规则：

> 1. 0 is goes to false, all other numbers are interpreted as true
> 2. 0转为false，所有其他数字转为true

> 2. The empty string is interpreted as false,
> 3. 空字符串转为false，

> 3. All other strings (including "0"!) as true
> 4. 所有其他字符串（包括"0"！）转为true

> 4. Undefined, NaN and null are all interpreted as Boolean false
> 5. Undefined、NaN和null都转为Boolean false

将课件规则整理成一张表：

|Falsy（转为false的值）|Truthy（转为true的值）|
|---|---|
|`0`|所有其他数字（包括负数、Infinity）|
|`""` (空字符串)|**所有其他字符串（包括`"0"`和`"false"`！）**|
|`undefined`|所有对象（包括`[]`空数组、`{}`空对象）|
|`NaN`||
|`null`||

⚠️ **最大的陷阱：** `"0"` 是truthy！ `"false"` 也是truthy！因为它们是**非空字符串**。

### **2. 实际应用 Practical Uses**

> This behaviour is useful for; 这种行为可以用于：

> 1. checking for null objects before accessing their attributes:
> 2. 在访问属性之前检查对象是否为null：

```javascript
var property = object && object.getProperty();
// 如果object是null/undefined(falsy) → 短路，不会调用getProperty() → 不报错
// 如果object存在(truthy) → 继续调用getProperty()
```

> 2. Or for setting their default values:
> 3. 或者用于设置默认值：

```javascript
let name = otherName || "default";
// 如果otherName是null/undefined/""(falsy) → 使用"default"
// 如果otherName有值(truthy) → 使用otherName本身
```

### **3. 手动转换 Manual Conversion**

> All these conversions can be applied manually be calling the functions Number(...), String(...), Boolean(...) on the argument to be coerced. 所有这些转换都可以通过调用函数Number(...)、String(...)、Boolean(...)来手动应用。

---

## **Page 25: JavaScript Comparisons – JavaScript比较运算**

> The comparison operators in JavaScript (`>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`) work for both strings and numbers. JavaScript中的比较运算符（`>`、`<`、`>=`、`<=`、`==`、`===`、`!=`、`!==`）对字符串和数字都有效。

### **1. `==` 宽松等于（会类型转换）**

> The `==` operator performs type coercion if you give it arguments of different types 如果给`==`运算符传入不同类型的参数，它会进行类型转换

课件代码示例：

```javascript
"dog" == "dog"     // true     — 同类型，正常比较
1      == true     // true!    — true转为1，1==1
'abc'  == ['abc']  // true!!   — 数组转为字符串"abc"，"abc"=="abc"
```

### **2. `===` 严格等于（不转换类型）**

> The `===` operator performs returns true only if both operands are equal, and of the same type. `===`运算符仅当两个操作数相等**且**类型相同时才返回true。

课件代码示例：

```javascript
"dog" === "dog"     // true    — 同类型同值
1     === true      // false   — 类型不同(number vs boolean)
'abc' === ['abc']   // false   — 类型不同(string vs object)
```

### **3. 课件结论**

> Use `===` by default unless you have a good reason not to. 默认使用`===`，除非你有充分的理由不这样做。

**类比说明：** `==`就像一个宽容的裁判——"你俩长得差不多就算一样"；`===`就像一个严格的裁判——"不光长得一样，连身份证类型都得一样才行"。考试和实际开发中，**永远用严格裁判**。

---

## **Page 26: Type Conversion Craziness Time – 类型转换的疯狂时刻**

> Type coercion leads to some incredibly unintuitive results 类型转换导致了一些极其反直觉的结果

课件展示了三组经典陷阱，每组都有注释说明：

### **陷阱1：转换方向取决于运算符 Coercion direction depends on operator**

```javascript
2 - "1" // 1      ← 减法只能做数学 → "1"转为Number 1 → 2-1=1
2 + "1" // "21"   ← +号看到String → 2转为String "2" → "2"+"1"="21"
```

**核心规则：`+`号有两个含义——数学加法和字符串拼接。只要有一边是String，`+`就做拼接。其他运算符（`- * / %`）只做数学。**

### **陷阱2：NaN在意想不到的地方出现 NaNs appear where you least expect them**

```javascript
"b" + "a" + +"a" + "a"  // "baNaNa"
```

逐步拆解：

```
"b" + "a"    → "ba"           // 字符串拼接
    + +"a"   → + NaN          // +"a" 是一元+运算符，"a"转Number失败=NaN
"ba" + NaN   → "baNaN"        // NaN转String "NaN"，拼接
     + "a"   → "baNaNa"       // 再拼接"a"
```


## <mark style="background: #FFB86CA6;">Notes:</mark>
---
**一元 `+` 的作用：<mark style="background: #FF5582A6;">强制转换为数字</mark>

```javascript
+"a"  // → NaN
```

逐步分析：

1. **一元 `+` 执行** → 尝试把右边的值转成数字
2. **输入是 `"a"`** → 字符串，但内容不是数字
3. **转换失败** → 无法解析为有效数字
4. **返回 `NaN`** → "Not-a-Number" 表示转换失败

**对比看清楚：**

|表达式|结果|原因|
|---|---|---|
|`+"3"`|`3`|"3" 能转成数字 ✓|
|`+"a"`|`NaN`|"a" 无法转成数字 ✗|
|`+""`|`0`|空串特殊规则 → 0|
|`+true`|`1`|true 转成 1|

**在 "baNaNa" 里的作用：**

```javascript
"b" + "a" + +"a" + "a"
            ↑ ↑
          一元+ "a"变成NaN
            ↓
"b" + "a" + NaN + "a"
            ↓
"baNaNa"  // NaN与字符串拼接自动转成"NaN"
```

核心点：**一元 `+` 是类型强制器，若强制失败就返回 NaN**

---
### **陷阱3：等号不具有传递性 Equality is non-transitive**

```javascript
''  == 0    // true    ← 空串转Number=0，0==0
0   == '0'  // true    ← '0'转Number=0，0==0
''  == '0'  // false   ← 两边都是String，直接比较内容，""≠"0"
```

> 如果 `A == B` 且 `B == C`，那么 `A == C`？**不一定！** 这就是为什么`==`危险。

课件右下角配有**香蕉图片**，与 "baNaNa" 梗呼应。

---

## **示例代码 Example Code**

在浏览器Console（F12）中逐段粘贴运行。**建议：先猜结果，再运行验证。**

```javascript
// ============================================
// Page 23: → Number 转为数字
// ============================================
console.log("=== → Number (P23) ===");

console.log("4 - true      =", 4 - true);       // 3   (true→1)
console.log("4 - false     =", 4 - false);      // 4   (false→0)
console.log('7 * "3"       =', 7 * "3");        // 21  ("3"→3)
console.log('7 * "abc"     =', 7 * "abc");      // NaN ("abc"→NaN)
console.log("4 + null      =", 4 + null);       // 4   (null→0)
console.log("4 + undefined =", 4 + undefined);  // NaN (undefined→NaN)

// ⚠️ +号的特殊性: Number + String → 拼接!
console.log('4 + "2"       =', 4 + "2");        // "42" 不是6!
console.log('4 - "2"       =', 4 - "2");        // 2    减法只做数学


// ============================================
// Page 23: → String 转为字符串
// ============================================
console.log("\n=== → String (P23) ===");

console.log('"num:" + 1        =', "num:" + 1);          // "num:1"
console.log('"bool:" + true    =', "bool:" + true);       // "bool:true"
console.log('"null:" + null    =', "null:" + null);       // "null:null"
console.log('"undef:" + undefined =', "undef:" + undefined); // "undef:undefined"


// ============================================
// Page 24: → Boolean 转为布尔 ★★
// ============================================
console.log("\n=== → Boolean: Falsy values (P24) ===");

// 这5个是JS中仅有的falsy值（除false本身外）:
console.log("Boolean(0):",          Boolean(0));          // false ← 规则1
console.log("Boolean(''):",         Boolean(''));          // false ← 规则2
console.log("Boolean(undefined):",  Boolean(undefined));  // false ← 规则4
console.log("Boolean(NaN):",        Boolean(NaN));        // false ← 规则4
console.log("Boolean(null):",       Boolean(null));       // false ← 规则4

console.log("\n=== → Boolean: Truthy TRAPS 陷阱 ===");

// ⚠️ 这些全是true! 特别是"0"和"false"!
console.log('Boolean("0")    :', Boolean("0"));      // true! ← 非空字符串!
console.log('Boolean("false"):', Boolean("false"));   // true! ← 非空字符串!
console.log('Boolean(-1)     :', Boolean(-1));        // true  ← 非零数字
console.log('Boolean([])     :', Boolean([]));        // true  ← 对象
console.log('Boolean({})     :', Boolean({}));        // true  ← 对象


// ============================================
// Page 24: Practical uses 实际应用
// ============================================
console.log("\n=== Practical Uses (P24) ===");

// 用法1: 安全访问 — 检查null再访问属性
let user = null;
let name1 = user && user.name;   // user是null(falsy) → 短路 → 不访问.name → 不报错
console.log("Safe access (null user):", name1);  // null

let user2 = { name: "Alice" };
let name2 = user2 && user2.name; // user2存在(truthy) → 继续 → 返回"Alice"
console.log("Safe access (real user):", name2);  // "Alice"

// 用法2: 设置默认值
let input1 = "";
let result1 = input1 || "default";  // ""是falsy → 使用"default"
console.log("Default (empty):", result1);  // "default"

let input2 = "Bob";
let result2 = input2 || "default";  // "Bob"是truthy → 使用"Bob"
console.log("Default (has value):", result2);  // "Bob"

// 手动转换 Manual conversion
console.log("\n=== Manual Conversion (P24) ===");
console.log("Number('42'):", Number('42'));     // 42
console.log("String(42):", String(42));         // "42"
console.log("Boolean(1):", Boolean(1));         // true


// ============================================
// Page 25: == vs === 宽松 vs 严格
// ============================================
console.log("\n=== == vs === (P25) ===");

// == 课件三个示例:
console.log('"dog" == "dog" :', "dog" == "dog");      // true  (同类型同值)
console.log('1 == true      :', 1 == true);            // true! (true→1)
console.log("'abc' == ['abc']:", 'abc' == ['abc']);     // true! (数组→字符串)

// === 课件三个示例:
console.log('"dog" === "dog" :', "dog" === "dog");     // true  (同类型同值)
console.log('1 === true      :', 1 === true);           // false (类型不同!)
console.log("'abc' === ['abc']:", 'abc' === ['abc']);    // false (类型不同!)


// ============================================
// Page 26: Craziness 经典陷阱
// ============================================
console.log("\n=== Craziness (P26) ===");

// 陷阱1: +号方向
console.log('2 - "1"  =', 2 - "1");    // 1    (减法→数学)
console.log('2 + "1"  =', 2 + "1");    // "21" (加法→看到String→拼接)

// 陷阱2: baNaNa
console.log('"b"+"a"+ +"a"+"a" =', "b"+"a"+ +"a"+"a");  // "baNaNa"
// 拆解: "b"+"a" = "ba"
//        +"a" = NaN (一元+转Number失败)
//        "ba"+NaN = "baNaN" (NaN→"NaN")
//        "baNaN"+"a" = "baNaNa"

// 陷阱3: ==的非传递性
console.log("'' == 0   :", '' == 0);     // true  (""→0)
console.log("0 == '0'  :", 0 == '0');    // true  ("0"→0)
console.log("'' == '0' :", '' == '0');   // false (都是String, ""≠"0")
// A==B, B==C, 但 A≠C!
```

---

### **Summary 总结**

- **Page 23 — →Number**：true→1, false→0, String→数值/NaN, null→0, **undefined→NaN**（与null不同!）
- **Page 23 — →String**：所有类型都转为对应的字符串表示
- **Page 24 — →Boolean ★★**：**Falsy仅有5个**：`0`、`""`、`undefined`、`NaN`、`null`；**其他一切都是Truthy**（包括`"0"`和`"false"`！）
- **Page 24 — 实际应用**：`&&`做安全访问（防止null.属性报错）；`||`设置默认值；`Number()/String()/Boolean()`手动转换
- **Page 25 — == vs ===**：`==`会类型转换后比较（`1 == true`→true）；`===`类型不同直接false；**默认用`===`**
- **Page 26 — 经典陷阱**：`+`号的两面性（Number+String→拼接）；`"baNaNa"`（一元+转Number失败→NaN→拼入字符串）；`==`非传递性（A==B且B==C不意味着A==C）

---

### **🧠 小测验 Quiz — 先盖住答案，自己预测每一行的结果**

```javascript
1)  5 + "3"           →  ?
2)  5 - "3"           →  ?
3)  true + true       →  ?
4)  "5" + 3 + 1       →  ?
5)  "5" - 3 + 1       →  ?
6)  Boolean("0")      →  ?
7)  Boolean("")       →  ?
8)  null == undefined  →  ?
9)  null === undefined →  ?
10) typeof NaN         →  ?
```

**答案与逐行解析：**

|#|结果|解析|
|---|---|---|
|1|`"53"`|`+`看到String→拼接，5→"5"，"5"+"3"="53"|
|2|`2`|`-`只做数学，"3"→3，5-3=2|
|3|`2`|期望Number，true→1，1+1=2|
|4|`"531"`|从左到右：`"5"+3`→`"53"`，`"53"+1`→`"531"`（一旦变成String就一直拼接下去）|
|5|`3`|从左到右：`"5"-3`→`2`（数学），`2+1`→`3`（数学，因为两边都是Number）|
|6|`true`|"0"是**非空字符串**→truthy！这是最常考的陷阱|
|7|`false`|""是**空字符串**→falsy|
|8|`true`|`==`认为null和undefined相等（特殊规则）|
|9|`false`|`===`类型不同(object vs undefined)→直接false|
|10|`"number"`|NaN虽叫"Not a Number"，但typeof返回"number"！|

---

### **Guided Learning 引导问题**

1. **（P23）`4 + null` 和 `4 + undefined` 结果为什么不同？** 答案：null→0所以4+0=4；undefined→NaN所以4+NaN=NaN。课件明确区分了这两者的转换规则。
   
2. **（P24）为什么 `if ("0") { ... }` 里面的代码会执行？** 答案：`"0"`是非空字符串→truthy。P24规则3原文写道"All other strings (including "0"!) as true"——课件特意加了感叹号强调这个陷阱。
   
3. **（P26）把 `"b"+"a"+ +"a"+"a"` 拆成每一步的计算过程。** 答案：`"b"+"a"`→`"ba"` → `+"a"`→`NaN`(一元+) → `"ba"+NaN`→`"baNaN"` → `+"a"`→`"baNaNa"`
   
4. **（P25-26）为什么课件反复强调要用`===`而不是`==`？** 答案：因为`==`的类型转换规则复杂且反直觉（如非传递性问题），用`===`可以完全避免这些陷阱。
   

---

## D. **JavaScript Control Structures – JavaScript控制结构 Pages 27–28**

---

## **Page 27: JavaScript Control Structures – Loops – JavaScript控制结构——循环**

> JavaScript has standard `for`, `for in` and `while` loops. JavaScript有标准的`for`、`for in`和`while`循环。

### **1. `for` 循环**

课件代码：

```javascript
let triangle = 0;
for (let i = 1; i <= 3; i++) {   // 初始化; 条件; 每轮结束后执行
  triangle += i;                  // 每轮: triangle = 0+1, 1+2, 3+3
}
// triangle = 6
```

执行过程：

|轮次|i|条件 `i<=3`|triangle += i|triangle|
|:-:|:-:|:-:|:-:|:-:|
|1|1|true|0 + 1|1|
|2|2|true|1 + 2|3|
|3|3|true|3 + 3|6|
|4|4|false|—退出—|6|

### **2. `for...in` 循环（遍历对象属性）**

课件代码：

```javascript
let text = "";
const person = {fname:"Quentin", lname:"Coldwater"};
for (let x in person) {          // x 依次取对象的每个属性名(key)
  text += person[x];             // person[x] 取对应的属性值(value)
}
// text = "QuentinColdwater"
```

执行过程：

|轮次|x|person[x]|text|
|:-:|:-:|:-:|:-:|
|1|`"fname"`|`"Quentin"`|`"Quentin"`|
|2|`"lname"`|`"Coldwater"`|`"QuentinColdwater"`|

⚠️ 注意：`for...in` 遍历的是**属性名（key）**，不是属性值。要取值需要用 `person[x]`。

### **3. `while` 循环**

课件代码：

```javascript
let countdown = "";
let i = 3;
while (i >= 0) {                       // 每轮开始前检查条件
  countdown += "... " + i + "!";       // 拼接字符串
  i--;                                  // 手动递减! 忘了这行就死循环
}
// countdown = ... 3!... 2!... 1!... 0!
```

---

## **Page 28: JavaScript Control Structures – Conditions – JavaScript控制结构——条件**

> The `if-then` and `if-then-else` and `switch` statements are like that in other common programming languages, e.g. C/C++/Java `if-then`、`if-then-else`和`switch`语句与其他常见编程语言（如C/C++/Java）类似

### **1. `if` / `else if` / `else`**

课件代码：

```javascript
if (time < 10) {
  greeting = "Good morning";       // time<10时执行
} else if (time < 20) {
  greeting = "Good day";           // 10<=time<20时执行
} else {
  greeting = "Good evening";       // time>=20时执行
}
```

### **2. `switch` / `case` / `break` / `default`**

课件代码：

```javascript
switch (new Date().getDay()) {     // getDay()返回0-6，0=周日，6=周六
  case 0:
    text = "Today is Sunday";
    break;                          // ⚠️ 没有break会"穿透"到下一个case!
  case 6:
    text = "Today is Saturday";
    break;
  default:                          // 所有case都不匹配时执行
    text = "Looking forward to the weekend!";
}
```

⚠️ **`break`不能忘！** 如果漏写break，代码会"穿透(fall-through)"继续执行下一个case的代码，直到遇到break或switch结束。

### **3. 三元运算符 Ternary Operator**

> It also has ternary operator: 它还有三元运算符：

课件代码：

```javascript
let price = isMember ? '$2.00' : '$10.00';
//          条件       ? 为true时  : 为false时
```

这就是 `if-else` 的单行简写形式。

---

## **示例代码 Example Code**

在浏览器Console（F12）中逐段粘贴运行：

```javascript
// ============================================
// Page 27: for loop — 计算1+2+3+4+5
// ============================================
let triangle = 0;
for (let i = 1; i <= 3; i++) {   // 初始化i=1; 条件i<=3; 每轮i++
  triangle += i;
}
console.log("for — triangle:", triangle);  // 6


// ============================================
// Page 27: for...in — 遍历对象属性
// ============================================
let text = "";
const person = {fname: "Quentin", lname: "Coldwater"};
for (let x in person) {          // x是属性名: "fname", "lname"
  console.log("  key:", x, "→ value:", person[x]);
  text += person[x];
}
console.log("for...in — text:", text);     // "QuentinColdwater"


// ============================================
// Page 27: while — 倒计时
// ============================================
let countdown = "";
let i = 3;
while (i >= 0) {
  countdown += "... " + i + "!";
  i--;                            // ⚠️ 忘了这行 = 死循环!
}
console.log("while — countdown:", countdown);
// "... 3!... 2!... 1!... 0!"


// ============================================
// Page 28: if / else if / else
// ============================================
let time = 14;
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log("if — greeting:", greeting);   // "Good day"


// ============================================
// Page 28: switch (带break vs 不带break对比)
// ============================================

// ✓ 正确: 有break
let day = 6;
let dayText;
switch (day) {
  case 0:  dayText = "Sunday";    break;
  case 6:  dayText = "Saturday";  break;
  default: dayText = "Weekday";
}
console.log("switch (with break):", dayText);  // "Saturday"

// ✗ 危险: 漏掉break会穿透!
let color = "red";
let result = "";
switch (color) {
  case "red":
    result += "Red ";              // 匹配! 执行这行
    // 没有break! 继续穿透!
  case "blue":
    result += "Blue ";             // 也被执行了!
    // 还是没有break!
  default:
    result += "Default";           // 也被执行了!
}
console.log("switch (NO break!):", result);  // "Red Blue Default" — 全穿透了!


// ============================================
// Page 28: ternary 三元运算符
// ============================================
let isMember = true;
let price = isMember ? '$2.00' : '$10.00';
console.log("ternary — price:", price);    // "$2.00"

// 三元 vs if-else — 完全等价:
let age = 17;
let status1 = age >= 18 ? "Adult" : "Minor";         // 三元写法
let status2;
if (age >= 18) { status2 = "Adult"; }                 // if-else写法
else            { status2 = "Minor"; }
console.log("ternary:", status1, "if-else:", status2); // 都是"Minor"
```

---

### **Summary 总结**

- **Page 27 — 三种循环**：
    - `for (init; condition; update) { }` — 知道次数时用，和C/Java语法完全相同
    - `for (let key in obj) { }` — 遍历对象属性名（注意是**key不是value**，取值要用`obj[key]`）
    - `while (condition) { }` — 不知道次数时用，别忘了更新条件变量否则死循环
- **Page 28 — 条件结构**：
    - `if / else if / else` — 和C/Java相同
    - `switch / case / break / default` — ⚠️ **必须写break**，否则会穿透执行后续case
    - 三元运算符 `condition ? valueIfTrue : valueIfFalse` — if-else的简写形式

---

### **Guided Learning 引导问题**

1. **（P27）`for...in` 能不能遍历数组？会有什么问题？** 答案：技术上可以，但`for...in`遍历的是属性名（对数组来说是索引的字符串形式"0","1","2"），而且可能遍历到原型链上的属性。遍历数组应该用 `for` 或 `for...of`。
   
2. **（P28）以下switch输出什么？**
   
    ```javascript
    let x = 1;
    switch (x) {
      case 1: console.log("A");
      case 2: console.log("B");
      case 3: console.log("C"); break;
      default: console.log("D");
    }
    ```
    
    答案：输出 `A`、`B`、`C`（三行）。匹配case 1后没有break，穿透到case 2和case 3，直到遇到break才停止。
    
3. **（P28）三元运算符可以嵌套吗？推荐吗？** 答案：可以嵌套如 `a ? b : c ? d : e`，但**不推荐**——可读性极差，不如用if-else。


单元A–D全部讲完。Pages 10–28 的核心JavaScript基础已经全部覆盖。接下来大纲中还剩 **4. Arrays（P29–34）**、**5. Functions（P35–42）**、**6. Objects（P43–54）**、**7. Scoping & Closures（P55–64）**。你想继续哪一部分？

---

# 4. **Arrays – 数组 Pages 29–34**

---

## **Page 29: Arrays – 数组（章节标题页）**

本页是 "Arrays" 的标题封面页，正文内容从 Page 30 开始。

---

## **Page 30: Array Basics – 数组基础**

> Arrays are lists of elements indexed by a numerical value. 数组是由数字索引的元素列表。

> Array indices in begin at 0 and an array's length is one more than the highest index. 数组索引从0开始，数组的长度比最高索引大1。

> The size of an array can be modified even after they have been created 数组的大小在创建后仍然可以修改

> Elements of an array do not have to be of the same type! 数组的元素不必是同一类型！

> New arrays can be created using square bracket notation: 新数组可以用方括号表示法创建：

课件代码：

```javascript
var index;
var fruits = ["Banana", "Orange", "Apple", "Mango"];  // 方括号创建
for (index = 0; index < fruits.length; index++) {     // 用.length遍历
  text += fruits[index];                               // 用[index]访问元素
}

var person = [];             // 创建空数组
person[0] = "John";          // 索引0
person[1] = "Doe";           // 索引1
person[2] = 46;              // 索引2 — 混合类型! 字符串和数字共存!
var x = person.length;       // person.length will return 3  返回3
var y = person[0];           // person[0] will return "John" 返回"John"
```

**类比说明：** JS数组更像一个**百宝箱**而不是传统数组——里面什么都能放（字符串、数字、布尔、甚至另一个数组），而且箱子大小随时可以变。

---

## **Page 31: The Array() Constructor Method – Array()构造方法**

> Arrays can be created using the `Array()` method 数组可以用`Array()`方法创建

课件分三种情况逐一说明：

### **情况1：传入1个数字参数**

> Passing 1 numeric parameter creates an empty array of the specified number of elements: 传入1个数字参数会创建指定元素数量的空数组：

```javascript
let a = Array(10);           // 空数组，length = 10
```

> Length of the array is 10. 数组长度是10。

> Only assigned elements of an array occupy memory, i.e. if only elements 2 through 4 were assigned values, the other 7 elements would not be allocated storage and would remain `undefined`. 只有被赋值的元素才占用内存，即如果只给元素2到4赋了值，其他7个元素不会分配存储空间，仍然是`undefined`。

### **情况2：不传参数**

> Passing no parameters creates an empty array of length 0: 不传参数会创建长度为0的空数组：

```javascript
let b = Array();             // 空数组，length = 0
```

### **情况3：传入1个非数字参数，或传入2个以上参数**

> Passing either one non-numeric parameter or two or more parameters, or creates an array with the specified parameters as elements: 传入一个非数字参数或两个以上参数，会以这些参数作为元素创建数组：

```javascript
let c = Array(10, 2, "three", "four");  // [10, 2, "three", "four"]
```

> Length of the array is 4 with the four provided elements in them. 数组长度为4，包含了提供的四个元素。

**⚠️ 这个设计很容易踩坑：** `Array(10)` 和 `Array(10, 2)` 的行为完全不同——前者创建空数组长度10，后者创建包含两个元素`[10, 2]`的数组。

---

## **Page 32: Accessing Array Elements – 访问数组元素**

### **1. 两种遍历方式**

> You can iterate over an array using the `length` property, or a `for in` loop 你可以使用`length`属性或`for in`循环来遍历数组

课件代码：

```javascript
let theBestFruits = ["Banana", "Pomegranate", "Mulberry", "Pear"]

// Approach 1  方式1: 用length属性和传统for循环
for (let i = 0; i < theBestFruits.length; i++)
{
  console.log(theBestFruits[i]);       // 输出每个元素的值
}

// Approach 2  方式2: 用for...in
for (let fruit in theBestFruits)
{
  console.log(fruit);                  // ⚠️ 输出的是索引"0","1","2","3" 不是值!
}
```

⚠️ 注意方式2的陷阱：`for...in`在数组上遍历的是**索引（字符串形式的"0","1","2"...）**，不是元素值。要取值需要 `theBestFruits[fruit]`。

### **2. 越界赋值自动扩展**

> Assignment to an index greater than or equal to the current length simply increases the length of the array: 赋值给一个大于或等于当前长度的索引，会直接增加数组的长度：

```javascript
theBestFruits[99] = "Yuzu";
theBestFruits.length;           // Returns 100  返回100
```

### **3. 越界访问返回undefined（不报错！）**

> Querying a non-existent array index, returns `undefined`: 查询一个不存在的数组索引，返回`undefined`：

```javascript
theBestFruits[102];             // Returns undefined  返回undefined
```

> Errors go undetected! 错误不会被发现！

课件配了一张香蕉皮图片，暗示这种"静默失败"是一个陷阱——你以为程序正常运行，其实在处理undefined值。

---

## **Page 33: Array Methods – 数组方法**

课件展示了完整的方法表格：

|Method 方法|Description (原文)|中文|
|---|---|---|
|`push`|Add an element to the end|在末尾添加元素|
|`pop`|Remove an element from the end|从末尾移除元素|
|`shift`|Remove an element from the front|从头部移除元素|
|`unshift`|Add an element to the front|在头部添加元素|
|`join`|returns a string of the elements in the array|将数组元素拼接为字符串|
|`reverse`|reverses the array|反转数组|
|`sort`|sorts the array, accepts optional comparator function|排序数组，接受可选的比较函数|
|`concat`|concatenates 2 or more arrays|连接2个或多个数组|
|`slice`|creates 2 arrays from 1 array|从1个数组创建2个数组|
|`splice`|inserts a group of elements at a given index|在指定索引处插入一组元素|
|`delete`|replaces an element at an index with undefined|将指定索引处的元素替换为undefined|

**记忆口诀：** 末尾操作用 push/pop（像弹夹：push压入，pop弹出），头部操作用 unshift/shift（shift移走，unshift加回来）。

---

## **Page 34: Associative Arrays – 关联数组**

> Associative arrays uses `String` values instead of `Number` values as indices: 关联数组使用`String`值而不是`Number`值作为索引：

```javascript
let arr = [];
arr["name"] = "Bob";           // 用字符串作索引
```

> They act somewhat like ordinary arrays, but the following operations are not available to them: 它们的行为有点像普通数组，但以下操作对它们不可用：

> push, pop, shift, unshift push、pop、shift、unshift

> We won't discuss them much here as they are really `Objects` under the hood which will be covered later on. 我们在此不过多讨论它们，因为它们在底层其实就是`Objects`（对象），将在后面介绍。

---

## **示例代码 Example Code**

在浏览器Console（F12）中逐段运行：

```javascript
// ============================================
// Page 30: Array basics 数组基础
// ============================================

// 方括号创建 + 混合类型
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits:", fruits);
console.log("length:", fruits.length);     // 4
console.log("fruits[0]:", fruits[0]);      // "Banana" — 索引从0开始!
console.log("fruits[3]:", fruits[3]);      // "Mango"  — 最后一个是length-1

// 混合类型!
let person = [];
person[0] = "John";          // String
person[1] = "Doe";           // String
person[2] = 46;              // Number — 不同类型共存!
console.log("person:", person, "length:", person.length);  // 3


// ============================================
// Page 31: Array() constructor — 三种行为
// ============================================
console.log("\n=== Array() Constructor (P31) ===");

// ⚠️ 情况1: 1个数字 → 空数组，该数字为length
let a = Array(10);
console.log("Array(10):", a, "length:", a.length);  // [ <10 empty> ] length:10
console.log("a[0]:", a[0]);                          // undefined — 空的!

// 情况2: 无参数 → 空数组length=0
let b = Array();
console.log("Array():", b, "length:", b.length);     // [] length:0

// 情况3: 多个参数或非数字 → 以参数为元素
let c = Array(10, 2, "three", "four");
console.log("Array(10,2,'three','four'):", c);       // [10, 2, "three", "four"]
console.log("length:", c.length);                     // 4

// ⚠️ 陷阱对比!
console.log("\n--- Constructor trap 构造器陷阱 ---");
console.log("Array(3):", Array(3));            // [empty × 3] — 空数组长度3!
console.log("Array(3,4):", Array(3,4));        // [3, 4]      — 元素是3和4!
console.log("[3]:", [3]);                       // [3]         — 方括号没有歧义，推荐!


// ============================================
// Page 32: Accessing — 遍历/越界/静默失败
// ============================================
console.log("\n=== Accessing (P32) ===");

let bestFruits = ["Banana", "Pomegranate", "Mulberry", "Pear"];

// 方式1: 传统for循环用length
console.log("--- Approach 1: for + length ---");
for (let i = 0; i < bestFruits.length; i++) {
  console.log("  [" + i + "]:", bestFruits[i]);      // 输出值
}

// 方式2: for...in
console.log("--- Approach 2: for...in ---");
for (let idx in bestFruits) {
  console.log("  idx:", idx, "type:", typeof idx);    // ⚠️ idx是字符串"0","1"...不是数字!
}

// 越界赋值 → length自动增长
bestFruits[99] = "Yuzu";
console.log("\n赋值[99]后 length:", bestFruits.length);  // 100!
console.log("[50]:", bestFruits[50]);                      // undefined — 中间全是空洞

// 越界访问 → 不报错，返回undefined
console.log("[102]:", bestFruits[102]);                    // undefined — 静默失败!


// ============================================
// Page 33: Array methods 所有方法
// ============================================
console.log("\n=== Array Methods (P33) ===");

let arr = ["A", "B", "C"];
console.log("初始:", JSON.stringify(arr));  // ["A","B","C"]

// push / pop — 末尾操作
arr.push("D");                              // 末尾添加
console.log("push('D'):", JSON.stringify(arr));   // ["A","B","C","D"]

let popped = arr.pop();                     // 末尾移除，返回被移除的元素
console.log("pop():", popped, "→", JSON.stringify(arr));  // "D" → ["A","B","C"]

// unshift / shift — 头部操作
arr.unshift("Z");                           // 头部添加
console.log("unshift('Z'):", JSON.stringify(arr)); // ["Z","A","B","C"]

let shifted = arr.shift();                  // 头部移除
console.log("shift():", shifted, "→", JSON.stringify(arr));  // "Z" → ["A","B","C"]

// join — 拼接为字符串
console.log("join('-'):", arr.join("-"));    // "A-B-C"

// reverse — 反转（⚠️ 修改原数组!）
console.log("reverse():", JSON.stringify(arr.reverse()));  // ["C","B","A"]
arr.reverse();  // 反转回来

// sort — 排序
let nums = [10, 9, 80, 3];
nums.sort();                                // ⚠️ 默认按字符串排序!
console.log("\nsort()默认:", JSON.stringify(nums));  // [10, 3, 80, 9] — 错的!

nums.sort((a, b) => a - b);                 // 传比较函数 → 正确数字排序
console.log("sort(a-b):", JSON.stringify(nums));    // [3, 9, 10, 80] — 对的!

// concat — 连接数组（不改原数组）
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log("\nconcat:", JSON.stringify(arr1.concat(arr2)));  // [1,2,3,4]
console.log("arr1不变:", JSON.stringify(arr1));                // [1,2]

// slice — 截取子数组（不改原数组）
let colors = ["red", "green", "blue", "yellow"];
console.log("slice(1,3):", JSON.stringify(colors.slice(1, 3)));  // ["green","blue"]
console.log("colors不变:", JSON.stringify(colors));

// splice — 在指定位置插入（⚠️ 会改原数组!）
colors.splice(1, 0, "purple");              // 在索引1处，删除0个，插入"purple"
console.log("splice后:", JSON.stringify(colors));  // ["red","purple","green","blue","yellow"]

// delete — 替换为undefined（⚠️ length不变!）
delete colors[0];
console.log("delete [0]:", JSON.stringify(colors));  // [null,"purple","green","blue","yellow"]
console.log("length:", colors.length);                // 5 — 长度不变!


// ============================================
// Page 34: Associative arrays = Objects
// ============================================
console.log("\n=== Associative Arrays (P34) ===");

let assoc = [];
assoc["name"] = "Bob";
assoc["age"] = 25;
console.log('assoc["name"]:', assoc["name"]);  // "Bob"
console.log("length:", assoc.length);           // 0! ← 字符串索引不算入length!

// push/pop/shift/unshift 不可用:
// assoc.push("x");  // 技术上能调用，但行为和预期不同

// 本质就是对象:
console.log("typeof assoc:", typeof assoc);    // "object"
```

---

### **Summary 总结**

- **Page 29** — 章节标题页 "Arrays"
- **Page 30 — 基础** — 索引从0开始；length = 最高索引+1；创建后大小可变；元素可以混合类型；用方括号`[]`创建和访问
- **Page 31 — Array()构造器** — 三种行为：`Array(10)` → 空数组长度10；`Array()` → 空数组长度0；`Array(10,2,"three","four")` → 以参数为元素的数组。⚠️ `Array(3)` vs `Array(3,4)` 行为完全不同
- **Page 32 — 访问元素** — 两种遍历（for+length / for...in）；越界赋值自动扩展length；越界访问返回undefined不报错（静默失败⚠️）；for...in遍历的是索引字符串不是值
- **Page 33 — 11个方法** — push/pop(末尾)、shift/unshift(头部)、join(→字符串)、reverse(反转)、sort(排序，⚠️默认按字符串排)、concat(连接)、slice(截取不改原数组)、splice(插入会改原数组)、delete(替换为undefined)
- **Page 34 — 关联数组** — 用String做索引；不能用push/pop/shift/unshift；本质是Object，后面会详细讲

---

### **🧠 小测验 Quiz**

```javascript
1) let a = Array(5);
   console.log(a.length);         // ?
   console.log(a[0]);             // ?

2) let b = [10, 9, 80, 3];
   b.sort();
   console.log(b);                // ?

3) let c = ["x", "y", "z"];
   delete c[1];
   console.log(c.length);         // ?
   console.log(c[1]);             // ?

4) let d = [];
   d[100] = "hello";
   console.log(d.length);         // ?
```

**答案：**

|#|结果|解析|
|---|---|---|
|1|`5` 和 `undefined`|`Array(5)` 创建长度5的空数组，所有元素都是undefined|
|2|`[10, 3, 80, 9]`|⚠️ sort()默认按**字符串**排序！"10"<"3"因为"1"<"3"。正确做法：`b.sort((a,b)=>a-b)`|
|3|`3` 和 `undefined`|delete只是把元素替换为undefined，**不改变length**！|
|4|`101`|赋值d[100]后，length自动变为最高索引+1=101，中间0-99全是undefined空洞|

---

### **Guided Learning 引导问题**

1. **（P30）为什么JS允许数组混合类型，而Java/C不允许？** 提示：因为JS是动态类型语言，变量没有固定类型。数组本质上就是一个对象，"索引"只是属性名。
   
2. **（P32）`for...in`遍历数组时，变量拿到的是什么？是值还是索引？** 答案：是索引（而且是**字符串形式**的索引"0","1","2"...），不是值。这是很多人的误解。
   
3. **（P33）`slice` 和 `splice` 名字很像，它们最大的区别是什么？** 答案：`slice`**不改**原数组（返回新子数组）；`splice`**会改**原数组（在原数组上插入/删除）。
   
4. **（P34）为什么关联数组的`.length`返回0？** 答案：因为`.length`只统计数字索引的元素。字符串索引的属性不计入length。这进一步证明了关联数组本质上是对象，不是真正的数组。
   

---

准备好了告诉我，继续 **5. Functions（P35–42）** ——这部分有一个非常重要的考点：**call by value vs call by sharing**。

---

# 5.  **Functions – 函数 Pages 35–42**

---

## **Page 35: Functions – 函数（章节标题页）**

本页是 "Functions" 的标题封面页，正文内容从 Page 36 开始。

---

## **Page 36: Defining a JavaScript Function – 定义JavaScript函数**

> Syntax for defining a function: 定义函数的语法：

```javascript
function <name> (<param1>, <param2>, …) {  // function 函数名 (参数列表)
  <statement1>                               //   语句1
  <statement2>                               //   语句2
  ...
}
```

> Functions must be defined before use (i.e. in a page header, or in an external file) 函数必须在使用前定义（即在页面头部或外部文件中）

课件展示了一个完整的HTML示例，演示函数定义和调用的配合：

```html
<body>
<h2>JavaScript Functions</h2>
<p>This example calls a function which performs a calculation, and
returns the result:</p>

<p id="demo"></p>

<script>
function myFunction(p1, p2) {                    // 定义函数，两个参数
  return p1 * p2;                                 // 返回乘积
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
                                                  // 调用函数，传入4和3
                                                  // 结果12显示在页面上
</script>
</body>
```

课件右侧截图显示页面输出结果为 **12**。

---

## **Page 37: Calling a JavaScript Function – 调用JavaScript函数 ★★**

这是整个Functions章节最重要的一页。

### **1. 原始类型：Call by Value 按值传递**

> Primitive parameters are passed using call by value: 原始类型参数通过按值传递：

课件代码：

```javascript
function run(x) {        // x是参数的副本       let u = 1;
  x += 1;                // 修改副本            let v = run(u);
  return x;                                     // u = 1, v = 2
}
```

`u` 的值是1，传给 `run` 后，`x` 是 `u` 的**副本**。修改 `x` 不影响 `u`。

**类比说明：** 你把一张纸上的数字**抄**给函数。函数在自己的那份副本上随便改，你的原稿不受影响。

### **2. 对象类型：Call by Sharing 按共享传递**

> Object parameters are passed using call by sharing, i.e. the reference is passed, so the function body can change the object however, an assignment to the parameter within the function will not change the original parameter 对象参数通过按共享传递，即传递的是引用，所以函数体可以修改对象，但是，在函数内对参数的赋值不会改变原始参数

课件代码（这是完整的课件原始示例）：

```javascript
function setOutOnAdventure(party1) {
  party1.push("Ivan");  //changes actual parameter  修改了原数组!
  party1.push("Mia");

  let party2 = new Array("Felix", "Jenna", "Sheba");
  party1 = party2;      //no effect on actual parameter  对原参数无效!
  party1.push("Piers")
  return party1;
}

party1 = new Array("Isaac", "Garet");
party2 = setOutOnAdventure(party1);

console.log(party1);  // ["Isaac", "Garet", "Ivan", "Mia"]
console.log(party2);  // ["Felix", "Jenna", "Sheba", "Piers"]
```

**逐步拆解这个例子：**

|步骤|代码|外部party1指向|函数内party1指向|解释|
|:-:|---|:-:|:-:|---|
|1|`party1 = new Array("Isaac","Garet")`|`["Isaac","Garet"]`|—|创建原数组|
|2|进入函数，party1传入|`["Isaac","Garet"]`|**同一个数组**|引用副本，指向同一对象|
|3|`party1.push("Ivan")`|`["Isaac","Garet","Ivan"]`|**同一个数组**|✓ 通过引用修改了原数组|
|4|`party1.push("Mia")`|`["Isaac","Garet","Ivan","Mia"]`|**同一个数组**|✓ 继续修改原数组|
|5|`party1 = party2`|`["Isaac","Garet","Ivan","Mia"]`|`["Felix","Jenna","Sheba"]`|✗ 函数内party1指向了**新数组**，但外部party1不受影响|
|6|`party1.push("Piers")`|不变|`["Felix","Jenna","Sheba","Piers"]`|修改的是函数内的新数组|

**类比说明：** 你给函数一张**快递柜钥匙的复印件**。函数可以用复印的钥匙打开柜子往里面塞东西（`push`→修改原对象✓），但如果函数把复印钥匙扔了换了一把新钥匙（`party1 = party2`→重赋值✗），你手里的原钥匙还是指向原来的柜子。

---

## **Page 38: Function Parameters – 函数参数**

> JavaScript is _very_ lax about function parameters: JavaScript对函数参数_非常_宽松：

> Like Python, parameters have no type specified 和Python一样，参数不指定类型

> You can pass too few in which case the missing arguments are `undefined`. 你可以传入太少的参数，此时缺少的参数为`undefined`。

> You can pass too many in which case they are not addressable by name. 你可以传入太多的参数，此时多余的参数不可按名称访问。

课件配了一张香蕉皮图片，暗示这种"宽松"也是陷阱。

> Parameters named in the function definition are called formal parameters. 在函数定义中命名的参数叫做**形式参数(formal parameters)**。

```javascript
function f(x, y)   // x, y 是形式参数 formal parameters
{
  ...
}
```

> Parameters provided in a function call are called actual parameters. 在函数调用中提供的参数叫做**实际参数(actual parameters)**。

```javascript
f(3, 1, 4);        // 3, 1, 4 是实际参数 actual parameters
```

注意这里 `f` 只定义了2个形参，但调用时传了3个实参——JS不报错！

---

## **Page 39: Actual Function Parameters – 实际函数参数**

> This flexibility is typical of many scripting languages: different numbers of parameters may be appropriate for different uses of the function. 这种灵活性是许多脚本语言的典型特征：不同数量的参数可能适用于函数的不同用途。

> A property array named `arguments` holds all the actual parameters, including the extra ones not specified in the definition. 一个名为`arguments`的属性数组保存所有实际参数，包括定义中未指定的那些额外参数。

课件代码（findMax 示例）：

```javascript
function findMax() {                           // 没有形式参数!
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {  // arguments保存了所有实参
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

findMax(4, 5, 6);                              // 返回6 — 虽然函数定义没有参数!
```

---

## **Page 40: Functions are First-class – 函数是一等公民**

> Functions are first-class objects in JavaScript, so accessing a function without appending `()` will return the function definition instead of calling it. 函数在JavaScript中是一等对象，所以访问函数而不加`()`会返回函数定义本身，而不是调用它。

> Therefore, functions may be assigned to variables and to object properties: 因此，函数可以被赋值给变量和对象属性：

课件代码：

```javascript
function announce() {
  console.log("It's Groundhog day!");
}

// Set `reannounce` refers to the `announce` object
// 让reannounce引用announce函数对象
let reannounce = announce;          // 没有()! 赋值的是函数本身

announce();                          // A call to `announce`  调用announce
reannounce();                        // Also a call to `announce`  也是调用announce
```

> When cast to a String a function is converted to its definition as text: 当转换为String时，函数会被转换为其定义的文本形式：

课件展示了一个HTML示例：将函数 `toCelsius` 赋值给 `innerHTML`（没加括号），页面显示的是函数的**源代码文本**：`function toCelsius(f) { return (5/9) * (f-32); }`

```javascript
function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo").innerHTML = toCelsius;  // 没有()! 输出函数定义文本
```

---

## **Page 41: Anonymous Functions – 匿名函数**

> You can also write anonymous functions (i.e. functions without a name). 你也可以写匿名函数（即没有名字的函数）。

> For example, consider the `sort` function on arrays, which accepts a parameter to specify the order in which to sort the elements. The parameter is a function that takes two parameters and returns: 例如，考虑数组上的`sort`函数，它接受一个参数来指定元素的排序顺序。该参数是一个接受两个参数并返回以下值的函数：

> – a negative value if the first parameter comes before the second – 如果第一个参数应排在第二个之前，返回负值

> – a positive value if the first parameter comes after the second – 如果第一个参数应排在第二个之后，返回正值

> – 0 if the first parameter and the second parameter are equivalent – 如果两个参数相等，返回0

课件代码：

```javascript
let points = [2,8,1,5,3,1];

points.sort();                                       // 默认排序
console.log(points);                                  // [1,1,2,3,5,8]

points.sort(function(a,b){ return b-a; });           // 匿名函数作为比较器
console.log(points);                                  // [8,5,3,2,1,1]
```

> Anonymous functions can be written more concisely using `(...)=>` syntax, e.g. 匿名函数可以用`(...)=>`语法更简洁地写出，例如：

```javascript
points.sort((a,b) => { return b-a; });               // 箭头函数 arrow function
```

---

## **Page 42: Recursive Functions – 递归函数**

> Like any other languages, you can write recursive functions in JavaScript. 和其他语言一样，你可以在JavaScript中编写递归函数。

> However, this creates a problem if the function is anonymous. How would you call a function without its name? The solution is using named anonymous functions: 然而，如果函数是匿名的，这就产生了一个问题。如何调用一个没有名字的函数？解决方案是使用**命名匿名函数(named anonymous functions)**：

课件代码：

```javascript
var ninja = {
  yell: function cry(n) {                // "cry"是命名匿名函数的名字
    return n > 0 ? cry(n-1) + "a" : "hiy";  // cry递归调用自己
  }
};

console.log( ninja.yell(5) );           // outputs hiyaaaaa
```

逐步展开递归过程：

```
ninja.yell(5)
= cry(5)
= cry(4) + "a"
= (cry(3) + "a") + "a"
= ((cry(2) + "a") + "a") + "a"
= (((cry(1) + "a") + "a") + "a") + "a"
= ((((cry(0) + "a") + "a") + "a") + "a") + "a"
= (((("hiy" + "a") + "a") + "a") + "a") + "a"
= "hiyaaaaa"
```

---

## **示例代码 Example Code**

在浏览器Console（F12）中逐段运行：

```javascript
// ============================================
// Page 36: Defining a function 定义函数
// ============================================
function myFunction(p1, p2) {     // 定义: 两个参数
  return p1 * p2;                  // 返回乘积
}
console.log("myFunction(4,3):", myFunction(4, 3));  // 12


// ============================================
// Page 37: Call by Value 按值传递 (原始类型) ★★
// ============================================
console.log("\n=== Call by Value (P37) ===");

function run(x) {
  x += 1;                         // 修改的是副本，不影响外部
  return x;
}
let u = 1;
let v = run(u);
console.log("u:", u);              // 1 — 没变!
console.log("v:", v);              // 2


// ============================================
// Page 37: Call by Sharing 按共享传递 (对象) ★★
// ============================================
console.log("\n=== Call by Sharing (P37) ===");

function setOutOnAdventure(party1) {
  party1.push("Ivan");             // ✓ 修改了原数组! (通过引用操作原对象)
  party1.push("Mia");              // ✓ 继续修改原数组!

  let party2 = new Array("Felix", "Jenna", "Sheba");
  party1 = party2;                 // ✗ 重赋值! 函数内party1指向了新数组
                                   //   但外部的party1不受任何影响!
  party1.push("Piers");            // 修改的是函数内的新数组
  return party1;
}

let party1 = new Array("Isaac", "Garet");
let party2 = setOutOnAdventure(party1);

console.log("party1:", JSON.stringify(party1));
// ["Isaac","Garet","Ivan","Mia"]  ← push有效! 重赋值无效!

console.log("party2:", JSON.stringify(party2));
// ["Felix","Jenna","Sheba","Piers"]  ← 函数返回的新数组


// ============================================
// Page 38-39: Flexible parameters 灵活参数
// ============================================
console.log("\n=== Flexible Params (P38) ===");

function showParams(a, b) {        // 定义了2个形式参数 formal parameters
  console.log("  a:", a, "b:", b);
}

showParams(1);                     // 少传: b = undefined
showParams(1, 2);                  // 正好
showParams(1, 2, 3, 4);           // 多传: 3和4被忽略(但可以用arguments获取)

// arguments 对象 (P39)
console.log("\n=== arguments (P39) ===");

function findMax() {               // 没有定义任何形式参数!
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];          // arguments[i]获取第i个实际参数
    }
  }
  return max;
}
console.log("findMax(4,5,6):", findMax(4, 5, 6));    // 6
console.log("findMax(99,3,50):", findMax(99, 3, 50)); // 99


// ============================================
// Page 40: First-class functions 一等公民
// ============================================
console.log("\n=== First-class (P40) ===");

function announce() {
  return "It's Groundhog day!";
}

// 不加() → 赋值函数本身
let reannounce = announce;
console.log("reannounce():", reannounce());  // 调用函数 → "It's Groundhog day!"

// 加() → 调用函数，赋值的是返回值
let message = announce();
console.log("message:", message);             // 直接是字符串 "It's Groundhog day!"

// 函数转String → 得到源代码文本
function toCelsius(f) { return (5/9) * (f-32); }
console.log("String(toCelsius):", String(toCelsius));
// "function toCelsius(f) { return (5/9) * (f-32); }"


// ============================================
// Page 41: Anonymous + Arrow functions 匿名+箭头
// ============================================
console.log("\n=== Anonymous & Arrow (P41) ===");

let points = [2, 8, 1, 5, 3, 1];

// 默认sort
points.sort();
console.log("sort()默认:", JSON.stringify(points));  // [1,1,2,3,5,8]

// 匿名函数作比较器: 降序
points.sort(function(a, b) { return b - a; });
console.log("匿名降序:", JSON.stringify(points));     // [8,5,3,2,1,1]

// 箭头函数: 更简洁的写法
points.sort((a, b) => { return a - b; });
console.log("箭头升序:", JSON.stringify(points));      // [1,1,2,3,5,8]

// sort比较器规则:
// 返回负值 → a排在b前面
// 返回正值 → b排在a前面
// 返回0   → 顺序不变


// ============================================
// Page 42: Recursive named anonymous function 递归
// ============================================
console.log("\n=== Recursive (P42) ===");

var ninja = {
  yell: function cry(n) {                    // cry是"命名匿名函数"
    return n > 0 ? cry(n - 1) + "a" : "hiy"; // 递归: n>0则调用自身
  }
};

console.log("ninja.yell(5):", ninja.yell(5));  // "hiyaaaaa"
console.log("ninja.yell(0):", ninja.yell(0));  // "hiy" — 递归终止条件
console.log("ninja.yell(3):", ninja.yell(3));  // "hiyaaa"

// 展开 ninja.yell(3):
// cry(3) = cry(2)+"a" = (cry(1)+"a")+"a" = ((cry(0)+"a")+"a")+"a"
//        = (("hiy"+"a")+"a")+"a" = "hiyaaa"
```

---

### **Summary 总结**

- **Page 35** — 章节标题页 "Functions"
- **Page 36 — 定义** — `function name(params) { ... }`；须在使用前定义；课件示例演示了函数定义在`<script>`中、通过`onclick`调用
- **Page 37 — 参数传递 ★★** — **原始类型用call by value**（传值的副本，函数内修改不影响外部）；**对象类型用call by sharing**（传引用的副本，可以通过引用修改对象属性如push，但对参数重赋值不影响外部变量）
- **Page 38 — 参数灵活性** — 参数无类型；传少了→缺失的为`undefined`；传多了→多余的不可按名访问；形式参数(formal)=定义中的、实际参数(actual)=调用时的
- **Page 39 — arguments对象** — `arguments`属性数组保存所有实际参数（含多余的）；可以写不定参数数量的函数
- **Page 40 — 一等公民** — 不加`()`返回函数定义本身；可赋值给变量和属性；转String得到源代码文本
- **Page 41 — 匿名函数** — `function(a,b){...}` 没有名字的函数；常用于sort比较器（负→a前，正→b前，0→不变）；箭头函数`(a,b) => {...}`是更简洁的写法
- **Page 42 — 递归** — JS支持递归；匿名递归用命名匿名函数 `function cry(n){... cry(n-1) ...}` 解决

---

### **🧠 小测验 Quiz**

**题1（P37 ★★）— 预测输出：**

```javascript
function modify(arr, num) {
  arr.push(99);
  arr = [0, 0, 0];
  num = 99;
}
let myArr = [1, 2, 3];
let myNum = 10;
modify(myArr, myNum);
console.log(myArr);    // ?
console.log(myNum);    // ?
```

**题2（P40）— 以下两行有什么区别？**

```javascript
let a = myFunction;
let b = myFunction();
```

**题3（P42）— 以下代码输出什么？**

```javascript
var ninja = {
  yell: function cry(n) {
    return n > 0 ? cry(n-1) + "a" : "hiy";
  }
};
console.log(ninja.yell(2));
```

---

**答案：**

**题1：** `myArr` → `[1, 2, 3, 99]`，`myNum` → `10`

- `arr.push(99)` ✓ 修改了原数组（call by sharing，通过引用操作原对象）
- `arr = [0,0,0]` ✗ 只是让函数内的`arr`指向了新数组，外部`myArr`不受影响
- `num = 99` ✗ 只修改了副本（call by value）

**题2：**

- `let a = myFunction` — `a`现在**是**那个函数本身（可以通过`a()`调用它）
- `let b = myFunction()` — 立即**调用**了函数，`b`是函数的**返回值**

**题3：** `"hiyaa"`

- `cry(2)` = `cry(1) + "a"` = `(cry(0) + "a") + "a"` = `("hiy" + "a") + "a"` = `"hiyaa"`

---

### **Guided Learning 引导问题**

1. **（P37）如果把课件示例中的 `party1 = party2` 改成 `party1.length = 0`（清空数组），外部的 party1 会怎样？** 答案：外部 party1 也会被清空！因为 `party1.length = 0` 是通过引用修改对象本身（和push一样），不是重赋值。
   
2. **（P38）函数定义了2个参数，但调用时传了5个，多出来的3个去哪了？** 答案：它们不会丢失，存在 `arguments[2]`、`arguments[3]`、`arguments[4]` 中（P39）。只是不能用形参名访问。
   
3. **（P41）`sort()` 不传比较函数时，`[10, 9, 80, 3].sort()` 的结果为什么不是 `[3, 9, 10, 80]`？** 答案：默认按**字符串**排序。"10" < "3" 因为字符'1' < 字符'3'。结果是 `[10, 3, 80, 9]`。必须传比较函数 `(a,b) => a-b` 才能正确数字排序。
   

---

准备好了告诉我，继续 **6. Objects（P43–54）**——包含构造函数、this关键字和 ★★ 级考点 prototype原型链。

---

# 6. **Objects – 对象 Pages 43–54**

---

## **Page 43: Objects – 对象（章节标题页）**

本页是 "Objects" 的标题封面页，正文内容从 Page 44 开始。

---

## **Part 1: 对象基础 Object Basics (Pages 44–48)**

---

### **Page 44: Objects are Name-Value Pairs – 对象是名值对**

> JavaScript objects are essentially collections of name-value pairs where: JavaScript对象本质上是名值对的集合，其中：

> the names are JavaScript strings 名是JavaScript字符串

> the values can be any JavaScript value – including more objects. 值可以是任何JavaScript值——包括更多对象。

> Similar to: 类似于：

> `HashMap<String, Object>` in Java. Java中的`HashMap<String, Object>`

> `Dict` in Python Python中的`Dict`

> Quickest way to create a new object is with `{ … }` notation: 创建新对象最快的方式是用`{ … }`表示法：

课件代码：

```javascript
let bubbleTea = {
  ingredients: ["Tea", "Milk", "Tapioca", "Honey"],  // 值可以是数组
  taste: "Delicious",                                  // 值可以是字符串
  timeToDrinkInSeconds: function () {                  // 值可以是函数(=方法)
    return 41;
  }
};
```

> If a variable is not a primitive (undefined, null, Boolean, Number, String), it's an object. (i.e. arrays and functions are also just objects). 如果一个变量不是原始类型(undefined, null, Boolean, Number, String)，它就是对象。（即数组和函数也只是对象。）

**类比说明：** JS对象就像一个**文件柜**——每个抽屉上贴了标签（属性名/字符串），抽屉里可以放任何东西（属性值/任意类型）：放数字、放字符串、放另一个文件柜（嵌套对象）、甚至放一台机器（函数/方法）。

---

### **Pages 45–46: Revisiting Object Properties – 再看对象属性**

#### **Page 45: 两种访问方式 Two Access Methods**

> Previously we've seen an object's properties can be accessed using the dot operator: 之前我们看到对象的属性可以用点运算符访问：

```javascript
bubbleTea.taste = "Sublime"          // 点语法
```

> However, they can also be accessed using array-like notation: 但是，它们也可以用类数组的方括号表示法访问：

```javascript
bubbleTea["taste"] = "Sublime"       // 方括号语法
```

> Both approaches are semantically equivalent however, because the second method provides the name of the property as a string, it has the following advantages: 两种方式语义等价，但第二种方式将属性名作为字符串提供，因此有以下优势：

> the name can be calculated at run-time. 属性名可以在运行时计算。

> can be used to set and get properties with names that are reserved words. 可以用于设置和获取属性名为保留字的属性。

> The name method is used to refer to functions that are properties of objects. "方法(method)"一词用于指代作为对象属性的函数。

> As functions are first class objects, you can also update methods at runtime. 由于函数是一等对象，你也可以在运行时更新方法。

课件代码：

```javascript
bubbleTea.timeToDrinkInSeconds = function () {   // 运行时替换方法!
  return "Far too quick";
};
```

#### **Page 46: 动态增删与遍历 Add / Delete / Iterate**

> Because objects are just a fancy list of name-value pairs you can: 因为对象只是一个花哨的名值对列表，所以你可以：

> 1. Add new properties to an object:
> 2. 给对象添加新属性：

```javascript
let team = new Object();
team.attacker = "Cloud";              // 添加属性 attacker
team.tank = "Barret";                 // 添加属性 tank
team.healer = "Aerith";              // 添加属性 healer
```

> 2. Delete properties from an object:
> 3. 从对象中删除属性：

```javascript
delete team.healer;                   // 删除 healer 属性
```

> 3. Iterate through an object's properties:
> 4. 遍历对象的属性：

```javascript
for (let role in team)
{
  console.log(role, ": ", team[role]);
}
// 输出:
// attacker: Cloud
// tank: Barret
```

注意 healer 已被删除，所以不会出现在遍历结果中。

---

### **Page 47: The Global Object – 全局对象**

> In JavaScript there exists the global object which is available everywhere. JavaScript中存在全局对象，它在任何地方都可用。

> In the browser the name of this object is `window` but a more portable name is `globalThis` which works in any environment. 在浏览器中该对象的名称是`window`，但更通用的名称是`globalThis`，在任何环境中都能工作。

> Variables assigned to the global object are available anywhere without explicitly referring to it: 赋值给全局对象的变量在任何地方都可用，无需显式引用它：

课件代码：

```javascript
globalThis.x = 5;                    // 给全局对象添加属性x
alert(x);                             // 不需要写globalThis.x，直接用x即可
```

> Can be used to add global variables to your program, but as always it is better to use global variables sparingly.... 可以用来给程序添加全局变量，但一如既往，最好谨慎使用全局变量……

---

### **Page 48: The `this` Keyword – `this`关键字**

> The keyword `this` refers to the current object. What that means is specified by the way in which you called that function. 关键字`this`指向当前对象。它具体指什么由调用该函数的方式决定。

课件展示了一张规则表格：

|Context 上下文|`this` refers to / `this`指向|
|---|---|
|In a method 在方法中|the **owner object** 所属对象|
|Alone 单独使用|the **global object** 全局对象|
|In a function 在函数中|the **global object** 全局对象|
|In a function, in strict mode 严格模式的函数中|**`undefined`**|
|In an event 在事件中|the **element** that received the event 接收事件的元素|
|Methods like `call()`, and `apply()`|can refer `this` to **any object** 可以指向任意对象|

课件代码示例：

```javascript
let amberPearlLatte = {
  basePrice: 10,

  getPrice: function() {
    let tax = 12.5;
    return this.basePrice * (1.0 + tax/100);   // this = amberPearlLatte
  }
}
```

此处 `this.basePrice` 指的是 `amberPearlLatte.basePrice`，即 10。

---

## **Part 2: 构造函数与原型 Constructors & Prototypes (Pages 49–54) ★★**

---

### **Page 49: Constructors – 构造函数**

> Constructor functions are functions that create and initialize properties for objects. 构造函数是创建和初始化对象属性的函数。

> A constructor function uses `this` to reference the object being initialized. 构造函数使用`this`来引用正在被初始化的对象。

课件代码：

```javascript
function Drink(basePrice) {
  this.basePrice = basePrice;                     // 给新对象设置属性
  this.getPrice = function() {                    // 给新对象设置方法
    let tax = 12.5;
    return this.basePrice * (1.0 + tax/100);
  }
}
```

> The `new` keyword creates a brand-new empty object, and then calls the constructor function specified, with `this` set to that new object. `new`关键字创建一个全新的空对象，然后调用指定的构造函数，将`this`设置为该新对象。

```javascript
amberPearlLatte = new Drink(10);                  // new → 空对象 → 调用Drink → this=新对象
winterMelonTea = new Drink(11);
```

> Every time we are creating a Drink object, we are creating a new brand-new function object within it that takes up memory. Wouldn't it be better if this code was shared? 每次创建Drink对象时，我们都在其中创建一个全新的函数对象，占用内存。如果这段代码能共享不是更好吗？

⚠️ 这个问题引出了下一页的**prototype**解决方案。

---

### **Page 50: OOP in JavaScript – JavaScript中的面向对象**

> JavaScript's main approach to object-oriented code doesn't use subtyping and polymorphism found in other popular OOP languages like Java, C# etc. JavaScript面向对象编程的主要方式不使用Java、C#等流行OOP语言中的子类型和多态。

> Instead, it supports a variation known as Prototype-based programming. 相反，它支持一种称为**基于原型编程**的变体。

> In prototype-based programming, classes are not present, and behavior reuse is accomplished through a process of decorating existing objects which serves as prototypes. 在基于原型的编程中，不存在类，行为的复用是通过装饰充当原型的现有对象来实现的。

> This model is also known as _class-less, prototype-oriented_ or _instance-based programming_. 这种模型也被称为_无类、面向原型_或_基于实例的编程_。

**类比说明：** Java/C#的做法像"先画建筑图纸（class），再按图纸盖房子（instance）"。JS的做法像"直接拿一栋现有的房子（prototype）做样板，新房子照着它来，但可以随时改装"。

---

### **Page 51: Reusing Functions – 复用函数**

课件展示了两种解决P49内存浪费问题的方式：

#### **方式1：先声明函数，再赋值给属性**

> The first way is to declare the function beforehand: 第一种方式是预先声明函数：

```javascript
function getPrice() {
  let tax = 12.5;
  return this.basePrice * (1.0 + tax/100);
}

function Drink(basePrice) {
  this.basePrice = basePrice;
  this.getPrice = getPrice;                // 赋值已有函数，不创建新函数
}
```

#### **方式2（最佳）：添加到prototype上**

> The second (and best) way is to add it to the prototype for the Drink object: 第二种（也是最佳的）方式是将它添加到Drink对象的prototype上：

```javascript
function Drink(basePrice) {
  this.basePrice = basePrice;              // 构造函数只设置数据
}

Drink.prototype.getPrice = function() {    // 方法放到prototype上
  let tax = 12.5;
  return this.basePrice * (1.0 + tax/100);
}
```

---

### **Page 52: Prototypes – 原型 ★★**

> `Drink.prototype` is an object shared by all instances of `Drink`. `Drink.prototype`是一个被所有Drink实例共享的对象。

课件再次展示了prototype上的代码（与P51方式2相同）。

> It forms a part of a lookup chain (or, _prototype chain_): any time you attempt to access a property of `Drink` that isn't set, JavaScript will check `Drink.prototype` to see if that property exists there instead. 它构成查找链（即_原型链_）的一部分：任何时候你试图访问Drink中未设置的属性，JavaScript都会检查`Drink.prototype`看该属性是否存在于那里。

课件代码：

```javascript
amberPearlLatte = new Drink(10)
amberPearlLatte.getPrice();          // 自身没有getPrice → 沿原型链找到Drink.prototype上的
```

> As a result, anything assigned to `Drink.prototype` becomes available to all instances of that constructor via `this`. 因此，赋值给`Drink.prototype`的任何东西都会通过`this`对该构造函数的所有实例可用。

> The root of the prototype chain is `Object.prototype`. 原型链的根是`Object.prototype`。

**完整的原型链示意：**

```
amberPearlLatte (实例)
    ↓ 自身没有? 往上找
Drink.prototype (构造函数的原型)
    ↓ 还没有? 继续往上
Object.prototype (原型链的根)
    ↓ 还没有?
null → 返回undefined
```

---

### **Page 53: Add Methods at Runtime – 运行时添加方法**

> Prototypes are an incredibly powerful tool. JavaScript lets you modify something's prototype at any time in your program, which means you can add extra methods to all instances of an object at runtime: 原型是一个非常强大的工具。JavaScript允许你在程序的任何时候修改某物的原型，这意味着你可以在运行时给一个对象的所有实例添加额外的方法：

课件代码——给内置String类型添加方法：

```javascript
const s = "live on";

String.prototype.reversed = function() {     // 给所有字符串添加reversed方法!
  let r = "";
  for (var i = this.length - 1; i >= 0; i--) // this指向调用该方法的字符串
  {
    r += this[i];                             // 从尾到头逐字符拼接
  }
  return r;
}

s.reversed();  // will output "no evil"       输出"no evil"
```

> JavaScript can also use prototypes to implement inheritance. A subclass can be defined to have the prototype of a superclass, and then the implementation of the methods can be overwritten in the subclass prototype... JavaScript也可以使用原型来实现继承。子类可以将其原型定义为父类的原型，然后方法的实现可以在子类原型中被覆写……

---

### **Page 54: The `new` Keyword Revisited – 重新审视`new`关键字**

> When the code `new Drink(…)` is executed, the following things happen: 当代码`new Drink(…)`被执行时，以下事情会发生：

> 1. A new object is created, with its prototype set to `Drink.prototype`.
> 2. 创建一个新对象，其原型设置为`Drink.prototype`。

> 2. The constructor function `Drink` is called with the specified arguments, and `this` is bound to the newly created object.
> 3. 构造函数`Drink`用指定的参数被调用，`this`被绑定到新创建的对象上。

> `new Drink` is equivalent to `new Drink()`, i.e. if no argument list is specified, the `Drink` constructor is called without arguments. `new Drink`等价于`new Drink()`，即如果未指定参数列表，Drink构造函数会被无参数调用。

> 3. The object returned by the constructor function becomes the result of the whole new expression.
> 4. 构造函数返回的对象成为整个new表达式的结果。

> If the constructor function doesn't explicitly return an object, the object created in step 1 is used instead. (Normally constructors don't return a value, but they can choose to do so if they want to override the normal object creation process.) 如果构造函数没有显式返回一个对象，则使用步骤1中创建的对象。（通常构造函数不返回值，但如果想覆盖正常的对象创建过程，可以选择这样做。）

---

## **示例代码 Example Code**

在浏览器Console（F12）中逐段运行：

```javascript
// ============================================
// Page 44: Object literal 对象字面量
// ============================================
let bubbleTea = {
  ingredients: ["Tea", "Milk", "Tapioca", "Honey"],  // 属性:数组
  taste: "Delicious",                                  // 属性:字符串
  timeToDrinkInSeconds: function() { return 41; }      // 属性:函数(=方法)
};

console.log("taste:", bubbleTea.taste);                // "Delicious"
console.log("method:", bubbleTea.timeToDrinkInSeconds()); // 41

// 数组和函数也是对象!
console.log("typeof []:", typeof []);                  // "object"
console.log("typeof function(){}:", typeof function(){}); // "function" (但也是对象)


// ============================================
// Page 45: Two access methods 两种访问方式
// ============================================
console.log("\n=== Property Access (P45) ===");

console.log("dot:", bubbleTea.taste);           // 点语法
console.log("bracket:", bubbleTea["taste"]);    // 方括号语法 — 结果相同

// 方括号优势1: 运行时动态决定属性名
let propName = "ingredients";
console.log("dynamic:", bubbleTea[propName]);    // 用变量作属性名!

// 方括号优势2: 属性名可以是保留字
let obj = {};
obj["class"] = "Math";                           // 用点语法 obj.class 在某些情况下可能有问题
console.log("reserved word as key:", obj["class"]);

// 运行时更新方法 (P45)
bubbleTea.timeToDrinkInSeconds = function() { return "Far too quick"; };
console.log("updated method:", bubbleTea.timeToDrinkInSeconds());


// ============================================
// Page 46: Add / Delete / Iterate 增删遍历
// ============================================
console.log("\n=== Add/Delete/Iterate (P46) ===");

let team = new Object();                         // 创建空对象
team.attacker = "Cloud";                          // 1. 添加属性
team.tank = "Barret";
team.healer = "Aerith";
console.log("添加后:", JSON.stringify(team));

delete team.healer;                               // 2. 删除属性
console.log("删除后:", JSON.stringify(team));

for (let role in team) {                          // 3. 遍历属性
  console.log("  " + role + ":", team[role]);
}
// attacker: Cloud
// tank: Barret    (healer已删除)


// ============================================
// Page 47: Global object 全局对象
// ============================================
console.log("\n=== Global Object (P47) ===");

globalThis.myGlobal = 42;                         // 给全局对象添加属性
console.log("直接用:", myGlobal);                  // 42 — 不需要写globalThis.myGlobal
// 在浏览器中: window.myGlobal 也是42


// ============================================
// Page 48: this keyword
// ============================================
console.log("\n=== this (P48) ===");

let latte = {
  basePrice: 10,
  getPrice: function() {
    let tax = 12.5;
    return this.basePrice * (1.0 + tax / 100);   // this = latte (方法的所属对象)
  }
};
console.log("latte.getPrice():", latte.getPrice());  // 11.25


// ============================================
// Page 49: Constructor + new 构造函数
// ============================================
console.log("\n=== Constructor (P49) ===");

function Drink(basePrice) {
  this.basePrice = basePrice;
  this.getPrice = function() {                    // ⚠️ 每次new都创建新函数!
    let tax = 12.5;
    return this.basePrice * (1.0 + tax / 100);
  }
}

let drink1 = new Drink(10);
let drink2 = new Drink(11);
console.log("drink1:", drink1.getPrice());         // 11.25
console.log("drink2:", drink2.getPrice());         // 12.375

// ⚠️ 问题: 每个实例有自己的getPrice副本 → 浪费内存!
console.log("共享函数?", drink1.getPrice === drink2.getPrice);  // false!


// ============================================
// Page 51-52: Prototype 解决方案 ★★
// ============================================
console.log("\n=== Prototype (P51-52) ★★ ===");

function Beverage(name, basePrice) {
  this.name = name;                               // 数据放在实例上
  this.basePrice = basePrice;
}

// 方法放到prototype上 → 所有实例共享! (P51)
Beverage.prototype.getPrice = function() {
  let tax = 12.5;
  return this.basePrice * (1.0 + tax / 100);
};

let coffee = new Beverage("Coffee", 5);
let tea = new Beverage("Tea", 3);

console.log("coffee.getPrice():", coffee.getPrice());  // 5.625
console.log("tea.getPrice():", tea.getPrice());        // 3.375

// ✓ 现在共享同一个函数!
console.log("共享函数?", coffee.getPrice === tea.getPrice);  // true!

// 原型链查找 (P52)
console.log("\n--- Prototype chain 原型链 ---");
console.log("coffee自身有name?", coffee.hasOwnProperty("name"));          // true
console.log("coffee自身有getPrice?", coffee.hasOwnProperty("getPrice")); // false — 在prototype上!
console.log("但能调用:", typeof coffee.getPrice);                         // "function"

// 链: coffee → Beverage.prototype → Object.prototype → null
console.log("toString来自Object.prototype:", coffee.toString());


// ============================================
// Page 53: Runtime extension 运行时扩展
// ============================================
console.log("\n=== Runtime Extension (P53) ===");

// 给内置String添加方法!
String.prototype.reversed = function() {
  let r = "";
  for (let i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

console.log('"live on".reversed():', "live on".reversed());  // "no evil"
console.log('"hello".reversed():', "hello".reversed());       // "olleh"

// 给自定义类型添加方法 — 所有已有实例立刻可用!
Beverage.prototype.describe = function() {
  return this.name + " ($" + this.basePrice + ")";
};

// coffee是之前创建的，但也能用新方法!
console.log("coffee.describe():", coffee.describe());  // "Coffee ($5)"
console.log("tea.describe():", tea.describe());        // "Tea ($3)"


// ============================================
// Page 54: new 的三步过程
// ============================================
console.log("\n=== new 三步过程 (P54) ===");

// 模拟 new Beverage("Juice", 4) 做了什么:
// Step 1: 创建空对象，原型 = Beverage.prototype
let manual = Object.create(Beverage.prototype);
console.log("Step1 — 空对象原型正确?", Object.getPrototypeOf(manual) === Beverage.prototype); // true

// Step 2: 调用构造函数，this = 新对象
Beverage.call(manual, "Juice", 4);
console.log("Step2 — name:", manual.name, "basePrice:", manual.basePrice);

// Step 3: 返回该对象 (除非构造函数显式return另一个对象)
console.log("Step3 — manual.getPrice():", manual.getPrice());    // 4.5
console.log("manual.describe():", manual.describe());            // "Juice ($4)"

// 等价于简单地写:
let auto = new Beverage("Juice", 4);
console.log("auto.getPrice():", auto.getPrice());                // 4.5 — 完全相同
```

---

### **Summary 总结**

- **Page 43** — 章节标题页 "Objects"
- **Page 44 — 名值对** — 对象=名值对集合(名String,值任意)，类似Java HashMap / Python Dict；用`{ }`创建；非原始类型都是对象(**数组和函数也是!**)
- **Page 45 — 属性访问** — 点语法`obj.name`和方括号`obj["name"]`语义等价；方括号优势：运行时计算属性名、使用保留字；方法=作为属性的函数；方法可运行时替换
- **Page 46 — 增删遍历** — 动态添加属性(`obj.x = val`)、删除(`delete obj.x`)、遍历(`for...in`)
- **Page 47 — 全局对象** — 浏览器中`window`/通用`globalThis`；全局属性无需前缀访问；应谨慎使用全局变量
- **Page 48 — this** — `this`指向取决于调用方式：方法中→所属对象、单独/函数中→全局对象、严格模式→undefined、事件中→触发元素
- **Page 49 — 构造函数** — 用`this`初始化属性；`new`创建空对象→调用构造函数→this绑定新对象；⚠️问题：每次new都创建新的方法函数副本→浪费内存
- **Page 50 — OOP方式** — JS不用传统class继承，用**原型式编程(prototype-based)**；无类、面向原型、基于实例
- **Page 51 — 复用函数** — 方式1：预声明函数再赋值；方式2（**最佳**）：添加到`Constructor.prototype`上
- **Page 52 — 原型 ★★** — `X.prototype`被所有X实例共享；**原型链**查找：自身→prototype→...→`Object.prototype`→null；prototype上的属性对所有实例通过`this`可用
- **Page 53 — 运行时扩展** — 任何时候修改prototype→所有现有和未来实例立即可用；可给内置类型(String等)扩展方法；可用prototype实现继承
- **Page 54 — new三步** — ①创建新对象(proto=X.prototype) ②调用构造函数(this=新对象) ③返回对象(除非构造函数显式return另一个对象)；`new Drink`等价于`new Drink()`

---

### **🧠 小测验 Quiz**

**题1（P45-46）— 预测输出：**

```javascript
let hero = { name: "Link", hp: 100 };
hero.weapon = "Sword";
delete hero.hp;
let keys = [];
for (let k in hero) { keys.push(k); }
console.log(keys);
```

**题2（P49 vs P52）— 预测两个console.log的输出：**

```javascript
// 方式A: 方法在构造函数内
function A(x) { this.x = x; this.get = function() { return this.x; } }
let a1 = new A(1), a2 = new A(2);
console.log(a1.get === a2.get);   // ?

// 方式B: 方法在prototype上
function B(x) { this.x = x; }
B.prototype.get = function() { return this.x; }
let b1 = new B(1), b2 = new B(2);
console.log(b1.get === b2.get);   // ?
```

**题3（P52-53）— 预测输出：**

```javascript
function Cat(name) { this.name = name; }
Cat.prototype.speak = function() { return "Meow"; };

let c = new Cat("Mimi");
c.speak = function() { return "Woof!"; };

console.log(c.speak());     // ?
delete c.speak;
console.log(c.speak());     // ?
```

---

**答案：**

**题1：** `["name", "weapon"]`

- `weapon`被添加了，`hp`被删除了。`for...in`遍历的是当前存在的属性。

**题2：** `false` 和 `true`

- 方式A：每次`new`都创建新的`get`函数对象→两个不同的函数→`false`
- 方式B：`get`在prototype上只有一份→两个实例共享同一个函数→`true`
- 这就是P49提出的问题和P51-52的解决方案

**题3：** `"Woof!"` 然后 `"Meow"`

- 第一次：`c`自身有`speak`属性(实例属性)**遮蔽(shadow)**了prototype上的同名方法→返回"Woof!"
- `delete c.speak`删除了实例属性
- 第二次：`c`自身没有`speak`了→沿原型链找到`Cat.prototype.speak`→返回"Meow"
- 这完美展示了**原型链查找**的工作方式

---

### **Guided Learning 引导问题**

1. **（P44）`typeof []` 返回 `"object"` 而不是 `"array"`。如何正确判断一个变量是不是数组？** 答案：用 `Array.isArray([])`，返回 `true`。
   
2. **（P48）以下代码中 `this` 分别指什么？**
   
    ```javascript
    let obj = {
      name: "A",
      greet: function() { console.log(this.name); }
    };
    obj.greet();           // this = ?
    let fn = obj.greet;
    fn();                  // this = ?
    ```
    
    答案：`obj.greet()` → `this = obj` → 输出"A"。`fn()` → `this = 全局对象(window)` → 输出`undefined`（因为`window.name`通常不是"A"）。调用方式决定`this`的指向。
    
3. **（P52）如果在原型链上找遍了（直到null）都没找到某个属性，会发生什么？** 答案：返回 `undefined`，不报错。和数组越界访问一样是"静默失败"。
   
4. **（P54）如果构造函数显式 `return { custom: true }`，`new` 出来的对象是什么？** 答案：是 `{ custom: true }` 而不是正常创建的对象。课件P54原文说"the object returned by the constructor function becomes the result"——构造函数显式return的对象会覆盖step 1创建的对象。
   

---

准备好了告诉我，继续最后一部分 **7. Variable Scoping and Closures（P55–64）**——包含 ★★ 级考点 const/let/var 作用域对比和闭包。

---
Let me re-examine each page for full accuracy:所有页面细节确认完毕。这是整个Ch06的**最后一部分**，也是考试中最常出综合题的部分。

---

# 7. **Variable Scoping and Closures – 变量作用域与闭包 Pages 55–64**

---

## **Page 55: Variable Scoping and Closures – 变量作用域与闭包（章节标题页）**

本页是标题封面页，正文从 Page 56 开始。

---

## **Part 1: 作用域 Scoping (Pages 56–61) ★★**

---

### **Page 56: JavaScript Scoping – JavaScript作用域**

> The scope of a variable is the range of statements over which it is visible. 变量的作用域是它可见的语句范围。

> There are three different types of scope: 有三种不同类型的作用域：

|Scope 作用域|原文|中文|
|---|---|---|
|**Global scope**|accessible anywhere within the document|在文档中任何地方都可访问|
|**Function scope**|accessible anywhere within the function|在函数内任何地方都可访问|
|**Block scope**|accessible anywhere within the current block|在当前块内任何地方都可访问|

> Statements are grouped into the blocks delimited by braces: { ... } 语句被分组到用花括号界定的块中：{ ... }

课件展示了一张代码结构图，用不同颜色标注了嵌套的块：

```javascript
function run(x)
{                           // ← 函数块(绿色)开始
  if (x === 0)
  {                         //   ← if块(蓝色)开始
    ...
  }                         //   ← if块结束
  else
  {                         //   ← else块(红色)开始
    ...
  }                         //   ← else块结束
}                           // ← 函数块结束
```

> A block is considered to contain code inside any smaller blocks inside of it. 一个块被认为包含其内部所有更小块中的代码。

**类比说明：** 作用域就像**俄罗斯套娃**——内层可以看到外层的所有东西，但外层看不到内层的东西。

---

### **Page 57: JavaScript Variable Declarations – JavaScript变量声明方式**

> Remember how there were 4 (!) different ways to declare a variable in JavaScript? 还记得JavaScript有4种(!)不同的方式来声明变量吗？

课件展示了一张从好到坏的**善恶评级图**：

|评级|声明方式|颜色|
|:-:|:-:|:-:|
|**Pure good** 纯善|`const`|🟩 深绿|
|**Good** 善|`let`|🟨 浅绿|
|**Evil** 恶|`var`|🟧 橙色|
|**Pure Evil** 纯恶|`undeclared`|🟥 红色|

这张图在课件中非常醒目，目的是让你记住：**const > let > var > undeclared**。

---

### **Page 58: Const and Let Variables – Const与Let变量**

> Variables declared using `const` or `let` have block-level scope: 使用`const`或`let`声明的变量具有块级作用域：

课件代码（与P59、P60形成对比的关键示例）：

```javascript
function fun(c) {
  if (c == 0) {
    const x = 0
    // code here can use `x`           // ✓ if块内可以用x
  }
  // code here *cannot* use `x`         // ✗ if块外不能用x!
}
// code here *cannot* use `x`           // ✗ 函数外也不能用x!
```

> This is a _**good thing**_! 这是**好事**！

> – Variables can't interfere with other variables outside of the block. – 变量不会干扰块外的其他变量。

> – When reasoning about its value, only need to consider the block. – 推理变量的值时，只需要考虑当前块。

> The difference between `const` and `let` is that `let` variables can be set to a new value within the block whereas value of `const` variables can never be changed from the original declared value. `const`和`let`的区别是：`let`变量可以在块内被设置为新值，而`const`变量的值永远不能从最初的声明值改变。

> Therefore, use `const` where you can... 因此，能用`const`就用`const`……

---

### **Page 59: Var Variables – Var变量**

> A variable declared with `var` inside a function definition has function scope, and is visible only inside the function definition 在函数定义内用`var`声明的变量具有函数作用域，仅在函数定义内可见

课件代码（注意与P58对比——`var`泄漏出了if块！）：

```javascript
function fun(c) {
  if (c == 0) {
    var x = 0
    // code here can use `x`           // ✓ if块内可以用x
  }
  // code here can use `x`              // ✓ if块外也可以! var无视块!
}
// code here *cannot* use `x`           // ✗ 但函数外不行
```

> This is not great... 这并不好……

> – Variables can interfere with other variables outside the block – 变量会干扰块外的其他变量

> – When reasoning about its value, need to consider the whole function. – 推理变量的值时，需要考虑整个函数。

> Can always be avoided: 总是可以避免使用var：

> – If you don't want to use `x` outside of the current block, leave it where it is and change it to a `const`/`let` – 如果你不想在当前块外使用`x`，就把它留在原地并改为`const`/`let`

> – If you do want to use `x` outside of the current block, declare it as a `const`/`let` before the `if` block begins. – 如果你确实想在当前块外使用`x`，在`if`块开始之前把它声明为`const`/`let`。

---

### **Page 60: Undeclared Variable Scoping – 未声明变量的作用域**

> A variable not previously declared always has _global scope_, and is visible throughout the page, even if used inside a function definition 一个之前未声明的变量总是具有_全局作用域_，在整个页面中都可见，即使是在函数定义内部使用

课件代码（注意与P58、P59对比——到处都能用！）：

```javascript
function fun(c) {
  if (c == 0) {
    x = 0                               // 没有let/const/var! 未声明!
    // code here can use `x`             // ✓
  }
  // code here can use `x`               // ✓ 
}
// code here can use `x`                 // ✓ 函数外也能用! 全局!
```

> This is a bad coding style! 这是很糟糕的编码风格！

> – May interfere with other variables anywhere in the document. – 可能干扰文档中任何地方的其他变量。

> – When reasoning about its value, need to consider the whole function. – 推理变量的值时，需要考虑整个函数。

---

### **三页对比总览 Pages 58–60 Side-by-Side Comparison ★★必考**

课件故意用**相同的代码结构**在三页上对比了`const`/`let`、`var`、未声明的区别：

```
                        if块内    if块外(函数内)    函数外
const/let (P58):          ✓            ✗              ✗     ← Block scope 块级
var       (P59):          ✓            ✓              ✗     ← Function scope 函数级
undeclared(P60):          ✓            ✓              ✓     ← Global scope 全局
```

---

### **Page 61: Global Variables – 全局变量**

> Variables declared within a block can be accessed by any child blocks within that block 在一个块内声明的变量可以被该块内的任何子块访问

> Therefore, variables declared outside of functions are accessible within any subsequently declared function, regardless of if they use `let`/`const`/`var`. 因此，在函数外声明的变量可以在任何后续声明的函数内访问，无论它们使用`let`/`const`/`var`。

课件代码：

```javascript
const x = 0;              // 四种方式在函数外声明
let x = 0;
var x = 0;
x = 0;

function fun(c) {
  if (c == 0) {
    // code here can use `x`         // ✓ 都能访问
  }
  // code here can use `x`           // ✓ 都能访问
}
// code here can use `x`             // ✓ 都能访问
```

> However, only `var` variables are added to the global object. 但是，只有`var`变量会被添加到全局对象上。

这最后一句话非常重要——在函数外用`let`或`const`声明的变量虽然也是"全局可用"的，但**不会**出现在`window`对象上。只有`var`会。

---

## **Part 2: 闭包 Closures (Pages 62–64) ★★**

---

### **Page 62: Inner Functions – 内部函数**

**闭包 = 内部函数 + 外层变量引用 + 函数返回后变量不被清理**

> JavaScript function declarations are allowed inside other functions: JavaScript允许在其他函数内部声明函数：

课件代码：

```javascript
function wonderland() {
  let a = 1;                          // 外层函数的局部变量

  function alice() {                  // 内部函数
    return a + 1;                     // 内部函数可以访问外层的变量a!
  }

  return alice();                     // 调用内部函数
}

console.log( wonderland() );          // 2
```

> Inner functions allow us to use one of the most powerful abstractions JavaScript has to offer: "closures" 内部函数让我们能够使用JavaScript提供的最强大的抽象之一："闭包"

> A closure is the local variables for a function – kept alive after the function has returned. 闭包是函数的局部变量——在函数返回后仍然保持存活。

---

### **Page 63: Closures – 闭包**

> A quick quiz, what does this do? 一个快速测验，这段代码做了什么？

课件代码（**经典闭包示例 makeAdder**）：

```javascript
function makeAdder(a) {
  return function(b){                 // 返回一个函数(闭包)
    return a + b;                     // 这个函数"记住"了外层的变量a
  }
}

x = makeAdder(5);                    // x是一个闭包，其中a=5
y = makeAdder(20);                   // y是另一个闭包，其中a=20

alert( x(6) );                       // 11  (5+6)
alert( y(7) );                       // 27  (20+7)
```

> Here, the outer `makeAdder` function has returned, and hence common sense would seem to dictate that its local variable no longer exist. But they do still exist, otherwise the adder function would be unable to work. 这里，外层的`makeAdder`函数已经返回了，因此常识似乎认为它的局部变量不再存在。但它们确实仍然存在，否则adder函数将无法工作。

> **Whenever JavaScript executes a function, a scope object is created to hold the local variables created within that function. It is initialised with any variables passed in as function parameters. 每当JavaScript执行一个函数时，都会创建一个作用域对象(scope object)来保存在该函数内创建的局部变量。它用作为函数参数传入的变量来初始化。**

---

### **Page 64: Closures (continued) – 闭包（续）**

> Closures are similar to the global object that all global variables and functions live in, but with a couple of important differences: 闭包类似于所有全局变量和函数所在的全局对象，但有几个重要区别：

> 1. a brand-new scope object is created every time a function starts executing,
> 2. 每次函数开始执行时都会创建一个全新的作用域对象，

> 2. these scope objects cannot be directly accessed from your code.
> 3. 这些作用域对象不能从你的代码中直接访问。

> So, when `makeAdder` is called, a scope object is created with one property: `a`, which is the argument passed to the function. It then returns a newly created function. 所以，当`makeAdder`被调用时，会创建一个带有一个属性`a`的作用域对象，`a`是传给函数的参数。然后它返回一个新创建的函数。

> Normally JavaScript's garbage collector would clean up the scope object created for `makeAdder` at this point, but the returned function maintains a reference to that scope object. As a result, the scope object will not be garbage collected until there are no more references to the function object that `makeAdder` returned. 通常JavaScript的垃圾回收器会在此时清理为`makeAdder`创建的作用域对象，但返回的函数维持着对该作用域对象的引用。因此，该作用域对象不会被垃圾回收，直到`makeAdder`返回的函数对象不再有任何引用。

**闭包的生命周期图解：**

```
调用 makeAdder(5):
  → 创建 scope object { a: 5 }       ← 新的作用域对象
  → 创建内部函数 function(b){return a+b}
  → 内部函数持有scope object的引用     ← 所以不会被GC!
  → 返回内部函数，赋值给x

调用 makeAdder(20):
  → 创建 另一个 scope object { a: 20 } ← 又一个全新的作用域对象
  → 创建另一个内部函数
  → 返回，赋值给y

x(6):  → 在x的scope中找到a=5  → 5+6=11
y(7):  → 在y的scope中找到a=20 → 20+7=27

两个闭包各自持有独立的scope object → 互不干扰
```

**类比说明：** 闭包就像一个**工厂**——`makeAdder(5)`生产了一台"加5机器"，`makeAdder(20)`生产了一台"加20机器"。每台机器内部都有自己的"设置表"（scope object），工厂关门后（函数返回后），机器仍然可以正常工作，因为设置表被锁在了机器里面（引用未释放→不被GC回收）。

---

### 完全正确！你抓住了闭包的本质

**你的理解 100% 正确**：闭包捕获的是**变量的位置（引用）**，而不是**值**。

### 用仓库比喻解释

```javascript
function test2() {
  var i;  // ← 创建一个仓库，地址是 #1001
  
  for (i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
    // 每个闭包说："我记住了仓库 #1001 的位置"
  }
}
```

**执行流程**：

```
时刻1 (i=0)：仓库#1001里面放着 0
   闭包1 生成：记住位置 #1001 ← "我去#1001读值"

时刻2 (i=1)：仓库#1001里面变成 1
   闭包2 生成：记住位置 #1001 ← "我去#1001读值"

时刻3 (i=2)：仓库#1001里面变成 2
   闭包3 生成：记住位置 #1001 ← "我去#1001读值"

时刻4 (循环结束)：仓库#1001里面变成 3

时刻5 (setTimeout执行)：
   闭包1 执行：去#1001读 → 3 ❌
   闭包2 执行：去#1001读 → 3 ❌
   闭包3 执行：去#1001读 → 3 ❌
```

### 代码执行时间线

```javascript
function test2() {
  var i;  // 仓库地址 #1001，初值 undefined
  
  // ===== 同步执行：注册闭包 =====
  for (i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
    //         ↑ 创建闭包，记住"位置#1001"
    //         但NOT执行！只是记住位置
  }
  // 循环结束时：i = 3，仓库#1001 = 3
  
  // ===== 100毫秒后：执行闭包 =====
  // 闭包1执行：
  //   console.log(i)
  //   ↓ 去仓库#1001读值
  //   ↓ 仓库里现在是 3
  //   ↓ 输出：3
  
  // 其他闭包同理...
}

test2();  // 输出：3 3 3
```

### 对比：let 为什么是 0 1 2

```javascript
function test1() {
  // ===== 同步执行：注册闭包 =====
  for (let i = 0; i < 3; i++) {
    // 关键：let 每次循环创建新的仓库！
    // i=0时：创建仓库#2001，放入0，闭包1记住#2001
    // i=1时：创建仓库#2002，放入1，闭包2记住#2002
    // i=2时：创建仓库#2003，放入2，闭包3记住#2003
    
    setTimeout(() => console.log(i), 100);
  }
  
  // ===== 100毫秒后：执行闭包 =====
  // 闭包1执行：去仓库#2001读 → 0
  // 闭包2执行：去仓库#2002读 → 1
  // 闭包3执行：去仓库#2003读 → 2
}

test1();  // 输出：0 1 2
```

### 核心区别表

|                | var             | let                        |
| -------------- | --------------- | -------------------------- |
| **仓库数量**   | 1个（#1001）    | 3个（#2001, #2002, #2003） |
| **闭包记住的** | 都记住#1001     | 各自记住不同的仓库         |
| **执行时读到** | 都读到最后的值3 | 各自读到自己的值           |

### 你的表述改进一下

```
"闭包捕获的是变量的位置(引用)而不是值"
```

**完全正确**，还可以加一点：

```
"var因为只有一个位置，所以所有闭包读到同一个位置的最后值
 let因为每次创建新位置，所以每个闭包读到各自位置的值"
```

你现在完全理解闭包的本质了！这就是为什么闭包这么强大又这么容易出坑。



---





## **示例代码 Example Code**

在浏览器Console（F12）中逐段运行：

```javascript
// ============================================
// Page 56: Three types of scope 三种作用域
// ============================================
// Global: 在最外层声明
let globalVar = "I'm global";

function demoScope() {
  // Function: 在函数内声明
  let funcVar = "I'm function-level";

  if (true) {
    // Block: 在{}块内声明
    let blockVar = "I'm block-level";
    console.log("块内:", globalVar, funcVar, blockVar);  // ✓ 全部可见
  }

  console.log("函数内:", globalVar, funcVar);             // ✓ 能看到
  // console.log(blockVar);                               // ✗ ReferenceError!
}
demoScope();
// console.log(funcVar);                                  // ✗ ReferenceError!


// ============================================
// Pages 58-60: const/let vs var vs undeclared ★★
// 用完全相同的结构对比三种行为
// ============================================
console.log("\n=== const/let: Block Scope (P58) ===");
function testLet() {
  if (true) {
    let x = "let变量";
    console.log("  if块内:", x);         // ✓
  }
  // console.log(x);                     // ✗ ReferenceError! 出了块就死了
  console.log("  if块外: let不可见");
}
testLet();

console.log("\n=== var: Function Scope (P59) ===");
function testVar() {
  if (true) {
    var x = "var变量";
    console.log("  if块内:", x);         // ✓
  }
  console.log("  if块外:", x);           // ✓ var泄漏出了if块!
}
testVar();
// console.log(x);                       // ✗ 但函数外还是不行

console.log("\n=== undeclared: Global Scope (P60) ===");
function testUndeclared() {
  if (true) {
    leaked = "未声明变量";               // 没有let/const/var!
    console.log("  if块内:", leaked);    // ✓
  }
  console.log("  if块外:", leaked);      // ✓
}
testUndeclared();
console.log("  函数外:", leaked);        // ✓ 到处都能用! 全局泄漏!


// ============================================
// Page 61: Global object 只有var加到window上
// ============================================
console.log("\n=== Global Object (P61) ===");
var varGlobal = "var全局";
let letGlobal = "let全局";
console.log("window.varGlobal:", typeof window.varGlobal);   // "string" ← 在window上!
console.log("window.letGlobal:", typeof window.letGlobal);   // "undefined" ← 不在window上!


// ============================================
// Page 58-60: ★★ 经典for循环陷阱 (综合应用)
// ============================================
console.log("\n=== for loop trap: var vs let ★★ ===");

// var: 所有闭包共享同一个i
var fnsVar = [];
for (var i = 0; i < 3; i++) {
  fnsVar.push(function() { return i; });  // 三个函数都引用同一个i
}
console.log("var:", fnsVar[0](), fnsVar[1](), fnsVar[2]());  // 3, 3, 3 — 全是3!

// let: 每次迭代有独立的j
let fnsLet = [];
for (let j = 0; j < 3; j++) {
  fnsLet.push(function() { return j; });  // 每个函数引用自己的j
}
console.log("let:", fnsLet[0](), fnsLet[1](), fnsLet[2]());  // 0, 1, 2 — 正确!


// ============================================
// Page 62: Inner functions 内部函数
// ============================================
console.log("\n=== Inner Functions (P62) ===");

function wonderland() {
  let a = 1;                          // 外层局部变量

  function alice() {                  // 内部函数
    return a + 1;                     // 可以访问外层的a
  }

  return alice();                     // 调用内部函数
}
console.log("wonderland():", wonderland());  // 2


// ============================================
// Page 63-64: Closures 闭包 ★★
// ============================================
console.log("\n=== Closures (P63-64) ★★ ===");

// 经典课件示例: makeAdder
function makeAdder(a) {               // a被闭包"捕获"
  return function(b) {                // 返回一个函数
    return a + b;                     // 这个函数"记住"了a
  };
}

let add5 = makeAdder(5);              // 闭包1: scope object { a: 5 }
let add20 = makeAdder(20);            // 闭包2: scope object { a: 20 }

console.log("add5(6):", add5(6));     // 11  (5+6)
console.log("add5(10):", add5(10));   // 15  (5+10)
console.log("add20(7):", add20(7));   // 27  (20+7)

// 两个闭包互不干扰:
// add5的scope中a=5, add20的scope中a=20
// 每次调用makeAdder都创建全新的scope object (P64)


// ============================================
// 闭包实际应用: 计数器 (私有变量)
// ============================================
console.log("\n=== Closure: Counter 闭包计数器 ===");

function makeCounter() {
  let count = 0;                      // 私有! 外部无法直接访问

  return {
    increment: function() { return ++count; },
    getCount:  function() { return count; }
  };
}

let c1 = makeCounter();               // 闭包，scope中 count=0
console.log("c1 ++:", c1.increment());  // 1
console.log("c1 ++:", c1.increment());  // 2
console.log("c1 ++:", c1.increment());  // 3

let c2 = makeCounter();               // 另一个闭包，独立的scope中 count=0
console.log("c2 ++:", c2.increment());  // 1 — 独立!
console.log("c1:", c1.getCount());      // 3 — 不受c2影响!

// count是真正的私有变量:
// console.log(count);                 // ✗ ReferenceError!


// ============================================
// Page 64: Closure vs Global 闭包 vs 全局对象
// ============================================
console.log("\n=== Closure vs Global (P64) ===");
console.log("区别1: 每次调用函数创建全新的scope object");
console.log("  → makeAdder(5)和makeAdder(20)有各自独立的scope");
console.log("  → 而全局对象只有一个");
console.log("区别2: scope object不能从代码中直接访问");
console.log("  → 你不能写 someScope.a 来读取闭包里的变量");
console.log("  → 只有返回的函数能通过作用域链访问它");
```

---

### **Summary 总结**

- **Page 55** — 章节标题页 "Variable scoping and closures"
- **Page 56 — 三种作用域** — Global(整个文档)、Function(函数内)、Block(`{}`块内)；块可以嵌套，内层能看到外层
- **Page 57 — 善恶评级** — const(纯善✓✓) > let(善✓) > var(恶✗) > undeclared(纯恶✗✗)
- **Page 58 — const/let ★★** — 块级作用域；出了块就不可见；const不可重赋值、let可以；能用const就用const
- **Page 59 — var** — 函数级作用域；泄漏出块但不出函数；**总是可以用const/let替代**
- **Page 60 — undeclared** — 全局作用域；到处可见，包括函数外；是糟糕的编码风格
- **Page 61 — 全局变量** — 函数外声明的变量(无论用什么方式)在函数内都可访问；但**只有var会被加到全局对象(window)上**
- **Page 62 — 内部函数** — JS允许函数内声明函数；内部函数可以访问外层变量；引出闭包
- **Page 63 — 闭包 ★★** — 经典makeAdder示例；外层函数返回后局部变量仍然存活；每次函数执行创建新的scope object
- **Page 64 — 闭包机制** — 返回的函数维持对scope object的引用→不被GC回收；**与全局对象的两个区别**：①每次调用创建新scope ②scope不可直接从代码访问

---

### **🧠 小测验 Quiz**

**题1（P58-60 ★★）— 预测输出：**

```javascript
function test() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);    // ?
  console.log(b);    // ?
}
```

**题2（P61）— 预测输出：**

```javascript
var x = "var";
let y = "let";
console.log(window.x);    // ?
console.log(window.y);    // ?
```

**题3（P63-64 ★★）— 预测输出：**

```javascript
function makeMultiplier(factor) {
  return function(n) {
    return n * factor;
  };
}
let double = makeMultiplier(2);
let triple = makeMultiplier(3);
console.log(double(5));   // ?
console.log(triple(5));   // ?
console.log(double(10));  // ?
```

**题4（综合P59+P63 ★★）— 经典面试题，预测输出：**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
```

---

**答案：**

**题1：** `1` 然后 `ReferenceError: b is not defined`

- `var a` 是函数级作用域→if块外仍可见→输出1
- `let b` 是块级作用域→出了if块就不存在→报错（c也一样，但不会执行到）

**题2：** `"var"` 和 `undefined`

- P61原文："only `var` variables are added to the global object"
- `var x` 加到了window上→`window.x`是`"var"`
- `let y` 不在window上→`window.y`是`undefined`

**题3：** `10`、`15`、`20`

- `makeMultiplier(2)` 创建闭包，scope中`factor=2`
- `makeMultiplier(3)` 创建另一个闭包，scope中`factor=3`
- `double(5)` → 5_2=10，`triple(5)` → 5_3=15，`double(10)` → 10*2=20
- 两个闭包有各自独立的scope object（P64）

**题4：** 输出 `3, 3, 3`（三个3）

- `var i` 是函数级作用域→整个循环只有一个`i`
- 循环结束时`i=3`
- 100ms后三个setTimeout回调执行时，都读到同一个`i=3`
- **修复：** 把`var`改成`let`。`let`是块级作用域，每次循环迭代有独立的`i`副本→输出`0, 1, 2`

---

### **Guided Learning 引导问题**

1. **（P58-59）把以下代码中的`let`改成`var`，结果会怎样改变？**
   
    ```javascript
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }
    console.log(i);
    ```
    
    答案：循环内输出0,1,2不变。但最后一行：`let`版本报ReferenceError（i出了块就不存在），`var`版本输出3（i泄漏到函数级）。
    
2. **（P62）以下代码中，`alice`函数为什么能访问变量`a`？**
   
    ```javascript
    function wonderland() {
      let a = 1;
      function alice() { return a + 1; }
      return alice();
    }
    ```
    
    答案：因为P56说"内层块可以访问外层块的变量"。`alice`是`wonderland`内部的函数，`a`是`wonderland`的局部变量，所以`alice`可以访问`a`。
    
3. **（P64）为什么闭包中的变量不会被垃圾回收？** 答案：P64原文说"the returned function maintains a reference to that scope object"——返回的函数维持着对scope object的引用。有引用存在→GC不回收。只有当返回的函数本身也没有引用了（比如`add5 = null`），scope object才会被回收。
   
4. **（P57-60）为什么课件把`undeclared`评为"Pure Evil 纯恶"？** 答案：因为它是全局的（P60），可能干扰文档中**任何地方**的同名变量，而你甚至不知道它存在。至少`var`被限制在函数内，而undeclared连函数都限制不住。
   

---

**🎉 恭喜！Ch06 Core JavaScript 全部64页已经逐页讲解完毕。**

整章的 ★★ 核心考点回顾：

1. **类型转换（P23-26）** — Falsy/Truthy、==vs===、+号陷阱
2. **Call by Value vs Call by Sharing（P37）** — 原始值传副本、对象传引用副本
3. **Prototype原型链（P50-54）** — 共享方法、查找链、new三步
4. **作用域（P56-61）** — const/let块级 vs var函数级 vs 未声明全局
5. **闭包（P62-64）** — scope object存活机制、每次调用独立scope

你可以告诉我是否需要对某个考点进行更深入的练习，或者准备开始学习 **07JavaScriptClientSide.pdf**。