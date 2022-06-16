import he from "he";
import Answers from "./Answers";
export default function Question(props) {
  return (
    <div className="question-container center-box">
      <p className="question">{he.decode(props.question)}</p>
      <Answers
        correctAnswer={he.decode(props.correctAnswer)}
        incorrectAnswers={props.incorrectAnswers.map((ans) => he.decode(ans))}
      />
    </div>
  );
}
