const url = require('url');
const path = require('path');
var fs = require('fs');
const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready' , function(){
    win = new BrowserWindow({
        width: 1200,
        height: 600,
        minWidth: 200,
        minHeight: 200,
        autoHideMenuBar: true,
        show: true
    })
    win.on('closed', () => {
        win = null
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'pages/graph.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.once('ready-to-show', () => {
        win.show();
    });
});
