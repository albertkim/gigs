var header = (function(){

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
				}
			});
		});
	};

	return {
		init: init
	};

})();