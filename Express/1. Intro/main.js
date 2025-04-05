const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("this is about us");
});

app.get("/contact", (req, res) => {
  res.send("this is contact");
});

app.get("/blog", (req, res) => {
  res.send("this is blog");
});

app.get("/blog/:slug", (req, res) => {
  // console.log(req)
  // for URL http://localhost:3000/blog/hi?mode=dark&region=np
  console.log(req.params) // will output { slug: 'hi' }
  console.log(req.query) // will output { mode: 'dark', region: 'np' }
  res.send(`hello ${req.params.slug}`)
});

// app.get("/blog/:slug/:second", (req, res) => {
//     res.send(`hello ${req.params.slug} and ${req.params.second}`);
// });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});