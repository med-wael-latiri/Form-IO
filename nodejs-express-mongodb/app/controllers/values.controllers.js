const db = require("../models");
const Tutorial = db.forms;
const form = db.formvalues;

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
