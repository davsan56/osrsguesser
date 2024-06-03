import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Marker, Polyline, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

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
        <Marker position={position} icon={guessIcon} />
      )}
      {showGuessResult && (
        <>
          <Marker position={currentLocation.latLng} icon={resultIcon} />
          <Polyline positions={[position, currentLocation.latLng]} />
        </>
      )}
    </>
  );
}

export default OSRSMapClickHandler;
