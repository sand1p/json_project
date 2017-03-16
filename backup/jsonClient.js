function dummyCreator(){
	var data={};
	if(modelName=='LightModel'){
		data["Show"]={};
		data["Show"]["CIM.Light.Data.Light"]=null;
	}
	data["SetResponse"]={};
	data["SetResponse"]["Message"]={};
	data["SetResponse"]["Message"]["Value"]={}
	data["SetResponse"]["Message"]["Value"]["Include"]="$Response.Message.Value.Show.Result/*/*[name()!='Action']"
	JSON.stringify(data);
	
	console.log("data :", data);
	var http = new XMLHttpRequest();
	var url = "http://localhost:8080/fid-CIMQueryInterface?SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	var params = "SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	http.open("POST", url, true);

						//Send the proper header information along with the request
						http.setRequestHeader("Content-type", "application/json");

						http.onreadystatechange = function(){//Call a function when the state changes.
							if(http.readyState == 4 && http.status == 200){
								http.responseText;
								var res =http.responseText;
								res=JSON.parse(res);
								console.log("res : "+res)
								console.log("result :",JSON.stringify(res));
								iterate(res,"Show",output["create"]);
								console.log("output :"+JSON.stringify(output));
							}

						}
						http.send(JSON.stringify(data));
					}