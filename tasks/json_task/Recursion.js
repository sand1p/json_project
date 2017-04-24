function iterate(root,label,op){
	 //if(ignorable.includesroot.)
	 var chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	 setCardinality(false);
	 for(x in root){
	 	if(ignorable.includes(x)){
	 		cardinality=false;
	 		ignore=true;
	 		continue;	
	 	}
	 	if(x == 'Cardinality' && root[x]!="" && !ignore){
	 		len1=cardinalityChecker(root,x);
	 		setLen(len1);
	 	}
	 	else if(x == 'Format') {
	 		objectFormat=formatSelector(root,x);
	 	}
	 	else if(x == 'Reference'){
	 		setReference(true);
	 		referenceHandler(root,x,op);
	 		console.log("REferenfce  output : ", JSON.stringify(op));
	 		//setReference(false);
	 	}
	 	else if(x == 'Attribute'){
	 		setAttribute(true);
	 		if(Array.isArray(root[x])){
	 			attrLen=root[x].length;
	 			attrVal=x;
	 			for(attr=0;attr<attrLen;attr++){
	 				if(root[attrVal][attr].Name=='sid'){
	 					//op["sid"]="sid";
	 					continue;
	 				}
	 				if(root[attrVal][attr].Default!=undefined){
	 					continue;
	 				}
	 				parentTagName=root[attrVal][attr].Name;
	 				root[attrVal][attr].Name="";
	 				op[parentTagName]={};
	 				nestedRootTagName=parentTagName;
	 				iterate(root[attrVal][attr],parentTagName,op[parentTagName]);

	 				if(isEmpty(op[nestedRootTagName])){

	 					if(!isEmpty(getNestedOutput()) ){
	 						op[nestedRootTagName]=nestedOutput;
	 						//	op=nestedOutput;
	 						setNestedOutput({});
	 					}else if(cardinality){
	 						if(objectFormat){
	 							arr=Array(len)
	 							for(keys=0;keys<len;keys++){
	 								objects={};
	 								objects[nestedRootTagName]=nestedRootTagName+(keys+1);
	 								arr[keys]=objects[nestedRootTagName];
	 								
	 								//arr[keys][nestedRootTagName]=nestedRootTagName;
	 							}
	 							op[nestedRootTagName]=arr;
	 							objectFormat=false;
	 						}
	 						else {
	 							arr=Array(len)
	 							for(keys=0;keys<len;keys++){
	 								arr[keys]=nestedRootTagName+(keys+1);
	 							}  
	 							op[nestedRootTagName]=arr;
	 						}
	 						cardinality=false;
	 					}  
	 					else if(objectFormat){
                      			//key=root[x];
                      			op[nestedRootTagName]={};
                      			objectFormat=false;

                      		} else if(dateFormat){
                      			op[nestedRootTagName]=dataValue;    
                      			setDateFormat(false);
                      		}
                      		else{
                      			if(dataValue==""){
                      				op[nestedRootTagName]=nestedRootTagName;
                      			}else {
                      				op[nestedRootTagName]=dataValue;
                      			}
                      		}
                      	}  
                      	ignore=false;                         } 
                      }
                   //   setAttribute(false);
               }
               else if(dataTypes.includes(x)){
               	dataValue=dataGenerator(x);
               	val=x; 
               	if(Array.isArray(root[x])){
               		n=root[x].length;
               		strObj={};
               		if(cardinality){
               			for(arrLen=0;arrLen<len1;arrLen++){
               				strObj={};
               				for(i=0;i<n;i++){	  
               					if(dataValue!=''){
               						strObj[root[val][i].Name]=dataValue;
               					} else {
               						strObj[root[val][i].Name]=root[val][i].Name;
               					}
               					ignore=false;
               				}
               				objArray[arrLen]=strObj;
               			}
               			op=objArray;
               		}else {
               			if(root[x].Name != undefined){

               				parentTagName=root[x].Name;
               				op[parentTagName]={};
               				root[x].Name="";
               				for(p=0;p<n;p++){	   
               					iterate(root[val][p],label,op[parentTagName]);
               					ignore=false;
               				}	
               			}else {
               				for(q=0;q<n;q++){	   
               					iterate(root[val][q],label,op);
               					ignore=false;
               				}
               			}
               		}	
               	}
               	else if(Object.isObject(root[x])){
               		iterate(root[x],label,op);
               	}
               }
               else if(x=='Name'){
               	if(!ignore && root[x]!=""){
               		if(cardinality){
               			if(objectFormat){
               				arr=Array(len)
               				for(keys=0;keys<len;keys++){
               					if(dataValue!=""){
               						objects[root[x]]=dataValue;
               					}else {
               						objects[root[x]]=root[x]+(keys+1);
               					} 
               					arr[keys]=objects[root[x]];
               				}
               				op[root[x]]=arr;
               				objectFormat=false;
               			}
               			else {
               				arr=Array(len)
               				for(keys=0;keys<len;keys++){
               					if(dataValue!=""){
               						arr[keys]=dataValue;  
               					}else {
               						arr[keys]=root[x]+(keys+1);
               					}
               				}  
               				op[root[x]]=arr;
               			}
               			cardinality=false;
               		}else if(objectFormat){
		                    //key=root[x];
		                    op[root[x]]={};
		                    objectFormat=false;
                           //	}else if(nesting){ 
           				//		op[root[x]]=nestedJson;
							//		nesting=false;
						}else if(root[x]!=modelName){ 
							if(dataValue==""){
								if(root[x]!='providerId'){
									op[root[x]]=root[x];
								}else {
									var rString = randomString(32, chars);
									op[root[x]]=rString;
								}
							}else {
								op[root[x]]=dataValue;
							}	
						}
					}
					else if(!nesting){
						ignore=false;
						cardinality=false;
						objectFormat=false;
					}
				}
				else if(x=='sid'){
					continue;
				}
				else if(Object.isObject(root[x])){
					if(root[x].Name!=undefined){
						parentTagName=root[x].Name;
						root[x].Name=""; 
						if(root[x].Cardinality!=undefined){
							nesVal=x;
							rootTagName=parentTagName;
							len=cardinalityChecker(root[x],"Cardinality");
							root[x].Cardinality="";
							cardinality=false;
							//nestedCardinality=true;
							if(len==1){
								op[rootTagName]={};
								iterate(root[nesVal],parentTagName,op[rootTagName]);
							}else if(len==2){
								nesArray=Array(len);
								for(r=0;r<len;r++){
									nesArray[r]={}
								}
								iterate(root[nesVal],parentTagName,nesArray[0]);
								if(len==2){
									nesArray[1]=nesArray[0];
								}     
								op[rootTagName]=nesArray; 
							}
							//nestedCardinality=false;
						} else {
							op[parentTagName]={};
							iterate(root[x],parentTagName,op[parentTagName]);
						}
					}
				}else if(Array.isArray(root[x])){
					m=root[x].length;
					valx=x;
					if(root[x].Name!=undefined){
						parentTagName=root[valx].Name;
						op[parentTagName]={};
						for(j=0;j<m;j++){
							//console.log("array values : ",root[valx][j]);
							root[x].Name=""; 
							iterate(root[valx][j],label,op[parentTagName]);
							ignore=false;
						}
					}
					else {
						for(j=0;j<m;j++){

							//console.log("array values : ",root[valx][j]);
					/**
                      Parent tag name but it can't be helpful for the 
                      */
                      if(root[valx][j].Name!=undefined){
                      	parentTagName=root[valx][j].Name;
                      	op[parentTagName]={};
                      	root[valx][j].Name="";
                      	iterate(root[valx][j],parentTagName,op[parentTagName]);
                      }
                      else {
                      	iterate(root[valx][j],label,op);
                      }
                      ignore=false;
                  }
              }
          }
          else if(x=='Value'){
          	nestedModelName=root[x];
          	nestedCreator(nestedModelName,op);
          	nesting =true;
          }
      }
  }
