function formatSelector(root,x,objectFormat){
	if(root[x].includes("ObjectFormat")){
		objectFormat=true;
	}
	else {
		objectFormat=false;
	}
	return objectFormat;
}