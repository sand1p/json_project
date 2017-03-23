function formatSelector(root,x,objectFormat){
	objectFormat=false;
	if(Array.isArray(root[x]) && root[x][0].includes("ObjectFormat") ){
		objectFormat=true;
	} else if(root[x].includes("ObjectFormat")){
		objectFormat=true;
	}
	return objectFormat;
}