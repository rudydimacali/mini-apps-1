const express = require("express");
const app = express();
const path = require("path");
const babel = require("babel-core");
const monk = require("monk");
const url = "localhost:27017/checkoutApp";
const db = monk(url);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(8080);

const collection = db.get("users");

app.post("/checkoutApp", (req, res) => {
  if (req.body.length === 0) {
    collection
      .insert({})
      .then(docs => {
        res.send(docs._id);
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    console.log(req.body);
    collection
      .update({ _id: req.body[0] }, { $set: req.body[1] })
      .then(docs => {
        res.send("Success!");
      })
      .catch(err => {
        throw err;
      });
  }
});
