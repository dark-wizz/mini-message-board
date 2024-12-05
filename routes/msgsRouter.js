const { Router } = require("express");
const msgsController = require("../controllers/msgsController");

const msgsRouter = Router();

msgsRouter.get("/", msgsController.msgsGet);
msgsRouter.get("/message/:id", msgsController.msgGet);
msgsRouter.get("/new", msgsController.msgNewGet);
msgsRouter.post("/new", msgsController.msgNewPost);

module.exports = msgsRouter;
