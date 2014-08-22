var mongoose = require("mongoose");

exports.get = function(req, res){
	res.render("addCompany", {currentUser: req.session.currentUser});
};

exports.post = function(req, res){
	var companyModel = mongoose.model("companies");
	var body = req.body;
	console.log(body);
	var entry = new companyModel(body);
	entry.save(function(error, company){
		if(error){
			console.log(error);
		} else{
			console.log(company);
			res.redirect("/");
		}
	});
};