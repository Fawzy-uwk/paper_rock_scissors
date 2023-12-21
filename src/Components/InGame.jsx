import { useEffect, useState } from "react";

function InGame({
  value,
  winner,
  setResult,
  setGameMode,
  opponentValue,
  result,
  handleResult,
}) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading or any other asynchronous operation
    setTimeout(() => {
      setShowContent(true);
      handleResult();
    }, 500);
    
  }, []);
  return (
    <div className={!showContent ? "container hidden" : "container"}>
      <div className="in">
        <div className="you flex">
          <h3>You Picked</h3>
          <div
            id={winner === "player" ? "winner" : ""}
            className="yours relative"
          >
            {value === "rock" && (
              <button className="cont rocks">
                <div id="ingame">
                  <div className="img ">
                    <img src="./icon-rock.svg" alt="rock" />
                  </div>
                  <div className="outter"></div>
                </div>
              </button>
            )}

            {value === "paper" && (
              <button className="cont paper">
                <div id="paper">
                  <div className="img">
                    <img src="./icon-paper.svg" alt="paper" />
                  </div>
                  <div className="outter"></div>
                </div>
              </button>
            )}

            {value === "scissor" && (
              <button className="cont scissors">
                <div id="sci">
                  <div className="img">
                    <img src="./icon-scissors.svg" alt="scissors" />
                  </div>
                  <div className="outter"></div>
                </div>
              </button>
            )}
          </div>
        </div>

        <div className="you flex">
          <h3>The House Picked</h3>
          <div
            id={winner === "computer" ? "winner" : ""}
            className="yours relative"
          >
            {opponentValue === "rock" && (
              <button className="cont rocks">
                <div id="ingame">
                  <div className="img ">
                    <img src="./icon-rock.svg" alt="rock" />
                  </div>
                  <div className="outter"></div>
                </div>
              </button>
            )}

            {opponentValue === "paper" && (
              <button className="cont paper">
                <div id="paper">
                  <div className="img">
                    <img src="./icon-paper.svg" alt="paper" />
                  </div>
                  <div className="outter"></div>
                </div>
              </button>
            )}

            {opponentValue === "scissor" && (
              <button className="cont scissors">
                <div id="sci">
                  <div className="img">
                    <img src="./icon-scissors.svg" alt="scissors" />
                  </div>
                  <div className="outter"></div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
      {result !== "none" && (
        <div className="result">
          <h2>{result}</h2>
          <button
            onClick={() => {
              setGameMode((gameMode) => !gameMode);
              setResult("none");
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default InGame;
