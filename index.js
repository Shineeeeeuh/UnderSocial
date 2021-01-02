const cookieParser = require('cookie-parser');
var express = require('express');
var app = express();
const routemanger = require("./routes")

app.use(cookieParser());

routemanger.registerRoutes(app)

app.listen(80);