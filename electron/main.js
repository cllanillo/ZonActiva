import { app, BrowserWindow } from 'electron';
import { join } from 'path';

let mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 920,
    useContentSize: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(import.meta.dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  //   const startURL = import.meta.dev ? 'http://localhost:3000' : `file://${path.resolve(__dirname, '../dist/index.html')}`;
  const startURL = 'http://localhost:3000';
  mainWindow.loadURL(startURL);
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  app.quit();
});
