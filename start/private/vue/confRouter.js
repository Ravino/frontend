"use strict";

import VueRouter from "vue-router";
import routes from "./router/routes.js";


const conf = {

  "mode": "history",

  "routes": routes (),
};


module.exports = (Vue) => {

  Vue.use (VueRouter);

  return new VueRouter (conf);
};
