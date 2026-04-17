# **Ch08 Communicating with a Server 与服务器通信 — 完整复习讲解**

**对应 PDF：** `08CommunicatingWithAServer.pdf`，共 27 页 **完整性验证：** ✅ Page 1–27 全覆盖，按页码顺序讲解，无遗漏

------

# 1. Course Setup & Motivation 课程设置与动机 Page 1–3

## 1.1 Second Half of the Course 课程下半部分概览 Page 2

### 1.1Q 为什么本周是"通信"而不是先学写服务器？ Page 2 ★

- 课程设计遵循**渐进原则(Progressive Principle)**：先学"怎么和服务器对话"(how to talk to a server)，再学"怎么当服务器"(how to be a server)
- 路线：Week 6 通信(Communicating) → Week 8 建服务器(Creating server) → Week 9 数据库(Database) → Week 10 安全(Security) → Week 11 测试(Testing) → Week 12 公共 API 设计(Public APIs) → Week 13 部署(Deploying)
- 小组项目(Group Project)截止：**5月17日**，测试课后至少还有10天

**💡 核心洞察：** 浏览器与服务器的通信协议(HTTP)是 Web 全栈的"地基"，所有后续章节都依赖于此。

## 1.2 Communicating with a Server 通信动机 Page 3

### 1.2Q 为什么需要"页面加载后"继续与服务器通信？ Page 3 ★★

**之前的局限：** 之前的动态页面仅响应**本地浏览器事件(local browser events)**

- 例：用户点击按钮(clicking buttons)、页面加载(pages loading)

**现在的需求：** 页面加载后的**持续服务器通信(communicate with server after the page is loaded)**

- 收消息、点赞等即时更新(updating the page when someone sends you a message, liking a post)
- 提交表单存服务器(submitting a form and storing information in the server)

### 1.2Q 两种实现方案？ Page 3 ★

| 方案              | 特点                                                     | 何时用   |
| ----------------- | -------------------------------------------------------- | -------- |
| **HTTP requests** | 同样的请求协议(same HTTP as page loading)，请求-响应模式 | 本章重点 |
| **Web sockets**   | 持久双向连接，服务器可主动推送                           | 后续课程 |

**🎯 类比：** HTTP ≈ 打电话问图书管理员（问一句答一句）；WebSocket ≈ 电话挂着不断线（双方随时说话）。

### 📝 习题 1.1 ★★ Page 2–3

**题目：** 判断对错 — "只要 JavaScript 能响应本地事件就够了，不需要服务器通信。"

**答案：** ❌ 错误。

**解析：** 本地事件仅能处理浏览器内部动作（如点击）。但现代 Web 应用(modern web apps)需要：① 实时更新(real-time updates)——消息、点赞；② 数据持久化(data persistence)——表单提交必须存到服务器。

------

# 2. HTTP Protocol Fundamentals HTTP协议基础 Page 4–7

## 2.1 Structure of HTTP 请求响应结构 Page 5

### 2.1Q HTTP 是什么架构？什么是"无状态"？ Page 5 ★★★

- 使用**客户端-服务器架构(Client-Server Architecture)**
- 客户端发请求(request) → 服务器回响应(response) → 服务器**遗忘一切(forgets everything)** → 协议是**无状态的(stateless)**

**💡 Why 无状态？** 服务器若要记住每个客户端的所有交互，内存和复杂度会爆炸。无状态让服务器能轻易横向扩展（scale horizontally），但代价是：要"记住"用户需额外机制（cookie、session、token）。

### 2.1Q HTTP 请求和响应的完整结构？ Page 5 ★★★

**Request 请求结构（四部分）：**

```
GET /doc/test.html HTTP/1.1         // Request Line 请求行: 方法+URL+版本
Host: www.test101.com               // Request Headers 请求头 (键值对)
Accept: image/gif, image/jpeg, */*  // 可接受的MIME类型
User-Agent: Mozilla/4.0             // 客户端标识
Content-Length: 35                  // 请求体长度
                                    // 空行 (separator)
bookId=12345&author=Tan+Ah+Teck     // Request Message Body 请求体
```

**Response 响应结构（四部分）：**

```
HTTP/1.1 200 OK                     // Status Line 状态行
Date: Sun, 08 Feb xxxx 01:11:12 GMT // Response Headers 响应头
Server: Apache/1.3.29 (Win32)       // 服务器标识
Content-Type: text/html             // 响应体类型
                                    // 空行 (separator)
<h1>My Home page</h1>               // Response Message Body 响应体
```

**结构共通点：** 状态/请求行(Status/Request Line) + 头部(Headers) + 空行(Blank line) + 消息体(Message Body)

## 2.2 HTTP Methods HTTP请求方法 Page 6

### 2.2Q 四种标准方法的用途和幂等性？ Page 6 ★★★

| Method 方法 | Purpose 用途                                       | Idempotent 幂等 |
| ----------- | -------------------------------------------------- | --------------- |
| **GET**     | 从服务器获取数据(retrieve data) — 加载网页         | ✅               |
| **POST**    | 创建/修改服务器数据(create/alter data) — 提交表单  | ❌               |
| **PUT**     | 替换服务器数据(replace data) — "执行两次=执行一次" | ✅               |
| **DELETE**  | 删除服务器数据(delete data)                        | ✅               |

