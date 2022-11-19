const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.forms = require("./tutorial.model.js")(mongoose);
db.formvalues = require("./values.model.js")(mongoose);
module.exports = db;
