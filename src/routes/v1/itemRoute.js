// routes/pricingRoutes.js
const express = require("express");
const router = express.Router();
const itemController = require("../../controllers/itemController");
const itemValidation = require("../../validations/itemValidation");
const validate = require("../../middlewares/validate");

router.post(
  "/addItem",
  validate(itemValidation.addItem),
  itemController.addNewItem
);
router.delete(
  "/deleteItem/:id",
  validate(itemValidation.delete),
  itemController.deleteItem
);

router.get("/getAllItems", itemController.getALlItems);

module.exports = router;