### 2.2Q 什么是"幂等(Idempotent)"？ Page 6 ★★★

**定义：** 幂等(Idempotent) = 操作执行多次与执行一次效果相同。

**🎯 类比：**

- PUT ≈ 贴标签覆盖：贴 1 次和贴 100 次，最后都是那张标签 ✅ 幂等
- POST ≈ 盖章：盖 1 次留 1 个印，盖 100 次留 100 个印 ❌ 不幂等

### 2.2Q 为什么 PDF 说"HTTP method 只是个字符串"？ Page 6 ★

- 协议层面，方法字段(method field)就是字符串(string)，可以是任意值
- 只要**客户端和服务器达成一致(as long as both agree)**就行
- 但实际遵循标准约定(GET/POST/PUT/DELETE)便于互操作(interoperability)

**⚠️ 批判思维：** 虽然能自定义方法，但不推荐 —— 代理(proxy)、缓存(cache)、框架(framework)都基于标准方法做优化，自定义会失效。

## 2.3 HTTP Status Codes 状态码 Page 7

### 2.3Q 状态码的五大分类？ Page 7 ★★★

| 类别                            | 含义     | 核心状态码(Key Codes)                                 |
| ------------------------------- | -------- | ----------------------------------------------------- |
| **1xx** Informational 信息性    | 继续处理 | 100 Continue                                          |
| **2xx** Success 成功            | 成功     | **200 OK** ★, **201 Created** ★, **204 No Content** ★ |
| **3xx** Redirection 重定向      | 需跳转   | 301 Moved Permanently, **304 Not Modified** ★         |
| **4xx** Client Error 客户端错误 | 你错了   | **400** ★, **401** ★, **403** ★, **404** ★, **409** ★ |
| **5xx** Server Error 服务器错误 | 我错了   | **500 Internal Server Error** ★                       |

**🎯 记忆口诀：** **2 成功 3 跳转 4 你错 5 我错**

### 2.3Q 区分易混淆状态码？ Page 7 ★★

- **401 vs 403：** 401 = 未认证(Unauthorized) — 根本没登录；403 = 已认证但无权限(Forbidden)
- **301 vs 302：** 301 = 永久移动(Moved Permanently) — 搜索引擎会更新；302 = 临时重定向
- **200 vs 201 vs 204：** 200 = OK 带数据；201 = 已创建(Created) 资源新增成功；204 = 成功但无内容(No Content)

### 📝 习题 2.1 ★★★ Page 5–7

**题目：** 用户提交注册表单后收到 `409 Conflict`，这说明什么？

**答案：** 用户名或邮箱已被占用(conflict with existing resource)。服务器拒绝创建重复资源。

**解析：** 4xx 是客户端错误；409 特指**资源冲突**。不同于 400（格式错）、401（未登录）、403（无权限）、404（不存在）。注册场景最常触发。

### 📝 习题 2.2 ★★★ Page 6

**题目：** 以下场景应该用哪种 HTTP 方法？ ① 浏览商品列表　② 添加商品到购物车　③ 修改收货地址（完整替换）　④ 删除一条评论

**答案：** ① GET　② POST　③ PUT　④ DELETE

**解析：** 浏览=读取(GET)；添加=创建新资源(POST，可能加多次)；修改地址=完整替换(PUT，幂等)；删除=DELETE。

------

# 3. XMLHttpRequest (Old Style) 旧式请求 Page 8–12

## 3.1 Asynchronous Communication 异步通信 Page 9

### 3.1Q 为什么需要"异步"？ Page 9 ★★★

**三层逻辑：**

1. **问题：** 发请求时不知道服务器何时响应(do not know when, if ever, the server will respond)
2. **矛盾：** JavaScript 是**单线程的(single-threaded)** — 必须按顺序执行每条语句，"看起来"请求会阻塞脚本(block other scripts)
3. **解法：** JavaScript 运行的**环境(environment)并非单线程** — 可传入**回调函数(callback function)**，服务器响应时再执行

### 3.1Q 回调模式(Callback Pattern)的标准写法？ Page 9 ★★★

**异步函数签名(Async Function Signature)：**

```javascript
Object.asyncFn(parameters, callbackFunction)  // 异步函数标准形式
```

**回调签名：** 通常接收 `(error, response)` 两个参数(parameters)

**幻灯片原代码(Original Slide Code)：**

```javascript
function big_Request(data, callback){              // 定义异步函数,接收数据和回调
  var req = request_to_server(data);               // 向服务器发请求
  //register_event_listener(req, callback);        // 注册事件监听器
  //when server responds:                          // 服务器响应时:
    callback(req.error, req.response);             // 触发回调 传入(错误,响应)
}

big_Request(myData, function(error, data){        // 调用异步函数,传入匿名回调
  if(error) alert(error);                          // 有错误则弹窗
  else render(data);                               // 否则渲染数据
});
```

