import RoundScores from "./RoundScores";

function GuessResult({ nextHandler, roundScores }) {
  return (
    <div className="guess-result osrs-background">
      <p className="dialog-title">
        <b>Good guess!</b>
      </p>
      <RoundScores roundScores={roundScores} />
      <button className="osrs-button" onClick={nextHandler}>
        Next
      </button>
    </div>
  );
}

export default GuessResult;
