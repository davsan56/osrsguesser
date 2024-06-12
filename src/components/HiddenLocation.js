import { useEffect, useState } from "react";

import "../App.css";

function HiddenLocation({ location }) {
  const [imageClassName, setImageClassName] = useState("countdown-container");
  const [isTimerActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3);

  useEffect(() => {
    let timer = null;
    if (isTimerActive) {
      timer = setInterval(() => {
        if (timeRemaining <= 1) {
          clearInterval(timer);
          setIsActive(false);
          setImageClassName("hidden-location");
        }
        setTimeRemaining((seconds) => seconds - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    setTimeRemaining(3);
    setImageClassName("countdown-container");
    setIsActive(true);
  }, [location]);

  return (
    <div className={imageClassName}>
      <img
        src={require("../../public/locations/" + location.image + ".png")}
        alt={location.image}
        className="hidden-location-image"
      />
      {imageClassName === "countdown-container" && (
        <div className="countdown">{timeRemaining}</div>
      )}
    </div>
  );
}

export default HiddenLocation;
