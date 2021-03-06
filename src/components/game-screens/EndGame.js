import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useEffect } from "react";
export default function Endgame({
  score,
  bestScore,
  setBestScore,
  changeGameState,
  setReset,
}) {
  const { width, height } = useWindowSize();

  let scoreMsg;
  if (score > 0 && score > bestScore) {
    scoreMsg = (
      <div className="record-break">
        <Confetti width={width} height={height} />
        <h1>YOU BROKE A NEW RECORD!!!</h1>
        <h2>YOUR SCORE: {score}</h2>
      </div>
    );
  } else {
    scoreMsg = <h1>Your score is: {score}</h1>;
  }

  return (
    <div
      className="endgame-container"
      onClick={() => {
        setReset(true);
        changeGameState("START");
      }}
    >
      {scoreMsg}
    </div>
  );
}
