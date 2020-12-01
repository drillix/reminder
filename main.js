const electron = require('electron');
const url = require('url');
const path = require('path');


const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let AddWindow;

app.on('ready', function(){

mainWindow = new BrowserWindow({
      width:1210,
      height:630,
      minWidth:1210,
      minHeight: 630,
      resizable: false,
      center: true,
      backgroundColor: '#006df0'
});

mainWindow.loadURL(url.format({
     
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
}));

mainWindow.on('closed',function(){
      app.quit();
});

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
Menu.setApplicationMenu(mainMenu);
});

function createAddWindow(){
      addWindow = new BrowserWindow({
            width:320,
            height:180,
            minWidth:320,
            minHeight: 180,
            resizable: false,
            center: true,
            Title: 'App Version'

      })
      addWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'version.html'),
            protocol: 'file:',
            slashes: true
      }));
addWindow.on('closed', function(){
      addWindow = null;
});
     
}


const mainMenuTemplate = [
      {
            label:'File',
            submenu: [ 
                  {
                        label: 'Version',
                        click(){
                              createAddWindow(); 
                        }
                  },{
                        label: ' Help'
                  },
                  {
                        label:'Quit',
                        accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                        click(){
                              app.quit();
                        }
                  }
            ]
      },
      {
          label: "About",
          submenu: [{label: ' About Reminder'}]
      }
      
];

if(process.env.NODE_ENV !== 'production'){
      mainMenuTemplate.push({
            label: 'Dev Tools',
            submenu : [{
                        label: 'toggle dev tools',
                        accelerator:process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                        click(item, focusedWindow){
                              focusedWindow.toggleDevtools();
                        }
                  },
                  {
                        role:'reload'
                  }
            ]
      });
}