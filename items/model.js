const Sequelize = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  img_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT("tiny"),
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Item;
