import { useState, useEffect } from "react";
import React from "react";

export default function Quiz({ numberOfQuestions }) {
  const [quizData, setQuizData] = useState();

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=easy`
    )
      .then((res) => res.json())
      .then((data) =>
        setQuizData(
          data.results.map((e) => ({
            question: e.question,
            incorrectAnswers: e.incorrect_answers,
            correctAnswer: e.correct_answer,
          }))
        )
      );
  }, []);
  return <div className="quiz-container">Hola</div>;
}
