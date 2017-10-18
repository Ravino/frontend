"use strict";

module.exports = () => {

  return {

    "rules": [

      {
        "test": /.vue$/,
        "loader": "vue-loader",
        "exclude": /node_modules/,
        "options": {
          "esModule": true
        }
      },

      {
        "test": /.js$/,
        "loader": "babel-loader",
        "exclude": /node_modules/
      }
    ]
  };
};
