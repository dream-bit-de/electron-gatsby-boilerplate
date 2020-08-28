/****************************************************************
 * All Electron window relevant things will be handled in here. *
 * @see https://www.electronjs.org/docs/api/browser-window      *
 ****************************************************************/

import { BrowserWindow } from 'electron';
import serve from 'electron-serve';
import { PRODUCTION, PLATFORM } from '../node-process';

async function create(win, options) {
  // eslint-disable-next-line no-param-reassign
  win = new BrowserWindow(options);

  // if we are developing, electron will directly use the gatsby link.
  if (!PRODUCTION) {
    win.loadURL('http://localhost:8000/');
    win.webContents.openDevTools();
    // Open the DevTools.
  } else {
    const loadURL = serve({ directory: 'public' });
    loadURL(win);
  }

}

async function allClosed(app) {
  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  if (PLATFORM !== 'darwin') {
    app.quit();
  }
}

async function activate(win, options) {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    create(win, options);
  }
}

// define Namespace and freeze it.
export const ElectronWindow = Object.freeze({
  activate,
  allClosed,
  create
});
