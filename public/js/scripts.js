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
		won();
	}

// function won(){

// 		if(board[0] === ["X","X","X"]){
// 		alert("player 1 u win !");
		
// 	}
	
// 	}
	

function won(){
	if(count===5){
		$("#myDIV").show();
		$(".container").hide();
		if(count===5){ 
		var mess = $("#txt1").val();
		$("#msg").val(mess);
		
		}
		if(count===6){ 
			var mess = $("#txt2").val();
			$("#msg").val(mess);
		}

  	}
}

function myFunction() {
	
	$("#myDIV").hide();
	$(".container").show();
	$("div[name='cells']").css("background-image", "none");
	board = null;

  }
  
function won(){

	if (board[0][1] === board[0][0] && board[0][2] === board[0][0] ) {
		if (board[0][0] === "X") {
			return "win Player 1";
		}
		else if (board[0][0] === "O") {
			return "win Player 2";
		}
	}
	else if (board[1][0] === board[0][0] && board[2][0] === board[0][0] ) {
		if (board[0][0] === "X") {
			return "win Player 1";
		}
		else if (board[0][0] === "O") {
			return "win Player 2";
		}
	}	
	else if (board[0][1] ===  board[1][1] && board[2][1] ===  board[1][1] ) {
		if (board[0][0] === "X") {
			return "win Player 1";
		}
		else if (board[0][0] === "O") {
			return "win Player 2";
		}	
	}
	else if (board[1][0] ===  board[1][1] && board[1][2] ===  board[1][1] ) {
		if (board[0][0] === "X") {
			return "win Player 1";
		}
		else if (board[0][0] === "O") {
			return "win Player 2";
		}
	}
	else if (board[0][2] ===  board[1][1] && board[2][0] ===  board[1][1] ) {
		if (board[0][0] === "X") {
			return "win Player 1";
		}
		else if (board[0][0] === "O") {
			return "win Player 2";
		}	
	}
	else if (board[0][0] ===  board[1][1] && board[2][2] ===  board[1][1] ) {
		if (board[0][0] === "X") {
			return "win Player 1";
		}
		else if (board[0][0] === "O") {
			return "win Player 2";
		}
	}
	else if (board[1][2] === board[2][2] && board[0][2] === board[2][2] ) {
		if (board[0][0] === "X") {
			return "win Player 1";
		}
		else if (board[0][0] === "O") {
			return "win Player 2";
		}	
	}
	else if (board[2][1] === board[2][2] && board[2][0] === board[2][2] ) {
		if (board[0][0] === "X") {
			return "win Player 1";
		}
		else if (board[0][0] === "O") {
			return "win Player 2";
		}

	else
		return "Try Again";
	}
}	
