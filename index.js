// In the main process.
const { app, BrowserWindow } = require('electron')

// // Or use `remote` from the renderer process.
// // const { BrowserWindow } = require('electron').remote

// let win = new BrowserWindow({ width: 800, height: 600 })
// win.on('closed', () => {
//   win = null
// })

// // Load a remote URL
// win.loadURL('http://localhost:8080')

// // Or load a local HTML file
// // win.loadURL(`file://${__dirname}/app/index.html`)


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

app.on('ready', createWindow)