import React, { useState, useCallback } from "react";
import Questions from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

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
  const shuffledAnswers = [...Questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handelSkipAnser}
        />
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handelSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