### 3.1Q 事件循环(Event Loop)如何工作？ Page 9 ★★

**幻灯片图示要点：**

```
请求(Requests) ──→ [EVENT LOOP 事件循环] ──→ 耗时操作(Intensive Operation)
                    (single thread)          ├─ File System 文件系统
                         ↑                   ├─ Database 数据库
                         ↓                   └─ Computation 计算
                    触发回调(Trigger Callback)
                    ←── 操作完成(Operation Complete) 注册回调(Register Callback)
```

**🎯 类比：** 餐厅点餐 — 你点菜(发请求)后去座位等(主线程空闲)，菜好了服务员叫你(回调触发)。不需要你站在厨房门口等。

### 📝 习题 3.1 ★★★ Page 9

**题目：** 以下代码的输出顺序？

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

**答案：** A → C → B

**解析：** 即使 `setTimeout` 延时是 0ms，它也是**异步任务(async task)**，会被放入任务队列(task queue)。同步代码 A、C 先执行完，事件循环(event loop)空闲后才取出 B 执行。这正是 P9 说的"单线程但环境不是单线程"。

## 3.2 XMLHttpRequest 对象 Page 10

### 3.2Q XHR 对象的核心方法？ Page 10 ★★★

| 方法(Method)                          | 说明(Description)                                         |
| ------------------------------------- | --------------------------------------------------------- |
| `new XMLHttpRequest()`                | 创建 XHR 对象(Create new XHR object)                      |
| `open(method, url, async, user, psw)` | 配置请求(Specify request)：方法/URL/是否异步/可选用户密码 |
| `send()`                              | 发送请求(Send request) — 用于 GET                         |
| `send(string)`                        | 发送带数据的请求(Send with data) — 用于 POST              |
| `setRequestHeader()`                  | 设置请求头(Add header key/value)                          |
| `abort()`                             | 取消请求(Cancel current request)                          |
| `getAllResponseHeaders()`             | 返回所有响应头(Return all headers)                        |
| `getResponseHeader()`                 | 返回指定响应头(Return specific header)                    |

### 3.2Q XHR 对象的核心属性？ Page 10 ★★★

| 属性(Property)       | 说明(Description)                                     |
| -------------------- | ----------------------------------------------------- |
| `onreadystatechange` | readyState 变化时的回调(callback)                     |
| `readyState`         | **0=未初始化, 1=已连接, 2=已接收, 3=处理中, 4=完成★** |
| `status`             | HTTP 状态码(200/403/404)                              |
| `statusText`         | 状态文本("OK"/"Not Found")                            |
| `responseText`       | 响应数据(字符串形式)                                  |
| `responseXML`        | 响应数据(XML 形式)                                    |

**⚠️ 考试关键(Exam Key)：** 判断请求成功必须同时满足 `readyState == 4 && status == 200`

## 3.3 Sending HTTP Request 发送请求 Page 11

### 3.3Q GET 请求怎么写？ Page 11 ★★

```javascript
xhttp.open("GET",                                  // 方法: GET
  "demo_get2.asp?fname=Henry&lname=Ford",          // URL + 查询参数(query string)
  true);                                           // 第三参数 true = 异步(async)
xhttp.send();                                      // GET 无 body,直接发送
```

**特点：** 参数拼在 URL 里（Query String），没有 Body

### 3.3Q POST 请求怎么写？ Page 11 ★★

```javascript
xhttp.open("POST", "ajax_test.asp", true);         // 打开 POST 请求,异步
xhttp.setRequestHeader("Content-type",             // 必须设置头(header)告知数据格式
  "application/x-www-form-urlencoded");            // 表单编码格式
xhttp.send("fname=Henry&lname=Ford");              // 数据放在 body 中发送
```

**特点：** 参数在 Body 里，必须设置 `Content-type` 告知服务器数据格式

### 3.3Q `open()` 第三参数的含义？ Page 11 ★★

- `true` = **异步(Asynchronous)** — 推荐，不阻塞浏览器
- `false` = **同步(Synchronous)** — 会冻结 UI，现代浏览器已警告弃用

## 3.4 Receiving HTTP Response 接收响应 Page 12

### 3.4Q 完整的 XHR 响应处理代码？ Page 12 ★★★

```javascript
function loadDoc() {                                  // 定义加载函数
  var xhttp = new XMLHttpRequest();                   // 1. 创建 XHR 对象
  xhttp.onreadystatechange = function() {             // 2. 设置状态变化回调
    if (this.readyState == 4 &&                       // 3. 状态=4(完成)
        this.status == 200) {                         //    且 status=200(成功)
      document.getElementById("demo").innerHTML =     // 4. 获取 DOM 元素
        this.responseText;                            //    写入响应文本
    }                                                 // 结束 if
  };                                                  // 结束回调
  xhttp.open("GET", "ajax_info.txt", true);           // 5. 配置 GET 请求,异步
  xhttp.send();                                       // 6. 发送请求
}
```

### 3.4Q 为什么必须同时检查 `readyState == 4` AND `status == 200`？ Page 12 ★★★

