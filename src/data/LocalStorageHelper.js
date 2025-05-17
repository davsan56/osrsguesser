import { getDateString } from "./HiddenLocations";

// Set the current game mode (call this from your context/provider when the mode changes)
export function setCurrentGameMode(mode) {
  localStorage.setItem("osrsGameMode", mode);
}

// Get the current game mode (default to "normal" if not set)
export function getCurrentGameMode() {
  return localStorage.getItem("osrsGameMode") || "normal";
}

// Only add a suffix for non-normal modes
function getModeSuffix() {
  const mode = getCurrentGameMode();
  return mode === "normal" ? "" : "-" + mode;
}

export function getDailyScoresFromStorage() {
  let date = getDateString();
  let key = date + "-dailyScores" + getModeSuffix();
  let dailyRoundScores = JSON.parse(localStorage.getItem(key));
  return dailyRoundScores;
}

export function setDailyScoresToStorage(roundScores) {
  let key = getDateString() + "-dailyScores" + getModeSuffix();
  localStorage.setItem(key, JSON.stringify(roundScores));
}

export function getGamesPlayedFromStorage() {
  let key = "numberOfGamesPlayed" + getModeSuffix();
  return localStorage.getItem(key);
}

export function setGamesPlayedToStorage(numberOfGamesPlayed) {
  let key = "numberOfGamesPlayed" + getModeSuffix();
  localStorage.setItem(key, numberOfGamesPlayed);
}

export function deletePreviousDaysScoreFromStorage() {
  let suffix = "-dailyScores" + getModeSuffix();
  for (var i = 0; i < localStorage.length; i++) {
    let localStorageKey = localStorage.key(i);
    if (localStorageKey !== null && localStorageKey.includes(suffix)) {
      localStorage.removeItem(localStorageKey);
      break;
    }
  }
}

export function addGuessedLocation(guessedLocation) {
  let currentGuessedLocations = getGuessedLocations();
  if (currentGuessedLocations === null) {
    currentGuessedLocations = [];
  }
  currentGuessedLocations.push(guessedLocation);
  let key = "guessedLocations" + getModeSuffix();
  localStorage.setItem(key, JSON.stringify(currentGuessedLocations));
}

export function getGuessedLocations() {
  let key = "guessedLocations" + getModeSuffix();
  return JSON.parse(localStorage.getItem(key));
}

export function deleteAllGuessedLocations() {
  let key = "guessedLocations" + getModeSuffix();
  localStorage.removeItem(key);
}
