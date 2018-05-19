var T_SIZE = 3,     // sets table size
    NODE_H = 100,      // set node height
    NODE_W = 100,       // set node width
    boardArr = [];

function Board(){
    createBoard();
}

/*
* part of this method was created using table commands/ideas
* from https://github.com/vasanthk/tic-tac-toe-js
*/
function createBoard(){ //function name was mis-spelled.
    /*
    * found a way to create a table using jQuery. Found here: https://gist.github.com/jineeshjohn/2044414
    * 
    * I'm still a little confused with jQuery but I can see now that I can directly
    * create html tags in a way that make more sense then i was previously doing.
    */


   table = $('<table></table>');
   
   var tr = [];
   for (var i = 0; i < T_SIZE; i++) {
       var row = $('<tr></tr>').appendTo(table);
       for (var j = 0; j < T_SIZE; j++) {
           $('<td></td>').text("").appendTo(row); 
       }
                 
   }

   table.appendTo("#gameBoard");
}       // end createBoard


Board.prototype.reset = function(){
    
}