## **Page 3: Communicating with a server – 与服务器通信（动机）**

### Background / 背景

**EN:** So far, JavaScript on our pages has only responded to **local browser events** — button clicks, page loads, etc. All of this happens entirely inside the user's browser, with no network required.

**中文：** 此前我们编写的 JavaScript 只能响应**本地浏览器事件**——点击按钮、页面加载等。这些交互完全发生在浏览器内部，无需联网。

---

### Why We Need Server Communication / 为什么需要与服务器通信

**EN:** Real-world web apps often need to keep exchanging data with the server **after** the page has already loaded, for example:

- Displaying a notification when a new message arrives
- Saving form data to a server-side database

**中文：** 现实中的 Web 应用往往需要在**页面加载完成之后**，持续与服务器交换数据，例如：

- 收到新消息时，页面自动显示通知
- 用户提交表单后，数据被保存到服务器数据库

---

### Two Approaches / 两种通信方式

> [!NOTE]
> ||**HTTP Requests / HTTP 请求**|**WebSockets / WebSocket**|
> |---|---|---|
> |**Pattern / 模式**|Request–Response / 请求—响应|Persistent two-way / 持久双向|
> |**Who initiates / 谁发起**|Client only / 仅客户端|Either side / 双方均可|
> |**Connection / 连接**|Closes after each reply / 每次响应后关闭|Stays open / 保持开启|
> |**Analogy / 比喻**|Sending a text message / 发短信|A phone call left open / 不挂断的电话|

---

### Key Takeaway / 核心要点

> **EN:** HTTP follows a "one question, one answer" model — the client always initiates. WebSocket maintains a persistent connection, allowing the **server to push data proactively**.
> 
> **中文：** HTTP 是"一问一答"模式——始终由客户端发起。WebSocket 维持持久连接，允许**服务器主动推送数据**给客户端。

_This lecture focuses on HTTP requests. WebSockets will be covered in a later lecture._ _本讲重点介绍 HTTP 请求方式，WebSocket 将在后续课程中讲解。_



## ## **Page 5: Structure of HTTP requests and responses – HTTP请求与响应的结构 ★★**

---

### 一、选择题 / Multiple Choice

**Q1.** Which of the following best describes HTTP as a "stateless" protocol?

A. The server cannot handle multiple requests simultaneously B. The server retains no memory of previous requests after responding ✅ C. The client must re-send headers with every response D. HTTP does not support persistent connections

---

**Q2.** In an HTTP request, what is the correct order of components?

A. Headers → Request Line → Body B. Body → Headers → Request Line C. Request Line → Headers → Blank Line → Body ✅ D. Request Line → Body → Headers

---

### 二、填空题 / Fill in the Blank

**Q3.** 在以下 HTTP 请求报文中，各部分名称是什么？

```
GET /doc/test.html HTTP/1.1     → ①________
Host: www.test101.com           → ②________

bookId=12345                    → ③________
```

**答：** ① 请求行（Request Line）　② 请求头（Request Headers）　③ 请求体（Request Body）

---

**Q4.** HTTP is said to be ________ because the server forgets all information about a request once the response has been sent.

**答：** stateless（无状态）

---

### 三、简答题 / Short Answer

**Q5.** Explain why HTTP being stateless creates a challenge for user login systems, and describe one mechanism used to overcome this.

**参考答案：** HTTP 每次请求后服务器不保留状态，因此无法自动识别"已登录的用户"。解决方案是使用 **Cookie 或 Session**——服务器在首次登录时颁发一个标识符，客户端在后续每次请求中携带它，服务器以此识别用户身份。

---

**Q6.** What are the three structural components shared by both HTTP **requests** and HTTP **responses**? Briefly describe each.

**参考答案：**

|组件|请求中|响应中|
|---|---|---|
|起始行|请求行（方法+URL+版本）|状态行（版本+状态码+文本）|
|头部|请求头（Host, Accept…）|响应头（Content-Type…）|
|主体|请求体（提交的数据）|响应体（HTML等返回内容）|

---

### 四、判断题 / True or False

|题目|答案|
|---|---|
|The server remembers previous requests to improve performance.|❌ False|
|Both HTTP requests and responses contain a blank line separating headers from body.|✅ True|
|Cookies are a built-in feature of the HTTP protocol that automatically maintain state.|❌ False（需额外机制）|
|`200 OK` appears in the status line of an HTTP **response**.|✅ True|

---

### ⭐ 最高频考点提示

> 1. **"无状态"的定义及其影响** — 几乎必考
> 2. **请求/响应报文结构的三段式** — 常以填空或排序题形式出现
> 3. **Cookie/Session 存在的根本原因** — 常结合无状态一起考


# Page 9: Asynchronous Communication — 异步通信 ★★

---

## 核心概念解析 | Core Concept Breakdown

### 1. 为什么需要异步？| Why Do We Need Async?

|问题 Problem|原因 Reason|解决方案 Solution|
|---|---|---|
|服务器响应时间不确定|网络延迟、服务器负载|不等待，继续执行|
|Server response time is unpredictable|Network latency, server load|Don't wait, keep executing|
|JS 是单线程的|一次只能做一件事|把"等待"交给浏览器环境|
|JS is single-threaded|Can only do one thing at a time|Delegate waiting to browser environment|

> 🔑 关键区分：**JS 引擎**是单线程的，但**浏览器环境**不是。 JS _engine_ is single-threaded, but the _browser environment_ is not.

---

### 2. 事件循环机制 | The Event Loop

```
JS 主线程 (Main Thread)
│
├─ 执行同步代码 Execute sync code
│
├─ 遇到异步请求 → 交给浏览器底层处理（不阻塞！）
│   Encounters async request → handed to browser internals (non-blocking!)
│
│                    ┌─────────────────────────┐
│                    │   浏览器底层 Browser      │
│                    │   - 网络请求 Network I/O  │
│                    │   - 文件系统 File System  │
│                    │   - 数据库 Database       │
│                    └───────────┬─────────────┘
│                                │ 完成后 On complete
│                    ┌───────────▼─────────────┐
│                    │  任务队列 Task Queue      │
│                    │  [ callback, callback... ]│
│                    └───────────┬─────────────┘
│                                │
└─ 主线程空闲时取出执行 ◄──────────┘
   Picks up when main thread is free
```

