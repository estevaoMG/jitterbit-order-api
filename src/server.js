require("dotenv").config();

const express = require("express");
const connectDB = require("./database/connection");

const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/", orderRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const morgan = require("morgan");

app.use(morgan("dev"));

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));