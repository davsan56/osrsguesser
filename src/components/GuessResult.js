import RoundScores from "./RoundScores";

function GuessResult({ nextHandler, currentRound, roundScores }) {
  function getGuessTitle() {
    const currentRoundScore = roundScores[currentRound - 1];
    if (currentRoundScore === 1000) {
      return "Perfect guess!";
    } else if (currentRoundScore >= 850) {
      return "Great guess!";
    } else if (currentRoundScore > 0) {
      return "Good guess";
    } else {
      return "Oof";
    }
  }

  return (
    <div className="guess-result osrs-background">
      <p className="dialog-title">
        <b>{getGuessTitle()}</b>
      </p>
      <RoundScores roundScores={roundScores} />
      <button className="osrs-button" onClick={nextHandler}>
        Next
      </button>
    </div>
  );
}

export default GuessResult;
