# **Core JavaScript 核心JavaScript复习讲解材料 Pages 1–64**

---

# 1. **Introduction to JavaScript – JavaScript简介 Pages 2–5**

## 1.1 **What is JavaScript? – 什么是JavaScript？Pages 2–3**

### 1.1Q: What is JavaScript and what are its three components?

**Q:** What are the key characteristics of JavaScript and its three components? JavaScript的关键特性和三个组成部分是什么？

**A:** JavaScript is a **high-level（高级）, dynamic（动态）, untyped（无类型）, interpreted（解释型）** programming language standardized in the **ECMAScript（ECMAScript规范）** specification. JavaScript是一种高级、动态、无类型、解释型编程语言，遵循ECMAScript规范。

It is **prototype-based（基于原型）** with **first-class functions（函数是一等公民）**, supporting: 它基于原型，函数为一等公民，支持：

- Object-oriented programming 面向对象编程
- Imperative programming 命令式编程
- Functional programming 函数式编程

**Three Components 三大组成部分：**

|Component 组件|Description 描述|
|---|---|
|Core JavaScript 核心JS|The heart of the language 语言核心|
|Client-side JS 客户端JS|Browser control & user interaction 浏览器控制与用户交互|
|Server-side JS 服务器端JS|Web server support Web服务器支持|

> 📌 **核心洞察 Core Insight:** JavaScript的"无类型"并不意味着没有类型，而是变量本身不绑定类型——类型属于值而非变量。这是它与Java/C++的根本区别。 "Untyped" doesn't mean "no types" — types belong to _values_, not _variables_. This is the fundamental difference from Java/C++.

**Page 2页**

---

### 1.2Q: What are the uses of JavaScript?

**Q:** Why use JavaScript on the client side instead of always relying on the server? 为什么要在客户端使用JavaScript，而不总是依赖服务器？

**A:**

- Servers are often **overloaded（过载）**; client processing has **quicker reaction time（更快响应）**. 服务器常常过载，客户端处理响应更快。
- JavaScript can work with **forms（表单）** for validation. 可用于表单验证。
- It interacts with the **internal model（内部模型/DOM）** of the web page to alter it **dynamically（动态地）**. 可动态改变网页。
- Enables **complex user interfaces（复杂用户界面）** beyond plain HTML/CSS. 超越HTML/CSS的复杂界面。

> ⚠️ **Critical Warning 关键警告:** Client-side validation is easy to bypass — a user could copy the page and remove validation code. **Crucial validation must also be done server-side（关键验证必须在服务器端完成）.**

**Page 3页**

---

### 1.3Q: What are the two JavaScript execution environments?

**Q:** What are the two main environments for executing JavaScript? 执行JavaScript的两个主要环境是什么？

**A:**

|Environment 环境|Description 描述|
|---|---|
|**Browser 浏览器**|Requires an HTML file + browser to run; many functions reference HTML/window 需要HTML文件和浏览器；许多函数引用HTML/window|
|**NodeJS**|Server-side environment; similar to Python console 服务器端环境；类似Python控制台|

> 📌 This course **only covers the browser（本课程仅涉及浏览器）**; Python is used for server-side work.

**Page 5页**

---

**习题 Exercises 1.1–1.3**

**E1.1** (Page 2) What does it mean that JavaScript is "dynamically typed"? Give one example showing why this differs from Java. JavaScript"动态类型（dynamically typed）"是什么意思？举一个例子说明它与Java的区别。

**E1.2** (Page 3) Why is client-side validation（客户端验证）alone insufficient? What is the recommended approach? 为什么仅靠客户端验证是不够的？推荐的方法是什么？

**E1.3** (Page 5) Name the two execution environments（执行环境）for JavaScript and state which one this course focuses on. 说出JavaScript的两个执行环境，并说明本课程关注哪一个。

---

## 1.2 **Event-Driven Computation – 事件驱动计算 Page 4**

### 1.4Q: What is event-driven computation?

**Q:** What is an event in JavaScript and why is this model important? JavaScript中的事件是什么，为什么这种模型很重要？

**A:** **Events（事件）** are user actions such as mouse clicks and key presses. 事件是用户操作，如鼠标点击和键盘按键。

The main task of many JavaScript programs is to **respond to events（响应事件）**. 许多JavaScript程序的核心任务是响应事件。

Example of inline event handler（内联事件处理器）:

```html
<!-- HTML with inline onclick event handler -->
<!-- 带有内联onclick事件处理器的HTML -->
<button onclick="getElementById('demo').innerHTML='Href href!'">
<!-- onclick属性直接包含JavaScript代码 -->
<!-- onclick attribute directly contains JavaScript code -->
Tell me!
<!-- 按钮文字 Button text -->
</button>
```

**Page 4页**

---

**习题 Exercise 1.4**

**E1.4** (Page 4) In event-driven computation（事件驱动计算）, what happens when a button with `onclick` is clicked? Why must server-side validation（服务器端验证）also be implemented? 在事件驱动计算中，点击带有`onclick`的按钮会发生什么？为什么还必须实现服务器端验证？

---

# 2. **JavaScript in the Browser – 浏览器中的JavaScript Pages 6–9**

## 2.1 **Including JavaScript in the Browser – 引入JavaScript Pages 7**

### 2.1Q: What are the three ways to include JavaScript in a webpage?

**Q:** How can JavaScript be included in a web page? 如何在网页中引入JavaScript？

**A:** Three methods 三种方式：

**Method 1 – Inline in a tag attribute（内联标签属性）:**

```html
<button onclick="myFunction()">Click</button>
<!-- onclick属性直接写JS代码 onclick attribute contains JS code directly -->
```

**Method 2 – `<script>` tag in document（文档中的script标签）:**

```html
<head>
  <script>
    /* JavaScript code here */
    /* JavaScript代码写在这里 */
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
      /* 通过ID获取元素并修改其内容 Get element by ID and change its content */
    }
  </script>
</head>
```

**Method 3 – External file（外部文件）:**

```html
<script src="myScript.js"></script>
<!-- src属性指定外部JS文件路径 src attribute points to external JS file -->
```

> 📌 **Best Practice 最佳实践:** Functions defined in `<head>` must be defined before use in `<body>`. 定义在`<head>`中的函数必须在`<body>`使用前已定义。

**Page 7页**

---

## 2.2 **Debugging & IO – 调试与输入输出 Pages 8–9**

### 2.2Q: How do you debug JavaScript and handle basic IO?

**Q:** What tools and functions are used for JavaScript debugging and IO in the browser? 在浏览器中调试JavaScript和处理IO使用哪些工具和函数？

**A:**

**Debugging Tools 调试工具（Chrome DevTools）:**

