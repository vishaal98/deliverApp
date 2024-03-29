// services/pricingService.js
const pricingModel = require("../models/pricingModel");

const calculatePrice = async (
  zone,
  organizationId,
  totalDistance,
  itemType
) => {
  try {
    // Fetch pricing details from the database
    const pricing = await pricingModel.getPricing(
      zone,
      organizationId,
      itemType
    );
    // Perform price calculation
    let totalPriceCents = pricing.fix_price;
    if (totalDistance > pricing.base_distance_in_km) {
      let extraCost =
        (totalDistance - pricing.base_distance_in_km) * pricing.km_price;
      totalPriceCents = parseFloat(totalPriceCents) + parseFloat(extraCost);
    }
    console.log(totalPriceCents);
    return totalPriceCents;
  } catch (error) {
    throw new Error("Error calculating price");
  }
};

const getAllPricings = async () => {
  try {
    const allPricings = await pricingModel.getAllPricings();
    return allPricings;
  } catch (err) {
    throw new Error("Error Finding all Pricings", err);
  }
};

module.exports = {
  calculatePrice,
  getAllPricings,
};
