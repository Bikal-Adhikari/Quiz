import React, { useState, useCallback } from "react";
import Questions from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizISComplete = activeQuestionIndex === Questions.length;
  const handelSelectAnswer = useCallback((selectedAnswers) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswers];
    });
  }, []);

  const handelSkipAnser = useCallback(
    () => handelSelectAnswer(null),
    [handelSelectAnswer]
  );

  if (quizISComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handelSelectAnswer}
        onSkipAnswer={handelSkipAnser}
      />
    </div>
  );
};

export default Quiz;
