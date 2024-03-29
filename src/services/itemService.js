// services/pricingService.js
const itemModel = require("../models/itemModel");
const ApiError = require("../utils/apiError");

const addNewItem = async (type, description) => {
  try {
    // add org to the database
    const statusMessage = await itemModel.addItem(type, description);
    return statusMessage;
  } catch (error) {
    throw new Error("Error adding item to the DB");
  }
};

const deleteItemById = async (id) => {
  try {
    // add org to the database
    await itemModel.deleteItem(id);
    return;
  } catch (error) {
    throw new Error("Error deleting the Item");
  }
};

const getALlItems = async () => {
  try {
    // add org to the database
    const items = await itemModel.getALlItems();
    if (items) return items;
    else throw new ApiError("No Items found");
  } catch (error) {
    throw new Error("Error finding the Item");
  }
};

module.exports = {
  addNewItem,
  deleteItemById,
  getALlItems,
};
