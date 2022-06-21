import React, { useEffect } from "react";
import he from "he";
export default function APIRequest({
  changeGameState,
  quizData,
  setQuizData,
  answersArray,
  setAnswersArray,
  playAgainBtnPressed,
  setPlayAgainBtnPressed,
  numberOfQuestions,
}) {
  //Initialize Array from correct and incorrect answer from API
  function createAnswersArray(correctAns, incorrectArray) {
    const correctAnswerIndex = Math.floor(
      Math.random() * (incorrectArray.length + 1)
    );
    const checkedArray = incorrectArray.map((str) => ({
      isCorrect: false,
      isSelected: false,
      answer: he.decode(str),
    }));
    checkedArray.splice(correctAnswerIndex, 0, {
      isCorrect: true,
      isSelected: false,
      answer: he.decode(correctAns),
    }); //checkedArray now has correctAnswer in random index

    return checkedArray;
  }
  //API Async Request
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=easy`
      );
      const data = await res.json();
      setQuizData(
        data.results.map((e) => ({
          question: e.question,
          incorrectAnswers: e.incorrect_answers,
          correctAnswer: e.correct_answer,
        }))
      );
      setAnswersArray(
        data.results.map((e) =>
          createAnswersArray(e.correct_answer, e.incorrect_answers)
        )
      );
    }
    if (quizData && !playAgainBtnPressed) {
      changeGameState("PLAY ROUND");
    } else {
      getData().then(() => setPlayAgainBtnPressed(false));
    }
  }, [playAgainBtnPressed]);

  return (
    <div className="load-container">
      <h1 className="loading">Loading...</h1>
    </div>
  );
}
