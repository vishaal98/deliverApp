// models/pricingModel.js
const pool = require("../configs/pgConfig");
const ApiError = require("../utils/apiError");

const addOrganization = async (name) => {
  try {
    const query = `INSERT INTO organization(name) VALUES('${name}')`;

    const response = await pool.query(query);
    if (response.rowCount > 0) return "Org added successfully";
    else throw new ApiError("Org could not be added to the DB");
    // return response.rows[0];
  } catch (error) {
    throw new Error("Error in adding to the DB", error);
  }
};

const deleteOrganization = async (id) => {
  try {
    const query = `DELETE FROM organization WHERE ("id" = ${id});`;
    await pool.query(query);
    return;
  } catch (error) {
    throw new ApiError("Error deleting the Org");
  }
};

const getAllOrgs = async () => {
  try {
    const query = "SELECT * from organization";
    const orgs = await pool.query(query);
    if (orgs) return orgs.rows;
    else throw new ApiError("No Orgs exist");
  } catch (err) {
    throw new Error("Error fidning the orgs");
  }
};

module.exports = {
  addOrganization,
  deleteOrganization,
  getAllOrgs,
};
