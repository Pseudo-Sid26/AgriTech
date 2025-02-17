const express = require("express");
const router = express.Router();
const { sendVideoCallLink } = require("../controllers/videoCallController");

// Route to send video call link via SMS
router.post("/send-link", sendVideoCallLink);

module.exports = router;