|Tool 工具|Purpose 用途|
|---|---|
|DevTools Sources 源码面板|Browse and read code 浏览代码|
|Console 控制台|Interact with code and page 与代码和页面交互|
|Breakpoints 断点|Step through execution 逐步执行|

**IO Functions IO函数:**

```javascript
console.log("debug message");  // 调试输出到控制台（推荐）Preferred for debugging
alert("Hello!");               // 弹出提示框（输出给用户）Pop-up alert to user
confirm("Are you sure?");      // 弹出确认框 Pop-up confirmation
let name = prompt("Your name?"); // 弹出输入框（获取用户输入）Get user input
```

> ⚠️ Writing logs to the **document object（document对象）** is **bad practice（不良做法）**. Use `console.log` instead. 不要向document对象写日志，应使用`console.log`。

**Page 8–9页**

---

**习题 Exercises 2.1–2.2**

**E2.1** (Page 7) List the three ways（三种方式）to include JavaScript in an HTML page and explain when you would use an external file（外部文件）. 列出在HTML页面中引入JavaScript的三种方式，并解释何时使用外部文件。

**E2.2** (Page 8-9) What is the difference between `console.log()`, `alert()`, and `prompt()`? Why is writing to the `document` object considered bad practice（不良做法）? `console.log()`、`alert()`和`prompt()`有什么区别？为什么向`document`对象写入被认为是不良做法？

---

# 3. **Basics of Core JavaScript – JavaScript核心基础 Pages 10–28**

## 3.1 **Variables – 变量 Pages 11–12**

### 3.1Q: How are variables declared in JavaScript and what are the naming rules?

**Q:** What are the four ways to declare a variable and the naming conventions? 声明变量的四种方式和命名惯例是什么？

**A:**

**Naming Rules 命名规则:**

- Can start with: `$`, `_`, or any letter 可以以`$`、`_`或任意字母开头
- **Case-sensitive（区分大小写）**: `myVar ≠ myvar`
- Convention: **camelCase（驼峰命名法）**, e.g., `myVariable`

**Four Declaration Types 四种声明方式:**

```javascript
let z = x + y;          // block-scoped, reassignable 块作用域，可重新赋值
const x = 6;            // block-scoped, CANNOT reassign 块作用域，不可重新赋值
var stopFlag = true;    // function-scoped (avoid) 函数作用域（避免使用）
zz = z;                 // undeclared, global (NEVER use) 未声明，全局（绝对不用）

// Multiple declarations on one line 同一行声明多个变量:
let counter, index, pi = 3.14159265, rover = "Palmer";
// counter和index未初始化（undefined），pi和rover已赋值
// counter and index are uninitialized (undefined), pi and rover have values
```

> 📌 **Core Rule 核心规则:** Use `const` where possible, `let` otherwise, **never `var` or undeclared（绝不用var或不声明）**.

**Page 11–12页**

---

**习题 Exercise 3.1**

**E3.1** (Page 11) Which of the following are valid variable names（变量名）in JavaScript? Explain why. `2count`, `_name`, `$price`, `let`, `camelCase`, `my-var`

以下哪些是JavaScript中有效的变量名（variable names）？解释原因。

---

## 3.2 **JavaScript Syntax – 语法 Page 13**

### 3.2Q: What is Automatic Semicolon Insertion and why is it dangerous?

**Q:** Why is JavaScript's tolerance for incorrect code a potential problem? 为什么JavaScript对错误代码的容忍是一个潜在问题？

**A:** JavaScript uses **Automatic Semicolon Insertion（ASI，自动分号插入）**. The interpreter adds `;` if it thinks a statement is complete. JavaScript使用自动分号插入（ASI），解释器在认为语句完整时自动添加分号。

**Dangerous Example 危险示例:**

```javascript
// WRONG - what the programmer wrote 程序员写的代码:
return
x;

// WHAT JAVASCRIPT SEES - after ASI 自动分号插入后JavaScript实际看到的:
return;    // returns undefined! 返回undefined！
x;         // this line is NEVER reached 这行永远不会执行
```

> ⚠️ **Always put `return value` on the SAME LINE 永远把return值放在同一行！**

**Comments 注释:**

```javascript
// This is a single-line comment 这是单行注释
/* This is a
   multi-line comment 这是多行注释 */
```

**Page 13页**

---

## 3.3 **Primitives and Objects – 基本类型与对象 Page 14**

### 3.3Q: What is the difference between primitives and objects in JavaScript?

**Q:** How are primitives and objects stored differently in memory? 基本类型和对象在内存中的存储方式有何不同？

**A:**

|Category 类别|Types 类型|Storage 存储|
|---|---|---|
|**Primitives 基本类型**|`Number`, `String`, `Boolean`, `null`, `undefined`|Stack/non-heap 栈/非堆|
|**Objects 对象**|`Function`, `Array`, `Date`, `Math`, etc.|Heap 堆|

**Memory Diagram 内存图：**

- `prim = 17` → stored directly as value 直接存储值
- `obj = {17}` → variable stores a **reference（引用）** to heap memory 变量存储指向堆内存的引用

**Dot notation（点符号）** for property access: `"abc".length`, `Math.sin(3.14)`

**Garbage collection（垃圾回收）:** Objects are automatically freed when no references remain. 无引用时自动释放。

**Page 14页**

---

## 3.4 **Numbers – 数字 Pages 15–17**

### 3.4Q: How does JavaScript store numbers and what special values exist?

**Q:** Why is `0.1 + 0.2 ≠ 0.3` in JavaScript? 为什么在JavaScript中`0.1 + 0.2 ≠ 0.3`？

**A:** All numbers are stored as **double-precision 64-bit IEEE 754 floating-point（双精度64位IEEE 754浮点数）**. 所有数字以双精度64位IEEE 754浮点数存储。

This causes **floating-point precision issues（浮点精度问题）**: `0.1 + 0.2 = 0.30000000000000004`

**Operators 运算符:**

```javascript
let a = 10 + 3;    // addition 加法 = 13
let b = 10 % 3;    // modulo 取余 = 1
let c = a++;       // post-increment 后自增: c=13, a=14
let d = ++a;       // pre-increment 前自增: a=15, d=15
a += 7;            // compound assignment 复合赋值: a = a + 7
```

**Special Number Constants 特殊数字常量:**

|Constant 常量|Meaning 含义|
|---|---|
|`Number.MAX_VALUE`|Largest representable number 最大数|
|`Number.MIN_VALUE`|Smallest representable number 最小数|
|`Number.NaN`|Not a Number 非数字|
|`Number.POSITIVE_INFINITY`|+∞|
|`Number.NEGATIVE_INFINITY`|-∞|
|`Number.PI`|π的值|

