var manageUsers = (function(){

	var self = this;
	var userElements = [];
	var userObjects = [];

	// Stores the index as the current job
	var currentUserIndex;

	var init = function(){

		// Initialize user web elements
		userElements = $(".user");

		// Add handlers to each job element
		for(var i=0; i<userElements.length; i++){

			var userElement = $(userElements[i]);
			var userObject = userObjects[i];
			
			userElement.on("click", i, function(event){

				var i = event.data;
				var userElement = userElements[i];
				var userObject = userObjects[i];
				console.log(userObject);
				// Store clicked job in state variable
				currentUserIndex = i;

				// Locate all the details elements
				var defaultDetail = $("#defaultDetail");

				var username = $("#usernameDetail");
				var accountType = $("#accountTypeDetail");
				var dateCreated = $("#dateCreatedDetail");
				var studentId = $("#studentIdDetail");
				var school = $("#schoolDetail");
				var company = $("#companyDetail");
				var jobsApplied = $("#jobsAppliedDetail");
				var jobsInProgress = $("#jobsInProgressDetail");
				var jobsCompleted = $("#jobsCompletedDetail");

				// Add each element to the details panel, unhide
				defaultDetail.hide();

				username.text(userObject.username);
				username.show();

				accountType.text(userObject.accountType);
				accountType.show();

				dateCreated.text(userObject.dateCreated);
				dateCreated.show();

				studentId.text(userObject.studentId);
				studentId.show();

				school.text(userObject.school);
				school.show();

				company.text(userObject.company);
				company.show();

				jobsApplied.text(userObject.jobsApplied);
				jobsApplied.show();

				jobsInProgress.text(userObject.jobsInProgress);
				jobsInProgress.show();

				jobsCompleted.text(userObject.jobsCompleted);
				jobsCompleted.show();

			});
		};

		// Initialize details buttons
		$("#deleteUser").on("click", function(){
			// Get selected job id
			var id = userObjects[currentUserIndex].id;
			$.ajax({
				url: "/manageUsers",
				type: "POST",
				data: {
					action: "delete",
					id: id
				},
				success: function(data){
					console.log(data);
					location.reload();
				}
			});
		});

	};

	var addUser = function(user){
		userObjects.push(user);
	};

	var getCurrentUserIndex = function(){
		return currentUserIndex;
	};

	return {
		init: init,
		addUser: addUser,
		getCurrentUserIndex: getCurrentUserIndex
	};


})();