**原因(Why)：**

- `onreadystatechange` 在每次状态变化时都触发(1→2→3→4)，会触发多次
- `readyState == 4` 只表示**请求完成(finished)**，但可能是 404 / 500 错误
- `status == 200` 才保证**请求成功(successful)**
- **两者都要** = 既完成又成功

**🎯 类比：** 快递状态 — "已送达(readyState=4)" ≠ "包裹完好(status=200)"。既要送达又要完好才能签收。

### 📝 习题 3.2 ★★★ Page 10–12

**题目：** 补全代码，使用 XHR 向 `/data.json` 发 GET 请求，成功后把结果显示在 `#result`：

```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  // 补全这里
};
xhr.open(___, ___, ___);
xhr.send();
```

**答案：**

```javascript
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("result").innerHTML = this.responseText;
  }
};
xhr.open("GET", "/data.json", true);
xhr.send();
```

**解析：** 必须检查双条件；`open()` 第三参数 `true` = 异步；GET 无需 body。

------

# 4. jQuery HTTP Requests jQuery简化请求 Page 13–14

## 4.1 jQuery and HTTP Requests jQuery封装 Page 14

### 4.1Q jQuery 的 `$.get()` 怎么用？ Page 14 ★★

```javascript
$("button").click(function(){                       // 按钮点击事件
  $.get("demo_test.asp",                            // 发 GET 请求到 URL
        function(data, status){                     // 回调: (data=响应数据, status=状态)
    alert("Data: " + data +                         // 显示数据
          "\nStatus: " + status);                   // 显示状态
  });
});
```

### 4.1Q `$.post()` 怎么用？ Page 14 ★★

```javascript
$("button").click(function(){                       // 按钮点击事件
  $.post("demo_test_post.asp",                      // 发 POST 请求到 URL
  {                                                 // 第二参数: 要发送的数据(对象)
    name: "Donald Duck",                            // 字段: 姓名
    city: "Duckburg"                                // 字段: 城市
  },
  function(data, status){                           // 第三参数: 回调函数
    alert("Data: " + data +                         //
          "\nStatus: " + status);                   //
  });
});
```

### 4.1Q jQuery 与原生 XHR 对比？ Page 14 ★★

| 维度                     | 原生 XHR             | jQuery $.get/$.post |
| ------------------------ | -------------------- | ------------------- |
| 代码行数(Lines of code)  | 6+ 行                | 2-3 行              |
| 管理 readyState          | 手动(manual)         | 自动(automatic)     |
| 回调(Callback)           | `onreadystatechange` | 直接传回调          |
| 错误处理(Error handling) | 手动检查 status      | `$.get().fail()`    |

**💡 核心洞察：** jQuery 是一层**抽象(abstraction)** — 把繁琐的 XHR 细节封装(wrap)起来，让开发者专注业务逻辑。

------

# 5. Fetch API (New Style) 现代请求方式 Page 15–19

## 5.1 The Fetch API Fetch核心 Page 16

### 5.1Q Fetch API 解决了什么问题？ Page 16 ★★★

**Why Fetch？**

- **2017 年**加入 JavaScript(added to JavaScript in 2017)
- 提升**安全性(security)**
- 用**现代 JS 特性(modern features)**简化 API — Promise、箭头函数

### 5.1Q Fetch 的基本用法？ Page 16 ★★★

```javascript
fetch("https://bubble.tea.com/api/drinks")          // 1. 发起 GET 请求(默认方法)
  .then(response => response.json())                // 2. 第1个 then: 解析为 JSON
  .then(data => {                                   // 3. 第2个 then: 处理数据
    console.log(data);                              //    用数据更新 UI
  })
  .catch(error =>                                   // 4. catch: 捕获任何错误
    console.error('Error:', error));
```

### 5.1Q 为什么需要**两个** `.then()`？ Page 16 ★★★

- 第 1 个 `.then`：`fetch()` 返回一个 Promise，解决为 **Response 对象**(response object，含状态码、头部等元信息)
- `response.json()` **再返回一个 Promise** — 因为解析 body 本身也是异步的
- 第 2 个 `.then`：拿到真正的**数据对象(data object)**

**🎯 类比：** 拿快递 —

1. 第一步拿到**包裹**(Response 对象，外面有物流信息)
2. 第二步**拆包裹**(`.json()`)，里面才是**商品**(data)

## 5.2 Fetch with Headers & Body 带头和体 Page 17

### 5.2Q 如何用 Fetch 发 POST 请求？ Page 17 ★★★

```javascript
fetch('https://bubble.tea.com/api/order', {        // URL + 配置对象(options)
    method: 'POST',                                // 指定方法为 POST
    headers: {                                     // 设置请求头
        'Accept': 'application/json',              // 期望接收: JSON
        'Content-Type': 'application/json'         // 发送内容类型: JSON
    },
    body: JSON.stringify(                          // body 必须是字符串
      {quantity: 1, drink: 'Textual content'})     // 对象转 JSON 字符串
});
```

### 5.2Q 为什么 body 必须用 `JSON.stringify()`？ Page 17 ★★★

