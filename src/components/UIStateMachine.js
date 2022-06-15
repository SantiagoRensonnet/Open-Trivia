import React from "react";
import Game from "../screens/Game";
import Start from "./../screens/Start";

export default function UIStateMachine({ gameState, gameStateHandle }) {
  switch (gameState) {
    case "START":
      return <Start gameStateHandle={gameStateHandle} />;

    case "GAME":
      return <Game numberOfQuestions={5} />;

    default:
      return new Error("UI Failed");
  }
}
