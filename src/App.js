import "./App.css"
import "leaflet/dist/leaflet.css"

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

function App() {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3"
    }
  ];

  const myIcon = new Icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconAnchor: [12, 41],
  })

  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(marker => (
        <Marker
          position={marker.geocode}
          icon={myIcon}
         />

        
      ))}
    </MapContainer>
  );
}

export default App;
