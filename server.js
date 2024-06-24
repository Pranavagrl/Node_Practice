const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

app.get("/", function (req, res) {
  res.send("Welcome to my hotel... ");
});

// Imports router files
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

// Use the Routers
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

// Which Port Number is the server Running...
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
