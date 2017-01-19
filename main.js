var data = new Array();
var score;
function start(){
	for (var i =0 ;i<=3;i++) {
		data[i] = new Array();
		for (var j = 0;j<=3;j++) {
			var flow = $("#part-"+i+"-"+j);
			flow.css("top",getPos(j));
			flow.css("left",getPos(i));		
			
			data[i][j] = 0;
		}
	}
	generateNum();
	generateNum();
	showNums();
	score = 0;
	$("#score").text(score);
}
 
$().ready(function(){
	start();
});
function showNums(){
	for(var i = 0; i<=3;i++){
		for (var j = 0;j<=3;j++){
				$("#part-"+i+"-"+j).text(data[i][j]);
				$("#part-"+i+"-"+j).css("color",getColor(data[i][j]));
		}
	}
}

document.addEventListener('touchstart',function(event){
    startx = event.touches[0].pageX;
    starty = event.touches[0].pageY;
});
document.addEventListener('touchend',function(event){
    endx = event.changedTouches[0].pageX;
    endy = event.changedTouches[0].pageY;


	var x = endx - startx;
	var y = endy - starty;
	if(x > 0 && Math.abs(x) > Math.abs(y)){
		moveRight();
		showNums();
		$("#score").text(score++);		
		if(checkEnd())
			alert("Game Over");
			else{
				generateNum();
				showNums();				
				if(checkEnd())
					alert("Game Over");
			}
	}//right
	if(x < 0 && Math.abs(x) > Math.abs(y)){
		moveLeft();
		showNums();
		$("#score").text(++score);		
		if(checkEnd())
			alert("Game Over");
			else{
				generateNum();
				showNums();
				if(checkEnd())
				alert("Game Over");
			}
	}//left
	if(y > 0 && Math.abs(x) < Math.abs(y)){
		moveDown();
		showNums();
		$("#score").text(++score);
		if(checkEnd())
			alert("Game Over");
			else{
				generateNum();
				showNums();
				if(checkEnd())
					alert("Game Over");
			}
	}//down
	if(y < 0 && Math.abs(x) < Math.abs(y)){
		moveUp();
		showNums();
		$("#score").text(++score);
		if(checkEnd())
			alert("Game Over");
			else{
				generateNum();
				showNums();
				if(checkEnd())
					alert("Game Over");
			}
	}//up
});	
function moveLeft(){
	for(n = 3;n>=1;n--){
		for(i = 1;i<=n;i++){
			for(j = 0;j<=3;j++){
				if(data[i-1][j] == 0){
					data[i-1][j] = data[i][j];
					data[i][j] = 0;
				}
				if(data[i-1][j] != 0 && data[i-1][j] == data[i][j]){
					data[i-1][j] = data[i][j]*2;
					data[i][j] = 0;
					oneTime = 0;
				}
			}
		}
	}	
}
	
function moveRight(){
	for(n = 0;n<=2;n++){
		for(i = 2;i>=n;i--){
			for(j = 0;j<=3;j++){
				if(data[i+1][j] == 0){
					data[i+1][j] = data[i][j];
					data[i][j] = 0;
				}
				if(data[i+1][j] != 0 && data[i+1][j] == data[i][j]){
					data[i+1][j] = data[i][j]*2;
					data[i][j] = 0;
				}
			}
		}
	}
}	
function moveUp(){
	for(n = 3;n>=1;n--){
		for(i = 1;i<=n;i++){
			for(j = 0;j<=3;j++){
				if(data[j][i-1] == 0){
					data[j][i-1] = data[j][i];
					data[j][i] = 0;
				}
				if(data[j][i-1] != 0 && data[j][i-1] == data[j][i]){
					data[j][i-1] = data[j][i]*2;
					data[j][i] = 0;
				}
			}
		}
	}
}	
function moveDown(){
	for(n = 0;n<=2;n++){
		for(i = 2;i>=n;i--){
			for(j = 0;j<=3;j++){
				if(data[j][i+1] == 0){
					data[j][i+1] = data[j][i];
					data[j][i] = 0;
				}
				if(data[j][i+1] != 0 && data[j][i+1] == data[j][i]){
					data[j][i+1] = data[j][i]*2;
					data[j][i] = 0;
				}
			}
		}
	}
}	
