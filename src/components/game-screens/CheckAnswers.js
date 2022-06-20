import Question from "./containers/Question";
export default function CheckAnswers({ quizData, gameState, changeGameState }) {
  //            map
  //Quiz State -----> Question Components
  const questionComponents =
    quizData &&
    quizData.map((element, index) => {
      return (
        <Question
          key={index}
          {...element}
          allAnsweredCheck={() => 0}
          gameState={gameState}
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
            changeGameState("API REQUEST");
          }}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
