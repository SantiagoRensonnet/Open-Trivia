import React, { useEffect } from "react";

export default function APIRequest({
  quizData,
  changeGameState,
  setQuizData,
  numberOfQuestions,
}) {
  //API Async Request
  useEffect(() => {
    async function getQuizData() {
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
    }
    if (!quizData) {
      getQuizData();
    } else {
      changeGameState("PLAY ROUND");
    }
  }, [quizData]);

  return (
    <div className="load-container">
      <h1 className="loading">Loading...</h1>
    </div>
  );
}
