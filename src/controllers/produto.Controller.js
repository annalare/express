const Produtos = require("../models/produtos");
const produtoController = {
  listarProduto: async (req, res) => {
    const listaDeProdutos = await Produtos.findAll();
    res.json(listaDeProdutos);
  },

  async cadastrarProduto(req, res) {
    const { nome, preco, quantidade } = req.body;
    const novoProduto = await Produtos.create({
      nome,
      preco,
      quantidade,
    });
    res.status(201).json(novoProduto);
  },
};

module.exports = produtoController;
