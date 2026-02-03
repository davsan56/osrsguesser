/**
 * Utility functions for scoring location guesses
 */

/**
 * Calculate the score for a location guess
 * @param {LatLng} guessedLocation - The guessed coordinates
 * @param {LatLng} actualLocation - The actual coordinates
 * @param {boolean} isTimedGame - Whether this is a timed game
 * @param {number} currentScore - Current score for timed games (optional)
 * @returns {number} The calculated score (0-1000)
 */
export function calculateScore(
  guessedLocation,
  actualLocation,
  isTimedGame = false,
  currentScore = 1000,
) {
  let dis = guessedLocation.distanceTo(actualLocation);
  let distanceConversion = (dis / 1000).toFixed(0);
  let distanceKm = distanceConversion;
  let score = 1000 - distanceKm;
  let roundScore = score < 0 ? 0 : score > 975 ? 1000 : score;

  // If the game is a timed game, factor in the current score to the distance score
  if (isTimedGame) {
    // If perfect guess, set score to current score
    if (roundScore === 1000) {
      roundScore = currentScore;
    }
    // If the score is less than 1000, factor in the current score to the distance score
    else {
      roundScore = Math.floor((roundScore * currentScore) / 1000);
    }
  }

  return roundScore;
}
