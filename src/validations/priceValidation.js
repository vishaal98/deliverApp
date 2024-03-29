const Joi = require("joi");

const getPricing = {
  body: Joi.object().keys({
    zone: Joi.string().required(),
    organization_id: Joi.number().required(),
    total_distance: Joi.number().required(),
    item_type: Joi.string().required(),
  }),
};

const addPricing = {
  body: Joi.object().keys({}),
  params: Joi.object().keys({}),
};

const deletePricing = {
  params: Joi.object().keys({}),
};

module.exports = {
  getPricing,
  addPricing,
  deletePricing,
};
