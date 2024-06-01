import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const myIcon = new Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconAnchor: [12, 41],
});

function OSRSMapClickHandler({
  onClickHandler,
  currentLocation,
  setGuessedLocation,
  showGuessResult,
}) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: async (e) => {
      if (!showGuessResult) {
        setGuessedLocation(e.latlng);
        setPosition(e.latlng);
        onClickHandler();
      }
    },
  });

  return (
    <>
      {position && showGuessResult && (
        <Marker position={position} icon={myIcon} />
      )}
      {showGuessResult && (
        <Marker position={currentLocation.latLng} icon={myIcon} />
      )}
    </>
  );
}

export default OSRSMapClickHandler;
