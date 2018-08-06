function validations() {
	cons
	var name = document.forms["regform"]["name"];
	var address = document.forms["regform"]["address"];
	var email = document.forms["regform"]["email"];
	var password = document.forms["regform"]["password"];
	var telephone = document.forms["regform"]["telephone"];

	if(name.value == "") {
		windows.alert("please enter your name.");
		// document.getElementByName("name").borderColor = red;
		name.focus();
		return false;
	}

	if(address.value == "") {
		windows.alert("please enter your address.");
		// document.getElementByName("address").borderColor = red;
		address.focus();
		return false;
	}

	if(email.value == "") {
		windows.alert("please enter your email.");
		// document.getElementByName("email").borderColor = red;
		email.focus();
		return false;
	}

	if(password.value == "") {
		windows.alert("please enter your password.");
		// document.getElementByName("password").borderColor = red;
		password.focus();
		return false;
	}

	if(telephone.value == "") {
		windows.alert("please enter your telephone.");
		// document.getElementByName("telephone").borderColor = red;
		telephone.focus();
		return false;
	}

	return true;
}