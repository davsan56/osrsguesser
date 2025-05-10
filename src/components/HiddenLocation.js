import { useEffect, useMemo, useState } from "react";

import "../App.css";
import KeyDetector from "./KeyDetector";

let timer = null;

function HiddenLocation({ location, onRoundStartNotification }) {
  const [imageClassName, setImageClassName] = useState("countdown-container");
  const [isTimerActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3);

  useEffect(() => {
    if (isTimerActive) {
      timer = setInterval(() => {
        if (timeRemaining <= 1) {
          clearInterval(timer);
          setIsActive(false);
          setImageClassName("hidden-location");
          onRoundStartNotification();
        }
        setTimeRemaining((seconds) => seconds - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isTimerActive, timeRemaining, onRoundStartNotification]);

  useMemo(() => {
    setTimeRemaining(3);
    setImageClassName("countdown-container");
    setIsActive(true);
  }, [location]);

  function onClickHandler() {
    setTimeRemaining(0);
    setIsActive(false);
    clearInterval(timer);

    if (timeRemaining !== 0) {
      onRoundStartNotification();
    }

    if (imageClassName === "hidden-location") {
      setImageClassName("countdown-container");
    } else {
      setImageClassName("hidden-location");
    }
  }

  function onKeyDown(event) {
    if (event.key === "Escape") {
      onClickHandler();
    }
  }

  return (
    <div className={imageClassName} onClick={onClickHandler}>
      {imageClassName === "countdown-container" && (
        <>
          <div className="x-button osrs-button">X</div>
          <KeyDetector callback={onKeyDown} />
        </>
      )}
      <img
        src={require("../../public/locations/" + location.image + ".png")}
        alt={location.image}
        className="hidden-location-image"
      />
      {imageClassName === "countdown-container" && timeRemaining !== 0 && (
        <div className="countdown">{timeRemaining}</div>
      )}
    </div>
  );
}

export default HiddenLocation;
