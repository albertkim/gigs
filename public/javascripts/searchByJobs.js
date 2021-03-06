var searchByJobs = (function(){
	
	var self = this;
	var config= {};
	var jobElements = [];
	var jobObjects = [];

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
				var company = $("#companyDetail");
				var salary = $("#salaryDetail");
				var location = $("#locationDetail");
				var description = $("#descriptionDetail");

				// Add each element to the details panel, unhide
				defaultDetail.hide();

				title.text(jobObject.title);
				title.show();

				company.text(jobObject.company);
				company.show();

				salary.text("$" + jobObject.salary);
				salary.show();

				location.text(jobObject.location);
				location.show();

				description.text(jobObject.description);
				description.show();
			});
		};

		// Add handlers for the job details buttons
		$("#applyJob").on("click", function(){
			// Get selected job id
			var id = jobObjects[currentJobIndex].id;
			$.ajax({
				url: "/jobActions",
				type: "POST",
				data: {
					action: "apply",
					id: id
				},
				success: function(data){
					console.log("Success");
					location.reload();
				}
			});
		});

		$("#deleteJob").on("click", {jobObjects: jobObjects}, function(event){
			var jobObjects = event.data.jobObjects;
			var jobObject = jobObjects[currentJobIndex];
			console.log(jobObject);
			// Get selected job id
			var id = jobObject._id;
			console.log("Deleting job id: " + id);
			$.ajax({
				url: "/jobActions",
				type: "POST",
				data: {
					action: "delete",
					id: id
				},
				success: function(data){
					console.log("Success");
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

	return {
		init: init,
		addJob: addJob,
		addCurrentUser: addCurrentUser,
		getCurrentJobIndex: getCurrentJobIndex
	};

})();