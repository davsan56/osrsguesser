import { useMemo, useState, useEffect } from "react";

import HiddenLocation from "../components/HiddenLocation";
import OSRSMap from "../components/OSRSMap";
import GameOverResult from "../components/GameOverResult";
import GuessResult from "../components/GuessResult";
import { getRandomLocations, getLocationsFrom } from "../data/HiddenLocations";
import {
  addGuessedLocation,
  deleteAllGuessedLocations,
  deletePreviousDaysScoreFromStorage,
  getDailyScoresFromStorage,
  getGamesPlayedFromStorage,
  getGuessedLocations,
  setGamesPlayedToStorage,
} from "../data/LocalStorageHelper";
import { isNewLocationTesting } from "../data/IsLatLngTesting";

const numberOfLocationsToGuess = 5;

let locationsToGuess = getRandomLocations(numberOfLocationsToGuess);

function GameManager() {
  // TODO: Figure out how to initialize this better
  const [currentLocation, setCurrentLocation] = useState(locationsToGuess[0]);
  const [guessedLocation, setGuessedLocation] = useState(null);
  const [showGuessResult, setShowGuessResult] = useState(false);
  const [numberOfLocationsGuessed, setNumberOfLocationsGuessed] = useState(0);
  const [showGameOverResult, setShowGameOverResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [roundScores, setRoundScores] = useState([]);

  const [resetMap, setResetMap] = useState(false);

  useMemo(() => {
    if (isNewLocationTesting()) {
      // Fill this variable to test specific locations
      // Can be an array of up to 5 length
      const testingLocations = [
        "arandar",
        "fortis_cothon_thieves",
        "keep_la_faye",
        "mos_le'harmless_trees",
        "ruins_of_ullek_teaks",
      ];
      if (testingLocations !== null) {
        locationsToGuess = getLocationsFrom(testingLocations);
      }
    }

    let dailyRoundScores = getDailyScoresFromStorage();
    if (dailyRoundScores !== null) {
      setRoundScores(dailyRoundScores);
      setTotalScore(
        dailyRoundScores.reduce(
          (totalValue, currentValue) => totalValue + currentValue
        )
      );
      setCurrentLocation(locationsToGuess[0]);
      setShowGameOverResult(true);
    }
  }, []);

  function pleaseSetTotalScore(roundScore) {
    let temp = totalScore;
    let totalGameScore = temp + roundScore;
    setRoundScores([...roundScores, roundScore]);
    setTotalScore(totalGameScore);
  }

  function pleaseSetGuessedLocation(location) {
    setGuessedLocation(location);
  }

  function submitGuess() {
    let dis = guessedLocation.distanceTo(currentLocation.latLng);
    let distanceConversion = (dis / 1000).toFixed(0);
    let distanceKm = distanceConversion;
    let score = 1000 - distanceKm;
    let roundScore = score < 0 ? 0 : score > 975 ? 1000 : score;

    // If the number of guessed locations in storage is different than the number of current game guesses
    // Delete all guessed locations from storage because a new game has started
    let locationsGuessedInStorage = getGuessedLocations();
    if (locationsGuessedInStorage !== null) {
      if (numberOfLocationsGuessed !== locationsGuessedInStorage.length) {
        deleteAllGuessedLocations();
      }
    }

    addGuessedLocation(guessedLocation);

    setResetMap(true);

    pleaseSetTotalScore(roundScore);

    onGuessHandler();
  }

  function onGuessHandler() {
    setNumberOfLocationsGuessed(numberOfLocationsGuessed + 1);

    setShowGuessResult(true);
  }

  function nextHandler() {
    setGuessedLocation(null);
    setResetMap(false);
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
        // Incrememnt number of games played
        let numberOfGamesPlayed = getGamesPlayedFromStorage();
        if (numberOfGamesPlayed == null) {
          numberOfGamesPlayed = 0;
        }
        numberOfGamesPlayed = parseInt(numberOfGamesPlayed);
        setGamesPlayedToStorage(numberOfGamesPlayed + 1);

        // Delete previous days results
        deletePreviousDaysScoreFromStorage();

        setShowGameOverResult(true);
      }
    }
  }

  /**
   * Adds and removes the listener to bind spacebar to submitting a guess.
   * Note that this currently has no dependency array and will run every render.
   * Consider pulling `submitGuess` and its dependencies out of the component or
   * into useCallbacks if this becomes a problem.
   */
  useEffect(() => {
    const spacebarHandler = (event) => {
      // match on several different spacebar codes for browser support
      if (event.key === " " || event.code === "Space" || event.keyCode === 32) {
        if (guessedLocation && !showGuessResult) {
          submitGuess();
        }
      }
    };
    window.addEventListener("keydown", spacebarHandler);

    return () => {
      window.removeEventListener("keydown", spacebarHandler);
    };
  });

  return (
    <div>
      <OSRSMap
        currentLocation={currentLocation}
        setGuessedLocation={pleaseSetGuessedLocation}
        showGuessResult={showGuessResult}
        showGameOverResult={showGameOverResult}
        resetMap={resetMap}
      />
      {guessedLocation && !showGuessResult && (
        <button
          className="submit-guess-button osrs-button"
          onClick={submitGuess}
        >
          Submit
        </button>
      )}
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
