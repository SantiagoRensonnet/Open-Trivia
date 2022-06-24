import React from "react";
import Start from "../game-screens/Start";
import APIRequest from "../utils/APIRequest";
import Round from "../game-screens/Round";
import CheckAnswers from "../game-screens/CheckAnswers";
import EndGame from "../game-screens/EndGame";
import Error from "./Error";

export default function UIStateMachine({
  gameState,
  changeGameState,
  quizData,
  setQuizData,
  answersArray,
  setAnswersArray,
  score,
  setScore,
  bestScore,
  setBestScore,
  setReset,
  playAgainBtnPressed,
  setPlayAgainBtnPressed,
  numberOfQuestions,
}) {
  switch (gameState) {
    case "START":
      return (
        <Start
          changeGameState={changeGameState}
          setScore={setScore}
          bestScore={bestScore}
        />
      );

    case "API REQUEST":
      return (
        <APIRequest
          numberOfQuestions={numberOfQuestions}
          changeGameState={changeGameState}
          quizData={quizData}
          setQuizData={setQuizData}
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
          score={score}
        />
      );

    case "CHECK ANSWERS":
      return (
        <CheckAnswers
          gameState={gameState}
          changeGameState={changeGameState}
          quizData={quizData}
          answersArray={answersArray}
          setPlayAgainBtnPressed={setPlayAgainBtnPressed}
          score={score}
          setScore={setScore}
        />
      );

    case "END GAME":
      return (
        <EndGame
          changeGameState={changeGameState}
          score={score}
          bestScore={bestScore}
          setBestScore={setBestScore}
          setReset={setReset}
        />
      );

    default:
      return <Error msg="Machine Failed" />;
  }
}
