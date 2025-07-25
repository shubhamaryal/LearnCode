const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("blogs home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About blogs");
});

router.get("/blogpost/:slug", (req, res) => {
  res.send(`fetch the blogspot from ${req.params.slug} `);
});

module.exports = router;
