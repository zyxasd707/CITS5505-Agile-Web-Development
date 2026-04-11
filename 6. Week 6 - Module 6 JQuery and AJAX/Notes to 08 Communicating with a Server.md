# **Communicating with a Server 与服务器通信 Page 1–27**

---

## **Page 1: Title – 标题页**

**Communicating with a server** 与服务器通信

CITS3403 and CITS5505 - Agile Web Development 敏捷Web开发

Unit Coordinator: Matthew Daggitt and Maira Alvi, Semester 1, 2026

---

## **Page 2: Second half of the course – 课程下半部分概览**

The second half of the course will cover servers: 课程的下半部分将涵盖服务器相关内容：

- **Week 6** – Communicating with a server 与服务器通信
- **Week 8** – Creating your own server & dynamically updating webpages 创建自己的服务器并动态更新网页
- **Week 9** – Adding a database to your server 为服务器添加数据库
- **Week 10** – Adding user accounts and making your server secure 添加用户账户并保障服务器安全
- **Week 11** – Testing your server and webpage 测试服务器和网页
- **Week 12** – Group project deadline (May 17th); Designing public facing APIs 小组项目截止；设计公共API
- **Week 13** – Deploying your server 部署服务器

> 💡 **引导问题 Guided Question:** 为什么"与服务器通信"放在课程后半段的第一讲？ **答：** 前半段已掌握HTML/CSS/JS前端基础，现在需要理解前端如何与后端交互，这是全栈开发的关键桥梁。

---

## **Page 3: Communicating with a server – 与服务器通信（动机）**

So far, the dynamic pages we have constructed have used JavaScript to respond to **local browser events**, e.g. users clicking buttons, pages loading. 到目前为止，我们构建的动态页面使用 JavaScript 响应**本地浏览器事件（local browser events）**，如用户点击按钮、页面加载。

However, we often want the browser to be able to **communicate with the server after the page is loaded**, e.g.: 然而，我们经常需要浏览器在**页面加载后继续与服务器通信**，例如：

- Updating the page when someone sends you a message, liking a post etc. 当有人给你发消息、点赞时更新页面
- Submitting a form and storing the completed information in the server. 提交表单并将信息存储在服务器上

Two approaches / 两种方式：

1. Use the same **HTTP requests** that the browser uses to obtain the original page. 使用浏览器获取原始页面时相同的 **HTTP请求**。
2. Use **web sockets** (covered in later lectures). 使用 **WebSocket**（后续课程讲解）。

> 🎯 **类比 Analogy:** 本地事件 ≈ 自己翻书（不联网）；HTTP请求 ≈ 打电话问别人要信息；WebSocket ≈ 开着电话不挂，双方随时说话。

> 💡 **引导问题:** HTTP请求和WebSocket的最核心区别是什么？ **答：** HTTP是"请求-响应"模式（一问一答），WebSocket是**持久双向连接**（双方随时通信）。

---

## **Page 4: HTTP requests – 章节分隔页**

（过渡页，进入 HTTP 请求详解部分）

---

## **Page 5: Structure of HTTP requests and responses – HTTP请求与响应的结构 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=5&selection=80,0,80,41&color=yellow|08CommunicatingWithAServer, p.5]]
> > Structure of HTTP requests and responses


When JavaScript running in the browser requires a service running on a server, we are once again using a **client-server architecture**. 当浏览器中运行的 JavaScript 需要服务器上的服务时，我们再次使用**客户端-服务器架构（client-server architecture）**。

The client sends a HTTP **request** to the server, the server receives the request, formulates and sends a **response**, and then **forgets everything** about the exchange, i.e. the protocol is **stateless**. 客户端向服务器发送HTTP**请求（request）**，服务器接收请求后构造并发送**响应（response）**，然后**忘掉一切**——即协议是**无状态的（stateless）**。

**HTTP请求结构 (Request Structure)：**

```
GET /doc/test.html HTTP/1.1          ← Request Line 请求行（方法 + URL + 协议版本）
Host: www.test101.com                ← Request Headers 请求头（键值对元信息）
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0
Content-Length: 35
                                     ← 空行分隔 header 和 body
bookId=12345&author=Tan+Ah+Teck     ← Request Message Body 请求体（数据）
```

**HTTP响应结构 (Response Structure)：**

```
HTTP/1.1 200 OK                      ← Status Line 状态行（协议 + 状态码 + 状态文本）
Date: Sun, 08 Feb xxxx 01:11:12 GMT  ← Response Headers 响应头
Server: Apache/1.3.29 (Win32)
Content-Length: 35
Content-Type: text/html
                                     ← 空行分隔 header 和 body
<h1>My Home page</h1>               ← Response Message Body 响应体（HTML等内容）
```

In the HTTP protocol, requests have a specific form, specifying the **method** (GET, POST, UPDATE, DELETE) and **URL**, come with a **header** and a **message body**. 在HTTP协议中，请求有特定格式：指定**方法（method）** 和 **URL**，附带**头部（header）**和**消息体（message body）**。

