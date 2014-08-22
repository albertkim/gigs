var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var companySchema = new Schema({
	name: String,
	description: String,
	image: { data: Buffer, contentType: String }
});

mongoose.model("companies", companySchema);