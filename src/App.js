import { useState } from "react";
import "./App.css"

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
  new Location("priff", new LatLng(0, 0)),
  new Location("varrock", new LatLng(1, 0)),
  new Location("falador", new LatLng(2, 0)),
  new Location("lumbridge", new LatLng(3, 0)),
  new Location("barbarian village", new LatLng(4, 0)),
  new Location("ferox", new LatLng(5, 0)),
  new Location("gauntlet", new LatLng(6, 0)),
  new Location("woodcutting guild", new LatLng(7, 0)),
  new Location("sand crabs", new LatLng(8, 0)),
  new Location("west ardy", new LatLng(9, 0)),
  new Location("ardy montastary", new LatLng(10, 0)),
  new Location("camelot", new LatLng(11, 0)),
  new Location("seers", new LatLng(12, 0)),
  new Location("ungael", new LatLng(13, 0))
];

const numberOfLocationsToGuess = 5

function getRandomLocations() {
  let randomLocations = [];
  // TODO: Make it so you cant get the same location
  for (let i = 0; i < numberOfLocationsToGuess; i++) {
    randomLocations.push(tempLocations[Math.floor(Math.random() * tempLocations.length)])
  }
  return randomLocations
}

let locationsToGuess = getRandomLocations()
let numberOfLocationsGuessed = 0

function App() {
  // TODO: Figure out how to initialize this better
  const [currentLocation, setCurrentLocation] = useState(locationsToGuess[0])

  function onGuessHandler() {
    numberOfLocationsGuessed++

    if (numberOfLocationsGuessed < numberOfLocationsToGuess) {
      let removedLocation = locationsToGuess.shift()
      // TODO: Remove when figure out better current location init
      if (locationsToGuess.length == 4) {
        removedLocation = locationsToGuess.shift()
      }
      setCurrentLocation(removedLocation)
    } else {
      // TODO: Show game over screen or something
      setCurrentLocation(new Location("game over", new LatLng(-1, -1)))
    }
  }

  return (
    <div>
      <OSRSMap
        onClickHandler={onGuessHandler}
      />
      <HiddenLocation
        location={currentLocation}
      />
    </div>
  );
}

export default App;
