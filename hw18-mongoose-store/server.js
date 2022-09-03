const express = require("express");
const app = express();
const Vegetables = require("./models/vegetables.js");

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.get("/vegetables", (req, res) => {
  res.send("Vegetable Store!");
  res.render("index.ejs", {
    vegetables: Vegetables
  });
});

app.get("/vegetables/:id", (req, res) => {
  res.render("show.ejs", {
    vegetable: Vegetables[req.params.id],
    id: req.params.id
  });
});

app.listen(3000);
