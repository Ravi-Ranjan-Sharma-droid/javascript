//for
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        //console.log("5 has been detected");

    }
    //console.log(element);

}

for (let i = 1; i <= 10; i++) {
    //console.log(`Mathamatic table value: ${i}`);
    
   for (let j = 1; j <= 10; j++) {
    const element = j;
    ////console.log(`inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j);
    
   }
    
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        //console.log("5 has been detected");
        break
    }

    //console.log(`value of i is ${i}`);
    
    
}



for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("5 has been detected");
        continue
    }

    console.log(`value of i is ${i}`);
    
    
}