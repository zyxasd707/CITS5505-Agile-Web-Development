/*
 * quiz.js — Quiz Page Logic
 *
 * Features:
 *   1. Load questions from JSON file via AJAX (XMLHttpRequest)
 *   2. Shuffle questions randomly (Fisher-Yates algorithm)
 *   3. Render questions dynamically using JavaScript
 *   4. Show browser warning if user tries to leave during quiz
 *   5. Calculate score, percentage, and pass/fail on submit
 *   6. Fetch reward image from public API on pass
 *   7. Save attempt history to localStorage
 *
 * Wrapped in an IIFE to avoid polluting the global scope.
 */

(function () {
  "use strict";

  // ============================================================
  // Variables & Constants
  // ============================================================

  // Quiz state
  var questions = [];        // Array of question objects from JSON
  var userAnswers = {};      // Stores user selections: { questionId: optionIndex }
  var quizStarted = false;   // True after the first answer is selected
  var quizSubmitted = false; // True after quiz is submitted
  var passThreshold = 60;    // Minimum percentage to pass (loaded from JSON)

  // DOM elements
  var quizContainer = document.getElementById("quiz-container");
  var resultsSection = document.getElementById("quiz-results");
  var historySection = document.getElementById("quiz-history");

  // Constants
  var STORAGE_KEY = "quiz_attempt_history";
  // Dog CEO API — free public API that returns a random dog image (no API key needed)
  // Documentation: https://dog.ceo/dog-api/
  var REWARD_API = "https://dog.ceo/api/breeds/image/random";


  // ============================================================
  // 1. Load Questions via AJAX
  // ============================================================
  // Questions are loaded exclusively from the external JSON file
  // via AJAX — no questions are stored in this JS source file.

  function loadQuestions() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data/questions.json", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        try {
          // Try to parse the AJAX response
          if ((xhr.status === 200 || xhr.status === 0) && xhr.responseText) {
            var data = JSON.parse(xhr.responseText);
            questions = data.quiz.questions;
            passThreshold = data.quiz.passThreshold || 60;
          } else {
            // AJAX failed — show error message
            showLoadError();
            return;
          }
        } catch (e) {
          // JSON parse error — show error message
          showLoadError();
          return;
        }

        // Randomise question order
        shuffleArray(questions);

        // Build the quiz UI and show past attempts
        renderQuiz();
        renderHistory();
      }
    };

    // If XMLHttpRequest throws (e.g. CORS on file://), try fetch as fallback
    try {
      xhr.send();
    } catch (e) {
      loadQuestionsViaFetch();
    }
  }

  // Fallback loader using fetch API for file:// protocol compatibility
  function loadQuestionsViaFetch() {
    if (typeof fetch === "undefined") {
      showLoadError();
      return;
    }
    fetch("data/questions.json")
      .then(function (response) { return response.json(); })
      .then(function (data) {
        questions = data.quiz.questions;
        passThreshold = data.quiz.passThreshold || 60;
        shuffleArray(questions);
        renderQuiz();
        renderHistory();
      })
      .catch(function () {
        showLoadError();
      });
  }

  // Display a user-friendly error when AJAX loading fails
  function showLoadError() {
    quizContainer.innerHTML =
      '<div class="card" style="text-align:center; padding:3rem;">' +
      '  <span class="material-symbols-outlined" style="font-size:3rem; color:var(--error);">error</span>' +
      '  <h3 class="headline-sm" style="margin:1rem 0 0.5rem;">Unable to Load Questions</h3>' +
      '  <p class="body-lg">Please serve this site via a local web server (e.g. ' +
      '  <code>python -m http.server</code>) instead of opening the HTML file directly.</p>' +
      '  <button class="btn-secondary" id="btn-retry" style="margin-top:1.5rem;">' +
      '    <span class="material-symbols-outlined" style="font-size:1rem;">refresh</span> Retry' +
      '  </button>' +
      '</div>';
    var retryBtn = document.getElementById("btn-retry");
    if (retryBtn) {
      retryBtn.addEventListener("click", function () {
        quizContainer.innerHTML = '<p class="body-lg">Loading questions&hellip;</p>';
        loadQuestions();
      });
    }
  }


  // ============================================================
  // 2. Shuffle Array (Fisher-Yates Algorithm)
  // ============================================================
  // Randomly reorders array elements in-place
  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }


  // ============================================================
  // 3. Render Quiz Questions
  // ============================================================
  // Dynamically creates all question cards, radio buttons, and submit button
  function renderQuiz() {
    var html = '';

    // Progress bar
    html += '<div class="quiz-progress" id="quiz-progress">';
    html += '  <div class="quiz-progress__bar" id="quiz-progress-bar" style="width:0%"></div>';
    html += '</div>';
    html += '<p class="quiz-progress__text" id="quiz-progress-text">';
    html += '  0 of ' + questions.length + ' answered';
    html += '</p>';

    // Loop through each question and build HTML
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];

      html += '<div class="quiz-question card" id="question-' + q.id + '">';
      html += '  <div class="quiz-question__number">';
      html += '    <span class="tag tag--accent">Question ' + (i + 1) + '</span>';
      html += '  </div>';
      html += '  <h3 class="quiz-question__text">' + escapeHtml(q.question) + '</h3>';
      html += '  <div class="quiz-options">';

      // Build radio button options
      for (var j = 0; j < q.options.length; j++) {
        html += '<label class="quiz-option" id="option-' + q.id + '-' + j + '">';
        html += '  <input type="radio" name="q' + q.id + '" value="' + j + '" />';
        html += '  <span class="quiz-option__radio"></span>';
        html += '  <span class="quiz-option__text">' + escapeHtml(q.options[j]) + '</span>';
        html += '</label>';
      }

      html += '  </div>';
      html += '</div>';
    }

    // Submit button
    html += '<div style="text-align:center; margin-top:2rem;">';
    html += '  <button class="btn-primary" id="btn-submit"';
    html += '    style="font-size:1.1rem; padding:1rem 3rem;">';
    html += '    <span class="material-symbols-outlined" style="font-size:1.2rem;">send</span>';
    html += '    Submit Assessment';
    html += '  </button>';
    html += '</div>';

    // Insert into the page
    quizContainer.innerHTML = html;

    // Attach event listeners to all radio buttons
    var radios = quizContainer.querySelectorAll('input[type="radio"]');
    for (var k = 0; k < radios.length; k++) {
      radios[k].addEventListener("change", handleAnswerSelect);
    }

    // Attach click handler to submit button
    document.getElementById("btn-submit").addEventListener("click", handleSubmit);
  }


  // ============================================================
  // 4. Handle Answer Selection
  // ============================================================
  function handleAnswerSelect(e) {
    var radio = e.target;
    var qId = parseInt(radio.name.substring(1), 10);  // "q3" -> 3
    var selected = parseInt(radio.value, 10);          // "2" -> 2

    // Save the user's choice
    userAnswers[qId] = selected;

    // Enable browser leave-warning after first answer
    if (!quizStarted) {
      quizStarted = true;
      window.addEventListener("beforeunload", warnBeforeLeave);
    }

    // Highlight the selected option visually
    var card = document.getElementById("question-" + qId);
    if (card) {
      var options = card.querySelectorAll(".quiz-option");
      for (var i = 0; i < options.length; i++) {
        options[i].classList.remove("quiz-option--selected");
      }
      var selectedLabel = document.getElementById("option-" + qId + "-" + selected);
      if (selectedLabel) {
        selectedLabel.classList.add("quiz-option--selected");
      }
    }

    // Update the progress bar
    updateProgress();
  }


  // ============================================================
  // 5. Update Progress Bar
  // ============================================================
  function updateProgress() {
    var answered = Object.keys(userAnswers).length;
    var total = questions.length;
    var pct = Math.round((answered / total) * 100);

    var bar = document.getElementById("quiz-progress-bar");
    var text = document.getElementById("quiz-progress-text");
    if (bar) bar.style.width = pct + "%";
    if (text) text.textContent = answered + " of " + total + " answered";
  }


  // ============================================================
  // 6. Browser Leave Warning
  // ============================================================
  // Shows the browser's built-in "are you sure?" dialog
  function warnBeforeLeave(e) {
    if (!quizSubmitted) {
      e.preventDefault();
      e.returnValue = "";
    }
  }


  // ============================================================
  // 7. Handle Quiz Submission
  // ============================================================
  function handleSubmit() {

    // -- Step A: Check all questions are answered --
    var unanswered = [];
    for (var i = 0; i < questions.length; i++) {
      if (userAnswers[questions[i].id] === undefined) {
        unanswered.push(i + 1);
      }
    }

    if (unanswered.length > 0) {
      // Highlight unanswered questions with red border
      for (var u = 0; u < questions.length; u++) {
        var card = document.getElementById("question-" + questions[u].id);
        if (userAnswers[questions[u].id] === undefined) {
          card.classList.add("quiz-question--unanswered");
        } else {
          card.classList.remove("quiz-question--unanswered");
        }
      }
      // Scroll to the first unanswered question
      var firstUnanswered = document.getElementById(
        "question-" + questions[unanswered[0] - 1].id
      );
      if (firstUnanswered) {
        firstUnanswered.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      showToast("Please answer all questions. (" + unanswered.length + " remaining)");
      return;
    }

    // -- Step B: Calculate score --
    var score = 0;
    for (var j = 0; j < questions.length; j++) {
      if (userAnswers[questions[j].id] === questions[j].answer) {
        score++;
      }
    }
    var total = questions.length;
    var percentage = Math.round((score / total) * 100);
    var passed = percentage >= passThreshold;

    // -- Step C: Mark quiz as submitted, remove leave warning --
    quizSubmitted = true;
    window.removeEventListener("beforeunload", warnBeforeLeave);

    // -- Step D: Show correct/wrong answers --
    showAnswerFeedback();

    // -- Step E: Disable all radio buttons --
    var radios = quizContainer.querySelectorAll('input[type="radio"]');
    for (var r = 0; r < radios.length; r++) {
      radios[r].disabled = true;
    }

    // -- Step F: Hide submit button --
    document.getElementById("btn-submit").style.display = "none";

    // -- Step G: Show results, save to history --
    displayResults(score, total, percentage, passed);
    saveAttempt(score, total, percentage, passed);
    renderHistory();

    // -- Step H: Fetch reward if passed --
    if (passed) {
      fetchReward();
    }

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }


  // ============================================================
  // 8. Show Answer Feedback (correct/wrong highlighting)
  // ============================================================
  function showAnswerFeedback() {
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var userChoice = userAnswers[q.id];
      var correctChoice = q.answer;

      // Always highlight the correct answer in green
      var correctLabel = document.getElementById("option-" + q.id + "-" + correctChoice);
      if (correctLabel) {
        correctLabel.classList.add("quiz-option--correct");
      }

      // If user picked the wrong answer, highlight it in red
      if (userChoice !== correctChoice) {
        var wrongLabel = document.getElementById("option-" + q.id + "-" + userChoice);
        if (wrongLabel) {
          wrongLabel.classList.add("quiz-option--wrong");
        }
        var card = document.getElementById("question-" + q.id);
        if (card) {
          card.classList.add("quiz-question--incorrect");
        }
      }
    }
  }


  // ============================================================
  // 9. Display Results Panel
  // ============================================================
  function displayResults(score, total, percentage, passed) {
    var statusClass = passed ? "quiz-result--pass" : "quiz-result--fail";
    var statusIcon = passed ? "emoji_events" : "close";
    var statusText = passed
      ? "Congratulations — You Passed!"
      : "Not Yet — Keep Studying!";
    var statusSub = passed
      ? "You have demonstrated a solid understanding of web fundamentals."
      : "Review the tutorial material and try again. You need " + passThreshold + "% to pass.";

    var html = '';
    html += '<div class="card ' + statusClass + '" style="margin-top:3rem;">';

    // Header
    html += '<div style="text-align:center;">';
    html += '  <span class="material-symbols-outlined quiz-result__icon">' + statusIcon + '</span>';
    html += '  <h2 class="headline-md" style="margin:1rem 0 0.5rem;">' + statusText + '</h2>';
    html += '  <p class="body-lg" style="margin-bottom:2rem;">' + statusSub + '</p>';
    html += '</div>';

    // Score / Percentage / Threshold
    html += '<div class="quiz-result__metrics">';
    html += '  <div class="quiz-result__metric">';
    html += '    <div class="quiz-result__metric-value">' + score + '/' + total + '</div>';
    html += '    <div class="quiz-result__metric-label">Score</div>';
    html += '  </div>';
    html += '  <div class="quiz-result__metric">';
    html += '    <div class="quiz-result__metric-value">' + percentage + '%</div>';
    html += '    <div class="quiz-result__metric-label">Percentage</div>';
    html += '  </div>';
    html += '  <div class="quiz-result__metric">';
    html += '    <div class="quiz-result__metric-value">' + passThreshold + '%</div>';
    html += '    <div class="quiz-result__metric-label">Pass Threshold</div>';
    html += '  </div>';
    html += '</div>';

    // Reward container (filled by fetchReward if passed)
    if (passed) {
      html += '<div id="reward-container" class="quiz-reward">';
      html += '  <p style="text-align:center; color:var(--on-surface-variant);">Loading your reward...</p>';
      html += '</div>';
    }

    // Retake button (event listener attached below — no inline onclick)
    html += '<div style="text-align:center; margin-top:2rem;">';
    html += '  <button class="btn-secondary" id="btn-retake"';
    html += '    style="font-size:0.9rem; padding:0.75rem 2rem;">';
    html += '    <span class="material-symbols-outlined" style="font-size:1rem;">refresh</span>';
    html += '    Retake Assessment';
    html += '  </button>';
    html += '</div>';

    html += '</div>';

    resultsSection.innerHTML = html;
    resultsSection.style.display = "block";

    // Attach retake button listener using addEventListener (best practice)
    document.getElementById("btn-retake").addEventListener("click", function () {
      location.reload();
    });
  }


  // ============================================================
  // 10. Fetch Reward from Public API (Dog CEO)
  // ============================================================
  // On pass, loads a random dog image as a reward
  function fetchReward() {
    var container = document.getElementById("reward-container");
    if (!container) return;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", REWARD_API, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);

          if (data.status === "success" && data.message) {
            var html = '';
            html += '<div style="text-align:center;">';
            html += '  <h4 class="label-lg" style="color:var(--secondary); margin-bottom:1rem;">';
            html += '    <span class="material-symbols-outlined" style="font-size:1.2rem; vertical-align:middle;">redeem</span>';
            html += '    Your Reward';
            html += '  </h4>';
            html += '  <p class="body-lg" style="margin-bottom:1rem;">';
            html += '    Here is a random adorable dog to celebrate your achievement!';
            html += '  </p>';
            html += '  <img src="' + escapeAttr(data.message) + '"';
            html += '    alt="Reward: a random dog photo" class="quiz-reward__img" />';
            html += '  <p style="font-size:0.75rem; color:var(--outline); margin-top:0.75rem;">';
            html += '    Image from Dog CEO API';
            html += '  </p>';
            html += '</div>';
            container.innerHTML = html;
          }
        } else {
          container.innerHTML =
            '<p style="text-align:center; color:var(--on-surface-variant);">' +
            'Could not load reward. But you still passed!</p>';
        }
      }
    };

    xhr.send();
  }


  // ============================================================
  // 11. localStorage — Save & Load History
  // ============================================================

  // Read all past attempts from localStorage
  function getHistory() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  // Save a new attempt to localStorage
  function saveAttempt(score, total, percentage, passed) {
    var history = getHistory();
    history.push({
      score: score,
      total: total,
      percentage: percentage,
      passed: passed,
      date: new Date().toISOString()
    });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (e) {
      // Fails silently in private browsing mode
    }
  }


  // ============================================================
  // 12. Render Attempt History Table
  // ============================================================
  function renderHistory() {
    var history = getHistory();

    // Hide section if no history exists
    if (history.length === 0) {
      historySection.style.display = "none";
      return;
    }

    var html = '';
    html += '<div class="card" style="margin-top:2rem;">';

    // Header with Clear button
    html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">';
    html += '  <h3 class="headline-sm">';
    html += '    <span class="material-symbols-outlined" style="vertical-align:middle; margin-right:0.5rem;">history</span>';
    html += '    Attempt History';
    html += '  </h3>';
    html += '  <button class="btn-tertiary btn-sm" id="btn-clear-history" style="color:var(--error);">';
    html += '    <span class="material-symbols-outlined" style="font-size:1rem;">delete</span> Clear';
    html += '  </button>';
    html += '</div>';

    // Table
    html += '<div class="quiz-history-table-wrap">';
    html += '<table class="quiz-history-table">';
    html += '  <thead><tr>';
    html += '    <th>#</th>';
    html += '    <th>Date &amp; Time</th>';
    html += '    <th>Score</th>';
    html += '    <th>Percentage</th>';
    html += '    <th>Result</th>';
    html += '  </tr></thead>';
    html += '  <tbody>';

    // Show most recent attempt first
    for (var i = history.length - 1; i >= 0; i--) {
      var attempt = history[i];
      var d = new Date(attempt.date);
      var dateStr = d.toLocaleDateString() + " " +
        d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      var resultTag = attempt.passed
        ? '<span class="tag tag--success">Passed</span>'
        : '<span class="tag" style="background:var(--error-container); color:#fff;">Failed</span>';

      html += '<tr>';
      html += '  <td>' + (history.length - i) + '</td>';
      html += '  <td>' + dateStr + '</td>';
      html += '  <td>' + attempt.score + '/' + attempt.total + '</td>';
      html += '  <td>' + attempt.percentage + '%</td>';
      html += '  <td>' + resultTag + '</td>';
      html += '</tr>';
    }

    html += '  </tbody>';
    html += '</table>';
    html += '</div>';
    html += '</div>';

    historySection.innerHTML = html;
    historySection.style.display = "block";

    // Attach Clear button handler
    var clearBtn = document.getElementById("btn-clear-history");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (e) {
          // ignore
        }
        historySection.innerHTML = "";
        historySection.style.display = "none";
      });
    }
  }


  // ============================================================
  // 13. Toast Notification (bottom pop-up message)
  // ============================================================
  function showToast(message) {
    // Remove any existing toast
    var existing = document.getElementById("quiz-toast");
    if (existing) existing.remove();

    // Create toast element
    var toast = document.createElement("div");
    toast.id = "quiz-toast";
    toast.className = "quiz-toast";
    toast.innerHTML =
      '<span class="material-symbols-outlined" style="font-size:1.2rem;">warning</span> ' +
      escapeHtml(message);
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(function () {
      toast.classList.add("quiz-toast--visible");
    });

    // Auto-dismiss after 4 seconds
    setTimeout(function () {
      toast.classList.remove("quiz-toast--visible");
      setTimeout(function () { toast.remove(); }, 300);
    }, 4000);
  }


  // ============================================================
  // 14. Utility Functions
  // ============================================================

  // Safely escape HTML to prevent XSS attacks
  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // Safely escape attribute values
  function escapeAttr(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }


  // ============================================================
  // 15. Start the Quiz
  // ============================================================
  loadQuestions();

})();
