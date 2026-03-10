# Jitterbit Order API

API em Node.js para gerenciar pedidos, usando MongoDB como banco de dados.

---

## 📂 Estrutura do Projeto

```
src/
├── config
│     swagger.js             # Configuração do Swagger
├── controllers
│     authController.js      # Lógica de rotas de autenticação
│     orderController.js     # Lógica de rotas de pedidos
├── database
│     connection.js          # Conexão com MongoDB via Mongoose
├── middleware
│     authMiddleware.js      # Validação de JWT
│     errorMiddleware.js     # Tratamento centralizado de erros
│     validateMiddleware.js  # Validação de dados das requisições
├── models
│     Order.js               # Schema do pedido
│     User.js                # Schema do usuário
├── routes
│     authRoutes.js          # Rotas de autenticação
│     orderRoutes.js         # Rotas de pedidos
├── services
│     orderService.js        # Lógica de negócios de pedidos (CRUD)
├── utils
│     mapper.js              # Funções de transformação/mapeamento de dados
├── validations
│     orderValidation.js     # Validação de dados de pedido
└── server.js                # Inicialização do servidor
```

---

## ⚒️ Endpoints

### Pedidos

| Método | URL                  | Descrição                    |
|--------|--------------------|------------------------------|
| POST   | /order             | Criar novo pedido            |
| GET    | /orders            | Listar todos os pedidos      |
| GET    | /order/:id         | Obter pedido por ID          |
| PUT    | /order/:id         | Atualizar pedido por ID      |
| DELETE | /order/:id         | Deletar pedido por ID        |

### Autenticação

| Método | URL           | Descrição               |
|--------|---------------|------------------------|
| POST   | /auth/login   | Login                  |
| POST   | /auth/register| Criar usuário          |

---

## 🔧 Instalação

```bash
git clone https://github.com/estevaoMG/jitterbit-order-api.git
cd jitterbit-order-api
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` com as seguintes variáveis:

```env
PORT=3000
MONGO_URI=<sua_string_de_conexao>
JWT_SECRET=<chave_secreta>
```

---

## ▶️ Executando

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

---

## 🛠 Tecnologias

- Node.js
- Express
- MongoDB (Mongoose)
- JWT para autenticação
- Joi para validação de pedidos
- Swagger para documentação da API

---

## 👉 Observações

- A lógica de pedidos está separada em `services/orderService.js` para manter o controller limpo.
- Middleware de autenticação (`authMiddleware.js`) e validação (`validateMiddleware.js`) é aplicado em todas as rotas críticas.
- O Swagger está configurado em `config/swagger.js` para documentação interativa dos endpoints.
