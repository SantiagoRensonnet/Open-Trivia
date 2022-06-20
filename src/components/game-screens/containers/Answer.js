export default function Answer(props) {
  let style;
  if (props.gameState === "CHECK ANSWERS") {
    if (props.isCorrect) {
      style = "answer-correct";
    } else {
      if (props.isSelected) {
        style = "answer-incorrect";
      } else {
        style = "answer-none";
      }
    }
  } else {
    style = props.isSelected ? "answer-selected" : "answer-not-selected";
  }
  return (
    <div
      className={style}
      onClick={() => {
        if (props.gameState === "PLAY ROUND") {
          return props.selectAnswer(props.index);
        }
      }}
    >
      {props.answer}
    </div>
  );
}
