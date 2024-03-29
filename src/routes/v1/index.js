const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("API is Working");
  res.end(
    "Try making API calls to specific end points, Refer the swagger docs"
  );
});

router.use("/price", require("./pricingRoutes"));
router.use("/org", require("./organizationRoute"));
router.use("/item", require("./itemRoute"));

module.exports = router;
