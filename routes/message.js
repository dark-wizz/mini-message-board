const { Router } = require("express");
const db = require("../db/queries.js");

const msgRouter = Router();

msgRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const [m] = await db.getMsg(id);
  res.render("message", { m });
});

module.exports = msgRouter;
