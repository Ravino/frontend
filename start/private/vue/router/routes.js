"use strict";


const dirname = "/www/project/frontend/start/private/vue/";
const path = require ("./path.js") ();
const routes = [];


for (let i in path) {

  routes.push ({
    "path": i,
    "component": require (dirname + path [i])
  });
}

modules.exports = () => {
  return routes;
};
