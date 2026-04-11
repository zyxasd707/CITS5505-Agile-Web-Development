### 如何调试Pages 6–9 - JavaScript in the Browser – console

**方法1：在浏览器中运行和调试（最直接）**

1. **打开浏览器开发者工具**
   - Chrome/Edge：按 `F12` 或 `Ctrl + Shift + I`
   - Firefox：按 `F12`
   - 切换到 **Console** 标签页
2. **复制你的代码到浏览器 Console**
   - 直接把代码粘贴到 Console 里执行
   - 或者把代码嵌入到 HTML 文件中运行
3. **看 Console 输出结果**
   - `console.log()` 的输出会显示在这里
   - `alert()` 和 `confirm()` 会弹窗
   - `prompt()` 会让你输入

**方法2：在 VS Code 中调试（推荐有断点需求时）**

创建一个简单的 HTML 文件来运行你的 JS：

```html
<!DOCTYPE html>
<html>
<head>
    <title>调试</title>
</head>
<body>
    <h1>打开 F12 Console 查看输出</h1>
    <script src="console.js"></script>
</body>
</html>
```

然后在 VS Code 中：

1. 装 **"Debugger for Chrome"** 或 **"Debugger for Firefox"** 扩展
2. 按 `Ctrl + Shift + D` 打开调试面板
3. 配置 `.vscode/launch.json`：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome",
            "file": "${workspaceFolder}/console.html",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

1. 按 `F5` 启动调试器

你是想要在浏览器里直接测试输出，还是想要在 VS Code 中设置断点调试？