**Why?** HTTP 协议传输的是**字节流/文本(byte stream / text)** — 不能直接承载 JS 对象。必须先**序列化(serialize)** 为 JSON 字符串才能发送。

### 📝 习题 5.1 ★★★ Page 17

**题目：** 以下代码哪里有错？

```javascript
fetch('/api/user', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: {name: "Tom", age: 20}
});
```

**答案：** `body` 没有 `JSON.stringify()`！

**修正：**

```javascript
body: JSON.stringify({name: "Tom", age: 20})
```

**解析：** HTTP 只能传字符串/字节，JS 对象必须序列化(serialize)。

## 5.3 Async and Await 现代异步语法 Page 18

### 5.3Q async/await 与 Promise 链的等价关系？ Page 18 ★★★

**Promise 链写法(Old):**

```javascript
function loadDrinks() {
  fetch("https://bubble.tea.com/api/drinks")       // 发请求
    .then(response => response.json())              // 解析 JSON
    .then(data => {
      console.log(data);                            // 处理数据
    })
    .catch(error => console.error('Error:', error));// 捕获错误
}
```

**⬇ 等价的 async/await(New):**

```javascript
async function loadDrinks() {                      // 关键字 async
    try {                                          // try 块 = Promise 链
        const response = await fetch(              // await 等待 fetch
          "https://bubble.tea.com/api/drinks");    //
        const data = await response.json();        // await 等待 JSON 解析
        console.log(data);                         // 处理数据
    }
    catch (error) {                                // catch = .catch()
        console.error('Error:', error);            //
    }
}
```

### 5.3Q async/await 相比 Promise 链的优势？ Page 18 ★★

- **可读性(Readability)：** 代码看起来像同步(synchronous)代码，按上下顺序读
- **错误处理(Error handling)：** 统一用 `try/catch`，不必每个 Promise 都 `.catch()`
- **调试(Debugging)：** 可以在 `await` 处打断点(breakpoint)

**⚠️ 限制：** `await` 只能在 `async` 函数内部使用(仅顶层模块例外)。

## 5.4 CORS 跨域资源共享 Page 19

### 5.4Q CORS 是什么？ Page 19 ★★

- **CORS = Cross-Origin Resource Sharing 跨域资源共享**
- **Fetch API 内置(built into)** CORS 机制；XMLHttpRequest 不内置
- 作用：**原始服务器(server who provided the original page)** 控制浏览器能从哪些**其他服务器(other servers)** 加载资源

**🎯 类比：** 门禁系统 — 你家大门(原始服务器)决定哪些快递公司(其他服务器)可以进来送货。没授权的快递被浏览器直接拒收。

### 5.4Q 遇到 CORS 问题怎么办？ Page 19 ★

**实用建议(Practical Tip)：** 项目中遇 CORS 问题可用**旧的 XMLHttpRequest 机制(old XMLHttpRequest mechanism)**绕过。详细细节可参考 MDN CORS 指南。

### 📝 习题 5.2 ★★ Page 18

**题目：** 下面代码报错 `await is only valid in async functions`，如何修复？

```javascript
function getData() {
  const r = await fetch("/api");
  return await r.json();
}
```

**答案：** 在 `function` 前加 `async`：

```javascript
async function getData() {
  const r = await fetch("/api");
  return await r.json();
}
```

**解析：** `await` 只能出现在标记为 `async` 的函数内部。

------

# 6. AJAX 异步数据交换模式 Page 20–22

## 6.1 AJAX Motivation AJAX动机 Page 21

### 6.1Q AJAX 是什么？ Page 21 ★★★

- **AJAX** = **A**synchronous **J**avaScript **A**nd **X**ML 异步 JavaScript 与 XML
- **是一种方法/理念(approach)而非技术(technology)**
- **由 Jesse James Garrett 于 2005 年提出(coined in 2005)**

### 6.1Q AJAX 的名字为什么具有"误导性"？ Page 21 ★★

**误导点：** 名字里含 XML，但**实际数据格式同样常见用**：

- **Plain text 纯文本**
- **JSON text**

### 6.1Q AJAX 的核心特征？ Page 21 ★★★

1. 发送**异步 HTTP 请求(asynchronous HTTP requests)** 到远程服务器
2. 接收**结构化数据(structured data)** — XML 或 JSON
3. 用 JavaScript 解析(parse)数据
4. 通过 **DOM 动态更新网页(dynamically update a webpage using the DOM)**

### 6.1Q AJAX 的关键好处？ Page 21 ★★★

- 每个 AJAX 请求是**单次 HTTP 协议交换(single HTTP protocol exchange)**
- **异步(asynchronously)** 执行，**等待响应不冻结环境(does not freeze the environment)**
- 服务器响应作为**数据对象(data object, XML or JSON)**，**融入当前页面(factored into the current page)**

**💡 核心洞察：** AJAX 实现了 Web 应用从"整页刷新(full page reload)"到"**局部更新(partial update)**"的革命 — Gmail、Google Maps 都是里程碑。

## 6.2 AJAX Callbacks AJAX时序图 Page 22

### 6.2Q AJAX 的完整时序流程？ Page 22 ★★★

**幻灯片时序图(Sequence Diagram)：**

```
HTML Page    JavaScript       XMLHttpRequest         Server
   │            │                  │                   │
   │─onkeyup──▶│                  │                   │  用户事件
   │            │──<<create>>────▶│                   │  创建XHR
   │            │──URL=complete?──▶│                   │  设URL
   │            │  id=Murr         │                   │
   │            │──set callback──▶│                   │  设回调
   │            │                  │──Get 请求────────▶│  发送
   │            │                  │                   │ (处理)
   │            │                  │◀──XML 响应────────│  返回
   │            │◀──call callback──│                   │  触发回调
   │◀──update DOM─│                 │                   │  更新DOM
```

**🎯 为什么用 `onkeyup`？** 这是**自动补全(autocomplete)场景** — 每敲一键就发请求，实时获取建议。Google 搜索建议正是如此。

#### AJAX 异步请求流程解析

这段图示描述的是 **AJAX（Asynchronous JavaScript and XML）** 的完整工作流程，以"自动补全搜索框"为例（用户输入 `Murr`，实时查询匹配的员工名）。

------

##### 流程分解

###### 第一步：用户触发事件

```
HTML Page ──onkeyup──▶ JavaScript
```

用户在输入框中每按一个键，触发 `onkeyup` 事件，将控制权交给 JavaScript。

------

###### 第二步：JavaScript 创建 XHR 对象

```javascript
const xhr = new XMLHttpRequest(); // <<create>>
```

JS 实例化一个 `XMLHttpRequest` 对象，这是浏览器与服务器通信的核心工具。

------

###### 第三步：配置请求

```javascript
xhr.open("GET", "complete?id=Murr"); // 设置 URL
xhr.onreadystatechange = callback;   // 设置回调函数
```

- **URL** 携带查询参数 `id=Murr`，告诉服务器要查什么。
- **回调函数** 提前注册好，等响应到来时自动执行。

------

###### 第四步：发送请求（异步）

```javascript
xhr.send();
```

XHR 向服务器发出 `GET complete?id=Murr` 请求。此时 **JS 不会阻塞等待**，页面保持可交互状态——这正是"异步"的核心价值。

------

###### 第五步：服务器处理并响应

服务器查询数据库后，返回 XML 格式数据：

```xml
<employees>
  <employee>...</employee>
</employees>
```

------

###### 第六步：回调触发，更新页面

```
XHR ──call callback──▶ JS ──update DOM──▶ HTML Page
```

收到响应后，之前注册的回调函数被自动调用，JS 解析 XML 数据并更新 DOM，**页面局部刷新，无需整页重载**。

------

##### 核心思想总结

| 概念         | 说明                                 |
| ------------ | ------------------------------------ |
| **异步**     | 请求发出后 JS 不等待，用户可继续操作 |
| **回调机制** | 响应到达时自动触发预先注册的函数     |
| **局部更新** | 只修改 DOM 中需要变化的部分          |
| **XHR 对象** | 浏览器端负责收发 HTTP 请求的核心对象 |

这套机制是现代 Web 交互（搜索建议、点赞、无限滚动等）的技术基础，今天通常用更简洁的 `fetch()` API 替代 XHR，但原理完全相同。



### 📝 习题 6.1 ★★★ Page 21–22

**题目：** 判断对错： ① AJAX 必须使用 XML 传输数据 ② AJAX 是一种技术 ③ AJAX 请求必须异步

**答案：** 全错 ❌❌✅ ① 错 — AJAX 也常用 JSON、纯文本； ② 错 — AJAX 是**方法/理念(approach)**，不是技术； ③ 正确 — 每个 AJAX 请求必须异步，否则会冻结环境。

------

# 7. Data Formats: XML vs JSON 数据格式对比 Page 23–24

## 7.1 XML 可扩展标记语言 Page 23

### 7.1Q 为什么需要数据格式？ Page 23 ★★

**Why?** JavaScript 与服务器通信需要**通用格式(universal format)即协议(protocol)**。两种最常见：**XML** 和 **JSON**。

### 7.1Q XML 的特点？ Page 23 ★★

- **XML = eXtensible Markup Language 可扩展标记语言** eXtensible Markup Language
- 形式类似 HTML(similar to HTML)
- 所有数据在**命名标签的树结构(tree of named tags)** 中
- 设计尽可能通用(as general as possible)
- **只含数据，不可执行(only contains data, not executable)**

```xml
<employees>                                       <!-- 根元素 -->
  <employee>                                      <!-- 单个员工 -->
    <firstName>John</firstName>                   <!-- 名字 -->
    <lastName>Doe</lastName>                      <!-- 姓氏 -->
  </employee>
  <employee>
    <firstName>Anna</firstName>
    <lastName>Smith</lastName>
  </employee>
</employees>
```

## 7.2 JSON JavaScript对象表示法 Page 24

### 7.2Q JSON 的定义和格式？ Page 24 ★★★

