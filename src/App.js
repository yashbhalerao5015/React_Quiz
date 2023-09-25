import React, { useState } from "react";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Neptune"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "William Shakespeare",
  },
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData[step - 1];

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < quizData.length) setStep(step + 1);
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    handleNext();
  };

  const handleSubmit = () => {
    alert(`Your Score: ${score}/${quizData.length}`);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open Quiz"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {quizData.map((_, index) => (
              <div
                key={index}
                className={`${step === index + 1 ? "active" : ""}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <p className="message">
            Question {step}: {currentQuestion.question}
          </p>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="buttons">
            {step > 1 && (
              <button
                style={{ backgroundColor: "#11009E", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {step < quizData.length && (
              <button
                style={{ backgroundColor: "#11009E", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {step === quizData.length && (
              <button
                style={{ backgroundColor: "#A8DF8E", color: "#000" }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
