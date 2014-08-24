var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jobSchema = new Schema({
	userId: String,
	companyId: String,
	title: String,
	company: String,
	description: String,
	salary: Number,
	salaryType: {type: String, default: "monthly"},
	location: String,
	isDeleted: {type: Boolean, default: false},
	dateCreated: {type: Date, default: Date.now},
	dateStart: Date,
	dateEnd: Date,
	deadline: Date
});

mongoose.model("jobs", jobSchema);