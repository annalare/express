const Sequelize = require("sequelize");

const DB_NAME = "loja1";
const DB_USER = "root";
const DB_PASS = "Studycode99#";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.log("error ao tentar uma conexão com o bando de dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("erro ao tentar se conectar com o banco de dados");
  }
}

Object.assign(db, {
  hasConection,
});
module.exports = db;
