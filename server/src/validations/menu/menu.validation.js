const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createMenu = {
  body: Joi.object().keys({
    dishName: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    foodType: Joi.string().required(),
    dishPreference: Joi.string(),
    dishType: Joi.string(),
    drinkPreference: Joi.string().allow(''),
  }),
};

const getMenu = {
  query: Joi.object().keys({
    // dishName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getMenuItem = {
  params: Joi.object().keys({
    menuId: Joi.string().custom(objectId),
  }),
};

const updateMenuItem = {
  params: Joi.object().keys({
    menuId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      dishName: Joi.string(),
      price: Joi.number(),
      image: Joi.string(),
      foodType: Joi.string(),
    })
    .min(1),
};

const deleteMenuItem = {
  params: Joi.object().keys({
    menuId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createMenu,
  getMenu,
  getMenuItem,
  deleteMenuItem,
  updateMenuItem,
};