A response reports the **status** (200 - OK, 404 file not found), has a header and a message body. 响应报告**状态码（status）**（如200-OK，404-未找到），同样有头部和消息体。

> 🎯 **类比：** HTTP请求像寄信——信封（header）写收件人和格式信息，信纸内容（body）是真正的数据，邮局（服务器）处理完就忘了你。

> 💡 **引导问题:** 为什么说HTTP是"无状态的"？这对Web开发有什么影响？ **答：** 服务器不记得之前的请求。这意味着如果需要"记住"用户（如登录状态），需要额外机制如 cookie 或 session。

---

## **Page 6: HTTP request methods – HTTP请求方法 ★★**

HTTP requests have several standard methods: HTTP请求有几种标准方法：

|Method 方法|Purpose 用途|Idempotent 幂等|类比|
|---|---|---|---|
|**GET**|Retrieve data from server 从服务器获取数据（如加载网页）|✅|查字典|
|**POST**|Create or alter data on server 在服务器上创建或修改数据（如提交表单）|❌|寄新信|
|**PUT**|Replace data on server 替换服务器上的数据|✅|覆盖旧文件|
|**DELETE**|Delete data on server 删除服务器上的数据|✅|扔掉文件|

> ⚠️ **关键点：** The HTTP method field is just a string. It can be anything you want, as long as both the client and the server agree on what it does. HTTP方法字段只是一个字符串，可以是任意值，只要客户端和服务器双方约定好它的含义。

> 💡 **引导问题:** PUT和POST有什么区别？ **答：** PUT是**幂等的（idempotent）**——执行两次和执行一次效果相同（覆盖替换）；POST不是——执行两次可能创建两条记录。

**示例代码 Example：**

```javascript
// GET: 参数直接拼在URL上（query string）
// GET: parameters appended to URL
fetch("/api/users?id=123")          // 获取id=123的用户

// POST: 数据放在请求体中
// POST: data goes in the request body
fetch("/api/users", {
  method: "POST",                   // 方法设为POST
  body: JSON.stringify({name:"Tom"})// 请求体携带数据
})
```

---

## **Page 7: HTTP response status codes – HTTP响应状态码 ★★**

状态码按首位数字分为5类：

|类别 Category|含义 Meaning|常见码 Key Codes|
|---|---|---|
|**1xx** Informational 信息性|请求已接收，继续处理|100 Continue|
|**2xx** Success 成功 ★|请求成功|**200 OK** ★, **201 Created** ★, **204 No Content** ★|
|**3xx** Redirection 重定向|需要进一步操作|301 Moved Permanently, **304 Not Modified** ★|
|**4xx** Client Error 客户端错误 ★|请求有误|**400 Bad Request** ★, **401 Unauthorized** ★, **403 Forbidden** ★, **404 Not Found** ★, **409 Conflict** ★|
|**5xx** Server Error 服务器错误|服务器内部出错|**500 Internal Server Error** ★|

> 🎯 **记忆口诀：** 2成功、3跳转、4你错、5我错。

> 💡 **趣味：** `418 I'm a teapot` 是一个愚人节玩笑状态码（RFC 2324）。`420 Enhance Your Calm` 曾用于Twitter限流。

---

## **Page 8: HTTP requests in JavaScript (old style) – 章节分隔页**

（过渡页，进入旧式 XMLHttpRequest 部分）

---

## **Page 9: Asynchronous communication – 异步通信 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=9&selection=61,0,61,27&color=yellow|08CommunicatingWithAServer, p.9]]
> > Asynchronous communication

