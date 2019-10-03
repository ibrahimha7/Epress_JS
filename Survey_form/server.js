const express = require("express");
const app = express();
const session = require("express-session");
var path = require("path");
var bodyParser = require('body-parser');
//app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'starkey'}));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(
  session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/submit", (req, res) => {
  req.session.name = req.body.name;
  req.session.location = req.body.location;
  req.session.language = req.body.language;
  req.session.comment = req.body.comment;

  res.render("result", {
    name: req.session.name,
    location: req.session.location,
    language: req.session.language,
    comment: req.session.comment
  });
});
app.listen(8000, () => console.log("listening on port 8000"));
