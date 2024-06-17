import { getDailyScoresFromStorage } from "./LocalStorageHelper";

export function copyOrShareResults() {
  let dailyScores = getDailyScoresFromStorage();
  if (dailyScores) {
    let totalScore = dailyScores.reduce(
      (totalValue, currentValue) => totalValue + currentValue
    );

    let retString =
      "I scored " +
      totalScore +
      " on todays OSRSGuesser! Try and beat me! https://websitehere.com\n\n";

    for (var i = 0; i < dailyScores.length; i++) {
      const currentRoundScore = dailyScores[i];
      if (currentRoundScore === 1000) {
        retString += "🥇 " + currentRoundScore;
      } else if (currentRoundScore >= 850) {
        retString += "🟢 " + currentRoundScore;
      } else if (currentRoundScore > 0) {
        retString += "🟡 " + currentRoundScore;
      } else {
        retString += "🔴 " + currentRoundScore;
      }
    }

    navigator.clipboard.writeText(retString);

    // if (navigator.canShare) {
    //   // Enable the Web Share API button
    //   navigator
    //     .share({
    //       title: "OSRS Guesser",
    //       text: retString,
    //       url: "https://websitehere.com",
    //     })
    //     .then(() => console.log("Shared successfully"))
    //     .catch((error) => console.error("Sharing failed:", error));
    // }
  }
}
