import React, { useState, useRef } from "react";
import './Quiz2.css'
const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["New York", "Berlin", "Paris", "Tokyo"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"],
    correctAnswer: "Vatican City",
  },
  {
    question: "What is the largest animal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Euro", "Dollar"],
    correctAnswer: "Yen",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Au", "Ag", "Pb"],
    correctAnswer: "Au",
  },
  {
    question: "What is the highest mountain in Africa?",
    options: ["Kilimanjaro", "Mount Kenya", "Mount Meru", "Mount Elgon"],
    correctAnswer: "Kilimanjaro",
  },
  {
    question: "What is the name of the longest river in South America?",
    options: ["Amazon River", "Orinoco River", "Paraná River", "Magdalena River"],
    correctAnswer: "Amazon River",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "HO", "O2", "H"],
    correctAnswer: "H2O",
  },
  {
    question: "What is the name of the second largest ocean?",
    options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Arctic Ocean"],
    correctAnswer: "Atlantic Ocean",
  }
  
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const selectedOptionRef = useRef(null);

  const handleNextClick = () => {
    const isCorrect = questionsData[currentQuestionIndex].options[selectedOptionIndex] === questionsData[currentQuestionIndex].correctAnswer;

    if (isCorrect) {
      setScore(score + 2);
    }

    if (currentQuestionIndex === questionsData.length - 1) {
      
      submitTest();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
    }
  };

  const submitTest = () => {
    const passingScore = 12;
    const isPassing = score >= passingScore;

    if (isPassing) {
      alert("Congratulations, you passed the test!");
    } else {
      alert("Sorry, you did not pass the test.");
    }

    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setScore(0);
  };

  return (
    <div className="quiz-container"> 
      <h1>Test</h1>
      {currentQuestionIndex < questionsData.length ? (
        <div>
          <p>{questionsData[currentQuestionIndex].question}</p>
          <ul>
            {questionsData[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={index}
                    checked={selectedOptionIndex === index}
                    onChange={() => setSelectedOptionIndex(index)}
                    ref={selectedOptionIndex === index ? selectedOptionRef : null}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button className="next-btn" onClick={handleNextClick}>{currentQuestionIndex === questionsData.length - 1 ? "Submit" : "Next"}</button>
        </div>
      ) : (
        <div>
          <p>Your score is {score} out of {questionsData.length * 2}.</p>
          <button className="submit-btn" onClick={submitTest}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;