const messages = require("../models/messages.js");

const newController = (req, res) => {
  const name = req.body.author;
  const msg = req.body.msg;
  messages.push({ text: msg, user: name, added: new Date() });
  res.redirect("/");
};

module.exports = newController;
