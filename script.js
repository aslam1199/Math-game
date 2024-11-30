const questions = [
  { question: "17 + 43 = ?", answer: 60 },
  { question: "50 - 7 = ?", answer: 43 },
  { question: "71 + 72 = ?", answer: 143 },
  { question: "286 ÷ 2 = ?", answer: 143 },
  { question: "13 × 11 = ?", answer: 143 },
];

let currentQuestionIndex = 0;

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const feedback = document.getElementById("message");

  if (userAnswer === questions[currentQuestionIndex].answer) {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      document.getElementById("question").textContent =
        "Question " + (currentQuestionIndex + 1) + ": " + questions[currentQuestionIndex].question;
      document.getElementById("answer").value = "";
      feedback.textContent = "Correct! Move to the next question.";
    } else {
      document.getElementById("game").classList.add("hidden");
      document.getElementById("final-message").classList.remove("hidden");
    }
  } else {
    feedback.textContent = "Wrong answer. Try again!";
  }
}
