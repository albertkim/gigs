var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jobSchema = new Schema({
	userId: String,
	title: String,
	description: String,
	salary: Number,
	salaryType: {type: String, default: "upon completion"},
	location: String,
	isDeleted: {type: Boolean, default: false},
	dateCreated: {type: Date, default: Date.now}
});

mongoose.model("jobs", jobSchema);