```javascript
let v = 1 / 0;    // v = POSITIVE_INFINITY 正无穷
// v现在包含POSITIVE_INFINITY v now contains POSITIVE_INFINITY

let value = Math.sin(3.5);  // advanced math 高级数学运算
// 使用Math对象进行高级数学运算 Use Math object for advanced math

let i = parseInt("124");    // string to integer 字符串转整数 = 124
// parseInt将字符串转换为整数 parseInt converts string to integer
```

**Page 15–16页**

### 3.5Q: What is NaN and why is it "infectious"?

**Q:** Why is NaN said to be infectious and how do you check for it? 为什么NaN被称为"有传染性的"，如何检测它？

**A:** **NaN（Not a Number）** is returned for invalid operations 无效运算返回NaN:

```javascript
let value = parseInt("hello", 10); // "hello" is not a number "hello"不是数字
// value 现在包含 NaN value now contains NaN

let result = NaN + 5; // NaN is INFECTIOUS NaN具有传染性
// result 也是 NaN result is also NaN

isNaN(value); // true - checks if value is NaN 检测值是否为NaN
// isNaN函数是检测NaN的正确方式 isNaN function is the correct way to check for NaN
```

> 📌 **Why infectious? 为什么有传染性？** Any operation involving NaN produces NaN — this propagates errors through calculations, making `isNaN()` essential for input validation（输入验证）.

**Page 17页**

---

**习题 Exercises 3.4–3.5**

**E3.4** (Page 15-16) What is the output of the following? Explain why. 以下代码输出什么？解释原因。

```javascript
console.log(0.1 + 0.2 === 0.3);
console.log(1 / 0);
console.log(parseInt("42abc"));
console.log(parseInt("abc", 10));
```

**E3.5** (Page 17) What will `isNaN(NaN + 5)` return? Why is NaN described as "infectious（传染性）"? `isNaN(NaN + 5)`会返回什么？为什么NaN被描述为"有传染性（infectious）"？

---

## 3.5 **Strings – 字符串 Pages 18–19**

### 3.6Q: What are the key properties of JavaScript strings?

**Q:** How are strings represented and manipulated in JavaScript? JavaScript中字符串如何表示和操作？

**A:** Strings are sequences of **Unicode characters（Unicode字符）** represented as **16-bit numbers（16位数字）**. 字符串是以16位数字表示的Unicode字符序列。

```javascript
let s1 = "Hello";    // double quotes 双引号
let s2 = 'World';    // single quotes - NO difference 单引号——无区别

// Escape characters 转义字符:
let s3 = "It\'s OK";  // \' escapes single quote 转义单引号
let s4 = "Line1\nLine2"; // \n = newline 换行符
let s5 = "Tab\there";   // \t = tab 制表符

// String methods 字符串方法:
let str = "Hello";
str.length;          // 5 - number of characters 字符数
str.charAt(1);       // "e" - char at index 1 索引1处的字符
str.indexOf("l");    // 2 - first position of "l" "l"第一次出现的位置
str.substring(1, 3); // "el" - from index 1 to 3 (exclusive) 从1到3(不含)
str.toLowerCase();   // "hello" 转小写
str.toUpperCase();   // "HELLO" 转大写

// Concatenation and conversion 拼接与转换:
let combined = "Hello" + " " + "World"; // "Hello World" 字符串拼接
let num = (42).toString(); // 42 → "42" 数字转字符串
let numVal = + "123";      // "123" → 123 字符串转数字
```

> 📌 **No Character type（无字符类型）**: A single character is a string of length 1. 单个字符就是长度为1的字符串。

**Page 18–19页**

---

## 3.6 **Booleans, Null, Undefined – 布尔、Null、Undefined Pages 20–21**

### 3.7Q: What is the difference between null and undefined?

**Q:** Why does JavaScript have both `null` and `undefined`? 为什么JavaScript同时有`null`和`undefined`？

**A:**

```javascript
// null: intentionally no value 有意不赋值
let x = null;        // programmer chose to leave it empty 程序员有意留空

// undefined: not declared or not assigned 未声明或未赋值
let y;               // declared but not assigned 已声明但未赋值
console.log(y);      // undefined
let z = undefined;   // explicitly set to undefined 显式设为undefined
```

**Boolean Operators 布尔运算符:**

```javascript
!true    // false - logical NOT 逻辑非
true && false  // false - logical AND (short-circuits) 逻辑与（短路）
false || true  // true  - logical OR (short-circuits) 逻辑或（短路）
```

> 📌 **Short-circuit（短路）:** `&&` stops at first `false`; `||` stops at first `true`. This matters for performance and side effects. `&&`在第一个`false`处停止；`||`在第一个`true`处停止。这对性能和副作用很重要。

**Page 20–21页**

---

## 3.7 **Type System and Coercion – 类型系统与类型转换 Pages 22–26**

### 3.8Q: What are the rules for JavaScript's implicit type coercion?

**Q:** What happens when JavaScript automatically converts types in operations? JavaScript自动转换类型时会发生什么？

**A:** JavaScript is **dynamically typed（动态类型）**: variables have no fixed type. JavaScript是动态类型语言，变量无固定类型。

**`typeof` operator（typeof运算符）:**

```javascript
typeof 42          // "number" 数字
typeof "hello"     // "string" 字符串
typeof true        // "boolean" 布尔
typeof null        // "object" ← 著名的历史bug!  Famous historical bug!
typeof function(){} // "function" 函数
typeof undefined   // "undefined" 未定义
```

**Coercion Rules 强制转换规则:**

**When Number expected（期望数字时）:**

|Input 输入|Result 结果|
|---|---|
|`true`|`1`|
|`false`|`0`|
|`"3"` (numeric string)|`3`|
|`"abc"`|`NaN`|
|`null`|`0`|
|`undefined`|`NaN`|

**When String expected（期望字符串时）:**

|Input 输入|Result 结果|
|---|---|
|`1`|`"1"`|
|`true`|`"true"`|
|`null`|`"null"`|
|`undefined`|`"undefined"`|

**When Boolean expected（期望布尔时）:**

|Input 输入|Result 结果|Note 注意|
|---|---|---|
|`0`|`false`||
|any non-zero number 非零数|`true`||
|`""` empty string 空字符串|`false`||
|`"0"`|**`true`**|⚠️ Surprise!|
|`undefined`, `NaN`, `null`|`false`||

**Practical uses 实际应用:**

```javascript
// Checking for null before accessing properties 访问属性前检查null:
var property = object && object.getProperty();
// 如果object为null/undefined，短路，不调用getProperty()
// If object is null/undefined, short-circuits, getProperty() not called

// Setting default values 设置默认值:
let name = otherName || "default";
// 如果otherName是falsy，使用"default"
// If otherName is falsy, use "default"
```

**Page 22–24页**

---

### 3.9Q: What is the difference between `==` and `===`?

