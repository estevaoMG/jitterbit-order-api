const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.post("/order", orderController.createOrder);

router.get("/order/list", orderController.getAllOrders);

router.get("/order/:id", orderController.getOrder);

router.put("/order/:id", orderController.updateOrder);

router.delete("/order/:id", orderController.deleteOrder);

module.exports = router;

const auth = require("../middleware/authMiddleware");

router.post("/order", auth, validate(orderSchema), orderController.createOrder);

router.get("/order/:id", auth, orderController.getOrder);

router.get("/order/list", auth, orderController.getAllOrders);

router.put("/order/:id", auth, orderController.updateOrder);

router.delete("/order/:id", auth, orderController.deleteOrder);