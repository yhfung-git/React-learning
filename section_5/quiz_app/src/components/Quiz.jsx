import { useState, useCallback } from "react";

import Answers from "./Answers";
import ProgressBar from "./ProgressBar";
import Summary from "./Summary";
import QUESTIONS from "../questions";

const Quiz = () => {
  const [start, setStart] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer) timer = 1000;
  if (answer.isCorrect !== null) timer = 2000;

  const activeQuestionIndex = userAnswers.length;
  const currentQuestion = QUESTIONS[activeQuestionIndex];

  const handleStart = () => {
    setStart(true);
  };

  const handleUpdateAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }, []);

  const handleSelectAnswer = (selectedAnswer) => {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      const isCorrect = currentQuestion.answers[0] === selectedAnswer;
      setAnswer({
        selectedAnswer,
        isCorrect,
      });

      setTimeout(() => {
        setAnswer({
          selectedAnswer: "",
          isCorrect: null,
        });
        handleUpdateAnswer(selectedAnswer);
      }, 2000);
    }, 1000);
  };

  const handleSkipAnswer = useCallback(() => {
    handleUpdateAnswer(null);
  }, [handleUpdateAnswer]);

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  if (quizIsComplete) return <Summary userAnswers={userAnswers} />;

  const timeoutHandler = answer.selectedAnswer === "" ? handleSkipAnswer : null;

  return (
    <>
      {!start && (
        <div id="start">
          <button onClick={handleStart}>Start</button>
        </div>
      )}
      {start && (
        <main id="quiz">
          <div id="question">
            <ProgressBar
              key={activeQuestionIndex}
              time={timer}
              onTimeout={timeoutHandler}
              mode={answerState}
            />
            <h2>{currentQuestion.text}</h2>
          </div>
          <Answers
            key={activeQuestionIndex}
            answers={currentQuestion.answers}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}
          />
        </main>
      )}
    </>
  );
};

export default Quiz;
