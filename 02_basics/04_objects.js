// const instagramUser = new object();
const instagramUser = {};
instagramUser.id = "nr_snorlax";
instagramUser.name = "Snorlax";
instagramUser.followers = 100;
instagramUser.isLoggedin = true;


console.log(instagramUser);

const regularUser = {
    email: "rr2436310@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Ravi Ranjan",
            lastName: "Sharma"}
    }
}

console.log(regularUser.fullname.userfullname.firstName);   

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {6: "a", 9: "b"}

// const obj3 = (obj1, obj2)
// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign(obj1, obj2); // merge two objects into one object 
// const obj3 = Object.assign({},obj1, obj2, obj4); 
const obj3 = {...obj1, ...obj2, ...obj4}; // merge two objects into one object
// console.log(obj3);

const users = [
    {
        id: 1,
        name: "Ravi",
        email: "rr2436310@gmail.com",
    },
    {
        id: 2,
        name: "snorlax",
        email: "snorlax@gmail.com",
    },
    {
        id: 3,
        name: "Ravi Ranjan",
        email: "raviranjn@gmail.com",
    },
]
users[1].name
console.log(instagramUser); 
console.log(Object.keys(instagramUser)); // return all keys
console.log(Object.values(instagramUser)); // return all values
console.log(Object.entries(instagramUser)); // return all keys and values


console.log(instagramUser.hasOwnProperty("name")); // return true or false
console.log(instagramUser.hasOwnProperty("log")); // return true or false


const course = {
    courseName: "JavaScript",
    prise: "599",
    courseInstructor: "Snorlax",
    courseDuration: "6 months",
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: inst} = course
console.log(inst);

// const navbar= ({company}) =>
// { }
// navbar(company = "Snorlax");

// {
//     name: "Ravi",
//     courseName: "JavaScript",
//     prise: "free",
// }


[
    {},
    {},
    {},
]