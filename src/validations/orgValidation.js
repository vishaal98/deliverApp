const Joi = require("joi");

const addOrg = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const deleteOrg = {
  //   body: Joi.object().keys({}),
  params: Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string(),
  }),
};

const updateOrg = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  addOrg,
  deleteOrg,
  updateOrg,
};
