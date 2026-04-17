# **Communicating with a Server 与服务器通信 Page 1–27**

------

## **Page 1: Title – 标题页**

**Communicating with a server** 与服务器通信

CITS3403 and CITS5505 – Agile Web Development（敏捷Web开发） Unit Coordinator: Matthew Daggitt and Maira Alvi, Semester 1, 2026

------

## **Page 2: Second half of the course – 课程下半部分概览**

> The second half of the course will cover **servers**. 课程的下半部分将覆盖**服务器**相关内容。

| Week 周 | Topic 主题                                                   |
| ------- | ------------------------------------------------------------ |
| Week 6  | Communicating with a server — 与服务器通信                   |
| Week 8  | Creating your own server & dynamically updating webpages using a server on the fly — 创建自己的服务器并通过服务器动态更新网页 |
| Week 9  | Adding a database to your server — 为服务器添加数据库        |
| Week 10 | Adding user accounts and making your server secure — 添加用户账户并保障服务器安全 |
| Week 11 | Testing your server and webpage — 测试服务器和网页           |
| Week 12 | **Group project deadline** – end of the week on May 17th — 小组项目截止（5月17日） |
| Week 12 | Designing public facing APIs — 设计公共API                   |
| Week 13 | Deploying your server — 部署服务器                           |

> Therefore, you will have at least 10 days after the Testing lecture before the project is due. Of course, if you're keen feel free to get ahead! 因此，测试课之后至少还有10天时间完成项目。如果你有兴趣，也可以提前开始！

> 💡 **引导问题:** 为什么将"通信"安排在服务器部分的第一讲？ **答：** 通信是前后端衔接的桥梁。在学习自己搭建服务器之前，先掌握浏览器如何与服务器交互（发请求/收响应），才能为后续章节（写服务器、加数据库、做安全）打下基础。

------

## **Page 3: Communicating with a server – 与服务器通信（动机）**

> So far, the dynamic pages we have constructed have used JavaScript to respond to **local browser events**, e.g. users clicking buttons, pages loading. 到目前为止，我们构建的动态页面使用 JavaScript 响应**本地浏览器事件**，如用户点击按钮、页面加载。

> However, we often want the browser to be able to **communicate with the server after the page is loaded**, e.g.: 然而，我们经常希望浏览器能在**页面加载后继续与服务器通信**，例如：

- Updating the page when someone sends you a message, liking a post etc. 当有人发消息、点赞时更新页面。
- Submitting a form and storing the completed information in the server. 提交表单并将完成的信息存储到服务器。

**两种方式 Two approaches：**

1. One way is to use the same **HTTP requests** that the browser uses to obtain the original page. 使用浏览器获取原始页面时相同的 **HTTP 请求**。
2. Another way is to use **web sockets** (covered in later lectures). 使用 **Web Sockets**（后续课程讲解）。

> 🎯 **类比：** 本地事件 ≈ 自己翻书（不联网）；HTTP 请求 ≈ 打电话问图书管理员（问一次答一次）；WebSocket ≈ 电话一直开着，双方随时能说话。

*（本页右下角引用 xkcd 1481 漫画，调侃"好的API文档就是教人如何看你的网站"）*

------

# **Page 4: HTTP requests – 章节分隔页**

*（过渡页，进入 HTTP 请求详解部分）*
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=4&selection=0,0,0,14&color=yellow|08CommunicatingWithAServer, p.4]]
> > HTTP requests

------

## **Page 5: Structure of HTTP requests and responses – HTTP请求与响应的结构 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=5&selection=80,0,80,41&color=yellow|08CommunicatingWithAServer, p.5]]
> > Structure of HTTP requests and responses

> When JavaScript running in the browser requires a service running on a server, we are once again using a **client-server architecture**. 当浏览器中运行的 JavaScript 需要服务器上的服务时，我们再次使用**客户端-服务器架构**。

> The client sends a HTTP **request** to the server, the server receives the request, formulates and sends a **response**, and then **forgets everything** about the exchange, i.e. the protocol is **stateless**. 客户端向服务器发送 HTTP **请求**，服务器接收请求后构造并发送**响应**，然后**忘掉一切**——即协议是**无状态的（stateless）**。

### HTTP Request 请求结构（幻灯片示例）

```
GET /doc/test.html HTTP/1.1             # Request Line 请求行 (方法+URL+版本)
Host: www.test101.com                   # Request Headers 请求头 (主机)
Accept: image/gif, image/jpeg, */*      # 可接受的内容类型
Accept-Language: en-us                  # 可接受的语言
Accept-Encoding: gzip, deflate          # 可接受的压缩
User-Agent: Mozilla/4.0                 # 客户端标识
Content-Length: 35                      # 请求体长度
                                        # ← 空行分隔 header 和 body
bookId=12345&author=Tan+Ah+Teck         # Request Message Body 请求体 (数据)
```

### HTTP Response 响应结构（幻灯片示例）

```
HTTP/1.1 200 OK                         # Status Line 状态行 (版本+状态码+文本)
Date: Sun, 08 Feb xxxx 01:11:12 GMT     # 响应时间
Server: Apache/1.3.29 (Win32)           # 服务器标识
Last-Modified: Sat, 07 Feb xxxx         # 最后修改时间
ETag: "0-23-4024c3a5"                   # 资源版本标识
Accept-Ranges: bytes                    # 支持的范围请求
Content-Length: 35                      # 响应体长度
Connection: close                       # 连接处理方式
Content-Type: text/html                 # 响应体类型
                                        # ← 空行分隔 header 和 body
<h1>My Home page</h1>                   # Response Message Body 响应体
```

> In the HTTP protocol, requests have a specific form, specifying the **method** (GET, POST, UPDATE, DELETE) and **URL**, come with a **header** and a **message body**. 在 HTTP 协议中，请求有特定格式：指定**方法**和**URL**，附带**头部**和**消息体**。

> A response reports the **status** (200 – OK, 404 file not found), has a header and a message body. 响应报告**状态**（如200-OK, 404-未找到），同样有头部和消息体。

