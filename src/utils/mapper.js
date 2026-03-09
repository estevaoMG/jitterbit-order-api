module.exports = function mapOrder(data) {

  return {

    orderId: data.orderId,

    value: data.value,

    creationDate: data.creationDate,

    items: data.items.map(item => ({

      productId: item.productId,

      quantity: item.quantity,

      price: item.price

    }))

  };

};