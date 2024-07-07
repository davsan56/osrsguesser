import { useEffect, useMemo, useState } from "react";

import "leaflet/dist/leaflet.css";
import { Marker, Polyline, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLng } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import { getRandomLocations, Location } from "../data/HiddenLocations";
import { getGuessedLocations } from "../data/LocalStorageHelper";

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
  onClickHandler,
  currentLocation,
  setGuessedLocation,
  showGuessResult,
  showGameOverResult,
}) {
  const [position, setPosition] = useState(null);
  const [allLocations, setAllLocations] = useState([]);
  const [allGuessedLocations, setAllGuessedLocations] = useState([]);

  const map = useMapEvents({
    click: async (e) => {
      if (!showGuessResult && !showGameOverResult) {
        // Zoom map to show both markers
        map.fitBounds([e.latlng, currentLocation.latLng]);

        // Set variables from other classes
        setGuessedLocation(e.latlng);
        setPosition(e.latlng);

        onClickHandler();
      }
    },
  });

  useMemo(() => {
    if (!showGuessResult) {
      // Center map
      map.setView([-35, 92.73], 5);
    }
    if (showGameOverResult) {
      setAllLocations(getRandomLocations(5));
      setAllGuessedLocations(getGuessedLocations());
    }
  }, [showGuessResult]);

  useEffect(() => {
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
  }, [allLocations, allGuessedLocations]);

  return (
    <>
      {position && showGuessResult && (
        <Marker position={position} icon={guessIcon} />
      )}
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
            <>
              <Marker position={location.latLng} icon={resultIcon}>
                <Popup>
                  <img
                    src={require("../../public/locations/" +
                      location.image +
                      ".png")}
                    alt={location.image}
                  />
                </Popup>
              </Marker>
              <Marker position={guessedLocation} icon={guessIcon}></Marker>
              <Polyline positions={[location.latLng, guessedLocation]} />
            </>
          );
        })}
    </>
  );
}

export default OSRSMapClickHandler;
