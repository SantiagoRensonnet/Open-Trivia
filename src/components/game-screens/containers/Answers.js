import React from "react";
import Answer from "./Answer";

export default function Answers(props) {
  //Initialize Array from correct and incorrect answer from API (props)
  const [answersArray, setAnswersArray] = React.useState(
    createAllAnswersArray(props.correctAnswer, props.incorrectAnswers)
  );

  function createAllAnswersArray(correctAns, incorrectArray) {
    const correctAnswerIndex = Math.floor(
      Math.random() * (incorrectArray.length + 1)
    );
    const checkedArray = incorrectArray.map((str) => ({
      isCorrect: false,
      isSelected: false,
      answer: str,
    }));
    checkedArray.splice(correctAnswerIndex, 0, {
      isCorrect: true,
      isSelected: false,
      answer: correctAns,
    }); //checkedArray now has correctAnswer in random index

    return checkedArray;
  }
  React.useEffect(() => {
    props.allAnsweredCheck();
  }, [props.isAnswered]);
  //Event Handlers
  function selectAnswer(selectedAnswerIndex) {
    setAnswersArray((prevState) =>
      prevState.map((answer, index) =>
        index !== selectedAnswerIndex
          ? { ...answer, isSelected: false }
          : { ...answer, isSelected: true }
      )
    );
    props.setIsAnswered(true);
  }
  const Answers = answersArray.map((element, index) => (
    <Answer
      key={index}
      index={index}
      {...element}
      selectAnswer={selectAnswer}
      gameState={props.gameState}
    />
  ));
  return <div className="answers-container">{Answers}</div>;
}
