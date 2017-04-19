function responseHandler(){
    body=JSON.stringify(output,4);
    var http=new XMLHttpRequest();
    var url = "http://localhost:8080/fid-CIMQueryInterface?SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
    var params = "SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	http.open("POST", url,false);
	 //Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/json");
	 http.onreadystatechange = function(){ //Call a function when the state changes.
		    if(http.status == 200){
		 	http.responseText;
			var res =http.responseText;
			res=JSON.parse(res);
		    document.getElementById("outputArea").value=JSON.stringify(res,null,2);	 
		}
	}
	http.send(body);

}