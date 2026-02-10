const router = require("express").Router();
const { handleBFHL } = require("../controllers/bfhl.controller");

router.post("/bfhl", handleBFHL);

module.exports = router;
