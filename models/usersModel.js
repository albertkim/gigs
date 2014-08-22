var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	username: String,
	password: String,
	// Type can be: student, coordinator, faculty, employer
	type: String,
	dateCreated: {type: Date, default: Date.now},
	description: String,
	resume: { data: Buffer, contentType: String },
	jobsCompleted: [{
		jobId: String
	}],
	jobsInProgress: [{
		jobId: String
	}],
	jobsApplied: [{
		jobId: String
	}]
});

mongoose.model("users", usersSchema);