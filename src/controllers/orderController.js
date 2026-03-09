const Order = require("../models/Order");
const mapOrder = require("../utils/mapper");

exports.createOrder = async (req, res) => {
  try {

    const mappedData = mapOrder(req.body);

    const order = new Order(mappedData);
    await order.save();

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

exports.getOrder = async (req, res) => {

  try {

    const order = await Order.findOne({orderId: req.params.id});

    if (!order) {
      return res.status(404).json({message: "Order not found"});
    }

    res.json(order);

  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

exports.getAllOrders = async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

exports.updateOrder = async (req, res) => {

  try {

    const mappedData = mapOrder(req.body);

    const order = await Order.findOneAndUpdate(
      {orderId: req.params.id},
      mappedData,
      {new: true}
    );

    res.json(order);

  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

exports.deleteOrder = async (req, res) => {

  try {

    await Order.deleteOne({orderId: req.params.id});

    res.json({message: "Order deleted"});

  } catch (error) {
    res.status(500).json({error: error.message});
  }
};