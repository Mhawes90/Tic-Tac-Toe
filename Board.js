var T_SIZE = 3,     // sets table size
    NODE_H = 100,      // set node height
    NODE_W = 100,       // set node width
    boardArr = [];

function Board(){

}

/*
* part of this method was created using table commands/ideas
* from https://github.com/vasanthk/tic-tac-toe-js
*/
function creatBoard(){
    var board = document.createElement('table');
    board.setAttribute('border', 1);
    board.setAttribute('cellspacing', 0);
    
    for(var i = 0; i < T_SIZE; i++){
        var row = document.createElement('tr');
        board.appendChild(row);
        for(var j = 0; j < T_SIZE; j++){
            var col = document.createElement('td');
            col.setAttribute('height', 120);
            col.setAttribute('width', 120);
            col.setAttribute('align', 'center');
            col.setAttribute('valign', 'center');
            boardArr.push(new Node(i, j));
            row.appendChild(col);
        }       // end for j
    }       // end for i

    document.getElementById("game").appendChild(board);
}       // end createBoard


Board.prototype.reset = function(){
    // ToDo!
}

createBoard();