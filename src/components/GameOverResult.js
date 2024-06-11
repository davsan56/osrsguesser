import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/fontawesome-free-regular";

import RoundScores from "./RoundScores";
import { getGameOverTitle } from "../data/HiddenLocations";

function GameOverResult({ totalScore, roundScores }) {
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

  return (
    <div className="game-over osrs-background">
      <p className="dialog-title">
        <b>{getGameOverTitle(totalScore)}</b>
      </p>
      <p className="dialog-title">Final score: {totalScore} / 5000</p>
      <RoundScores roundScores={roundScores} />
      <button className="osrs-button">
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
}

export default GameOverResult;
