var express = require('express');
var app = express();
const routemanger = require("./routes")

routemanger.registerRoutes(app)

app.listen(81);