function generate(){
	var data = document.getElementById("data").value;
	console.log(data);
	var numArray = data.split(',');
	document.write('<table border="1" cellspacing="0">');
	for(var j=0; j<numArray.length; j++) {
    	document.write("<tr>");
    	for(var i=1;i<10;i++) {
    		document.write("<td>" + num[j] + " x " + i + " = " + num[j]*i + "</td>");
		}
    	document.write("</tr>");
	}
	document.write("</table>");
}