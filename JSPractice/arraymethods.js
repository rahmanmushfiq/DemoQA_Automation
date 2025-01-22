//1. map()
let numbers = [1, 2, 3, 4];
let doubleNumber = numbers.map((e) => e * 5);
console.log(doubleNumber);

// fahrenheit to celcius converter
let fahTemp = [32, 68, 86, 104, 212];

function fahToCel(fah) {
    return (fah - 32) * (5 / 9); // Formula
}

let celTemp = fahTemp.map(fahToCel);
console.log(celTemp);


//2. filter()
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = nums.filter((e) => e % 2 === 0);
console.log(evenNums);

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

console.log(maleEmployeeOver25);

// 3. every() -> Returns true if every element of the array passes the condition
let nms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let flag = nms.every((e) => e < 10);
console.log("Result is: ", flag);

// 4. some() -> Returns true if at least one element of array passes the condition
let result = nms.some((e) => e % 2 === 0);
console.log("Result is: ", result);

/// 5. Find -> Returns the first element of the array which satisfies the condition
let rslt = nms.find((e) => e % 3 === 0);
console.log("First element is: ", rslt);

// 6. indexOf() -> Returns the index of the given array, -1 if not found
let fruits = ["Mango", "Orange", "Banana", "Orange", "Pineapple", "Orange", "Banana"];
let indexOfArr = fruits.indexOf("Pineapple");
console.log("Index of Pineapple is: ", indexOfArr);

// 7. lastIndexOf() -> Returns the last index of the specific element of an array
let lastOrange = fruits.lastIndexOf("Orange");
let lastBanana = fruits.lastIndexOf("Banana");
let lastApple = fruits.lastIndexOf("Apple")
console.log("Last Orange is: ", lastOrange);
console.log("Last Banana is: ", lastBanana);
console.log("Last Apple is: ", lastApple);

// 8. reverse() -> Reverse the array
let age = [10, 25, 33, 55, 65, 90];
let revAge = age.reverse();
console.log("Reverse Age is: ", revAge)

// 9. sort() -> Sort an array alphabetically
let companies = ["ZTE", "Samsung", "British American Tobacco", "Honor", "Apple"];
let sortedCompanies = companies.sort();
console.log("Sorted Companies are: ", sortedCompanies);
