var register = (function(){

	var init = function(){
		// Attach handler to register button
		$("#registerButton").on("click", function(){
			var username = $("#registerUsernameInput").val();
			var password = $("#registerPasswordInput").val();
			var confirmPassword = $("#registerConfirmPasswordInput").val();
			var email = $("#registerEmailInput").val();

			// Input verification
			

		});
	};

	return({
		init: init
	});

})();