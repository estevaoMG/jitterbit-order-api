function mapExternalOrder(req, res, next) {
  const body = req.body;

  if (body.numeroPedido) {
    body.orderId = body.numeroPedido;
    delete body.numeroPedido;
  }

  if (body.valorTotal !== undefined) {
    body.value = body.valorTotal;
    delete body.valorTotal;
  }

  if (body.dataCriacao) {
    body.creationDate = body.dataCriacao;
    delete body.dataCriacao;
  }

  if (body.items && Array.isArray(body.items)) {
    body.items = body.items.map(item => ({
      productId: item.idItem,
      quantity: item.quantidadeItem,
      price: item.valorItem
    }));
  }

  next();
}

module.exports = mapExternalOrder;
