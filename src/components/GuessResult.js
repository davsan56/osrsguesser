function GuessResult({ guessedLocation, currentLocation, nextHandler }) {
  function determineScore(guessedLatLng, actualLatLng) {
    let dis = guessedLatLng.distanceTo(actualLatLng);
    let distanceConversion = (dis / 1000).toFixed(0);
    let distanceKm = distanceConversion;
    let score = 1000 - distanceKm;
    return score < 0 ? 0 : score;
  }

  return (
    <div className="guess-result">
      <p>
        You guessed: {guessedLocation.lat}, {guessedLocation.lng}
      </p>
      <p>
        You wanted to guess: {currentLocation.latLng.lat},{" "}
        {currentLocation.latLng.lng}
      </p>
      <p>Score: {determineScore(guessedLocation, currentLocation.latLng)}</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default GuessResult;
