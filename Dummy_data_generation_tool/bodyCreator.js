function bodyCreator(modelName){
	var data={};
	data["Show"]={};
	data["Show"][modelName]=null;
	data["SetResponse"]={};
	data["SetResponse"]["Message"]={};
	data["SetResponse"]["Message"]["Value"]={};
	data["SetResponse"]["Message"]["Value"]["Include"]="$Response.Message.Value.Show.Result/*/*[name()!='Action']";
	JSON.stringify(data);
	return data;
}