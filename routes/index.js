var mongoose = require("mongoose");

exports.get = function(req, res){

	console.log("Search parameter: " + req.query.search);

	// Default: search by jobs or params contains search=jobs
	if(req.query.search == undefined || req.query.search == "jobs"){
		var jobsModel = mongoose.model("jobs");
		// Get all jobs
		jobsModel.find(function(error, allJobs){
			if(error){
				console.log("Error finding all jobs");
			} else{
				// Send user data if logged in
				res.render("searchByJobs", {
					allJobs: allJobs, 
					currentUser: req.session.currentUser
				});
			}
		});
	}

	// Params contains search=companies
	else if(req.query.search == "companies"){
		var companyModel = mongoose.model("companies");
		companyModel.find(function(error, allCompanies){
			if(error){
				console.log(error);
			} else{
				res.render("searchByCompanies", {
					allCompanies: allCompanies,
					currentUser: req.session.currentUser
				});
			}
		});
	}

	else{
		res.send("Invalid url");
	}

};

exports.post = function(req, res){
	
};