
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
}




