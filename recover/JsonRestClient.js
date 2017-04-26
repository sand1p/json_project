
function dummyCreator(modelName){
	console.log(modelName);
	data=bodyCreator(modelName);
	console.log("data :", data);
	var http = new XMLHttpRequest();
	//var url = "http://localhost:8080/fid-CIMQueryInterface?SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
    showUrl=document.getElementById('showUrl').value
	var params = "SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	http.open("POST", showUrl, false);
	http.setRequestHeader("Content-type", "application/json");
	http.onreadystatechange = function(){
		if(http.status == 200){
			http.responseText;
			var res =http.responseText;
			res=JSON.parse(res);
			console.log("result :",res);
			if(res.Name !='undefined'){
				output["create"]={};
				output["create"][res.Name]={}
				iterate(res,res["Name"],output["create"][res.Name]);
			}else {
				iterate(res,"Show",output["create"]);
			}
			console.log(" output : " , output); 	
			if(output.create.undefined!=undefined){
				document.getElementById("outputArea").value=modelName+" Invalid query";	 
			}
			else {
				document.getElementById("outputArea").value=JSON.stringify(output,null,2);
			}
		}
	}
	http.send(JSON.stringify(data));
}