// var: old way 
// var and it's scope

var x = 10;
function test() {
    var y = 20;
}
console.log(x);
// console.log(y); -> it will give error as it's in functional scope

var browser = "Chrome";
var browser = "Edge";
browser = "Firefox"; // re initialization of the variable
console.log(browser) //always prints the latest value of the variable

var blank;
console.log(blank) // js will assign undefined value to the var 
blank = "Hello JS!";
console.log(blank) // it will print the value of blank

// Issue with var:
var flag = "Hey Mushfiq";
var x1 = 4;
if (x1 > 3) {
    var flag = "Hey Lenovo!"
}
console.log(flag);
// As the condition is satisfied, flag is assign with "Hey Lenovo!" and we can't access "Hey Mushfiq" anymore.

//constant 

const len = 4;
//len = 5; //it will through assignment error

console.log(len * 100)