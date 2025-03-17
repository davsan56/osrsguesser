const { REACT_APP_LAT_LNG_TESTING } = process.env;
const { REACT_APP_NEW_LOCATION_TESTING } = process.env;

export function isLatLngTesting() {
  return REACT_APP_LAT_LNG_TESTING === "true";
}

export function isNewLocationTesting() {
  return REACT_APP_NEW_LOCATION_TESTING === "true";
}
