function responseHandler(){
    body=document.getElementById("outputArea").value;
    //body=JSON.stringify(body,4);
    var http=new XMLHttpRequest();
  //  var url = "http://localhost:8080/fid-CIMQueryInterface?SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
    createUrl=document.getElementById('createUrl').value;
    var params = "SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	http.open("POST", createUrl,false);
	http.setRequestHeader("Content-type", "application/json");
	 http.onreadystatechange = function(){ 
		    if(http.status == 200){
		 	http.responseText;
			var res =http.responseText;
			res=JSON.parse(res);
		    document.getElementById("outputArea").value=JSON.stringify(res,null,2);	 
		}
	}
	http.send(body);
}