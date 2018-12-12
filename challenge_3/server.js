const express = require("express");
const app = express();
const path = require("path");
const babel = require("babel-core");

app.use(express.static("public"));

app.listen(8080);
