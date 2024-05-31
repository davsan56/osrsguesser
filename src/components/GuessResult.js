function GuessResult({ nextHandler }) {
  return (
    <div className="guess-result">
      <p>Nice Guess</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default GuessResult;
