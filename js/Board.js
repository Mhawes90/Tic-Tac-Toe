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
function createBoard(){ //function name was mis-spelled.
    var board = document.createElement("table"); // You are importing jQuery but not using it here. I would recommend using it everywhere or nowhere.
    var tblBody = document.createElement("tbody");
    board.setAttribute('border', 1);
    board.setAttribute('cellspacing', 0);
    
    for(var i = 0; i < T_SIZE; i++){
        var row = document.createElement('tr');
        board.appendChild(row);
        for(var j = 0; j < T_SIZE; j++){
            var cell = document.createElement('td');
            
            //boardArr.push(new Node(i, j));
            row.appendChild(cell);
        }       // end for j
        tblBody.appendChild(row);
    }       // end for i

    document.getElementsByTagName("body")[0].appendChild(board).appendChild(tblBody);
    board.setAttribute("border", "2");
}       // end createBoard


Board.prototype.reset = function(){
    
}