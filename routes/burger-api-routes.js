// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.burgers.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // PUT route for updating posts
  app.put("/api/burgers/:id", function(req, res) {
    db.burgers.update(
      {devoured: req.body.devoured},
      {
        where: {
          id: req.params.id
        }
      }).then(function(results) {
      res.json(results);
    });
  });
};

