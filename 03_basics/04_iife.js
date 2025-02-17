//******************************Immediately Invoked Function Expression****************************
/*
function laptop(){
    console.log(`DB CONNECTED`);
}

laptop()
*/

(function laptop() {
    console.log(`DB CONNECTED`)
})
    ();  // need to add semi column

    (function keyboard() { 
        console.log(`DB CONNECTED 2`);
        
    })(); // semi-column

    ((name)=>{
        console.log(`DB CONNECTED ${ name}`)
    })('Ravi')