import "./App.css"
import "leaflet/dist/leaflet.css"

import { useState } from "react";

import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";

import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

function App() {
  return (
    <MyMapComponent />
  );
}

function MyMapComponent() {

  

  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={13}
    >
      <MyClickComponent />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
