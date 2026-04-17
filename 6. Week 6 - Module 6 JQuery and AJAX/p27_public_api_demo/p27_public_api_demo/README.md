# P27 AJAX with Public API — 公共API演示

## 📚 对应内容
**Chapter 08 · Page 27 — AJAX in the Individual Project**

> For CITS5505 students, the individual project requires you to show off an AJAX request.
> The easiest way is to make a call to a public API. Pick one without an API key!

## 🎯 本 Demo 做了什么

用 **jQuery `$.get()`** 调用公共 API **Dog CEO**（免 API key、支持 CORS），
返回一张随机狗狗图片的 URL，然后通过 DOM 操作显示图片。

**API 地址：** `https://dog.ceo/api/breeds/image/random`
**返回 JSON 格式：**
```json
{
  "message": "https://images.dog.ceo/breeds/...",
  "status": "success"
}
```

## 📁 文件结构

```
p27_public_api_demo/
├── index.html      ← 页面结构(独立 HTML)
├── style.css       ← 样式(独立 CSS,含加载/成功/错误三态)
├── app.js          ← 主逻辑,使用 jQuery $.get 调用公共 API
└── README.md       ← 本说明文件
```

## 🚀 如何运行

### ✅ 本 Demo 可以直接双击打开 `index.html`

因为它调用的是**真正的线上 API**（不像 P9 Demo 需要加载本地 users.json），
浏览器不会触发 `file://` 协议的跨域限制。**直接双击 `index.html` 即可运行**。

### 若仍希望用本地服务器运行(推荐)

在项目文件夹打开终端(PowerShell / CMD)：

```bash
# 方式 1: Python(推荐)
python -m http.server 8000
# 然后访问 http://localhost:8000

# 方式 2: VS Code Live Server 扩展
右键 index.html → Open with Live Server

# 方式 3: Node.js
npx http-server -p 8000
```

## 🎬 预期效果

1. 页面打开后**自动**发起一次 AJAX 请求
2. 约 1 秒后显示一张随机狗狗图片
3. 下方显示服务器返回的**原始 JSON**（教学用，让你看到真实响应结构）
4. 点击 "🔄 Fetch Random Dog" 按钮可以换一张

## 🔍 关键代码讲解

**P27 精神 + jQuery AJAX 实现：**

```javascript
$.get("https://dog.ceo/api/breeds/image/random")    // 1. 发 GET 请求到公共 API
  .done(function(data) {                            // 2. 成功 → 拿到 JSON
    $("#dogImage").attr("src", data.message);       // 3. 用返回的 URL 更新 DOM
  })
  .fail(function(xhr) {                             // 4. 失败 → 显示错误
    console.error(xhr.status);
  });
```

**与 PDF 知识点对应：**
| P27 / 前文知识点 | 本 Demo 中的体现 |
|------|-------|
| AJAX request (P21) | `$.get()` 发异步 HTTP 请求 |
| Public API (P27) | Dog CEO API(无 API key) |
| JSON as data object (P24) | 响应是 `{message, status}` 对象 |
| Dynamically update DOM (P21) | `.attr("src", ...)` 动态改图片源 |
| Does not freeze environment (P21) | 异步执行,按钮可继续点击 |
| jQuery AJAX helper (P14/25) | `$.get().done().fail().always()` 链式调用 |

## 🧪 测试错误处理

1. 断开网络，点击按钮 → 会走 `.fail()` 分支，显示红色错误提示
2. 打开浏览器 DevTools → Network 面板，能看到真实的 HTTP 请求/响应

## 💡 项目应用提示

交个人项目时，可以把此 demo 改造成你项目主题相关的 API 调用：

- 🎮 游戏项目 → 用 **PokéAPI**: `https://pokeapi.co/api/v2/pokemon/pikachu`
- 📚 学习项目 → 用 **JSONPlaceholder**: `https://jsonplaceholder.typicode.com/posts`
- 🎨 图库项目 → 用 **Dog CEO / Cat API** 等图片 API
- 🌤 天气项目 → 用 **Open-Meteo**: `https://api.open-meteo.com/v1/forecast`

参考公共 API 列表（记得选无 key 的）：
https://github.com/public-apis/public-apis
