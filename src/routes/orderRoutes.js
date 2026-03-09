const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");
const validate = require("../middleware/validateMiddleware");
const { orderSchema } = require("../validations/orderValidation");

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Pedido criado
 */
router.post(
  "/order",
  auth,
  validate(orderSchema),
  orderController.createOrder
);

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Lista todos os pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
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