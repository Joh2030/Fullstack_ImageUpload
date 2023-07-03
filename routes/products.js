const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { createProduct, getProducts } = require("../controllers/products");

const productRouter = express.Router();

productRouter.post("/", upload.single("image"), createProduct);
productRouter.get("/", getProducts);

module.exports = productRouter;
