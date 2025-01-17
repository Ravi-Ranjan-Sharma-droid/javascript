const Name = "Ravi"
const repoCount = 10

// console.log (Name + repoCount + "value") --> old method 
console.log(`Hello my name is ${Name} and my repo Count is ${repoCount}`);

const gameName = new String("Ravi-Ranjan")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "  ravi  "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https//google.com"
console.log(url);
console.log(url.replace("google", "github"));
console.log(url.includes("google"));
console.log(url.includes("github"));

console.log(gameName.split("-"))


