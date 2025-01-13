const accountId = 12345
let accountEmail = "rr2436310@gmail.com"
var accountPassword = "Wrong Password"
accountCity = "Bokaro"
let accountState; // undefined
// accountId = 2  // not allowed

accountEmail = "rr2342367@gmail.com"
accountPassword = "23456345"
accountCity = "Ranchi"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var because of issue 
in block scope and functional scope
*/