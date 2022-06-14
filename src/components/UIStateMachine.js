import React from "react";
import Quiz from "../containers/Quiz";
import Start from "./../containers/Start";

export default function UIStateMachine({ gameState, gameStateHandle }) {
  switch (gameState) {
    case "START":
      return <Start gameStateHandle={gameStateHandle} />;

    case "QUIZ":
      return <Quiz numberOfQuestions={5} />;

    default:
      return new Error("UI Failed");
  }
}
