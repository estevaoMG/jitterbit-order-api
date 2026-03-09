const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");
const validate = require("../middleware/validateMiddleware");
const { orderSchema } = require("../validations/orderValidation");
const mapExternalOrder = require("../middleware/orderMapping"); // importe o middleware
/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - product
 *               - quantity
 *             properties:
 *               product:
 *                 type: string
 *                 example: Notebook
 *               quantity:
 *                 type: number
 *                 example: 2
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */
router.post(
  "/order",
  auth,
  mapExternalOrder,
  validate(orderSchema),
  orderController.createOrder
);

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Lista todos os pedidos
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
router.get(
  "/order/list",
  auth,
  orderController.getAllOrders
);

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Buscar pedido por ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido encontrado
 */
router.get(
  "/order/:id",
  auth,
  orderController.getOrder
);

/**
 * @swagger
 * /order/{id}:
*   put:
*     summary: Atualizar pedido
*     tags: [Orders]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - orderId
*               - value
*               - creationDate
*               - items
*             properties:
*               orderId:
*                 type: string
*                 example: PED001
*               value:
*                 type: number
*                 example: 9000
*               creationDate:
*                 type: string
*                 format: date
*                 example: 2026-03-09
*               items:
*                 type: array
*                 items:
*                   type: object
*                   properties:
*                     productId:
*                       type: integer
*                       example: 1
*                     quantity:
*                       type: integer
*                       example: 3
*                     price:
*                       type: number
*                       example: 3000
*     responses:
*       200:
*         description: Pedido atualizado
 */
router.put(
  "/order/:id",
  auth,
  validate(orderSchema),
  orderController.updateOrder
);

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Deletar pedido
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido removido
 */
router.delete(
  "/order/:id",
  auth,
  orderController.deleteOrder
);

module.exports = router;