//const useremail = ""
//const useremail = "rr2436310@gmail.com"
const useremail = "23745"

if(useremail){
    console.log("got the user email");
}
else{
    console.log("don't have the user email");
}


// falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){}

if (useremail.length === 0){
   console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish coalescing operator (??) : null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
//val1 =  null ?? 10 ?? 55
val1 =  null ?? undefined ?? 55
console.log(val1);


// Terniary operator

//condition ? true : false


const mouseprise = 100
mouseprise <= 80 ? console.log("less than 80") : console.log("more than 80");
