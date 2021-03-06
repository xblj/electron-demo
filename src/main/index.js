import { app, BrowserWindow, globalShortcut, dialog, Tray, ipcMain as ipc } from 'electron'
const fs = require('fs');
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:3000`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  // const img = new Tray(`build/icons/my48x48.png`)
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  //  globalShortcut.register('1', function () {
  //     // dialog.showMessageBox({
  //     //   type: 'info',
  //     //   message: 'Success!',
  //     //   detail: 'You pressed the registered global shortcut keybinding.',
  //     //   buttons: ['OK']
  //     // })
  //     // ipc.send('num-clilk',)
  //      mainWindow.webContents.send('num-clilk', 1);
  //     //  console.log()
  //   })
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})


/**
 *  debug
 */

ipc.on('open-debug', () => {
  mainWindow.webContents.openDevTools();
})
ipc.on('close-debug', () => {
  mainWindow.webContents.closeDevTools();
})
// 打印
ipc.on('print', () => {
  mainWindow.webContents.print({silent:true,printBackground:true})
  // mainWindow.webContents.printToPDF({}, function (err, data) {
  //   if (err) throw err;
  //   fs.writeFile('/print.pdf', data, function (err) {
  //     if (err) throw err;
  //     console.log('success')
  //   })
  // })
})




/**
 * 
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */


import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
