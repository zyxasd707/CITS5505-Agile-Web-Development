# Page 9: Asynchronous Communication — 异步通信 ★★流程图逐步解读 | Step-by-Step Breakdown

---

## 🎬 把整个过程想象成"点外卖"

> 你 = JS主线程 | 外卖平台 = 浏览器底层 | 餐厅 = 服务器

---

## 第①步 — 打电话点餐 | Call Made

```
fetchUser(1, callback) 被调用
```

**发生了什么：** 你拿起电话，告诉外卖平台：

> "帮我查一下用户1号的信息，查到了就执行这个回调函数通知我。"

📌 关键：你**同时把回调函数交出去了**，就像告诉外卖平台"送到了发短信给我"。

---

## 第②步 — 挂掉电话，继续干别的 | Non-Blocking

```
├─ setTimeout 注册定时器 → 交给浏览器
│                          (不阻塞！Non-blocking!)
```

**发生了什么：**

```
你（JS主线程）          外卖平台（浏览器底层）
      │                        │
      │── 委托计时任务 ────────▶│ ⏱ 开始倒计时1秒
      │                        │
      │ ← 继续做其他事情        │ （你不用等！）
      ▼                        ▼
  执行其他代码              悄悄计时中...
```

🔑 **这就是"非阻塞"的核心：** 你没有傻站在门口等外卖，而是去做了别的事。

---

## 第③步 — 1秒到了，外卖到门口 | Timer Fires

```
⏱ 1秒后...
├─ 浏览器触发回调 Browser fires callback
```

**发生了什么：** 浏览器计时结束，把任务放回 JS 的待办队列：

> "嘿，1秒到了，该执行你的回调了！"

---

## 第④步 — 查数据库 | Query DB

```
├─ request_to_server(1)
│    → { error: null, response: {name:"Alice"} }
```

**发生了什么：**

```
request_to_server(1) 去查 db：

db = {
  1: { name: "Alice", age: 22 },  ← 找到了！
  2: { name: "Bob",   age: 25 },
}

返回 → { error: null, response: {name:"Alice", age:22} }
              ↑
          null = 没有错误 = 成功
```

---

## 第⑤步 — 回调被触发，走哪条路？| Callback Decides

```
└─ callback(null, {name:"Alice"})
         │
         └─ error? No → render(data) → 页面显示 "Name: Alice, Age: 22"
```

**发生了什么：**

```
callback 收到两个参数：
┌─────────────────────────────────────┐
│  第1个参数 error  = null   → 没错误  │
│  第2个参数 data   = {name:"Alice"}  │
└─────────────────────────────────────┘
         │
         ▼
   if (error)?
     ├─ error 有值 ❌ → alert(error)     ← 这次不走这里
     └─ error = null ✅ → render(data)   ← 走这里！
                              │
                              ▼
                  页面显示 "Name: Alice, Age: 22" 🎉
```

---

## 完整时间线总结 | Full Timeline

```
时间轴 Timeline
──────────────────────────────────────────────▶

t=0ms    fetchUser(1, cb) 调用，setTimeout 注册
         ↓
         JS主线程立刻空闲，继续干别的
         ↓
t=1000ms 浏览器：计时结束，回调入队
         ↓
         JS主线程：取出回调，执行
         ↓
         request_to_server(1) → 找到Alice
         ↓
         callback(null, Alice) → render()
         ↓
         页面更新 ✅
```

---

## 一张表看懂全程 | Summary Table

|步骤|谁在干活|干了什么|
|---|---|---|
|① 调用 fetchUser|JS 主线程|发起请求，注册回调|
|② setTimeout|浏览器底层|接管计时，JS 不等待|
|③ 1秒后|浏览器底层 → JS|计时结束，回调入队|
|④ 查数据库|JS 主线程|执行 request_to_server|
|⑤ 回调判断|JS 主线程|error=null → render()|

---

> 🍔 **一句话记住：** 点了外卖不用守门口等——外卖到了自然有人敲门（callback），你只需要决定开门后做什么（render 或 alert）。

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

> ```javascript
> $("button").click(function(){
>   $.post("/api/user",
>     { id: 1 },
>     function(data, status){
>       console.log(data, status);
>     }
>   );
> });
> ```