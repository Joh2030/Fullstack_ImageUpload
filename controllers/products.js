const mongoose = require("mongoose");
const Property = require("../models/products");

const createProduct = async (req, res) => {
  try {
    const { body } = req;
    const product = await Product.create(body);
    res.status(201).json(product);
  } catch (error) {
    res.send(error.message);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("owner", "id ref");
    res.status(201).json(products);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  createProduct,
  getProducts,
};
