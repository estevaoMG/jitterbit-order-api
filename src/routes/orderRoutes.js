const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");
const validate = require("../middleware/validateMiddleware");
const { orderSchema } = require("../validations/orderValidation");

router.post(
  "/order",
  auth,
  validate(orderSchema),
  orderController.createOrder
);

router.get(
  "/order/list",
  auth,
  orderController.getAllOrders
);

router.get(
  "/order/:id",
  auth,
  orderController.getOrder
);

router.put(
  "/order/:id",
  auth,
  validate(orderSchema),
  orderController.updateOrder
);

router.delete(
  "/order/:id",
  auth,
  orderController.deleteOrder
);

module.exports = router;