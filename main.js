const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 600,
      height: 400,
      resizable: false, 
      maximizable: false,
      transparent: true,
      icon: path.join(__dirname, 'icon.ico'),
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    win.loadFile('index.html')
    win.setMenuBarVisibility(false)
  }
  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })