---
aliases:
  - "Review Test Submission: 2024 Mid-semester test"
---

Below is the extracted text from the document, including the questions as they appear in the original content. I've organized it for clarity, separating the general information from the specific questions.

---

### General Information

**Review Test Submission: 2024 Mid-semester test**

|User|Yuxing Zhou|
|---|---|
|Unit|CITS3403 / CITS5505 - Agile Web Development SEM-1 2025|
|Test|2024 Mid-semester test|
|Started|3/04/25 10:54 AM|
|Submitted|3/04/25 10:54 AM|
|Status|Needs Grading|
|Attempt Score|Grade not available.|
|Time Elapsed|No data|
|Instructions|You must be taking this test on a modern web-browser with the ability to inspect the code of webpages.|

- You must not communicate with other students or anyone else to help answer questions.
- You must not ask questions during the test. If you feel a question is ambiguous, you should make a reasonable assumption about how the goal of the question, and clearly state that assumption in their answer.
- You must not discuss the test questions or answers on public forums or discussion boards after completing the test, as some students will be sitting the test at later dates.
- You may use online materials, including search and AI assistants, the unit webpage or the w3schools website: [https://www.w3schools.com/](https://www.w3schools.com/) to help them answer questions.
- You may also use integrated development environments (IDEs) and the browser to test answers.
- Self-Test Student answers and score are not visible to the instructor.
- Results: All Answers, Submitted Answers, Correct Answers, Incorrectly Answered Questions Displayed

**Timestamp:** Thursday, 3 April 2025 11:00:24 AM AWST

---

### Questions

### Question 1

**Text:**

Which of the following were novel innovations, introduced by Sir Tim Berners-Lee when the World Wide Web was developed? Select all that apply.

**Selected Answers:** [None Given]

**Answers:**

- World Wide Web Browser
- JavaScript
- Domain Name System
- Internet Protocol
- Hypertext Markup Language
- Document Object Model**Score:** 0 out of 2 points

---

### Question 2

**Text:**

Look at the HTML below. Replacing SELECTOR with which of the following selectors will result in the word "meaningful" being coloured red?

![bitmap.png](attachment:9d264af9-18b1-48df-90aa-1756b9075ff7:bitmap.png)

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

**Selected Answers:** [None Given]

**Answers:**

- `p + p`
- `[secret="no"] ~ p`
- `h1 > b`
- `h2, b, h1`

---

### Question 3

**Text:**

Look at the code for the 'Save Answer' button to the right of this question on this webpage. Would it be selected by the following CSS selector? `.button`

**Selected Answer:** [None Given]

**Answers:**

- True
- False

---

### Question 4

**Text:**

Look at the code for the various 'Save Answer' buttons on this webpage. When a 'Save Answer' button is pressed, a function is called. What does the second argument to this function represent?

**Selected Answer:** [None Given]

**Answers:**

- The user id of the person taking the test
- The answer to the question
- The number of marks for the question
- The question number

---

### Question 5

**Text:**

The following code creates and then dynamically alters a webpage, depending on how the user interacts with it. Which of the following images could be a screenshot of the webpage corresponding to this code?

```html
<html>
<head>
<style>
div.c1 {padding: 30px; background-color: rgb(47, 0, 255);}
div.c2 {padding: 30px; background-color: rgb(156, 14, 149);}
</style>
<script>
function foo() {
    let x = document.createElement('input');
    x.type = 'button';
    x.value = 'Clicked: 0';
    x.addEventListener('click', run);
    return x;
}

function run(e) {
    if (e.target.clicked) {
        e.target.clicked++;
    } else {
        e.target.clicked = 1;
        e.target.value = 'Clicked: ' + e.target.clicked;
    }

    let y = foo();
    div.insertBefore(y, e.target);
    if (e.target.clicked % 2 == 0) {
        div.classList.replace('c2', 'c1');
    } else {
        div.classList.replace('c1', 'c2');
    }

    if (e.target.clicked >= 2) {
        e.target.removeEventListener('click', run);
    }
}

window.onload = function() {
    div = document.getElementById('div');
    div.appendChild(foo());
}
</script>
</head>
<body>
<div id='div' class='c1'></div>
</body>
</html>
```

**Selected Answers:** [None Given]

**Answers:**

- [No specific options listed, likely image-based]

---

### Question 6

**Text:**

Explain the difference between the Internet and the World Wide Web, highlighting the different protocols they use.

**Selected Answer:** [None Given]

**Correct Answer:** [None]

---

### Question 7

**Text:**

There are many staff in Computer Science at UWA and it is hard to remember them all. The department would like you to create a webpage containing a game for new CS students that help them to memorise CS staff members' names. The specification is as follows:

1. The web application should be written as a single HTML file, containing JavaScript and CSS in the head, and should be runnable on all common browsers.
2. The page title should be "People matcher".
3. The page background should be yellow.
4. At the top of the page there should be a heading "Who's who: CS edition" in Times New Roman font.
5. Next there should be a line containing the text 'Current score = X' where 'X' is the current score.
6. Next there should be a line containing the text: 'Who is Y?' where 'Y' is a name of a person and should be underlined.
7. Next there should be four pictures of people displayed in a line, each with a green border and dimensions 100px by 100px. One of them should be the person named on the previous line.
8. The name and the four pictures should be chosen from a list containing: 6 members of staff (pictures and names are available here) and Taylor Swift (pictures available on the internet!).
9. When the user hovers over the image, the border around the image should turn red.
10. When the user clicks the correct image, the score should increase by 1 and a random new name and four random new images should be displayed.
11. When the user clicks the wrong image, an alert should pop up saying "That was incorrect!" and after that clicking on the existing images shouldn’t do anything.
12. Your page should use the following code:

```jsx
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

**Selected Answer:** [None]

**Correct Answer:** [None]

**Additional Note:** An example screenshot is shown below (not provided in text form).

![Screenshot from 2024-04-09 15-18-00.png](attachment:7f1df9ea-e9ef-4f4b-9742-da40bbdc347b:Screenshot_from_2024-04-09_15-18-00.png)

---

This is the complete extracted text and the questions as presented in the document. Let me know if you need further assistance with analyzing or answering any of these questions!