import Answer from "../components/Answer";
export default function Answers(props) {
  function allAnswers(correctAns, incorrectArray) {
    const correctAnswerIndex = Math.floor(
      Math.random() * (incorrectArray.length + 1)
    );
    const checkedArray = incorrectArray.map((str) => ({
      isCorrect: false,
      answer: str,
    }));
    checkedArray.splice(correctAnswerIndex, 0, {
      isCorrect: true,
      answer: correctAns,
    }); //checkedArray now has correctAnswer in random index
    return checkedArray;
  }

  const Answers = allAnswers(props.correctAnswer, props.incorrectAnswers).map(
    (element, index) => <Answer key={index} {...element} />
  );
  return <ul>{Answers}</ul>;
}
