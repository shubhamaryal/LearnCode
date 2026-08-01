const express = require("express");

// express();

const app = express(); // here we create a server instance.

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(3000); // used to start the server and the server listens on port 3000.
