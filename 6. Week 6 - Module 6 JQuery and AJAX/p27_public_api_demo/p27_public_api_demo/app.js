// ============================================================
// P27: AJAX in the Individual Project
// 按 PDF P27 的精神: 调用一个不需要 API key 的公共 API
// 选用 Dog CEO API: https://dog.ceo/api/breeds/image/random
// 使用 jQuery 的 $.get() 发起 AJAX 请求
// ============================================================

// 定义 API 常量
var API_URL = "https://dog.ceo/api/breeds/image/random";     // 公共 API 地址(无需 key)

// 等 DOM 加载完成后再执行(jQuery 标准写法)
$(document).ready(function() {                               // DOM ready 事件

    // 缓存常用的 jQuery 选择器(提升性能,避免重复查询 DOM)
    var $btn    = $("#fetchBtn");                            // 按钮对象
    var $status = $("#status");                              // 状态区对象
    var $image  = $("#dogImage");                            // 图片对象
    var $raw    = $("#rawJson");                             // 原始 JSON 显示区

    // ========================================================
    // 核心函数: 发起 AJAX 请求获取狗狗图片
    // 展示 PDF P27 所说的"向公共 API 发起 AJAX 请求"
    // ========================================================
    function fetchRandomDog() {                              // 定义请求函数

        // ---- Step 1: 设置"加载中"状态 ----
        $btn.prop("disabled", true)                          // 禁用按钮防止重复点击
            .text("⏳ Loading... 加载中...");                  // 改变按钮文字
        $status.removeClass("success error")                 // 清除之前的状态样式
               .addClass("loading")                          // 加上 loading 样式
               .text("Sending AJAX request... 发送 AJAX 请求中..."); // 状态提示
        $image.removeClass("visible");                       // 隐藏旧图片

        // ---- Step 2: 使用 jQuery 的 $.get 发起 GET 请求 ----
        // 这就是 P27 要求的"AJAX 请求 + 调用公共 API"
        $.get(API_URL)                                       // 发 GET 请求到公共 API

            // ---- Step 3: 成功回调(请求成功且服务器返回 200) ----
            .done(function(data) {                           // done = success 回调
                console.log("✅ API Response:", data);        // 在控制台打印完整响应

                // Dog CEO API 返回格式: { message: "图片URL", status: "success" }
                if (data.status === "success") {             // 判断 API 自己的 status 字段
                    $image                                   // 操作图片元素
                        .attr("src", data.message)           // 设置图片 src 为 API 返回的 URL
                        .addClass("visible");                // 显示图片

                    $status.removeClass("loading error")     // 清除其他状态
                           .addClass("success")              // 加成功样式
                           .text("✅ Image loaded 图片加载成功"); // 成功提示

                    // 把原始 JSON 显示出来(教学用,让学生看到真实响应)
                    $raw.text(                               // 显示原始 JSON
                        JSON.stringify(data, null, 2)        // 格式化 JSON 字符串(缩进 2)
                    );
                }                                            // 结束 if
            })                                               // 结束 done

            // ---- Step 4: 失败回调(网络错误或 404/500) ----
            .fail(function(xhr) {                            // fail = error 回调
                console.error("❌ Request failed:", xhr);     // 控制台打印错误
                $status.removeClass("loading success")       // 清除其他状态
                       .addClass("error")                    // 加错误样式
                       .text("❌ Failed 请求失败: "            // 错误提示
                             + xhr.status);                  // 拼接状态码
                $raw.text("Error: " + xhr.statusText);       // 显示错误文本
            })                                               // 结束 fail

            // ---- Step 5: 总是执行(无论成功失败都恢复按钮) ----
            .always(function() {                             // always = 总是执行
                $btn.prop("disabled", false)                 // 恢复按钮可点击
                    .text("🔄 Fetch Random Dog 再来一张");    // 恢复按钮文字
            });                                              // 结束 always
    }                                                        // fetchRandomDog 结束

    // ========================================================
    // 绑定按钮点击事件
    // ========================================================
    $btn.click(fetchRandomDog);                              // 点击按钮触发请求

    // ========================================================
    // 页面加载后自动发一次请求(让用户一进来就看到效果)
    // ========================================================
    fetchRandomDog();                                        // 页面加载后立即获取一张

});                                                          // 结束 document.ready
