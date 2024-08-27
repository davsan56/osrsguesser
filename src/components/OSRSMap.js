import { useRef } from "react";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngBounds, latLng, CRS } from "leaflet";

import OSRSMapClickHandler from "./OSRSMapClickHandler";
import OSRSTestingMapClickHandler from "./OSRSTestingMapClickHandler";
import { isLatLngTesting } from "../data/IsLatLngTesting";

function OSRSMap({
  currentLocation,
  setGuessedLocation,
  showGuessResult,
  showGameOverResult,
  resetMap,
}) {
  const outerBounds = new LatLngBounds(latLng(-78, 0), latLng(0, 137.3));

  const mapRef = useRef(null);

  return (
    <div className="map-container">
      <MapContainer
        ref={mapRef}
        center={[-35, 92.73]}
        zoom={5}
        maxZoom={7}
        minZoom={3}
        style={{ height: "100vh", width: "100%" }}
        maxBounds={outerBounds}
        maxBoundsViscosity={1}
        crs={CRS.Simple}
      >
        {isLatLngTesting() && <OSRSTestingMapClickHandler />}
        {!isLatLngTesting() && (
          <OSRSMapClickHandler
            currentLocation={currentLocation}
            setGuessedLocation={setGuessedLocation}
            showGuessResult={showGuessResult}
            showGameOverResult={showGameOverResult}
            resetMap={resetMap}
          />
        )}
        <TileLayer url={`osrsmap/{z}/{x}/{y}.png`} />
      </MapContainer>
    </div>
  );
}

export default OSRSMap;
