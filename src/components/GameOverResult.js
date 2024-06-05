import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/fontawesome-free-regular";

import RoundScores from "./RoundScores";

function GameOverResult({ totalScore, roundScores }) {
  return (
    <div className="game-over osrs-background">
      <p className="dialog-title">
        <b>Good game!</b>
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
