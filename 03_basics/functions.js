function first() {
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
}

//first()

//***********************************************************************

function addTwoNumbers(N1, N2, N3) {
    console.log(N1 + N2 + N3)
}

addTwoNumbers(3, 5, "a")   // 8a
addTwoNumbers(3, 5,)       // NaN
addTwoNumbers(3, 5, null)  // 8
addTwoNumbers(3, 5, 6)     // 14
addTwoNumbers(3, 5, "6")   // 86
addTwoNumbers(3, "5", 6)   // 356
addTwoNumbers("3", 5, 6)   // 356

// **********************************************************************

function Addition(A, B, C) {
    //let result = A + B + C
    //return result
    //console.log("ravi"); // never print

    return A + B + C

}

const result = Addition(1, 3, 3)
console.log("Result: ", result);

//************************************************************************

function loginUserMessage(username = "Ram "){ // now i defined username wiith Ram, now  username will never be undefined
    //if(!username){
    if(username === undefined){
        console.log("You have to fill your username first")
        return
    }
    return`${username}just logged in`
}

console.log(loginUserMessage("Ravi Ranjan"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())

