$(document).ready(function() {
    
    var targetNumber = Math.floor(Math.random() * 102 + 19);

    $("#reach").text(targetNumber);
    console.log(targetNumber)
    
    var wins = 0;
    var losses = 0;
    var yourScore = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#actualScore").text(yourScore);

    function winner(){
        wins++;
        $("#wins").text(wins);
    }

    function loser(){
        losses++;
        $("#losses").text(losses);
    }

    var numBlue = Math.floor(Math.random() * 12 + 1);
    var numRed = Math.floor(Math.random() * 12 + 1);
    var numGreen = Math.floor(Math.random() * 12 + 1);
    var numYellow = Math.floor(Math.random() * 12 + 1);

    $(".bluebutton").on ("click", function(){

        yourScore = yourScore + numBlue;
        $("#actualScore").text(yourScore);

        if(yourScore === targetNumber){
            winner();
        }
        else if (yourScore > targetNumber){
            loser();
        }
    })

    $(".redbutton").on ("click", function(){

        yourScore = yourScore + numRed;
        $("#actualScore").text(yourScore);

        if(yourScore === targetNumber){
            winner();
        }
        else if (yourScore > targetNumber){
            loser();
        }
    })

    $(".greenbutton").on ("click", function(){

        yourScore = yourScore + numGreen;
        $("#actualScore").text(yourScore);

        if(yourScore === targetNumber){
            winner();
        }
        else if (yourScore > targetNumber){
            loser();
        }
    })

    $(".yellowbutton").on ("click", function(){

        yourScore = yourScore + numYellow;
        $("#actualScore").text(yourScore);

        if(yourScore === targetNumber){
            winner();
        }
        else if (yourScore > targetNumber){
            loser();
        }
    })

});