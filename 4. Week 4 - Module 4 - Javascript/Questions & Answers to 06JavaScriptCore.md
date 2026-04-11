# Arrays – 数组 | Pages 29–34 | 习题集

---

## **一、基础巩固题（Pages 30–31）**

**题目 1.1 | 数组基础与混合类型**

```javascript
let arr = ["Alice", 30, true, null];
console.log(arr.length);        // ？
console.log(arr[2]);            // ？
console.log(typeof arr[1]);     // ？
```

**答案**：4 / true / "number"

**题目 1.2 | 数组索引的理解**

```javascript
let colors = ["red", "green", "blue"];
console.log(colors[0]);         // ？
console.log(colors[3]);         // ？
console.log(colors.length);     // ？
```

**答案**："red" / undefined / 3

---

## **二、Array() 构造器陷阱（Page 31）**

**题目 2.1 | 区分 Array(n) 和 Array(n, m)**

对比以下三个表达式，写出结果和 length：

```javascript
let a = Array(5);                    // ？ length: ？
let b = Array(5, 2);                 // ？ length: ？
let c = [5, 2];                      // ？ length: ？
```

**答案**：

- a: `[ <5 empty> ]` length: 5
- b: `[5, 2]` length: 2
- c: `[5, 2]` length: 2

**题目 2.2 | 空数组的内存占用**

```javascript
let empty = Array(1000000);
console.log(empty[0]);           // ？
console.log(empty[999999]);      // ？
```

上面这个数组会占用大量内存吗？为什么？

**答案**：都是 undefined；不会，因为未赋值元素不占用内存（稀疏数组）

---

## **三、遍历与越界陷阱（Page 32）**

**题目 3.1 | for 循环 vs for...in**

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

// 方式A
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 方式B
for (let idx in fruits) {
  console.log(idx);
}

// 方式A 输出什么？方式B 输出什么？两者有何区别？
```

**答案**：

- 方式A：Apple、Banana、Cherry（元素**值**）
- 方式B：0、1、2（**索引**，字符串类型）
- 区别：方式A 遍历值，方式B 遍历索引（字符串）

**题目 3.2 | 越界赋值的自动扩展**

```javascript
let arr = ["a", "b"];
arr[10] = "z";
console.log(arr.length);         // ？
console.log(arr[5]);             // ？
```

**答案**：11 / undefined

**解释**：赋值给索引 10，length 自动扩展到 11；中间的索引（5）是空洞，返回 undefined

**题目 3.3 | 静默失败陷阱**

```javascript
let data = [1, 2, 3];
let value = data[100];
if (value === undefined) {
  console.log("索引越界");
}
```

为什么说这是一个"陷阱"？实际代码中如何避免？

**答案**：

- 陷阱：越界访问不报错，返回 undefined，程序继续执行，难以发现 bug
- 避免：在循环时用 `.length` 限制，或先检查 `if (index < arr.length)`

---

## **四、数组方法实战（Page 33）**

**题目 4.1 | push/pop vs shift/unshift**

```javascript
let stack = [1, 2, 3];
stack.push(4);                   // ？
stack.pop();                     // 返回 ？
console.log(stack);              // ？

let queue = [1, 2, 3];
queue.unshift(0);                // ？
queue.shift();                   // 返回 ？
console.log(queue);              // ？
```

**答案**：

- stack: [1, 2, 3, 4] → pop 返回 4 → [1, 2, 3]
- queue: [0, 1, 2, 3] → shift 返回 0 → [1, 2, 3]

**题目 4.2 | sort() 的字符串陷阱**（重要！）

```javascript
let nums = [10, 5, 40, 25];
nums.sort();
console.log(nums);               // ？

