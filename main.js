const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'icon.png');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'grapes',
    icon: iconPath,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  if (app.dock) {
    app.dock.setIcon(nativeImage.createFromPath(iconPath));
  }

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
