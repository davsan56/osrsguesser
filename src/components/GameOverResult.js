import RoundScores from "./RoundScores";

function GameOverResult({ totalScore, roundScores }) {
  return (
    <div className="game-over">
      <p>Good game!</p>
      <p>Final score: {totalScore} / 5000</p>
      <RoundScores roundScores={roundScores} />
    </div>
  );
}

export default GameOverResult;
