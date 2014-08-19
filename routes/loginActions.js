var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var session = require("cookie-session");

exports.login = function(req, res){
	console.log("loginActions POST");
	var usersModel = mongoose.model("users");
	var username = req.body.username;
	var password = req.body.password;

	usersModel.find({username: username}, function(error, users){
		if(error){
			console.log(error);
			res.send("User verification failed");
		} else{
			if(users.length == 0){
				console.log("User could not be found");
				res.send("User could not be found");
			} else{
				if(bcrypt.compareSync(password, users[0].password)){
					console.log("User successfully authenticated");
					req.session.currentUser = users[0];
					res.send("success");				
				} else{
					console.log("Password is incorrect");
					res.send("Password is incorrect");
				}
			}
		}
	});
};

exports.logout = function(req, res){
	// Invalidate session
	req.session = null;
	console.log("Session cleared");

	// Load index page
	res.redirect("/");
};