import { useEffect, useMemo, useState } from "react";

import "leaflet/dist/leaflet.css";
import { Marker, Polyline, useMapEvents } from "react-leaflet";
import { Icon, LatLng } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

import { useLocalStorageHelper } from "../context/LocalStorageHelperContext";
import { getRandomLocations } from "../data/HiddenLocations";

const guessIcon = new Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconAnchor: [12, 41],
});

const resultIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: markerShadowPng,
  iconAnchor: [12, 41],
});

function OSRSMapClickHandler({
  currentLocation,
  setGuessedLocation,
  showGuessResult,
  showGameOverResult,
  resetMap,
}) {
  const { getGuessedLocations, getCurrentGameMode } = useLocalStorageHelper();
  const [position, setPosition] = useState(null);
  const [allLocations, setAllLocations] = useState([]);
  const [allGuessedLocations, setAllGuessedLocations] = useState([]);

  const map = useMapEvents({
    click: async (e) => {
      if (!showGuessResult && !showGameOverResult) {
        setGuessedLocation(e.latlng);
        setPosition(e.latlng);
      }
    },
  });

  useMemo(() => {
    if (!showGuessResult) {
      // Center map
      map.setView([-35, 92.73], 5);
    }
    if (showGameOverResult) {
      setAllLocations(getRandomLocations(5, getCurrentGameMode() === "timed"));
      setAllGuessedLocations(getGuessedLocations());
    }
  }, [showGuessResult, map, showGameOverResult]);

  useEffect(() => {
    if (resetMap === true) {
      // Zoom map to show both markers
      map.fitBounds([position, currentLocation.latLng]);
    } else {
      setPosition(null);

      if (showGameOverResult) {
        const allLocationsLatLng = allLocations.map(function (location) {
          return location.latLng;
        });
        const allGuessLocationsLatLng = allGuessedLocations.map(function (
          guessedLocation
        ) {
          return new LatLng(guessedLocation.lat, guessedLocation.lng);
        });
        const bounds = allLocationsLatLng.concat(allGuessLocationsLatLng);
        map.fitBounds(bounds);
      }
    }
  }, [resetMap]);

  return (
    <>
      {position && <Marker position={position} icon={guessIcon} />}
      {showGuessResult && (
        <>
          <Marker position={currentLocation.latLng} icon={resultIcon} />
          <Polyline positions={[position, currentLocation.latLng]} />
        </>
      )}
      {showGameOverResult &&
        allLocations.length !== 0 &&
        allGuessedLocations.length !== 0 &&
        allLocations.map(function (location, i) {
          const guessedLocation = new LatLng(
            allGuessedLocations[i].lat,
            allGuessedLocations[i].lng
          );
          return (
            <div key={i}>
              <Marker position={location.latLng} icon={resultIcon}></Marker>
              <Marker position={guessedLocation} icon={guessIcon}></Marker>
              <Polyline positions={[location.latLng, guessedLocation]} />
            </div>
          );
        })}
    </>
  );
}

export default OSRSMapClickHandler;
