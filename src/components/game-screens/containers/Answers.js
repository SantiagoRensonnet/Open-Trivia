import React from "react";
import Answer from "./Answer";

export default function Answers(props) {
  React.useEffect(() => {
    props.allAnsweredCheck();
  }, [props.isAnswered]);
  //Event Handlers
  function selectAnswer(selectedAnswerIndex) {
    props.setAnswersArray((allQuestions) =>
      allQuestions.map((question, questionIndex) => {
        if (questionIndex !== props.questionNumber) {
          return question;
        } else {
          return question.map((answer, index) =>
            index !== selectedAnswerIndex
              ? { ...answer, isSelected: false }
              : { ...answer, isSelected: true }
          );
        }
      })
    );
    props.setIsAnswered(true);
  }
  const Answers = props.answersArray[props.questionNumber].map(
    (element, index) => (
      <Answer
        key={index}
        index={index}
        {...element}
        selectAnswer={selectAnswer}
        gameState={props.gameState}
        setScore={props.setScore}
      />
    )
  );
  return <div className="answers-container">{Answers}</div>;
}
