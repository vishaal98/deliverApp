// models/pricingModel.js
const pool = require("../configs/pgConfig");
const ApiError = require("../utils/apiError");

const addItem = async (type, description) => {
  try {
    const query = `INSERT INTO item(type, description) VALUES('${type}','${description}')`;
    const response = await pool.query(query);

    if (response.rowCount > 0) return "Item added successfully";
    else throw new ApiError("Org could not be added to the DB");
  } catch (error) {
    throw new Error("Error in adding to the DB", error);
  }
};

const deleteItem = async (id) => {
  try {
    const query = `DELETE FROM item WHERE ("id" = ${id});`;
    await pool.query(query);
    return;
  } catch (error) {
    throw new ApiError("Error deleting the Item");
  }
};

const getALlItems = async () => {
  try {
    const query = `SELECT * FROM item`;
    const items = await pool.query(query);
    if (items) return items.rows;
    else throw new ApiError("No Items found");
  } catch (error) {
    throw new ApiError("Error finding the Item");
  }
};

module.exports = {
  addItem,
  deleteItem,
  getALlItems,
};
