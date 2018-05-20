function Game(){
    
    // variables
    var turn = 1; // 1 by default because arrays start at 0 - not this game
    GRID_SIZE = 3; // size of game grid
    

    // initialize turns before even starting the game
    updateTurn();

    //init reset
    $('#reset').click(reset);

    // set click function
    $("td").click(function(event){
        if(getPlayer() == "X"){      // if turn is even then it's O's turn
            if($(this).html() == ""){
                $(this).html("X");
            } else {
                return;
            }
        } else if(getPlayer() == "O"){
            if($(this).html() == ""){
                $(this).html("O");
            } else{
                return;
            }
        }

        turn++;
        updateTurn();
    });


    function getPlayer(){
        if(isEven(turn)){
            return "O";
        } else{
            return "X";
        }
    }


    function isEven(n){
        return n % 2 == 0;
    } // end isEven


    function isEmpty(n){
        return n == "";
    }


    function updateTurn(){
        var turnMsg = "Turn " + turn + ". " + getPlayer() + "'s turn.";
        
        $("#turn").html(turnMsg);
    }


    /*
    * clear board by referring to all td tags. Wasn't sure if it was a possible idea
    * All thanks to pineappleparticle
    */
    function clearBoard() {
        $('td').html('');
    }

    function reset () {
        turn = 1;
        clearBoard();
        updateTurn();
    }

}
