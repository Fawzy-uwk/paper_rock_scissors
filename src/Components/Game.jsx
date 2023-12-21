function Game({ setValue, handleResult, setGameMode, setOpponentValue }) {
  const options = ["rock", "paper", "scissor"];

  return (
    <div className="game relative">
      <button
        className="cont rocks absolute "
        onClick={() => {
          
          const randomIndex = Math.floor(Math.random() * options.length);
          setValue("rock");
          setGameMode(true);
          setOpponentValue(options[randomIndex]);
          
        }}
      >
        <div className="relative">
          <img className="image " src="./icon-rock.svg" alt="rock" />
          <div className="outter"></div>
        </div>
      </button>

      <button
        className="cont scissors absolute"
        onClick={() => {
          
          const randomIndex = Math.floor(Math.random() * options.length);
          setValue("scissor");
          setGameMode(true);
          setOpponentValue(options[randomIndex]);
          
        }}
      >
        <div className="relative">
          <img className="image" src="./icon-scissors.svg" alt="scissors" />
          <div className="outter"></div>
        </div>
      </button>

      <button
        className="cont paper absolute top-[20%]"
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * options.length); 
          setValue("paper");
          setGameMode(true);
          setOpponentValue(options[randomIndex]);
          
        }}
      >
        <div className="relative">
          <img className="image" src="./icon-paper.svg" alt="paper" />
          <div className="outter"></div>
        </div>
      </button>
    </div>
  );
}

export default Game;
