const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });

  win.loadFile('public/index.html');
}

app.whenReady().then(createWindow);
