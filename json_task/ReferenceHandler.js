function referenceHandler(root,x,op){
	var refValue="";
	if(Array.isArray(root[x])){
		var refArrLength=root[x].length;
		var refVal=x;
		var refArrItr=0;
		for(;refArrItr<refArrLength;refArrItr++){
			var refElement=root[refVal][refArrItr];
			var refName=refElement.Name;
			refElement.Name="";
			refValue=refElement.Type;
			var refObject={};
			refObject["create"]={}
			nestedCreator(refValue,refObject["create"]);
			var http = new XMLHttpRequest();
			//var url = "http://localhost:8080/fid-CIMQueryInterface?SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
			createUrl=document.getElementById('createUrl').value;
			var params = "SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
			http.open("POST", createUrl,false);
			http.setRequestHeader("Content-type", "application/json");
			http.onreadystatechange = function(){ 
				if(http.status == 200){
					http.responseText;
					var res =http.responseText;
					res=JSON.parse(res);
					op[refName]=res.Create[refValue].sid;		
				}
			}
			http.send(JSON.stringify(refObject));	
		}
	} else if(Object.isObject(root[x])){

		var obj={}
		obj.create={}
		nestedCreator(root[x].Type,obj.create);
		var http = new XMLHttpRequest();
		//var url = "http://localhost:8080/fid-CIMQueryInterface?SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
		createUrl=document.getElementById('createUrl').value;
		var params = "SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
		http.open("POST", createUrl,false);

		http.setRequestHeader("Content-type", "application/json");
		http.onreadystatechange = function(){ 
			if(http.status == 200){
				http.responseText;
				var res =http.responseText;
				res=JSON.parse(res);
				op[root[x].Name]=res.Create[root[x].Type].sid;		
			}
		}
		http.send(JSON.stringify(obj));	
	}

	return op;
}