
alert("Welcome! Please view console on your browser!")

var fullName = "Kevin Loumeau";
var number = 10;
var number2 = "11";
var admin = false;

console.log(name+number+number2);

console.log(10 + 1);
console.log(9 + 2);
console.log(11 - 0);
console.log(15 - 4);
console.log(21 - 10);

var countries = ["Australia","Spain","England","Mexico"];

console.log(countries[0]);
console.log(countries.length);
console.log("The current time is:" + new Date());

var currentHour = new Date().getHours()
console.log(currentHour)
	if (currentHour == 11) {
		var msg = "it is 11 now"
		} else {
		var msg = "it is not 11 yet"
		}
	console.log(msg);
          
 if (fullName.length - 1 <= 9) {
 	var response = "My name is relatively short."
 } else if (fullName.length - 1 >= 14) {
 	var response = "My name is relatively long."
 } else	{
 	var response = "My name is neither short nor long."
 }

 console.log(response);