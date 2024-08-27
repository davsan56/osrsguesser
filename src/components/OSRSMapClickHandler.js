import { useMemo, useState, useEffect } from "react";

import "leaflet/dist/leaflet.css";
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
  currentLocation,
  setGuessedLocation,
  showGuessResult,
  showGameOverResult,
  resetMap,
}) {
  const [position, setPosition] = useState(null);

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
  }, [showGuessResult]);

  useEffect(() => {
    if (resetMap === true) {
      // Zoom map to show both markers
      map.fitBounds([position, currentLocation.latLng]);
    } else {
      setPosition(null);
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
    </>
  );
}

export default OSRSMapClickHandler;
