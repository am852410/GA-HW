// Greetings

const express = require("express");
const app = express();

app.get("/greeting/:name", (req, res) => {
  res.send("Hello there, " + req.params.name);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let number = (req.params.total * req.params.tipPercentage) / 100;
  res.send(number.toString());
});

app.get("/magic/:question", (req, res) => {
  const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
  const answer = answers[Math.floor(Math.random() * answers.length)];
  res.type("text/html");
  res.send("<h1>" + answer + "</h1>");
});

app.listen(3000);
