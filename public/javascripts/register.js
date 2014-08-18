var header = (function(){

	var init = function(){
		// Attach handler to register button
		$("#registerUserButton").on("click", function(){
			var username = $("#registerUsernameInput").val();
			var password = $("#registerPasswordInput").val();
			var confirmPassword = $("#registerConfirmPasswordInput").val();
			var email = $("#registerEmailInput").val();

			// Input verification
			if(username == ""){

			} else if(password == ""){

			} else if(confirmPassword != password){

			} else if(email == ""){

			} else{
				// Hash password
				
				$.ajax({
					url: "",
					type: "POST",
					data: {
						username: username,
						password: password,
						confirmPassword: confirmPassword,
						email: email
					},
					success: function(data){
						console.log("Success");
						console.log(data);
						location.href = "../";
					}
				});
			}
		});
	};

	return({
		init: init
	});

})();