import React from "react";
import logo from "./assets/images/logo.png";
export default function App() {
  const [gameState, setGameState] = React.useState("START");
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <button className="btn start-btn">Start Quiz</button>
    </div>
  );
}
