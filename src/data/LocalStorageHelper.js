import { getDateString } from "./HiddenLocations";

export function getDailyScoresFromStorage() {
  let date = getDateString();
  let dailyRoundScores = JSON.parse(
    localStorage.getItem(date + "-dailyScores")
  );
  return dailyRoundScores;
}

export function setDailyScoresToStorage(roundScores) {
  localStorage.setItem(
    getDateString() + "-dailyScores",
    JSON.stringify(roundScores)
  );
}

export function getGamesPlayedFromStorage() {
  return localStorage.getItem("numberOfGamesPlayed");
}

export function setGamesPlayedToStorage(numberOfGamesPlayed) {
  localStorage.setItem("numberOfGamesPlayed", numberOfGamesPlayed);
}
