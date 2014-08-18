var mongoose = require("mongoose");

exports.index = function(req, res){
	// Get all jobs
	var jobsModel = mongoose.model("jobs");
	jobsModel.find(function(error, allJobs){
		if(error){
			console.log("Error finding all jobs");
		} else{
			console.log("Successfully found all jobs");
			res.render("index", {allJobs: allJobs});
		}
	});
};