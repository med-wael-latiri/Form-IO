const express = require("express");

const tutorialController = require("../controllers/tutorial.controller");

const router = express.Router();

router.post("/", tutorialController.creates);
module.exports = router;