nums.sort((a, b) => a - b);
console.log(nums);               // ？
```

**答案**：

- 第一个：[10, 25, 40, 5]（⚠️ 字符串排序！"10"<"25"<"40"<"5"）
- 第二个：[5, 10, 25, 40]（正确的数字排序）

**核心**：`sort()` 默认按字符串 ASCII 排序，数字排序需要传比较函数 `(a,b) => a - b`

**题目 4.3 | 修改原数组 vs 不修改**

判断以下方法是否修改原数组：

|方法|修改原数组?|理由|
|---|---|---|
|push|？|？|
|concat|？|？|
|slice|？|？|
|splice|？|？|
|reverse|？|？|

**答案**：

|方法|修改原数组?|理由|
|---|---|---|
|push|✓ 是|在末尾添加元素|
|concat|✗ 否|返回新数组，原数组不变|
|slice|✗ 否|截取子数组，返回新数组|
|splice|✓ 是|在原数组上插入/删除|
|reverse|✓ 是|反转原数组|

**题目 4.4 | join 和 reverse 的组合**

```javascript
let word = "hello";
let arr = word.split("");        // 转成字符数组
arr.reverse();                   // 反转
let result = arr.join("");       // 拼接回字符串
console.log(result);             // ？
```

**答案**："olleh"（字符串反转）

---

## **五、delete 陷阱（Page 33）**

**题目 5.1 | delete 的真实行为**

```javascript
let items = ["A", "B", "C", "D"];
delete items[1];
console.log(items);              // ？
console.log(items.length);       // ？
console.log(items[1]);           // ？
```

**答案**：

- items: ["A", undefined, "C", "D"]（或 [ "A", <1 empty>, "C", "D" ]）
- length: 4（⚠️ length 不变！）
- items[1]: undefined

**题目 5.2 | 为什么不用 delete 删除数组元素？**

应该用什么方法替代？给出代码示例。

**答案**：用 `splice()` 替代

```javascript
items.splice(1, 1);  // 从索引1删除1个元素
console.log(items);  // ["A", "C", "D"]
console.log(items.length);  // 3
```

---

## **六、关联数组与 length 陷阱（Page 34）**

**题目 6.1 | 关联数组的 length**

```javascript
let user = [];
user["name"] = "Bob";
user["age"] = 25;
user[0] = "admin";
console.log(user.length);        // ？
console.log(user["name"]);       // ？
```

**答案**：

- length: 1（⚠️ 只计算数字索引 0，不计算字符串索引 "name"/"age"！）
- user["name"]: "Bob"

**题目 6.2 | 为什么字符串索引不计入 length？**

解释关联数组本质上是什么？

**答案**：关联数组本质上是**对象**，不是真正的数组。`.length` 属性只统计数字索引的元素，字符串属性被视为对象属性，不参与 length 计算。

---

## **七、综合进阶题**

**题目 7.1 | 数组方法链式调用**

```javascript
let data = [3, 1, 4, 1, 5, 9, 2, 6];
let result = data
  .filter(x => x > 2)            // [3, 4, 5, 9, 6]
  .map(x => x * 2)               // [6, 8, 10, 18, 12]
  .sort((a, b) => a - b)         // ？
  .join(", ");                   // ？
console.log(result);
```

**答案**：

- sort 后：[6, 8, 10, 12, 18]
- 最终："6, 8, 10, 12, 18"

（注：filter/map 是 Pages 33+ 的扩展方法，这里用作预习提示）

**题目 7.2 | 性能考量**

```javascript
// 方案A
let bigArray = Array(1000000);
for (let i = 0; i < bigArray.length; i++) {
  bigArray[i] = i;
}

// 方案B
let bigArray2 = [];
for (let i = 0; i < 1000000; i++) {
  bigArray2.push(i);
}
```

两个方案哪个更有效率？为什么？

**答案**：方案 A 更有效率。理由：Array(1000000) 预先分配了内存空间，push 需要多次扩容。但在实际中，两者性能差异不大，更要注意的是代码清晰度。

---

## **八、自我检查清单**

完成以下检查，确保掌握了 Pages 29–34 的所有核心概念：

- [ ]  理解数组索引从 0 开始，length = 最高索引 + 1
- [ ]  区分 `Array(5)` 和 `Array(5, 2)` 的行为
- [ ]  掌握 for 循环和 for...in 遍历数组的区别
- [ ]  知道越界访问返回 undefined，不会报错（陷阱！）
- [ ]  记住 push/pop（末尾）vs shift/unshift（头部）的操作
- [ ]  理解 sort() 默认按字符串排序，数字需要比较函数
- [ ]  区分 slice（不改原数组）和 splice（改原数组）
- [ ]  知道 delete 只是替换为 undefined，不改变 length
- [ ]  理解关联数组的 length 只计算数字索引
- [ ]  理解数组可以混合类型（字符串、数字、布尔、对象等）

---

**准备好了！** ✓

下一个单元：**5. Functions（Pages 35–42）** ——函数、参数传递、call by value vs call by sharing