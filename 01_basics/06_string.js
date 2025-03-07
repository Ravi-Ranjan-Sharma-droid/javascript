const Name = "Ravi"
const repoCount = 10

// console.log (Name + repoCount + "value") --> old method 
console.log(`Hello my name is ${Name} and my repo Count is ${repoCount}`);
          // Hello my nane is Ravi and my repo Count is 10

const gameName = new String("Ravi-Ranjan")

console.log(gameName[0]);                 //  R
console.log(gameName.__proto__);          //  {}

console.log(gameName.length);             //  11
console.log(gameName.toUpperCase());      //  RAVI-RANJAN
console.log(gameName.charAt(2));          //  v
console.log(gameName.indexOf("i"));       //  3

const newString = gameName.substring(0, 4)
console.log(newString);                   //  Ravi

const anotherString = gameName.slice(-9, 4) // vi
console.log(anotherString);

const newStringOne = "  ravi  "        //   ravi
console.log(newStringOne);             // ravi
console.log(newStringOne.trim());

//***********************************************************************

const url = "https//google.com"
console.log(url);    //   https//google.com
console.log(url.replace("google", "github"));    // https//github.com
console.log(url.includes("google"));   //  true
console.log(url.includes("github"));   // false

console.log(gameName.split("-"));      // [ 'Ravi', 'Ranjan']


