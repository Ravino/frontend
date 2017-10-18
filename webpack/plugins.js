"use strict";

const webpack = require ("webpack");
const htmlPlugin = require ("html-webpack-plugin");
const notifier = require ("webpack-notifier");


module.exports = (path) => {

  return [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),


    new notifier ({
      "alwaysNotify": true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      "name": "commons",
      "filename": "commons.js",
      "children": true

    }),
    new htmlPlugin ({
      "template": path ("index.html"),
      "inject": true,
      "xhtml": true,
      "cache": true,
      "showErrors": true
    }),
  ];
};
