const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    console.log("req.query", req.query);
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    // YOUR CODE HERE

  },
  create: function(req, res) {
    // YOUR CODE HERE
    
  },
  update: function(req, res) {
    // YOUR CODE HERE
    
  },
  remove: function(req, res) {
    // YOUR CODE HERE
    
  }
};
