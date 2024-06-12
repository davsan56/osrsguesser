import { Location } from "./Classes";
import seedrandom from "seedrandom";
import { LatLng } from "leaflet";

export const HiddenLocations = [
  new Location("lletya", new LatLng(-46.125, 61.625)),
  new Location("varrock_center", new LatLng(-33.671875, 101.984375)),
  new Location("falador_castle", new LatLng(-37.750789, 90.695791)),
  new Location("lumbridge_castle", new LatLng(-43.53125, 102.078125)),
  new Location("barbarian_village", new LatLng(-33.109375, 95.6875)),
  new Location("ferox_enclave", new LatLng(-23.96875, 98.046875)),
  new Location("grand_tree_entrance", new LatLng(-30.859375, 66.984375)),
  new Location("woodcutting_guild", new LatLng(-30.921875, 25.015625)),
  new Location("mount_karuulm", new LatLng(-15.953125, 12.859375)),
  new Location("west_ardy", new LatLng(-39.69308, 67.509671)),
  new Location("ardy_monastary", new LatLng(-43.953125, 73.562)),
  new Location("camelot_round_table", new LatLng(-30.046875, 80.84375)),
  new Location("seers_church_yews", new LatLng(-32.140625, 78.4375)),
  new Location("ungael", new LatLng(-4.59375, 57.917587)),
];

function dateSeed() {
  const date = new Date();
  const day = date.getUTCDate().toString();
  const month = (date.getUTCMonth() + 1).toString(); // Month is 0 based
  const year = date.getUTCFullYear().toString();
  const seed = seedrandom(month + day + year)();
  return seed;
}

export function getRandomLocations(numberOfLocationsToGuess) {
  let randomLocations = [];
  while (randomLocations.length < numberOfLocationsToGuess) {
    for (let i = randomLocations.length; i < numberOfLocationsToGuess; i++) {
      randomLocations.push(
        HiddenLocations[Math.floor(dateSeed() * HiddenLocations.length)]
      );
      randomLocations = randomLocations.filter(
        (item, i, ar) => ar.indexOf(item) === i
      );
    }
  }
  return randomLocations;
}
