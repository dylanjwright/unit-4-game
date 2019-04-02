$(document).ready(function() {
    
    var targetNumber = Math.floor(Math.random() * 102 + 19);

    $("#reach").text(targetNumber);
    
    var wins = 0;
    var losses = 0;
    var yourScore = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#actualScore").text(yourScore);
   
    function reset(){

        targetNumber = Math.floor(Math.random() * 102 + 19);
        $("#reach").text(targetNumber);

        yourScore = 0;
        $("#actualScore").text(yourScore);

        numBlue = Math.floor(Math.random() * 12 + 1);
        numRed = Math.floor(Math.random() * 12 + 1);
        numGreen = Math.floor(Math.random() * 12 + 1);
        numYellow = Math.floor(Math.random() * 12 + 1);
    }

    function winner(){

        wins++;
        $("#wins").text(wins);
        reset();
    }

    function loser(){

        losses++;
        $("#losses").text(losses);
        reset();
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