const express = require("express");

const tutorialController = require("../controllers/tutorial.controller");

const router = express.Router();

router.post("/", tutorialController.create);
router.get("/", tutorialController.findAll);
router.get("/:id", tutorialController.findOne);
router.put("/:id", tutorialController.update);
router.post("/", tutorialController.creates);
module.exports = router;
