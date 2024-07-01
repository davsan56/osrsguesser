const { REACT_APP_LAT_LNG_TESTING } = process.env;

export function isLatLngTesting() {
  return REACT_APP_LAT_LNG_TESTING === "true";
}