**Q:** When should you use `==` vs `===` and why? 何时使用`==`与`===`，为什么？

**A:**

|Operator 运算符|Behavior 行为|Example 示例|
|---|---|---|
|`==` (loose equality 宽松相等)|Type coercion applied 进行类型转换|`1 == true` → `true`|
|`===` (strict equality 严格相等)|Same type AND value required 类型和值都必须相同|`1 === true` → `false`|

**The "Crazy" coercion examples 类型转换的"疯狂"示例:**

```javascript
2 - "1"          // 1   - subtraction coerces string→number 减法将字符串转为数字
2 + "1"          // "21" - + concatenates when string present +号遇字符串则拼接

"b" + "a" + +"a" + "a"  // "baNaNa" ← 惊喜! +"a" is NaN
// +"a"尝试将"a"转为数字，得NaN，拼接后变成"NaN"的字符串
// +"a" tries to convert "a" to number, gets NaN, concatenated becomes string "NaN"

'' == 0          // true  - '' converts to 0 空字符串转为0
0 == '0'         // true  - '0' converts to 0 '0'转为0
'' == '0'        // false - both strings, compared directly 都是字符串，直接比较
// 等号不具备传递性！Equality is non-transitive!
```

> 📌 **Rule: Always use `===` unless you have a specific reason to use `==`.（规则：始终使用`===`，除非有特殊原因使用`==`）**

**Page 25–26页**

---

**习题 Exercises 3.7–3.9**

**E3.7** (Page 22-24) What does `typeof null` return? Why is this considered a bug? `typeof null`返回什么？为什么这被认为是一个bug？

**E3.8** (Page 23-24) Predict the output of the following coercions（类型转换）: 预测以下强制转换的输出：

```javascript
console.log(4 - true);
console.log(7 * "3");
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Number(null));
console.log(Number(undefined));
```

**E3.9** (Page 25-26) Explain why `'' == 0` is `true` and `0 == '0'` is `true`, but `'' == '0'` is `false`. What does this tell us about using `==` vs `===` (strict equality)? 解释为什么`'' == 0`为`true`且`0 == '0'`为`true`，但`'' == '0'`为`false`。这说明了使用`==`与`===`（严格相等）时应注意什么？

---

## 3.8 **Control Structures – 控制结构 Pages 27–28**

### 3.10Q: What control structures does JavaScript provide?

**Q:** What are the available loops and conditionals in JavaScript? JavaScript提供哪些循环和条件语句？

**A:**

**Loops 循环:**

```javascript
// Standard for loop 标准for循环:
let triangle = 0;
for (let i = 1; i <= 3; i++) {  // initialization; condition; increment 初始化;条件;递增
    triangle += i;               // body 循环体
}
// triangle = 6 (1+2+3)

// for...in loop (iterates over object properties 遍历对象属性):
const person = {fname:"Quentin", lname:"Coldwater"};
let text = "";
for (let x in person) {           // x gets each key name x依次获取每个键名
    text += person[x];            // access value by key 通过键访问值
}
// text = "QuentinColdwater"

// while loop while循环:
let i = 3;
while (i >= 0) {                  // condition checked before each iteration 每次迭代前检查条件
    countdown += "... " + i + "!";
    i--;                          // decrement 递减
}
```

**Conditions 条件:**

```javascript
// if-else if-else:
if (time < 10) {
    greeting = "Good morning";   // time < 10 时 when time < 10
} else if (time < 20) {
    greeting = "Good day";       // 10 ≤ time < 20 时
} else {
    greeting = "Good evening";   // 其他情况 otherwise
}

// switch statement switch语句:
switch (new Date().getDay()) {   // current day of week 当前星期几
    case 0:
        text = "Today is Sunday"; // 星期日
        break;                    // exit switch 退出switch
    case 6:
        text = "Today is Saturday"; // 星期六
        break;
    default:                      // all other cases 其他情况
        text = "Looking forward to the weekend!";
}

// Ternary operator 三元运算符:
let price = isMember ? '$2.00' : '$10.00';
// condition ? value_if_true : value_if_false
// 条件 ? 真时的值 : 假时的值
```

**Page 27–28页**

---

# 4. **Arrays – 数组 Pages 29–34**

## 4.1 **Array Basics and Creation – 数组基础与创建 Pages 30–31**

### 4.1Q: How are arrays created and what makes them flexible?

**Q:** What are the key characteristics of JavaScript arrays? JavaScript数组的关键特性是什么？

**A:** Arrays are **zero-indexed（从零开始索引）** lists; elements can be **mixed types（混合类型）**; size is **dynamic（动态）**. 数组从零开始索引，元素可以是混合类型，大小是动态的。

**Creation Methods 创建方式:**

```javascript
// Method 1: Square bracket notation (PREFERRED 推荐)
let fruits = ["Banana", "Orange", "Apple", "Mango"];
// 直接用方括号列出元素 List elements directly in brackets

// Method 2: Array() constructor Array()构造函数:
let a = Array(10);           // empty array, length 10 空数组，长度10
// 只分配了已赋值的元素内存 Only assigned elements occupy memory
let b = Array();             // empty array, length 0 空数组，长度0
let c = Array(10, 2, "three", "four"); // array with 4 elements 4个元素的数组

// Method 3: Dynamic population 动态填充:
let person = [];             // start empty 从空数组开始
person[0] = "John";         // assign index 0 赋值给索引0
person[1] = "Doe";          // assign index 1 赋值给索引1
person[2] = 46;             // assign index 2 (different type!) 赋值给索引2（不同类型！）

// Accessing properties 访问属性:
let x = person.length;      // 3 - array length 数组长度
let y = person[0];          // "John" - element at index 0 索引0处的元素
```

**Page 30–31页**

---

## 4.2 **Accessing Arrays and Array Methods – 访问数组与数组方法 Pages 32–33**

### 4.2Q: What are the key behaviors when accessing array elements?

**Q:** What happens when you access an index beyond array bounds? 访问超出数组边界的索引时会发生什么？

**A:**

```javascript
let theBestFruits = ["Banana", "Pomegranate", "Mulberry", "Pear"];
// 数组有4个元素，索引0-3 Array has 4 elements, indices 0-3

// Two ways to iterate 两种遍历方式:
// Approach 1: index-based loop 基于索引的循环
for (let i = 0; i < theBestFruits.length; i++) {
    console.log(theBestFruits[i]); // access by numeric index 按数字索引访问
}

// Approach 2: for...in loop for...in循环
for (let fruit in theBestFruits) {
    console.log(fruit); // note: fruit is the INDEX (0,1,2,3), not the value!
    // 注意：fruit是索引(0,1,2,3)，而不是值！
}

// Dynamic resizing 动态扩容:
theBestFruits[99] = "Yuzu";         // extends array to length 100 扩展数组到长度100
theBestFruits.length;               // Returns 100 返回100（中间元素为undefined）

// Out of bounds 越界访问:
theBestFruits[102]; // Returns undefined - NO ERROR! 返回undefined，不报错！
// 错误被悄悄忽略 Errors go undetected!
```

