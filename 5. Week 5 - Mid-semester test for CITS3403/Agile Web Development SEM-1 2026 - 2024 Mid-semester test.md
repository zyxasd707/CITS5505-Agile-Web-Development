---
aliases:
  - |-
    Agile Web Development SEM-1 2026 - 

    2024 Mid-semester test
---

# Agile Web Development SEM-1 2026

## 2024 Mid-semester test

**This assessment contains questions that allow partial and negative credit.**

---

## Test Instructions

You must be taking this test on a modern web-browser with the ability to inspect the code of webpages.

You must submit only your own work. If it is suspected that a test is not entirely your own work, you may be required to complete a supervised test at a later date and the academic misconduct procedures outlined in the course guide will be followed.

You must not communicate with other students or anyone else to help answer questions.

You must not ask questions during the test. If you feel a question is ambiguous, you should make a reasonable assumption about how the goal of the question, and clearly state that assumption in their answer.

You must not discuss the test questions or answers on public forums or discussion boards after completing the test, as some students will be sitting the test at later dates.

You may use online materials, including search and AI assistants, the unit webpage or the w3schools website: [https://www.w3schools.com/](https://www.w3schools.com/) to help them answer questions.

You may also use integrated development environments (IDEs) and the browser to test answers.

---

## Question 1 (2 Points)

Which of the following were novel innovations, introduced by Sir Tim Berners-Lee when the World Wide Web was developed in 1990-91. Select all that apply.

- Hypertext Transfer Protocol
- World Wide Web Browser
- Hyper Links
- Standard Generalised Markup Language
- Cascading Style Sheets
- Java

**Select up to 6 options**

---

## Question 2 (2 Points)

Look at the HTML below. Replacing SELECTOR with which of the following selectors will result in the word "meaningful" being coloured red?

![[5. Week 5 - Mid-semester test for CITS3403/bitmap.png]]

```html
<!DOCTYPE html>
<html>
 <head>
  <style>
        SELECTOR {color: red}
  </style>
</head>

<body>
  <h1 class="heading1">
    Principles of CSS
  </h1>

  <h2 secret="yes"> Section 1 </h2>
 
  <p id="run"> Don't repeat yourself </p>
 
  <p> Use <span><b class="myText-meaningful"> names</b></span> </p>
 
  <h2 secret="no"> Section 2 </h2>
 
  <p> Inline styles are EVIL </p>
 
 </body>
 
</html>
```

- - p + p
- #myText
- h2, b, h1
- h1 > b

**Select up to 4 options**

---

## Question 3 (1 Point)

Look at the code for the `Save Answer` button to the right of this question on this webpage. Would it be selected by the CSS selector `.save-button`?

- True
- False

---

## Question 4 (2 Points)

Look at the code for the various `Save Answer` buttons on this webpage. When a `Save Answer` button is pressed, a function is called. What does the second argument to this function represent?

- The number of marks for the question
- The question number
- The answer to the question
- The user id of the person taking the test

---

## Question 5 (4 Points)

The following code creates and then dynamically alters a webpage, depending on how the user interacts with it. Which of the following images could be a screenshot of the webpage corresponding to this code?



```html
<html>
  <head>
    <style>
      /* 蓝色样式类：30像素内边距，蓝色背景 */
      div.c1 {padding:30px; background-color: rgb(47, 0, 255);}
      /* 紫色样式类：30像素内边距，紫色背景 */
      div.c2 {padding:30px; background-color: rgb(156, 14, 149);}
    </style>
    <script>
      /* 创建按钮的工厂函数 */
      function foo() {
        let x = document.createElement('input');  // 创建一个input元素
        x.type = 'button';                         // 设置为按钮类型
        x.value = 'Clicked: 0';                    // 初始显示文本
        x.addEventListener('click', run);          // 为按钮添加点击事件监听器
        return x;                                  // 返回这个按钮
      }

      /* 按钮点击事件处理函数 */
      function run(e) {
        /* 更新点击计数：如果已有计数则加1，否则初始化为1 */
        if (e.target.clicked)
          e.target.clicked++;
        else
          e.target.clicked = 1;
        
        /* 更新按钮显示的文本 */
        e.target.value = 'Clicked:' + e.target.clicked;

        /* 创建新按钮并插入到当前按钮前面 */
        let y = foo();
        div.insertBefore(y, e.target);
        
        /* 根据点击次数切换背景颜色 */
        if (e.target.clicked % 2 == 0)           // 偶数次点击 → 蓝色
          div.classList.replace('c2','c1');
        else                                       // 奇数次点击 → 紫色
          div.classList.replace('c1','c2');

        /* 当点击次数≥2时，移除这个按钮的点击事件监听（该按钮停止响应点击） */
        if (e.target.clicked >= 2)
          e.target.removeEventListener('click', run);
      }

      /* 页面加载完毕后执行 */
      window.load = function() {
        div = document.getElementById('div');    // 获取id为'div'的元素
        div.appendChild(foo());                   // 在div中添加初始按钮
      }
    </script>
  </head>
  <body>
    <!-- 主容器div，初始背景为蓝色(c1) -->
    <div id='div' class='c1'></div>
  </body>
</html>
```

**关键理解点：**

- 每个按钮只能被点击**最多2次**（第2次点击后失效）
- 每次点击新按钮时，之前的按钮会停止响应
- 背景颜色按**点击次数**切换，不是按按钮数量

现在你对Question 5的代码逻辑更清楚了吗？需要继续讨论其他题目吗？



---
这就是Question 5的完整代码。代码创建一个动态交互式按钮系统，每次点击会在前面插入新按钮，并在蓝色(c1)和紫色(c2)背景之间切换。





![[5. Week 5 - Mid-semester test for CITS3403/Screenshot from 2024-04-09 12-43-47.png]]


![[5. Week 5 - Mid-semester test for CITS3403/Question 5.png]]
**Select up to 8 options**

---

## Question 6 (4 Points)

Explain the difference between Client applications and Server applications in the context of the world wide web, giving examples of each.

**Text Editor**

---

## Question 7 (10 Points)

There are many staff in Computer Science at UWA and it is hard to remember them all. The department would like you to create a webpage containing a game for new CS students that help them to memorise CS staff members' names. The specification is as follows:

- The web application should be written as a single HTML file, containing JavaScript and CSS in the head, and should be runnable on all common browsers.
- The page title should be "People matcher"
- The page background should be yellow.
- At the top of the page there should be a heading "Who's who: CS edition" in Times New Roman font.
- Next there should be a line containing the text 'Current score = X' where 'X' is the current score.
- Next there should be a line containing the text: "Who is Y?" where 'Y' is a name of a person and should be underlined.
- Next there should be four pictures of people displayed in a line, each with a green border and dimensions 100px by 100px. One of them should be the person named on the previous line.
- The name and the four pictures should be chosen from a list containing: 6 members of staff (pictures and names are available here) and Taylor Swift (pictures available on the internet!).
- When the user hovers over the image, the border around the image should turn red.
- When the user clicks the correct image, the score should increase by 1 and a random new name and four random new images should be displayed.
- When the user clicks the wrong image, an alert should pop up saying "That was incorrect!" and after that clicking on the existing images shouldn't do anything.
- Your page should use the following code:

```javascript
function chooseRandomElements(arr, numElements) {
  // Make a copy of the original array to avoid modifying it
  const shuffledArray = arr.slice();
  // Shuffle the array using Fisher-Yates algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  // Return the first numElements elements
  return shuffledArray.slice(0, numElements);
}
```

An example screenshot is shown below (in the original document).
![[5. Week 5 - Mid-semester test for CITS3403/Screenshot from 2024-04-09 15-18-00.png]]

---

That's the complete test content with all 7 questions extracted and formatted. Is there anything specific you'd like help with regarding these questions?