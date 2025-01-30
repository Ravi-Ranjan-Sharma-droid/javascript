// singleton 

// object literal

const mySym = Symbol("myKey1");


const JSUser = {
    name: "Ravi",
    "Full name": "Ravi Ranjan Sharma",
    age: 19,
    location: "India",
    isDeveloper: true,
    email: "rr2436310@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["monday", "tuesday", "wednesday"],
    [mySym]: "myKey1"
}

// console.log(JSUser);
console.log(JSUser.email);
console.log(JSUser["age"]);
console.log(JSUser["Full name"]); // if key has space then use this method

console.log(typeof JSUser.mySym);

// console.log(typeof mySym); // return all keys

JSUser.email = "ravi@google.com";
// Object.freeze(JSUser); // freeze object

JSUser.email = "ravi@gpt.com";

console.log(JSUser);





JSUser.greeting = function(){
    console.log("Hello JS User");
}


JSUser.greetingTwo = function(){
    console.log(`Hello JS User: ${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());