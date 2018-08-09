function fieldValidation(field) {
	var formField = document.forms["signupForm"][field];
	if(!formField.checkValidity()) {
		document.getElementById(field).className = "borderColor";
	} else {
		document.getElementById(field).className = "";
	}
}