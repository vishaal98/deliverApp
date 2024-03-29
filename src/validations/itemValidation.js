const Joi = require("joi");

const addItem = {
  body: Joi.object().keys({
    type: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

const deleteItem = {
  //   body: Joi.object().keys({}),
  params: Joi.object().keys({
    id: Joi.string().required(),
    type: Joi.string(),
    description: Joi.string(),
  }),
};

const updateItem = {
  body: Joi.object().keys({
    type: Joi.string(),
    description: Joi.string(),
  }),
};

module.exports = {
  addItem,
  deleteItem,
  updateItem,
};
