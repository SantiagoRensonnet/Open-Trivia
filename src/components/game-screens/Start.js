import logo from "../../assets/images/logo.png";
export default function Start({ changeGameState }) {
  return (
    <div className="start-container">
      <img src={logo} alt="Logo" className="logo" />
      <button
        className="btn start-btn"
        onClick={() => changeGameState("API REQUEST")}
      >
        START
      </button>
    </div>
  );
}
