//var c = 300
let a = 47
if (true) {
    let a = 10
    const b = 20
    //var c = 30
    console.log("Inner: ", a);

}

console.log(a);
//console.log(b);
//console.log(c);


function one() {
    const username = "Ravi Ranjan"

    function two() {
        const website = "github"
        console.log(username)
    }

    //console.log(website) error
    two()
}
one()

if (true) {
    const username = "Snorlax"

    if (username === "Snorlax") {
        const website = " github"
        console.log(username + website)
    }

    //console.log(website); // error
}
//console.log(username); // error

// *****************************Intresting**********************************

function addone(num){
    return num + 1
}
console.log(addone(5))


//console.log(addtwo(5))
const addtwo = function(num){
    return num + 2
}


