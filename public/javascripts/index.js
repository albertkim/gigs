var index = (function(){
	
	config={};
	jobElements = [];
	jobObjects = [];

	var init = function(settings){
		console.log("Index init");
		jobElements = $(".job");
		$.extend(config, settings);

		// Add handlers to each job element
		for(var i=0; i<jobElements.length; i++){
			var jobElement = $(jobElements[i]);
			jobElement.on("click", i, function(event){

				console.log("Job clicked");

				var i = event.data;
				var jobObject = jobObjects[i];

				// Locate all the details elements
				var defaultDetail = $("#defaultDetail");
				var title = $("#titleDetail");
				var salary = $("#salaryDetail");
				var location = $("#locationDetail");
				var description = $("#descriptionDetail");

				// Add each element to the details panel, unhide
				defaultDetail.hide();

				var encoded = encodeURIComponent(jobObject.title);
				var decoded = decodeURIComponent(encoded);
				title.text(decoded);
				title.show();

				encoded = encodeURIComponent(jobObject.salary);
				decoded = decodeURIComponent(encoded);
				salary.text("$" + decoded);
				salary.show();

				encoded = encodeURIComponent(jobObject.location);
				decoded = decodeURIComponent(encoded);
				location.text(decoded);
				location.show();

				encoded = encodeURIComponent(jobObject.description);
				decoded = decodeURIComponent(encoded);
				description.text(decoded);
				description.show();
			});
		};
	};

	var addJob = function(job){
		jobObjects.push(job);
	};

	return({
		init: init,
		addJob: addJob
	});

})();