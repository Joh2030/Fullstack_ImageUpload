const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    unique: true,
    required: true,
  },
  owner: {
    id: mongoose.Types.ObjectId,
    // ref: "User",
    // passing on error when i uncomment line 19
  },
});

module.exports = mongoose.model("Product", productSchema);
