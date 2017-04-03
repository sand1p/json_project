function cardinalityChecker(root,x){
	if(Array.isArray(root[x])){
		arrLen=root[x].Length;   

		if( root[x][arrLen-1][0] ==1){
			arrLen=2 ;
		} 
		else if(root[x][arrLen-1][0] ==0){
			arrLen=1; 
		}
	}
	else if(root[x].arrLength==1){
		arrLen=1;
	}else if(root[x][0]==1){
		arrLen=2;
	}else {
		arrLen=2
		
	}
	cardinality=true;
	return arrLen;
}