[[6. Week 6 - Module 6 JQuery and AJAX/Supplementary Notes to 08 Communicating with a Server#Page 9 Asynchronous Communication — 异步通信 ★★]]
When we make a request to a service in JavaScript, we do **not know when, if ever** the server will respond. 当我们在 JavaScript 中向服务发起请求时，我们**不知道服务器何时（甚至是否）会响应**。

JavaScript is **single-threaded** (it must execute each statement in order), and therefore making a request would block other scripts from running until the server responds. JavaScript 是**单线程的（single-threaded）**（必须按顺序执行每条语句），因此发起请求可能会阻塞其他脚本运行。

However, the **environment** JavaScript runs in is **not single-threaded**, so we can write a function, with a function as a parameter, which will be executed when and if the server responds. 然而，JavaScript 运行的**环境（如浏览器）并非单线程**，所以我们可以传入一个回调函数（callback function），当服务器响应时自动执行。

```
Object.asyncFn(parameters, callbackFunction)
// 异步函数模式：传入参数和回调函数
```

The callback function takes parameters for errors and the response, and executes them. 回调函数接收错误和响应作为参数并执行。

**回调函数示例 Callback Example (from slide)：**

```javascript
function big_Request(data, callback) {  // 定义异步请求函数
  var req = request_to_server(data);    // 向服务器发请求
  // 当服务器响应时：
  callback(req.error, req.response);    // 调用回调，传入错误和响应
}

big_Request(myData, function(error, data) { // 调用并传入回调
  if (error) alert(error);             // 有错误则弹窗
  else render(data);                   // 否则渲染数据
});
```

> 🎯 **类比：** 异步通信 ≈ 在餐厅点餐——你点完菜（发请求），不用站在厨房等，可以聊天（执行其他代码），菜好了服务员会叫你（callback触发）。

> 💡 **引导问题:** 如果JavaScript是单线程的，异步请求是如何实现"不阻塞"的？ **答：** 浏览器的**事件循环（Event Loop）**机制——网络请求由浏览器底层（非JS线程）处理，完成后将回调放入任务队列，JS主线程空闲时取出执行。

**Event Loop 事件循环示意（基于P9图示）：**

```
Requests 请求 ──→ [EVENT LOOP 事件循环] ──→ Intensive Operation 耗时操作
                   (single thread 单线程)     (File System / Database / Computation)
                         ↑                           ↓
              Trigger Callback ←───── Operation Complete 操作完成
              触发回调                   Register Callback 注册回调
```

---

## **Page 10: XMLHttpRequests – XMLHttpRequest对象 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=10&selection=33,0,33,16&color=yellow|08CommunicatingWithAServer, p.10]]
> > XMLHttpRequests


Modern browsers have an `XMLHttpRequest` object to handle requests to, and responses from a remote server. 现代浏览器有一个 `XMLHttpRequest` 对象来处理与远程服务器之间的请求和响应。

The object is initialised and then **opens** a connection to a server. The `send` method sends the request, and when the server responds, the `status` and `response` can be accessed as properties. 对象被初始化后**打开（open）**到服务器的连接。`send` 方法发送请求，服务器响应后，可以通过属性访问 `status` 和 `response`。

**方法表 Methods Table：**

|Method 方法|Description 描述|
|---|---|
|`new XMLHttpRequest()`|创建一个新的 XMLHttpRequest 对象|
|`abort()`|取消当前请求|
|`getAllResponseHeaders()`|返回所有头部信息|
|`getResponseHeader()`|返回特定头部信息|
|`open(method, url, async, user, psw)`|配置请求（方法、URL、是否异步、可选用户名/密码）|
|`send()`|发送请求（用于GET）|
|`send(string)`|发送请求并附带数据（用于POST）|
|`setRequestHeader()`|添加键值对到请求头|

**属性表 Properties Table：**

|Property 属性|Description 描述|
|---|---|
|`onreadystatechange`|定义 readyState 改变时执行的回调函数|
|`readyState`|请求状态：0=未初始化, 1=已建立连接, 2=已接收请求, 3=处理中, **4=完成且响应就绪** ★|
|`responseText`|以字符串形式返回响应数据|
|`responseXML`|以XML数据形式返回响应|
|`status`|状态码（200="OK", 403="Forbidden", 404="Not Found"）|
|`statusText`|状态文本（如"OK"、"Not Found"）|

> ⚠️ **考试关键：** `readyState == 4 && status == 200` 是判断请求成功完成的标准条件。

---
[[6. Week 6 - Module 6 JQuery and AJAX/Supplementary Notes to 08 Communicating with a Server#P11–P12 精讲：在 JS 中发送与接收 HTTP 请求]]
## **Page 11: Sending a HTTP request in JavaScript – 在JavaScript中发送HTTP请求**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=11&selection=58,0,58,37&color=yellow|08CommunicatingWithAServer, p.11]]
> > Sending a HTTP request in JavaScript


**GET请求示例：**

```javascript
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
// open(方法, URL+查询参数, 异步=true)
xhttp.send();                        // GET不需要body，直接send()
```

**POST请求示例：**

```javascript
xhttp.open("POST", "ajax_test.asp", true);          // 打开POST请求
xhttp.setRequestHeader("Content-type",               // 设置请求头：表单编码格式
  "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");                // 发送数据在body中
```

The third parameter to `open` is whether the request should be **asynchronous**. `open` 的第三个参数表示请求是否为**异步（asynchronous）**。

> 💡 **引导问题:** GET和POST在数据传递方式上有什么区别？ **答：** GET的数据附在**URL后面**（query string），POST的数据放在**请求体（body）**中。GET有URL长度限制且数据可见，POST更安全且无长度限制。

---

## **Page 12: Receiving a HTTP response in JavaScript – 在JavaScript中接收HTTP响应 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=12&selection=53,0,53,40&color=yellow|08CommunicatingWithAServer, p.12]]
> > Receiving a HTTP response in JavaScript


The request changes state when the server responds, and the response is accessible as the `responseText` property. 当服务器响应时请求状态改变，响应可通过 `responseText` 属性访问。

An asynchronous request has a `readystate` property describing the progress, and an `onreadystatechange` callback function that is executed when the `readystate` changes. 异步请求有 `readyState` 属性描述进度，和 `onreadystatechange` 回调函数在状态变化时执行。

**完整示例（核心代码）：**

```javascript
function loadDoc() {
  var xhttp = new XMLHttpRequest();       // 1. 创建XHR对象
  xhttp.onreadystatechange = function() { // 2. 设置状态变化回调
    if (this.readyState == 4 && this.status == 200) { // 3. 完成且成功？
      document.getElementById("demo").innerHTML =
        this.responseText;                // 4. 将响应文本写入DOM
    }
  };
  xhttp.open("GET", "ajax_info.txt", true); // 5. 配置GET请求，异步
  xhttp.send();                             // 6. 发送请求
}
```

> 🎯 **类比：** `readyState` 像快递追踪状态——0=未下单, 1=已接单, 2=已揽件, 3=运输中, 4=已送达。只有在状态=4（送达）且status=200（包裹完好）时，才能拆包。

**自己动手试 Mini Exercise：**

```javascript
// 试着理解执行顺序：
var xhttp = new XMLHttpRequest();
console.log("A");                          // 先打印A
xhttp.onreadystatechange = function() {
  console.log("B: state=" + this.readyState); // 状态变化时打印
};
xhttp.open("GET", "test.txt", true);
console.log("C");                          // 再打印C
xhttp.send();
console.log("D");                          // 再打印D
// 输出顺序：A → C → D → B(多次，最终readyState=4)
// 因为B是异步回调，在主线程代码之后执行！
```

---

## **Page 13: HTTP requests with jQuery – 章节分隔页**

（过渡页，进入 jQuery HTTP 请求部分）
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=13&selection=0,0,2,7&color=yellow|08CommunicatingWithAServer, p.13]]
> > HTTP requests with JQuery

---

## **Page 14: jQuery and HTTP requests – jQuery与HTTP请求**

jQuery的 `get` 函数发送GET请求到URL，并把数据传给回调函数。 The jQuery `get` function will send a GET request to a URL and passes the data to a callback function.

**jQuery GET 示例：**

```javascript
$("button").click(function(){             // 按钮点击事件
  $.get("demo_test.asp", function(data, status){ // 发送GET请求
    alert("Data: " + data +               // data = 服务器返回的数据
          "\nStatus: " + status);          // status = 请求状态（如"success"）
  });
});
```

jQuery的 `post` 函数发送POST请求，附带数据到URL，并把响应传给回调。 The jQuery `post` function will send a POST request with data to a URL and passes the response to a callback function.

**jQuery POST 示例：**

```javascript
$("button").click(function(){             // 按钮点击事件
  $.post("demo_test_post.asp",           // 目标URL
  {
    name: "Donald Duck",                  // 发送的数据（对象形式）
    city: "Duckburg"
  },
  function(data, status){                 // 回调处理响应
    alert("Data: " + data +
          "\nStatus: " + status);
  });
});
```

> 💡 **对比：** jQuery 的 `$.get` / `$.post` 相比原生 XMLHttpRequest 大幅简化了代码，不需要手动管理 `readyState`。

---

## **Page 15: HTTP requests in JavaScript (new style) – 章节分隔页**

（过渡页，进入现代 Fetch API 部分）

---

## **Page 16: The Fetch API – Fetch API ★★**

The Fetch API for making HTTP requests was added to JavaScript in **2017**. 用于发起HTTP请求的 Fetch API 于 **2017年** 加入JavaScript。

It addresses several issues including improving security and simplifying the API with modern features of JavaScript. 它解决了多个问题，包括提高安全性和利用JavaScript现代特性简化API。

At the heart of the API is the `fetch` method. API的核心是 `fetch` 方法。

```javascript
fetch("https://bubble.tea.com/api/drinks") // 发起GET请求（默认GET）
  .then(response => response.json())       // 第1个then：将响应解析为JSON
  .then(data => {                          // 第2个then：处理解析后的数据
    // Update the UI with the fetched data
    // 用获取到的数据更新UI
    console.log(data);
  })
  .catch(error => console.error('Error:', error)); // 捕获任何错误
```

The `then` methods can be **chained** to define callbacks for the processing of the response, and the `catch` method handles any errors that occur. `then` 方法可以**链式调用（chain）**来定义处理响应的回调，`catch` 方法处理任何发生的错误。

> 🎯 **类比：** Promise链 ≈ 工厂流水线——每个 `.then()` 是一个工位，上一工位处理完的半成品传给下一工位。如果任一环节出错，产品被送到 `.catch()` 维修站。

> 💡 **引导问题:** `fetch` 返回的是什么？为什么需要两个 `.then()`？ **答：** `fetch` 返回一个 **Promise**。第一个 `.then()` 拿到的是 Response 对象（包含header等元信息），调用 `.json()` 再返回一个 Promise 来解析body。第二个 `.then()` 才拿到实际的数据。

---

## **Page 17: HTTP requests (Fetch with options) – Fetch请求配置**

If you want to define headers and a body as well, you can pass a dictionary as the second argument: 如果想定义请求头和请求体，可以传入一个字典作为第二个参数：

```javascript
fetch('https://bubble.tea.com/api/order', { // URL + 配置对象
  method: 'POST',                           // 指定方法为POST
  headers: {                                // 设置请求头
    'Accept': 'application/json',           // 告知服务器：我接受JSON
    'Content-Type': 'application/json'      // 告知服务器：我发送的是JSON
  },
  body: JSON.stringify({                    // 请求体：JS对象转JSON字符串
    quantity: 1,
    drink: 'Textual content'
  })
});
```

Equally the `Response` object you receive will contain fields corresponding to all the standard HTTP response fields. 同样，你收到的 `Response` 对象将包含所有标准HTTP响应字段。

> ⚠️ **易错点：** `body` 不能直接传JS对象，必须用 `JSON.stringify()` 转成字符串！

---

## **Page 18: Async and await – async/await语法 ★★**

The `fetch` API plays nicely with JavaScript's new `async` (asynchronous) functions: `fetch` API 与JavaScript新的 `async`（异步）函数配合得很好：

**Promise链写法 (旧)：**

```javascript
function loadDrinks() {
  fetch("https://bubble.tea.com/api/drinks")
    .then(response => response.json())
    .then(data => {
      console.log(data);                    // 处理数据
    })
    .catch(error => console.error('Error:', error));
}
```

**⬇️ 等价的 async/await写法 (新，更直观)：**

```javascript
async function loadDrinks() {               // 函数前加 async 关键字
  try {
    const response = await fetch("https://bubble.tea.com/api/drinks");
    // await 暂停执行，等待fetch完成
    const data = await response.json();     // await 等待JSON解析完成
    console.log(data);                      // 使用数据
  } catch (error) {                         // 等价于 .catch()
    console.error('Error:', error);
  }
}
```

> 🎯 **类比：** `.then()` 链像传递接力棒——一个跑完交给下一个。`async/await` 像一个人按顺序做事，只是遇到等待的步骤会暂停去做别的。代码读起来像同步代码，但执行是异步的。

> 💡 **引导问题:** `await` 只能在哪里使用？ **答：** `await` 只能在 `async` 函数内部使用。在顶层使用会报错（除非使用ES模块顶层await）。

---

## **Page 19: CORS – 跨域资源共享**

Unlike the XMLHttpRequest method, the Fetch API has the **Cross-Origin Resource Sharing (CORS)** mechanism built into it. 与XMLHttpRequest不同，Fetch API **内置了跨域资源共享（CORS）机制**。

At a very high-level, CORS allows the server who provided the original page to **control which other servers** the browser can load resources from via HTTP requests. 简而言之，CORS允许提供原始页面的服务器**控制浏览器可以从哪些其他服务器**通过HTTP请求加载资源。

The exact details are complicated and will not be covered in this course. 具体细节很复杂，本课程不做深入介绍。

> ⚠️ **实用提示：** If you are running into CORS problems, it is permissible to use the old XMLHttpRequest mechanism in the projects. 如果遇到CORS问题，项目中可以使用旧的 XMLHttpRequest 机制。

> 🎯 **类比：** CORS ≈ 门禁系统——你家的大门（原始服务器）决定哪些快递公司（其他服务器）可以进来送货。没有授权的快递会被浏览器直接拒收。

```
浏览器请求 A.com 的页面 → 页面中JS想请求 B.com 的API
                                ↓
                B.com 的响应头需要包含:
                Access-Control-Allow-Origin: A.com
                否则浏览器会拦截响应！
```

---

## **Page 20: AJAX – 章节分隔页**

（过渡页，进入 AJAX 部分）

---

## **Page 21: AJAX motivation – AJAX动机 ★★**

HTTP requests allow us to exchange information. But what information should we exchange? We need a **protocol**! HTTP请求让我们能交换信息。但应该交换什么信息？我们需要一个**协议（protocol）**！

**AJAX** stands for **Asynchronous JavaScript And XML** (eXtensible Markup Language) and is really an **approach** rather than a technology. **AJAX** 代表 **异步JavaScript与XML**，实际上是一种**方法/理念**而非某个具体技术。

> ⚠️ AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as **plain text** or **JSON** text. AJAX的名字具有误导性。AJAX应用可能使用XML传输数据，但使用**纯文本**或**JSON**同样常见。

AJAX was coined in 2005 by Jesse James Garrett — sending **asynchronous HTTP requests** to a remote server and receiving **structured data** which could be parsed using JavaScript and **dynamically update a webpage**, using the DOM. AJAX由Jesse James Garrett在2005年提出——向远程服务器发送**异步HTTP请求**，接收**结构化数据**，用JavaScript解析并利用DOM**动态更新网页**。

Each AJAX request is a single HTTP protocol exchange, and is done **asynchronously**, so that waiting for a response does not freeze the environment. 每个AJAX请求是一次HTTP协议交换，以**异步方式**执行，因此等待响应不会冻结环境。

The server will send the response as a data object (**XML or JSON**), which can then be factored into the current page. 服务器将响应作为数据对象（**XML或JSON**）发送，然后可以融入当前页面。

> 🎯 **AJAX的核心价值：** 不需要重新加载整个页面就能更新部分内容！想想Gmail——你发邮件时页面不会刷新，新邮件自动出现。

---

## **Page 22: AJAX callbacks – AJAX回调（时序图）★★**

The following is a sequence diagram for an AJAX request: 以下是AJAX请求的时序图：

```
HTML Page        JavaScript       XMLHttpRequest         Server
   |                |                  |                    |
   |--onkeyup事件-->|                  |                    |
   |                |--<<create>>----->|                    |
   |                |--URL=complete?-->|                    |
   |                |  id=Murr         |                    |
   |                |--set callback--->|                    |
   |                |  function        |---GET complete?--->|
   |                |                  |   id=Murr          |
   |                |                  |                    | (处理请求)
   |                |                  |<--XML响应数据------|
   |                |<-call callback---|                    |
   |<--update DOM---|                  |                    |
   |   (更新页面)    |                  |                    |
```

**流程解读：**

1. 用户在HTML页面触发事件（如键盘输入 `onkeyup`）
2. JavaScript 创建 XMLHttpRequest 对象
3. 设置URL和回调函数
4. 发送GET请求到服务器
5. 服务器返回结构化数据（XML/JSON）
6. 回调函数被调用
7. JavaScript 解析数据并更新DOM（页面局部刷新）

> 💡 **引导问题:** 为什么AJAX用onkeyup而不是点击提交按钮？ **答：** 这是"自动补全（autocomplete）"场景——用户每敲一个键就发送请求，实时获取建议结果。Google搜索建议就是这样工作的。

---

## **Page 23: XML – XML数据格式**

For a JavaScript function to communicate directly with a server, we require a **universal format** to transmit data (i.e. a protocol!). The two most common formats are **XML** and **JSON**. 要让JavaScript函数直接与服务器通信，需要一种**通用格式**来传输数据。两种最常见的格式是 **XML** 和 **JSON**。

**XML** is _eXtensible Markup Language_ and is similar in form to HTML. All data is contained in a **tree of named tags**. It is designed to be as general as possible; however it only contains data and is **not executable**. **XML** 是_可扩展标记语言_，形式类似HTML。所有数据都包含在**命名标签的树结构**中。设计尽可能通用；但只包含数据，**不可执行**。

```xml
<employees>                          <!-- 根元素：员工列表 -->
  <employee>                         <!-- 一个员工 -->
    <firstName>John</firstName>      <!-- 名字 -->
    <lastName>Doe</lastName>         <!-- 姓氏 -->
  </employee>
  <employee>
    <firstName>Anna</firstName>
    <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName>
    <lastName>Jones</lastName>
  </employee>
</employees>
```

---

## **Page 24: JSON – JSON数据格式 ★★**

**JSON** is _JavaScript Object Notation_ and stores data in the syntax of JavaScript: specifically, the structural object declaration required to create the object instance representing the data. **JSON** 是 _JavaScript对象表示法_，以JavaScript的语法存储数据：即创建表示数据的对象实例所需的结构化对象声明。

```json
{"employees":[                       // 对象，包含一个数组
  {"firstName":"John", "lastName":"Doe"},   // 数组中的每个元素是对象
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]}
```

JSON is more **succinct** and can contain arrays but **should not include functions**. JSON 比XML更**简洁**，可以包含数组，但**不应包含函数**。

Both XML and JSON strings can be converted back to JavaScript objects using **parsers** (e.g. `JSON.parse`). XML和JSON字符串都可以通过**解析器（parser）**转回JavaScript对象（如 `JSON.parse`）。

From there the resulting JavaScript objects can be used to **update the DOM** in the various ways we have already covered. 然后，解析得到的JavaScript对象可以用我们已学过的各种方式**更新DOM**。

**XML vs JSON 对比：**

|特性 Feature|XML|JSON|
|---|---|---|
|语法 Syntax|标签树 `<tag>value</tag>`|键值对 `{"key":"value"}`|
|简洁性 Conciseness|冗长（标签重复）|★ 简洁|
|数组支持 Arrays|需嵌套标签模拟|★ 原生支持 `[]`|
|可执行 Executable|❌ 不可执行|❌ 不应包含函数|
|JS解析 Parsing|较复杂|★ `JSON.parse()` 一行搞定|

**示例代码 - JSON.parse 和 JSON.stringify：**

```javascript
// 字符串 → JS对象
var jsonStr = '{"name":"Tom","age":20}';  // JSON字符串
var obj = JSON.parse(jsonStr);             // 解析为JS对象
console.log(obj.name);                     // 输出 "Tom"

// JS对象 → 字符串
var person = {name: "Alice", age: 25};     // JS对象
var str = JSON.stringify(person);           // 转为JSON字符串
console.log(str);                          // '{"name":"Alice","age":25}'
```

> 💡 **引导问题:** JSON和JS对象字面量有什么区别？ **答：** JSON的键**必须用双引号**包裹，值不能是函数或undefined；JS对象字面量的键可以不加引号，值可以是任意类型。

---

## **Page 25: jQuery and AJAX – jQuery与AJAX（$.ajax函数）**

We can build `XMLHttpRequest` objects directly, but jQuery provides some basic functionality for us in the form of the `ajax` function. 我们可以直接构建 `XMLHttpRequest` 对象，但jQuery通过 `ajax` 函数为我们提供了便捷功能。

```javascript
$( "#dtr" ).click(function() {            // 点击#dtr元素时
  $.ajax({                                // 调用jQuery的ajax函数
    url: 'employees/profile/dtr/data?id=...', // 请求URL
    dataType: 'json',                     // 期望返回JSON格式数据
    success: function (data) {            // 请求成功的回调
      console.log(data);
      // 移除表格中除第一行和最后一行外的所有行
      $('#datatable tr').not(':first').not(':last').remove();
      var html = '';
      for(var i = 0; i < data.length; i++) { // 遍历数据
        html += '<tr>' +
          '<td>' + data[i].famin + '</td>' +  // AM签到
          '<td>' + data[i].famout + '</td>' + // AM签退
          '<td>' + data[i].fpmin + '</td>' +  // PM签到
          '<td>' + data[i].fpmout + '</td>' + // PM签退
          '</tr>';
      }
      $('#datatable tr').first().after(html); // 插入到表头之后
    },
    error: function (data) {              // 请求失败的回调
    }
  });
});
```

> 🎯 **实际场景：** 这个例子展示了一个考勤系统——点击按钮后通过AJAX获取员工打卡记录（JSON），然后动态构建HTML表格行插入页面，无需刷新。

---

## **Page 26: jQuery and AJAX (load function) – jQuery的load函数**

jQuery also has functions that allow you to interact directly with the DOM. jQuery还有直接与DOM交互的函数。

For example, the `load` function will send a GET request to a URL, and **load the data directly into an HTML element**. 例如，`load` 函数会发送GET请求到URL，并将**数据直接加载到HTML元素中**。

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
</script>
<script>
$(document).ready(function(){
  $("button").click(function(){                       // 按钮点击
    $("#div1").load("demo_test.txt",                  // 将URL内容加载到#div1
      function(responseTxt, statusTxt, xhr){          // 回调
        if(statusTxt == "success")                    // 成功
          alert("External content loaded successfully!");
        if(statusTxt == "error")                      // 失败
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
  });
});
</script>
</head>
<body>
<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>
<button>Get External Content</button>
</body>
</html>
```

> 💡 **`load()` 是最简单的AJAX方法**——一行代码就能把远程内容填进DOM元素，适合加载HTML片段。

> **对比三种jQuery AJAX方法：**
> 
> - `$.get()` / `$.post()` — 获取数据，手动处理
> - `$.ajax()` — 完全控制（method, headers, dataType等）
> - `$().load()` — 最简便，直接把内容塞进元素

---

## **Page 27: AJAX in the individual project – AJAX在个人项目中的应用**

For CITS5505 students, the individual project requires you to show off an AJAX request. 对于CITS5505学生，个人项目需要展示AJAX请求。

As we haven't yet covered how to write your own server, the easiest way is to make a call to a **public API**. 由于还没学习如何编写自己的服务器，最简单的方式是调用**公共API**。

You may find this list of public facing APIs useful (pick one without an API key!): 可以使用这个公共API列表（选一个不需要API key的！）： https://github.com/public-apis/public-apis

**简单示例 — 调用公共API：**

```javascript
// 获取一个随机笑话（不需要API key）
async function getJoke() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke" // 公共API
    );
    const joke = await response.json();   // 解析JSON
    document.getElementById("setup").textContent = joke.setup;     // 显示问题
    document.getElementById("punchline").textContent = joke.punchline; // 显示答案
  } catch (error) {
    console.error("Failed to fetch joke:", error);
  }
}
```

---

---

# 📝 典型题目与练习 Practice Questions

---

### **Q1: HTTP方法辨析 (P6)**

**题目：** 以下哪个HTTP方法是幂等的（idempotent）？ A) POST　　B) PUT　　C) GET　　D) Both B and C

**答案：** D) Both B and C

**解析：** PUT（替换数据，执行多次结果相同）和 GET（获取数据，不改变服务器状态）都是幂等的。POST每次可能创建新资源，不是幂等的。

---

### **Q2: 状态码分类 (P7)**

**题目：** 将以下状态码与含义匹配：

1. 200　　2. 301　　3. 404　　4. 500　　5. 201

**答案：**

1. 200 = OK（成功）
2. 301 = Moved Permanently（永久重定向）
3. 404 = Not Found（资源未找到，客户端错误）
4. 500 = Internal Server Error（服务器内部错误）
5. 201 = Created（资源创建成功）

---

### **Q3: XMLHttpRequest 代码追踪 (P10, P12)**

**题目：** 以下代码中，什么时候 `#result` 的内容会被更新？

```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("result").innerHTML = this.responseText;
  }
};
xhr.open("GET", "data.txt", true);
xhr.send();
```

**答案：** 当请求**完成**（readyState==4）且服务器返回**成功**状态码（status==200）时，`#result` 的内容才会被更新为服务器返回的文本。

**解析：** `onreadystatechange` 在每次状态变化时都会触发（共可能触发多次：1→2→3→4），但只有 `readyState==4 && status==200` 这个条件确保我们只在请求完成且成功时才操作DOM。

---

### **Q4: Fetch API Promise链 (P16)**

**题目：** 以下fetch代码中，如果服务器返回的不是合法JSON，错误会在哪里被捕获？

```javascript
fetch("/api/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**答案：** 错误会在 `.catch()` 中被捕获。

**解析：** `response.json()` 返回一个Promise，如果响应体不是合法JSON则这个Promise会reject。Promise链中任何一环reject都会跳到 `.catch()`，这就是链式调用的错误传播机制。

---

### **Q5: async/await 改写 (P18)**

**题目：** 将以下Promise链改写为async/await形式：

```javascript
fetch("/api/users")
  .then(r => r.json())
  .then(users => {
    document.getElementById("count").textContent = users.length;
  })
  .catch(e => alert(e));
```

**答案：**

```javascript
async function loadUsers() {
  try {
    const r = await fetch("/api/users");     // 等待请求完成
    const users = await r.json();            // 等待解析JSON
    document.getElementById("count").textContent = users.length;
  } catch (e) {
    alert(e);                                // 捕获错误
  }
}
```

---

### **Q6: XML vs JSON (P23, P24)**

**题目：** 用JSON表示以下XML数据：

```xml
<books>
  <book><title>JS Guide</title><year>2020</year></book>
  <book><title>CSS Tricks</title><year>2019</year></book>
</books>
```

**答案：**

```json
{"books":[
  {"title":"JS Guide", "year":2020},
  {"title":"CSS Tricks", "year":2019}
]}
```

**解析：** JSON更简洁——XML需要开闭标签对，JSON用花括号和方括号。注意JSON中数值不需要引号。

---

### **Q7: AJAX流程理解 (P21, P22)**

**题目：** 简述AJAX请求的完整流程（从用户操作到页面更新）。

**答案：**

1. 用户触发事件（如点击按钮、键盘输入）
2. JavaScript 创建 XMLHttpRequest 对象（或使用fetch）
3. 配置请求（URL、方法、回调）并发送
4. 请求异步发出，JavaScript继续执行其他代码（不阻塞）
5. 服务器处理请求，返回结构化数据（JSON/XML）
6. 浏览器触发回调函数
7. 回调函数解析数据，通过DOM操作更新页面（局部刷新，不重载整页）

---

### **Q8: 综合代码编写 (P16–P18, P24)**

**题目：** 编写一个async函数，从 `/api/weather` 获取天气数据（JSON格式 `{city:"Perth", temp:22}`），并将城市名和温度显示在 `#weather` 元素中。

**答案：**

```javascript
async function showWeather() {
  try {
    const response = await fetch("/api/weather"); // 发请求
    if (!response.ok) throw new Error("HTTP " + response.status); // 检查状态
    const data = await response.json();           // 解析JSON
    document.getElementById("weather").textContent =
      data.city + ": " + data.temp + "°C";       // 更新DOM
  } catch (err) {
    document.getElementById("weather").textContent = "加载失败";
    console.error(err);
  }
}
showWeather(); // 调用
```

**解析要点：** ① `async` 声明 ② `await` 等待 ③ 检查 `response.ok` 是好习惯（fetch对404不抛异常！） ④ `try/catch` 处理错误。

---

### Summary 总结

- **HTTP是无状态协议（stateless protocol）**：每次请求-响应都是独立的，服务器不记忆之前的交互 `P5`
- **HTTP四大方法**：GET（读取）、POST（创建/修改）、PUT（替换，幂等）、DELETE（删除）`P6`
- **状态码分类**：2xx成功、3xx重定向、4xx客户端错误、5xx服务器错误 `P7`
- **JavaScript是单线程的**，但运行环境支持异步——通过回调函数（callback）实现非阻塞通信 `P9`
- **XMLHttpRequest（旧方法）**：`open()` → `send()` → `onreadystatechange` 监听 `readyState==4 && status==200` `P10–P12`
- **jQuery简化HTTP请求**：`$.get()`, `$.post()`, `$.ajax()`, `$().load()` `P14, P25–P26`
- **Fetch API（新方法，2017）**：`fetch(url).then().then().catch()` 链式调用，或配合 `async/await` 使用 `P16–P18`
- **CORS**：浏览器安全机制，控制跨域请求 `P19`
- **AJAX**：异步JavaScript + 结构化数据（XML/JSON）= 页面局部刷新，不需整页重载 `P21–P22`
- **XML vs JSON**：JSON更简洁、解析更方便（`JSON.parse`/`JSON.stringify`），是现代Web开发的首选数据格式 `P23–P24`