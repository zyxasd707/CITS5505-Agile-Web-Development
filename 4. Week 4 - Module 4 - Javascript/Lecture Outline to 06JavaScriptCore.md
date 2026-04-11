
# Core JavaScript – 核心JavaScript (Pages 1–64)

**CITS3403 / CITS5505 — Agile Web Development, 2026 Semester 1**

---

## 1. Introduction to JavaScript – JavaScript简介 (Pages 2–5)

- **What is JavaScript? – 什么是JavaScript？ (Page 2)**
    
    - JavaScript is a high-level, dynamic, untyped, and interpreted programming language, standardized as ECMAScript. JavaScript是一种高级、动态、无类型的解释型编程语言，已标准化为ECMAScript。
    - It is prototype-based with first-class functions, supporting OOP, imperative, and functional styles. 它是基于原型的语言，函数是一等公民，支持面向对象、命令式和函数式编程风格。
    - Three components: Core JS, Client-side JS, Server-side JS. 三个组件：核心JS、客户端JS、服务器端JS。
- **Uses of JavaScript – JavaScript的用途 (Page 3)**
    
    - Client-side processing provides quicker reaction time than server-side. 客户端处理比服务器端反应更快。
    - JavaScript can work with forms, interact with the DOM to alter pages dynamically, and provide complex UI. JS可以处理表单、与DOM交互动态修改页面、提供复杂的用户界面。
- **Event-driven Computation – 事件驱动计算 (Page 4)**
    
    - User actions (mouse clicks, key presses) are called events; JS programs mainly respond to events. 用户操作（鼠标点击、按键）被称为事件；JS程序主要任务是响应事件。
    - ⚠️ Crucial validation must be done server-side; client-side controls are easy to bypass. 关键验证必须在服务器端完成；客户端控制容易被绕过。
- **Executing JavaScript – 执行JavaScript (Page 5)**
    
    - Two environments: the browser (needs HTML file + browser) and Node.js (server-side, not covered in this course). 两种环境：浏览器（需要HTML文件+浏览器）和Node.js（服务器端，本课不涉及）。

---

## 2. JavaScript in the Browser – 浏览器中的JavaScript (Pages 6–9)

- **Including JavaScript in the Browser – 在浏览器中引入JavaScript (Page 7)**
    
    - Three ways: inline in a tag attribute (e.g. onclick), inside a `<script>` tag, or from an external file via the `src` attribute. 三种方式：标签属性内联、`<script>`标签内嵌、通过src属性引用外部文件。
- **Debugging JavaScript in the Browser – 在浏览器中调试JavaScript (Page 8)**
    
    - Chrome DevTools: Sources (browse code), Console (interact with code/page), Breakpoints (step through execution). Chrome开发者工具：Sources浏览代码、Console交互、Breakpoints逐步执行。
- **JavaScript IO – JavaScript输入输出 (Page 9)**
    
    - `console.log` for debugging; `alert` / `confirm` for output to user; `prompt` for input from user. `console.log`用于调试；`alert`/`confirm`用于输出；`prompt`用于获取用户输入。

---

## 3. Basics of Core JavaScript – 核心JavaScript基础 (Pages 10–28)

- **JavaScript Variables – JavaScript变量 (Page 11)**
    
    - Names start with `$`, `_`, or a letter; case-sensitive; conventionally camelCase. 变量名以`$`、`_`或字母开头；区分大小写；惯例使用驼峰命名。
    - Declared with `let`, `const`, `var`, or nothing at all; default to `let`. 用`let`、`const`、`var`或不声明来定义；默认应使用`let`。
- **JavaScript Keywords – JavaScript关键字 (Page 12)**
    
    - Certain reserved words cannot be used as variable names. 某些保留字不能用作变量名。
