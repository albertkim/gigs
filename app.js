var express = require("express");
var http = require("http");
var path = require("path");
var favicon = require("static-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var fs = require('fs');
var mongoose = require("mongoose");
var session = require("cookie-session");

var routes = require("./routes");
var addJob = require("./routes/addJob");
var jobActions = require("./routes/jobActions");
var register = require("./routes/register");
var loginActions = require("./routes/loginActions");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Mongodb connectivity
mongoose.connect("mongodb://localhost:27017/gigs");
// Require all files in /models directory
fs.readdirSync(__dirname + "/models").forEach(function(filename){
  if(~filename.indexOf(".js")){
    require(__dirname + "/models/" + filename);
  }
});

app.use(favicon());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
  keys: ['key1', 'key2'],
}));

app.get("/", routes.index);
app.get("/addJob", addJob.get);
app.get("/register", register.get);

app.post("/addJob", addJob.post);
app.post("/jobActions", jobActions.post);
app.post("/register", register.post);
app.post("/loginActions", loginActions.post);

module.exports = app;