import { useRef, useState } from "react";

import "leaflet/dist/leaflet.css";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLng } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const guessIcon = new Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconAnchor: [12, 41],
});

function OSRSTestingMapClickHandler() {
  const [position, setPosition] = useState(new LatLng(0, 0));
  const markerRef = useRef(null);

  const map = useMapEvents({
    click: async (e) => {
      // Zoom map to show both markers
      map.fitBounds([e.latlng]);

      const marker = markerRef.current;
      if (marker) {
        marker.openPopup();
      }

      setPosition(e.latlng);
    },
  });

  return (
    <>
      {position && (
        <Marker ref={markerRef} position={position} icon={guessIcon}>
          <Popup>
            Lat, Lng
            <br />
            {position.lat}, {position.lng}
          </Popup>
        </Marker>
      )}
    </>
  );
}

export default OSRSTestingMapClickHandler;
