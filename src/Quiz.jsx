import { useState, useEffect } from "react";
import { questions, resultInitialState } from "./constants";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

const MIN_QUESTION_NUMBER = 1;
const MAX_QUESTION_NUMBER = 962;
const QUIZ_QUESTION_LIMIT = 60;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [startQuestion, setStartQuestion] = useState("");
  const [endQuestion, setEndQuestion] = useState("");
  const [intervalError, setIntervalError] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const selectedQuestion = quizQuestions[currentQuestion];
  const { question, options, correctAnswer } = selectedQuestion || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!options) return;

    const keyValueArray = Object.entries(options);
    const shuffledArray = shuffleArray(keyValueArray);
    const newOptions = Object.fromEntries(shuffledArray);

    // Update the options in the state
    setShuffledOptions(newOptions);
  }, [options]);

  const [shuffledOptions, setShuffledOptions] = useState({});

  // Function to shuffle the order of properties in an object
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const getQuestionInterval = () => {
    const start =
      startQuestion === "" ? MIN_QUESTION_NUMBER : Number(startQuestion);
    const end = endQuestion === "" ? MAX_QUESTION_NUMBER : Number(endQuestion);

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
      return {
        error: "Question numbers must be whole numbers.",
      };
    }

    if (start < MIN_QUESTION_NUMBER) {
      return {
        error: `Start question cannot be less than ${MIN_QUESTION_NUMBER}.`,
      };
    }

    if (end > MAX_QUESTION_NUMBER) {
      return {
        error: `End question cannot be greater than ${MAX_QUESTION_NUMBER}.`,
      };
    }

    if (start > end) {
      return {
        error: "Start question must be smaller than or equal to end question.",
      };
    }

    return { start, end, error: "" };
  };

  const getRandomQuizQuestions = (start, end) => {
    const filteredQuestions = questions.filter((_, index) => {
      const questionNumber = index + 1;
      return questionNumber >= start && questionNumber <= end;
    });

    return shuffleArray([...filteredQuestions]).slice(0, QUIZ_QUESTION_LIMIT);
  };

  const startQuiz = () => {
    const { start, end, error } = getQuestionInterval();

    if (error) {
      setIntervalError(error);
      return;
    }

    setQuizQuestions(getRandomQuizQuestions(start, end));
    setIntervalError("");
    setCurrentQuestion(0);
    setAnswerIdx(null);
    setAnswer(null);
    setResult(resultInitialState);
    setShowResult(false);
    setIsQuizStarted(true);
  };

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
          },
    );
    if (currentQuestion !== quizQuestions.length - 1) {
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
      setIsQuizStarted(false);
      setQuizQuestions([]);
      setCurrentQuestion(0);
      setAnswerIdx(null);
      setAnswer(null);
    }, 1000);
  };

  useEffect(() => {
    if (!correctAnswer) return;

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
  }, [shuffledOptions, options, correctAnswer]);
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
        {!isQuizStarted ? (
          <div className="question-interval">
            <h2>Choose question interval</h2>
            <div className="interval-inputs">
              <label>
                Start question number
                <input
                  type="number"
                  min={MIN_QUESTION_NUMBER}
                  max={MAX_QUESTION_NUMBER}
                  value={startQuestion}
                  placeholder={`${MIN_QUESTION_NUMBER}`}
                  onChange={(e) => setStartQuestion(e.target.value)}
                />
              </label>
              <label>
                End question number
                <input
                  type="number"
                  min={MIN_QUESTION_NUMBER}
                  max={MAX_QUESTION_NUMBER}
                  value={endQuestion}
                  placeholder={`${MAX_QUESTION_NUMBER}`}
                  onChange={(e) => setEndQuestion(e.target.value)}
                />
              </label>
            </div>
            {intervalError && <p className="interval-error">{intervalError}</p>}
            <button onClick={startQuiz}>Start Quiz</button>
          </div>
        ) : !showResult ? (
          <>
            <span className="active-question-no">{currentQuestion + 1}</span>
            <span className="total-question">/{quizQuestions.length}</span>
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
                {currentQuestion === quizQuestions.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Questions: <span>{quizQuestions.length}</span>
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
