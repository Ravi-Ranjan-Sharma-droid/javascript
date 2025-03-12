// for of loop
["", "", ""]  // string in Array
[{}, {}, {}]  // object in array

const numbers = [1, 2, 3, 4, 5]


for (const num of numbers) {
    console.log(num);

}


const wavelength = ["Radio", "Microwaves ", "Ultraviolet", "X-Rays"]

for (const wave of wavelength) {
    console.log(wave);
}

const greeting = "Hello world"
for (const greet of greeting) {
    console.log(`Each char is${greet}`)
} 

// Map

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")  
map.set('USA', "United States of America")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ":-", value)
}

const myObject = {
    game1: 'COD',
    game2: 'Spiderman',
    game3: 'NFS'
}

for (const [key, value] of myObject) {
    console.log(key, value);
    
} // Not Iterable



