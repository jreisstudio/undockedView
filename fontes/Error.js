function Error(_messageJSON){

var messageJSON = _messageJSON;
	
this.showError = function (messageKey){
	alert(messageJSON[messageKey]);
}
}