import React, { useRef, useEffect } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

const Summary = ({ userAnswers }) => {
  const skippedAnswersCount = useRef(0);
  const correctAnswersCount = useRef(0);
  const totalQuestionsCount = useRef(QUESTIONS.length);

  useEffect(() => {
    // Reset counts when component mounts
    skippedAnswersCount.current = 0;
    correctAnswersCount.current = 0;

    // Count skipped and correct answers
    userAnswers.forEach((answer, index) => {
      if (answer === null) {
        skippedAnswersCount.current++;
      } else if (answer === QUESTIONS[index].answers[0]) {
        correctAnswersCount.current++;
      }
    });
  }, [userAnswers]);

  const skippedAnswersShare = Math.round(
    (skippedAnswersCount.current / totalQuestionsCount.current) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswersCount.current / totalQuestionsCount.current) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
