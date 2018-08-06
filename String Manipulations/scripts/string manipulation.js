// string using console.log
var name = 'Dhinesh kumar';
document.getElementById("str").innerHTML = name;
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(8, 14));
console.log(name.substr(8, 1));
console.log(name.length);
console.log(name.replace('a', '@'));
var nameBits = name.split('h');
console.log(nameBits);
console.log(nameBits.length);
console.log(nameBits[2]);
// adding two strings
var string1 = "hello";
var string2 = "javascript";
var result = string1 + " " + string2;
var result1 = string1.concat(" ","hello", "world");
console.log(result,result1);
var string3 = "hello";
var string4 = "string";
var result2 = string3.trim() + string4.trim();
console.log(result2);



