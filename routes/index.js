var mongoose = require("mongoose");

exports.index = function(req, res){
	var jobsModel = mongoose.model("jobs");
	// Get all jobs
	jobsModel.find(function(error, allJobs){
		if(error){
			console.log("Error finding all jobs");
		} else{
			// Send user data if logged in
			res.render("index", {allJobs: allJobs, currentUser: req.session.currentUser});
		}
	});
};