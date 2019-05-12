$(document).ready(function() {

var randNum = $("#random-num");
var playerGuess = "";
var crystal1 = "";
var crystal2 = "";
var crystal3 = "";
var crystal4 = "";

//display randomn number between 19 -120

randNum.text(Math.floor((Math.random() * 120) + 19));


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