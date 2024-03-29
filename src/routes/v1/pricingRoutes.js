// routes/pricingRoutes.js
const express = require("express");
const router = express.Router();
const pricingController = require("../../controllers/pricingController");
const priceValidation = require("../../validations/priceValidation");
const validate = require("../../middlewares/validate");

router.post(
  "/calculate",
  validate(priceValidation.getPricing),
  pricingController.calculateDeliveryPrice
);
router.get("/getAllPricings", pricingController.getAllPricings);

module.exports = router;
