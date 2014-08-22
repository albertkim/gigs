var searchByCompanies = (function(){

	var self = this;
	var config={};
	var companyElements = [];
	var companyObjects = [];

	var init = function(){
		
		jobElements = $(".company");

		// Add handlers for the company details buttons
		$("#deleteCompany").on("click", {companyObjects: companyObjects}, function(event){
			var jobObjects = event.data.jobObjects;
			var currentJobIndex = index.getCurrentJobIndex();
			// Get selected job id
			var id = jobObjects[currentJobIndex].id;
			$.ajax({
				url: "/jobActions",
				type: "POST",
				data: {
					action: "delete",
					id: id
				},
				success: function(data){
					console.log("Success");
					location.reload();
				}
			});
		});

	};

	var addCompany = function(company){
		companyObjects.push(company);
	};

	return {
		init: init,
		addCompany: addCompany
	};


})();