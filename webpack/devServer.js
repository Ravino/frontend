"use strict";

module.exports = () => {

  return {
    "historyApiFallback": true,
    "hot": true,
    "inline": true,
    "compress": true,
    "noInfo": true,
    "open": true,
    "port": 3000,
    "publicPath": "/",
    "overlay": {
      "warnings": true,
      "errors": true
    }
  };
};