> ⚠️ **Danger（危险）:** Out-of-bounds access silently returns `undefined`. JavaScript does NOT throw array index errors! 越界访问静默返回`undefined`，不抛出错误！

**Array Methods Table 数组方法表（Page 33）:**

|Method 方法|Action 操作|Example 示例|
|---|---|---|
|`push(x)`|Add to END 末尾添加|`arr.push("d")`|
|`pop()`|Remove from END 末尾删除|`arr.pop()`|
|`shift()`|Remove from FRONT 头部删除|`arr.shift()`|
|`unshift(x)`|Add to FRONT 头部添加|`arr.unshift("a")`|
|`join(sep)`|Elements → String 元素转字符串|`arr.join(",")`|
|`reverse()`|Reverse in place 原地反转|`arr.reverse()`|
|`sort(fn)`|Sort (optional comparator) 排序（可选比较器）|`arr.sort()`|
|`concat(arr2)`|Merge arrays 合并数组|`arr.concat([1,2])`|
|`slice(s,e)`|Extract subarray 提取子数组|`arr.slice(1,3)`|
|`splice(i,n)`|Insert/remove at index 在索引处插入/删除|`arr.splice(1,0,"x")`|
|`delete arr[i]`|Replace with `undefined` 替换为undefined|`delete arr[2]`|

**Page 32–33页**

---

## 4.3 **Associative Arrays – 关联数组 Page 34**

### 4.3Q: What are associative arrays and what are their limitations?

**Q:** How do associative arrays differ from regular arrays? 关联数组与普通数组有何不同？

**A:**

```javascript
let arr = [];          // start as regular array 从普通数组开始
arr["name"] = "Bob";   // use STRING key instead of number 使用字符串键而非数字
// arr现在是一个关联数组（实际是对象）arr is now an associative array (actually an Object)
```

**Limitations 限制:** `push`, `pop`, `shift`, `unshift` are **NOT available（不可用）**. **Why? 为什么？** Associative arrays are really **Objects（对象）** under the hood. 关联数组本质上是对象。

> 📌 This is why `typeof []` returns `"object"` — arrays ARE objects in JavaScript. 这就是为什么`typeof []`返回`"object"`——数组在JavaScript中就是对象。

**Page 34页**

---

**习题 Exercises 4.1–4.3**

**E4.1** (Page 30-31) What is the output of the following? 以下代码的输出是什么？

```javascript
let arr = Array(3);
console.log(arr.length);
console.log(arr[0]);
let arr2 = Array(1, 2, 3);
console.log(arr2.length);
```

**E4.2** (Page 32) What is the output and why? What JavaScript behavior does this demonstrate? 输出是什么？为什么？这说明了JavaScript的什么行为？

```javascript
let fruits = ["Apple", "Banana"];
fruits[10] = "Mango";
console.log(fruits.length);
console.log(fruits[5]);
```

**E4.3** (Page 33) Arrange `push`, `pop`, `shift`, `unshift` to show how to use an array as a queue (FIFO) and as a stack (LIFO). 排列`push`、`pop`、`shift`、`unshift`，说明如何将数组用作队列（FIFO）和栈（LIFO）。

---

# 5. **Functions – 函数 Pages 35–42**

## 5.1 **Defining and Calling Functions – 定义与调用函数 Pages 36–37**

### 5.1Q: How are functions defined and how are parameters passed?

**Q:** What is the difference between call-by-value and call-by-sharing? 按值调用（call-by-value）和按共享调用（call-by-sharing）有什么区别？

**A:**

**Function Definition Syntax 函数定义语法:**

```javascript
// Basic function definition 基本函数定义:
function myFunction(p1, p2) {  // p1, p2 are FORMAL parameters 形参
    return p1 * p2;             // return a value 返回值
}

// Calling the function 调用函数:
document.getElementById("demo").innerHTML = myFunction(4, 3);
// 4, 3 are ACTUAL parameters 4,3是实参; result = 12
```

**Call by Value（按值传递）for Primitives（基本类型）:**

```javascript
function run(x) {    // x is a COPY of the argument x是参数的副本
    x += 1;          // modifies the COPY only 只修改副本
    return x;
}
let u = 1;
let v = run(u);      // u is still 1! 原始变量u仍然是1
// u = 1, v = 2  — original u unchanged 原始u未改变
```

**Call by Sharing（按共享传递）for Objects（对象）:**

```javascript
function setOutOnAdventure(party1) {
    party1.push("Ivan");     // MODIFIES original array 修改了原始数组！
    party1.push("Mia");
    
    let party2 = new Array("Felix", "Jenna", "Sheba");
    party1 = party2;         // NO effect on original 对原始变量无影响
    party1.push("Piers");
    return party1;
}

party1 = new Array("Isaac", "Garet");
party2 = setOutOnAdventure(party1);
console.log(party1); // ["Isaac", "Garet", "Ivan", "Mia"] - MODIFIED! 被修改了！
console.log(party2); // ["Felix", "Jenna", "Sheba", "Piers"] 返回值
```

> 📌 **Key Insight 关键洞察:** Object reference is passed, so mutations inside the function affect the original. But reassigning the parameter (`party1 = party2`) does NOT change the caller's variable. 传递的是对象引用，函数内修改会影响原始对象。但重新赋值参数不影响调用者的变量。

**Page 36–37页**

---

## 5.2 **Function Parameters – 函数参数 Pages 38–39**

### 5.2Q: How does JavaScript handle too few or too many arguments?

**Q:** What is the `arguments` object and when is it useful? `arguments`对象是什么，何时有用？

**A:**

```javascript
function f(x, y) {    // x, y are FORMAL parameters 形参
    // ...
}
f(3, 1, 4);           // 4 is extra - NOT accessible by name 4是多余的，无法按名访问
f(3);                 // y is undefined - no error! y为undefined，不报错！
```

**The `arguments` object（arguments对象）:**

```javascript
function findMax() {        // no formal parameters declared 没有声明形参
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) { // access ALL args 访问所有实参
        if (arguments[i] > max) {
            max = arguments[i]; // track largest 跟踪最大值
        }
    }
    return max;
}

findMax(4, 5, 6);  // works with any number of arguments 适用于任意数量的参数！
// returns 6
```

**Page 38–39页**

---

## 5.3 **First-Class Functions – 函数是一等公民 Pages 40–41**

### 5.3Q: What does it mean that functions are "first-class" in JavaScript?

**Q:** How can functions be assigned to variables and used as arguments? 函数如何赋值给变量并用作参数？