**一句话总结：** JS 自己不等，把等待的活外包给浏览器，浏览器干完了再通知 JS。 **One-liner:** JS doesn't wait itself — it outsources the waiting to the browser, which notifies JS when done.

---

### 3. 回调函数模式 | Callback Function Pattern

```javascript
// 模式 Pattern:
Object.asyncFn(parameters, callbackFunction);

// 实际例子 Concrete Example:
function big_Request(data, callback) {
    var req = request_to_server(data);  // 发出请求 Send request
    callback(req.error, req.response);  // 响应后调用回调 Invoke callback on response
}

big_Request(myData, function(error, data) {
    if (error) alert(error);   // 处理错误 Handle error
    else render(data);         // 处理数据 Handle data
});
```

|参数 Parameter|含义 Meaning|
|---|---|
|`error`|请求失败时的错误信息 / Error info if request failed|
|`data` / `response`|请求成功时服务器返回的数据 / Server response data on success|
|`callback`|一个函数，作为参数传入，稍后被调用 / A function passed as argument, called later|

> 🍽️ **类比 Analogy：** 去餐厅点餐 = 发请求 Send request 拿到号码牌离开 = 不阻塞，继续做别的 Non-blocking, keep doing other things 叫号了来取餐 = callback 被触发 Callback fires

---

## 💡 Key Takeaways — 核心要点

|#|English|中文|
|---|---|---|
|1|JS is single-threaded but runs in a multi-threaded environment (the browser)|JS 单线程，但运行在多线程的浏览器环境中|
|2|Async requests don't block JS execution|异步请求不会阻塞 JS 主线程|
|3|The Event Loop shuttles completed tasks back to JS as callbacks|事件循环将完成的任务以回调形式交还给 JS|
|4|Callbacks receive `(error, response)` — always check error first|回调接收错误和响应——始终先检查错误|
|5|The callback is only executed **if and when** the server responds|回调**仅在**服务器响应时执行，不保证一定发生|

---

## 🎓 考题预测 | Predicted Exam Questions

**Q1.** **What problem does asynchronous communication solve in JavaScript?** **JavaScript 中的异步通信解决了什么问题？**

> **A:** JavaScript is single-threaded, meaning a synchronous server request would block all other code from executing until a response is received. Asynchronous communication allows the request to be handled by the browser environment while JavaScript continues executing other code.
> 
> JavaScript 是单线程的，同步请求会阻塞所有其他代码直到收到响应。异步通信将请求交由浏览器环境处理，JS 主线程可继续执行其他代码。

---

**Q2.** **Explain the role of the Event Loop in asynchronous JavaScript.** **解释事件循环在 JavaScript 异步机制中的作用。**

> **A:** The Event Loop monitors the task queue. When an async operation (e.g., a network request) completes in the browser's background, its callback is placed in the task queue. The Event Loop picks it up and passes it to the JS main thread for execution when the main thread is idle.
> 
> 事件循环监控任务队列。当浏览器后台完成异步操作后，将回调放入任务队列，事件循环在 JS 主线程空闲时取出并执行。

---

**Q3.** **What are the two parameters typically passed to a callback function in an async request, and why?** **异步请求的回调函数通常接收哪两个参数？为什么？**

> **A:** `error` and `response` (or `data`). The `error` parameter handles the case where the request fails; the `response` parameter carries the server's data on success. Checking `error` first is a standard pattern to prevent processing invalid data.
> 
> `error`（错误）和 `response`（响应/数据）。`error` 处理请求失败的情况；`response` 携带成功时的服务器数据。先检查 `error` 是防止处理无效数据的标准模式。

---

**Q4.** **True or False: JavaScript itself handles network I/O operations on a separate thread.** **判断对错：JavaScript 本身在独立线程中处理网络 I/O 操作。**

> **A: False.** JavaScript is single-threaded. Network I/O is handled by the _browser environment_ (written in C++, genuinely multi-threaded), not by the JS engine itself. JS only executes the callback after being notified via the Event Loop.
> 
> **错误。** JavaScript 本身是单线程的。网络 I/O 由浏览器底层（C++ 实现，真正多线程）处理，不是 JS 引擎。JS 仅在事件循环通知后执行回调。

---

**Q5. (Code Writing)** **Write a function `fetchUserData(userId, callback)` that simulates an async request and calls the callback with either an error or the data.** **写一个函数模拟异步请求并通过回调返回结果。**

```javascript
// 参考答案 Reference Answer:
function fetchUserData(userId, callback) {
    var result = request_to_server(userId);   // 模拟发请求
    if (result.error) {
        callback(result.error, null);         // 有错误，传错误
    } else {
        callback(null, result.response);      // 成功，传数据
    }
}

// 调用方式 Usage:
fetchUserData(42, function(error, data) {
    if (error) alert("Error: " + error);
    else render(data);
});
```

---

# 完整可运行示例 | Complete Runnable Example

用 `setTimeout` 模拟服务器延迟，是课堂和面试中最常见的简化手法。

