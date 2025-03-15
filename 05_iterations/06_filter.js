// const coding = ["js", "ruby", "python", "cpp", "rb"];

// const values = coding.forEach((man) => {
//     // console.log(man);
//     return man
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 9, 0];

// let newNums = myNums.filter((num) => num > 4);
// let newNums = myNums.filter((num) => {
//    return num > 4
// });

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

// console.log(newNums);

const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: 1972,
    edition: 2004,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-Fiction",
    publish: 1980,
    edition: 2010,
  },
  {
    title: "Dune",
    genre: "Science Fiction",
    publish: 1990,
    edition: 2015,
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    genre: "Fantasy",
    publish: 2000,
    edition: 2020,
  },
  {
    title: "The Girl with the Dragon Tattoo",
    genre: "Mystery",
    publish: 2010,
    edition: 2021,
  },
  {
    title: "Gone Girl",
    genre: "Thriller",
    publish: 2015,
    edition: 2022,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 2020,
    edition: 2023,
  },
  {
    title: "The Shining",
    genre: "Horror",
    publish: 2021,
    edition: 2024,
  },
];

let userBooks = books.filter((bk) => bk.genre === "Horror");
userBooks = books.filter((bk) => bk.genre === "Thriller");
userBooks = books.filter((bk) => {
  return bk.edition >= 2020 && bk.genre === "Horror";
});
console.log(userBooks);