> 🎯 **类比：** HTTP 请求 ≈ 寄信——信封（header）写收件人和格式信息，信纸内容（body）是真正的数据，邮局（服务器）处理完就忘了你寄过信。

> 💡 **引导问题:** 为什么HTTP是"无状态"的？这对 Web 开发有什么影响？ **答：** 服务器不记得之前的请求。这意味着如果需要"记住"用户（如登录状态），需要额外机制（cookie、session token、JWT 等）在每次请求中携带身份信息。

------

## **Page 6: HTTP request methods – HTTP请求方法 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=6&selection=63,0,63,21&color=yellow|08CommunicatingWithAServer, p.6]]
> > HTTP request methods


> HTTP requests have several standard methods such as GET, POST, DELETE, PUT. HTTP 请求有几种标准方法，如 GET、POST、DELETE、PUT。

| Method 方法 | 用途 Purpose                                                 | 是否幂等 Idempotent |
| ----------- | ------------------------------------------------------------ | ------------------- |
| **GET**     | Retrieve data from a server, such as loading a webpage — 从服务器获取数据（如加载网页） | ✅                   |
| **POST**    | Create or alter data on the server, such as submitting a form — 在服务器上创建或修改数据（如提交表单） | ❌                   |
| **PUT**     | Replace data on the server; must be idempotent — 替换服务器上的数据；必须幂等 | ✅                   |
| **DELETE**  | Delete data on the server — 删除服务器上的数据               | ✅                   |

> **"must be idempotent, i.e. performing the put request twice is the same as performing it once".** **必须幂等，即执行两次 PUT 请求与执行一次的效果相同。**

> ⚠️ However, the HTTP method field is just a string. It can be anything you want, as long as both the client and the server agree on what it does. 然而，HTTP 方法字段**只是一个字符串**，可以是任意值，只要客户端和服务器双方约定好含义即可。

> 💡 **引导问题:** 什么是"幂等"？为什么 PUT 是幂等的而 POST 不是？ **答：** 幂等 = 执行多次的效果 = 执行一次的效果。
>
> - **PUT** 是"替换"：把 `/user/1` 替换成某个数据，重复执行结果一样（仍是那个数据）。
> - **POST** 是"创建"：可能每次都创建一条新记录（如重复提交表单产生两个订单）。

**📝 典型习题：**

> **题目：** 以下操作应使用哪种 HTTP 方法？ ① 获取用户列表　② 创建新订单　③ 删除一条评论　④ 完整更新某用户资料

> **答案：** ① GET　② POST　③ DELETE　④ PUT

> **解析：** GET 用于只读获取；POST 用于创建新资源（不幂等）；DELETE 明确删除；PUT 用于完整替换已有资源（幂等）。

------

## **Page 7: HTTP response status codes – HTTP响应状态码 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=7&selection=0,0,0,27&color=yellow|08CommunicatingWithAServer, p.7]]
> > HTTP response status codes


状态码按首位数字分为5类（★ 标记为幻灯片中重点标注的状态码）：

| 类别                            | 含义                 | 重点状态码                                                   |
| ------------------------------- | -------------------- | ------------------------------------------------------------ |
| **1xx** Informational 信息性    | 请求已接收，继续处理 | 100 Continue, 101 Switching Protocols, 102 Processing (WebDAV) |
| **2xx** Success 成功            | 请求成功             | ★ **200 OK**, ★ **201 Created**, ★ **204 No Content**, 203 Non-Authoritative Info, 206 Partial Content |
| **3xx** Redirection 重定向      | 需要进一步操作       | 301 Moved Permanently, 302 Found, 303 See Other, ★ **304 Not Modified**, 307 Temporary Redirect |
| **4xx** Client Error 客户端错误 | 请求有误             | ★ **400 Bad Request**, ★ **401 Unauthorized**, ★ **403 Forbidden**, ★ **404 Not Found**, ★ **409 Conflict**, 418 I'm a teapot (RFC 2324), 420 Enhance Your Calm (Twitter) |
| **5xx** Server Error 服务器错误 | 服务器内部错误       | ★ **500 Internal Server Error**, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout |

> 🎯 **记忆口诀：** 2 成功 / 3 跳转 / 4 你错 / 5 我错

> 💡 **趣味冷知识：** `418 I'm a teapot` 是一个愚人节玩笑状态码（RFC 2324 – 超文本咖啡壶控制协议），定义"茶壶不能煮咖啡"。

**📝 典型习题：**

> **题目：** 用户点击提交按钮后收到 `401 Unauthorized`，这说明什么？该如何处理？

> **答案：** 401 = 未认证（未登录或凭证无效）。应引导用户登录或重新获取 token，然后在请求头中携带正确的 `Authorization` 字段。

> **对比：** 401 Unauthorized（未认证） vs 403 Forbidden（已认证但无权限访问）。

------

# **Page 8: HTTP requests in JavaScript (old style) – 章节分隔页**

*（过渡页，进入旧式 XMLHttpRequest 部分）*
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=8&selection=0,0,2,23&color=yellow|08CommunicatingWithAServer, p.8]]
> > HTTP requests in JavaScript (old style)


------

## **Page 9: Asynchronous communication – 异步通信 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=9&selection=61,0,61,27&color=yellow|08CommunicatingWithAServer, p.9]]
> > Asynchronous communication

