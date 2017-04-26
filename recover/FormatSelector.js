function formatSelector(root,x){
	objectFormat=false;
	if(Array.isArray(root[x]) ){
       if(root[x][0].includes("ObjectFormat") ){
		   objectFormat=true;
	   }
	   else if(root[x][0].includes("DateFormat")){
	   	   setDateFormat(true);
	   }
	} else if(root[x].includes("ObjectFormat")){
		objectFormat=true;
	} else if(root[x].includes("DateFormat")){
		setDateFormat(true);
	}
	return objectFormat;
}