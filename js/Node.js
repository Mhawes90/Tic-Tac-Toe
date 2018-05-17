/*
* Node class 
* by Mark Hawes
* Nodes are the squares that are on the Tic-Tac-Toe game board
*/
function Node(x, y){
    this.symbol = "";
    this.location = [x, y]; // sets location as an array
}


/*
* Not sure if I'm using prototypes right yet!
*/
Node.proptotype.getLocation = function(){
    return this.location;
}


Node.prototype.setSymbol = function(input){
    if(this.symbol != ""){
        throw "Location already taken.";        // throw exception if Node is taken
    }else{
        this.symbol = input;
    }
}   // end setSymbol


Node.prototype.getSymbol = function(){
    return this.symbol;
}