//Global variable

//Contains the list of URLs for image source
var imgArr = ["https://i.imgur.com/ExL4UTM.jpg", "https://i.imgur.com/UVJMVXM.jpg", "https://i.imgur.com/TyzPb77.jpg", "https://i.imgur.com/Zdyoa5B.jpg"];
//Stores the count to display images
var count = 0;

//Functions

/*
    Function : modulo(num,base)
    Functionality : Returns the value of (num)modulo(base)
    Parameters : num - Number for which modulo has to be found out
                 base - Number for which the modulo has to be found out
    Return value : (num)modulo(base)
*/
function modulo(num, base) {
    if (num >= 0) {
        return num % base;
    }
    if (num < 0) {
        while (num < 0) {
            num += base;
        }
        return num;
    }
}

$(document).ready(function () {

    $("#small-img-1").click(function () {
        //Clicking the small image would change the large image
        $("#large-img").attr("src", $(this).attr("src"));

        //Changes the count value based on index value of the imgArr of large-img
        count = imgArr.indexOf($("#large-img").attr("src"));
    });
    $("#small-img-2").click(function () {
        //Clicking the small image would change the large image
        $("#large-img").attr("src", $(this).attr("src"));

        //Changes the count value based on index value of the imgArr of large-img
        count = imgArr.indexOf($("#large-img").attr("src"));
    });
    $("#small-img-3").click(function () {
        //Clicking the small image would change the large image
        $("#large-img").attr("src", $(this).attr("src"));

        //Changes the count value based on index value of the imgArr of large-img
        count = imgArr.indexOf($("#large-img").attr("src"));
    });
    $("#small-img-4").click(function () {
        //Clicking the small image would change the large image
        $("#large-img").attr("src", $(this).attr("src"));

        //Changes the count value based on index value of the imgArr of large-img
        count = imgArr.indexOf($("#large-img").attr("src"));
    });
    //Changint the image when an image is clicked
    $("#rightButton").click(function () {
        //Changing count value to associated integer clicked
        count = modulo(count + 1, imgArr.length);

        //Changing image based on count value
        if (count == 0) {
            $("#large-img").attr("src", imgArr[0]);
        }
        else if (count == 1) {
            $("#large-img").attr("src", imgArr[1]);
        }
        else if (count == 2) {
            $("#large-img").attr("src", imgArr[2]);
        }
        else if (count == 3) {
            $("#large-img").attr("src", imgArr[3]);
        }
    });
    $("#leftButton").click(function () {
        //Changing count value to associated integer clicked
        count = modulo(count - 1, imgArr.length);

        //Changing image based on count value
        if (count == 0) {
            $("#large-img").attr("src", imgArr[0]);
        }
        else if (count == 1) {
            $("#large-img").attr("src", imgArr[1]);
        }
        else if (count == 2) {
            $("#large-img").attr("src", imgArr[2]);
        }
        else if (count == 3) {
            $("#large-img").attr("src", imgArr[3]);
        }
    });
    $(document).keydown(function (event) {//event is the object which stores information about what key has been pressed
        if (event.which == 37) {          //event.which returns the integer value of the key, which has been pressed
            $("#leftButton").click();
        }
        else if (event.which == 39) {
            $("#rightButton").click();
        }
    });

    //paused stores whether slideshow is paused or not
    var paused=false;

    setInterval(
        function()
        {
            //When the website loads, then the slideshow will automatically begin as paused is false.
            if(!paused)
            {
                $("#rightButton").click();
            }
            //When the large image is clicked, the slideshow will stop
            $("#large-img").click(
                function(){paused=true;}
            );
        },
        3000    //Anonymous function will be repeated every 3 seconds
    );
});