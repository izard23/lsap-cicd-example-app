// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Welcome to the CI/CD Workshop!</h1>");
});

// Part 1: /time endpoint
app.get("/time", (req, res) => {
  const now = new Date().toISOString();
  res.status(200).json({ time: now });
});

// Part 2: /health endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;

