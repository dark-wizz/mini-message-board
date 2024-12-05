const express = require("express");
const app = express();
const msgsRouter = require("./routes/msgsRouter");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", msgsRouter);

app.listen(3000, () => console.log("server is running..."));