- **JSON = JavaScript Object Notation**
- 用 JS 语法存储数据 — 对象字面量(object literal)形式

```json
{"employees": [                                    // 对象含数组
  { "firstName":"John", "lastName":"Doe" },         // 元素=对象
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}
```

### 7.2Q JSON 的特点？ Page 24 ★★★

- **更简洁(more succinct)**
- **可以包含数组(can contain arrays)**
- **不应包含函数(should not include functions)**

### 7.2Q 如何解析数据？ Page 24 ★★★

- **XML 和 JSON 字符串都可通过解析器(parsers)转回 JS 对象**
- JSON 用 `JSON.parse`
- 解析后的**对象可更新 DOM(update the DOM)**

```javascript
var jsonStr = '{"name":"Tom","age":20}';          // JSON 字符串
var obj = JSON.parse(jsonStr);                     // 字符串 → JS 对象
console.log(obj.name);                             // "Tom"

var person = {name: "Alice", age: 25};             // JS 对象
var str = JSON.stringify(person);                  // 对象 → JSON 字符串
```

### 7.2Q XML vs JSON 全面对比？ Page 23–24 ★★★

| 维度                | XML                     | JSON                     |
| ------------------- | ----------------------- | ------------------------ |
| 语法(Syntax)        | `<tag>value</tag>` 标签 | `{"key":"value"}` 键值对 |
| 简洁性(Conciseness) | 冗长(verbose)           | ★ 简洁                   |
| 数组(Arrays)        | 需嵌套标签模拟          | ★ 原生 `[]`              |
| 解析(Parsing)       | 较复杂                  | ★ `JSON.parse()` 一行    |
| 函数(Functions)     | ❌                       | ❌ 不应含                 |
| 使用场景            | 遗留系统、SOAP          | 现代 Web 主流            |

### 📝 习题 7.1 ★★★ Page 24

**题目：** 写出以下 XML 的等价 JSON：

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

**解析：** 树结构 → 对象嵌套；标签重复 → 数组；值类型（数字 2020）JSON 可直接用数字，不用字符串。

### 📝 习题 7.2 ★★ Page 24

**题目：** JSON 和 JS 对象字面量有什么区别？

**答案：**

- JSON 键**必须**用双引号
- JSON 值不能是函数、`undefined`、注释
- JSON 必须是纯数据结构

**解析：** JSON 是 JS 对象字面量的**严格子集(strict subset)** — 所有合法 JSON 都是合法 JS 对象字面量，反之不成立。

------

# 8. jQuery AJAX jQuery的AJAX函数 Page 25–26

## 8.1 $.ajax() 最灵活的方法 Page 25

### 8.1Q $.ajax() 的完整用法？ Page 25 ★★

**幻灯片原代码(员工考勤系统)：**

```javascript
$( "#dtr" ).click(function() {                                  // #dtr 点击
    $.ajax({                                                    // 调用 $.ajax
        url: 'employees/profile/dtr/data?id=...',               // 请求 URL
        dataType: 'json',                                       // 期望 JSON
        success: function (data) {                              // 成功回调
            console.log(data);
            $('#datatable tr').not(':first').not(':last').remove(); // 清除旧行
            var html = '';
            for(var i = 0; i < data.length; i++){               // 遍历数据
                html += '<tr>' +
                    '<td>' + data[i].famin + '</td>' +          // AM 签到
                    '<td>' + data[i].famout + '</td>' +         // AM 签退
                    '<td>' + data[i].fpmin + '</td>' +          // PM 签到
                    '<td>' + data[i].fpmout + '</td>' +         // PM 签退
                    '</tr>';
            }
            $('#datatable tr').first().after(html);             // 插入新行
        },
        error: function (data) {}                               // 失败回调
    });
});
```

**幻灯片展示的 UI 表格：**

| DATE | #    | AM IN | AM OUT | PM IN | PM OUT |
| ---- | ---- | ----- | ------ | ----- | ------ |
| Wed  | 1    | 07:35 | 12:07  | 12:35 | 6:19   |

**🎯 场景：** 员工考勤系统 — 点按钮 AJAX 拿 JSON → 动态构建表格行 → 插入页面 → 不刷新。

## 8.2 .load() 最简方法 Page 26

### 8.2Q .load() 怎么用？ Page 26 ★★

```javascript
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("demo_test.txt",                // 加载 URL 内容到 #div1
      function(responseTxt, statusTxt, xhr){        // 回调参数
        if(statusTxt == "success")                  // 成功
          alert("External content loaded successfully!");
        if(statusTxt == "error")                    // 失败
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
  });
});
```

### 8.2Q jQuery 三种 AJAX 方法对比？ Page 25–26 ★★

| 方法                   | 特点                   | 适用场景       |
| ---------------------- | ---------------------- | -------------- |
| `$.get()` / `$.post()` | 简单快速               | 基本 GET/POST  |
| `$.ajax()`             | 完全控制(full control) | 复杂需求       |
| `$().load()`           | 一行直接填充 DOM       | 加载 HTML 片段 |

