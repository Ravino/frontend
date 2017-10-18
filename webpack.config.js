"use strict";


let dir = "private";
const Path = require ("path");

const path = route => {
  return Path.join (__dirname, "./", route);
};



module.exports = {

  "entry": {
    "build": path ("start/" + dir + "/index.js")
  },


  "output": {
    "filename": "[name].js",
    "path": path ("/finish/" + dir),
    "publicPath": "/",
    "library": "[name]"
  },


  "resolve": {
    "extensions": [ ".js", ".vue", ".json" ]
  },


  "watch": true,

  "watchOptions": {
    "agrigateTimeout": 100
  },


  "module": require ("./webpack/module.js") (),


  "devServer": require ("./webpack/devServer.js") (),


  "plugins": require ("./webpack/plugins.js") (path)
};