**A:** Functions are **first-class objects（一等对象）**: they can be assigned, passed, and returned. 函数是一等对象，可以被赋值、传递和返回。

```javascript
// Assigning function to variable 将函数赋值给变量:
function announce() {
    console.log("It's Groundhog day!"); // 打印信息 print message
}
let reannounce = announce;   // reannounce REFERS to the announce function object
// reannounce指向announce函数对象（注意：没有()）

announce();     // calls the function 调用函数: "It's Groundhog day!"
reannounce();   // ALSO calls announce 也调用announce: "It's Groundhog day!"

// Functions as arguments (anonymous functions 匿名函数):
let points = [2, 8, 1, 5, 3, 1];
points.sort();                      // default sort 默认排序: [1,1,2,3,5,8]
console.log(points);

points.sort(function(a, b) {        // anonymous comparator 匿名比较函数
    return b - a;                   // b-a means descending order b-a表示降序
});
console.log(points);               // [8,5,3,2,1,1]

// Arrow function syntax (concise 简洁) 箭头函数语法:
points.sort((a, b) => { return b - a; }); // same as above 与上面相同
```

> 📌 **Core Insight 核心洞察:** `announce` (no parens) = the function object 函数对象. `announce()` (with parens) = call the function 调用函数. This distinction is critical in event handling. 这个区别在事件处理中至关重要。

**Page 40–41页**

---

## 5.4 **Anonymous and Recursive Functions – 匿名与递归函数 Pages 41–42**

### 5.4Q: How do anonymous and recursive functions work?

**Q:** How can an anonymous function call itself recursively? 匿名函数如何递归调用自身？

**A:**

**Named Anonymous Function（命名匿名函数）for recursion（递归）:**

```javascript
var ninja = {
    yell: function cry(n) {       // "cry" is the function's internal name 内部名称
        return n > 0 ? cry(n-1) + "a" : "hiy";
        // if n>0, call cry recursively; else return "hiy"
        // 如果n>0，递归调用cry；否则返回"hiy"
    }
};

console.log(ninja.yell(5)); // "hiyaaaaa" (5 a's appended 添加了5个a)
// Called as ninja.yell() externally 外部通过ninja.yell()调用
// But internally uses the name "cry" for self-reference 内部用"cry"自我引用
```

**Page 41–42页**

---

**习题 Exercises 5.1–5.4**

**E5.1** (Page 37) Given this code, what are the final values of `party1` and `party2`? Explain the difference between call-by-value（按值传递）and call-by-sharing（按共享传递）. 给出以下代码，`party1`和`party2`的最终值是什么？解释按值传递与按共享传递的区别。

```javascript
function modify(arr, num) {
    arr.push(99);
    num += 10;
}
let myArr = [1, 2, 3];
let myNum = 5;
modify(myArr, myNum);
console.log(myArr);
console.log(myNum);
```

**E5.2** (Page 39) Write a function `sum()` using the `arguments` object（arguments对象）that can take any number of numeric arguments and return their sum. 使用`arguments`对象编写一个`sum()`函数，能接受任意数量的数字参数并返回它们的和。

**E5.3** (Page 40-41) What is the difference between `myFunc` and `myFunc()`? Give an example of when you would pass a function as an argument（作为参数传递）to another function. `myFunc`和`myFunc()`有什么区别？举例说明何时会将函数作为参数传递给另一个函数。

---

# 6. **Objects – 对象 Pages 43–54**

## 6.1 **Objects as Name-Value Pairs – 对象作为键值对 Page 44**

### 6.1Q: What is a JavaScript object fundamentally?

**Q:** How is a JavaScript object similar to Python's dict or Java's HashMap? JavaScript对象与Python的dict或Java的HashMap有何相似？

**A:** A JavaScript object is a collection of **name-value pairs（键值对）** where: JavaScript对象是键值对的集合，其中：

- Names are **strings（字符串）**
- Values can be **any JavaScript value（任意JavaScript值）** including other objects

```javascript
// Object literal syntax (quickest way 最快方式):
let bubbleTea = {
    ingredients: ["Tea", "Milk", "Tapioca", "Honey"], // array value 数组值
    taste: "Delicious",                                // string value 字符串值
    timeToDrinkInSeconds: function () {                // function value (method) 函数值（方法）
        return 41;
    }
};
// If a variable is NOT a primitive, it IS an object! 非基本类型就是对象！
// Arrays and functions are also objects. 数组和函数也是对象。
```

**Page 44页**

---

## 6.2 **Accessing and Modifying Object Properties – 访问与修改属性 Pages 45–46**

### 6.2Q: What are the two ways to access object properties and when to use each?

**Q:** When should you use dot notation vs bracket notation? 何时使用点符号，何时使用方括号符号？

**A:**

```javascript
// Dot notation 点符号 (simpler, most common 更简单，最常用):
bubbleTea.taste = "Sublime";  // set property 设置属性

// Bracket notation 方括号符号 (string key 字符串键):
bubbleTea["taste"] = "Sublime"; // semantically identical 语义上等同

// Advantages of bracket notation 方括号符号的优势:
let propName = "taste";          // computed at runtime 运行时计算
console.log(bubbleTea[propName]); // dynamic access 动态访问

// Update methods at runtime 运行时更新方法:
bubbleTea.timeToDrinkInSeconds = function () {
    return "Far too quick"; // replace existing method 替换现有方法
};

// Adding new properties 添加新属性:
let team = new Object();
team.attacker = "Cloud";    // create by assignment 通过赋值创建
team.tank = "Barret";
team.healer = "Aerith";

// Deleting properties 删除属性:
delete team.healer;         // team no longer has 'healer' team不再有healer属性

// Iterating over properties 遍历属性 (for...in):
for (let role in team) {
    console.log(role, ": ", team[role]); // key then value 先键后值
}
// Output: "attacker: Cloud", "tank: Barret"
```

**Page 45–46页**

---

## 6.3 **The Global Object and `this` Keyword – 全局对象与this关键字 Pages 47–48**

### 6.3Q: What is the global object and what does `this` refer to?

**Q:** How does `this` change meaning based on context? `this`如何根据上下文改变含义？

**A:**

**Global Object 全局对象:**

```javascript
globalThis.x = 5; // assign to global object 赋值给全局对象
alert(x);         // works without globalThis. reference 无需globalThis前缀即可访问
// In browser, globalThis === window 在浏览器中globalThis等同于window
```

**`this` Keyword Rules `this`关键字规则:**

|Context 上下文|`this` refers to `this`指向|
|---|---|
|In a method 方法中|The owner object 所属对象|
|Alone 单独|Global object 全局对象|
|In a regular function 普通函数中|Global object 全局对象|
|In strict mode 严格模式|`undefined`|
|In an event 事件中|The element that received the event 接收事件的元素|

