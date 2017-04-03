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
			//if(flag==0){
				if(res["Name"]!=undefined){
					parentTagName=res["Name"];
					nestedOutput[parentTagName]={};
					res["Name"]="";
				    //nesting=true;
				    iterate(res,parentTagName,nestedOutput[parentTagName]);

				    /*if(isEmpty(nestedOutput[parentTagName])){
				    	dataArr=nestedModelName.split(".");
				    	flag=1;
				    	nestedOutput[parentTagName]=nestedCreator(dataArr[0]);
				    }
*/				}else {
					iterate(res,"",nestedOutput);
				}
				console.log("nested output :"+JSON.stringify(nestedOutput));
				//alert("sdfdsfsdfsd");
			    document.getElementById("myTextArea").value =JSON.stringify(nestedOutput);
			    return nestedOutput;
			//}
			/*else {
                for(x in res){
                	if(dataTypes.includes(x)){
                		dataValue=dataGenerator(x);
            	  		if(Array.isArray(res[x])){
                             arrLength=res[x].Length;
                             for(i=0;i<arrLength;i++){
                                if(){
                                    
                              	}
                            }
            	  		}
            	    }       
                }
				flag=0;
			}*/
		}
	}
	http.send(JSON.stringify(data));
}	
