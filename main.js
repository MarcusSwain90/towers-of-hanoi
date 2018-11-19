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


var game = function () {
    var board =  [
        [5, 4, 3, 2, 1],
        [],
        []
    ]

    var printBoard = function () {
        for (var i = 0; i < board.length; i++) {
            console.log(board[i]);
        }

    var postBoard

return {
    print: printBoard
}
    }
};
