const Order = require('../models/Order');
const mapOrder = require('../utils/mapper');

const createOrder = async (orderData) => {
  const mappedOrder = mapOrder(orderData);
  const order = new Order(mappedOrder);
  await order.save();
  return order;
};

const getOrderById = async (id) => {
  return await Order.findById(id);
};

const updateOrder = async (id, updatedData) => {
  const mappedData = mapOrder(updatedData);
  const order = await Order.findByIdAndUpdate(id, mappedData, { new: true });
  return order;
};

const deleteOrder = async (id) => {
  const result = await Order.findByIdAndDelete(id);
  return result !== null;
};

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
