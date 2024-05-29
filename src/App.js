import "./App.css"
import "leaflet/dist/leaflet.css"

import { useState, useRef, useEffect } from "react";

import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { LatLngBounds, latLng, CRS, Icon } from "leaflet";

import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

function App() {
  return (
    <MyMapComponent />
  );
}

function MyMapComponent() {
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
      <MyClickComponent />
      <TileLayer
        attribution='<a href="https://jingle.rs/">jingle.rs</a>'
        url={`/osrsmap/{z}/{x}/{y}.png`}
      />
    </MapContainer>
  )
}

function MyClickComponent() {
  const [position, setPosition] = useState(null)

  const myIcon = new Icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconAnchor: [12, 41],
  })

  const map = useMapEvents({
    click: async (e) => {
      setPosition(e.latlng)
    }
  })
  return (
    <>
      {position && (
        <Marker
          position={position}
          icon={myIcon}
        />
      )}
    </>
  )
}

export default App;