[[6. Week 6 - Module 6 JQuery and AJAX/Supplementary Notes to 08 Communicating with a Server#**Page 9 Asynchronous communication – 异步通信 ★★**]]

> When we make a request to a service in JavaScript, we do **not know when, if ever, the server will respond**. 当我们在 JavaScript 中向服务发起请求时，我们**不知道服务器何时（甚至是否）会响应**。

> JavaScript is **single-threaded** (it must execute each statement in order), and therefore you might imagine making a request would block other scripts from running until the server responds. JavaScript 是**单线程**的（必须按顺序执行每条语句），因此你可能会想：发请求会阻塞其他脚本直到服务器响应。

> However, the environment JavaScript runs in is **not single-threaded**, so we can write a function, with a function as a parameter, which will be executed when and if the server responds. 然而，JavaScript 运行的**环境（浏览器）并非单线程**，所以我们可以写一个函数（以函数作为参数），当服务器响应时自动执行。

**异步函数模式（P9 原文）：**

```
Object.asyncFn(parameters, callbackFunction)   // 异步函数模式: 传入参数和回调函数
```

> The callback function takes parameters, for errors and the response, and executes them. 回调函数接收（错误, 响应）作为参数并执行。

**幻灯片中的回调示例：**

```javascript
function big_Request(data, callback) {              // 定义异步请求函数
  var req = request_to_server(data);                // 向服务器发请求
  //register_event_listener(req, callback);         // 注册事件监听器
  //when server responds:                           // 当服务器响应时:
    callback(req.error, req.response);              // 触发回调,传入错误和响应
}

big_Request(myData, function(error, data) {         // 调用并传入匿名回调
  if (error) alert(error);                          // 有错误则弹窗
  else render(data);                                // 否则渲染数据
});
```

**Event Loop 事件循环示意（幻灯片右图）：**

```
Requests, etc. ──┐
                 ↓
            ┌─────────────┐          Intensive Operation 耗时操作
            │  EVENT LOOP │  ────→   ├─ File System    (文件系统)
            │ (single     │          ├─ Database       (数据库)
            │  thread)    │  ←────   └─ Computation    (计算)
            └─────────────┘
              Trigger           Register
              Callback          Callback
              触发回调           注册回调
                      ↓   ↑
                 Operation Complete
                    操作完成
```

> 🎯 **类比：** 异步通信 ≈ 餐厅点餐——你点完菜（发请求），不用站在厨房等；可以坐下聊天（执行其他代码）；菜好了服务员会叫你（callback 触发）。

> 💡 **引导问题:** 如果 JavaScript 是单线程的，异步请求是如何实现"不阻塞"的？ **答：** 浏览器的**事件循环（Event Loop）**机制——网络请求由浏览器底层（非 JS 线程）处理，完成后将回调放入任务队列，JS 主线程空闲时取出执行。

------

## **Page 10: XMLHttpRequests – XMLHttpRequest对象 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=10&selection=33,0,33,16&color=yellow|08CommunicatingWithAServer, p.10]]
> > XMLHttpRequests


> Modern browsers have an `XMLHttpRequest` object to handle requests to, and responses from a remote server. 现代浏览器有一个 `XMLHttpRequest` 对象来处理与远程服务器之间的请求和响应。

> The object is initialised and then **opens** a connection to a server. The `send` method sends the request to the server, and when the server responds, the `status` and `response` can be accessed as properties. 对象被初始化后**打开（open）**到服务器的连接。`send` 方法发送请求，服务器响应后，可通过属性访问 `status` 和 `response`。

### 方法表 Methods（P10原文）

| Method 方法                           | Description 描述                                             |
| ------------------------------------- | ------------------------------------------------------------ |
| `new XMLHttpRequest()`                | Creates a new XMLHttpRequest object — 创建新的 XHR 对象      |
| `abort()`                             | Cancels the current request — 取消当前请求                   |
| `getAllResponseHeaders()`             | Returns header information — 返回所有头部信息                |
| `getResponseHeader()`                 | Returns specific header information — 返回特定头部信息       |
| `open(method, url, async, user, psw)` | Specifies the request — 配置请求（方法/URL/是否异步/可选用户名密码） |
| `send()`                              | Sends the request. Used for GET requests — 发送请求（用于 GET） |
| `send(string)`                        | Sends the request with data. Used for POST — 发送请求并附带数据（用于 POST） |
| `setRequestHeader()`                  | Adds a label/value pair to the header — 向请求头添加键值对   |

### 属性表 Properties（P10原文）

| Property 属性        | Description 描述                                             |
| -------------------- | ------------------------------------------------------------ |
| `onreadystatechange` | Defines a function to be called when the readyState property changes — 定义 readyState 变化时执行的回调 |
| `readyState`         | Holds the status of the XMLHttpRequest: **0** request not initialized / **1** server connection established / **2** request received / **3** processing request / **4** request finished and response ready ★ |
| `responseText`       | Returns the response data as a string — 以字符串形式返回响应数据 |
| `responseXML`        | Returns the response data as XML data — 以 XML 数据形式返回响应 |
| `status`             | Returns the status-number of a request (200 "OK", 403 "Forbidden", 404 "Not Found") — 返回状态码 |
| `statusText`         | Returns the status-text (e.g. "OK" or "Not Found") — 返回状态文本 |

> ⚠️ **考试关键：** `readyState == 4 && status == 200` 是判断请求**成功完成**的标准条件。

------

## **Page 11: Sending a HTTP request in JavaScript – 发送HTTP请求**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=11&selection=58,0,58,37&color=yellow|08CommunicatingWithAServer, p.11]]
> > Sending a HTTP request in JavaScript

> HTTP requests have several standard methods such as GET, POST, DELETE, PUT. HTTP 请求有几种标准方法：GET、POST、DELETE、PUT。

> A **GET** request is used to retrieve data from a server, such as loading a webpage. **GET** 请求用于从服务器获取数据（如加载网页）。

**GET 请求示例（幻灯片原代码）：**

```javascript
xhttp.open("GET",                                         // 方法: GET
  "demo_get2.asp?fname=Henry&lname=Ford",                 // URL + 查询参数
  true);                                                  // 第三参数 true = 异步
xhttp.send();                                             // GET 无 body,直接发送
```

> A **POST** request is used to create or alter data on the server, such as submitting a form. **POST** 请求用于在服务器上创建或修改数据（如提交表单）。

**POST 请求示例（幻灯片原代码）：**

```javascript
xhttp.open("POST", "ajax_test.asp", true);                // 打开 POST 请求,异步
xhttp.setRequestHeader("Content-type",                    // 设置请求头: 内容类型
  "application/x-www-form-urlencoded");                   // 表单编码格式
xhttp.send("fname=Henry&lname=Ford");                     // 数据在 body 中发送
```

> A **PUT** request is used to replace data on the server (must be idempotent, i.e. performing the put request twice is the same as performing it once). **PUT** 请求用于替换服务器数据（必须幂等）。

> The third parameter to `open` is whether the request should be **asynchronous**. The header can be used to set parameters and cookies etc. `open` 的第三个参数表示是否**异步**。请求头可用于设置参数和 cookie 等。

> 💡 **引导问题:** GET 和 POST 在数据传递方式上的核心区别？ **答：** GET 数据附在 **URL 后面**（query string），有长度限制且公开可见；POST 数据放在**请求体（body）**中，无长度限制，相对隐蔽。

------

## **Page 12: Receiving a HTTP response in JavaScript – 接收HTTP响应 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=12&selection=53,0,53,40&color=yellow|08CommunicatingWithAServer, p.12]]
> > Receiving a HTTP response in JavaScript


> The request changes state when the server responds, and the response is accessible as the `responseText` property of the request. 当服务器响应时请求状态改变，响应可通过 `responseText` 属性访问。

> An asynchronous request has a `readystate` property describing the progress of the request, and an `onreadystatechange` callback function, that is executed when the `readystate` changes. 异步请求有 `readyState` 属性描述进度，和 `onreadystatechange` 回调在状态变化时执行。

> As with the request, the response has a status, the status text, and a header, which is a set of value-key pairs. 响应同样有状态码、状态文本和头部（键值对集合）。

**幻灯片完整示例代码：**

```javascript
function loadDoc() {                                      // 定义加载函数
  var xhttp = new XMLHttpRequest();                       // 1. 创建 XHR 对象
  xhttp.onreadystatechange = function() {                 // 2. 设置状态变化回调
    if (this.readyState == 4 && this.status == 200) {     // 3. 完成(4)且成功(200)
      document.getElementById("demo").innerHTML =         // 4. 获取 DOM 元素
        this.responseText;                                // 5. 写入响应文本
    }                                                     // 结束 if
  };                                                      // 结束回调函数
  xhttp.open("GET", "ajax_info.txt", true);               // 6. 配置 GET 请求,异步
  xhttp.send();                                           // 7. 发送请求
}
```

> 🎯 **类比：** `readyState` 像快递追踪状态——
>
> - 0 = 未下单
> - 1 = 已接单
> - 2 = 已揽件
> - 3 = 运输中
> - 4 = 已送达
>
> 只有状态 = 4（送达）且 status = 200（包裹完好）时，才能"拆包"。

**📝 典型习题：**

> **题目：** 以下代码为什么必须同时检查 `readyState == 4` 和 `status == 200`？

```javascript
if (this.readyState == 4 && this.status == 200) { ... }
```

> **答案：** `onreadystatechange` 回调在 readyState **每次变化**时都会触发（可能触发多次：1→2→3→4）。只检查 `readyState == 4` 表示请求完成，但 status 可能是 404/500 等错误；加上 `status == 200` 确保只在**请求完成且成功**时才操作 DOM。

------

# **Page 13: HTTP requests with jQuery – 章节分隔页**

*（过渡页，进入 jQuery HTTP 请求部分）*
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=13&selection=0,0,2,7&color=yellow|08CommunicatingWithAServer, p.13]]
> > HTTP requests with JQuery


