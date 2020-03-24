const express = require("express");

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({
    event: "Semana Omnistack 11.0",
    aluno: "Tiago Rocha"
  });
});

module.exports = routes;