- **JavaScript Syntax – JavaScript语法 (Page 13)**
    
    - Single-line comments `//`, multi-line `/* */`; statements terminated with `;`. 单行注释`//`，多行注释`/* */`；语句以`;`结尾。
    - ASI (Automatic Semicolon Insertion) can cause bugs, e.g. `return` followed by a newline. ASI（自动分号插入）可能导致bug，如`return`后换行。
- **JavaScript Primitives and Objects – JavaScript原始类型与对象 (Page 14)**
    
    - Primitive types: Number, String, Boolean, null, undefined. 原始类型：Number、String、Boolean、null、undefined。
    - Object types: Function, Array, Date, Math, etc.; accessed via dot syntax; garbage collected. 对象类型：Function、Array、Date、Math等；通过点语法访问；自动垃圾回收。
- **Numbers in JavaScript – JavaScript中的数值 (Pages 15–17)**
    
    - All numbers are 64-bit double-precision floats (IEEE 754); `0.1 + 0.2 ≠ 0.3`. 所有数字都是64位双精度浮点数；`0.1+0.2≠0.3`。
    - Number constants: MAX_VALUE, MIN_VALUE, NaN, POSITIVE_INFINITY, NEGATIVE_INFINITY. Number常量：MAX_VALUE、MIN_VALUE、NaN、POSITIVE_INFINITY、NEGATIVE_INFINITY。
    - `parseInt` converts string to integer; `Math` object for advanced operations. `parseInt`将字符串转为整数；`Math`对象用于高级运算。
    - NaN is returned for invalid operations; NaN is infectious; check with `isNaN()`. 无效运算返回NaN；NaN有传染性；用`isNaN()`检测。
- **Strings in JavaScript – JavaScript中的字符串 (Pages 18–19)**
    
    - Unicode 16-bit character sequences; single or double quotes (no difference); no char type. Unicode 16位字符序列；单双引号均可（无区别）；无char类型。
    - Methods: `charAt`, `indexOf`, `substring`, `toLowerCase`, `toUpperCase`. 方法：`charAt`、`indexOf`、`substring`、`toLowerCase`、`toUpperCase`。
    - `toString` converts number to string; unary `+` converts string to number; `+` concatenates strings. `toString`数字转字符串；一元`+`字符串转数字；`+`拼接字符串。
- **Booleans in JavaScript – JavaScript中的布尔值 (Page 20)**
    
    - Values: `true`, `false`; operators: `!`, `&&`, `||`; `&&` and `||` short-circuit. 值：`true`、`false`；运算符：`!`、`&&`、`||`；`&&`和`||`短路求值。
- **Null and Undefined – Null与Undefined (Page 21)**
    
    - `null`: intentionally not assigned a value; `undefined`: variable not declared or not assigned. `null`：故意不赋值；`undefined`：变量未声明或未赋值。
- **JavaScript Typing – JavaScript类型系统 (Page 22)**
    
    - Dynamically typed: variables hold different types at different times. 动态类型：变量在不同时刻可以持有不同类型的值。
    - `typeof` returns: "number", "string", "boolean", "object" (including null!), "function", "undefined". `typeof`返回："number"、"string"、"boolean"、"object"（包括null！）、"function"、"undefined"。
- **JavaScript Implicit Type Conversion – JavaScript隐式类型转换 (Pages 23–24)** ★★
    
    - When Number expected: true→1, false→0, String→value or NaN, null→0, undefined→NaN. 期望Number时：true→1、false→0、String→数值或NaN、null→0、undefined→NaN。
    - When String expected: numbers/booleans/null/undefined all convert to their string representation. 期望String时：数字/布尔/null/undefined都转为对应的字符串表示。
    - When Boolean expected — Falsy: `0`, `""`, `undefined`, `NaN`, `null`; Truthy: everything else including `"0"` and `"false"`. 期望Boolean时——Falsy值：`0`、`""`、`undefined`、`NaN`、`null`；Truthy：其余一切，包括`"0"`和`"false"`。
    - Manual conversion via `Number()`, `String()`, `Boolean()`. 手动转换：`Number()`、`String()`、`Boolean()`。
