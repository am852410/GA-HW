const express = require("express");
const methodOverride = require("method-override");
const app = express();
const Pokemon = require("./models/pokemon.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    pokemons: Pokemon
  });
});

app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs", {});
});

app.post("/pokemon", (req, res) => {
  Pokemon.push(req.body);
  res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    pokemon: Pokemon[req.params.id],
    id: req.params.id
  });
});

app.post("/pokemon/:id", (req, res) => {
  console.log("posting");
});

app.delete("/pokemon/:id", (req, res) => {
  console.log("trying to delete");
  Pokemon.splice(req.params.id, 1);
  res.redirect("/pokemon");
});

app.get("/pokemon/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    pokemon: Pokemon[req.params.id],
    id: req.params.id
  });
});

app.put("/pokemon/:id", (req, res) => {
  console.log(req);
  Pokemon[req.params.id].name = req.body.name;
  res.redirect("/pokemon");
});

app.listen(3000);
