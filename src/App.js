import React, { useEffect, useState } from "react";
import UIStateMachine from "./components/utils/UIStateMachine";

export default function App() {
  //************************Global States*******************************
  //********************************************************************
  //Game State
  const [gameState, setGameState] = useState("START");
  //Quiz Data from API
  const [quizData, setQuizData] = useState(null);
  //Answer Data from API
  const [answersArray, setAnswersArray] = useState(null);
  //PLAY AGAIN btn flag
  const [playAgainBtnPressed, setPlayAgainBtnPressed] = useState(true);
  //Game Score
  const [score, setScore] = useState(null);
  //Best Score
  const [bestScore, setBestScore] = useState(
    () => JSON.parse(localStorage.getItem("best_score")) || 0
  );
  //Reset
  const [reset, setReset] = useState(false);
  //********************************************************************
  //Event Handlers
  function changeGameState(newGameState) {
    setGameState(newGameState);
  }
  //the big reset
  if (reset) {
    setQuizData(null);
    setAnswersArray(null);
    setPlayAgainBtnPressed(true);
    setScore(null);
    setReset(false);
    if (score > bestScore) {
      setBestScore(score);
    }
  }
  useEffect(() => {
    localStorage.setItem("best_score", bestScore);
  }, [bestScore]);
  return (
    <div className="container">
      <UIStateMachine
        gameState={gameState}
        changeGameState={changeGameState}
        quizData={quizData}
        setQuizData={setQuizData}
        answersArray={answersArray}
        setAnswersArray={setAnswersArray}
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        playAgainBtnPressed={playAgainBtnPressed}
        setPlayAgainBtnPressed={setPlayAgainBtnPressed}
        setReset={setReset}
        numberOfQuestions={5}
      />
    </div>
  );
}
