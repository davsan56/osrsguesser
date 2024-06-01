import { useEffect, useState } from "react";

function GuessResult({
  guessedLocation,
  currentLocation,
  setTotalScore,
  nextHandler,
}) {
  const [roundScore, setRoundScore] = useState(0);

  useEffect(() => {
    let dis = guessedLocation.distanceTo(currentLocation.latLng);
    let distanceConversion = (dis / 1000).toFixed(0);
    let distanceKm = distanceConversion;
    let score = 1000 - distanceKm;
    let roundScore = score < 0 ? 0 : score;
    setTotalScore(roundScore);
    setRoundScore(roundScore);
  }, [guessedLocation]);

  return (
    <div className="guess-result">
      <p>
        You guessed: {guessedLocation.lat}, {guessedLocation.lng}
      </p>
      <p>
        You wanted to guess: {currentLocation.latLng.lat},{" "}
        {currentLocation.latLng.lng}
      </p>
      <p>Score: {roundScore}</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default GuessResult;
