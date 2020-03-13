// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadURL('http://localhost:8080');
}

app.whenReady().then(createWindow)