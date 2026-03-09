const Joi = require("joi");

exports.orderSchema = Joi.object({

  orderId: Joi.string().required(),

  value: Joi.number().required(),

  creationDate: Joi.date().required(),

  items: Joi.array().items(
    Joi.object({
      productId: Joi.number().required(),
      quantity: Joi.number().required(),
      price: Joi.number().required()
    })
  ).required()

});