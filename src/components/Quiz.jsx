import React, { useState } from "react";
import Questions from "../questions.js";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const handelSelectAnswer = (selectedAnswers) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswers];
    });
  };
  return (
    <div id="quiz">
      <div id="question">
        <p>{Questions[activeQuestionIndex].text}</p>
        <ul id="answers">
          {Questions[activeQuestionIndex].answers.map((answer) => (
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
