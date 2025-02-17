const express = require("express");
const { addEquipment, getAvailableEquipment } = require("../controllers/equipmentController");

const router = express.Router();

router.post("/add", addEquipment);
router.get("/available", getAvailableEquipment);

module.exports = router;
