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
  // Scaled bounds based on new tile dimensions (9216 x 6528 vs old 8793 x 4993)
  // Height scale: 6528/4993 ≈ 1.307, Width scale: 9216/8793 ≈ 1.048
  const outerBounds = new LatLngBounds(latLng(-102, 0), latLng(0, 144));

  const mapRef = useRef(null);

  return (
    <div className="map-container">
      <MapContainer
        ref={mapRef}
        center={[-51, 72]}
        zoom={5}
        maxZoom={7}
        minZoom={3}
        style={{ height: "100svh", width: "100%" }}
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
