import { useState } from "react";
import "./App.css";

import HiddenLocation from "./components/HiddenLocation";
import OSRSMap from "./components/OSRSMap";

import { LatLng } from "leaflet";
class Location {
  constructor(image, latLng) {
    this.image = image;
    this.latLng = latLng;
  }
}

const tempLocations = [
  new Location("lletya", new LatLng(-46.125, 61.625)), // bank
  new Location("varrock", new LatLng(-33.671875, 101.984375)), // middle of fountain
  new Location("falador", new LatLng(-37.750789, 90.695791)), // near squire
  new Location("lumbridge", new LatLng(-43.53125, 102.078125)), // in first hallway of castle
  new Location("barbarian village", new LatLng(-33.109375, 95.6875)), // in bar hall
  new Location("ferox", new LatLng(-23.96875, 98.046875)), // by pools
  new Location("grand tree", new LatLng(-30.859375, 66.984375)), // right outside main tree door
  new Location("woodcutting guild", new LatLng(-30.921875, 25.015625)), // in between red woods
  new Location("mount karuulm", new LatLng(-15.953125, 12.859375)), // on top of crank to go down
  new Location("west ardy", new LatLng(-39.69308, 67.509671)), // middle of 12 houses by underground pass
  new Location("ardy montastary", new LatLng(-43.50558, 73.587796)), // right outside doors
  new Location("camelot", new LatLng(-30.953125, 80.671875)), // middle of courtyard
  new Location("seers", new LatLng(-32.140625, 78.4375)), // outside of church near yews
  new Location("ungael", new LatLng(-4.59375, 57.917587)), // right outside vorkath entrance
];

const numberOfLocationsToGuess = 5;

function getRandomLocations() {
  let randomLocations = [];
  // TODO: Make it so you cant get the same location
  for (let i = 0; i < numberOfLocationsToGuess; i++) {
    randomLocations.push(
      tempLocations[Math.floor(Math.random() * tempLocations.length)]
    );
  }
  return randomLocations;
}

let locationsToGuess = getRandomLocations();
let numberOfLocationsGuessed = 0;

function App() {
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
      if (locationsToGuess.length == 4) {
        removedLocation = locationsToGuess.shift();
      }
      setCurrentLocation(removedLocation);
    } else {
      // TODO: Show game over screen or something
      setCurrentLocation(new Location("game over", new LatLng(-1, -1)));
    }
  }

  return (
    <div>
      <OSRSMap
        onClickHandler={onGuessHandler}
        currentLocation={currentLocation}
        showGuessResult={showGuessResult}
      />
      {showGuessResult == true && <GuessResult nextHandler={nextHandler} />}
      <HiddenLocation location={currentLocation} />
    </div>
  );
}

function GuessResult({ nextHandler }) {
  return (
    <div className="guess-result">
      <p>Nice Guess</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default App;
