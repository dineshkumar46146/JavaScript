function getFormValue() {
	var form = document.forms["registerForm"];
	console.log(form["firstname"].checkValidity());
	if(!form["firstname"].checkValidity()){
		document.getElementById("firstname-error").innerHTML = form["firstname"].validationMessage;
	}
	else {
		document.getElementById("firstname-error").innerHTML = "";
	}
	console.log(form["lastname"].checkValidity());
	if(!form["lastname"].checkValidity()){
		document.getElementById("lastname-error").innerHTML = form["lastname"].validationMessage;
	}
	else {
		document.getElementById("lastname-error").innerHTML = "";
	}
	console.log(form["mobilenumber"].checkValidity());
	if(!form["mobilenumber"].checkValidity()){
		document.getElementById("mobilenumber-error").innerHTML = form["mobilenumber"].validationMessage;
	}
	else {
		document.getElementById("mobilenumber-error").innerHTML = "";
	}

}

	var form = document.forms["registerForm"];
	console.log(form.checkValidity())
	if(!form.checkValidity()) {
		document.getElementById("btn").disabled = true;
	} else {
		document.getElementById("btn").disabled = false;
	}

	function getValidity() {
		var form = document.forms["registerForm"];
		console.log(form.checkValidity());
		if(!form.checkValidity()) {
			console.log("registerForm disable")
			document.getElementById("btn").disabled = true;
		} else {
			console.log("registerForm enable")
			document.getElementById("btn").disabled = false;
		}
	}
