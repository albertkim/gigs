var addCompany = (function(){

	var init = function(){
		// Attach 'Submit Company' button handler
		$("#submitCompany").on("click", function(){

			var name = $("#nameInput").val();
			var description = $("#descriptionInput").val();

			$.ajax({
				url: "/addCompany",
				type: "POST",
				data: {
					name: name,
					description: description
				},
				success: function(data){
					console.log(data);
				}
			});
		});

	};

	return {
		init: init
	};


})();