// Quiz Data
const quizQuestions = [
    {
      question: "What is the capital of Uganda?",
      options: ["Nairobi", "Buganda", "Kampala", "Arua"],
      correctAnswer: "Kampala"
    },
    {
      question: "What is the fifth book in the bible?",
      options: ["Exodus", "Genesis", "Deuteronomy", "Numbers"],
      correctAnswer: "Deuteronomy"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
        question: "Who is always know to have six sense?",
        options: ["Phycologist", "Men", "Child", "Women"],
        correctAnswer: "Women"
      }
  ];
  
  // Quiz Variables
  let currentQuestion = 0;
  let score = 0;
  
  // Function to load the current question
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    questionElement.textContent = quizQuestions[currentQuestion].question;
    optionsElement.innerHTML = "";
  
    quizQuestions[currentQuestion].options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }
  
  // Function to check the answer
  function checkAnswer(answer) {
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
      score++;
      document.getElementById("feedback").textContent = "Correct!";
    } else {
      document.getElementById("feedback").textContent = "Incorrect!";
    }
  }
  
  // Function to load the next question
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      loadQuestion();
      document.getElementById("feedback").textContent = "";
    } else {
      showResult();
    }
  }
  
  // Function to display the final score
  function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score}/${quizQuestions.length}</p>
      <button onclick="restartQuiz()">Retry</button>
    `;
  }
  
  // Function to restart the quiz
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  }
  
  // Initial load
  loadQuestion();