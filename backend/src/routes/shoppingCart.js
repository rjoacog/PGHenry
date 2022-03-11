const express = require("express");
const router = express.Router();
const {
  shoppingCart,
  addItemCart,
  updateAndRemoveItemCart,
  removeItemCart,
  clearCart
} = require("../controllers/shoppingCart");



router.post("/", shoppingCart);
router.post("/:id", addItemCart);
router.put("/:id",  updateAndRemoveItemCart);
router.put("/delete/:id", removeItemCart);
router.delete("/", clearCart);



module.exports = router;