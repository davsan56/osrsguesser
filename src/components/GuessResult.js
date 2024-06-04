import RoundScores from "./RoundScores";

function GuessResult({ nextHandler, roundScores }) {
  return (
    <div className="guess-result">
      <p>Good guess!</p>
      <RoundScores roundScores={roundScores} />
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default GuessResult;
