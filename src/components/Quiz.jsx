import React, { useState, useCallback } from "react";
import Questions from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

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
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
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
