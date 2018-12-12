const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const renderModule = require("./client/app.js");
const morgan = require("morgan");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client"));

app.use(fileUpload());
app.use(morgan("short"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client"));

app.get("/", (req, res) => {
  res.render("index", { csvReport: "" });
});

app.post("/upload_JSON", (req, res) => {
  let inputData = JSON.parse(req.files.dataEntry.data);
  let csvReportString = renderModule.convertToCSV(inputData);
  let csvHTML = renderModule.convertCSVToHTML(csvReportString);
  res.render("index", { csvReport: csvHTML });
});

app.listen(8080);
