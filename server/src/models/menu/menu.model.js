const mongoose = require('mongoose');
// const validator = require('validator');
const { toJSON, paginate } = require('../plugins');

const menuSchema = mongoose.Schema({
  dishName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  foodType: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  dishType: {
    type: String,
    // required: trued,
    trim: true,
    default: '',
  },
  drinkPreference: {
    type: String,
    // required: true,
    trim: true,
    default: '',
  },
  dishPreference: {
    type: String,
    // required: true,
    trim: true,
    default: '',
  },
});

menuSchema.plugin(toJSON);
menuSchema.plugin(paginate);

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
