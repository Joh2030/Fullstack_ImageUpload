const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// can add more configuration here

module.exports = upload;
