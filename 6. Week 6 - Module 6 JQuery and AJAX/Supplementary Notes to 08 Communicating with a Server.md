

## **Page 9: Asynchronous communication – 异步通信 ★★**



Page 9 的核心是**异步通信 + 回调模式**：`function(error, data)`。我来设计一个最简单的演示——**模拟服务器请求**，展示：

1. 回调函数接收 `(error, response)` 两个参数
2. 异步期间 UI 不阻塞（旁边放个计数器证明主线程仍然响应）已打包 `p9_async_demo.zip`，解压后是 5 个独立文件：

| 文件         | 作用                                                         |
| ------------ | ------------------------------------------------------------ |
| `index.html` | 页面结构，引入 jQuery CDN + style.css + app.js               |
| `style.css`  | 样式（左右面板布局、加载/成功/错误三色状态）                 |
| `app.js`     | **核心逻辑** — 用 jQuery 实现 P9 的 `big_Request(data, callback)` 回调模式 |
| `users.json` | 模拟"服务器"数据（含 user 1 = Alice, 2 = Bob）               |
| `README.md`  | 运行方法 + 观察要点说明                                      |

## 演示要点

**P9 原文：** `function(error, data) { if(error) alert(error); else render(data); }`

打开页面后，输入 `1` 或 `2` 点击左侧按钮发起请求，同时疯狂点右侧 **"点我 +1"** 按钮——你会看到计数器**不卡**，这就是 P9 强调的「JS 是单线程，但运行环境不是单线程」。输入 `99` 则会触发 error 回调分支（显示红色"用户不存在"）。

## 运行方式

因为 `$.get("users.json")` 加载本地 JSON 文件需要 **HTTP 协议**（不能用 `file://` 双击打开，浏览器会因 CORS 策略拦截请求），所以必须启动一个本地服务器。

### 🎯 最简单方法：Python 启动本地服务器

你电脑大概率装了 Python（装过 Anaconda / 任何 Python IDE 都有）。在你的路径上打开 PowerShell 或 CMD：

### 步骤

**1. 打开文件夹所在路径的终端**

用 Windows 资源管理器进到这个文件夹：

```
E:\Semester 1 2026\CITS5505_SEM-1_2026 Agile Web Development SEM-1 2026\6. Week 6 - Module 6 JQuery and AJAX\p9_async_demo
```

在地址栏输入 `powershell` 或 `cmd` 回车，会在**当前目录**打开终端。

**2. 检查 Python 是否安装**

```powershell
python --version
```

如果显示 `Python 3.x.x` 就 OK。如果提示找不到命令，试试 `py --version`。

**3. 启动服务器**

```powershell
python -m http.server 8000
```

看到这行说明成功了：

```
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

**4. 打开浏览器**

访问：**http://localhost:8000**

**5. 关闭服务器**

在终端窗口按 `Ctrl + C` 即可。

------

### 如果 Python 不存在：备选方案

#### VS Code Live Server（推荐，非常方便）

1. 装 VS Code（如果没装）
2. 扩展商店搜 **"Live Server"** 装上（作者 Ritwick Dey）
3. 用 VS Code 打开 `p9_async_demo` 文件夹
4. 右键 `index.html` → **"Open with Live Server"**
5. 自动打开浏览器，端口 5500

#### Node.js 方式

如果装了 Node.js：

```powershell
npx http-server -p 8000
```

#### PHP 方式

如果装了 PHP：

```powershell
php -S localhost:8000
```

------

### 💡 小提示

路径里有**空格**和**中文**，Python 的 `http.server` 模块能正常处理，但你 cd 进入时要给路径加双引号：

```powershell
cd "E:\Semester 1 2026\CITS5505_SEM-1_2026 Agile Web Development SEM-1 2026\6. Week 6 - Module 6 JQuery and AJAX\p9_async_demo"
python -m http.server 8000
```

或者直接用资源管理器地址栏法（步骤1），可以跳过 cd 这步。

服务器跑起来后，每次改代码直接刷新浏览器就能看到效果，不需要重启。



## **Page 27: AJAX in the individual project – AJAX在个人项目中的应用**

P27 的核心是：**CITS5505 项目需展示 AJAX 请求 → 最简方式 = 调用无需 API key 的公共 API**。我选用 **Dog CEO API**（经典、免 key、支持 CORS、有视觉反馈），用 jQuery 的 `$.get()` 实现。## 📦 已打包 `p27_public_api_demo.zip`

解压后包含 4 个独立文件：

| 文件         | 作用                                           |
| ------------ | ---------------------------------------------- |
| `index.html` | 页面结构（引 jQuery CDN + style.css + app.js） |
| `style.css`  | 样式（渐变背景、加载/成功/错误三态）           |
| `app.js`     | **核心逻辑** — `$.get()` 调用 Dog CEO API      |
| `README.md`  | 运行说明 + 代码讲解                            |

------

## 🚀 如何运行（本 Demo 有个好处）

### ⭐ 方式 1（最简单）：直接双击 `index.html`

**和 P9 demo 不一样，这个 demo 可以直接双击运行！**

因为它调用的是**真正的线上 API**（`dog.ceo`），不需要读本地 JSON，浏览器不会触发 `file://` 跨域限制。双击就能看到狗狗图片。

### 方式 2（推荐做项目时用）：本地服务器

在文件夹里打开 PowerShell：

```powershell
python -m http.server 8000
```

访问 `http://localhost:8000`。

### 方式 3：VS Code Live Server

右键 `index.html` → "Open with Live Server"

------

## 🎯 选 Dog CEO API 的原因（对应 P27 要求）

| P27 要求         | Dog CEO 满足                          |
| ---------------- | ------------------------------------- |
| 不需要 API key ✅ | 完全开放，零配置                      |
| 公共 API ✅       | 任何人可访问                          |
| 支持 CORS ✅      | 浏览器不会拦截                        |
| 返回 JSON ✅      | `{message: "url", status: "success"}` |
| 有视觉反馈 ✅     | 返回图片 URL，直接 `<img>` 展示       |

------

## 💡 预期效果

1. 页面打开就自动发请求 → 约 1 秒后显示一张随机狗狗图片 🐕
2. 底部黑色面板显示**服务器原始 JSON 响应**（教学用，让你看清 AJAX 到底拿到了什么）
3. 点击按钮 → 换一张新狗狗
4. 打开 DevTools (F12) → Network 面板可以看到真实 HTTP 请求

做个人项目时，把 `API_URL` 换成你项目相关的公共 API 即可（README 里列了几个候选）。