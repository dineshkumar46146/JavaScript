function fieldValidation(field) {
	var formField = document.forms["signupForm"][field];
	if(!formField.checkValidity()) {
		document.getElementById(field + "-error").innerHTML = formField.validationMessage;
	} else {
		document.getElementById(field + "-error").innerHTML = "";
	}
	console.log(formField.checkValidity(), field + "-error")
}