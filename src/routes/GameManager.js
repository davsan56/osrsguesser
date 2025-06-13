import { useEffect, useMemo, useState } from "react";

import { useLocalStorageHelper } from "../context/LocalStorageHelperContext";
import HiddenLocation from "../components/HiddenLocation";
import OSRSMap from "../components/OSRSMap";
import GameOverResult from "../components/GameOverResult";
import GuessResult from "../components/GuessResult";
import TimedScoreContainer from "../components/TimedScoreContainer";
import { getRandomLocations, getLocationsFrom } from "../data/HiddenLocations";
import { isNewLocationTesting } from "../data/IsLatLngTesting";

function GameManager({ isTimedGame = false }) {
  const numberOfLocationsToGuess = 5;

  // Memoize locationsToGuess so it only recalculates when isTimedGame changes
  const [locationsToGuess, setLocationsToGuess] = useState([]);
  useEffect(() => {
    if (isNewLocationTesting()) {
      // Fill this variable to test specific locations
      // Can be an array of up to 5 length
      const testingLocations = [
        "stranglewood_mine",
        "uzer_temple",
        "mynydd",
        "mynydd_cenotaph",
        "saltpetre",
      ];
      if (testingLocations !== null) {
        setLocationsToGuess(getLocationsFrom(testingLocations));
      }
    } else {
      setLocationsToGuess(
        getRandomLocations(numberOfLocationsToGuess, isTimedGame)
      );
    }
  }, [isTimedGame]);

  // Only initialize currentLocation after locationsToGuess is set
  const [currentLocation, setCurrentLocation] = useState(null);
  useEffect(() => {
    if (locationsToGuess.length > 0) {
      setCurrentLocation(locationsToGuess[0]);
    }
  }, [locationsToGuess]);

  const {
    addGuessedLocation,
    deleteAllGuessedLocations,
    deletePreviousDaysScoreFromStorage,
    getDailyScoresFromStorage,
    getGamesPlayedFromStorage,
    getGuessedLocations,
    setGamesPlayedToStorage,
    setCurrentGameMode,
  } = useLocalStorageHelper();
  const [guessedLocation, setGuessedLocation] = useState(null);
  const [showGuessResult, setShowGuessResult] = useState(false);
  const [numberOfLocationsGuessed, setNumberOfLocationsGuessed] = useState(0);
  const [showGameOverResult, setShowGameOverResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [roundScores, setRoundScores] = useState([]);

  const [resetMap, setResetMap] = useState(false);

  const [currentScore, setCurrentScore] = useState(1000);
  const [startRound, setStartRound] = useState(false);

  useMemo(() => {
    // Set the game mode to timed or normal
    // This is used so if /game or /timedGame is accessed directly
    setCurrentGameMode(isTimedGame ? "timed" : "normal");

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
  }, [submitGuess]);

  // Set up the timer for the current score if the game is timed
  // and the round has started. The timer will decrease the score by 1 every 100 milliseconds.
  useEffect(() => {
    let interval;

    // Only start the timer if the round is not over and it is a timed game
    if (!showGuessResult && isTimedGame && startRound) {
      interval = setInterval(() => {
        setCurrentScore((prevScore) => {
          if (prevScore > 0) {
            return prevScore - 1; // Decrease score by 1
          } else {
            clearInterval(interval); // Stop the interval when score reaches 0
            submitGuess(); // Call submitGuess when score reaches 0
            return 0;
          }
        });
      }, 100); // Run every 100 milliseconds
    }

    // Cleanup the interval when the component unmounts or game ends
    return () => clearInterval(interval);
  }, [showGuessResult, isTimedGame, startRound]);

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

    // If the game is a timed game, factor in the current score to the distance score
    if (isTimedGame) {
      // If perfect guess, set score to current score
      if (roundScore === 1000) {
        roundScore = currentScore;
      }
      // If the score is less than 1000, factor in the current score to the distance score
      else {
        roundScore = Math.floor((roundScore * currentScore) / 1000);
      }
    }

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
    setStartRound(false);
  }

  function onGuessHandler() {
    setNumberOfLocationsGuessed(numberOfLocationsGuessed + 1);

    setShowGuessResult(true);
  }

  function nextHandler() {
    setGuessedLocation(null);
    setResetMap(false);
    setShowGuessResult(false);
    if (isTimedGame) {
      setCurrentScore(1000);
    }

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

  // This function is called when the hidden location is dismissed,
  // indicating the start of the round
  function onRoundStartNotification() {
    setStartRound(true);
  }

  return currentLocation ? (
    <>
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
        <div className="botom-right-container">
          {!showGuessResult && !showGameOverResult && isTimedGame && (
            <TimedScoreContainer currentScore={currentScore} />
          )}
          {!showGameOverResult && (
            <HiddenLocation
              location={currentLocation}
              onRoundStartNotification={onRoundStartNotification}
            />
          )}
        </div>
      </div>
    </>
  ) : null;
}

export default GameManager;
