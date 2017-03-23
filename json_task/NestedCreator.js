function nestedCreator(nestedModelName){
 data=bodyCreator(nestedModelName);
 nestedOutput={}
	console.log("data :", data);
	var http = new XMLHttpRequest();
	var url = "http://localhost:8080/fid-CIMQueryInterface?SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	var params = "SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	http.open("POST", url, true);
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/json");
	http.onreadystatechange = function(){ //Call a function when the state changes.
		if(http.readyState == 4 && http.status == 200){
			http.responseText;
			var res =http.responseText;
			res=JSON.parse(res);
			console.log("nested  result :",res);
			if(res["Name"]!=undefined){
				nestedOutput[res["Name"]]={};
				nameVal[index]=res["Name"];
				index++;
				//nesting=true;
				iterate(res,res["Name"],nestedOutput[res["Name"]]);
			}else {
			    iterate(res,"",nestedOutput);
			}
			console.log("nested output :"+JSON.stringify(nestedOutput));
			return nestedOutput;
		}
	}
	http.send(JSON.stringify(data));
}	
