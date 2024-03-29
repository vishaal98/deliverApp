const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("API is Working");
  res.end("API is Working");
});

router.use("/v1", require("./v1"));

module.exports = router;
