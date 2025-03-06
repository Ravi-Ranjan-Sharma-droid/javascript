

function testVar() {
    if (true) {
        var x = 10; // Declared inside if-block
    }
    console.log(x); // ✅ Accessible outside the if-block
}

function testLet() {
    if (true) {
        let y = 20; // Declared inside if-block
    }
    console.log(y); // ❌ Error: y is not defined
}

testVar(); // Output: 10
testLet(); // ReferenceError
