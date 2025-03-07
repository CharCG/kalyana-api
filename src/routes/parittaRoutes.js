const express = require("express");
const router = express.Router();

const parittaController = require("../controllers/parittaController");

router.get("/chants", parittaController.getAllChants);
router.get("/chants/:chantId", parittaController.getChantById);

module.exports = router;