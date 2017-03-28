$(document).ready(function() {
	var images;
	$("#grid").masonry();
	$(document).on("mouseenter", "li", function(){
		$(this).animate({
			padding: '2px'
		}, 200);
	});
	$(document).on("mouseleave", "li", function() {
		$(this).animate({
			padding: '7px'
		}, 200);
	});
	var currentURL = window.location.origin;
	$.ajax({url: currentURL + "/images", method: "GET"})
		.done(function(result) {
			images = result.images;
			var html;
			for(var i = 0; i < images.length; i++)
			{
				html = "<li><img src='uploads/" + images[i] + "'></li>";
				$("#grid").append(html);
				$("#grid").masonry('reloadItems');
				$("#grid").masonry('layout');
			}
		});
});