import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDonate,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useLocalStorageHelper } from "../context/LocalStorageHelperContext";
import HomePageContainer from "../components/HomePageContainer";
import { CopyOrShareButton } from "../data/CopyOrShareResults";
import { isLatLngTesting, isNewLocationTesting } from "../data/IsLatLngTesting";
import { newUpdateText } from "../data/UpdateText";

function HomePage() {
  const {
    getDailyScoresFromStorage,
    getGamesPlayedFromStorage,
    setCurrentGameMode,
    getCurrentGameMode,
  } = useLocalStorageHelper();
  const [roundScores, setRoundScores] = useState([]);
  const [numberOfGamesPlayed, setNumberOfGamesPlayed] = useState(0);

  // Use state for the selected tab, initialize from localStorage
  const [selectedTab, setSelectedTab] = useState(getCurrentGameMode());

  // Keep localStorage in sync with the selected tab
  useEffect(() => {
    setCurrentGameMode(selectedTab);
  }, [selectedTab, setCurrentGameMode]);

  useEffect(() => {
    const dailyRoundScores = getDailyScoresFromStorage();
    if (dailyRoundScores !== null) {
      setRoundScores(dailyRoundScores);
    } else {
      setRoundScores([]);
    }

    const gamesPlayed = getGamesPlayedFromStorage();
    if (gamesPlayed !== undefined) {
      setNumberOfGamesPlayed(gamesPlayed);
    } else {
      setNumberOfGamesPlayed(0);
    }
  }, [selectedTab, getDailyScoresFromStorage, getGamesPlayedFromStorage]);

  const handleTabSwitch = (mode) => {
    setSelectedTab(mode);
  };

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
          {/* Tab Switcher */}
          <div className="tab-switcher">
            <button
              className={`osrs-button${
                selectedTab === "normal" ? " active" : ""
              }`}
              onClick={() => handleTabSwitch("normal")}
            >
              Normal game
            </button>
            <button
              className={`osrs-button${
                selectedTab === "timed" ? " active" : ""
              }`}
              onClick={() => handleTabSwitch("timed")}
            >
              Timed game
            </button>
          </div>
          {/* Tab Content */}
          {selectedTab === "normal" && (
            <>
              <p className="dialog-title">OSRS Guesser Classic</p>
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
                    <p className="dialog-message">
                      Try and get as close as possible to get the best score!
                    </p>
                    <li>
                      <Link className="osrs-button" to="/game">
                        <FontAwesomeIcon icon={faPlay} />
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </>
          )}
          {selectedTab === "timed" && (
            <>
              <p className="dialog-title">OSRS Guesser Timed</p>
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
                    <p className="dialog-message">
                      Your score will be based on how quickly and acurrately you
                      can guess!
                    </p>
                    <li>
                      <Link className="osrs-button" to="/timedGame">
                        <FontAwesomeIcon icon={faPlay} />
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </>
          )}
          <ul>
            {roundScores.length !== 0 && (
              <>
                <li>
                  <CopyOrShareButton />
                </li>
                <li>
                  <Link
                    className="osrs-button"
                    to={selectedTab === "timed" ? "/timedGame" : "/game"}
                  >
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
