import { useState, useCallback } from "react";

import Answers from "./Answers";
import ProgressBar from "./ProgressBar";
import QUESTIONS from "../questions";
import quizComplete from "../assets/quiz-complete.png";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const activeQuestionIndex = userAnswers.length;
  const currentQuestion = QUESTIONS[activeQuestionIndex];

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

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <main id="quiz">
      <div id="question">
        <ProgressBar
          key={activeQuestionIndex}
          time={10000}
          onTimeout={handleUpdateAnswer}
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
  );
};

export default Quiz;
