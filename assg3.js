$(document).ready(function () {
    $(".small-img-1,.small-img-2,.small-img-3").click(function () {
        $(".large-img").attr("src", $(this).attr("src"));
    });
});