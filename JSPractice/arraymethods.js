//1. map
let numbers = [1, 2, 3, 4];
let doubleNumber = numbers.map((e) => e * 5);
console.log(doubleNumber)

// fahrenheit to celcius converter
let fahTemp = [32, 68, 86, 104, 212];

function fahToCel(fah) {
    return (fah - 32) * (5 / 9); // Formula
}

let celTemp = fahTemp.map(fahToCel);
console.log(celTemp)


//2. filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = nums.filter((e) => e % 2 === 0);
console.log(evenNums)

let employee = [
    { name: "Mushfiq", age: 35, gender: "male" },
    { name: "Ashik", age: 25, gender: "male" },
    { name: "Saika", age: 30, gender: "female" },
    { name: "Waseka", age: 28, gender: "female" },
    { name: "Asif", age: 38, gender: "male" }
];

let maleEmployeeOver25 = employee.filter((emp) => {
    return emp.gender === "male" && emp.age > 25;
});

console.log(maleEmployeeOver25)