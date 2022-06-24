import { useEffect } from "react";
export default function Answer(props) {
  useEffect(() => {
    if (props.gameState === "CHECK ANSWERS") {
      if (props.isSelected) {
        if (props.isCorrect) {
          props.setScore((prevScore) => prevScore + 100);
        } else {
          props.setScore((prevScore) => prevScore - 50);
        }
      }
    }
  }, []);

  let style;
  if (props.gameState === "CHECK ANSWERS") {
    if (props.isCorrect) {
      if (props.isSelected) {
        style = "answer answer-correct";
      } else {
        style = "answer answer-correct-not-selected";
      }
    } else {
      if (props.isSelected) {
        style = "answer answer-incorrect";
      } else {
        style = "answer answer-none";
      }
    }
  } else {
    style = props.isSelected
      ? "answer answer-selected"
      : "answer answer-not-selected";
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