```javascript
let amberPearlLatte = {
    basePrice: 10,                  // property 属性
    getPrice: function() {
        let tax = 12.5;
        return this.basePrice * (1.0 + tax/100); // this = amberPearlLatte
        // this.basePrice引用所属对象的basePrice属性
        // this.basePrice references the owner object's basePrice
    }
};
```

**Page 47–48页**

---

## 6.4 **Constructors, Prototypes, OOP – 构造函数、原型与OOP Pages 49–53**

### 6.4Q: What is JavaScript's approach to OOP and how do constructors work?

**Q:** How does prototype-based OOP differ from class-based OOP? 基于原型的OOP与基于类的OOP有何不同？

**A:**

**Constructor Function（构造函数）:**

```javascript
function Drink(basePrice) {
    this.basePrice = basePrice;   // initialize property 初始化属性
    // 'this' refers to the new object being created
    // 'this'指向正在创建的新对象
}

// The 'new' keyword process 'new'关键字的过程:
let amberPearlLatte = new Drink(10); // 1. New empty object created 创建新空对象
                                      // 2. Drink called with this = new object 以新对象为this调用Drink
                                      // 3. New object returned 返回新对象
let winterMelonTea = new Drink(11);
```

**Problem: Each instance gets its OWN copy of methods 问题：每个实例都有方法的独立副本（浪费内存）**

**Solution: Prototype（解决方案：原型）**

```javascript
// Better: Add method to SHARED prototype 更好：将方法添加到共享原型
Drink.prototype.getPrice = function() {
    let tax = 12.5;
    return this.basePrice * (1.0 + tax/100); // shared by ALL Drink instances
    // 由所有Drink实例共享，不重复创建
};

amberPearlLatte = new Drink(10);
amberPearlLatte.getPrice(); // works! JavaScript checks prototype chain
// 有效！JavaScript沿原型链查找方法
```

**Prototype Chain（原型链）concept 概念:**

```
amberPearlLatte  →  Drink.prototype  →  Object.prototype  →  null
(instance 实例)    (shared methods 共享方法)  (root 根)
```

**Adding methods at runtime（运行时添加方法）:**

```javascript
const s = "live on";
// Add 'reversed' method to ALL strings! 为所有字符串添加reversed方法！
String.prototype.reversed = function() {
    let r = "";
    for (var i = this.length - 1; i >= 0; i--) { // iterate backwards 从后往前
        r += this[i];                              // append chars in reverse 反向追加字符
    }
    return r;
};
s.reversed(); // "no evil" ← 将"live on"反转了！reversed "live on"!
```

**Page 49–53页**

---

### 6.5Q: What exactly happens when `new` is used?

**Q:** Trace the three steps of `new Drink(10)`. 追踪`new Drink(10)`的三个步骤。

**A:**

1. **A new empty object is created（创建新空对象）**, with its `[[Prototype]]` set to `Drink.prototype`. 创建新空对象，其`[[Prototype]]`设为`Drink.prototype`。
    
2. **Constructor is called（调用构造函数）** with `this` bound to the new object and arguments passed. 以新对象为`this`调用构造函数，传入参数。
    
3. **The new object is returned（返回新对象）** — unless the constructor explicitly returns a different object. 返回新对象，除非构造函数显式返回另一个对象。
    

> 📌 `new Drink` (no args) is equivalent to `new Drink()`. `new Drink`（无参数）等同于`new Drink()`。

**Page 54页**

---

**习题 Exercises 6.1–6.5**

**E6.1** (Page 44) Create an object literal（对象字面量）`car` with properties `make`, `model`, `year`, and a method `describe()` that returns a string combining all three properties. 创建一个对象字面量`car`，包含`make`、`model`、`year`属性和一个`describe()`方法，返回结合这三个属性的字符串。

**E6.2** (Page 45-46) What is the advantage of bracket notation（方括号符号）over dot notation（点符号）? Give an example where dot notation would FAIL. 方括号符号比点符号有什么优势？举一个点符号会失败的例子。

**E6.3** (Page 48) What does `this` refer to in each context below? `this`在以下每个上下文中指的是什么？

```javascript
const obj = {
    name: "Test",
    getName: function() { return this.name; } // context 1 情境1
};
function standalone() { return this; }       // context 2 情境2
```

**E6.4** (Page 49-52) Rewrite the following to use `Drink.prototype` instead of defining `getPrice` inside the constructor（构造函数）. Explain why this is more memory-efficient（更节省内存）. 将以下代码重写为使用`Drink.prototype`而非在构造函数内定义`getPrice`。解释为什么这样更节省内存。

```javascript
function Drink(basePrice) {
    this.basePrice = basePrice;
    this.getPrice = function() { return this.basePrice * 1.125; };
}
```

---

# 7. **Variable Scoping and Closures – 变量作用域与闭包 Pages 55–64**

## 7.1 **JavaScript Scoping Rules – 作用域规则 Pages 56–61**

### 7.1Q: What are the three types of scope and how do the four declaration types differ?

**Q:** Compare `const`, `let`, `var`, and undeclared in terms of scope. 比较`const`、`let`、`var`和未声明变量的作用域。

**A:**

**Three Scope Types 三种作用域:**

- **Global scope（全局作用域）**: accessible anywhere in the document 文档任何地方可访问
- **Function scope（函数作用域）**: accessible anywhere within the function 函数内任何地方可访问
- **Block scope（块作用域）**: accessible only within `{ ... }` 仅在`{ ... }`内可访问

**The Four Declarations Compared 四种声明方式对比:**

```javascript
// === const and let → BLOCK SCOPE (GOOD) ===
// const和let → 块作用域（好）
function fun(c) {
    if (c == 0) {
        const x = 0;     // x is ONLY in this if-block x只在这个if块内
        // code here can use x 这里可以使用x
    }
    // code here *cannot* use x 这里不能使用x ← GOOD! prevents accidents 防止意外
}

// === var → FUNCTION SCOPE (BAD) ===
// var → 函数作用域（不好）
function fun(c) {
    if (c == 0) {
        var x = 0;       // x leaks into ENTIRE function! x泄漏到整个函数！
        // code here can use x
    }
    // code here CAN use x ← BAD! x is visible outside its block 不好！x在块外可见
}

// === undeclared → GLOBAL SCOPE (TERRIBLE) ===
// 未声明 → 全局作用域（极坏）
function fun(c) {
    if (c == 0) {
        x = 0;           // x is GLOBAL! accessible everywhere! x是全局的！任何地方都能访问！
    }
    // code here can use x
}
// code OUTSIDE the function can also use x! 函数外的代码也能用x！← TERRIBLE!
```

**Quality Ranking 质量排序:**

