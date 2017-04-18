function nestedObjectArray(root,label, op){     	
	if(cardinality){
		for(arrLen=0;arrLen<len;arrLen++){
			strObj={};
			for(i=0;i<n;i++){	  
				if(dataValue!=''){
					strObj[root[val][i].Name]=dataValue;
				}else {
					strObj[root[val][i].Name]=root[val][i].Name;
				}
			}
			objArray[arrLen]=strObj;
		}
		op[label]=objArray;	
	}	
}