import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCopy, faDonate } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  getDailyScoresFromStorage,
  getGamesPlayedFromStorage,
} from "../data/LocalStorageHelper";
import { copyOrShareResults } from "../data/CopyOrShareResults";
import HomePageContainer from "../components/HomePageContainer";

function HomePage() {
  const [roundScores, setRoundScores] = useState([]);
  const [numberOfGamesPlayed, setNumberOfGamesPlayed] = useState(0);

  useMemo(() => {
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
    <div className="home">
      <div className="home-page-container osrs-background">
        <p className="dialog-title">OSRS Guesser</p>
        {roundScores.length !== 0 && (
          <HomePageContainer
            roundScores={roundScores}
            numberOfGamesPlayed={numberOfGamesPlayed}
          />
        )}
        <ul>
          {roundScores.length === 0 && (
            <>
              <p>Guess the locations on the OSRS map based on the image!</p>
              <li>
                <Link className="osrs-button" to="/Game">
                  <FontAwesomeIcon icon={faPlay} />
                </Link>
              </li>
            </>
          )}
          {roundScores.length !== 0 && (
            <li>
              <button className="osrs-button" onClick={copyOrShareResults}>
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
          <li>
            <Link
              className="osrs-button"
              to="https://donatewebsitehere.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDonate} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