------

## **Page 14: jQuery and HTTP requests – jQuery与HTTP请求**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=14&selection=32,0,32,25&color=yellow|08CommunicatingWithAServer, p.14]]
> > jQuery and HTTP requests

> The jQuery `get` function will send a GET request to a URL and passes the data to a callback function. jQuery 的 `get` 函数发送 GET 请求到 URL，并将数据传给回调函数。

**jQuery GET 示例（幻灯片原代码）：**

```javascript
$("button").click(function() {                            // 按钮点击事件
  $.get("demo_test.asp", function(data, status) {         // 发送 GET 请求
    alert("Data: " + data +                               // data = 响应数据
          "\nStatus: " + status);                         // status = 状态("success")
  });                                                     // 结束回调
});                                                       // 结束 click 事件
```

> The jQuery `post` function will send a POST request, with data to a URL and passes the response to a callback function. jQuery 的 `post` 函数发送 POST 请求（带数据）到 URL，并将响应传给回调。

**jQuery POST 示例（幻灯片原代码）：**

```javascript
$("button").click(function() {                            // 按钮点击事件
  $.post("demo_test_post.asp",                            // 目标 URL
  {                                                       // 要发送的数据对象
    name: "Donald Duck",                                  // 字段: 姓名
    city: "Duckburg"                                      // 字段: 城市
  },
  function(data, status) {                                // 回调处理响应
    alert("Data: " + data +                               // 显示数据
          "\nStatus: " + status);                         // 显示状态
  });                                                     // 结束回调
});                                                       // 结束 click 事件
```

> 💡 **对比：** jQuery 的 `$.get` / `$.post` 相比原生 XMLHttpRequest 大幅简化——不需手动 `new`、`open`、`send`、管理 `readyState`。

------

## **Page 15: HTTP requests in JavaScript (new style) – 章节分隔页**

*（过渡页，进入现代 Fetch API 部分）*
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=15&selection=0,0,2,23&color=yellow|08CommunicatingWithAServer, p.15]]
> > HTTP requests in JavaScript (new style)


------

## **Page 16: The Fetch API – Fetch API ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=16&selection=24,0,24,14&color=yellow|08CommunicatingWithAServer, p.16]]
> > The Fetch API

> The Fetch API for making HTTP requests was added to JavaScript in **2017**. 用于发起 HTTP 请求的 Fetch API 于 **2017 年**加入 JavaScript。

> It addresses several issues including improving security and simplifying the API with modern features of JavaScript. 它解决了多个问题，包括提升安全性和利用 JavaScript 现代特性简化 API。

> At the heart of the API is the `fetch` method. API 的核心是 `fetch` 方法。

**幻灯片原代码：**

```javascript
fetch("https://bubble.tea.com/api/drinks")                // 发起 GET 请求(默认方法)
  .then(response => response.json())                      // 第1个 then: 解析为 JSON
  .then(data => {                                         // 第2个 then: 处理数据
    // Update the UI with the fetched data                // 用获取的数据更新UI
    console.log(data);                                    // 打印数据到控制台
  })                                                      // 结束第2个 then
  .catch(error => console.error('Error:', error));        // 捕获任何错误
```

