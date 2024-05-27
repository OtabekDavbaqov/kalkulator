var num1 = +prompt("birinchi raqam")
var amal = prompt("amal")
var num2 = +prompt("ikkinchi raqam")
var result;
if (amal === "+") {
  result = num1 + num2;
} else if (amal === "-") {
  result = num1 - num2;
} else if (amal === "*") {
  result = num1 * num2;
} else if (amal === "/") {
  result = num1 / num2;
} else {
  var s = prompt("Invalid operator.");
}
console.log(result);