# OSRSGuesser

A location guessing game for Old School RuneScape. Inspired by GeoGuessr, OSRSGuesser is a game where you guess where on the map the given picture is. You get points based on how close your guess is!

The daily OSRSGuesser resets at Midnight GMT.

You can play at https://osrsguesser.app

## Contributing

Have an idea for a location? Here are some of the ways you can submit your own!

1. Submit an issue on Github or start a new Discussion with the location you have in mind and I will look to add it.
2. Want to take the picture on your own and have yourself featured? Install the [Client Resizer](https://runelite.net/plugin-hub/show/client-resizer) plugin on RuneLite to set your RuneLite window to `1280x720`. Then use the built in RuneLite screenshot functionality to get a screenshot. You can now open an issue or start a new discussion including your picture!
   - See NOTES for how to set up the `Client Resizer` plugin.
3. Want to help even further? You can follow these steps:

- Fork the repo
- Rename the `.env.example` file to `.env` and set the variable `REACT_APP_LAT_LNG_TESTING` to `true`
- `npm install`
- `npm start`
- You will be brought to a testing mode where, when you click on the map, you will see the lat/lng of the location as a pop up.
- You can now open a pull request (or open an issue or start a new discussion) including your lat/lng and the image.

### Notes

- Make sure it is just you in the screenshot. You might want to turn on the entity hider plugin and configure it appropriately.
- Please disable `117 HD` plugin (and enable `GPU` plugin) if you use that.
- Install the [Hide Widgets](https://runelite.net/plugin-hub/show/hide-widgets) plugin from the Plugin Hub. It will hide all UI in your game window so the screenshot is clean.
- In your RuneLite screenshot options, make sure to uncheck `Include Client Frame` option, this will hide the RuneLite UI from the screenshot.
- Here is an example of my settings for the `Client Resizer` plugin. I have it so when I hit `ctrl + g` it automatically resizes the RuneLite window.
  ![client resizer plugin example](client_resizer_example.png)
- Make sure no tiles are highlighted and no text appears in the top corner of your window, IE take your mouse off of the RuneLite window.
  - You might have to turn off other RuneLite plugins, such as `Tile Indicators` in order to hide everything.
- Your character should be facing the camera, but angle and zoom amount are up to you!

## Development

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Feedback

Please feel free to open up any Issues on Github if you have any questions or comments about the project.
