import React from "react";
import Start from "../game-screens/Start";
import APIRequest from "../utils/APIRequest";
import Round from "../game-screens/Round";
import CheckAnswers from "../game-screens/CheckAnswers";
import EndGame from "./Endgame";
import Error from "./Error";

export default function UIStateMachine({
  gameState,
  changeGameState,
  quizData,
  setQuizData,
  answersArray,
  setAnswersArray,
  playAgainBtnPressed,
  setPlayAgainBtnPressed,
  numberOfQuestions,
}) {
  switch (gameState) {
    case "START":
      return <Start changeGameState={changeGameState} />;

    case "API REQUEST":
      return (
        <APIRequest
          numberOfQuestions={numberOfQuestions}
          changeGameState={changeGameState}
          quizData={quizData}
          setQuizData={setQuizData}
          answersArray={answersArray}
          setAnswersArray={setAnswersArray}
          playAgainBtnPressed={playAgainBtnPressed}
          setPlayAgainBtnPressed={setPlayAgainBtnPressed}
        />
      );
    case "PLAY ROUND":
      return (
        <Round
          numberOfQuestions={numberOfQuestions}
          gameState={gameState}
          changeGameState={changeGameState}
          quizData={quizData}
          answersArray={answersArray}
          setAnswersArray={setAnswersArray}
        />
      );

    case "CHECK ANSWERS":
      return (
        <CheckAnswers
          gameState={gameState}
          changeGameState={changeGameState}
          quizData={quizData}
          answersArray={answersArray}
          playAgainBtnPressed={playAgainBtnPressed}
          setPlayAgainBtnPressed={setPlayAgainBtnPressed}
        />
      );

    case "END GAME":
      return <EndGame changeGameState={changeGameState} />;

    default:
      return <Error msg="Machine Failed" />;
  }
}