```
const (Pure Good 纯粹好) > let (Good 好) > var (Evil 坏) > undeclared (Pure Evil 极坏)
```

**Global Variables 全局变量:**

```javascript
// Variables declared OUTSIDE functions are accessible INSIDE any function:
// 在函数外声明的变量在函数内可访问：
const x = 0;   // all three work for cross-function access 三者都可跨函数访问
let x = 0;
var x = 0;

// BUT: only var adds to the global OBJECT 但只有var会被添加到全局对象
// 这意味着window.x只有在用var声明时才存在
// This means window.x only exists when declared with var
```

**Page 56–61页**

---

## 7.2 **Inner Functions and Closures – 内部函数与闭包 Pages 62–64**

### 7.2Q: What is a closure and why is it so powerful?

**Q:** Trace through the `makeAdder` example to explain closures. 通过`makeAdder`示例解释闭包。

**A:**

**Inner Function 内部函数 (basic example 基本示例):**

```javascript
function wonderland() {
    let a = 1;              // outer variable 外部变量
    
    function alice() {      // inner function defined inside outer 内部函数
        return a + 1;       // can access outer variable 'a' 可访问外部变量a
    }
    
    return alice();         // call inner function 调用内部函数
}
console.log(wonderland()); // 2
```

**Closure（闭包）— the powerful case:**

```javascript
function makeAdder(a) {
    return function(b) {    // returns a function 返回一个函数
        return a + b;       // 'a' is captured in closure a被捕获在闭包中
    }
}
// makeAdder已经返回，但a仍然存活！
// makeAdder has returned, but 'a' still lives!

let x = makeAdder(5);    // x = function(b){ return 5 + b } a=5被捕获 a=5 is captured
let y = makeAdder(20);   // y = function(b){ return 20 + b } a=20被捕获 a=20 is captured

alert(x(6));  // 11  (5+6)
alert(y(7));  // 27  (20+7)
```

**How closures work 闭包工作原理:**

1. Each function call creates a **new scope object（新作用域对象）** holding local variables. 每次函数调用创建一个新的作用域对象，保存局部变量。
2. When `makeAdder(5)` returns, normally the scope object would be **garbage collected（垃圾回收）**. 正常情况下，`makeAdder(5)`返回后作用域对象会被垃圾回收。
3. BUT the returned inner function **maintains a reference（保持引用）** to the scope object. 但返回的内部函数保持着对作用域对象的引用。
4. So the scope object is **NOT collected（不被回收）** — this IS the closure. 所以作用域对象不会被回收——这就是闭包。

**Closures vs Global Object 闭包与全局对象的区别:**

|Feature 特性|Global Object 全局对象|Closure 闭包|
|---|---|---|
|Created 创建时机|Once 一次|Each function call 每次函数调用|
|Accessible 是否可直接访问|Yes (via `globalThis`) 是|No (hidden 隐藏)|
|Scope 范围|Entire document 整个文档|Only inner function 仅内部函数|

> 📌 **Core Insight 核心洞察:** A closure is like a "backpack" 背包 that a function carries — containing variables from its birth environment 诞生环境. Each call to `makeAdder` creates a separate backpack with a different `a` value. Every call to `makeAdder`都会创建一个含有不同`a`值的独立背包。

**Page 62–64页**

---

**习题 Exercises 7.1–7.2**

**E7.1** (Page 56-61) What is the scope（作用域）of `x` in each case? Predict `console.log(x)` output or error: 每种情况下`x`的作用域是什么？预测`console.log(x)`的输出或错误：

```javascript
// Case 1:
function test() {
    if (true) { let x = 10; }
    console.log(x); 
}
test();

// Case 2:
function test2() {
    if (true) { var x = 10; }
    console.log(x);
}
test2();
```

**E7.2** (Page 62-64) Create a `makeMultiplier(n)` function that returns a closure（闭包）which multiplies any number by `n`. Demonstrate it creates separate, independent closures（独立闭包）. 创建一个`makeMultiplier(n)`函数，返回一个将任意数字乘以`n`的闭包。演示它创建了独立的闭包。

**E7.3** (Page 63-64) What is a scope object（作用域对象）? Why is it NOT garbage collected（垃圾回收）when `makeAdder` returns but a closure exists? 什么是作用域对象？为什么当`makeAdder`返回但存在闭包时，作用域对象不会被垃圾回收？

---

# 📋 **应试要点总结 Exam Key Points Summary Pages 1–64**

## ✅ **必考知识点 Must-Know Concepts**

### 类型系统 Type System

- `typeof null === "object"` ← historical bug 历史bug
- `NaN === NaN` is **`false`** — use `isNaN()` instead NaN不等于自身，用isNaN()检测
- `===` checks type AND value; `==` coerces types ===检查类型和值；==强制转换类型
- `"0"` is **truthy** (non-empty string); `0` is **falsy** "0"是真值；0是假值

### 变量声明 Variable Declarations

- `const`/`let` → block scope 块作用域 ✅
- `var` → function scope 函数作用域 ⚠️
- undeclared → global scope 全局作用域 ❌

### 函数 Functions

- Primitives: **call by value（按值传递）** — original unchanged 基本类型按值传递，原始值不变
- Objects: **call by sharing（按共享传递）** — mutations affect original 对象按共享传递，修改影响原始对象
- `arguments` object holds all actual parameters arguments对象保存所有实参
- `myFunc` ≠ `myFunc()` — former is object reference, latter calls it 前者是对象引用，后者是调用

### 原型 Prototypes

- `Drink.prototype.method = ...` → shared by ALL instances 所有实例共享
- Prototype chain lookup: instance → prototype → Object.prototype → null 原型链查找顺序
- `new` creates empty object, sets prototype, calls constructor, returns object new创建空对象、设置原型、调用构造函数、返回对象

### 闭包 Closures

- Closure = inner function + its outer scope 闭包 = 内部函数 + 其外部作用域
- Each call creates a **new, independent scope object** 每次调用创建新的独立作用域对象
- Scope objects persist as long as inner function exists 内部函数存在，作用域对象就不被回收

---

## ⚠️ **常见陷阱 Common Traps**

|Trap 陷阱|Example 示例|Result 结果|
|---|---|---|
|ASI with return 自动分号插入|`return` then newline then value|Returns `undefined` 返回undefined|
|`==` non-transitivity ==不可传递|`''==0`, `0=='0'`, `''=='0'`|`true, true, false`|
|Out-of-bounds array 数组越界|`arr[999]`|`undefined`, not error 不报错|
|`for...in` on array|gives indices not values 给出索引不是值|`"0"`, `"1"`, ...|
|`var` scope leaking var泄漏|`var` in `if` block|Visible in whole function 整个函数可见|
|Object mutation 对象修改|`arr.push()` in function|Modifies original 修改原始值|