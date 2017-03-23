output={"create": { } };
modelName="";
nestedJson={};
len=0;
val="";
dataValue="";
nameVal=Array(15);
//nameVal[0]=;
nesting=false;
index=0;
objectFormat=false;
cardinality=false;
ignore=false;
dataTypes=['String','Double','DateTime','Boolean','Number']
ignorable=['Default',"ReadOnly","Constant","Eq","Transient"]

function getObjectFormat(){
	return objectFormat;  
} 
function setObjectFormat(objectFormat){
	objectFormat=objectFormat;
}
function getCardinality(){
	return cardinality;
}
function setCardinality(cardinality){
	cardinality=cardinality;	
}

function getDataValue(){
	return dataValue;
}

function setDataValue(dataValue){
	dataValue=dataValue;
}

function setIgnore(ignore){
	ignore=ignore;
}

function getIgnore(){
	return ignore;
}

function getLen(){
	return len;
}

function setLen(len){
	len=len;
}
function getOutput(){
     return output;
}

function setOutput(output){
   output=output;
}