// ============================================================
// P9: 异步通信 Async Communication with jQuery
// 演示原文的回调模式: Object.asyncFn(params, callbackFunction)
// 回调接收 (error, response) 两个参数
// ============================================================

// 等 DOM 加载完成后再执行(jQuery 惯用写法)
$(document).ready(function() {                                   // DOM ready 事件

    // ========================================================
    // ① 核心函数: big_Request(data, callback)
    // 对应幻灯片 P9 原代码:
    //   function big_Request(data, callback) {
    //     var req = request_to_server(data);
    //     callback(req.error, req.response);
    //   }
    // ========================================================
    function big_Request(userId, callback) {                     // 定义异步请求函数

        // 使用 jQuery 的 $.get 向"服务器"(users.json)发请求
        // $.get 本身就是异步的——这就是"单线程语言 + 非单线程环境"的体现
        $.get("users.json")                                      // 发 GET 请求(异步)
            .done(function(data) {                               // 请求成功时执行
                var user = data[userId];                         // 根据 ID 查找用户
                if (user) {                                      // 若找到
                    callback(null, user);                        // 调回调: error=null, response=user
                } else {                                         // 若没找到
                    callback("用户不存在 User not found", null); // 调回调: error=错误消息, response=null
                }                                                // 结束 if-else
            })                                                   // 结束 done
            .fail(function() {                                   // 请求失败时执行
                callback("网络错误 Network error", null);        // 调回调: 传入错误
            });                                                  // 结束 fail
    }                                                            // big_Request 结束

    // ========================================================
    // ② render 函数: 把成功数据渲染到页面
    // 对应 P9 原代码中的 render(data)
    // ========================================================
    function render(data) {                                      // 渲染函数
        $("#output")                                             // 选中输出 div
            .removeClass("loading error")                        // 移除其他状态类
            .addClass("success")                                 // 添加成功样式
            .html(                                               // 写入 HTML 内容
                "✅ 请求成功 Success<br>" +                       // 成功标题
                "姓名 Name: " + data.name + "<br>" +              // 显示姓名
                "年龄 Age: " + data.age + "<br>" +                // 显示年龄
                "城市 City: " + data.city                         // 显示城市
            );                                                   // 结束 html
    }                                                            // render 结束

    // ========================================================
    // ③ 绑定请求按钮的点击事件
    // 对应 P9 原代码:
    //   big_Request(myData, function(error, data){
    //     if(error) alert(error);
    //     else render(data);
    //   });
    // ========================================================
    $("#fetchBtn").click(function() {                            // 绑定点击事件

        var userId = $("#userId").val();                         // 读取输入框的值

        // 立刻显示"加载中",证明按钮响应了但数据还没到
        $("#output")                                             // 选中输出区
            .removeClass("success error")                        // 清除之前的状态
            .addClass("loading")                                 // 加上 loading 样式
            .text("⏳ 请求中... Loading (主线程已空闲,可点右边按钮)"); // 提示信息

        // 调用 big_Request,传入 data 和 callback —— P9 精髓!
        big_Request(userId, function(error, data) {              // 回调: (error, data) 两参数

            if (error) {                                         // 有错误 → 走错误分支
                $("#output")                                     // 选中输出区
                    .removeClass("loading success")              // 清除状态
                    .addClass("error")                           // 加错误样式
                    .text("❌ " + error);                        // 显示错误
            } else {                                             // 无错误 → 走成功分支
                render(data);                                    // 渲染数据
            }                                                    // 结束 if-else
        });                                                      // 结束回调

        // 注意:这行代码会 "立刻" 执行,不会等请求完成
        // 这正是"异步"——主线程不阻塞的证据
        console.log("big_Request 已发出,主线程继续执行...");     // 控制台提示
    });                                                          // 结束 click

    // ========================================================
    // ④ 计数器按钮:证明 UI 主线程没有被阻塞
    // 在等待 big_Request 响应的过程中,此按钮仍然能点击并更新
    // ========================================================
    var count = 0;                                               // 计数变量,初始 0
    $("#countBtn").click(function() {                            // 绑定点击事件
        count = count + 1;                                       // 计数加 1
        $("#count").text(count);                                 // 更新页面显示
    });                                                          // 结束 click

});                                                              // 结束 document.ready
