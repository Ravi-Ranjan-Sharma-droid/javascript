const Marval_Heroes = ['spiderman', 'ironman','hulk'];
const DC_Comics = ['batman', 'superman', 'wonderwoman'];

Marval_Heroes.push(DC_Comics) // add element at last

console.log(Marval_Heroes);
console.lg(Marval_Heroes[3][1]);

// const All_Heroes = Marval_Heroes.concat(DC_Comics);   // concat() method is used to join two or more arrays.
console.log(All_Heroes);     

const All_Heroes = [...Marval_Heroes, ...DC_Comics];   // concat() method is used to join two or more arrays.
console.log(All_Heroes);

const Another_Arrays = [ 1, 2, 3, [4, 5, 6],[ 7, 8, 9,[10, 11, 12]]];
const Real_Another_Arrays = Another_Arrays.flat(Infinity); // flat() method is used to flatten the array.

console.log(Real_Another_Arrays);


Array.isArray("snorlax") // check array or not    
console.log(Array.isArray("snorlax"));
console.log(Array.from("snorlax"));
console.log(Array.from({name: "snorlax"})); // convert object to array

let Score1 = 100
let Score2 = 100
let Score3 = 100

console.log(Array.of(Score1, Score2, Score3)); // convert object to array