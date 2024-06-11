import { useEffect, useState } from "react";

import "../App.css";

function HiddenLocation({ location }) {
  const [imageClassName, setImageClassName] = useState("countdown");

  useEffect(() => {
    async function changeImageClassName() {
      setImageClassName("countdown");
      await delay(3000);
      setImageClassName("hidden-location");
    }

    changeImageClassName();
  }, [location]);

  return (
    <div className={imageClassName}>
      <img
        src={require("../../public/locations/" + location.image + ".png")}
        alt={location.image}
        className="hidden-location-image"
      />
    </div>
  );
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default HiddenLocation;
