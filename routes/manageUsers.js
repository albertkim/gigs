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