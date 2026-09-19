// server.js
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow your Vite frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  }),
);
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/todolist");

const openapi = YAML.load("openapi.yaml");
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(openapi, { explorer: true }),
);

app.use("/api/todos", todoRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
