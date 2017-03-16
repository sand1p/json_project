function dataGenerator(val){
	dataValue="";
	if(val=='Double'){
		dataValue=45.454;
	}else if(val=='Number'){
		dataValue=345
	}
	else if(val=='Boolean'){
		dataValue=true;  
	}else if(val=='DateTime'){
		dataValue="[:$Now():]";
	}
	return dataValue;	
}