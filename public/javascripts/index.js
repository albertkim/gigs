var index = (function(){
	
	var self = this;
	var config={};
	var jobElements = [];
	var jobObjects = [];
	var currentUser;

	// Stores the index as the current job
	var currentJobIndex;

	var init = function(settings){
		jobElements = $(".job");
		$.extend(config, settings);

		// Add handlers to each job element
		for(var i=0; i<jobElements.length; i++){
			var jobElement = $(jobElements[i]);
			jobElement.on("click", i, function(event){

				var i = event.data;
				// Store clicked job in state variable
				currentJobIndex = i;
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

		// Add handlers for the job details buttons
		$("#deleteJob").on("click", {jobObjects: jobObjects}, function(event){
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

	var addJob = function(job){
		jobObjects.push(job);
	};

	var addCurrentUser = function(user){
		currentUser = user;
	};

	var getCurrentJobIndex = function(){
		return currentJobIndex;
	};

	return({
		init: init,
		addJob: addJob,
		addCurrentUser: addCurrentUser,
		getCurrentJobIndex: getCurrentJobIndex
	});

})();