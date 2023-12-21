import { useState } from "react";
import Game from "./Components/Game";
import Score from "./Components/Score";
import Modal from "./Components/Modal";
import InGame from "./Components/InGame";

function App() {
  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(false);
  const [gameMode, setGameMode] = useState(false);
  const [value, setValue] = useState("none");
  const [opponentValue, setOpponentValue] = useState("none");
  const [result, setResult] = useState("none");
  const [winner, setWinner] = useState("none");

  const handleResult = () => {
    console.log("handleResult()");
    if (value === opponentValue) {
      setResult("Draw 😇 ");
      setWinner("none");
    } else if (
      (value === "rock" && opponentValue === "scissor") ||
      (value === "paper" && opponentValue === "rock") ||
      (value === "scissor" && opponentValue === "paper")
    ) {
      setResult("You Win 😍 ");

      setWinner("player");
      setScore(score + 1);
    } else if (
      (opponentValue === "rock" && value === "scissor") ||
      (opponentValue === "paper" && value === "rock") ||
      (opponentValue === "scissor" && value === "paper")
    ) {
      setResult("You Lose 😢 ");
      setWinner("computer");
    }
  };

  return (
    <div className="App relative">
      <Score score={score} />
      <button
        onClick={() => setModal((modal) => !modal)}
        className="rules absolute py-1 px-8 border-2 bottom-8 right-10 text-lg text-white rounded-md uppercase border-[#606e85]"
      >
        rules
      </button>

      {!gameMode && (
        <Game
          setGameMode={setGameMode}
          setValue={setValue}
          setOpponentValue={setOpponentValue}
        />
      )}
      {gameMode && (
        <InGame
          value={value}
          setGameMode={setGameMode}
          setScore={setScore}
          opponentValue={opponentValue}
          score={score}
          result={result}
          setResult={setResult}
          winner={winner}
          handleResult={handleResult}
        />
      )}

      {modal && (
        <>
          <div className="overlay" onClick={() => setModal((modal) => !modal)}>
            {" "}
          </div>
          <Modal setModal={setModal} modal={modal} />
        </>
      )}
    </div>
  );
}

export default App;
