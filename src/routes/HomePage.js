import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import RoundScores from "../components/RoundScores";
import { useEffect, useState } from "react";
import {
  getDailyScoresFromStorage,
  getGamesPlayedFromStorage,
} from "../data/LocalStorageHelper";
import Countdown from "react-countdown";

function HomePage() {
  const [roundScores, setRoundScores] = useState([]);
  const [numberOfGamesPlayed, setNumberOfGamesPlayed] = useState(0);

  useEffect(() => {
    let dailyRoundScores = getDailyScoresFromStorage();
    if (dailyRoundScores !== null) {
      setRoundScores(dailyRoundScores);
    }

    let gamesPlayed = getGamesPlayedFromStorage();
    if (gamesPlayed !== undefined) {
      setNumberOfGamesPlayed(gamesPlayed);
    }
  }, []);

  return (
    <div className="home osrs-background">
      <div className="home-page-container">
        <p className="dialog-title">OSRS Guesser</p>
        {roundScores.length !== 0 && (
          <>
            <p>Todays scores</p>
            <RoundScores roundScores={roundScores} />
            {numberOfGamesPlayed !== 0 && (
              <p>Number of gamnes played: {numberOfGamesPlayed}</p>
            )}
            <p>Time until next game</p>
            <Countdown
              date={
                Date.now() +
                (86400 - (Math.floor(new Date() / 1000) % 86400)) * 1000
              }
            />
          </>
        )}
        <ul>
          {roundScores.length === 0 && (
            <li>
              <Link className="osrs-button" to="/Game">
                <FontAwesomeIcon icon={faPlay} />
              </Link>
            </li>
          )}
          {roundScores.length !== 0 && (
            <li>
              <button className="osrs-button">
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </li>
          )}
          <li>
            <Link
              className="osrs-button"
              to="https://github.com/davsan56/OSRSGuesser"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
