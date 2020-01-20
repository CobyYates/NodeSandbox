var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// write the API here

app.get("/api", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  let myObj = {
    name: "Coby",
    job: "Ninja",
    training: "Samurai"
  };
  res.end(JSON.stringify(myObj));
});

app.get("/", (req, res) => {
  res.send(`<h2 style="text-align: center; padding-top: 5%;">Welcome to my api</h2>
                <div style="text-align: center;">
                    <img style="max-width: 900px;" src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                    <h3>visit my <a href="/api">api</a> page</h3>
                </div>`);
});

//export app for the tests
module.exports = app;
