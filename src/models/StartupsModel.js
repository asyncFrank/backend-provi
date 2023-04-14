const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  segment: {
    type: String,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  site: {
    type: String,
  },
  situation: {
    type: String,
  },
  classification: {
    type: String,
  },
  description: {
    type: String,
  },
  intern_contact: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
  },
  image_url: {
    type: String,
  },

  classification_id: {
    type: Number,
  },
  
  displayed: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Startup = mongoose.model("Startup", StartupSchema);
module.exports = Startup;
