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
  if (Array.isArray(req.body)) {
    collection
      .insert({})
      .then(docs => {
        console.log(docs);
      })
      .catch(err => {
        collection.log(err);
      });
  }
  // collection.insert([req.body])
});
