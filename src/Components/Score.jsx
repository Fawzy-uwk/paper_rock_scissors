function Score({score}) {
  return (
    <header className="score mt-4">
      <div className="flex flex-row">
        <h2>rock</h2>
        <h2>paper</h2>
        <h2>Scissors</h2>
      </div>
      <div className="score_num">
        <span>score</span>
        <h1>{score}</h1>
      </div>
    </header>
  );
}

export default Score;
