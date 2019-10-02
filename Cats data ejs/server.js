const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.get("/", (request, response) => {
  response.send(index.html);
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/cats", (req, res) => {
  res.render("cats");
});

app.get("/cat1", (req, res) => {
  cat_info = [{
    name: "Cat One",
    favorite_food:"Spaghetti",
    age: "1 years",
    url: "cat1",
    sleep_spot1:"anywhere",
    sleep_spot2:"under the couch",
  }];
  res.render("cat_profile", { cat: cat_info });
});

app.get("/cat2", (req, res) => {
  cat_info = [{
    name: "Cat Two",
    favorite_food:"Spaghetti",
    age: "2 years",
    url: "images/cat2",
    sleep_spot1:"anywhere",
    sleep_spot2:"under the couch",
  }]
  ;
  res.render("cat_profile", { cat: cat_info });
});

app.get("/cat3", (req, res) => {
  cat_info = [{
    name: "Cat Three",
    favorite_food:"Spaghetti",
    age: "3 years",
    url: "/images/cat3",
    sleep_spot1:"anywhere",
    sleep_spot2:"under the couch",
  }];
  res.render("cat_profile", { cat: cat_info });
});

app.get("/cat4", (req, res) => {
  cat_info = [{
    name: "Cat Four",
    favorite_food:"Spaghetti",
    age: "4 years",
    url: "/images/cat4",
    sleep_spot1:"anywhere",
    sleep_spot2:"under the couch",
  }];
  res.render("cat_profile", { cat: cat_info });
});

app.listen(8000, () => console.log("listening on port 8000"));
