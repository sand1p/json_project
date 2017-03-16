function jsonCreator(nameVal,root,x,op){
	if(!getIgnore() && !nameVal.includes(root[x])){
		if(getCardinality()){
			arr=Array(getLen())
			for(j=0;j<len;j++){
				arr[j]="key";
			}  
			op[root[x]]=arr;
			cardinality=false;
		}else if(objectFormat){
			op[root[x]]={"key":"value"};
			objectFormat=false;
		}else{ 

			if(val=='String'){
				op[root[x]]=root[x];
			}else {

				op[root[x]]=dataValue;
			}

		}
	}
	else{
		ignore=false;
	}
}