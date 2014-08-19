var header = (function(){

	var currentUser;

	var init = function(){
		// Attach login button handler
		$("#loginButton").on("click", function(){
			var username = $("#usernameInput").val();
			var password = $("#passwordInput").val();
			$.ajax({
				url: "/loginActions",
				type: "POST",
				data: {
					username: username,
					password: password
				},
				success: function(data){
					console.log("Success");
					console.log(data);
					location.reload();
				}
			});
		});
	};

	var addCurrentUser = function(user){
		currentUser = user;
		// Hide username/password/login/register elements
		
		// Show logout button

		// Show profile link
	};

	return {
		init: init,
		addCurrentUser: addCurrentUser
	};

})();