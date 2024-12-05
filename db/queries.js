require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool();

exports.getAllData = async () => {
  const { rows } = await pool.query(`SELECT * FROM messages;`);
  return rows;
};

exports.insertMsgs = async (args) => {
  await pool.query(`INSERT INTO messages values ($1, $2)`, args);
};
