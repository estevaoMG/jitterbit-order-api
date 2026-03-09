# Jitterbit Order API

Simple REST API for order management built with Node.js and MongoDB.

## Features

- Create orders
- Retrieve order by ID
- List all orders
- Update order
- Delete order

## Technologies

Node.js  
Express  
MongoDB  
Mongoose  

## Installation

git clone https://github.com/yourusername/jitterbit-order-api

cd jitterbit-order-api

npm install

## Run

npm run dev

Server will start on

http://localhost:3000

## Endpoints

POST /order

GET /order/:id

GET /order/list

PUT /order/:id

DELETE /order/:id

## Example Request

{
"numeroPedido": "v10089015vdb-01",
"valorTotal": 10000,
"dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
"items": [
{
"idItem": "2434",
"quantidadeItem": 1,
"valorItem": 1000
}
]
}

## Data Mapping

Input JSON is transformed to:

{
"orderId": "v10089016vdb",
"value": 10000,
"creationDate": "2023-07-19T12:24:11.529Z",
"items": [
{
"productId": 2434,
"quantity": 1,
"price": 1000
}
]
}