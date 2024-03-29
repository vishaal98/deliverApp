// services/pricingService.js
const orgModel = require("../models/organizationModel");
const ApiError = require("../utils/apiError");

const addNewOrg = async (name) => {
  try {
    // add org to the database
    const statusMessage = await orgModel.addOrganization(name);
    return statusMessage;
  } catch (error) {
    throw new Error("Error adding to the DB");
  }
};

const deleteOrg = async (id) => {
  try {
    // add org to the database
    await orgModel.deleteOrganization(id);
    return;
  } catch (error) {
    throw new Error("Error deleting the org");
  }
};

const getAllOrgs = async () => {
  try {
    const orgs = orgModel.getAllOrgs();
    if (orgs) return orgs;
    else throw new ApiError("No orgs exits");
  } catch (err) {
    throw new Error("Error finding Orgs");
  }
};

module.exports = {
  addNewOrg,
  deleteOrg,
  getAllOrgs,
};
