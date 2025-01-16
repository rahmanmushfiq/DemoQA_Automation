//Declaration of an Array

let myArray = []; //An empty array

let lang = ["Java", "C#", "Python"];

//1. Push -> Add elements to an array
lang.push("Ruby", "Go", "Swift");
console.log(lang);

//2. Pop -> Remove the last element from an array
let numbers = [1, 2, 3, 4, 5]; //An array with numbers 
numbers.pop();
console.log(numbers);

//3. Shift -> Remove the first element of an array and return that element
let fruits = ["Mango", "Banana", "Apple"];
let firstFruit = fruits.shift();
console.log("First Fruit: " + firstFruit);
console.log("Fruit Array: " + fruits);

//4. Unshift -> Add one or more element at the beginning of the array and return the newly added elements
let colors = ["Black", "Blue", "White"];
colors.unshift("Yellow", "Cyan");
console.log(colors);

//5. Splice -> It allows to remove and add element from specific index of an array
let animals = ["Cat", "Monkey", "Bear", "Dog"];
animals.splice(1, 1, "Rabbit");
console.log(animals)

//6. Slice -> It will return a new array containing elements from the original array based on the specified start and end index
let pop = [1, 2, 3, 4, 5, 6, 7];
let newPop = pop.slice(1, 4);
console.log(newPop)

//7. Concat -> Combine two or more arrays and return a new array
let fr = ["Mango", "Banana", "Apple"];
let nums = [1, 2, 3, 4, 5, 6, 7];
let mixedArray = fr.concat(nums)
console.log(mixedArray)

//8. IndexOf -> Returns the index number of the first occurance of the element
let color = ["Red", "Green", "Blue", "Green"];
let index = color.indexOf("Green");
console.log(index);

//9. Includes -> Checks if specific element is present in the array and returns true if present, else returns false
let users = ["Admin", "Seller", "Vendor", "Investor"];
let flag = users.includes("Vendor", "Seller")
console.log(flag);

//10. forEach
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach(e => {
    console.log(e * 2)
})