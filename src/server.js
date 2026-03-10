require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const connectDB = require("./database/connection");

const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.use("/", authRoutes);
app.use("/", orderRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
