import path from 'path';
import { app, BrowserWindow, nativeTheme } from 'electron';
import { resolveHtmlPath } from './util';
import MenuBuilder from './menu';
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';
import EventEmitter from 'events';

const isDev = process.env.NODE_ENV === 'development';

const createWindow = async () => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  let mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
      // devTools: isDev,
    },
  });

  // Put dark mode in menu
  nativeTheme.themeSource = 'dark';

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  // To open devTools
  if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.maximize();
    }
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Ignore Certificates
app.commandLine.appendSwitch('ignore-certificate-errors');
