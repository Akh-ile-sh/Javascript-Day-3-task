// //1) four variables without assigning values and print them in console
// var myVar1, myVar2, myVar3, myVar4;
// console.log(myVar1, myVar2, myVar3, myVar4);

// 2)
var myVar = 1;
console.log(myVar);

//3)
let firstName = "John";
let lastName = "Doe";
let maritalStatus = "Single";
let country = "USA";
let age = 25;

//4)
let firstName1 = "John",
  lastName1 = "Doe",
  maritalStatus1 = "Single",
  country1 = "USA",
  age1 = 25;

//5)
let stringValue = "Hello, World!"; // String
let booleanValue = true; // Boolean
let undefinedValue = undefined; // Undefined
let nullValue = null; // Null

//6
//Using parseInt()
let stringNumber = "123";
let integerNumber1 = parseInt(stringNumber);

console.log(integerNumber1); // Output: 123

// Using Number()
let stringNumber1 = "123";
let integerNumber2 = Number(stringNumber1);

console.log(integerNumber2); // Output: 123

//Using the Plus Sign (+)
let stringNumber2 = "123";
let integerNumber3 = +stringNumber2;

console.log(integerNumber3); // Output: 123

//7)
let truthyString = "Hello";
if (truthyString) {
  console.log("Truthy!"); // This will be executed
}
