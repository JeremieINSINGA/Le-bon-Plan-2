const express = require("express");
const multer = require("multer");
const path = require("path");
const upload = multer({ dest: path.join(__dirname, "../assets/img/") });
const {
    findOneProduct,
    modifyOneProduct,
    findAllProducts,
    addOneProduct,
} = require("../controllers/productControllers");
const router = express.Router();

// Product Get Routes
router.get("/product/:id", findOneProduct);
router.get("/:city", findAllProducts);

// Product Post Routes
router.post("/add", upload.array("product-image", 3), addOneProduct);

// Products Put Routes
router.put("/product/:id", modifyOneProduct);

module.exports = router;
