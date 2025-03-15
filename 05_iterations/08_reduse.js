const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//   console.log(`acc: ${accumulator} and curVal: ${currentValue}`);

  // acc: 0 and curVal: 1
  // acc: 1 and curVal: 2
  // acc: 3 and curVal: 3

//   return accumulator + currentValue;
// }, 0); // set accumulator value is 0


const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator+currentValue, 0)

console.log(myTotal); // 6



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