- **JavaScript Comparisons – JavaScript比较运算 (Page 25)**
    
    - `==` performs type coercion; `===` returns true only if same type AND same value; always prefer `===`. `==`会进行类型转换；`===`仅当类型和值都相同时才返回true；应始终优先使用`===`。
- **Type Conversion Craziness Time – 类型转换的疯狂时刻 (Page 26)**
    
    - Examples: `2 - "1" → 1`, `2 + "1" → "21"`, `"b"+"a"+ +"a"+"a" → "baNaNa"`, `'' == 0` is true but `'' == '0'` is false (== is non-transitive). 示例：减法做数学、加法做拼接、"baNaNa"陷阱、`==`不具有传递性。
- **JavaScript Control Structures — Loops – 控制结构——循环 (Page 27)**
    
    - `for`, `for...in` (iterate object properties), `while`. `for`循环、`for...in`（遍历对象属性）、`while`循环。
- **JavaScript Control Structures — Conditions – 控制结构——条件 (Page 28)**
    
    - `if-else if-else`, `switch-case-break-default`, ternary operator `? :`. `if-else if-else`、`switch-case-break-default`、三元运算符`? :`。

---

## 4. Arrays – 数组 (Pages 29–34)

- **Array Basics – 数组基础 (Page 30)**
    
    - Arrays are indexed by numerical values starting at 0; length = highest index + 1. 数组由从0开始的数字索引；长度=最高索引+1。
    - Size can be modified after creation; elements do not need to be of the same type. 创建后大小可修改；元素不必是同一类型。
- **The Array() Constructor Method – Array()构造方法 (Page 31)**
    
    - `new Array(10)` → empty array, length 10; `new Array(1,"a",3,4)` → array with those elements. `new Array(10)`→空数组长度10；`new Array(1,"a",3,4)`→以这些参数为元素的数组。
- **Accessing Array Elements – 访问数组元素 (Page 32)**
    
    - Assigning to index ≥ length increases length; querying non-existent index returns `undefined` (no error). 赋值给≥length的索引会增加长度；查询不存在的索引返回`undefined`（不报错）。
- **Array Methods – 数组方法 (Page 33)** ★
    
    - push/pop (end), shift/unshift (front), join, reverse, sort (optional comparator), concat, slice, splice, delete. push/pop（末尾）、shift/unshift（头部）、join、reverse、sort（可选比较函数）、concat、slice、splice、delete。
- **Associative Arrays – 关联数组 (Page 34)**
    
    - Use String indices instead of Number; cannot use push/pop/shift/unshift; essentially Objects under the hood. 用字符串代替数字作索引；不能用push/pop/shift/unshift；本质上就是对象。

---

## 5. Functions – 函数 (Pages 35–42)

- **Defining a JavaScript Function – 定义JavaScript函数 (Page 36)**
    
    - Syntax: `function name(params) { ... }`; must be defined before use. 语法：`function name(params) { ... }`；必须在使用前定义。
- **Calling a JavaScript Function – 调用JavaScript函数 (Page 37)** ★★
    
    - Primitives passed by **call by value**: changes inside don't affect original. 原始类型通过**按值传递**：函数内修改不影响原始值。
    - Objects passed by **call by sharing**: function can modify the object's properties, but reassigning the parameter won't change the original reference. 对象通过**按共享传递**：函数可以修改对象属性，但对参数重新赋值不影响原引用。
- **Function Parameters – 函数参数 (Pages 38–39)**
    
    - No types specified; too few → missing args are `undefined`; too many → extras not addressable by name. 参数不指定类型；传少了→缺失的为`undefined`；传多了→多余的不可按名访问。
    - The `arguments` property array holds all actual parameters, including extras. `arguments`属性数组保存所有实际参数，包括多余的。
