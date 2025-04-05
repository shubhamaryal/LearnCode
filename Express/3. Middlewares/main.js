const express = require("express");
const app = express();
const port = 3000;
const blog = require('./routes/blog')
const fs = require("fs");

// app.use(express.static("public"));

app.use('/blog', blog)

// Middleware 1 - logger for our app
app.use((req, res, next) => {
  console.log(req.header);
  req.shubham = " Im shubham";
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  // res.send("Hacked by middleware 1")
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!" + req.shubham);
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
