function game(){
    
    // variables
    var turn = 1; // 1 by default because arrays start at 0 - not this game
    GRID_SIZE = 3; // size of game grid
    

    // initialize turns before even starting the game
    updateTurn();

    // set click function
    $("td").click(function(event){
        if(getPlayer == "X"){      // if turn is even then it's O's turn
            if($(this).html() == ""){
                $(this).html("O");
            } else{
                $(this).html("ffff");
                
            }
        } else if(getPlayer == "O"){
            if($(this).html() == ""){
                $(this).html("X");
            } else{
                $(this).html("ffff");
            
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


    // create and add a reset button
    var button = document.createElement("BUTTON");
    button.appendChild(document.createTextNode("Reset Game"));
    document.getElementById("reset").appendChild(button);


    // failed attempt at reset button
    document.getElementById("reset").click(function(event){
        turn = 1;
        updateTurn();
        
        
        for(var i=1; i <= GRID_SIZE; i++){
            for(var j=1; j <= GRID_SIZE; j++){
                $("#gameTable").find("tr#"+i).find("td:eq(" + j + ")").html("");
                console.log(i + "" + j);
            }
        }
    });

}