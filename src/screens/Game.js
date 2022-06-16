import { useState, useEffect } from "react";
import React from "react";
import Question from "../containers/Question";

export default function Game({ numberOfQuestions }) {
  const [quizData, setQuizData] = useState();

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
    getQuizData();
  }, []);

  //Quiz State Mapping
  const questionComponents =
    quizData &&
    quizData.map((element, index) => {
      return <Question key={index} {...element} />;
    });
  return (
    <div className="quiz-container">
      {quizData ? (
        <>
          <>{questionComponents}</>
          <div className="button-container center-box">
            <button className="btn check-btn">Check answers</button>
          </div>
        </>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
}
