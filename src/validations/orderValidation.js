const Joi = require("joi");

exports.orderSchema = Joi.object({

  numeroPedido: Joi.string().required(),

  valorTotal: Joi.number().required(),

  dataCriacao: Joi.date().required(),

  items: Joi.array().items(
    Joi.object({
      idItem: Joi.string().required(),
      quantidadeItem: Joi.number().required(),
      valorItem: Joi.number().required()
    })
  )
});