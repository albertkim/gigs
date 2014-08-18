var mongoose = require("mongoose");

exports.get = function(req, res){
	res.render("register", {});
};

exports.post = function(req, res){
	res.render("index", {});
};