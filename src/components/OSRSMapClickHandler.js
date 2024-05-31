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

function OSRSMapClickHandler({ onClickHandler }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: async (e) => {
      setPosition(e.latlng);
      onClickHandler();
    },
  });
  return (
    <>
      {position && (
        <>
          <Marker position={position} icon={myIcon} />
        </>
      )}
    </>
  );
}

export default OSRSMapClickHandler;
