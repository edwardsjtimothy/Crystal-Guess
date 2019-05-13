$(document).ready(function() {

var randNum = $("#random-num");
var playerGuess = $("player-num");
var crystal1 = $("button-one");
var crystal2 = $("button-two");
var crystal3 = $("button-three");
var crystal4 = $("button-four");

//display randomn number between 19 -120

randNum.text(Math.floor((Math.random() * 101) + 19));


//display player guess

//display four buttons
    //assign each a random number between 1-12 
    //on button click, add number to player guess


//display scoreboard 
    //track wins and loses
        //if player guess > random number, add one to losses 
        //if player guess = random number, add one to wins

//generate new numbers for buttons and random number upon win or loss and restart
    //score should remain


});