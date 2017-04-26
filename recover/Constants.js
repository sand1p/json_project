output={"create": { } };
modelName="";
nestedJson={};
nestedObj={};
//parentTagName="";
refObject={}
attribute=false;
reference=false;
val="";
objArray=[];
nesArray=null;
dataValue="";
nameVal=Array(15000);
index=0;
nesting=false;
flag=0;
objectFormat=false;
dateFormat=false;
cardinality=false;
nestedOutput={};
nestedCardinality=false;
ignore=false;
len=0;
dataTypes=['String','Double','DateTime','Boolean','Number','Integer']

ignorable=['Default',"ReadOnly","Constant","Eq","Transient","default","geohash","locationId"]

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

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
function getNestedOutput(){
	return nestedOutput;
}
function setNestedOutput(nestedOutputLocal){
	nestedOutput=nestedOutputLocal;
}
function getObjectFormat(){
	return objectFormat;  
} 
function setObjectFormat(objectFormatLocal){
	objectFormat=objectFormatLocal;
}

function getDateFormat(){
	return dateFormat;  
} 
function setDateFormat(dateFormatLocal){
	dateFormat=dateFormatLocal;
}

function getCardinality(){
	return cardinality;
}
function setCardinality(cardinalityLocal){
	cardinality=cardinalityLocal;	
}

function getDataValue(){
	return dataValue;
}

function setDataValue(dataValueLocal){
	dataValue=dataValueLocal;
}

function setIgnore(ignoreLocal){
	ignore=ignoreLocal;
}

function getIgnore(){
	return ignore;
}

function getLen(){
	return len;
}

function setLen(lenLocal){
	len=lenLocal;
}
function getOutput(){
	return output;
}

function setOutput(outputLocal){
	output=outputLocal;
}

function getRefObject(){
	refObject;
}

function setRefObject(refObjectLocal){
     refObject=refObjectLocal;
}
function getAttribute(){
	return attribute;
}

function setAttribute(attributeLocal){
	attribute=attributeLocal;
}
function getReference(){
	return reference;
}

function setReference(referenceLocal){
	reference=referenceLocal;
}

