const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category_id: {
    type: Number,
    require: true,
  },

  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
