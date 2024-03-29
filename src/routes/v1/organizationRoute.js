// routes/pricingRoutes.js
const express = require("express");
const router = express.Router();
const orgController = require("../../controllers/organizationController");
const orgValidation = require("../../validations/orgValidation");
const validate = require("../../middlewares/validate");
const { route } = require("./pricingRoutes");

router.post("/addOrg", validate(orgValidation.addOrg), orgController.addNewOrg);
router.delete(
  "/deleteOrg/:id",
  validate(orgValidation.delete),
  orgController.deleteOrg
);

router.get("/getAllOrgs", orgController.getAllOrgs);

module.exports = router;
