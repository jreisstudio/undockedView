function Template(){
var dataSource
var templateFile;
var templateString;

	this.getDataSource = function(){
		return dataSource;	
	}
	this.setDataSource = function(_dataSource){
	 dataSource = _dataSource;	
	}
	this.getTemplateFile = function(){
		return templateFile;	
	}
	this.setTemplateFile = function(_templateFile){
	 templateFile = _templateFile;	
	}
	this.getTemplateString = function(){
		return templateString;	
	}
	this.setTemplateString = function(_templateString){
	 templateString = _templateString;	
	}
	this.toString = function(){
		retornoString = "dataSource: "+dataSource+" | templateFile: "+templateFile+" | templateString: "+templateString;
		return retornoString;
	}
}