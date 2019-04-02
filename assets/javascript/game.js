$(document).ready(function() {
    
    //Generates a random number for score to reach
    var targetNumber = Math.floor(Math.random() * 102 + 19);

    //Sends random number to DOM
    $("#reach").text(targetNumber);
    
    //Creates variables for the scoreboard
    var wins = 0;
    var losses = 0;
    var yourScore = 0;

    //Send variable scores to scoreboard
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#actualScore").text(yourScore);
   
    //Reset function to create new random numbers for each crystal, sets your score to 0, generates new number to reach

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

    //Adds 1 to win score and calls reset function

    function winner(){

        wins++;
        $("#wins").text(wins);
        reset();
    }

    //Adds 1 to win score and calls reset function

    function loser(){

        losses++;
        $("#losses").text(losses);
        reset();
    }

    //Creates variables for each crystal and generates a number for each

    var numBlue = Math.floor(Math.random() * 12 + 1);
    var numRed = Math.floor(Math.random() * 12 + 1);
    var numGreen = Math.floor(Math.random() * 12 + 1);
    var numYellow = Math.floor(Math.random() * 12 + 1);

    //create button functionality for each image and creates rule to win or lose game upon click

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