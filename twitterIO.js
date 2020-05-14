var textInput="";                   //Stores text input in the textarea box

$(document).ready(function(){
    setInterval(                    //Will check the change in contents every 100ms
        function()
        {
            textInput = $("#tweetBox").val();
            if(textInput.length<=280){                          //Max. characters in a tweet is 280
                $("#tweetLength").html(textInput.length+"");    //Changes value showing tweet length
                $("#tweetLength").css("color","rgb(0,0,0)");    //Color of tweet length is black
                $("button").attr("disabled",false);             //tweet button is clickable
                $("button").css("opacity",1+"");                //tweet button isn't faded
            }
            else{                                               //When characters in the tweet crosses 280 limit
                $("#tweetLength").html("-"+(textInput.length-280));//Changes value showing tweet length in -ve
                $("#tweetLength").css("color","rgb(255,0,0)"); //Color of tweet length is white
                $("button").attr("disabled",true);                 //tweet button is not clickable
                $("button").css("opacity",0.4+"");                 //tweet button is faded
            }
        },
        100);
});

