var x = document.getElementById("toptobottom");
function animation() {
	x.style.animation = "mymove 1s 2";
}
x.addEventListener("webkitAnimationstart, startFunction");
x.addEventListener("webkitAnimationiteration, repeatFunction");
x.addEventListener("webkitAnimationend, endFunction");
function startFunction() {
	this.innerHTML = "webkitAnimation started here";
	thi.style.backgroundColor = "yellow";
}
function repeatFunction() {
	this.innerHTML = "animation played again";
	thi.style.backgroundColor = "pink";
}
function endFunction() {
	this.innerHTML = "animation end here";
	thi.style.backgroundColor = "orange";
}