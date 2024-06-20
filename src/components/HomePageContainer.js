import Countdown from "react-countdown";

import RoundScores from "../components/RoundScores";

function HomePageContainer({ roundScores, numberOfGamesPlayed }) {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>Refresh to play!</p>;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <>
      <p>Todays scores</p>
      <RoundScores roundScores={roundScores} />
      {numberOfGamesPlayed !== 0 && <p>Games played: {numberOfGamesPlayed}</p>}
      <p>
        Next game in:{" "}
        <Countdown
          date={
            Date.now() +
            (86400 - (Math.floor(new Date() / 1000) % 86400)) * 1000
          }
          renderer={renderer}
        />
      </p>
    </>
  );
}

export default HomePageContainer;
