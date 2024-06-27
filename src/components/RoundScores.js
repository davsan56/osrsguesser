import { useMemo, useState } from "react";

function RoundScores({ roundScores }) {
  const [listContent, setListContent] = useState(null);
  const [totalScore, setTotalScore] = useState(0);

  function getClassColor(score) {
    return score === 1000
      ? "gold"
      : score > 850
      ? "green"
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
      <p className="todays-total-score">{totalScore} / 5000</p>
      <ul>{listContent}</ul>
    </div>
  );
}

export default RoundScores;
