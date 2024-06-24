const mongoose = require("mongoose");

const menuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  num_sales: {
    type: Number,
    required: true,
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemsSchema);
module.exports = MenuItem;
