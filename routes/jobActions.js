var mongoose = require("mongoose");
var _ = require("underscore");

exports.post = function(req, res){
	var jobModel = mongoose.model("jobs");
	var userModel = mongoose.model("users");
	var body = req.body;
	console.log(body);
	// Current job action is being performed on
	var jobId = body.id;
	console.log("jobId: " + jobId);

	switch(body.action){
		case "delete":
			jobModel.find({_id: body.id}, function(error, job){
				if(error){
					console.log(error);
				} else{
					console.log("Successfully deleted");
					console.log(job);
					job[0].remove();
					res.redirect("/");
				}
			});
			break;
		case "apply":
			// Find the user
			var currentUser = req.session.currentUser;
			var userId = currentUser._id;
			var username = currentUser.username;
			console.log("User " + currentUser.username + " applying for job " + jobId);
			userModel.findById(userId, function(error, user){
				if(error){
					console.log(error);
				} else{
					var jobsApplied = user.jobsApplied;
					var jobsInProgress = user.jobsInProgress;
					var jobsCompleted = user.jobsCompleted;

					console.log(user.jobsApplied);
					if(_.findWhere(user.jobsApplied, {jobId: jobId})){
						console.log("User has already applied");
					} else{
						user.jobsApplied.push({jobId: jobId});
						user.save(function(error, user){
							if(error){
								console.log(error);
							} else{
								console.log("User successfully applied");
							}
						});
					}
				}
			});
			break;
	}

}