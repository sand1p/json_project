function nestedCreator(nestedModelName,nestedOutput){
	data=bodyCreator(nestedModelName);
	console.log("data :",data);
	var http = new XMLHttpRequest();
	var url = "http://localhost:8080/fid-CIMQueryInterface?SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	var params = "SensorCustomerKey=CDP-All&AppKey=CDP-App&UserKey=CDP-User";
	http.open("POST", url,false);
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/json");
	http.onreadystatechange = function(){ //Call a function when the state changes.
		if(/*http.readyState == 4 && */http.status == 200){
			http.responseText;
			var res =http.responseText;
			res=JSON.parse(res);
			console.log("nested  result :",res);
			if(flag==0){
				if(res.Name!=undefined){
					parentTagName=res.Name;
					//nestedOutput[parentTagName]={};
					res.Name="";
					
					if(res.Format!=undefined){
						formatSelector(res,"Format");
						if(dateFormat){
							dataGenerator("DateTime");
							return;
						}
					}
					if(res.Cardinality!=undefined){
						resArrLen=cardinalityChecker(res,"Cardinality");
						if(resArrLen==2){
							resArr=Array(resArrLen);
							for(i=0;i<resArrLen;i++){
								resArr[i]={};
							}
							iterate(res,parentTagName,resArr[0]);

							if(isEmpty(resArr[0])){
								for(i=0;i<resArrLen;i++){
									if(objectFormat){
								    	 resArr[i][parentTagName+(i+1)]=parentTagName+(i+1);
							        }
							    	else {
                                    	 resArr[i]=parentTagName+(i+1);
							    	} 
								}
							}else {
								resArr[1]=resArr[0];
							}
							nestedOutput=resArr; 
							setNestedOutput(nestedOutput);
						}
					}
				    //nesting=true;
				    if(isEmpty(nestedOutput)){
				    	if(getReference()){
				    		nestedOutput[parentTagName]={};
				    		iterate(res,parentTagName,nestedOutput[parentTagName]);
				    		setNestedOutput(nestedOutput);
				        }else if(getAttribute){
				        	iterate(res,parentTagName,nestedOutput);
				        }
				    }

				    if(isEmpty(nestedOutput)){
				    	dataArr=nestedModelName.split(".");
				    	
				    	flag=1;
				    	nestedCreator(dataArr[0]);
				    }
				}else {
					iterate(res,"",nestedOutput);
				}
				console.log("nested output :"+JSON.stringify(nestedOutput));
			//	document.getElementById("myTextArea").value =JSON.stringify(nestedOutput);
			return ;
		}
		else {
			for(elem in res){
				if(dataTypes.includes(elem)){
					dataValue=dataGenerator(elem);
					if(Array.isArray(res[elem])){
						arrLength=res[elem].length;
						nesVal=elem;
						for(i=0;i<arrLength;i++){
							if(res[nesVal][i].Name==parentTagName){
								if(res[nesVal][i].Cardinality!=undefined){
									len=cardinalityChecker(res[nesVal][i],"Cardinality");
									setLen(len);
									cardinality=true;
									setCardinality(true)
								}
								if(res[nesVal][i].Format!=undefined){
									objectFormat=formatSelector(res[nesVal][i],"Format")
									setObjectFormat(true);
								}
								flag=0;
								return;
							}
						}
					}
				}       
			}
			flag=0;
		}
	}
}
http.send(JSON.stringify(data));
}	
