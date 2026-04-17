# P9 异步通信 Async Communication Demo

## 📚 对应内容
**Chapter 08 · Page 9 — Asynchronous communication（异步通信）**

演示幻灯片 P9 的核心概念:
- JavaScript 单线程,但运行环境不是单线程
- 回调模式: `Object.asyncFn(parameters, callbackFunction)`
- 回调接收 `(error, response)` 两个参数
- 主线程在等待响应时不被阻塞

## 📁 文件结构

```
p9_async_demo/
├── index.html      ← 页面结构(独立 HTML 文件)
├── style.css       ← 样式(独立 CSS 文件)
├── app.js          ← 主逻辑,使用 jQuery 实现回调模式
├── users.json      ← 模拟服务器数据(充当"服务器")
└── README.md       ← 本说明文件
```

## 🚀 运行方式

由于 jQuery 的 `$.get()` 加载 `users.json` 需要 HTTP 协议(不能用 `file://`),
必须启动一个本地服务器。任选一种方式:

### 方式 1: Python (推荐,绝大多数系统自带)
```bash
cd p9_async_demo
python3 -m http.server 8000
```
然后浏览器访问 **http://localhost:8000**

### 方式 2: VS Code
安装 "Live Server" 扩展,右键 `index.html` → "Open with Live Server"

### 方式 3: Node.js
```bash
npx http-server -p 8000
```

## 🎯 如何观察 P9 的"异步不阻塞"现象

1. 在输入框里输入 `1` 或 `2`(其他值会触发 error 回调)
2. 点击左侧 **"big_Request 发起请求"** 按钮
3. **立刻**疯狂点击右侧 **"点我 +1"** 按钮
4. 你会发现:
   - 左侧显示"请求中…"
   - 右侧计数器**仍能正常增加** ← **这就是 P9 的核心!**
   - 约 1 秒后左侧显示请求结果

若 JavaScript 真的是"完全"单线程同步,右侧按钮在等待期间会卡死——但事实证明它没卡,这就是幻灯片说的**"环境不是单线程"**。

## 🔍 试错体验

| 输入 | 结果 | 触发的回调分支 |
|------|------|--------------|
| `1`  | 显示 Alice 信息(绿色) | `callback(null, user)` → render |
| `2`  | 显示 Bob 信息(绿色) | `callback(null, user)` → render |
| `99` | 显示"用户不存在"(红色) | `callback(error, null)` → alert |

## 💡 代码对应 P9 原文

**幻灯片原代码:**
```javascript
function big_Request(data, callback){
  var req = request_to_server(data);
  callback(req.error, req.response);
}

big_Request(myData, function(error, data){
  if(error) alert(error);
  else render(data);
});
```

**本 demo 的 app.js 实现(用 jQuery 的 $.get 做真实的异步请求):**
```javascript
function big_Request(userId, callback) {
  $.get("users.json")
    .done(function(data) {
      var user = data[userId];
      if (user) callback(null, user);
      else callback("User not found", null);
    })
    .fail(function() {
      callback("Network error", null);
    });
}

big_Request(userId, function(error, data){
  if(error) $("#output").text(error);
  else render(data);
});
```

完全对应原文的 `(error, response)` 回调模式!
