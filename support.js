function getPos(j){
	return 4+22*j + "vw";
}
function generateNum(){
	var a = parseInt(Math.random()*4);
	var b = parseInt(Math.random()*4);
	while(data[a][b] != 0){
		a = parseInt(Math.random()*4);
		b = parseInt(Math.random()*4);		
	}
	data[a][b] = Math.random()>0.5?2:4;
}
function getColor(num){
	switch (num) {
	case 0:
		return "#ccc0b3";
		break;
    case 2:
        return "#eee4da";
        break;
    case 4:
        return "#eee4da";
        break;
    case 8:
        return "#f26179";
        break;
    case 16:
        return "#f59563";
        break;
    case 32:
        return "#f67c5f";
        break;
    case 64:
        return "#f65e36";
        break;
    case 128:
        return "#edcf72";
        break;
    case 256:
        return "#edcc61";
        break;
    case 512:
        return "#9c0";
        break;
    case 1024:
        return "#3365a5";
        break;
    case 2048:
        return "#09c";
        break;
    case 4096:
        return "#a6bc";
        break;
    case 8192:
        return "#93c";
        break;
    }
    return "black";
}
function checkEnd(){
	for(i = 0;i<=3;i++){
		for(j = 0;j<=3;j++){
			if(data[i][j] == 0)
				return false;
			
		}
	}
	return true;
}
