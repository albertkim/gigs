var searchByCompanies = (function(){

	var self = this;
	var config={};
	var companyElements = [];
	var companyObjects = [];
	var currentCompanyIndex;

	var init = function(){
		
		companyElements = $(".company");

		// Add handlers to each company element
		for(var i=0; i<companyElements.length; i++){
			var companyElement = $(companyElements[i]);
			companyElement.on("click", i, function(event){

				var i = event.data;
				// Store clicked job in state variable
				currentCompanyIndex = i;
				var companyObject = companyObjects[i];

				// Locate all the details elements
				var defaultDetail = $("#defaultDetail");
				var name = $("#nameDetail");
				var description = $("#descriptionDetail");				

				// Add each element to the details panel, unhide
				defaultDetail.hide();

				name.text(companyObject.name);
				name.show();

				description.text(companyObject.description);
				description.show();
			});
		};

		// Add handlers for the company details buttons
		$("#deleteCompany").on("click", function(event){
			// Get selected job id
			var id = companyObjects[currentCompanyIndex]._id;
			$.ajax({
				url: "/companyActions",
				type: "POST",
				data: {
					action: "delete",
					id: id
				},
				success: function(data){
					console.log("Success");
					location.href = "/";
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