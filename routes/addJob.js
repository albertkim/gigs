var mongoose = require("mongoose");

exports.get = function(req, res){
	res.render("addJob", {currentUser: req.session.currentUser});
};

exports.post = function(req, res){
	var jobsModel = mongoose.model("jobs");
	var body = req.body;
	console.log(body);
	var entry = new jobsModel(body);
	entry.save(function(error, job){
		if(error){
			console.log(error);
		} else{
			console.log(job);
			res.redirect("/");
		}
	});
};