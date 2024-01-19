import { useState, useEffect } from "react";
import { resultInitialState } from "./constants";
import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useLayoutEffect } from "react";
const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const { question, options, correctAnswer } = questions[currentQuestion];
  const navigate = useNavigate();
  useEffect(() => {
    const keyValueArray = Object.entries(options);
    const shuffledArray = shuffleArray(keyValueArray);
    const newOptions = Object.fromEntries(shuffledArray);

    // Update the options in the state
    setShuffledOptions(newOptions);
  }, []); // Empty dependency array ensures this effect runs only once

  const [shuffledOptions, setShuffledOptions] = useState({});

  // Function to shuffle the order of properties in an object
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const onTryAgain = () => {
    navigate("/");
    setTimeout(() => {
      setResult(resultInitialState);
      setShowResult(false);
    }, 1000);
  };
  const handleTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };

  
  useEffect(() => {
    const variants = document.querySelectorAll(".variant");
    variants.forEach((variant) => {
      variant.classList.contains("wrong") && variant.classList.remove("wrong");
      variant.classList.contains("correct") &&
      variant.classList.remove("correct");
      variant.addEventListener("click", handleClick);
    });
    function handleClick(e) {
      if (this.dataset.choice === correctAnswer) {
        this.classList.add("correct");
      } else {
        this.classList.add("wrong");
      }
      variants.forEach((variant) => {
        variant.removeEventListener("click", handleClick);
        if (variant.dataset.choice === correctAnswer) {
          variant.classList.add("correct");
        }
      });
    }
  }, [shuffledOptions,options]);
  return (
    <>
      <m.div
        className="quiz-container"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, ease: "linear" }}
      >
        {!showResult ? (
          <>
            <span className="active-question-no">{currentQuestion + 1}</span>
            <span className="total-question">/{questions.length}</span>
            <h2>{question}</h2>
            <ul>
              {Object.keys(shuffledOptions).map((choice, index) => (
                <li
                  onClick={() => onAnswerClick(choice, index)}
                  key={choice}
                  className={`variant`}
                  data-choice={choice}
                >
                  {options[choice]}
                </li>
              ))}
            </ul>
            <div className="footer">
              <button
                onClick={() => onClickNext(answer)}
                disabled={answerIdx === null}
              >
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={onTryAgain}>Try Again</button>
          </div>
        )}
      </m.div>
    </>
  );
};

export default Quiz;
