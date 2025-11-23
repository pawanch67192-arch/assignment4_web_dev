const quizQuestions = [
  { question: "Which status code means 'not found'?", answer: "404" },
  { question: "JSX stands for?", answer: "Javascript XML" },
  { question: "Which property is used for spacing between elements?", answer: "margin" },
  { question: "Which keyword is used to declare a constant variable?", answer: "const" },
  { question: "Who is responsible for website layout?", answer: "CSS" }
];
// function to run the quiz
function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {

    let userAnswer = prompt(quizQuestions[i].question);
    
    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct! Nice job.");
      score++; // give a point
    } else {
      alert("Incorrect. The right answer is: " + quizQuestions[i].answer);
    }
  }

  // show final score
  alert("Quiz finished! You scored " + score + " out of " + quizQuestions.length);
}

runQuiz();
