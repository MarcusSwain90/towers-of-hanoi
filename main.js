/*
there are Moves, board(Pegs), Discs, Occupied Pegs, Vacant Pegs
Objects:
board
moveDisc

[["5", "4", "3", "2", "1"],
[],
[]]


*/

//unable to get the function to simply print the board. Utilized console.log(printBoard) when logged it returned a Reference Error
// printBoard function is to give visual of where the discs are placed on the board


var board = [
  [5, 4, 3, 2, 1],
  [],
  []
];
//Identifies the state of the board
var printBoard = function() {   //setting up function
    board.map(function(peg) { //mapping the board with the .map function making the peg a parameter
    console.log("---" + peg) //console logging the peg to the board
  })
}

var moveDisc = function(startPeg, endPeg) { //takes an argument of the startpeg to the endpeg
  var removedItem = board[startPeg].pop(); //uses the pop method to pull off of the startPeg

  var endPegArray = board[endPeg] //sets up ending disc move on the array to show on the board
  var lastItemEndPegArray = endPegArray[endPegArray.length - 1];

  if (removedItem < lastItemEndPegArray || endPegArray.length === 0) { //sets the conditional statement so that a larger disc cannot be stacked on a smaller disc
     return board[endPeg].push(removedItem);
  } else {
    console.log("cannot move");
  }
printBoard();
}
};
