import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/fontawesome-free-regular";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import RoundScores from "./RoundScores";
import { getDateString } from "../data/HiddenLocations";
import { getGamesPlayedFromStorage } from "../data/Classes";

function GameOverResult({ totalScore, roundScores }) {
  const [numberOfGamesPlayed, setNumberOfGamesPlayed] = useState(0);

  function getGameOverTitle() {
    if (totalScore === 5000) {
      return "Gielinor genius!";
    } else if (totalScore >= 850) {
      return "OSRS gamer";
    } else if (totalScore > 0) {
      return "OSRS fan";
    } else {
      return "Total Noob";
    }
  }

  useEffect(() => {
    localStorage.setItem(
      getDateString() + "-dailyScores",
      JSON.stringify(roundScores)
    );
    let numberOfGamesPlayed = getGamesPlayedFromStorage();
    if (numberOfGamesPlayed === undefined) {
      numberOfGamesPlayed = 0;
    }
    setNumberOfGamesPlayed(numberOfGamesPlayed + 1);
    localStorage.setItem("numberOfGamesPlayed", numberOfGamesPlayed + 1);
  }, []);

  return (
    <div className="game-over osrs-background">
      <p className="dialog-title">
        <b>{getGameOverTitle(totalScore)}</b>
      </p>
      <p className="dialog-title">Final score: {totalScore} / 5000</p>
      <RoundScores roundScores={roundScores} />
      <p>Number of games played: {numberOfGamesPlayed}</p>
      <ul>
        <li>
          <Link className="osrs-button" to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <button className="osrs-button">
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default GameOverResult;
