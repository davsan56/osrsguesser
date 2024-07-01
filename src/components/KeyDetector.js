import { useEffect } from "react";

function KeyDetector({ callback }) {
  useEffect(() => {
    function handleKeyDown(event) {
      callback(event);
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div></div>;
}

export default KeyDetector;
