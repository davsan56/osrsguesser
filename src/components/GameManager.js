import { useState } from "react";

import HiddenLocation from "./HiddenLocation";
import OSRSMap from "./OSRSMap";
import GameOverResult from "./GameOverResult";
import GuessResult from "./GuessResult";
import HiddenLocations from "../data/HiddenLocations";

import { LatLng } from "leaflet";

const numberOfLocationsToGuess = 5;

function getRandomLocations() {
  let randomLocations = [];
  // TODO: Make it so you cant get the same location
  for (let i = 0; i < numberOfLocationsToGuess; i++) {
    randomLocations.push(
      // TODO: Maybe change random seed
      HiddenLocations[Math.floor(Math.random() * HiddenLocations.length)]
    );
  }
  return randomLocations;
}

let locationsToGuess = getRandomLocations();
let numberOfLocationsGuessed = 0;

function GameManager() {
  // TODO: Figure out how to initialize this better
  const [currentLocation, setCurrentLocation] = useState(locationsToGuess[0]);

  const [showGuessResult, setShowGuessResult] = useState(false);

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
    }
  }

  return (
    <div>
      <OSRSMap
        onClickHandler={onGuessHandler}
        currentLocation={currentLocation}
        showGuessResult={showGuessResult}
      />
      {showGuessResult && <GuessResult nextHandler={nextHandler} />}
      {numberOfLocationsGuessed === numberOfLocationsToGuess && (
        <GameOverResult />
      )}
      <HiddenLocation location={currentLocation} />
    </div>
  );
}

export default GameManager;
