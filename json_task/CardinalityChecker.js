function cardinalityChecker(root,x){
	if(Array.isArray(root[x])){
		len=root[x].length;   

		if( root[x][len-1][0] ==1){
			len=2 ;
		} 
		else if(root[x][len-1][0] ==0){
			len=1; 
		}
	}
	else if(root[x].length==1){
		len=1;
	}else if(root[x][0]==1){
		len=2;
	}else {
		len=1
		
	}
	cardinality=true;
	return len;
}