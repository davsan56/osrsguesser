import "leaflet/dist/leaflet.css"
import OSRSMapClickHandler from "./OSRSMapClickHandler";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngBounds, latLng, CRS } from "leaflet";

function OSRSMap() {
  const outerBounds = new LatLngBounds(
    latLng(-78, 0),
    latLng(0, 137.3),
  );

  const mapRef = useRef(null);

  return (
    <MapContainer
      ref={mapRef}
      center={[-35, 92.73]}
      zoom={5}
      maxZoom={6}
      minZoom={4}
      style={{ height: '100vh', width: '100%' }}
      maxBounds={outerBounds}
      maxBoundsViscosity={1}
      crs={CRS.Simple}
    >
      <OSRSMapClickHandler />
      <TileLayer
        attribution='<a href="https://jingle.rs/">jingle.rs</a>'
        url={`/osrsmap/{z}/{x}/{y}.png`}
      />
    </MapContainer>
  )
}

export default OSRSMap;