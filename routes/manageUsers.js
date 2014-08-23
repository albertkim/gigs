var mongoose = require("mongoose");

exports.get = function(req, res){

	var userModel = mongoose.model("users");
	// Get all jobs
	userModel.find(function(error, allUsers){
		if(error){
			console.log("Error finding all users");
		} else{
			// Send user data if logged in
			res.render("manageUsers", {
				allUsers: allUsers,
				currentUser: req.session.currentUser
			});
		}
	});

};

exports.post = function(req, res){

	var userModel = mongoose.model("users");
	var body = req.body;
	console.log(body);

	switch(body.action){
		case "delete":
			userModel.find({_id: body.id}, function(error, user){
				if(error){
					console.log(error);
				} else{
					console.log(user);
					userModel(user[0]).remove();
					res.redirect("/manageUsers");
				}
			});
			break;
	}

};