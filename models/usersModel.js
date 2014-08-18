var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	username: String,
	password: String,
	dateCreated: {type: Date, default: Date.now},
	description: String,
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