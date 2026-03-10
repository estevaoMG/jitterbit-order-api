// src/services/orderService.js

const Order = require('../models/Order');
const mapper = require('../utils/mapper');

// Criar um novo pedido
const createOrder = async (orderData) => {
  const mappedOrder = mapper.mapOrder(orderData);
  const order = new Order(mappedOrder);
  await order.save();
  return order;
};

// Buscar pedido por ID
const getOrderById = async (id) => {
  return await Order.findById(id);
};

// Atualizar pedido por ID
const updateOrder = async (id, updatedData) => {
  const mappedData = mapper.mapOrder(updatedData);
  const order = await Order.findByIdAndUpdate(id, mappedData, { new: true });
  return order;
};

// Deletar pedido por ID
const deleteOrder = async (id) => {
  const result = await Order.findByIdAndDelete(id);
  return result !== null;
};

// Listar todos os pedidos (opcional)
const listOrders = async () => {
  return await Order.find();
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
  listOrders,
};