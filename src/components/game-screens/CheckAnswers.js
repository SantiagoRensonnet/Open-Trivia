import Question from "./containers/Question";
export default function CheckAnswers({
  quizData,
  gameState,
  changeGameState,
  answersArray,
  score,
  setScore,
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
          setScore={setScore}
        />
      );
    });
  return (
    <div className="quiz-container">
      <div className="score-container">Score: {score}</div>
      <>{questionComponents}</>
      <div className="button-container center-buttons">
        <button
          className="btn play-btn"
          onClick={() => {
            setPlayAgainBtnPressed(true);
            changeGameState("API REQUEST");
          }}
        >
          Play Again
        </button>
        <button
          className="btn end-btn"
          onClick={() => {
            changeGameState("END GAME");
          }}
        >
          End Game
        </button>
      </div>
    </div>
  );
}
