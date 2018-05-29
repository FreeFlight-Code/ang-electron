
// The main.js should create windows and handle all the system events your application might encounter. A more complete version of the above example might open developer tools, handle the window being closed, or re-create windows on macOS if the user clicks on the app's icon in the dock.
const {app, BrowserWindow} = require('electron')
  
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadFile('dist/ang-electron/index.html')
}

app.on('ready', createWindow)