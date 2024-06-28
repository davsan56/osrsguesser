import Countdown from "react-countdown";

import RoundScores from "../components/RoundScores";

function HomePageContainer({ roundScores, numberOfGamesPlayed }) {
  const renderer = (props) => {
    if (props.completed) {
      // Render a completed state
      return <span>Refresh to play!</span>;
    } else {
      // Render a countdown
      return (
        <span>
          {props.hours}:{props.formatted.minutes}:{props.formatted.seconds}
        </span>
      );
    }
  };

  return (
    <>
      <p>Todays scores</p>
      <RoundScores roundScores={roundScores} isGameOver={true} />
      {numberOfGamesPlayed !== 0 && <p>Games played: {numberOfGamesPlayed}</p>}
      <p>
        Next game in:{" "}
        <Countdown
          date={
            Date.now() +
            (86400 - (Math.floor(new Date() / 1000) % 86400)) * 1000
          }
          renderer={renderer}
          zeroPadTime={2}
        />
      </p>
    </>
  );
}

export default HomePageContainer;
