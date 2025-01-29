/*
//************Array*************
// An array is a special variable, which can hold more than one value at a time.
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
const Myarray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const Myitems = ["pen", "pencil", "book", "bag", "bottle"];

const Myarray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(Myarray[0]);

//************Access Methods*************

Myarray.push(11)// add element at last
Myarray.push(12)
Myarray.push(13)
Myarray.pop() // remove last element

// Myarray.unshift(15) // add first element
// Myarray.shift() // remove first element

console.log(Myarray.includes(11)) // check element is present or not;
console.log(Myarray.indexOf(19)) // check element is present or not;

const newarray = Myarray.join() // convert array to string

console.log(Myarray);
console.log(newarray);
*/

//************Slice, Splice*************
const Testarray = [1, 2, 3, 4, 5, 6];

console.log("A", Testarray);

const myn1 = Testarray.slice(1, 3); // slice(start, end)
console.log(myn1);
console.log("B", Testarray);


const myn2 = Testarray.splice(1, 3); // splice(start, count)
console.log(myn2);
console.log("C", Testarray);






