// controllers/pricingController.js
const itemService = require("../services/itemService");
const catchAsync = require("../utils/catchAsync");

const addNewItem = catchAsync(async (req, res) => {
  const { type, description } = req.body;
  const statusMessage = await itemService.addNewItem(type, description);
  res.json({ statusMessage });
});

const deleteItem = catchAsync(async (req, res) => {
  await itemService.deleteItemById(req.params.id);
  return res.status(200).json({
    message: `Item ${id} deleted Successfully`,
  });
});

const getALlItems = catchAsync(async (req, res) => {
  const items = await itemService.getALlItems();
  return res.status(200).json({
    items,
  });
});

module.exports = {
  addNewItem,
  deleteItem,
  getALlItems,
};
