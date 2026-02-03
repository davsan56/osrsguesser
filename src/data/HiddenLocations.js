import { LatLng } from "leaflet";

class Location {
  constructor(image, latLng) {
    this.image = image;
    this.latLng = latLng;
  }
}

export const HiddenLocations = [
  new Location("al_kharid", new LatLng(-48.3671875, 110.34375)),
  new Location("aldarin_grapes", new LatLng(-62.1328125, 19.453125)),
  new Location("aldarin", new LatLng(-61.046875, 20.1171875)),
  new Location("annakarl_teleport", new LatLng(-15.6640625, 109.28125)),
  new Location("ape_atoll", new LatLng(-68.6640625, 86.515625)),
  new Location("arandar", new LatLng(-42.796875, 64.7578125)),
  new Location("arceuus_church", new LatLng(-20.1484375, 33.9375)),
  new Location("ardy_monastary", new LatLng(-47.5390625, 77.187)),
  new Location("ardy_zoo", new LatLng(-44.4765625, 77.9375)),
  new Location("auburn_valley", new LatLng(-41.34375, 24.46875)),
  new Location("auburnvale", new LatLng(-40.546875, 21.703125)),
  new Location("barbarian_village", new LatLng(-36.6953125, 99.3125)),
  new Location("bedabin_camp", new LatLng(-56.0390625, 103.421875)),
  new Location("black_chins", new LatLng(-20.78125, 101.9296875)),
  new Location("black_salamanders", new LatLng(-25.859375, 109.3828125)),
  new Location("blue_cave_entrance", new LatLng(-20.0859375, 110.7578125)),
  new Location("brimhaven", new LatLng(-49.0078125, 85.953125)),
  new Location("burgh_de_rott", new LatLng(-46.8203125, 119.078125)),
  new Location("burthorpe_games_room", new LatLng(-30.9296875, 90.90625)),
  new Location("cam_torum_entrance", new LatLng(-51.4296875, 22.3359375)),
  new Location("camelot_round_table", new LatLng(-33.6328125, 84.46875)),
  new Location("canifis", new LatLng(-35.5546875, 118.859375)),
  new Location("catherby_beach", new LatLng(-37.1796875, 88.578125)),
  new Location("chambers_of_xeric", new LatLng(-31.4035335, 12.82869)),
  new Location("champions_guild", new LatLng(-40.578125, 104.8671875)),
  new Location("chaos_alter", new LatLng(-18.6328125, 93.40625)),
  new Location("chompy_hunting", new LatLng(-54.4765625, 64.609375)),
  new Location("cooks_guild", new LatLng(-36.1875, 102.2578125)),
  new Location("corp_cave", new LatLng(-25.5390625, 105.125)),
  new Location("corsair_cove", new LatLng(-63.734375, 76.1796875)),
  new Location("crafting_guild", new LatLng(-44.3046875, 92.140625)),
  new Location("crandor", new LatLng(-44.8046875, 87.90625)),
  new Location("crash_island", new LatLng(-70.2890625, 91.875)),
  new Location("crazy_arch", new LatLng(-25.2578125, 94.5390625)),
  new Location("crypt_of_tonalith", new LatLng(-55.6875, 16.1796875)),
  new Location("custodia_mountains_mine", new LatLng(-37.9609375, 15.1953125)),
  new Location("custodia_pass", new LatLng(-41.2890625, 17.0703125)),
  new Location("dark_warriors_bridge", new LatLng(-27.7265625, 96.3046875)),
  new Location("darkmeyer", new LatLng(-42.4296875, 124.0625)),
  new Location("deep_wilderness_dungeon", new LatLng(-14.0703125, 97.921875)),
  new Location(
    "desert_mining_camp",
    new LatLng(-56.35652680233974, 109.07839342913171),
  ),
  new Location("digsite_hill", new LatLng(-39.9609375, 112.3515625)),
  new Location("doom_entrance", new LatLng(-52.546875, 16.53125)),
  new Location("dragontooth_island", new LatLng(-31.3515625, 132.7421875)),
  new Location("draynor_manor", new LatLng(-41.5859375, 99.875)),
  new Location("draynor_village_jail", new LatLng(-45.7890625, 101.640625)),
  new Location("eagles_peak", new LatLng(-34.984375, 64.0703125)),
  new Location("edgeville_yews", new LatLng(-35.3359375, 99.75)),
  new Location("emirs_arena", new LatLng(-46.4453125, 113.5)),
  new Location("entrana", new LatLng(-41.0390625, 88.078125)),
  new Location("etceteria_farm", new LatLng(-16.8828125, 76.140625)),
  new Location("falador_castle", new LatLng(-41.1406375, 94.046875)),
  new Location("falcon_hunting", new LatLng(-30.3046875, 66.390625)),
  new Location("farming_guild", new LatLng(-22.3203125, 12.59375)),
  new Location("feldip_hills_hunter", new LatLng(-62.1015625, 76.625)),
  new Location("ferox_enclave", new LatLng(-27.5546875, 101.671875)),
  new Location("forsaken_tower", new LatLng(-19.140625, 19.8125)),
  new Location("fortis_colosseum", new LatLng(-53.9296875, 40.6328125)),
  new Location("fortis_cothon_thieves", new LatLng(-49.53125, 36.59375)),
  new Location("fossil_island_house", new LatLng(-16.6171875, 131.109375)),
  new Location(
    "fossil_island_mushroom_forest",
    new LatLng(-17.5234375, 127.40625),
  ),
  new Location("fossil_island_tar_swamp", new LatLng(-21.9453125, 127.640625)),
  new Location("fossil_island_volcano_2", new LatLng(-22.3203125, 131.109375)),
  new Location("fossil_island_volcano", new LatLng(-20.5703125, 133.09375)),
  new Location("fountain_of_rune", new LatLng(-16.3671875, 112.3828125)),
  new Location("gemstone_crab_kastori", new LatLng(-51.8515625, 18.2578125)),
  new Location("giants_plateau", new LatLng(-50.2890625, 113.90625)),
  new Location("gloomthorn_trail", new LatLng(-47.078125, 20.0546875)),
  new Location("grand_tree_entrance", new LatLng(-34.4453125, 70.609375)),
  new Location("gu'tanoth", new LatLng(-56.109375, 72.9140625)),
  new Location("harmony_island", new LatLng(-63.4939315, 133.048482)),
  new Location("heroes_guild", new LatLng(-33.4296875, 90.3828125)),
  new Location("hosidius_apples", new LatLng(-27.859375, 35.5625)),
  new Location("huey", new LatLng(-43.7890625, 26.859375)),
  new Location("hunters_guild", new LatLng(-55.4375, 28.0703125)),
  new Location("ice_mountain", new LatLng(-34.203125, 95.3046875)),
  new Location("icy_rune_rock", new LatLng(-14.6953125, 93.0625)),
  new Location("island_of_stone", new LatLng(-9.8828125, 70.796875)),
  new Location("jatizo_entrance", new LatLng(-20.0859375, 68.125)),
  new Location("kastori", new LatLng(-56.3203125, 18.7265625)),
  new Location("kbd_ladder", new LatLng(-17.5703125, 96.515625)),
  new Location("kebos_swamp", new LatLng(-26.6953125, 13.046875)),
  new Location("keep_la_faye", new LatLng(-38.5703125, 84.4453125)),
  new Location("kourend_woodlands", new LatLng(-35.0234375, 26.265625)),
  new Location("kourned_castle", new LatLng(-27.0546875, 31.359375)),
  new Location("kraken_cave", new LatLng(-28.7421875, 61.59375)),
  new Location("molch_island", new LatLng(-27.6718875, 19.1484375)),
  new Location("lava_maze", new LatLng(-17.0234375, 100.71875)),
  new Location("legends_guild", new LatLng(-39.625, 82.9375)),
  new Location("lighthouse_basalt_agility", new LatLng(-28.7890625, 73.046875)),
  new Location("lithriken", new LatLng(-10.0390625, 121.90625)),
  new Location("lletya", new LatLng(-49.7109375, 65.25)),
  new Location("lovakengj_statue", new LatLng(-20.6640625, 23.390625)),
  new Location("lovakenji_flowers", new LatLng(-21.5390625, 27.4296875)),
  new Location("lumbridge_castle", new LatLng(-47.1171875, 105.703125)),
  new Location("lunar_island_flax", new LatLng(-16.2421875, 54.3125)),
  new Location("mage_arena", new LatLng(-13.609375, 99.890625)),
  new Location("mammaths", new LatLng(-29.0156375, 103.7421875)),
  new Location("meiyerditch", new LatLng(-47.3203125, 124.734375)),
  new Location("mining_guild", new LatLng(-41.6015625, 96.9375)),
  new Location("minnow_platform", new LatLng(-36.4609375, 77.375)),
  new Location("miscellania_castle", new LatLng(-16.9765625, 72.84375)),
  new Location("mons_gratia", new LatLng(-46.0703125, 22.6015625)),
  new Location("mort_myre_swamp", new LatLng(-43.4140625, 115.484375)),
  new Location("mos_le'harmless", new LatLng(-58.6484375, 129.96875)),
  new Location("mos_le'harmless_trees", new LatLng(-54.7734375, 134.625)),
  new Location("mount_karuulm", new LatLng(-19.5390625, 16.484375)),
  new Location("mta", new LatLng(-43.6328125, 111.828125)),
  new Location("musa_point", new LatLng(-48.9296875, 92.140625)),
  new Location("mynydd", new LatLng(-37.1953125, 56.6953125)),
  new Location("mynydd_cenotaph", new LatLng(-39.296875, 56.75)),
  new Location("myths_guild", new LatLng(-64.75, 70.6328125)),
  new Location("nardah_oven", new LatLng(-62.7734375, 116.046875)),
  new Location("necropolis", new LatLng(-70.4765625, 110.40625)),
  new Location("neitiznot_yaks", new LatLng(-20.4296875, 63.828125)),
  new Location("nemus_retreat", new LatLng(-42.953125, 19.6640625)),
  new Location("observatory", new LatLng(-49.0859375, 70.265625)),
  new Location("old_crones_house", new LatLng(-31.6328125, 117.296875)),
  new Location("pirates_cove", new LatLng(-19.4140625, 58.296875)),
  new Location("poison_waste", new LatLng(-53.1953125, 58.9375)),
  new Location("polar_hunter", new LatLng(-20.1171875, 82.875)),
  new Location("pollnivneach", new LatLng(-58.7109375, 112.796875)),
  new Location("port_phasmatys", new LatLng(-34.9921875, 127.515625)),
  new Location("port_piscarilius", new LatLng(-23.3046875, 40.171875)),
  new Location("port_sarim", new LatLng(-46.328125, 97.2734375)),
  new Location("quetzacalli_gorge", new LatLng(-46.0234375, 25.90625)),
  new Location("ralos_rise", new LatLng(-49.5859375, 23.0390625)),
  new Location("ranging_guild", new LatLng(-37.8125, 80.3359375)),
  new Location("resource_area", new LatLng(-13.703125, 104.7578125)),
  new Location("revenant_crevice", new LatLng(-22.6328125, 98.8671875)),
  new Location("river_elid", new LatLng(-53.4609375, 113.125)),
  new Location("rogues_castle", new LatLng(-13.0703125, 109.1953125)),
  new Location(
    "ruins_of_ullek_teaks",
    new LatLng(-67.3100219185358655, 116.35943143366964),
  ),
  new Location("ruins_of_unkah", new LatLng(-64.6796875, 103.78125)),
  new Location("saltpetre", new LatLng(-32.390625, 35.1328125)),
  new Location("scorpia_entrance", new LatLng(-12.9921875, 106.6640625)),
  new Location("seers_church_yews", new LatLng(-35.6953125, 81.8671875)),
  new Location("shayzien_encampment", new LatLng(-25.9147865, 26.456785)),
  new Location("shayzien_graveyard", new LatLng(-30.55469, 24.296875)),
  new Location("shilo_village", new LatLng(-58.6015625, 87.75)),
  new Location("slayer_tower", new LatLng(-31.5234375, 115.046875)),
  new Location("slepe", new LatLng(-43.2265625, 130.3125)),
  new Location("soul_altar", new LatLng(-16.5078125, 40.84375)),
  new Location("soul_wars_ruins", new LatLng(-66.5078125, 56.1171875)),
  new Location("soul_wars", new LatLng(-65.2578125, 58.625)),
  new Location("stonecutters_outpost", new LatLng(-58.609375, 36.6875)),
  new Location("stranglewood1", new LatLng(-36.546875, 10.5546875)),
  new Location("stranglewood_mine", new LatLng(-42.1328125, 9.6796875)),
  new Location("sunset_coast", new LatLng(-57.640625, 25.7734375)),
  new Location("tai_bwo_wannai", new LatLng(-54.8203125, 86.015625)),
  new Location("tal_teklan", new LatLng(-51.484375, 12.4609375)),
  new Location("tal_teok", new LatLng(-50.1953125, 13.4765625)),
  new Location("tecu_salamanders", new LatLng(-53.296875, 24.0390625)),
  new Location("tithe_farm", new LatLng(-34.6796875, 40.671875)),
  new Location("tlati_rainforest_bridge", new LatLng(-50.265625, 16.7109375)),
  new Location("tlati_rainforest_mahogany", new LatLng(-57.1640625, 14)),
  new Location("troll_stronghold", new LatLng(-25.2578125, 87.296875)),
  new Location("twilight_temple", new LatLng(-46.9375, 32.3203125)),
  new Location("undead_cow_pen", new LatLng(-32.9140625, 124.609375)),
  new Location("ungael", new LatLng(-8.1796875, 61.542587)),
  new Location("uzer_temple", new LatLng(-56.2734375, 118.3828125)),
  new Location("vardorvis", new LatLng(-38.171875, 7.9375)),
  new Location("varlamore_bazaar", new LatLng(-52.1953125, 33.8125)),
  new Location("varlamore_fountain", new LatLng(-51.0390625, 33.828125)),
  new Location("varlamore_waterfall", new LatLng(-49.09375, 25.0390625)),
  new Location("varrock_center", new LatLng(-37.2578125, 105.609375)),
  new Location("varrock_sewers_bear", new LatLng(-33.9921875, 106.375)),
  new Location("villa_lucens_stage", new LatLng(-60.5078125, 23.8203125)),
  new Location("void_knights_outpost", new LatLng(-73.9296875, 79.1875)),
  new Location("warriors_guild", new LatLng(-31.5390625, 88.1328125)),
  new Location("waterbirth_island", new LatLng(-22.6328125, 73.3125)),
  new Location("weiss", new LatLng(-13.4453125, 90.296875)),
  new Location("west_ardy", new LatLng(-43.27883, 71.134671)),
  new Location(
    "wilderness_agility_course",
    new LatLng(-13.5078125, 95.8984375),
  ),
  new Location("wilderness_ankou", new LatLng(-21.5390625, 94.71875)),
  new Location("wilderness_gwd_entrance", new LatLng(-22.78125, 96.2421875)),
  new Location("wilderness_sign", new LatLng(-32.0859375, 104.421875)),
  new Location("wilderness_volcano", new LatLng(-13.7578125, 112.8671875)),
  new Location("wintertodt_camp", new LatLng(-13.8046875, 31.454994)),
  new Location("witches_house", new LatLng(-35.2265625, 90.953125)),
  new Location("wizards_guild", new LatLng(-53.2890625, 76.796875)),
  new Location("wizards_tower", new LatLng(-49.8046875, 100.84375)),
  new Location("woodcutting_guild", new LatLng(-34.5078125, 28.640625)),
  new Location("wyrm_remains", new LatLng(-61.9140625, 31.96875)),
];

