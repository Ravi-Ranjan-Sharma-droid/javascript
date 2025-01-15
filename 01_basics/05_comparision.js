console.log(2 > 1); // output -> true
console.log(2 >= 1); // output -> true >= operator doesn't require both conditions to be true. It just needs one of them to be true.
console.log(2 < 1); // output -> false
console.log(2 == 1); // output -> false
console.log(2 != 1); // output -> true

console.log("2" > 1);  // output -> true
console.log("02" > 1); // output -> true

console.log(null > 0); // output -> false
console.log(null == 0); // output -> false
console.log(null >= 0); // output -> true

console.log(undefined == 0); // output -> false
console.log(undefined > 0); // output -> false
console.log(undefined < 0); // output -> false

console.log("2" === 2); // output -> false
console.log("2" == 2); // output -> true
