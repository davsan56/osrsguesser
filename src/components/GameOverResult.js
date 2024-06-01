function GameOverResult({ totalScore }) {
  return (
    <div className="game-over">
      <p>Good game!</p>
      <p>Final score: {totalScore} / 5000</p>
    </div>
  );
}

export default GameOverResult;
