import { useState } from "react";
import React from "react";
import Question from "./containers/Question";

export default function Round({
  quizData,
  answersArray,
  setAnswersArray,
  numberOfQuestions,
  gameState,
  changeGameState,
}) {
  //Round Data
  const [questionsAnsweredCount, setQuestionsAnsweredCount] = useState(0);
  const [btnDisable, setBtnDisable] = useState(true);

  //Function that checks if all questions were Responded
  function allAnsweredCheck() {
    setQuestionsAnsweredCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === numberOfQuestions * 2) {
        setBtnDisable(false);
      }
      return newCount;
    });
  }
  //            map
  //Quiz State -----> Question Components
  const questionComponents =
    quizData &&
    quizData.map((element, index) => {
      return (
        <Question
          key={index}
          questionNumber={index}
          {...element}
          allAnsweredCheck={allAnsweredCheck}
          gameState={gameState}
          answersArray={answersArray}
          setAnswersArray={setAnswersArray}
        />
      );
    });
  return (
    <div className="quiz-container">
      <>{questionComponents}</>
      <div className="button-container center-box">
        <button
          className="btn check-btn"
          disabled={btnDisable && true}
          onClick={() => {
            changeGameState("CHECK ANSWERS");
          }}
        >
          Check answers
        </button>
      </div>
    </div>
  );
}
