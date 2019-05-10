// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(result) {
      var burgers = []
      for (let i = 0; i < result.length; i++) {
        var RowDataPacket = {
          id: result[i].id,
          burger_name: result[i].burger_name,
          devoured: result[i].devoured
        }
        burgers.push(RowDataPacket);
      }
      var hbsObject = {
        burgers: burgers
      };

      res.render("index", hbsObject);
      console.log("You're getting the following from '/' : ")
      console.log(hbsObject);
    });
  });
};
