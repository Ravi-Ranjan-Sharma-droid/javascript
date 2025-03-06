let score = "33abc"

console.log(typeof score);  // string
console.log(typeof(score)); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber);        // NaN

// "33" => 33
// "33abc" NaN -> not a number
// true => 1
// false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log(booleanIsLoggedIn); // true
console.log(typeof booleanIsLoggedIn); // boolean

// // 1 => true 
// // 0 => false
// // "" => false 
// // "0" => true
// // "abc" true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);        // 33
console.log(typeof stringNumber); // string



