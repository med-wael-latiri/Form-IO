const express = require("express");

const tutorialController = require("../controllers/tutorial.controller");

const router = express.Router();

router.post("/", tutorialController.create);
router.get("/", tutorialController.findAll);
module.exports = router;
