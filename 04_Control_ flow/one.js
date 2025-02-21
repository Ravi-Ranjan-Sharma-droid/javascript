// logic flow


let age = "38";

//age = Number(age);

if (age >= 18 && age < 99){
    console.log("You are an adult");  
}
else if (age == 0){
    console.log("Are kidding");  
}
else if (age == 100){
    console.log("You are the GOAT");  
}
else if(age < 18){
    console.log("You are a kid");
}
else {
    console.log("error! please fill your correct age.");
}

//********************************************************************************

/*
const score = 200;

if(score > 100){
    let power = "fly"  
}

console.log(`user power: ${power}`); // not print cuz power is not defined
*/

const balance = 1000

if(balance > 500) console.log("Test");

//*****************************************************************************


const laptop = 1;
const headset = 1;
const music = 1;
const brain = 1;

if (laptop && headset && music && brain) {
    console.log("genius");  
} 
else if (laptop && headset && music) {
    console.log("great");
} 
else if (laptop && headset) {
    console.log("fine");
} 
else if (laptop) {
    console.log("it's ok");
}
else{
    console.log("us bro us");
    
}
