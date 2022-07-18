const CategoriaProduto = require("./CategoriaProduto");
const Categorias = require("./Categorias");
const Fabricantes = require("./Fabricantes");
const Produtos = require("./Produtos");

Produtos.belongsTo(Fabricantes, {
  foreingKey: "fabricante_id",
});
Fabricantes.hasMany(Produtos, {
  foreingKey: "fabricante_id",
});

Produtos.belongsToMany(Categorias, {
  foreingKey: "produto_id",
  through: CategoriaProduto,
});
Categorias.belongsToMany(Produtos, {
  foreingKey: "categoria_id",
  through: CategoriaProduto,
});
module.exports = {
  Fabricantes,
  Produtos,
  Categorias,
};
