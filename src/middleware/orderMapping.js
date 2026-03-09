// src/middleware/orderMapping.js

function mapExternalOrder(req, res, next) {
  const body = req.body;

  // Mapping básico do pedido
  if (body.numeroPedido) {
    body.orderId = body.numeroPedido;
    delete body.numeroPedido;
  }

  if (body.items && Array.isArray(body.items)) {
    // Mapear cada item
    body.items = body.items.map(item => ({
      idItem: item.idItem || item.id,            // aceita idItem ou id
      quantidadeItem: item.quantidadeItem || item.quantity,
      valorItem: item.valorItem || item.value
    }));
  }

  // Mantém valorTotal e dataCriacao se existirem
  // Caso o JSON venha com outros nomes, você pode mapear aqui também
  if (body.valorTotal === undefined && body.totalValue !== undefined) {
    body.valorTotal = body.totalValue;
    delete body.totalValue;
  }

  if (body.dataCriacao === undefined && body.creationDate !== undefined) {
    body.dataCriacao = body.creationDate;
    delete body.creationDate;
  }

  next();
}

module.exports = mapExternalOrder;