import React from "react";
import UIStateMachine from "./components/UIStateMachine";

export default function App() {
  const [gameState, setGameState] = React.useState("START");

  //Event Handlers
  function gameStateHandle(newGameState) {
    setGameState(newGameState);
  }

  return (
    <div className="container">
      <UIStateMachine gameState={gameState} gameStateHandle={gameStateHandle} />
    </div>
  );
}
