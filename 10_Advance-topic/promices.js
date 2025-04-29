const promiseOne = new Promise(function (resolve, reject) {
  // async task , db call, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("completed task 2");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("task 3");
    resolve({
      name: "ravi ranjan sharma",
      age: "19",
      email: "rr2436310@gmail.com",
      username: "@nr_snorlax",
    });
  }, 1000);
});

promiseThree.then(function (value) {
  console.log(value);
  console.log(value.username);
  console.log(value.age);
  console.log(value.email);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let Error = 1;
    if (!Error) {
      resolve({
        subject: "Star",
      });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

// promiseFour.then(function (ho) {
//     console.log(ho);
// }).catch(function (no) {
//     console.log(no)
// })

promiseFour
  .then((something) => {
    console.log(something);
    return something.subject;
  })
  .then((something2) => {
    console.log(something2);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("finally your code do something");
  });
// ---------------------------------------------------------------------------------
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let Error = 1;
    if (!Error) {
      resolve({
        lang1: "javascript",
        lang2: "java",
        lang3: "python",
      });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch {
    console.log("error aa gaya bro");
  } finally {
    console.log("working on error...");
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //   console.log(response)
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log("error occur", error);
  }
}

getAllUsers();
//---------------------------------------------------------------------------------------

fetch("https://api.github.com/Ravi-Ranjan-Sharma-droid")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
.catch((error) => {
  console.log(error);
})