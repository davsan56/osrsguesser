import { HiddenLocations } from "../data/HiddenLocations";
import { calculateScore } from "../data/ScoringUtils";
import { LatLng } from "leaflet";

describe("Location Guessing Tests", () => {
  HiddenLocations.forEach((location) => {
    const exactLatLng = location.latLng;
    // For close enough, use a small offset that results in distance < 25km
    const closeLatLng = new LatLng(
      exactLatLng.lat + 0.1,
      exactLatLng.lng + 0.1,
    );

    test(`should score 1000 points for close guess at ${location.image}`, () => {
      const score = calculateScore(closeLatLng, exactLatLng);
      expect(score).toBe(1000);
    });

    test(`should score 1000 points for exact guess at ${location.image}`, () => {
      const score = calculateScore(exactLatLng, exactLatLng);
      expect(score).toBe(1000);
    });
  });
});
