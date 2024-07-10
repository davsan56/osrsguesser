import { faCopy } from "@fortawesome/fontawesome-free-regular";
import { faCheck, faShare } from "@fortawesome/free-solid-svg-icons";

import { getDailyScoresFromStorage } from "./LocalStorageHelper";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function copyOrShareResults() {
  let dailyScores = getDailyScoresFromStorage();
  if (dailyScores) {
    let totalScore = dailyScores.reduce(
      (totalValue, currentValue) => totalValue + currentValue
    );

    let retString =
      "I scored " +
      totalScore +
      " on todays OSRSGuesser! Try and beat me! https://osrsguesser.app\n\n";

    for (var i = 0; i < dailyScores.length; i++) {
      const currentRoundScore = dailyScores[i];
      if (currentRoundScore === 1000) {
        retString += "🥇 " + currentRoundScore + " ";
      } else if (currentRoundScore >= 850) {
        retString += "🟢 " + currentRoundScore + " ";
      } else if (currentRoundScore > 0) {
        retString += "🟡 " + currentRoundScore + " ";
      } else {
        retString += "🔴 " + currentRoundScore + " ";
      }
    }

    retString = retString.trim();

    // if (isMobile) {
    //   if (navigator.canShare) {
    //     // Enable the Web Share API button
    //     navigator
    //       .share({
    //         title: "OSRS Guesser",
    //         text: retString,
    //         url: "https://osrsguesser.app",
    //       })
    //       .then(() => console.log("Shared successfully"))
    //       .catch((error) => console.error("Sharing failed:", error));
    //   }
    // } else {
    navigator.clipboard.writeText(retString);
    // }
  }
}

export function CopyOrShareButton() {
  const [iconImage, setIconImage] = useState(isMobile ? faCopy : faCopy);

  function onClickHandler() {
    if (iconImage === faCheck) {
      return;
    }
    setIconImage(faCheck);
    copyOrShareResults();
    setTimeout(() => {
      setIconImage(isMobile ? faCopy : faCopy);
    }, 2000);
  }

  return (
    <button className="osrs-button" onClick={onClickHandler}>
      <FontAwesomeIcon icon={iconImage} />
    </button>
  );
}
