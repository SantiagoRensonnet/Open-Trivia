import logo from "../assets/images/logo.png";
export default function Start({ gameStateHandle }) {
  return (
    <>
      <img src={logo} alt="Logo" className="logo" />
      <button className="btn start-btn" onClick={() => gameStateHandle("QUIZ")}>
        Start Quiz
      </button>
    </>
  );
}
