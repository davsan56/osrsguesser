import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faHouse } from "@fortawesome/free-solid-svg-icons";

import { useLocalStorageHelper } from "../context/LocalStorageHelperContext";
import RoundScores from "./RoundScores";
import { CopyOrShareButton } from "../data/CopyOrShareResults";
import { isNewLocationTesting } from "../data/IsLatLngTesting";

function GameOverResult({ totalScore, roundScores }) {
  const { setDailyScoresToStorage, getGamesPlayedFromStorage } =
    useLocalStorageHelper();
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

  useMemo(() => {
    if (!isNewLocationTesting()) {
      setDailyScoresToStorage(roundScores);
      setNumberOfGamesPlayed(getGamesPlayedFromStorage());
    }
  }, []);

  return (
    <div className="game-over osrs-background">
      <p className="dialog-title">{getGameOverTitle(totalScore)}</p>
      <RoundScores roundScores={roundScores} isGameOver={true} />
      <p>Number of games played: {numberOfGamesPlayed}</p>
      <ul>
        <li>
          <Link className="osrs-button" to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <CopyOrShareButton />
        </li>
        <li>
          <Link
            className="osrs-button"
            to="https://ko-fi.com/davsan56"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDonate} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default GameOverResult;
