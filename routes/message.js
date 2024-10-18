const { Router } = require("express");
const messages = require("../models/messages.js");

const msgRouter = Router();

msgRouter.get("/:name", (req, res) => {
  const { name } = req.params;
  res.render("message", { name: name, messages: messages });
});

module.exports = msgRouter;
