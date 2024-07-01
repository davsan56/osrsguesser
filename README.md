# OSRSGuesser

A location guessing game for Old School RuneScape. Inspired by GeoGuessr, OSRSGuesser is a game where you guess where on the map the given picture is. You get points based on how close your guess is!

The daily OSRSGuesser resets at Midnight GMT.

You can play at https://davsan56.github.io/osrsguesser

## Contributing

Have an idea for a location? Here are some of the ways you can submit your own!

1. Submit an issue on Github or start a new Discussion with the location you have in mind and I will look to add it.
2. Want to take the picture on your own and have yourself featured? Install the Client Resizer plugin on RuneLite to set your RuneLite window to 1280x720. Then use the built in RuneLite screenshot functionality to get a screenshot. You can now open an issue or start a new discussion including your picture!
3. Want to help even further? You can follow these steps:

- Clone the repo
- Rename the `.env.example` file to `.env` and have the variable `REACT_APP_LAT_LNG_TESTING` to `true`
- `npm install`
- `npm start`
- You will be brought to a testing mode where, when you click on the map, you will see the lat/lng of the location as a pop up
- You can now open an issue or start a new discussion including your lat/lng and the included image

### Notes

- Make sure it is just you in the screenshot. You might want to turn on the entity hider plugin and configure it appropriately.
- Make sure no tiles are highlighted and no text appears in the top corner of your window, IE take your mouse off of the RuneLite window.
- Your character should be facing the camera, but angle and zoom amount are up to you!

## Development

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Feedback

Please feel free to open up any Issues on Github if you have any questions or comments about the project.
