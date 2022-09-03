const express = require("express");
const app = express();
const Budget = require("./Models/budget.js");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/budgets", (req, res) => {
  res.render("index.ejs", {
    budgets: Budget
  });
});

app.get("/budgets/new", (req, res) => {
  res.render("new.ejs", {});
});

app.post("/budgets", (req, res) => {
  console.log(req.body);
  Budget.push(req.body);
  res.redirect("/budgets");
});

app.get("/budgets/:index", (req, res) => {
  res.render("show.ejs", {
    budget: Budget[req.params.index]
  });
});

app.use(express.static("public"));
app.use(express.static("files"));

app.listen(3000);
