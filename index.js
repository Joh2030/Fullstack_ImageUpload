const express = require("express");
const multer = require("multer");
const cors = require("cors");
const userRouter = require("./routes/user");
const productRouter = require("./routes/products");
require("dotenv/config");
require("./db");

const app = express();
const port = 3004;

app.use(express.json({ limit: "10mb" }));
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
