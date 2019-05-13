$(document).ready(function() {

var playerGuess = $("#player-num");
var crystal1 = $("#button-one");
var crystal2 = $("#button-two");
var crystal3 = $("#button-three");
var crystal4 = $("#button-four");
var test = $("#test");
var hiddenNums = [];
var score = 0;

//display randomn number between 19 -120

$("#random-num").text(Math.floor((Math.random() * 102) + 19));

//generate array of 4 numbers, generate four images

    for (i = 0; i < 4; i++) {
        hiddenNums.push(Math.floor(Math.random() * 12) + 1);

        var crystals = $("<img>");
        crystals.addClass("crystal-image");
        crystals.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
        crystals.attr("crystal-value", hiddenNums[i]);
        $(".crystal-btn").append(crystals); 
        
        $("#button-one").text("hello")
}

//on button click, add number to player guess

// crystal1.on("click", function () {
//     playerGuess.text(hiddenNums[0]);
// })







//display scoreboard 
    //track wins and loses
        //if player guess > random number, add one to losses 
        //if player guess = random number, add one to wins

//generate new numbers for buttons and random number upon win or loss and restart
    //score should remain




});
