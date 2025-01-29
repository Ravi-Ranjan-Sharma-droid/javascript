//***********Dates in JavaScript************
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);  //object

let myCreatedDate = new Date(2025, 1, 26);
console.log(myCreatedDate.toDateString());
let myGeneratedDate = new Date("2025-01-26");
console.log(myGeneratedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// newDate.toLocaleDateString('default',
//     {
//         weekday: 'long',
//     } 
// );
