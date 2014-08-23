var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	username: String,
	password: String,
	// Type can be: student, coordinator, faculty, employer
	accountType: String,
	dateCreated: {type: Date, default: Date.now},
	description: String,
	studentId: String,
	resume: { data: Buffer, contentType: String },
	company: String,
	faculty: String,
	school: String,
	jobsCompleted: [{
		jobId: String
	}],
	jobsInProgress: [{
		jobId: String
	}],
	jobsApplied: [{
		jobId: String
	}],
	isDeleted: {type: Boolean, default: false}
});

mongoose.model("users", usersSchema);