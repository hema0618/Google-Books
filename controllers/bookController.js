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
    db.Book
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err))
  },
  create: function(req, res) {
    // YOUR CODE HERE
    
    db.Book.create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.json(err));
  },
  update: function(req, res) {
    // YOUR CODE HERE
    db.Book
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err))
  },
  remove: function(req, res) {
    // YOUR CODE HERE
   
    db.Book.deleteOne({
        _id: req.params.id
    })
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(404).json(err));
  }
  }
};
