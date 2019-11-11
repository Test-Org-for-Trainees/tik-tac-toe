// hide winner gif

$(document).ready(function(){
	$("#myDIV").hide();
	$(".container").show();
});

var count = 0;
var cellid;
var xpos;
var ypos;
var board = [
	["", "", ""],
	["", "", ""],    
	["", "", ""],
   ];
   var winner;

   // add values to array & fill X , O visually
function change(evt){

	cellid = "#" + evt.id;
	count++;
	xpos = parseInt(evt.getAttribute("x"));
	ypos = parseInt(evt.getAttribute("y"));
	
	if (count % 2 === 0){
		
		$(cellid).css("background-image", "url(o.png)");
		board[xpos][ypos] = "O";	
	
	}

    else{
		
		$(cellid).css("background-image", "url(x.png)");
		board[xpos][ypos] = "X";
		
    }
        
		
    if(count === 5){
        
        winner = won();
        if(winner =="~~~~ win X ~~~~" ){ 
            var mess = $("#txt1").val() || "Player 1";
            $("#msg").val(mess);
        }
    }

    if(count === 6){
        
        winner = won();
        if(winner == "~~~~ win O ~~~~" ){
            var mess = $("#txt2").val() || "Player 2";
            $("#msg").val(mess);
        }

        else{
            alert("Try Again");
            return location.reload();

        }
            
    }   
        
    showthewinner();
}



  // winning rules
  function won(){

    if (board[0][1] === board[0][0] && board[0][2] === board[0][0] ) {
        if (board[0][0] === "X") {
            return "~~~~ win X ~~~~";
        }
        else if (board[0][0] === "O") {
            return "~~~~ win O ~~~~";
        }
    }

    if (board[1][0] === board[0][0] && board[2][0] === board[0][0] ) {
        if (board[0][0] === "X") {
            return "~~~~ win X ~~~~";
        }
        else if (board[0][0] === "O") {
            return "~~~~ win O ~~~~";
        }
    }
    
    if (board[0][1] ===  board[1][1] && board[2][1] ===  board[1][1] ) {
        if (board[1][1] === "X") {
            return "~~~~ win X ~~~~";
        }
        else if (board[1][1] === "O") {
            return "~~~~ win O ~~~~";
        }    
    }

    if (board[1][0] ===  board[1][1] && board[1][2] ===  board[1][1] ) {
        if (board[1][1] === "X") {
            return "~~~~ win X ~~~~";
        }
        else if (board[1][1] === "O") {
            return "~~~~ win O ~~~~";
        }
    }

    if (board[0][2] ===  board[1][1] && board[2][0] ===  board[1][1] ) {
        if (board[1][1] === "X") {
            return "~~~~ win X ~~~~";
        }
        else if (board[1][1] === "O") {
            return "~~~~ win O ~~~~";
        }    
    }

    if (board[0][0] ===  board[1][1] && board[2][2] ===  board[1][1] ) {
        if (board[1][1] === "X") {
            return "~~~~ win X ~~~~";
        }
        else if (board[1][1] === "O") {
            return "~~~~ win O ~~~~";
        }
    }

    if (board[1][2] === board[2][2] && board[0][2] === board[2][2] ) {
        if (board[2][2] === "X") {
            return "~~~~ win X ~~~~";
        }
        else if (board[2][2] === "O") {
            return "~~~~ win O ~~~~";
        }    
    }

    if (board[2][1] === board[2][2] && board[2][0] === board[2][2] ) {
        if (board[2][2] === "X") {
            return "~~~~ win X ~~~~";
        }
        else if (board[2][2] === "O") {
            return "~~~~ win O ~~~~";
        }
    }

}       	



// show who is the winner

function showthewinner(){
	if(winner ===  "~~~~ win X ~~~~" || winner ===  "~~~~ win O ~~~~" ){
        $(".container").hide();  
	    $("#myDIV").show();
    

    }
	
}




function Restart(){
    location.reload();
}