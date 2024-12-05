require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool();

exports.getAllData = async () => {
  const { row } = await pool.query(`SELECT * FROM messages;`);
  return row;
};

exports.getMsgs = async () => {
  const { row } = await pool.query(`SELECT (user_name, text) FROM messages;`);
  return row;
};

exports.insertMsgs = async (args) => {
  await pool.query(`INSERT INTO messages values ($1, $2)`, args);
};
