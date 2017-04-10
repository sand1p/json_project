
function dummyCreator(modelName){
	console.log(modelName);
	data=bodyCreator(modelName);
	console.log("data :", data);
	var http = new XMLHttpRequest();
	var url = "http://localhost:8080/fid-CIMQueryInterface?SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	var params = "SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	http.open("POST", url, false);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/json");

	http.onreadystatechange = function(){//Call a function when the state changes.
		if(/*http.readyState == 4 && */http.status == 200){
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
			console.log("output :"+JSON.stringify(output));


		}

	}
	http.send(JSON.stringify(data));
}