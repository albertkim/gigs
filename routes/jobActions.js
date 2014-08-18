var mongoose = require("mongoose");

exports.post = function(req, res){
	var jobsModel = mongoose.model("jobs");
	var body = req.body;
	console.log(body);

	switch(body.action){
		case "delete":
			jobsModel.find({_id: body.id}, function(error, job){
				if(error){
					console.log(error);
				} else{
					console.log(job);
					jobsModel(job[0]).remove();
					res.send("Job deleted");
				}
			});
			break;
	}

}