// Helper function to create a consistent pseudo-random number generator
function mulberry32(seed) {
  return function () {
    var t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Fisher-Yates shuffle algorithm with a seeded random number generator
function shuffle(array, seed) {
  let rng = mulberry32(seed);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to get the current day number based on GMT
function getCurrentDayNumber() {
  const now = new Date();
  const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
  const diff = now - startOfYear;
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.floor(diff / oneDay);
}

// Function to get the current year based on GMT
function getCurrentYear() {
  const now = new Date();
  return now.getUTCFullYear();
}

// Function to sort an array the same way for a given number of days, then change the order after that period
function sortArrayOnCycle(array, seed) {
  // Create a copy of the array to avoid modifying the original array
  const arrayCopy = array.slice();
  return shuffle(arrayCopy, seed);
}

// Function to get unique entries ensuring they don't repeat within the configured period
function getUniqueEntries(
  array,
  numberOfLocationsToGuess,
  daysBeforeReshuffle,
  modeSeed = 0,
) {
  const currentDayNumber = getCurrentDayNumber();
  const currentYear = getCurrentYear();
  const daySeed = Math.floor(currentDayNumber / daysBeforeReshuffle); // Seed changes after the given number of days

  // Create a unique seed using the current year and daySeed
  const seed = 12345 + currentYear * 10000 + daySeed + modeSeed; // Multiply currentYear by 10000 to make the seed more unique

  const sortedArray = sortArrayOnCycle(array, seed);

  // Calculate the offset to ensure non-overlapping segments within the period
  const offset =
    (currentDayNumber % daysBeforeReshuffle) * numberOfLocationsToGuess;

  // If offset + numberOfLocationsToGuess exceeds the array length, wrap around
  const uniqueEntries = [];
  for (let i = 0; i < numberOfLocationsToGuess; i++) {
    uniqueEntries.push(sortedArray[(offset + i) % sortedArray.length]);
  }

  return uniqueEntries;
}

// Function to get the date as a string, ie july 3rd 2024 = 732024
export function getDateString() {
  const date = new Date();
  const day = date.getUTCDate().toString();
  const month = (date.getUTCMonth() + 1).toString(); // Month is 0 based
  const year = date.getUTCFullYear().toString();
  return month + day + year;
}

// Returns an array of todays hidden location
export function getRandomLocations(
  numberOfLocationsToGuess,
  isTimedGame = false,
) {
  const daysBeforeReshuffle = 7;
  const modeSeed = isTimedGame ? 1000 : 0;

  const todayLocations = getUniqueEntries(
    HiddenLocations,
    numberOfLocationsToGuess,
    daysBeforeReshuffle,
    modeSeed,
  );

  return todayLocations;
}

function getEntryByString(arr, str) {
  return arr.find((entry) =>
    Object.values(entry).some((value) => String(value) === str),
  );
}

function fillLeft(array, size, value) {
  const currentLength = array.length;

  if (currentLength < size) {
    const elementsToPrepend = size - currentLength;
    for (let i = 0; i < elementsToPrepend; i++) {
      array.unshift(value);
    }
  }
  return array;
}

// Returns an array of locations based on the passed in names
// numberOfLocations defaults to 5 if not specified
export function getLocationsFrom(locations, numberOfLocations = 5) {
  const locationArray = [];
  locations.forEach((location) => {
    locationArray.push(getEntryByString(HiddenLocations, location));
  });

  fillLeft(
    locationArray,
    numberOfLocations,
    getEntryByString(HiddenLocations, locations[0]),
  );

  return locationArray;
}
