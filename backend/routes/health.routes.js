const express = require("express");
const router = express.Router();
const { EMAIL } = require("../config/env");

router.get("/health", (req, res) =>
  res.json({
    is_success: true,
    official_email: EMAIL
  })
);

module.exports = router;
