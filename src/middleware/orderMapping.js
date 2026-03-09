function mapExternalOrder(req, res, next) {
  const body = req.body;

  // Mapeia número do pedido
  if (body.numeroPedido) {
    body.orderId = body.numeroPedido;
    delete body.numeroPedido;
  }

  // Mapeia valor total
  if (body.valorTotal !== undefined) {
    body.value = body.valorTotal;
    delete body.valorTotal;
  }

  // Mapeia data de criação
  if (body.dataCriacao) {
    body.creationDate = body.dataCriacao;
    delete body.dataCriacao;
  }

  // Mapeia items
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