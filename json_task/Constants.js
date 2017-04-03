output={"create": { } };
modelName="";
nestedJson={};
nestedObj={};
parentTagName="";
val="";
objArray=[];
nesArray=null;
dataValue="";
nameVal=Array(15000);
index=0;
nesting=false;
flag=0;
objectFormat=false;
cardinality=false;
nestedCardinality=false;
ignore=false;
dataTypes=['String','Double','DateTime','Boolean','Number','Integer']
ignorable=['Default',"ReadOnly","Constant","Eq","Transient","default"]

if( typeof Array.isArray !== 'function' ) {
	Array.isArray = function( arr ) {
		return Object.prototype.toString.call( arr ) === '[object Array]';
	};
}
if(typeof Object.isObject !=='function'){
	Object.isObject =function(object){
		return Object.prototype.toString.call(object) ==='[object Object]'
	};
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

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