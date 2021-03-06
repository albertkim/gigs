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

// Route definitions
var routes = require("./routes");
var index = require("./routes/index");
var addJob = require("./routes/addJob");
var jobActions = require("./routes/jobActions");
var companyActions = require("./routes/companyActions");
var addCompany = require("./routes/addCompany");
var register = require("./routes/register");
var loginActions = require("./routes/loginActions");
var profile = require("./routes/profile");
var manageUsers = require("./routes/manageUsers");

var app = express();

// View engine setup
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

// Route setup
app.get("/", index.get);
app.get("/addJob", addJob.get);
app.get("/register", register.get);
app.get("/addCompany", addCompany.get);
app.get("/logout", loginActions.logout);
app.get("/profile", profile.get);
app.get("/manageUsers", manageUsers.get);

app.post("/addJob", addJob.post);
app.post("/jobActions", jobActions.post);
app.post("/register", register.post);
app.post("/loginActions", loginActions.login);
app.post("/manageUsers", manageUsers.post);
app.post("/addCompany", addCompany.post);
app.post("/companyActions", companyActions.post);

module.exports = app;