**💡 核心洞察：** 从 `$.load()` → `$.get/post()` → `$.ajax()`，灵活性递增，简洁性递减。根据需求选择合适抽象层级。

### 📝 习题 8.1 ★★ Page 26

**题目：** 以下哪种方法最适合"点击按钮后把 `/about.html` 的内容加载到 `#container` 中"？

A) `$.ajax()`　B) `$.get()`　C) `$().load()`　D) `XMLHttpRequest`

**答案：** C

**解析：** `$().load()` 专为此场景设计 — 一行代码完成"发请求 + 填充 DOM"，无需手动操作 innerHTML。

------

# 9. AJAX in the Individual Project 个人项目应用 Page 27

## 9.1 AJAX 在 CITS5505 项目中 Page 27

### 9.1Q CITS5505 学生的项目要求？ Page 27 ★

- 需**展示一个 AJAX 请求(show off an AJAX request)**
- 因为尚未学习写服务器，最简单的方式是**调用公共 API(public API)**
- 推荐列表：[github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)
- **挑选不需要 API key 的 API！(pick one without an API key!)**

### 9.1Q 简单示例：调用公共 API

```javascript
async function getJoke() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"); // 公共API
    const joke = await response.json();                     // 解析JSON
    document.getElementById("setup").textContent = joke.setup;
    document.getElementById("punchline").textContent = joke.punchline;
  } catch (error) {
    console.error(error);
  }
}
```

**⚠️ 实用建议：** 选择公共 API 时优先：① 无 API key；② 支持 CORS；③ 返回 JSON。

------

# 10. 应试要点总结 Exam Essentials

## 10.1 必背概念清单(Must-Memorize) ★★★

| 概念                             | 关键点                         | Page |
| -------------------------------- | ------------------------------ | ---- |
| **Stateless 无状态**             | 服务器不记得之前的请求         | P5   |
| **Idempotent 幂等**              | PUT/GET/DELETE 是；POST 不是   | P6   |
| **Status Codes 状态码**          | 2/3/4/5 的含义；200/404/500    | P7   |
| **Single-threaded 单线程**       | JS 单线程，环境非单线程        | P9   |
| **Callback Pattern 回调模式**    | `(error, response)`            | P9   |
| **readyState==4 && status==200** | XHR 成功双条件                 | P12  |
| **Promise Chain**                | `.then().then().catch()`       | P16  |
| **JSON.stringify**               | body 发送前必须序列化          | P17  |
| **async/await**                  | 必须在 async 函数内用 await    | P18  |
| **CORS**                         | Fetch 内置，XHR 不内置         | P19  |
| **AJAX is an approach**          | 不是技术，可用 XML/JSON/纯文本 | P21  |

## 10.2 常见易混淆点(Common Confusions)

| 易混淆                      | 区分关键                        |
| --------------------------- | ------------------------------- |
| 401 vs 403                  | 未登录 vs 已登录无权限          |
| PUT vs POST                 | 幂等替换 vs 非幂等创建          |
| XML vs JSON                 | 标签树 vs 键值对；JSON 简洁首选 |
| synchronous vs asynchronous | 阻塞 vs 非阻塞                  |
| JSON vs JS 对象字面量       | 键必须双引号 vs 可省            |

## 10.3 核心代码模板(Code Templates to Memorize)

**XHR 模板：**

```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // 处理 this.responseText
  }
};
xhr.open("GET", url, true);
xhr.send();
```

**Fetch + async/await 模板：**

```javascript
async function load() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // 使用 data
  } catch (error) {
    console.error(error);
  }
}
```

**Fetch POST 模板：**

```javascript
fetch(url, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)  // 必须 stringify!
});
```

## 10.4 技术演进脉络(Technical Evolution)

```
XMLHttpRequest (旧)          jQuery $.ajax (中期)        Fetch + async/await (现代)
     ↓                            ↓                            ↓
 冗长、回调地狱              封装、简化            Promise、内置 CORS、现代语法
     |                            |                            |
 readyState 管理               自动化              响应式、可读性好
```

## 10.5 最后复习清单(Final Checklist)

- ☑ 能画出 HTTP 请求/响应结构图(含 Request Line、Headers、空行、Body)
- ☑ 能默写四种 HTTP 方法及幂等性
- ☑ 能默写状态码分类及 5 个核心码(200/400/401/404/500)
- ☑ 能解释"单线程+事件循环"为何能异步
- ☑ 能写出完整 XHR 代码(含 `readyState==4 && status==200` 判断)
- ☑ 能把 Promise 链改写为 async/await
- ☑ 能区分 XML vs JSON，写出两者的员工示例
- ☑ 能解释 AJAX 是理念不是技术，能说出三个核心特征
- ☑ 能说出 CORS 的作用及 Fetch 内置这一事实
- ☑ 能列出 jQuery 三种 AJAX 方法并说明适用场景

**🎯 答题策略：** 遇到代码题优先考虑 `readyState==4 && status==200`、`JSON.stringify`、`async/await` 三大陷阱。概念题紧扣"无状态"、"幂等"、"异步"、"回调"四大关键词展开。