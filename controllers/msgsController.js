const db = require("../db/queries");

exports.msgsGet = async (req, res) => {
  const messages = await db.getAllData();
  res.render("index", { messages: messages });
};

exports.msgGet = async (req, res) => {
  const { id } = req.params;
  const [m] = await db.getMsg(id);
  res.render("message", { m });
};

exports.msgNewGet = async (req, res) => {
  res.render("new");
};

exports.msgNewPost = async (req, res) => {
  const name = req.body.author;
  const msg = req.body.msg;
  db.insertMsgs([name, msg]);
  res.redirect("/");
};
