
var count = 0;
var cellid;

function test(evt){
	cellid = "#" + evt.id;
	count++;
	if (count % 2 === 0)
		$(cellid).css("background-image", "url(o.png)");
    else
		$(cellid).css("background-image", "url(x.png)");
}

