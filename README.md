# Cheryl's First App

A simple window-based "Hello" desktop app built with Electron.

## Requirements

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- A computer running macOS, Windows, or Linux

## Setup

Open a terminal in this folder and run:

```bash
npm install
```

On macOS, if you see an error saying `Electron failed to install correctly`, or if the app is killed by macOS security, the downloaded Electron binary needs to be code-signed locally. Run:

```bash
cd node_modules/electron
node install.js
codesign --force --deep --sign - dist/Electron.app
cd ../..
```

Then run `npm start` again.

## Run the app

```bash
npm start
```

You should see a window with a purple gradient background and the word **Hello** in the center.

## Project files

| File | Purpose |
|------|---------|
| `main.js` | Opens the app window and sets the icon |
| `index.html` | The contents of the window |
| `styles.css` | Colors, fonts, and layout |
| `icon.svg` | Source for the app icon |
| `icon.png` | The app icon used at runtime |
| `package.json` | App name, version, and dependencies |

## Stop the app

Close the window, or press `Ctrl+C` in the terminal.