> The `then` methods can be **chained** to define callbacks for the processing of the response, and the `catch` method handles any errors that occur. `then` 方法可**链式调用**以定义处理响应的回调，`catch` 方法处理任何发生的错误。

> 🎯 **类比：** Promise 链 ≈ 工厂流水线——每个 `.then()` 是一个工位，上一工位处理完的半成品传给下一工位。任何环节出错，产品被送到 `.catch()` 维修站。

> 💡 **引导问题:** 为什么需要两个 `.then()`？ **答：** `fetch()` 返回一个 Promise。
>
> - 第一个 `.then()` 拿到的是 **Response 对象**（包含 header、status 等元信息），但 body 还没解析。
> - `response.json()` 返回**另一个 Promise**，用于解析 body 为 JSON。
> - 第二个 `.then()` 才拿到实际的数据对象。

------

## **Page 17: HTTP requests – Fetch配置请求**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=17&selection=18,0,18,14&color=yellow|08CommunicatingWithAServer, p.17]]
> > HTTP requests

> If you want to define headers and a body as well, you can pass a dictionary as the second argument: 如果想定义请求头和请求体，可以传入一个字典作为第二个参数：

**幻灯片原代码：**

```javascript
fetch('https://bubble.tea.com/api/order', {               // URL + 配置对象
    method: 'POST',                                       // 指定方法为 POST
    headers: {                                            // 设置请求头
        'Accept': 'application/json',                     // 可接受: JSON
        'Content-Type': 'application/json'                // 发送的内容: JSON
    },
    body: JSON.stringify(                                 // 请求体: 对象转 JSON 字符串
        {quantity: 1, drink: 'Textual content'})          // 要发送的数据
});                                                       // 结束 fetch 调用
```

> Equally the `Response` object you receive will contain fields corresponding to all the standard HTTP response fields. 同样，你收到的 `Response` 对象将包含所有标准 HTTP 响应字段。

> ⚠️ **易错点：** `body` 不能直接传 JS 对象，必须用 `JSON.stringify()` 转成字符串！

> 💡 **引导问题:** 为什么 `body` 必须 `stringify`？ **答：** HTTP 传输的是文本/字节流，不能直接承载 JS 对象。需要先将对象**序列化（serialize）**为 JSON 字符串才能发送，服务器收到后再反序列化。

------

## **Page 18: Async and await – async/await语法 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=18&selection=6,0,6,16&color=yellow|08CommunicatingWithAServer, p.18]]
> > Async and await


> The `fetch` API plays nicely with JavaScript's new `async` (asynchronous) functions. Fetch API 与 JavaScript 新的 `async`（异步）函数配合良好。

**Promise 链写法（旧）：**

```javascript
function loadDrinks() {                                   // 普通函数
  fetch("https://bubble.tea.com/api/drinks")              // 发请求
    .then(response => response.json())                    // 解析 JSON
    .then(data => {                                       // 处理数据
      // Update the UI with the fetched data              // 用数据更新 UI
      console.log(data);                                  // 打印数据
    })                                                    // 结束 then
    .catch(error => console.error('Error:', error));      // 捕获错误
}                                                         // 结束函数
```

**⬇ 等价的 async/await 写法（新，更直观）：**

```javascript
async function loadDrinks() {                             // 函数前加 async 关键字
    try {                                                 // try 捕获异常
        const response = await fetch(                     // await 暂停等待
          "https://bubble.tea.com/api/drinks");           // fetch 完成
        const data = await response.json();               // await 等待 JSON 解析
        // Update the UI with the fetched data            // 用数据更新 UI
        console.log(data);                                // 使用数据
    }                                                     // 结束 try
    catch (error) {                                       // 等价于 .catch()
        console.error('Error:', error);                   // 打印错误
    }                                                     // 结束 catch
}                                                         // 结束 async 函数
```

> 🎯 **类比：**
>
> - `.then()` 链像传递接力棒——一个跑完交给下一个。
> - `async/await` 像一个人按顺序做事，遇到等待的步骤会暂停去做别的，然后接着做。
> - 代码**读起来像同步代码**，但执行是异步的。

> 💡 **引导问题:** `await` 只能在哪里使用？ **答：** `await` 只能在 `async` 函数内部使用。在普通函数或顶层作用域使用会报语法错误（ES 模块的顶层 await 除外）。

**📝 典型习题：**

> **题目：** 将以下 Promise 链改写为 async/await：
>
> ```javascript
> fetch("/api/user").then(r => r.json()).then(u => show(u)).catch(e => alert(e));
> ```

> **答案：**
>
> ```javascript
> async function load() {
>   try {
>     const r = await fetch("/api/user");
>     const u = await r.json();
>     show(u);
>   } catch (e) {
>     alert(e);
>   }
> }
> ```

------

## **Page 19: CORS – 跨域资源共享**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=19&selection=42,0,42,5&color=yellow|08CommunicatingWithAServer, p.19]]
> > CORS


> Unlike the `XMLHttpRequest` method, the Fetch API has the **Cross-Origin Resource Sharing (CORS)** mechanism built into it. 与 `XMLHttpRequest` 不同，Fetch API **内置了跨域资源共享（CORS）机制**。

> At a very high-level, CORS allows the server who provided the original page to **control which other servers** the browser can load resources from via HTTP requests. 简而言之，CORS 允许提供原始页面的服务器**控制浏览器**可以从哪些其他服务器通过 HTTP 请求加载资源。

> The exact details are complicated and will not be covered in this course. For more information, see many excellent tutorials on the web, e.g. [MDN CORS Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS). 具体细节很复杂，本课程不深入讲解。更多信息可参考网上的优秀教程，如 MDN 的 CORS 指南。

> ⚠️ **实用提示：** If you are running into CORS problems, it is permissible to use the old `XMLHttpRequest` mechanism in the projects. 如果遇到 CORS 问题，项目中**可以使用旧的 `XMLHttpRequest` 机制**。

