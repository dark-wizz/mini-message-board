const express = require("express");
const app = express();
const db = require("./db/queries.js");
const msgRouter = require("./routes/message");
const messages = require("./models/messages.js");
const newController = require("./controllers/newController.js");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.use("/message", msgRouter);

app.post("/new", newController);

app.listen(3000, () => console.log("server is running..."));
