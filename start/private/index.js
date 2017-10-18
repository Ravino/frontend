"use strict";

import page from "./vue/page.vue";
import Vue from "vue";

const router = require ("./vue/confRouter.js") (Vue);


(new Vue ({
  "router": router,
  "render": h => h(page)
}). $mount (",page"));
