import { useState } from "react";

import HiddenLocation from "./HiddenLocation";
import OSRSMap from "./OSRSMap";
import GameOverResult from "./GameOverResult";
import GuessResult from "./GuessResult";
import { getRandomLocations } from "../data/HiddenLocations";

const numberOfLocationsToGuess = 5;

let locationsToGuess = getRandomLocations(numberOfLocationsToGuess);
let numberOfLocationsGuessed = 0;

function GameManager() {
  // TODO: Figure out how to initialize this better
  const [currentLocation, setCurrentLocation] = useState(locationsToGuess[0]);

  const [showGuessResult, setShowGuessResult] = useState(false);

  const [guessedLocation, setGuessedLocation] = useState(null);

  const [showGameOverResult, setShowGameOverResult] = useState(false);

  const [totalScore, setTotalScore] = useState(0);

  function pleaseSetTotalScore(roundScore) {
    let temp = totalScore;
    let totalGameScore = temp + roundScore;
    setTotalScore(totalGameScore);
  }

  function pleaseSetGuessedLocation(location) {
    setGuessedLocation(location);
  }

  function onGuessHandler() {
    numberOfLocationsGuessed++;

    setShowGuessResult(true);
  }

  function nextHandler() {
    setShowGuessResult(false);

    if (numberOfLocationsGuessed < numberOfLocationsToGuess) {
      let removedLocation = locationsToGuess.shift();
      // TODO: Remove when figure out better current location init
      if (locationsToGuess.length === 4) {
        removedLocation = locationsToGuess.shift();
      }
      setCurrentLocation(removedLocation);
    } else {
      if (numberOfLocationsGuessed === numberOfLocationsToGuess) {
        setShowGameOverResult(true);
      }
    }
  }

  return (
    <div>
      <OSRSMap
        onClickHandler={onGuessHandler}
        currentLocation={currentLocation}
        setGuessedLocation={pleaseSetGuessedLocation}
        showGuessResult={showGuessResult}
      />
      {showGuessResult && (
        <GuessResult
          guessedLocation={guessedLocation}
          currentLocation={currentLocation}
          setTotalScore={pleaseSetTotalScore}
          nextHandler={nextHandler}
        />
      )}
      {showGameOverResult && <GameOverResult totalScore={totalScore} />}
      {!showGameOverResult && <HiddenLocation location={currentLocation} />}
    </div>
  );
}

export default GameManager;
