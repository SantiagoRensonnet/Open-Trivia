import he from "he";
import Answers from "./Answers";
export default function Question(props) {
  return (
    <div className="question-container">
      <p>{he.decode(props.question)}</p>
      <Answers
        correctAnswer={props.correctAnswer}
        incorrectAnswers={props.incorrectAnswers}
      />
    </div>
  );
}
