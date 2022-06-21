import Question from "./containers/Question";
export default function CheckAnswers({
  quizData,
  gameState,
  changeGameState,
  answersArray,
  playAgainBtnPressed,
  setPlayAgainBtnPressed,
}) {
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
          allAnsweredCheck={() => 0}
          gameState={gameState}
          answersArray={answersArray}
        />
      );
    });
  return (
    <div className="quiz-container">
      <>{questionComponents}</>
      <div className="button-container center-box">
        <button
          className="btn check-btn"
          onClick={() => {
            setPlayAgainBtnPressed(true);
            changeGameState("API REQUEST");
          }}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
