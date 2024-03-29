const pricingService = require("../services/pricingService");
const catchAsync = require("../utils/catchAsync");

const calculateDeliveryPrice = catchAsync(async (req, res) => {
  // Fetch request parameters
  const { zone, organization_id, total_distance, item_type } = req.body;

  // Call service function to calculate price
  const totalPrice = await pricingService.calculatePrice(
    zone,
    organization_id,
    total_distance,
    item_type
  );

  res.json({
    total_price: { in_cents: totalPrice, in_Euros: totalPrice / 100 },
  });
});

const getAllPricings = catchAsync(async (req, res) => {
  const allPricings = await pricingService.getAllPricings();

  res.json({
    allPricings,
  });
});

module.exports = {
  calculateDeliveryPrice,
  getAllPricings,
};
