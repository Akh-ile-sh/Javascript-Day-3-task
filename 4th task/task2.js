//1. Square of a Number:
function square(number) {
  return number * number;
}

console.log(square(5)); // Output: 25

//2. Swapping 2 Numbers:
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("After swapping: a =", a, "b =", b);

//3. Addition of 3 Numbers:
function addThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(addThreeNumbers(3, 5, 7)); // Output: 15

//4. Celsius to Fahrenheit Conversion:
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(25)); // Output: 77

//5. Meter to Miles:
function meterToMiles(meter) {
  return meter * 0.000621371;
}

console.log(meterToMiles(1000)); // Output: 0.621371

//6. Pounds to Kg:
function poundsToKg(pounds) {
  return pounds * 0.453592;
}

console.log(poundsToKg(10)); // Output: 4.53592

//7. Calculate Batting Average:
function battingAverage(runs, innings) {
  return runs / innings;
}

console.log(battingAverage(3000, 75)); // Output: 40

//8. Calculate Five Test Scores and Print Their Average:
let testScores = [80, 75, 90, 85, 88];
let average =
  testScores.reduce((total, score) => total + score, 0) / testScores.length;

console.log("Average Test Score:", average);

//9. Power of any Number x ^ y:
function power(x, y) {
  return Math.pow(x, y);
}

console.log(power(2, 3)); // Output: 8

//10. Calculate Simple Interest:
function simpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

console.log(simpleInterest(1000, 5, 2)); // Output: 100

//11. Calculate Area of an Equilateral Triangle:
function equilateralTriangleArea(side) {
  return (Math.sqrt(3) / 4) * Math.pow(side, 2);
}

console.log(equilateralTriangleArea(5)); // Output: 10.825317547305486

//12. Area of Isosceles Triangle:
function isoscelesTriangleArea(base, height) {
  return (base * height) / 2;
}

console.log(isoscelesTriangleArea(6, 8)); // Output: 24

//13. Volume of Sphere:
function sphereVolume(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

console.log(sphereVolume(3)); // Output: 113.09733552923254

//14. Volume of Prism:
function prismVolume(baseArea, height) {
  return baseArea * height;
}

console.log(prismVolume(10, 5)); // Output: 50

// 15. Find Area of a Triangle:
function triangleArea(base, height) {
  return (base * height) / 2;
}

console.log(triangleArea(8, 6)); // Output: 24

//16. Calculate Discount of Product:
function calculateDiscount(actualCost, soldCost) {
  return actualCost - soldCost;
}

console.log(calculateDiscount(100, 70)); // Output: 30

//17. Circle Properties (Diameter, Circumference, Area):
function circleProperties(radius) {
  let diameter = 2 * radius;
  let circumference = 2 * Math.PI * radius;
  let area = Math.PI * Math.pow(radius, 2);

  return { diameter, circumference, area };
}

console.log(circleProperties(5));

//18. Arithmetic Operations on Two Numbers:
let num1 = 10;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

//19. Display Asterisk Pattern:
let numberOfRows = 5;
let asteriskPattern = "";

for (let i = 0; i < numberOfRows; i++) {
  for (let j = 0; j < numberOfRows; j++) {
    asteriskPattern += "*";
  }
  asteriskPattern += "\n";
}

console.log(asteriskPattern);

//20. Calculate Electricity Bill:
function calculateElectricityBill(powerConsumed, ratePerUnit) {
  return powerConsumed * ratePerUnit;
}

console.log(calculateElectricityBill(100, 10)); // Output: 1000