> 🎯 **类比：** CORS ≈ 门禁系统——你家大门（原始服务器）决定哪些快递公司（其他服务器）可以进来送货。没授权的快递会被浏览器直接拒收。

```
浏览器请求 A.com 的页面 → 页面中 JS 想请求 B.com 的 API
                                ↓
                B.com 的响应头需包含:
                Access-Control-Allow-Origin: A.com
                否则浏览器会拦截响应！
```

------

# **Page 20: AJAX – 章节分隔页**

*（过渡页，进入 AJAX 部分）*
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=20&selection=0,0,0,5&color=yellow|08CommunicatingWithAServer, p.20]]
> > AJAX


------

## **Page 21: AJAX motivation – AJAX动机 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=21&selection=78,0,78,16&color=yellow|08CommunicatingWithAServer, p.21]]
> > AJAX motivation


> HTTP requests allow us to exchange information. But what information should we exchange? We need a **protocol**! HTTP 请求让我们能交换信息。但应该交换什么信息？我们需要一个**协议**！

> **AJAX** stands for **Asynchronous JavaScript And XML** (eXtensible Markup Language) and is really an **approach** rather than a technology. **AJAX** 代表**异步 JavaScript 与 XML**，实际上是一种**方法/理念**而非某个具体技术。

> AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as **plain text** or **JSON text**. AJAX 的名字具有误导性。AJAX 应用可能使用 XML 传输数据，但使用**纯文本**或 **JSON 文本**同样常见。

> AJAX was coined in **2005** by **Jesse James Garrett** – sending **asynchronous HTTP requests** to a remote server and receiving **structured data** which could be parsed using JavaScript and dynamically update a webpage, using the DOM. AJAX 由 Jesse James Garrett 于 **2005 年**提出——向远程服务器发送**异步 HTTP 请求**，接收**结构化数据**，用 JavaScript 解析并利用 DOM 动态更新网页。

> Each AJAX request is a single HTTP protocol exchange, and is done **asynchronously**, so that waiting for a response does not freeze the environment. 每个 AJAX 请求是一次 HTTP 协议交换，以**异步方式**执行，因此等待响应不会冻结环境。

> The server will send the response as a **data object** (XML or JSON), which can then be factored into the current page. 服务器将响应作为**数据对象**（XML 或 JSON）发送，然后可融入当前页面。

> 🎯 **AJAX 的核心价值：** 不需要重新加载整个页面就能更新部分内容！想想 Gmail——你发邮件时页面不刷新，新邮件自动出现。

------

## **Page 22: AJAX callbacks – AJAX回调时序图 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=21&selection=78,0,78,16&color=yellow|08CommunicatingWithAServer, p.21]]
> > AJAX motivation


> The following is a sequence diagram for an AJAX request. 以下是 AJAX 请求的时序图。

**幻灯片时序图（文字重现）：**

```
HTML Page      JavaScript      XMLHttpRequest      Server
   │              │                  │                │
   │─onkeyup─────▶│                  │                │ 用户输入触发事件
   │              │──<<create>>─────▶│                │ JS 创建 XHR 对象
   │              │──URL=complete?──▶│                │ 设置 URL
   │              │   id=Murr        │                │
   │              │──set callback───▶│                │ 设置回调函数
   │              │                  │──Get─────────▶│ 发送 GET 请求
   │              │                  │  complete?     │
   │              │                  │  id=Murr       │
   │              │                  │                │ (服务器查询)
   │              │                  │◀──XML 响应────│ 返回 <employees>
   │              │                  │                │    <employee>...</>
   │              │◀─call callback───│                │ 回调被触发
   │◀─update DOM──│                  │                │ JS 更新 DOM
   │              │                  │                │
```

**服务器返回的 XML 数据（图中所示）：**

```xml
<employees>                         <!-- 员工列表根元素 -->
  <employee>                        <!-- 单个员工 -->
    <first-name>Greg</first-name>   <!-- 名字 -->
    <last-name>Murray</last-name>   <!-- 姓氏 -->
    <id>1</id>                      <!-- 员工 ID -->
  </employee>                       <!-- 结束单个员工 -->
</employees>                        <!-- 结束员工列表 -->
```

**流程解读：**

1. 用户在 HTML 页面触发事件（如 `onkeyup` 键盘输入）
2. JavaScript 创建 XMLHttpRequest 对象
3. 设置 URL 和回调函数
4. XHR 发送 GET 请求到服务器（`complete?id=Murr`）
5. 服务器返回结构化数据（XML）
6. 回调函数被调用
7. JavaScript 更新 DOM（页面局部刷新）

> 💡 **引导问题:** 为什么这个例子用 `onkeyup` 而不是点击提交按钮？ **答：** 这是"自动补全（autocomplete）"场景——用户每敲一个键就发送请求，实时获取建议结果。Google 搜索建议就是这样工作的。

------

## **Page 23: XML – XML数据格式**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=23&selection=56,0,56,4&color=yellow|08CommunicatingWithAServer, p.23]]
> > XML


> For a JavaScript function to communicate directly with a server, we require a **universal format** to transmit data (i.e. a protocol!). The two most common formats are **XML** and **JSON**. 要让 JavaScript 函数直接与服务器通信，我们需要一种**通用格式**来传输数据（即协议！）。两种最常见的格式是 **XML** 和 **JSON**。

> **XML** is *eXtensible Markup Language* and is similar in form to HTML. All data is contained in a **tree of named tags**. It is designed to be as general as possible; however it only contains data and is **not executable**. **XML** 是*可扩展标记语言*，形式类似 HTML。所有数据都包含在**命名标签的树结构**中。设计尽可能通用；但只包含数据，**不可执行**。

**幻灯片中的 XML 示例：**

