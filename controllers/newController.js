const db = require("../db/queries.js");

const newController = (req, res) => {
  const name = req.body.author;
  const msg = req.body.msg;
  db.insertMsgs([name, msg]);
  res.redirect("/");
};

module.exports = newController;
