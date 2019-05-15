$(document).ready(function () {

    var playerGuess = 0;
    var crystalImg = ["http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg", "https://cdn.shopify.com/s/files/1/0008/3682/9247/products/Light_Purple_Tanzanite_Crystal_1_800x.jpg?v=1542483600", "https://d2f0ora2gkri0g.cloudfront.net/b4/31/b4310115-5a45-46a3-8b46-52785bd0a777.png", "https://cdn-images-1.medium.com/max/2600/0*AmwIyi21fDd9Guwz.jpg"];
    var hiddenNums = [];
    var playerWins = 0;
    var playerLosses = 0;


    //display randomn number between 19 -120
    var targetNum = (Math.floor((Math.random() * 102) + 19));

    //display scoreboard 
    $("#wins").text(playerWins);
    $("#losses").text(playerLosses);
    $("#player-num").text(playerGuess);
    $("#random-num").text(targetNum);


    // game reset function

    gameReset = function () {
        targetNum = (Math.floor((Math.random() * 102) + 19));
        $("#player-num").text(playerGuess = 0);
        $("#random-num").text(targetNum);
        
        
        
    };


    crystalNum = function () {
        for (i = 0; i < 4; i++) {
            var secretNums = "";
            secretNums.attr("data-crystalvalue", hiddenNums[i]);
            $(".crystal-btn").append(secretNums);
            console.log(secretNums);
        };
    };

    //generate array of 4 numbers 

    crystalImage = function () {
        for (i = 0; i < 4; i++) {
            hiddenNums.push(Math.floor(Math.random() * 12) + 1);

            var crystals = $("<img>");
            crystals.addClass("crystal-image");
            crystals.attr("data-crystalvalue", hiddenNums[i]);
            crystals.attr("src", crystalImg[i]);
            $(".crystal-btn").append(crystals);

            newNum = function() {
                $("data-crystalvalue").removeData(hiddenNums[i]);

            }
        };
    };

    crystalImage();
    //on button click, assign crystal a value 

    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        $("#player-num").text(playerGuess += crystalValue);

        //if player guess = random number, add one to wins

        if (playerGuess === targetNum) {
            $("#wins").text(++playerWins)
            gameReset();
        }

        // //if player guess > random number, add one to losses 

        else if (playerGuess >= targetNum) {
            $("#losses").text(++playerLosses);
            gameReset();
        }

    });



});

// for (i = 0; i < 4; i++) {
        //     // var secretNums = $();
        //     // secretNums.attr("data-crystalvalue", hiddenNums[i]);
        //     $(".crystal-btn").append(hiddenNums[i]);
        // };