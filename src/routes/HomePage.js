import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDonate,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  getDailyScoresFromStorage,
  getGamesPlayedFromStorage,
} from "../data/LocalStorageHelper";
import HomePageContainer from "../components/HomePageContainer";
import { CopyOrShareButton } from "../data/CopyOrShareResults";
import { isLatLngTesting, isNewLocationTesting } from "../data/IsLatLngTesting";
import { newUpdateText } from "../data/UpdateText";

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

  if (isLatLngTesting()) {
    return (
      <div className="home">
        <div className="home-page-container osrs-background">
          <p className="dialog-title">OSRS Guesser</p>
          <ul>
            <p style={{ marginBottom: 10 }}>Lat Lng Testing</p>
            <li>
              <Link className="osrs-button" to="/game">
                <FontAwesomeIcon icon={faPlay} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (isNewLocationTesting()) {
    return (
      <div className="home">
        <div className="home-page-container osrs-background">
          <p className="dialog-title">OSRS Guesser</p>
          <ul>
            <p style={{ marginBottom: 10 }}>New Location Testing</p>
            <li>
              <Link className="osrs-button" to="/game">
                <FontAwesomeIcon icon={faPlay} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
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
          <ul id="padding-bottom">
            {roundScores.length === 0 && (
              <>
                <p className="dialog-message">
                  Guess the locations on the OSRS map based on the image!
                </p>
                <li>
                  <Link className="osrs-button" to="/game">
                    <FontAwesomeIcon icon={faPlay} />
                  </Link>
                </li>
                <li>
                  <Link className="osrs-button" to="/timedGame">
                    <FontAwesomeIcon icon={faPlay} /> Timed Game
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul>
            {roundScores.length !== 0 && (
              <>
                <li>
                  <CopyOrShareButton />
                </li>
                <li>
                  <Link className="osrs-button" to="/game">
                    <FontAwesomeIcon icon={faMapLocationDot} />
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                className="osrs-button"
                to="https://github.com/davsan56/osrsguesser"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
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
        {roundScores.length === 0 && newUpdateText().length !== 0 && (
          <div className="home-page-container osrs-background">
            <div className="rotate-text">new</div>
            {newUpdateText()}
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
