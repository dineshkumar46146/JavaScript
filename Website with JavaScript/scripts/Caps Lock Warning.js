// caps lock warning
var input = document.getElementById("myinput");
var text = document.getElementById("caps");
input.addEventListener ("keyup", function(event) {
	if (event.getModifierState("CapsLock")) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
});