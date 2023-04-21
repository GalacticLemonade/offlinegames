const { app, BrowserWindow, ipcMain, shell, dialog, Notification, autoUpdater } = require('electron')
const { autoUpdate } = require("electron-updater");
const log = require("electron-log");

log.transports.file.resolvePath = () => path.join("U:/OfflineGames/", '/logs/main.log');

const path = require('path')

let mainWindow;

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('offlinegamelauncher', process.execPath, [path.resolve(process.argv[1])])
  }
} else {
    app.setAsDefaultProtocolClient('offlinegamelauncher')
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

  // Create mainWindow, load the rest of the app, etc...
  app.whenReady().then(() => {
    createWindow()
    autoUpdater.checkForUpdates();
  })

  autoUpdater.on("update-available", () => {
    log.info("update-available");
  })

  autoUpdater.on("checking-for-update", () => {
    log.info("checking-for-update");
  })

  autoUpdater.on("update-downloaded", () => {
    log.info("update-downloaded");
  })
  
  app.on('open-url', (event, url) => {
    dialog.showErrorBox('Welcome Back', `You arrived from: ${url}`)
  })
}

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
        devTools: false,
        preload: path.join(__dirname, 'preload.js'),
    }
  })

  mainWindow.loadFile('index.html')
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// Handle window controls via IPC
ipcMain.on('shell:open', () => {
  const pageDirectory = __dirname.replace('app.asar', 'app.asar.unpacked')
  const pagePath = path.join('file://', pageDirectory, 'index.html')
  shell.openExternal(pagePath)
})