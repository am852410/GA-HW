console.log("Combining Datatypes");

// 1. Create an object, called crayonBox, that has a property that is an array.
// The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
  colors: ["red", "green", "orange", "blue"]
};

console.log(crayonBox.colors[0]);

// 2. Create an object bottle that has a property that is an object: cap. cap can have
// properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of
// the properties of that inner object.

const bottle = {
  cap: {
    material: "metal",
    color: "blue"
  }
};

console.log(bottle.cap.material);

// 3. Create an array called receipt that has at least one object in it. The inner objects
//should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [{ walnuts: 5, eggs: 2, milk: 4 }];

console.log(receipt[0].walnuts);

// 4. Create an array called apartmentBuilding that has an array as one of its elements,
// the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [["john", "rick", "larry"]];

console.log(apartmentBuilding[0][2]);

// Combine objects, arrays, and functions more than one level deep

// 1. Create a function knit that returns an object that has the following kinds of properties item:
// scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property
// on the return value).

function knit() {
  return { item: "scarf", size: "6ft" };
}

console.log(knit().item);

// 2. Create a function crayonSelector that returns an object that has an array (you can reuse your
// crayonBox object). Log one of the elements of that array.

function crayonSelector() {
  return crayonBox;
}

console.log(crayonSelector().colors[1]);

// 3. Create a function powerButton that returns a function called options - options should
// console.log a simple message like select a song. Call that inner function

function powerButton() {
  return function options() {
    console.log("American Girl");
  };
}

console.log(powerButton()());

// Model a Vending Machine

// a vending machine is an object

// it has an array of snacks (make 3 snacks)

// snacks are objects that have a name and a price

// a vending machine has a function vend that allows user to enter the array position (a number)
// of the snack and then that snack will be returned

// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
  snacks: [
    {
      name: "cheetos",
      price: 1
    },
    {
      name: "granola bar",
      price: 2
    },
    {
      name: "beef jerky",
      price: 3
    }
  ],
  vend: function index(snackIndex) {
    return vendingMachine.snacks[snackIndex];
  }
};

const vendSnack = vendingMachine.vend(2);
console.log(vendSnack);

// CALLBACKS

// 1. Make a function add that takes two arguments (numbers) and sums them together and return the total.

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(add(5, 5));

// 2. Make a function subtract that takes two arguments (numbers) and subtracts them and return the total.

function subtract(num1, num2) {
  let minus = num1 - num2;
  return minus;
}

console.log(subtract(10, 5));

// 3. Make a function multiply that takes two arguments and multiplies them and return the total.

function multiply(num1, num2) {
  let mult = num1 * num2;
  return mult;
}

console.log(multiply(6, 6));

// 4. Make a function divide that takes two arguments and divides them and return the total.

function divide(num1, num2) {
  let div = num1 / num2;
  return div;
}

console.log(divide(20, 5));

// 5. Make a function calculate that takes three arguments. Assume the two arguments
// are a number ie num1, num2 and a function called operates (a callback).

function calculate(num1, num2, operates) {
  // 6. Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
  return operates(num1, num2);
}

// 7. Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(10, 10, multiply));
console.log(calculate(20, 20, divide));
console.log(calculate(30, 30, subtract));
console.log(calculate(40, 40, add));

// Function definition placement

// Clean up this code, so that it works and has function definitions in the correct place

const bar = () => {
  console.log("bar here");
};
bar();

// const foo = () => {
//   console.log("foo here");
// };
// foo();

// Error reading

// What is meant by the error(s) this produces?

foo();

const foo ()=>{
    console.log('hi');
}

// The first error is that foo has already been declared above but let's say it hasn't been
// declared, foo() needs to be declared first and called after being declared.
