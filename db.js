const Sequelize = require("sequelize");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:sell@localhost:6720/postgres";

const db = new Sequelize(databaseUrl);

db.sync({ force: false })
  .then(() => console.log("Database schema updated"))
  .catch(console.error);

module.exports = db;