[[II Supplementary to Supplementary Notes to 08 Communicating with a Server#Page 9 Asynchronous Communication — 异步通信 ★★流程图逐步解读 Step-by-Step Breakdown]]


---

## 完整代码 | Full Code

```html
<!DOCTYPE html>
<html>
<body>
  <h2>User Profile</h2>
  <div id="output">Loading...</div>

  <script>
    // ① 模拟服务器 Simulate server
    function request_to_server(userId) {
      // 假数据库 Fake database
      const db = {
        1: { name: "Alice", age: 22 },
        2: { name: "Bob",   age: 25 },
      };

      const user = db[userId];
      return user
        ? { error: null,            response: user }
        : { error: "User not found", response: null };
    }

    // ② 异步请求函数（含回调）Async request with callback
    function fetchUser(userId, callback) {
      setTimeout(() => {                          // 模拟网络延迟 Simulate delay
        const req = request_to_server(userId);
        callback(req.error, req.response);        // 触发回调 Fire callback
      }, 1000);
    }

    // ③ 渲染函数 Render function
    function render(data) {
      document.getElementById("output").innerText
        = `Name: ${data.name}, Age: ${data.age}`;
    }

    // ④ 发起请求 Make the request
    fetchUser(1, function(error, data) {
      if (error) alert(error);   // 有错误则弹窗
      else       render(data);   // 成功则渲染
    });
  </script>
</body>
</html>
```

---
![[Page 9 - Asynchronous Communication — 异步通信.svg|697]]

---
## 执行流程图 | Execution Flow

```
fetchUser(1, callback) 被调用
        │
        ├─ setTimeout 注册定时器 → 交给浏览器，JS 继续执行
        │                           (不阻塞！Non-blocking!)
        │
        │  ⏱ 1秒后...
        │
        ├─ 浏览器触发回调 Browser fires callback
        │
        ├─ request_to_server(1) → { error: null, response: {name:"Alice"} }
        │
        └─ callback(null, {name:"Alice"})
                  │
                  └─ error? No → render(data) → 页面显示 "Name: Alice, Age: 22"
```

---

## 改用不存在的用户（触发错误分支）| Trigger Error Branch

```javascript
fetchUser(99, function(error, data) {
  if (error) alert(error);   // ← 弹出 "User not found"
  else       render(data);
});
```

---

## 关键设计点 | Key Design Points

|点|说明|English|
|---|---|---|
|`setTimeout`|模拟网络延迟，是标准教学替代品|Standard stand-in for real network delay|
|`callback(error, data)`|错误优先约定（Node.js 风格）|Error-first convention (Node.js style)|
|`error: null`|成功时错误为 null|`null` error means success|
|JS 主线程不阻塞|setTimeout 期间可执行其他代码|Main thread free during timeout|

> **一句话记住：** 回调就是"事后通知"——你先走，好了我叫你。 **One-liner:** A callback is a "notify me later" — you go ahead, I'll call you when ready.


# Page 10: XMLHttpRequest — XMLHttpRequest 对象 ★★

---

## 核心概念 | Core Concept

**XMLHttpRequest (XHR)** 是浏览器内建的对象，让 JS 能在**不刷新页面**的情况下与服务器通信。 **XMLHttpRequest (XHR)** is a built-in browser object that lets JS communicate with a server **without reloading the page**.

> 🧰 **类比 Analogy：** XHR 就像一个"快递代办员"——你告诉他去哪（URL）、怎么取（GET/POST）、取到了通知你（callback）。你不用亲自跑腿，页面也不用重新加载。

---

## 方法表 | Methods

|方法 Method|作用 Purpose|
|---|---|
|`new XMLHttpRequest()`|创建 XHR 对象 / Create the XHR object|
|`open(method, url, async)`|配置请求：方式 + 地址 + 是否异步 / Configure: method + URL + async|
|`send()`|发送 GET 请求 / Send GET request|
|`send(string)`|发送 POST 请求并附带数据 / Send POST with data|
|`abort()`|取消请求 / Cancel the request|
|`setRequestHeader()`|设置请求头 / Set request headers|
|`getResponseHeader()`|获取某个响应头 / Get a specific response header|
|`getAllResponseHeaders()`|获取全部响应头 / Get all response headers|

---

## 属性表 | Properties ⭐

|属性 Property|作用 Purpose|
|---|---|
|`onreadystatechange`|状态变化时触发的回调 / Callback fired on state change|
|`readyState`|请求当前状态（0~4）/ Current request state (0–4)|
|`status`|HTTP 状态码 / HTTP status code|
|`statusText`|状态文本 / Status text|
|`responseText`|响应内容（字符串）/ Response as string|
|`responseXML`|响应内容（XML）/ Response as XML|

---

## ⭐ readyState 五个状态 | The 5 States

```
0 ──→ 1 ──→ 2 ──→ 3 ──→ 4
│     │     │     │     │
未    已    已    处    ✅完成
初    开    接    理    响应就绪
始    连    收    中
化    接    请
      接    求
```

|值 Value|状态 State|含义 Meaning|
|---|---|---|
|`0`|UNSENT|对象已创建，未调用 open()|
|`1`|OPENED|open() 已调用|
|`2`|HEADERS_RECEIVED|send() 已调用，响应头已收到|
|`3`|LOADING|响应体接收中|
|`4`|**DONE** ⭐|**完成！响应已就绪**|

---

## 完整代码示例 | Full Code Example

```javascript
// ① 创建 XHR 对象 Create XHR object
const xhr = new XMLHttpRequest();

// ② 配置请求 Configure request
//    方法   URL              异步？
xhr.open("GET", "/api/user/1", true);

// ③ 注册回调：状态变化时触发
//    Register callback: fires every time readyState changes
xhr.onreadystatechange = function() {

    // ④ 黄金判断条件 ⭐ The golden condition
    if (xhr.readyState === 4 && xhr.status === 200) {

        // ⑤ 成功！处理数据 Success! Handle data
        const data = JSON.parse(xhr.responseText);
        render(data);

    } else if (xhr.readyState === 4) {

        // ⑥ 完成但失败 Done but failed
        alert("Error: " + xhr.status + " " + xhr.statusText);
    }
};

// ⑦ 发送请求 Send the request
xhr.send();
```

---

## 执行流程 | Execution Flow

```
① new XMLHttpRequest()        → 创建对象
        │
② xhr.open("GET", url, true)  → 配置请求（还没发！）
        │
③ xhr.onreadystatechange = fn → 注册回调（挂上监听器）
        │
④ xhr.send()                  → 发送！交给浏览器
        │
        ├─ readyState: 0→1→2→3  （每次变化都触发回调）
        │                         但我们只关心 readyState===4
        │
        └─ readyState === 4
                  │
           status === 200? ──Yes──→ JSON.parse(responseText) → render()
                  │
                 No ──────────────→ alert(status + statusText)
```

---

## ⚠️ 黄金判断条件 | The Golden Condition

```javascript
if (xhr.readyState === 4 && xhr.status === 200) { ... }
//        ↑                        ↑
//   请求完成了              服务器说"成功"
//   (Done)                  (OK)
```

**必须两个条件同时满足：**

|条件|含义|不满足时|
|---|---|---|
|`readyState === 4`|数据传输完毕|可能还在传输中|
|`status === 200`|服务器处理成功|可能 404/403/500 等|

---

## 💡 Key Takeaways — 核心要点

|#|English|中文|
|---|---|---|
|1|XHR is the original way to make async HTTP requests in JS|XHR 是 JS 发起异步 HTTP 请求的原始方式|
|2|Lifecycle: `new` → `open()` → `send()` → callback|生命周期：创建 → 配置 → 发送 → 回调|
|3|`readyState` goes from 0 to 4; only 4 means complete|readyState 从 0 到 4，只有 4 代表完成|
|4|Always check **both** `readyState === 4` AND `status === 200`|必须同时检查两个条件才算真正成功|
|5|`responseText` is always a string — parse it with `JSON.parse()`|responseText 永远是字符串，需 JSON.parse() 转换|

---

## 🎓 考题预测 | Predicted Exam Questions

**Q1.** **What is the correct order of steps to make an XMLHttpRequest?** **发起 XMLHttpRequest 的正确步骤顺序是什么？**

> **A:** `new XMLHttpRequest()` → `open(method, url, async)` → set `onreadystatechange` callback → `send()`
> 
> 创建对象 → 配置请求 → 注册回调 → 发送请求

---

**Q2.** **What condition must be true before safely reading the server's response?** **在安全读取服务器响应之前，哪个条件必须为真？**

> **A:** Both `xhr.readyState === 4` (request complete) AND `xhr.status === 200` (server returned OK). Checking only one is insufficient — readyState 4 could still be a 404 error.
> 
> 必须同时满足 `readyState === 4`（请求完成）和 `status === 200`（服务器返回成功）。只检查一个是不够的。

---

**Q3.** **What does `readyState === 4` mean? What does it NOT guarantee?** **`readyState === 4` 表示什么？它不能保证什么？**

> **A:** It means the request has finished and the response is ready to be read. It does **not** guarantee success — the status could be 404, 500, etc. That's why `status === 200` must also be checked.
> 
> 表示请求已完成，响应已就绪。但**不代表成功**——状态码可能是 404、500 等。这就是为什么还需要检查 `status === 200`。

---

**Q4. (Code)** **Write a GET request using XHR to fetch `/api/data` and log the response.** **用 XHR 写一个 GET 请求，获取 `/api/data` 并打印响应。**

```javascript
// 参考答案 Reference Answer:
const xhr = new XMLHttpRequest();
xhr.open("GET", "/api/data", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
```

---

**Q5.** **What is the difference between `responseText` and `responseXML`?** **`responseText` 和 `responseXML` 有什么区别？**

> **A:** `responseText` returns the response as a plain **string** (suitable for JSON, text). `responseXML` returns it as a parsed **XML Document** object. In modern web development, `responseText` with `JSON.parse()` is far more common.
> 
> `responseText` 返回纯字符串（适合 JSON、文本）；`responseXML` 返回解析好的 XML 文档对象。现代开发中几乎都用前者配合 `JSON.parse()`。

---

# P11–P12 精讲：在 JS 中发送与接收 HTTP 请求

---

## 🗺️ 总体流程图（UML 时序图）

```
浏览器 (JS)                    Web 服务器
    │                               │
    │  1. 创建 xhr 对象              │
    │  new XMLHttpRequest()         │
    │                               │
    │  2. 注册回调函数                │
    │  xhr.onreadystatechange = fn   │
    │                                │
    │  3. 配置请求                    │
    │  xhr.open("GET", url, true)    │
    │                                │
    │  4. 发送请求 ─────────────────> │
    │  xhr.send()                    │  处理请求...
    │                                │
    │  5. 继续执行同步代码            │
    │  console.log("继续跑...")      │
    │                               │
    │  6. 收到响应 <─────────────────│ 返回响应
    │  触发回调函数                  │
    │  readyState=4, status=200      │
    │  处理 xhr.responseText         │
    │                               │
```

---

## ⚙️ 核心 API 速查表

### `open()` 方法 —— 配置请求

|参数|含义|常用值|
|---|---|---|
|`method`|请求方法|`"GET"` / `"POST"`|
|`url`|请求地址|`"/api/data"`|
|`async`|是否异步|**永远用 `true`**，`false` 会冻结页面|

### `readyState` 状态值

|值|含义|
|---|---|
|0|未初始化（对象刚创建）|
|1|已调用 `open()`|
|2|已调用 `send()`，收到响应头|
|3|正在接收响应体|
|**4**|**完成！可以处理数据**|

---

## 💻 代码全解（GET vs POST）

### GET 请求

```javascript
var xhr = new XMLHttpRequest();       // 创建请求对象

xhr.onreadystatechange = function() { // 注册回调（登记，不执行）
    if (xhr.readyState === 4          // 传输完成
     && xhr.status === 200) {         // 服务器成功响应
        console.log(xhr.responseText);// 拿到数据！
    }
};

// 数据拼接在 URL 里: ?key=value
xhr.open("GET", "/search?q=hello", true);
xhr.send();                           // 发送，GET 无 body，send() 不传参
```

### POST 请求

```javascript
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};

xhr.open("POST", "/login", true);

// ⚠️ POST 必须设置这行！告诉服务器 body 的格式
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// 数据放在 body 里，不在 URL
xhr.send("username=alice&password=123");
```

---

## ⚡ GET vs POST 核心对比

|维度|GET|POST|
|---|---|---|
|数据位置|URL（`?key=val`）|请求体（body）|
|`send()` 参数|无（`send()`）|有（`send("data")`）|
|需设请求头|❌ 不需要|✅ **必须**设 `Content-type`|
|适合场景|查询、获取数据|提交表单、登录、上传|
|数据可见性|URL 中可见|不在 URL，较安全|

---

## 🔁 执行顺序（回调的本质）

```
代码从上到下跑：

① xhr.onreadystatechange = fn  → 只是"登记"回调，不执行
② xhr.open(...)                → 配置
③ xhr.send()                   → 发出请求，立刻往下跑
④ console.log("A")             → 同步代码，立即执行  ← 先输出
⑤ console.log("C")             → 同步代码，立即执行  ← 先输出

  ... 网络请求在后台进行 ...

⑥ 服务器响应 → 触发回调 fn    → console.log("B")   ← 后输出
```

**结论：A → C → B，同步永远先于异步回调**

---

## 🎯 核心要点（考前必背）

1. **黄金判断条件**：`readyState === 4 && status === 200`，缺一不可
2. **async 永远是 true**：`false` 会让页面在等待期间完全冻结
3. **POST 必须设请求头**：`setRequestHeader("Content-type", "...")`，否则服务器不知道如何解析 body
4. **回调不是你调用的**：是浏览器在状态变化时自动调用
5. **同步代码先跑**：`send()` 之后的同步代码不等响应，直接执行

---

## 📝 考题判断（T/F + 选择）

**Q1（判断）：`xhr.open("GET", "/data", false)` 是推荐写法。**

> ❌ **错**。`false` 表示同步，会冻结页面，第三参数应永远为 `true`。

**Q2（判断）：POST 请求不需要调用 `setRequestHeader()`。**

> ❌ **错**。POST 将数据放在 body 中，必须通过 `Content-type` 告知服务器数据格式。

**Q3（选择）：以下哪个条件才能安全读取响应数据？**

> A. `readyState === 3`  
> B. `status === 200`  
> C. **`readyState === 4 && status === 200`** ✅  
> D. `readyState === 4`

**Q4（排序）：下列代码的输出顺序？**

```javascript
xhr.onreadystatechange = () => { if(xhr.readyState===4) console.log("B"); };
xhr.open("GET","/data",true); xhr.send();
console.log("A");
```

> 输出：**A → B**。A 是同步代码立即执行；B 在回调中，等响应到达才触发。

# Page 14 精讲：jQuery 与 HTTP 请求

# Page 14: jQuery and HTTP Requests

---

## 🧩 先理解：jQuery 是什么？

## What is jQuery?

> jQuery 是一个 JavaScript **库（Library）**，它把很多复杂的原生 JS 操作**包装成简短的函数**，让你少写代码、多做事。
> 
> jQuery is a JavaScript **library** that wraps complex native JS operations into short, simple functions — "write less, do more."

类比 / Analogy：

> 原生 XHR 就像自己组装家具（步骤繁琐）；jQuery 就像买了成品家具（拆箱即用）。
> 
> Native XHR = assembling furniture from scratch. jQuery = buying ready-made furniture.

---

## 📡 `$.get()` —— 发送 GET 请求

## `$.get()` — Send a GET Request

### 语法 / Syntax

```javascript
$.get(URL, callback);
```

### 代码全解 / Annotated Code

```javascript
$("button").click(function(){
  // 当按钮被点击时触发
  // Triggered when the button is clicked

  $.get("demo_test.asp", function(data, status){
    // $.get() 自动创建请求、发送、接收——全包了
    // $.get() handles creating, sending, and receiving automatically

    // data   = 服务器返回的响应内容 / response content from server
    // status = 请求结果状态字符串 / result string, e.g. "success", "error"

    alert("Data: " + data + "\nStatus: " + status);
  });

});
```

### 参数说明 / Parameters

|参数 / Parameter|含义 / Meaning|示例 / Example|
|---|---|---|
|`URL`|请求目标地址 / Target URL|`"demo_test.asp"`|
|`callback`|响应到达后执行的回调函数 / Callback when response arrives|`function(data, status){...}`|
|`data`（回调参数）|服务器返回的数据 / Data returned by server|HTML、JSON、文本|
|`status`（回调参数）|请求结果字符串 / Request result string|`"success"`, `"error"`|


---

```javascript
document.querySelector("button").addEventListener("click", function(){
  // 第一步：创建 XHR 对象 / Step 1: Create XHR object
  var xhr = new XMLHttpRequest();

  // 第二步：注册回调 / Step 2: Register callback
  xhr.onreadystatechange = function(){

    if (xhr.readyState === 4 && xhr.status === 200){
      // readyState===4：传输完成 / Transfer complete
      // status===200：服务器成功响应 / Server responded successfully

      var data   = xhr.responseText;  // 对应 jQuery 回调里的 data
      var status = "success";         // 对应 jQuery 回调里的 status

      alert("Data: " + data + "\nStatus: " + status);
    }
  };

  // 第三步：配置请求 / Step 3: Configure request
  // true = 异步，永远用 true / async = true, always
  xhr.open("GET", "demo_test.asp", true);

  // 第四步：发送请求 / Step 4: Send request
  // GET 没有 body，send() 不传参 / GET has no body
  xhr.send();
});
```

---

## 📮 `$.post()` —— 发送 POST 请求

## `$.post()` — Send a POST Request

### 语法 / Syntax

```javascript
$.post(URL, data, callback);
```

### 代码全解 / Annotated Code

```javascript
$("button").click(function(){
  // 按钮点击触发 / Triggered on button click

  $.post("demo_test_post.asp",    // 目标 URL / Target URL

  {
    name: "Donald Duck",           // 要发送的数据（JS 对象）
    city: "Duckburg"               // Data to send (JS object, key-value pairs)
  },

  function(data, status){          // 回调函数 / Callback function
    // data   = 服务器的响应内容 / Server response
    // status = 请求状态 / Request status

    alert("Data: " + data + "\nStatus: " + status);
  });

});
```

```javascript
document.querySelector("button").addEventListener("click", function(){

  // 第一步：创建 XHR 对象 / Create XHR object
  var xhr = new XMLHttpRequest();

  // 第二步：注册回调 / Register callback
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){

      var data   = xhr.responseText;
      var status = "success";

      alert("Data: " + data + "\nStatus: " + status);
    }
  };

  // 第三步：配置请求 / Configure request
  xhr.open("POST", "demo_test_post.asp", true);

  // ⚠️ 第四步：设置请求头（POST 必须！jQuery 帮你省掉了这步）
  // Step 4: Set Content-type header (POST requires this! jQuery does it for you)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // 第五步：发送数据 / Send data
  // jQuery 的对象 {name:..., city:...} 要手动转成字符串格式
  // jQuery's object must be manually converted to string format
  xhr.send("name=Donald+Duck&city=Duckburg");

});
```



### 参数说明 / Parameters

|参数 / Parameter|含义 / Meaning|示例 / Example|
|---|---|---|
|`URL`|请求目标地址 / Target URL|`"demo_test_post.asp"`|
|`data`|发送给服务器的数据 / Data sent to server|`{name:"Donald", city:"X"}`|
|`callback`|响应到达后的回调 / Callback on response|`function(data, status){...}`|

---

## ⚔️ jQuery vs 原生 XHR 对比

## jQuery vs Native XHR Comparison

|维度 / Dimension|原生 XHR / Native XHR|jQuery `$.get/$.post`|
|---|---|---|
|代码量 / Code length|多（5–10行）/ Long|少（2–4行）/ Short|
|需手动管理 `readyState`|✅ 需要 / Yes|❌ 不需要 / No|
|需手动设 `Content-type`|✅ POST 需要 / Yes for POST|❌ 自动处理 / Auto|
|回调触发条件|手动判断 `readyState===4 && status===200`|自动，直接在回调里拿数据|
|浏览器兼容性处理|需自己处理 / Manual|jQuery 自动兼容 / Auto|
|学习成本 / Learning curve|较高 / Higher|较低 / Lower|

---

## 🔁 执行顺序示意

## Execution Flow

```
用户点击按钮 / User clicks button
        │
        ▼
$.get() / $.post() 被调用
jQuery 在后台自动：
  ① 创建 XHR 对象
  ② 配置请求 (open)
  ③ 发送请求 (send)
        │
        │  ← 浏览器继续运行，不阻塞
        │     Browser keeps running, non-blocking
        │
        ▼  （服务器响应到达 / Server responds）
  回调函数被触发
  function(data, status){ ... }
        │
        ▼
  data = 服务器返回内容
  status = "success"
```

---

## ✅ Key Takeaways / 核心要点

1. **`$.get(url, callback)`** — 两个参数搞定 GET 请求，数据直接传入回调，无需操心 `readyState`
2. **`$.post(url, data, callback)`** — 比 GET 多一个 `data` 参数（JS 对象），jQuery 自动处理请求头
3. **回调参数含义固定**：第一个参数永远是 `data`（响应内容），第二个是 `status`（状态字符串）
4. **jQuery 是封装，不是魔法**：底层仍然是 XHR，只是帮你省去了模板代码
5. **`status` 是字符串**，如 `"success"`，不是数字 200；与原生 XHR 的 `xhr.status`（数字）不同

---

## 📝 考题预测（一问一答）

## Predicted Exam Questions

---

**Q1：`$.get()` 需要几个参数？分别是什么？** **Q1: How many parameters does `$.get()` take? What are they?**

> **A:** 两个 / Two：
> 
> - `URL`：请求地址 / Target URL
> - `callback`：响应到达后执行的函数 / Function executed when response arrives

---

**Q2：`$.post()` 与 `$.get()` 在参数上有什么区别？** **Q2: How do the parameters of `$.post()` differ from `$.get()`?**

> **A:** `$.post()` 比 `$.get()` 多一个 `data` 参数（第二个位置），用于向服务器发送数据（JS 对象格式）。
> 
> `$.post()` has an extra `data` parameter (second position) for sending data to the server as a JS object.

---

**Q3（判断）：使用 `$.post()` 时，需要手动调用 `setRequestHeader()` 设置 Content-type。** **Q3 (T/F): When using `$.post()`, you must manually call `setRequestHeader()` to set Content-type.**

> **A:** ❌ 错 / False。jQuery 自动处理请求头，无需手动设置。 jQuery handles request headers automatically.

---

**Q4：回调函数 `function(data, status)` 中，`status` 的值是什么类型？举例说明。** **Q4: What type is the `status` parameter in the callback? Give an example.**

> **A:** 字符串 / String，例如 `"success"`、`"error"`、`"timeout"`。 注意：它**不是**数字 200，与原生 XHR 的 `xhr.status` 不同。
> 
> It's a string like `"success"`, not the number `200` as in native XHR.

---

**Q5：jQuery 的 `$.get()` 底层使用了什么技术？** **Q5: What underlying technology does jQuery's `$.get()` use?**

> **A:** 底层仍然是 **XMLHttpRequest（XHR）**，jQuery 只是对它进行了封装，简化了调用方式。
> 
> It still uses **XMLHttpRequest** under the hood. jQuery is just a wrapper that simplifies the API.

---

**Q6（代码题）：用 jQuery 写一个点击按钮后向 `/api/user` 发送 POST 请求，发送 `{id: 1}` 的代码。**

```javascript
$("button").click(function(){
  $.post("/api/user",
    { id: 1 },
    function(data, status){
      console.log(data, status);
    }
  );
});
```


# P15–P19 精讲：现代 JS 的 HTTP 请求

# P15–P19: Modern HTTP Requests in JavaScript

---

## Page 15：过渡页 / Transition Page

> P15 是章节分隔页，核心信息只有一句话： **从这里开始，我们告别 XHR 的"旧方式"，进入现代 JS 的 Fetch API。**
> 
> P15 is a transition slide. The message: we're moving from the old XHR approach to the modern **Fetch API**.

|旧方式 / Old|新方式 / New|
|---|---|
|XMLHttpRequest (XHR)|Fetch API|
|2000 年代 / ~2000s|2017 年加入 JS / Added in 2017|
|代码繁琐 / Verbose|简洁、现代 / Clean & modern|

---

## Page 16：Fetch API ⭐⭐

## The Fetch API

---

### 🧩 Fetch 是什么？/ What is Fetch?

> Fetch API 是浏览器内置的现代 HTTP 请求工具，于 **2017 年**正式加入 JavaScript 标准。它用更简洁的语法解决了 XHR 的复杂性，并内置了现代安全机制。
> 
> The Fetch API is a built-in browser tool for making HTTP requests, added to JavaScript in **2017**. It simplifies the API using modern JS features and improves security.

---

### 💻 代码全解 / Annotated Code

```javascript
fetch("https://bubble.tea.com/api/drinks")
// ↑ 发起 GET 请求（默认就是 GET，不用声明）
// ↑ Sends a GET request by default — no need to specify method

  .then(response => response.json())
  // ↑ 第 1 个 .then()：拿到的是 Response 对象（元信息）
  // ↑ 1st .then(): receives a Response object (headers, status, etc.)
  // ↑ 调用 .json() 解析响应体，返回另一个 Promise
  // ↑ .json() parses the body and returns ANOTHER Promise

  .then(data => {
  // ↑ 第 2 个 .then()：拿到真正的数据（JS 对象）
  // ↑ 2nd .then(): receives the actual parsed data (JS object)
    console.log(data);  // 更新 UI / Update the UI
  })

  .catch(error => console.error('Error:', error));
  // ↑ 任何环节出错，都跳到这里
  // ↑ If ANY step above fails, this catches the error
```

---

### 🏭 类比：工厂流水线 / Factory Assembly Line Analogy

```
原材料              工位 1                工位 2             成品
Raw material    →   Station 1         →  Station 2      →  Final product
fetch()         →   response.json()   →  data => {...}  →  UI 更新

                ↘ 任一工位出错 → .catch() 维修站
                  If any station fails → .catch() handles it
```

---

### ❓ 为什么需要两个 `.then()`？

### Why Two `.then()` Calls?

|`.then()` 顺序|收到什么 / What you get|做什么 / What to do|
|---|---|---|
|第 1 个 / 1st|`Response` 对象（含 headers、status 等元信息）|调用 `.json()` 解析响应体|
|第 2 个 / 2nd|真正的数据（JS 对象）/ Actual data (JS object)|使用数据更新 UI|

> **关键**：`fetch()` 和 `.json()` 都返回 **Promise**，所以需要两次 `.then()` 才能拿到最终数据。
> 
> **Key**: Both `fetch()` and `.json()` return **Promises**, so you need two `.then()` calls to reach the actual data.

---

### 什么是 Promise？/ What is a Promise?

> Promise 是 JS 对"将来会有结果的操作"的承诺。它有三种状态：
> 
> A Promise is JS's way of saying "I'll have a result eventually." It has three states:

|状态 / State|含义 / Meaning|
|---|---|
|`pending` 等待中|操作还没完成 / Still in progress|
|`fulfilled` 已完成|成功，触发 `.then()` / Success, triggers `.then()`|
|`rejected` 已拒绝|失败，触发 `.catch()` / Failure, triggers `.catch()`|

---

## Page 17：Fetch 请求配置（POST）

## Fetch with Options

---

### 💻 代码全解 / Annotated Code

```javascript
fetch('https://bubble.tea.com/api/order', {
// ↑ 第二个参数是配置对象（字典）
// ↑ Second argument is an options object (dictionary)

  method: 'POST',
  // ↑ 指定请求方法。默认是 GET，POST 必须声明
  // ↑ Specify HTTP method. Default is GET, POST must be declared

  headers: {
    'Accept': 'application/json',
    // ↑ 告诉服务器：我希望收到 JSON 格式的响应
    // ↑ Tells server: I want a JSON response

    'Content-Type': 'application/json'
    // ↑ 告诉服务器：我发送的数据是 JSON 格式
    // ↑ Tells server: I'm sending JSON data
  },

  body: JSON.stringify({
  // ↑ ⚠️ 必须用 JSON.stringify() 把 JS 对象转成字符串！
  // ↑ ⚠️ MUST use JSON.stringify() to convert JS object to string!
    quantity: 1,
    drink: 'Textual content'
  })
});
```

---

### ⚙️ 配置对象字段说明 / Options Object Fields

|字段 / Field|作用 / Purpose|示例 / Example|
|---|---|---|
|`method`|HTTP 请求方法 / HTTP method|`'POST'`, `'GET'`, `'DELETE'`|
|`headers`|请求头键值对 / Request headers|`{'Content-Type': 'application/json'}`|
|`body`|请求体数据 / Request body data|`JSON.stringify({...})`|

### ⚠️ 最易犯的错 / Most Common Mistake

```javascript
// ❌ 错误：直接传 JS 对象
body: { quantity: 1, drink: 'tea' }

// ✅ 正确：必须转成 JSON 字符串
body: JSON.stringify({ quantity: 1, drink: 'tea' })
```

---

### 请求头说明 / Headers Explained

|请求头 / Header|含义 / Meaning|类比 / Analogy|
|---|---|---|
|`Content-Type: application/json`|我发送的是 JSON / I'm sending JSON|快递单上写"内容物：电子产品"|
|`Accept: application/json`|我希望收到 JSON / I want JSON back|"请用中文回复我"|

---

## Page 18：async / await ⭐⭐

## Async and Await

---

### 🔄 两种写法对比 / Two Styles Side by Side

```javascript
// ── 旧写法：Promise 链 / Old: Promise Chain ──────────────────
function loadDrinks() {
  fetch("https://bubble.tea.com/api/drinks")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
}

// ── 新写法：async/await ──────────────────────────────────────
async function loadDrinks() {
// ↑ 函数前加 async，声明这是异步函数
// ↑ Add 'async' before function — declares it as async

  try {
    const response = await fetch("https://bubble.tea.com/api/drinks");
    // ↑ await 暂停这里，等 fetch 完成，再继续往下
    // ↑ await pauses HERE and waits for fetch to finish

    const data = await response.json();
    // ↑ await 再次暂停，等 .json() 解析完成
    // ↑ await pauses again, waits for JSON parsing

    console.log(data);
    // ↑ 现在 data 就是真正的数据，像同步代码一样直观
    // ↑ Now data is the actual result — reads like sync code!

  } catch (error) {
  // ↑ 等价于 .catch() / Equivalent to .catch()
    console.error('Error:', error);
  }
}
```

---

### ⚔️ Promise链 vs async/await 对比

### Promise Chain vs async/await

|维度 / Dimension|Promise 链 / `.then()` chain|async / await|
|---|---|---|
|可读性 / Readability|嵌套较多，稍难读 / Nested, harder to read|线性，像同步代码 / Linear, reads like sync|
|错误处理 / Error handling|`.catch()`|`try...catch`|
|`await` 限制|无 / N/A|只能在 `async` 函数内使用|
|本质 / Underneath|Promise|仍然是 Promise，只是语法糖|

---

### 🏃 类比 / Analogy

```
Promise 链 (.then)：
接力赛跑——跑完一棒交给下一棒
Relay race — each runner passes the baton to the next

async/await：
一个人按顺序跑，但遇到等待（await）时先去喝水，
等信号来了再继续，不阻塞整个赛场
One person runs in order, but PAUSES at 'await' steps
to do other things — then resumes when ready
```

---

### ❗ 关键规则 / Critical Rule

```javascript
// ❌ 错误：在普通函数里用 await
function loadDrinks() {
  const response = await fetch("...");  // 报错！SyntaxError
}

// ✅ 正确：必须在 async 函数里
async function loadDrinks() {
  const response = await fetch("...");  // ✅
}
```

> **`await` 只能活在 `async` 函数里。** **`await` can ONLY be used inside an `async` function.**

---

## Page 19：CORS 跨域资源共享

## Cross-Origin Resource Sharing

---

### 🧩 什么是 CORS？/ What is CORS?

> **同源策略（Same-Origin Policy）**：浏览器默认只允许页面向**同一个服务器**请求资源。
> 
> **CORS** 是一种机制，允许服务器声明"我允许哪些其他来源访问我"。
> 
> By default, browsers only allow a page to request resources from the **same server** it came from. CORS lets servers declare which other origins are permitted.

---

### 🚪 类比：门禁系统 / Analogy: Security Gate

```
你访问 A.com 的网页
You visit a page from A.com
        │
        │ 页面中的 JS 想请求 B.com 的 API
        │ JS on the page tries to fetch from B.com
        ▼
┌─────────────────────────────────────┐
│           浏览器门禁 / Browser Gate  │
│                                     │
│  B.com 的响应头里有没有：            │
│  Access-Control-Allow-Origin: A.com │
│                                     │
│  有 ✅ → 放行 / Allowed             │
│  没有 ❌ → 浏览器拦截！/ Blocked!   │
└─────────────────────────────────────┘
```

---

### 📋 CORS 核心概念表 / CORS Key Concepts

|概念 / Concept|含义 / Meaning|
|---|---|
|同源 Same-Origin|协议 + 域名 + 端口完全相同 / Same protocol + domain + port|
|跨域 Cross-Origin|任一不同就算跨域 / Any difference = cross-origin|
|CORS 响应头|服务器在响应里声明允许的来源 / Server declares allowed origins|
|`Access-Control-Allow-Origin`|最关键的 CORS 响应头 / Most important CORS header|

---

### 🛠️ 遇到 CORS 问题怎么办？/ What if you hit CORS errors?

> **课程建议 / Course advice:** 如果 Fetch API 遇到 CORS 问题，项目中**允许退回使用旧的 XMLHttpRequest**。
> 
> If Fetch API causes CORS issues, you are permitted to fall back to **XMLHttpRequest** in your projects.

---

## ✅ Key Takeaways / 全章核心要点（P16–P19）

1. **Fetch 默认是 GET**：不传配置对象就是 GET 请求，简洁干净
2. **两个 `.then()` 是必须的**：第一个解析 Response，第二个才得到数据——因为 `.json()` 也是异步的
3. **POST 用 Fetch 三件套**：`method + headers + JSON.stringify(body)`，缺一不可
4. **async/await 是 Promise 的语法糖**：底层相同，但代码更线性易读
5. **`await` 只能在 `async` 函数内**：这是硬性语法规则，违反会报错
6. **CORS 是浏览器行为**：是浏览器在保护你，不是服务器拒绝你；Fetch 内置 CORS 支持

---

## 📝 考题预测（一问一答）

## Predicted Exam Questions

---

**Q1：`fetch()` 默认使用哪种 HTTP 方法？** **Q1: What HTTP method does `fetch()` use by default?**

> **A:** `GET`。不传配置对象时默认发 GET 请求。/ `GET`. No options object means GET.

---

**Q2：为什么 Fetch 需要两个 `.then()`，而不是一个？** **Q2: Why does Fetch require two `.then()` calls?**

> **A:** 因为 `fetch()` 返回的第一个 Promise 解析为 `Response` 对象（非数据本身），需要调用 `.json()` 再次解析，而 `.json()` 也返回一个 Promise，所以需要第二个 `.then()` 才能获得真正的数据。
> 
> The first Promise resolves to a `Response` object, not the data. `.json()` also returns a Promise, so a second `.then()` is needed to get the actual data.

---

**Q3（判断）：`body` 字段可以直接传入 JS 对象。** **Q3 (T/F): You can pass a JS object directly to the `body` field.**

> **A:** ❌ 错 / False。必须用 `JSON.stringify()` 转成字符串，否则服务器无法正确解析。

---

**Q4：`async/await` 和 Promise 链（`.then()`）在功能上有何本质区别？** **Q4: What is the fundamental difference between `async/await` and Promise chains?**

> **A:** 没有本质区别 / No fundamental difference。`async/await` 是 Promise 的语法糖，底层机制相同，只是代码写法更线性、更易读。
> 
> `async/await` is syntactic sugar over Promises — same mechanism, cleaner syntax.

---

**Q5：`await` 关键字只能在哪里使用？** **Q5: Where can the `await` keyword be used?**

> **A:** 只能在 `async` 函数内部使用。在普通函数中使用会报 `SyntaxError`。
> 
> Only inside an `async` function. Using it in a regular function causes a `SyntaxError`.

---

**Q6：CORS 的全称是什么？它的作用是什么？** **Q6: What does CORS stand for, and what does it do?**

> **A:** Cross-Origin Resource Sharing（跨域资源共享）。它允许服务器声明哪些外部来源可以访问其资源，由浏览器负责执行这个策略。
> 
> Cross-Origin Resource Sharing. It lets servers declare which origins can access their resources; the browser enforces this policy.

---

**Q7（代码题）：将以下 Promise 链改写为 async/await 形式。**

```javascript
// 原始代码
function getData() {
  fetch("/api/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
```

> [!NOTE]
> > ```javascript
> > // async/await 改写
> > async function getData() {
> >   try {
> >     const res = await fetch("/api/data");
> >     const data = await res.json();
> >     console.log(data);
> >   } catch (err) {
> >     console.error(err);
> >   }
> > }
> > ```
> 

---

**Q8（判断）：Fetch API 和 XMLHttpRequest 都内置了 CORS 机制。** **Q8 (T/F): Both Fetch API and XMLHttpRequest have CORS built in.**

> **A:** ❌ 错 / False。只有 **Fetch API** 内置 CORS。XHR 没有内置，这是 Fetch 相对于 XHR 的改进之一。
> 
> Only the **Fetch API** has CORS built in. This is one of Fetch's improvements over XHR.