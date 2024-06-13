import { getDateString } from "./HiddenLocations";

export function getDailyScoresFromStorage() {
  let date = getDateString();
  let dailyRoundScores = JSON.parse(
    localStorage.getItem(date + "-dailyScores")
  );
  return dailyRoundScores;
}
