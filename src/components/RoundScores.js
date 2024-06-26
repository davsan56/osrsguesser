import { useMemo, useState } from "react";

function RoundScores({ roundScores, isGameOver }) {
  const [listContent, setListContent] = useState(null);
  const [totalScore, setTotalScore] = useState(0);

  function getClassColor(score) {
    return score === 1000
      ? "green"
      : score > 850
      ? "light-green"
      : score > 0
      ? "yellow"
      : score === 0
      ? "red"
      : "";
  }

  useMemo(() => {
    let content = [];
    for (let i = 0; i < 5; i++) {
      const score = roundScores[i];
      content.push(
        <li
          className="score-list"
          id={getClassColor(score ?? "-")}
          key={i + ":" + score ?? "-"}
        >
          {score ?? "-"}
        </li>
      );
    }
    setListContent(content);

    setTotalScore(
      roundScores.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
  }, [roundScores]);

  return (
    <div className="round-scores">
      <p className="todays-total-score">
        {isGameOver ? totalScore : roundScores.at(-1)}
        {isGameOver ? <span> / 5000</span> : <span></span>}
      </p>
      <ul>{listContent}</ul>
    </div>
  );
}

export default RoundScores;
