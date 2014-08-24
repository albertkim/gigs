var addJob = (function(){

	var init = function(){

		// Attach submit button handler
		$("#submitJob").on("click", function(){

			console.log("clicked");

			// Locate all input elements
			var userId = "1";
			var title = $("#titleInput").val();
			var salary = $("#salaryInput").val();
			var salaryType = "monthly";
			var location = $("#locationInput").val();
			var description = $("#descriptionInput").val();

			// Verify non-empty inputs
			if(currentUser.company == undefined){
				console.log("User isn't registered to a company");
			} else if(userId == ""){

			} else if(title == ""){

			} else if(salary == ""){

			} else if(salaryType == ""){

			} else if(location == ""){

			} else if(description == ""){

			} else{
				$.ajax({
					url: "/addJob",
					type: "POST",
					data: {
						userId: userId,
						company: currentUser.company,
						title: title,
						salary: salary,
						salaryType: salaryType,
						location: location,
						description: description
					},
					succcess: function(data){
						console.log("success");

					}
				});
			}
		})
	};

	return {
		init: init
	};


})();