var register = (function(){

	var init = function(){

		// Attach handlers to account type selector
		$("#studentSelect").on("click", function(){
			$("#accountType").text($(this).text());
			$("#studentInputs").show();
			$("#coordinatorInputs").hide();
			$("#employerInputs").hide();
		});
		$("#coordinatorSelect").on("click", function(){
			$("#accountType").text($(this).text());
			$("#studentInputs").hide();
			$("#coordinatorInputs").show();
			$("#employerInputs").hide();
		});
		$("#facultySelect").on("click", function(){
			$("#accountType").text($(this).text());
			$("#studentInputs").hide();
			$("#coordinatorInputs").show();
			$("#employerInputs").hide();
		});
		$("#employerSelect").on("click", function(){
			$("#accountType").text($(this).text());
			$("#studentInputs").hide();
			$("#coordinatorInputs").hide();
			$("#employerInputs").show();
		});

		// Attach handler to register button
		$("#registerUserButton").on("click", function(){
			var accountType = $("#accountType").text();

			var username = $("#registerUsernameInput").val();
			var password = $("#registerPasswordInput").val();
			var confirmPassword = $("#registerConfirmPasswordInput").val();
			var email = $("#registerEmailInput").val();

			var studentSchool = $("#registerStudentSchoolInput").val();
			var studentId = $("#registerStudentIdInput").val();

			var faculty = $("#registerFacultyInput").val();
			var coordinatorSchool = $("#coordinatorSchoolInput").val();
			var company = $("#registerCompanyInput").val();

			// Input verification
			if(accountType != "Student" && accountType != "Coordinator"
				&& accountType != "Faculty" && accountType != "Employer"){

			} else if(username == ""){

			} else if(password == ""){

			} else if(confirmPassword != password){

			} else if(email == ""){

			} else{

				var data = {
					username: username,
					password: password,
					confirmPassword: confirmPassword,
					email: email
				};

				// Add extra fields based off of account type
				switch($("#accountType").text()){
					case "Student":
						data.school = studentSchool;
						data.studentId = studentId;
					case "Coordinator":
						data.faculty = faculty;
						data.school = coordinatorSchool;
						break;
					case "Faculty":
						data.faculty = faculty;
						data.school = coordinatorSchool;
						break;
					case "Employer":
						data.company = company;
						break;
				};

				console.log(data);
				
				$.ajax({
					url: "",
					type: "POST",
					data: data,
					success: function(data){
						console.log("Success");
						console.log(data);
						location.href = "/";
					}
				});

			}
		});
	};

	return({
		init: init
	});

})();