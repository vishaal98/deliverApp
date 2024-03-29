// controllers/pricingController.js
const orgService = require("../services/organizationService");
const catchAsync = require("../utils/catchAsync");

const addNewOrg = catchAsync(async (req, res) => {
  const { name } = req.body;
  const statusMessage = await orgService.addNewOrg(name);
  res.json({ statusMessage });
});

const deleteOrg = catchAsync(async (req, res) => {
  await orgService.deleteOrg(req.params.id);
  return res.status(200).json({
    message: `Org ${id} deleted Successfully`,
  });
});

const getAllOrgs = catchAsync(async (req, res) => {
  const organizations = await orgService.getAllOrgs();
  return res.status(200).json({
    organizations,
  });
});

module.exports = {
  addNewOrg,
  deleteOrg,
  getAllOrgs,
};
