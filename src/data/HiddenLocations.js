// import { Location } from "./Classes";
import seedrandom from "seedrandom";
import { LatLng } from "leaflet";

export class Location {
  constructor(image, latLng) {
    this.image = image;
    this.latLng = latLng;
  }
}

const HiddenLocations = [
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
  new Location("emirs_arena", new LatLng(-42.890625, 109.984375)),
  new Location("ardy_zoo", new LatLng(-40.890625, 74.3125)),
  new Location("wizards_guild", new LatLng(-49.703125, 73.171875)),
  new Location("wizards_tower", new LatLng(-46.21875, 97.21875)),
  new Location("draynor_village_jail", new LatLng(-42.203125, 98.015625)),
  new Location("varrock_sewers_bear", new LatLng(-30.40625, 102.75)),
  new Location("witches_house", new LatLng(-31.640625, 87.328125)),
  new Location("burthorpe_games_room", new LatLng(-27.34375, 87.28125)),
  new Location("troll_stronghold", new LatLng(-21.671875, 83.671875)),
  new Location("polar_hunter", new LatLng(-16.53125, 79.25)),
  new Location(
    "lighthouse_basalt_agility",
    new Location(-25.203125, 69.421875)
  ),
  new Location("craken_cave", new LatLng(-25.15625, 57.96875)),
  new Location("falcon_hunting", new LatLng(-26.71875, 62.765625)),
  new Location("minnow_platform", new LatLng(-32.875, 73.75)),
  new Location("observatory", new LatLng(-45.5, 66.640625)),
  new Location("chompy_hunting", new LatLng(-50.890625, 60.984375)),
  new Location("feldip_hills_hunter", new LatLng(-58.515625, 73)),
];

const editableLocations = [...HiddenLocations];

export function getDateString() {
  const date = new Date();
  const day = date.getUTCDate().toString();
  const month = (date.getUTCMonth() + 1).toString(); // Month is 0 based
  const year = date.getUTCFullYear().toString();
  return month + day + year;
}

function dateSeed() {
  const seed = seedrandom(getDateString())();
  return seed;
}

export function getRandomLocations(numberOfLocationsToGuess) {
  let randomLocations = [];
  while (randomLocations.length < numberOfLocationsToGuess) {
    for (let i = randomLocations.length; i < numberOfLocationsToGuess; i++) {
      let locationIndex = Math.floor(dateSeed() * editableLocations.length);
      randomLocations.push(editableLocations[locationIndex]);
      editableLocations.splice(locationIndex, 1);
    }
  }
  return randomLocations;
}