- **Functions are First-class – 函数是一等公民 (Page 40)**
    
    - Accessing without `()` returns the function definition, not calling it. 不加`()`访问函数返回函数定义本身，而不是调用它。
    - Functions can be assigned to variables and object properties; cast to String returns definition text. 函数可以赋值给变量和对象属性；转为String返回定义文本。
- **Anonymous Functions – 匿名函数 (Page 41)**
    
    - Functions without a name; used e.g. as sort comparator (negative→a first, positive→b first, 0→equal). 没有名字的函数；如用于sort比较器（负→a在前，正→b在前，0→相等）。
    - Arrow function syntax: `(a, b) => { return b - a; }`. 箭头函数语法：`(a, b) => { return b - a; }`。
- **Recursive Functions – 递归函数 (Page 42)**
    
    - Named anonymous functions solve the problem of calling an anonymous function recursively. 命名匿名函数解决了匿名函数递归调用自身的问题。

---

## 6. Objects – 对象 (Pages 43–54)

- **Objects are Name-Value Pairs – 对象是名值对 (Page 44)**
    
    - Names are strings, values can be anything (including more objects); similar to Java HashMap / Python Dict. 名是字符串，值可以是任何东西（包括更多对象）；类似Java HashMap/Python Dict。
    - If a variable is not a primitive, it's an object (arrays and functions are also objects). 如果变量不是原始类型，它就是对象（数组和函数也是对象）。
- **Revisiting Object Properties – 再看对象属性 (Pages 45–46)**
    
    - Dot notation `obj.name` and bracket notation `obj["name"]` are semantically equivalent. 点语法`obj.name`和方括号语法`obj["name"]`语义等价。
    - Bracket notation advantages: property name can be calculated at runtime, can use reserved words. 方括号优势：属性名可在运行时计算、可使用保留字。
    - Can add new properties, delete properties, and iterate with `for...in`. 可以添加新属性、删除属性、用`for...in`遍历。
- **The Global Object – 全局对象 (Page 47)**
    
    - In the browser: `window`; portable name: `globalThis`. 浏览器中为`window`；通用名为`globalThis`。
- **The `this` Keyword – `this`关键字 (Page 48)**
    
    - `this` refers to the current object; its meaning depends on how the function was called. `this`指向当前对象；其含义取决于函数的调用方式。
    - In a method → owner object; alone / in a function → global object; in strict mode → undefined; in an event → the element. 方法中→所属对象；单独/函数中→全局对象；严格模式→undefined；事件中→触发元素。
- **Constructors – 构造函数 (Page 49)**
    
    - Constructor functions use `this` to initialize properties; `new` creates an empty object and calls the constructor with `this` bound to it. 构造函数用`this`初始化属性；`new`创建空对象并将`this`绑定到该对象后调用构造函数。
    - ⚠️ Problem: each `new` creates a separate function object for methods → wastes memory. 问题：每次`new`都为方法创建独立的函数对象→浪费内存。
- **OOP in JavaScript – JavaScript中的面向对象 (Page 50)**
    
    - JS uses prototype-based programming instead of classical class-based inheritance. JS使用基于原型的编程，而不是传统的基于类的继承。
- **Reusing Functions – 复用函数 (Page 51)**
    
    - Method 1: declare function separately, assign as property. 方法一：单独声明函数，赋值为属性。
    - Method 2 (best): add to the constructor's `prototype` object. 方法二（最佳）：添加到构造函数的`prototype`对象上。
- **Prototypes – 原型 (Page 52)** ★★
    
    - `X.prototype` is shared by all instances of X; forms a lookup chain (prototype chain). `X.prototype`被X的所有实例共享；形成查找链（原型链）。
    - Property access: check own properties first → then prototype → up to `Object.prototype`. 属性访问：先检查自身→再检查prototype→直到`Object.prototype`。
