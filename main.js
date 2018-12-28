

var board = [
  [5, 4, 3, 2, 1],
  [],
  []
];
//Identifies the state of the board
var printBoard = function() {   //setting up function
  board.forEach(function(peg) { //mapping the board with the .map function making the peg a parameter
    console.log("---" + peg) //console logging the peg to the board
  })
}

var moveDisc = function(startPeg, endPeg) { //takes an argument of the startpeg to the endpeg
  var startPegArray = board[startPeg] //sets up ending disc move on the array to show on the board
  var lastItemStartPegArray = startPegArray[startPegArray.length - 1];

  var endPegArray = board[endPeg] //sets up ending disc move on the array to show on the board
  var lastItemEndPegArray = endPegArray[endPegArray.length - 1];

  if (lastItemStartPegArray < lastItemEndPegArray || endPegArray.length === 0) { //sets the conditional statement so that a larger disc cannot be stacked on a smaller disc
    board[startPeg].pop();
    board[endPeg].push(lastItemStartPegArray);
  } else {
    console.log("cannot move");
  }

  printBoard();
}


