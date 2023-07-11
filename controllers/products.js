const mongoose = require("mongoose");
const Product = require("../models/products");

const createProduct = async (req, res) => {
  try {
    const { name, price, owner } = req;
    const product = await Product.create({
      name,
      price,
      image: req.file.filename,
      owner,
    });
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
