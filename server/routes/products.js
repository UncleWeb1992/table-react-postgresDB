const { Router } = require("express");
const productscontroller = require("../controllers/products.controller");
const router = new Router();

router.post("/products", productscontroller.createProduct);
router.get("/products", productscontroller.getproducts);

module.exports = router;
