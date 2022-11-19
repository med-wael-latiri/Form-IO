const db = require("../models");
const Tutorial = db.forms;
const form = db.formvalues;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const { title } = req.body;
  console.log("req create");
  const t = new Tutorial(req.body);
  t.save((err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(t);
  });
  console.log(title);
};
exports.creates = (req, res) => {
  const { title } = req.body;
  console.log("req create");
  const t = new form(req.body);
  t.save((err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(t);
  });
  console.log(title);
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  const querys = req.query;
  if (querys && querys.title) {
    const t = await Tutorial.find({ title: querys.title });
    res.send(t);
  } else {
    const t = await Tutorial.find({});
    res.send(t);
  }
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
  const { id } = req.params;
  const t = await Tutorial.findById(id);
  res.send(t);
};

// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const t = await Tutorial.findById(id);
  t.title = title;
  t.save((err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(t);
  });
  console.log(title);
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
