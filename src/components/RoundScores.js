import { useEffect, useState } from "react";

function RoundScores({ roundScores }) {
  const [listContent, setListContent] = useState(null);

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

  useEffect(() => {
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
  }, []);

  return <ul>{listContent}</ul>;
}

export default RoundScores;
