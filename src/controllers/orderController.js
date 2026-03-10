// src/controllers/orderController.js

const orderService = require('../services/orderService');
const { orderSchema } = require('../validations/orderValidation');

// Criar novo pedido
const createOrder = async (req, res, next) => {
  try {
    // Validar dados do pedido
    const { error } = orderSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    next(err); // passa para o middleware de erro
  }
};

// Obter pedido por ID
const getOrderById = async (req, res, next) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.json(order);
  } catch (err) {
    next(err);
  }
};

// Atualizar pedido por ID
const updateOrder = async (req, res, next) => {
  try {
    // Validar dados do pedido
    const { error } = orderSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const order = await orderService.updateOrder(req.params.id, req.body);
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.json(order);
  } catch (err) {
    next(err);
  }
};

// Deletar pedido por ID
const deleteOrder = async (req, res, next) => {
  try {
    const success = await orderService.deleteOrder(req.params.id);
    if (!success) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.json({ message: 'Pedido deletado com sucesso' });
  } catch (err) {
    next(err);
  }
};

// Listar todos os pedidos (opcional)
const listOrders = async (req, res, next) => {
  try {
    const orders = await orderService.listOrders();
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
  listOrders,
};