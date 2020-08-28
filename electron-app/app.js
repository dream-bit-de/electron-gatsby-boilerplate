/******************************************************************
 * All main process relevant things will be handled in this file. *
 ******************************************************************/

/** ######################################################################## */

import { app } from 'electron';
import { ELECTRONTYPE } from './utils/node-process';

/*********************************************
 * Initialize the main process.              *
 * Add all app on events in here.            *
 * @see https://www.electronjs.org/docs/api/ *
 *********************************************/

import { ElectronWindow } from './utils/window';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const mainWindowOptions = {
  width: 800,
  height: 600,
  webPreferences: { nodeIntegration: true }
};

function initializeMainProcess() {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.whenReady().then(() => ElectronWindow.create(mainWindow, mainWindowOptions));

  app.on('window-all-closed', () => ElectronWindow.allClosed(app));
  app.on('activate', () => ElectronWindow.activate(mainWindow, mainWindowOptions));

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.

  return 0;
}

if (ELECTRONTYPE !== 'renderer') {
  // Get Mainprocess going.
  initializeMainProcess();
}
