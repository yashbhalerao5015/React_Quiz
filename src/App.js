import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(true);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData[step - 1];

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  function handleAnswer(selectedAnswer) {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    handleNext();
  }
  function handleSubmit() {
    alert(`Your Score: ${score}/${quizData.length}`);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step === 1 ? "active" : ""}`}>1</div>
            <div className={`${step === 2 ? "active" : ""}`}>2</div>
            <div className={`${step === 3 ? "active" : ""}`}>3</div>
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
            {step > 1 ? (
              <button
                style={{ backgroundColor: "#11009E", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
            ) : (
              <button
                style={{
                  backgroundColor: "#11009E",
                  color: "#fff",
                  opacity: "0",
                }}
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {step < 3 && (
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
