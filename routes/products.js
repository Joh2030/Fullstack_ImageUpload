const express = require("express");
const upload = require("../middleswares/multer-upload");
const { createProduct, getProducts } = require("../controllers/products");

const productRouter = express.Router();

productRouter.post("/", upload.single("image"), createProduct);
productRouter.get("/", getProducts);

module.exports = productRouter;
