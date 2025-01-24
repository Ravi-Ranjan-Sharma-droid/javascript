/*
const score = 400 
console.log(score);
const balance = new Number(100)
console.log(balance); // used to print the number.
console.log(balance.toString()); // used to convert the number to string.
console.log(balance.toString().length); // used to find the length of the number.
console.log(balance.toFixed(2));  // used to fixed the decimal points.

const otherNumber = 25.3465
console.log(otherNumber.toPrecision(5)); // used to find the precision of the number.

const Hundred = 100000000
console.log(Hundred.toLocaleString("en-in")); // used to convert the number to locale string.

*/
// **********************************************Maths*************************************************************

console.log(Math);
console.log(Math.abs(-100)); // used to find the absolute value of the number.
console.log(Math.round(5.7)); // used to round the number.
console.log(Math.ceil(5.7)); // used to round the number to the next integer.
console.log(Math.floor(5.7)); // used to round the number to the previous integer.
console.log(Math.pow(2, 3)); // used to find the power of the number.
console.log(Math.sqrt(25)); // used to find the square root of the number.
console.log(Math.cbrt(27)); // used to find the cube root of the number.
console.log(Math.min(10, 20, 30, 40, 50)); // used to find the minimum number.
console.log(Math.max(10, 20, 30, 40, 50)); // used to find the maximum number.
console.log(Math.random()); // used to find the random number.
console.log((Math.random()*10)+ 1);
console.log(Math.floor(Math.random()*10)+ 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // used to find the random number between the range.
