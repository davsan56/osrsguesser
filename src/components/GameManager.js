import { useState } from "react";

import HiddenLocation from "./HiddenLocation";
import OSRSMap from "./OSRSMap";
import GameOverResult from "./GameOverResult";
import GuessResult from "./GuessResult";
import { getRandomLocations } from "../data/HiddenLocations";

const numberOfLocationsToGuess = 5;

let locationsToGuess = getRandomLocations(numberOfLocationsToGuess);

function GameManager() {
  // TODO: Figure out how to initialize this better
  const [currentLocation, setCurrentLocation] = useState(locationsToGuess[0]);

  const [showGuessResult, setShowGuessResult] = useState(false);

  const [numberOfLocationsGuessed, setNumberOfLocationsGuessed] = useState(0);

  const [showGameOverResult, setShowGameOverResult] = useState(false);

  const [totalScore, setTotalScore] = useState(0);

  const [roundScores, setRoundScores] = useState([]);

  function pleaseSetTotalScore(roundScore) {
    let temp = totalScore;
    let totalGameScore = temp + roundScore;
    setRoundScores([...roundScores, roundScore]);
    setTotalScore(totalGameScore);
  }

  function pleaseSetGuessedLocation(location) {
    let dis = location.distanceTo(currentLocation.latLng);
    let distanceConversion = (dis / 1000).toFixed(0);
    let distanceKm = distanceConversion;
    let score = 1000 - distanceKm;
    let roundScore = score < 0 ? 0 : score > 975 ? 1000 : score;

    pleaseSetTotalScore(roundScore);
  }

  function onGuessHandler() {
    setNumberOfLocationsGuessed(numberOfLocationsGuessed + 1);

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
        showGameOverResult={showGameOverResult}
      />
      {showGuessResult && (
        <GuessResult
          nextHandler={nextHandler}
          currentRound={numberOfLocationsGuessed}
          roundScores={roundScores}
        />
      )}
      {showGameOverResult && (
        <GameOverResult totalScore={totalScore} roundScores={roundScores} />
      )}
      {!showGameOverResult && <HiddenLocation location={currentLocation} />}
    </div>
  );
}

export default GameManager;
