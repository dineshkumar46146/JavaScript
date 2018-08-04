
function myFunction() {
    document.getElementById("panel").style.display = "block";
}
function myFunction1() {
    document.getElementById("panel").style.display = "none";
}
// accordion
var acc = document.getElementsByClassName("accor");
var i;
for (i = 0; i<acc.length; i++) {
	acc[i].addEventListener("click",function() {
		this.classList.toggle("active");
		var panel1 = this.nextElementSibling;
		if (panel1.style.display === "block") {
			panel1.style.display = "none";
		} else {
			panel1.style.display = "block";
		}
	});
}
// bottom to top scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
