// models/pricingModel.js
const pool = require("../configs/pgConfig");
const ApiError = require("../utils/apiError");

const getPricing = async (zone, organizationId, itemType) => {
  try {
    const query = `SELECT * FROM pricing p JOIN item i ON p.item_id=i.id WHERE i.type='${itemType}' AND p.zone='${zone}' AND organization_id='${organizationId}'`;

    const response = await pool.query(query);
    // console.log(response.rows);
    return response.rows[0];
  } catch (error) {
    throw new Error("Error fetching pricing");
  }
};

const getAllPricings = async () => {
  try {
    const query = `SELECT * FROM pricing`;
    const response = await pool.query(query);
    if (response.rows) return response.rows;
    else throw new ApiError("No pricings found");
  } catch (error) {
    throw new Error("Error fetching pricing");
  }
};

module.exports = {
  getPricing,
  getAllPricings,
};
