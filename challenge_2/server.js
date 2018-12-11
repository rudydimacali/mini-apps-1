var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/upload_JSON", (req, res) => {
  // Convert data entry into an array of objects
  let inputData = JSON.parse(req.body.dataEntry);
  let dataArr = [];
  let addChildren = entry => {
    dataArr.push({
      firstName: entry.firstName,
      lastName: entry.lastName,
      county: entry.county,
      city: entry.city,
      role: entry.role,
      sales: entry.sales
    });
    if (entry.children.length) {
      entry.children.forEach(child => {
        addChildren(child);
      });
    }
  };
  addChildren(inputData);
  // Convert array of objects into CSV report format
  let csvReportString = "firstName,lastName,county,city,role,sales";
  dataArr.forEach(entry => {
    csvReportString += `\n${entry.firstName},${entry.lastName},${
      entry.county
    },${entry.city},${entry.role},${entry.sales}`;
  });

  res.redirect("/");
});

app.listen(8080);
