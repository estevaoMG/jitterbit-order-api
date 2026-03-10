# Jitterbit Order API

API REST para gerenciamento de pedidos desenvolvida em **Node.js**,
utilizando **Express**, **MongoDB**, autenticação **JWT**, validação de
dados com **Joi**, logs com **Morgan** e documentação automática com **Swagger**.

Este projeto demonstra conhecimentos em:

- Desenvolvimento de APIs REST
- Integração de sistemas
- Transformação de dados (mapping)
- Boas práticas de arquitetura backend

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB / Mongoose
- JSON Web Token (JWT)
- Joi (validação de dados)
- Swagger UI
- Morgan (logs HTTP)

---

# 📂 Estrutura do Projeto

```
jitterbit-order-api
│
├── src
│   ├── config
│   │     swagger.js
│   ├── controllers
│   │     authController.js
│   │     orderController.js
│   ├── database
│   │     connection.js
│   ├── middleware
│   │     authMiddleware.js
│   │     errorMiddleware.js
│   │     validateMiddleware.js
│   │     orderMapping.js
│   ├── models
│   │     Order.js
│   │     User.js
│   ├── routes
│   │     authRoutes.js
│   │     orderRoutes.js
│   ├── services
│   │     orderService.js
│   ├── utils
│   │     mapper.js
│   ├── validations
│   │     orderValidation.js
│   └── server.js
```

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/estevaoMG/jitterbit-order-api.git
cd jitterbit-order-api
npm install
```

---

# 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/ordersdb
JWT_SECRET=supersecretkey
```

---

# ▶️ Executar o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

Servidor rodará em:

```
http://localhost:3000
```

---

# 📚 Documentação da API

Após iniciar o servidor, acesse:

```
http://localhost:3000/docs
```

Swagger permite testar endpoints diretamente no navegador.

---

# 🔑 Autenticação

A API utiliza **JWT (JSON Web Token)** para proteger os endpoints.

Fluxo:

1. Registrar usuário
2. Fazer login
3. Receber token
4. Enviar token no header Authorization

Exemplo de header:

```
Authorization: Bearer SEU_TOKEN
```

---

# 👤 Rotas de Autenticação

## Registrar Usuário

**POST** `/auth/register`

Body:

```json
{
  "username": "admin",
  "password": "123456"
}
```

## Login

**POST** `/auth/login`

Body:

```json
{
  "username": "admin",
  "password": "123456"
}
```

Resposta:

```json
{
  "token": "JWT_TOKEN"
}
```

---

# 📦 Rotas de Pedidos

Todas as rotas abaixo requerem autenticação.

## Criar Pedido

**POST** `/order`

Body:

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

## Buscar Pedido

**GET** `/order/:id`

Exemplo:

```
/order/v10089015vdb-01
```

## Listar Todos os Pedidos

**GET** `/orders`

## Atualizar Pedido

**PUT** `/order/:id`

Body segue a mesma estrutura do POST.

## Deletar Pedido

**DELETE** `/order/:id`

---

# 🔄 Transformação de Dados (Mapping)

A API transforma os dados recebidos antes de salvar no banco.

Entrada:

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

Formato salvo:

```json
{
  "orderId": "v10089015vdb-01",
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
```

---

# 🛡️ Validação de Dados

Utilizando **Joi**, garantindo:

- Integridade dos dados
- Respostas de erro claras
- Prevenção de falhas na aplicação

---

# 📊 Logs

HTTP logs gerados com **Morgan**.

Exemplo:

```
POST /order 201 25 ms
GET /orders 200 12 ms
```

---

# ❗ Tratamento de Erros

Middleware global captura:

- Erros de validação
- Erros internos do servidor
- Erros de autenticação

---

# 📌 Possíveis Melhorias Futuras

- Docker
- Testes automatizados com Jest
- CI/CD com GitHub Actions
- Rate limiting
- Cache com Redis

---

# 👨‍💻 Autor

Estevão Gouveia\
Analista de TI / Backend Developer

---

# 📄 Licença

Projeto criado para fins educacionais e avaliação técnica.
