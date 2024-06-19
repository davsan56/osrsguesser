import Countdown from "react-countdown";

import RoundScores from "../components/RoundScores";

function HomePageContainer({ roundScores, numberOfGamesPlayed }) {
  return (
    <>
      <p>Todays scores</p>
      <RoundScores roundScores={roundScores} />
      {numberOfGamesPlayed !== 0 && (
        <p>Number of gamnes played: {numberOfGamesPlayed}</p>
      )}
      <p>Time until next game</p>
      <Countdown
        date={
          Date.now() + (86400 - (Math.floor(new Date() / 1000) % 86400)) * 1000
        }
      />
    </>
  );
}

export default HomePageContainer;