```xml
<employees>                                   <!-- 根元素: 员工列表 -->
  <employee>                                  <!-- 单个员工 -->
    <firstName>John</firstName>               <!-- 名字 -->
    <lastName>Doe</lastName>                  <!-- 姓氏 -->
  </employee>                                 <!-- 结束第1位员工 -->
  <employee>                                  <!-- 第2位员工 -->
    <firstName>Anna</firstName>               <!-- 名字 -->
    <lastName>Smith</lastName>                <!-- 姓氏 -->
  </employee>                                 <!-- 结束第2位员工 -->
  <employee>                                  <!-- 第3位员工 -->
    <firstName>Peter</firstName>              <!-- 名字 -->
    <lastName>Jones</lastName>                <!-- 姓氏 -->
  </employee>                                 <!-- 结束第3位员工 -->
</employees>                                  <!-- 结束根元素 -->
```

------

## **Page 24: JSON – JSON数据格式 ★★**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=24&selection=45,0,45,5&color=yellow|08CommunicatingWithAServer, p.24]]
> > JSON


> **JSON** is *JavaScript Object Notation* and stores data in the syntax of JavaScript: specifically, the structural object declaration required to create the object instance representing the data. **JSON** 是 *JavaScript 对象表示法*，以 JavaScript 的语法存储数据：即创建表示数据的对象实例所需的结构化对象声明。

**幻灯片中的 JSON 示例：**

```json
{"employees": [                               // 对象, 含数组
  { "firstName": "John", "lastName": "Doe" },    // 数组元素: 对象
  { "firstName": "Anna", "lastName": "Smith" },  // 第2个对象
  { "firstName": "Peter", "lastName": "Jones" }  // 第3个对象
]}                                            // 结束数组和对象
```

> JSON is more **succinct** and can contain arrays but **should not include functions**. JSON 比 XML 更**简洁**，可以包含数组，但**不应包含函数**。

> Both XML and JSON strings can be converted back to JavaScript objects using **parsers** (e.g. the function `JSON.parse`). XML 和 JSON 字符串都可以通过**解析器**转回 JavaScript 对象（如 `JSON.parse` 函数）。

> From there the resulting JavaScript objects can be used to **update the DOM** in the various ways we have already covered. 之后，解析得到的 JavaScript 对象可以用我们已学过的各种方式**更新 DOM**。

### XML vs JSON 对比

| 特性     | XML                | JSON                      |
| -------- | ------------------ | ------------------------- |
| 语法     | `<tag>value</tag>` | `{"key":"value"}`         |
| 简洁性   | 冗长（标签重复）   | ★ 简洁                    |
| 数组支持 | 需嵌套标签模拟     | ★ 原生 `[]`               |
| 可执行   | ❌                  | ❌（不应含函数）           |
| JS 解析  | 较复杂             | ★ `JSON.parse()` 一行搞定 |

**解析 / 序列化示例：**

```javascript
// JSON 字符串 → JS 对象
var jsonStr = '{"name":"Tom","age":20}';                // JSON 字符串
var obj = JSON.parse(jsonStr);                          // 解析为 JS 对象
console.log(obj.name);                                  // 输出 "Tom"

// JS 对象 → JSON 字符串
var person = { name: "Alice", age: 25 };                // JS 对象
var str = JSON.stringify(person);                       // 转为 JSON 字符串
console.log(str);                                       // '{"name":"Alice","age":25}'
```

> 💡 **引导问题:** JSON 和 JS 对象字面量有什么区别？ **答：** JSON 的**键必须用双引号**包裹，值不能是函数或 `undefined`；JS 对象字面量的键可以不加引号，值可以是任意类型。

------

## **Page 25: jQuery and AJAX – jQuery的$.ajax函数**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=25&selection=14,0,14,16&color=yellow|08CommunicatingWithAServer, p.25]]
> > jQuery and AJAX


> We can build `XMLHttpRequest` objects directly, but jQuery provides some basic functionality for us in the form of the `ajax` function. 我们可以直接构建 `XMLHttpRequest` 对象，但 jQuery 通过 `ajax` 函数为我们提供了便捷功能。

**幻灯片原代码（员工考勤系统示例）：**

```javascript
$("#dtr").click(function() {                                        // #dtr 点击事件
    $.ajax({                                                        // 调用 $.ajax
        url: '{{ url("employees/profile/dtr/data?id=").$profile->fempidno }}', // 请求 URL
        dataType: 'json',                                           // 期望 JSON 格式
        success: function (data) {                                  // 成功回调
            console.log(data);                                      // 打印数据
            $('#datatable tr').not(':first').not(':last').remove(); // 移除除首末行外所有行
            var html = '';                                          // 初始化 HTML 字符串
            for (var i = 0; i < data.length; i++) {                 // 遍历数据
                html += '<tr>' +                                    // 表格行开始
                    '<td>' + data[i].famin + '</td>' +              // AM 签到
                    '<td>' + data[i].famout + '</td>' +             // AM 签退
                    '<td>' + data[i].fpmin + '</td>' +              // PM 签到
                    '<td>' + data[i].fpmout + '</td>' +             // PM 签退
                    '</tr>';                                        // 行结束
            }                                                       // 结束循环
            $('#datatable tr').first().after(html);                 // 插入到表头之后
        },                                                          // 结束 success
        error: function (data) {                                    // 失败回调
        }                                                           // 结束 error
    });                                                             // 结束 $.ajax
});                                                                 // 结束 click
```

**幻灯片下方展示的 UI：**

| DATE | #    | AM IN | AM OUT | PM IN | PM OUT |
| ---- | ---- | ----- | ------ | ----- | ------ |
| Wed  | 1    | 07:35 | 12:07  | 12:35 | 6:19   |
| Thu  | 2    | 07:46 | 12:25  | 12:45 | 5:18   |
| Fri  | 3    | 07:31 | 12:12  | 12:37 | 7:10   |

> 🎯 **实际场景：** 这是一个员工考勤系统——点击按钮 AJAX 获取打卡记录（JSON），动态构建 HTML 表格行插入页面，无需刷新。

------

## **Page 26: jQuery and AJAX (load function) – jQuery的load函数**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=26&selection=17,0,17,16&color=yellow|08CommunicatingWithAServer, p.26]]
> > jQuery and AJAX


> jQuery also has functions that allow you to interact directly with the DOM. jQuery 还有直接与 DOM 交互的函数。

