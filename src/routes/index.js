const { Router } = require("express");
const express = require("express");
const produtoController = require("../controllers/produto.Controller");
const routes = express.Router();

routes.get("/produto", produtoController.listarProduto);
routes.post("/produto", produtoController.cadastrarProduto);

routes.put("/produto/:id/atualizar", produtoController.atualizarProduto);
module.exports = routes;
