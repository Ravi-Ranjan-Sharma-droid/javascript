// Primitive

// 7 types : String, Number, Null, Boolean, Undefine, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 132498796534524313462n



// Reference (not primitive)

// Array, Objects, Functions

const heros = ["spiderman", "batman", "ironman"]
let myObj = {
    name: "Ravi",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);