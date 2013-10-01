window.addEventListener('DOMContentLoaded', function(){
	console.log("loaded");
	function onSuccess(data){
		console.log(data);
	};

	$.ajax({
		method : "GET",
		url : "https://api.github.com/zen",
		success : onSuccess
	});
});