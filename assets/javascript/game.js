$(document).ready(function() {

var randNum = $("#random-num");
var playerGuess = $("#player-num");
var crystal1 = $("#button-one");
var crystal2 = $("#button-two");
var crystal3 = $("#button-three");
var crystal4 = $("#button-four");
var test = $("#test");
var hiddenNums = [];
var con = 1; 

//display randomn number between 19 -120

randNum.text(Math.floor((Math.random() * 102) + 19));

//generate array of 4 numbers to assign to buttons 

generate = function() {
    
    for (i = 0; i < 4; i++) 
        hiddenNums.push(Math.floor(Math.random() * 12) + 1);
        crystal1.append(hiddenNums[0]);
        crystal2.append(hiddenNums[1]);
        crystal3.append(hiddenNums[2]);
        crystal4.append(hiddenNums[3]);
}

//assign random numbers to buttons

assign = function() {
//    crystal1.text(hiddenNums[0]);


}
   
//display player guess

playerGuess.text(0);

//display four buttons
    //assign each a random number between 1-12 

    

    //on button click, add number to player guess


//display scoreboard 
    //track wins and loses
        //if player guess > random number, add one to losses 
        //if player guess = random number, add one to wins

//generate new numbers for buttons and random number upon win or loss and restart
    //score should remain



generate();
assign();
});
