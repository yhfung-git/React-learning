import { useState, useCallback } from "react";

import Answer from "./Answer";
import ProgressBar from "./ProgressBar";
import QUESTIONS from "../questions";
import quizComplete from "../assets/quiz-complete.png";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const currentQuestion = QUESTIONS[activeQuestionIndex];

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }, []);

  // const handleSkipAnswer = useCallback(
  //   (skip) => handleSelectAnswer(skip),
  //   [handleSelectAnswer]
  // );

  console.log(userAnswers);

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...currentQuestion.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <main id="quiz">
      <div id="question">
        <ProgressBar
          key={activeQuestionIndex}
          time={10000}
          onTimeout={handleSelectAnswer}
        />
        <h2>{currentQuestion.text}</h2>
      </div>
      <ul id="answers">
        {shuffledAnswers.map((answer, index) => (
          <Answer key={index} onSelect={handleSelectAnswer} answer={answer} />
        ))}
      </ul>
    </main>
  );
};

export default Quiz;
