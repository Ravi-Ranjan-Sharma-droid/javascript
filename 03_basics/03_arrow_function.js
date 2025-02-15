const user = {
    username: "Snorlax",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}`, `welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "Ravi"
user.price = 9999
user.welcomeMessage()

//console.log(this);  //{}

function window(){
    console.log(this)
}
window()

/*

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}

*/


function info(){
    let word = "pokemon"
    console.log(this.word) // undefined
}
info()



const goat = function(){
    let  username = "teamrocket"
    console.log(this.username) //undefined
}
goat()



const port = () => {
    let  username = "teamrocket"
    console.log(this.username) // undefined
    console.log(this) // {}
}

port()
/*
const addTwo = (num1, num2) => {
    return num1 + num2 
} */
//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => ({usernamae: "snorlax"})

const addTwo = (num1, num2) => (num1 + num2) // no need to write return if u used  ()-->parentheses.

console.log(addTwo(5,5))


//eg:-
//const myArray = [2, 4, 6, 6, 7, 9]
//myArray.forEach(() => ())