import "leaflet/dist/leaflet.css";
import OSRSMapClickHandler from "./OSRSMapClickHandler";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngBounds, latLng, CRS } from "leaflet";

function OSRSMap({
  onClickHandler,
  currentLocation,
  setGuessedLocation,
  showGuessResult,
  showGameOverResult,
}) {
  const outerBounds = new LatLngBounds(latLng(-78, 0), latLng(0, 137.3));

  const mapRef = useRef(null);

  return (
    <div className="map-container">
      <MapContainer
        ref={mapRef}
        center={[-35, 92.73]}
        zoom={5}
        maxZoom={6}
        minZoom={4}
        style={{ height: "100vh", width: "100%" }}
        maxBounds={outerBounds}
        maxBoundsViscosity={1}
        crs={CRS.Simple}
      >
        <OSRSMapClickHandler
          onClickHandler={onClickHandler}
          currentLocation={currentLocation}
          setGuessedLocation={setGuessedLocation}
          showGuessResult={showGuessResult}
          showGameOverResult={showGameOverResult}
        />
        <TileLayer
          attribution='<a href="https://jingle.rs/">jingle.rs</a>'
          url={`/osrsmap/{z}/{x}/{y}.png`}
        />
      </MapContainer>
    </div>
  );
}

export default OSRSMap;
