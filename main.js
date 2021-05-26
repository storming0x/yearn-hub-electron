// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const { BrowserView, BrowserWindow } = require("electron");
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "/yearn-icon-vintage.icns",
  });

  // mainWindow.setIcon(path.join(__dirname, "/yearn-icon-vintage.ico"));

  const view = new BrowserView();
  mainWindow.setBrowserView(view);
  view.setBounds({ x: 0, y: 0, width: 1100, height: 800 });

  const contentBounds = mainWindow.getContentBounds();
  view.setBounds({
    x: 0,
    y: 0,
    width: contentBounds.width,
    height: contentBounds.height,
  });
  view.setAutoResize({ width: true, height: true });

  view.webContents.loadURL("https://yearn-hub.vercel.app/");
}
app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
