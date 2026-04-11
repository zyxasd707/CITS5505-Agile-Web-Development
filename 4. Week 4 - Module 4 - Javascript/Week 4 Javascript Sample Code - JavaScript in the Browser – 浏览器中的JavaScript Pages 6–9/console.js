// ===== console.log: 开发者调试用 (P9) =====
console.log("This goes to the Console, not the page");   // 输出到控制台
console.log("1 + 2 =", 1 + 2);                           // 可以输出多个值，用逗号分隔

// ===== alert: 向用户弹出信息 (P9) =====
alert("Hello from alert!");                               // 弹窗，用户点OK关闭

// ===== confirm: 向用户询问 是/否 (P9) =====
let sure = confirm("Do you like JavaScript?");            // 弹窗，OK→true, Cancel→false
console.log("User confirmed:", sure);                     // 在Console查看结果

// ===== prompt: 向用户获取文本输入 (P9) =====
let name = prompt("Enter your name:");                    // 弹窗，用户输入文字
console.log("User typed:", name);                         // 输入的内容（Cancel则为null）

// ===== ✗ 不推荐: 直接写入document (P9) =====
// document.write("Bad practice!");                       // 会覆盖整个页面! 不要这样做