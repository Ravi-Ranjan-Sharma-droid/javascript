const coding = ["js", "ruby", "python", "cpp", "rb"]

coding.forEach(function (val) {
    console.log(val);

})

coding.forEach((item) => {
    console.log(item);

})

function printMe(item) {
    console.log(item);

}
coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
});