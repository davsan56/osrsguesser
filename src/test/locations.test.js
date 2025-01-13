import { HiddenLocations } from "../data/HiddenLocations";

test("make sure all locations have an image", () => {
  HiddenLocations.forEach((location) => {
    const filename = location.image;
    const picture = require("../../public/locations/" +
      location.image +
      ".png");
    expect(picture).toBeDefined;
  });
});
