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

exports.getMsg = async (id) => {
  const q = `
  SELECT *,
  TO_CHAR(date, 'Mon dd, yyyy') AS fdate, TO_CHAR(time, 'HH:MI:SS') AS ftime
  FROM messages
  WHERE id = $1;
`;
  const { rows } = await pool.query(q, [id]);
  return rows;
};
