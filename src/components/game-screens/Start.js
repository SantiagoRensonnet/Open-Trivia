import logo from "../../assets/images/logo.png";
export default function Start({ changeGameState, setScore, bestScore }) {
  return (
    <>
      <div className="start-container">
        <img src={logo} alt="Logo" className="logo" />

        <button
          className="btn start-btn"
          onClick={() => {
            setScore(0);
            changeGameState("API REQUEST");
          }}
        >
          START
        </button>
        {bestScore > 0 && (
          <h1 className="best-score">Best Score: {bestScore}</h1>
        )}
      </div>
    </>
  );
}
