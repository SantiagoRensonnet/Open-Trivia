import React, { useState } from "react";
import UIStateMachine from "./components/utils/UIStateMachine";

export default function App() {
  //gameState
  const [gameState, setGameState] = useState("START");
  //Quiz Data from API
  const [quizData, setQuizData] = useState();

  //Event Handlers
  function changeGameState(newGameState) {
    setGameState(newGameState);
  }

  return (
    <div className="container">
      <UIStateMachine
        gameState={gameState}
        changeGameState={changeGameState}
        quizData={quizData}
        setQuizData={setQuizData}
        numberOfQuestions={5}
      />
    </div>
  );
}
