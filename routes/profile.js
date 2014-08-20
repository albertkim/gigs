var mongoose = require("mongoose");

exports.get = function(req, res){
	res.render("profile", {currentUser: req.session.currentUser});
};