> For example, the `load` function will send a GET request to a URL, and **load the data directly into an HTML element**. 例如，`load` 函数会发送 GET 请求到 URL，并将**数据直接加载到 HTML 元素中**。

**幻灯片原代码：**

```html
<!DOCTYPE html>                                           <!-- 文档类型 -->
<html>                                                    <!-- HTML 根 -->
<head>                                                    <!-- 头部 -->
<script src="https://ajax.googleapis.com/ajax/libs/
jquery/3.3.1/jquery.min.js"></script>                     <!-- 引入 jQuery -->
<script>                                                  <!-- 脚本开始 -->
$(document).ready(function() {                            // DOM 就绪后执行
  $("button").click(function() {                          // 按钮点击事件
    $("#div1").load("demo_test.txt",                      // 加载 URL 内容到 #div1
      function(responseTxt, statusTxt, xhr) {             // 回调参数
        if (statusTxt == "success")                       // 成功分支
          alert("External content loaded successfully!"); // 成功提示
        if (statusTxt == "error")                         // 失败分支
          alert("Error: " + xhr.status +                  // 显示错误码
                ": " + xhr.statusText);                   // 和错误文本
      });                                                 // 结束 load 回调
  });                                                     // 结束 click 事件
});                                                       // 结束 ready
</script>                                                 <!-- 脚本结束 -->
</head>                                                   <!-- 头部结束 -->
<body>                                                    <!-- 主体 -->

<div id="div1">                                           <!-- 目标容器 -->
  <h2>Let jQuery AJAX Change This Text</h2>               <!-- 初始文本 -->
</div>                                                    <!-- 结束 div -->

<button>Get External Content</button>                     <!-- 触发按钮 -->

</body>                                                   <!-- 主体结束 -->
</html>                                                   <!-- HTML 结束 -->
```

**点击按钮后的效果：**

- 弹出对话框："External content loaded successfully!"
- `#div1` 的内容被 `demo_test.txt` 的内容替换（显示 "jQuery and AJAX is FUN! This is some text in a paragraph."）

> 💡 `load()` 是**最简单的 AJAX 方法**——一行代码就能把远程内容填进 DOM 元素，适合加载 HTML 片段。

### jQuery AJAX 三种方法对比

| 方法                   | 特点                                     | 适用场景       |
| ---------------------- | ---------------------------------------- | -------------- |
| `$.get()` / `$.post()` | 简单快速，获取/提交数据                  | 基本请求       |
| `$.ajax()`             | 完全控制（method、headers、dataType 等） | 复杂需求       |
| `$().load()`           | 最简便，直接把内容塞进元素               | 加载 HTML 片段 |

------

## **Page 27: AJAX in the individual project – AJAX在个人项目中的应用**
> [!PDF|yellow] [[08CommunicatingWithAServer.pdf#page=27&selection=22,0,22,30&color=yellow|08CommunicatingWithAServer, p.27]]
> > AJAX in the individual project


> For **CITS5505 students**, the individual project requires you to show off an **AJAX request**. 对 **CITS5505 学生**，个人项目**需要展示一个 AJAX 请求**。

> As we haven't yet covered how to write your own server, the easiest way is to make a call to a **public API**. 由于还没有学习如何编写自己的服务器，最简单的方式是调用**公共 API**。

> You may find this list of public facing APIs useful (pick one without an API key!): https://github.com/public-apis/public-apis 可以使用这个公共 API 列表（选一个**不需要 API key** 的！）。

**简单示例 — 调用公共 API：**

```javascript
async function getJoke() {                                // 定义异步函数
  try {                                                   // try 捕获异常
    const response = await fetch(                         // await 等待响应
      "https://official-joke-api.appspot.com/random_joke" // 公共API(无需 key)
    );                                                    // 结束 fetch 参数
    const joke = await response.json();                   // await 解析 JSON
    document.getElementById("setup")                      // 获取 setup 元素
      .textContent = joke.setup;                          // 显示问题
    document.getElementById("punchline")                  // 获取 punchline 元素
      .textContent = joke.punchline;                      // 显示答案
  } catch (error) {                                       // 捕获错误
    console.error("Failed to fetch joke:", error);        // 打印错误
  }                                                       // 结束 catch
}                                                         // 结束函数
```

> ⚠️ **实用建议：** 选择公共 API 时优先考虑：
>
> 1. 不需要 API key（免注册）
> 2. 支持 CORS（否则浏览器会拦截）
> 3. 响应 JSON 格式（便于解析）

------

### Summary 总结

- **HTTP 是无状态协议（stateless protocol）**：每次请求-响应都独立，服务器不记忆过去交互（`P5`）
- **请求四方法**：GET（读取）、POST（创建/修改）、PUT（替换，幂等）、DELETE（删除）（`P6`）
- **响应状态码五类**：2xx 成功、3xx 重定向、4xx 客户端错误、5xx 服务器错误（`P7`）
- **JavaScript 单线程，但运行环境不是**——通过回调函数实现异步不阻塞（`P9`）
- **XMLHttpRequest（旧式）核心流程**：`new` → `open` → `onreadystatechange` → `send`；判断条件 `readyState==4 && status==200`（`P10–12`）
- **jQuery 简化**：`$.get`、`$.post`（`P14`）、`$.ajax`（`P25`）、`$().load`（`P26`）
- **Fetch API（2017 新方法）**：Promise 链 `.then().then().catch()`；配合 `async/await` 让异步代码看起来像同步（`P16–18`）
- **POST 发送 JSON 必须用 `JSON.stringify()`** 序列化 body（`P17`）
- **CORS**：浏览器安全机制，控制跨域请求；Fetch 内置，XHR 不内置（`P19`）
- **AJAX 是理念而非技术**：异步 HTTP 请求 + 结构化数据（JSON/XML）+ DOM 局部更新 = 页面不刷新就能动态变化（`P21–22`）
- **XML vs JSON**：JSON 更简洁、解析更方便（`JSON.parse`/`JSON.stringify`），是现代 Web 开发的首选格式（`P23–24`）
- **CITS5505 项目要求**：至少展示一个 AJAX 请求，推荐调用无需 API key 的公共 API（`P27`）