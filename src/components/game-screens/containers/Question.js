import React from "react";
import he from "he";
import Answers from "./Answers";
export default function Question(props) {
  const [isAnswered, setIsAnswered] = React.useState(false);
  return (
    <div className="question-container center-box">
      <p className="question">{he.decode(props.question)}</p>
      <Answers
        correctAnswer={he.decode(props.correctAnswer)}
        incorrectAnswers={props.incorrectAnswers.map((ans) => he.decode(ans))}
        isAnswered={isAnswered}
        setIsAnswered={setIsAnswered}
        allAnsweredCheck={props.allAnsweredCheck}
        gameState={props.gameState}
        answersArray={props.answersArray}
        setAnswersArray={props.setAnswersArray}
        questionNumber={props.questionNumber}
      />
    </div>
  );
}
