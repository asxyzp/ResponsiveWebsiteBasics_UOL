//Changing the href attribute value of the link
function changeLink() {
    $("#changeLink").click(function () {
        $("#changeLink").attr("href", "https://responsivewebdesignuol--asxyzp.repl.co/index3.html");
        $("#changeLink").attr("target", "_blank");
    });
}

$(document).ready(function () {
    changeLink();
	//Replaces image w/ class "large-img" when clicking upon the image with class "small-img"
	$(".small-img").click(function () {
		console.log($(this).attr('src'));
	    $(".large-img").attr('src', $(this).attr('src'));
	});
})