- **Add Methods at Runtime – 运行时添加方法 (Page 53)**
    
    - Modifying the prototype at any time adds methods to all existing and future instances. 任何时候修改prototype都会为所有现有和未来的实例添加方法。
    - Prototypes can also implement inheritance: subclass prototype = superclass instance. 原型也能实现继承：子类prototype=父类实例。
- **The `new` Keyword Revisited – 重新审视`new`关键字 (Page 54)**
    
    - Step 1: new object created, prototype set to `X.prototype`. 步骤1：创建新对象，prototype设为`X.prototype`。
    - Step 2: constructor called with `this` bound to new object. 步骤2：调用构造函数，`this`绑定到新对象。
    - Step 3: the new object is returned (unless constructor explicitly returns another object). 步骤3：返回新对象（除非构造函数显式返回另一个对象）。

---

## 7. Variable Scoping and Closures – 变量作用域与闭包 (Pages 55–64)

- **JavaScript Scoping – JavaScript作用域 (Page 56)**
    
    - Three scopes: Global (entire document), Function (within a function), Block (within `{ }`). 三种作用域：全局（整个文档）、函数（函数内）、块级（`{ }`内）。
- **JavaScript Variable Declarations – JavaScript变量声明方式 (Page 57)**
    
    - Four ways: `const`, `let`, `var`, undeclared. 四种方式：`const`、`let`、`var`、未声明。
- **Const and Let Variables – Const与Let变量 (Page 58)** ★★
    
    - Block-level scope: cannot interfere with variables outside the block. 块级作用域：不会干扰块外的变量。
    - `const` cannot be reassigned; `let` can be reassigned within its block. `const`不可重赋值；`let`在块内可重赋值。
- **Var Variables – Var变量 (Page 59)**
    
    - Function-level scope: visible throughout the entire function, even outside the block where declared. 函数级作用域：在整个函数内可见，即使在声明所在块的外部也是如此。
- **Undeclared Variable Scoping – 未声明变量的作用域 (Page 60)**
    
    - Always global scope: visible throughout the entire page. 始终是全局作用域：在整个页面中可见。
- **Global Variables – 全局变量 (Page 61)**
    
    - Variables declared outside functions are accessible in any subsequent function. 在函数外声明的变量可在任何后续函数中访问。
    - Only `var` variables are added to the global object (`window`). 只有`var`变量会被添加到全局对象（`window`）上。
- **Inner Functions – 内部函数 (Page 62)**
    
    - JavaScript allows function declarations inside other functions, enabling closures. JavaScript允许在函数内部声明函数，这使得闭包成为可能。
- **Closures – 闭包 (Pages 63–64)** ★★
    
    - A closure is the local variables for a function — kept alive after the function has returned. 闭包是函数的局部变量——在函数返回后仍然存活。
    - Each function execution creates a new scope object; the returned function maintains a reference to it, preventing garbage collection. 每次函数执行都创建新的作用域对象；返回的函数持有对该对象的引用，阻止垃圾回收。
    - Key differences from global object: a new scope object is created each time; scope objects cannot be directly accessed from code. 与全局对象的区别：每次调用创建新的scope对象；scope对象不能从代码中直接访问。

---

## Summary 总结

本章共64页，涵盖Core JavaScript的全部基础。核心考点：

- **类型转换 (P23–26)** ★★：Falsy/Truthy规则、`==` vs `===`、`+`号拼接陷阱
- **函数参数传递 (P37)** ★★：call by value（原始类型）vs call by sharing（对象类型）
- **原型与原型链 (P50–54)** ★★：prototype共享方法、查找链、`new`的三步过程
- **变量作用域 (P56–61)** ★★：const/let（块级）vs var（函数级）vs 未声明（全局），for循环中var vs let的经典陷阱
- **闭包 (P62–64)** ★★：函数+词法环境、scope object存活机制、每次调用独立scope

---

这就是完整大纲。你现在可以指定任何章节或页码，比如"请详细讲解第8节 P23–26 类型转换"或"请给我P37 call by sharing的代码示例"，我会针对性地深入讲解。