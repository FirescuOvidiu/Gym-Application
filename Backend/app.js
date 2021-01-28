const express = require("express");

const api = require("./api/api");
const db = require("./databaseConnection");

const app = express();

// Setup common middlewares
app.use(express.json());

// Load database
db.connectDB();

// Register api
app.use("/api", api);

module.exports = app;
