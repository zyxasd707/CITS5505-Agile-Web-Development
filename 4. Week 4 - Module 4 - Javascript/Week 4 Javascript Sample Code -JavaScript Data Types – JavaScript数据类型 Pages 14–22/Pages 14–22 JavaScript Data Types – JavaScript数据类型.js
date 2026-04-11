// ============================================
// Page 14: Primitives vs Objects 原始类型 vs 对象
// ============================================

// --- Primitive: 值直接存储 ---
let a = 10;
let b = a;       // 复制了值本身
b = 20;          // 改b不影响a
console.log("a:", a, "b:", b);   // a:10 b:20

// --- Object: 存储的是引用(地址) ---
let objA = { x: 10 };
let objB = objA;     // 复制了引用(地址)! 指向同一个对象!
objB.x = 20;         // 改objB的属性 = 改objA的属性 (同一个对象!)
console.log("objA.x:", objA.x);   // 20 — 被影响了!

// --- Dot syntax 点语法访问属性 ---
console.log('"abc".length:', "abc".length);    // 3
console.log("Math.PI:", Math.PI);              // 3.141592653589793


// ============================================
// Page 15-16: Numbers 数值
// ============================================

// --- Floating-point trap 浮点陷阱 ---
console.log("\n--- Numbers ---");
console.log("0.1 + 0.2 =", 0.1 + 0.2);          // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3?", 0.1 + 0.2 === 0.3);  // false!

// --- Operators 运算符 ---
let x = 10;
x += 5;        // x = x + 5 = 15      复合赋值
x++;           // x = 16               自增
x--;           // x = 15               自减
console.log("x after +=5, ++, --:", x);

// --- Special values 特殊值 ---
console.log("1/0:", 1 / 0);                 // Infinity
console.log("-1/0:", -1 / 0);               // -Infinity
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);

// --- parseInt 字符串→整数 ---
console.log("parseInt('124'):", parseInt("124"));     // 124
console.log("parseInt('3.99'):", parseInt("3.99"));   // 3 — 截断! 不是四舍五入!

// --- Math object ---
console.log("Math.sin(3.5):", Math.sin(3.5));
console.log("Math.round(4.7):", Math.round(4.7));    // 5


// ============================================
// Page 17: NaN
// ============================================
console.log("\n--- NaN ---");

let bad = parseInt("hello", 10);
console.log("parseInt('hello'):", bad);             // NaN

// NaN is infectious 传染性
console.log("NaN + 5:", NaN + 5);                   // NaN
console.log("NaN * 100:", NaN * 100);               // NaN

// NaN is NOT equal to itself! NaN不等于自己!
console.log("NaN === NaN:", NaN === NaN);            // false!

// Use isNaN() to check 用isNaN()来检测
console.log("isNaN(NaN):", isNaN(NaN));              // true
console.log("isNaN(42):", isNaN(42));                // false
console.log("isNaN('hello'):", isNaN("hello"));      // true — 因为"hello"转Number是NaN


// ============================================
// Page 18-19: Strings 字符串
// ============================================
console.log("\n--- Strings ---");

// Single quotes = Double quotes, no difference 单双引号无区别
let s1 = "Hello";
let s2 = 'Hello';
console.log("single == double?", s1 === s2);  // true

// Escape characters 转义字符
console.log('Escaped quote: "hi"');      // 用\"在双引号串中放双引号
console.log("Backslash: \\");            // \\得到一个\
console.log("New line: line1\nline2");   // \n换行
console.log("Tab: col1\tcol2");          // \t制表符

// No char type! 无char类型
console.log("typeof 'A':", typeof 'A');  // "string" — 不是char

// String methods (P19)
let str = "JavaScript";
console.log("\n--- String Methods ---");
console.log("length:", str.length);              // 10
console.log("charAt(0):", str.charAt(0));        // "J"  — 索引从0开始!
console.log("charAt(4):", str.charAt(4));        // "S"
console.log("indexOf('Script'):", str.indexOf("Script"));   // 4
console.log("substring(0,4):", str.substring(0, 4));        // "Java"
console.log("toLowerCase:", str.toLowerCase());  // "javascript"
console.log("toUpperCase:", str.toUpperCase());  // "JAVASCRIPT"

// Concatenation 拼接
console.log("'Hello' + ' World':", "Hello" + " World");

// Type conversion tricks 类型转换技巧
console.log("(42).toString():", (42).toString(), typeof (42).toString());  // "42" string
console.log("+ '123':", + "123", typeof (+"123"));    // 123 number


// ============================================
// Page 20: Booleans 布尔值
// ============================================
console.log("\n--- Booleans ---");

console.log("!true:", !true);                // false
console.log("!false:", !false);              // true
console.log("true && false:", true && false); // false
console.log("true || false:", true || false); // true

// Short-circuit 短路求值
console.log("0 && 'hello':", 0 && "hello");      // 0    (第一个falsy, 直接返回)
console.log("1 && 'hello':", 1 && "hello");      // "hello" (第一个truthy, 返回第二个)
console.log("'' || 'default':", '' || "default"); // "default" (第一个falsy, 返回第二个)


// ============================================
// Page 21: null vs undefined
// ============================================
console.log("\n--- null vs undefined ---");

let declared;              // 声明但未赋值
let intentional = null;    // 故意赋值为null
console.log("declared:", declared);       // undefined — 没有架子
console.log("intentional:", intentional); // null      — 有架子，故意留空

console.log("typeof undefined:", typeof undefined);  // "undefined"
console.log("typeof null:", typeof null);             // "object" ⚠️ 历史bug!


// ============================================
// Page 22: Dynamic typing 动态类型
// ============================================
console.log("\n--- Dynamic Typing ---");

let dynamic = 42;
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // 42, "number"

dynamic = "now a string";
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // "now a string", "string"

dynamic = true;
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // true, "boolean"

dynamic = null;
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // null, "object" ⚠️

dynamic = undefined;
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // undefined, "undefined"

dynamic = function() { return 1; };
console.log("dynamic:", dynamic, "type:", typeof dynamic);   // function..., "function"

// typeof 完整总结表:
console.log("\n--- typeof 总结 ---");
console.log("typeof 42:", typeof 42);                 // "number"
console.log("typeof 'hi':", typeof "hi");             // "string"
console.log("typeof true:", typeof true);             // "boolean"
console.log("typeof undefined:", typeof undefined);   // "undefined"
console.log("typeof null:", typeof null);             // "object" ⚠️
console.log("typeof {}:", typeof {});                 // "object"
console.log("typeof []:", typeof []);                 // "object" ← 数组也是!
console.log("typeof function(){}:", typeof function(){});  // "function"