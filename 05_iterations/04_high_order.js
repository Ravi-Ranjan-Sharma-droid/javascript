const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key, ":-",myObject[key]);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key) // 01234
}

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")  
map.set('USA', "United States of America")

for (const key in map) {
    console.log(key) // 
}

