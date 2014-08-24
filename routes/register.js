var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

exports.get = function(req, res){
	res.render("register", {currentUser: req.session.currentUser});
};

exports.post = function(req, res){
	var body = req.body;
	var username = req.body.username;
	var password = req.body.password;
	var confirmPassword = req.body.password;
	var email = req.body.email;

	// Input verification
	if(username == ""){
		res.send("Username cannot be empty");
	} else if(password == ""){
		res.send("Password cannot be empty")
	} else if(confirmPassword != password){
		res.send("Password confirmation does not match")
	} else if(email == ""){
		res.send("Email cannot be empty");
	} else{
		// Hash password
		var hashedPassword = bcrypt.hashSync(password);
		console.log("Hashed password: " + hashedPassword);

		var userModel = mongoose.model("users");
		var data = {
			username: username,
			password: hashedPassword,
			accountType: body.accountType,
			email: email
		};

		// Add extra fields based off of account type
		switch(body.accountType){
			case "Student":
				data.school = body.studentSchool;
				data.studentId = body.studentId;
			case "Coordinator":
				data.faculty = body.faculty;
				data.school = body.coordinatorSchool;
				break;
			case "Faculty":
				data.faculty = body.faculty;
				data.school = body.coordinatorSchool;
				break;
			case "Employer":
				data.company = body.company;
				break;
		};

		var entry = new userModel(data);
		entry.save(function(error, user){
			if(error){
				console.log(error);
			} else{
				console.log(user);
			}
		});
	}

	res.redirect("/");
};