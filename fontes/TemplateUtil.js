function TemplateUtil(_container, _waitingDiv,_errorMessages){
	var container = _container;
	var waitingDiv = _waitingDiv;
	var errorMessages = _errorMessages;
	var error = new Error(_errorMessages);
	
	setDefaultValues = function(){
		if(container == null){
			container = "#container";
		}
		if (waitingDiv == null){
			waitingDiv = "#waiting";
		}
		if(errorMessages == null){
			messageError = {"loadTemplate":"Error Loading Template","loadJSONSource":"Error Loading JSON source." };
			error = new Error(messageError);
		}
	}
	this.createTemplate= function(templateObject){
		//set the default values when nothing is  passed on the constructor
		setDefaultValues();
		// show the "waiting" div.
		$(waitingDiv).show();
		// get the Mustache template.
		template =""
		if(templateObject.getTemplateString() !=undefined ){
			template =templateObject.getTemplateString(); 
		}else{
			//get the Mustache Template by an ajax calling
			$.ajax({
				url: templateObject.getTemplateFile()}).done(function(returnObject) { 
				template = returnObject;
			}) .fail(
					function() { 
						error.showError("loadTemplate"); 
					});
		}
		// get the JSON data, put the data on the got template and set it on the container.
		$.ajax({
			url: templateObject.getDataSource()}).done(function(jsonObject) { 
				output = Mustache.render(template, jsonObject);
				$(container).empty();
				$(container).append(output);
				$(waitingDiv).hide();

			}).fail(function() {
				error.showError("loadJSONSource"); 
			});
	}

}