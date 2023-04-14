const mongoose = require("mongoose");

const ClassificationSchema = new mongoose.Schema({
  classification_id: {
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
  obs: {
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

const Classification = mongoose.model("Classification", ClassificationSchema);
module.exports = Classification;
