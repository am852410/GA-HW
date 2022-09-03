console.log("Arrays with callbacks");

// ARRAY WITH CALLBACKS

const arr = [1, 2, 3, 4];

const arrDoubled = arr.map(tonysNumberMap => {
  return tonysNumberMap * 2;
});

// __________________________

const arrDoubledForLoop = [];
for (let i = 0; i < arr.length; i++) {
  const tonysNumberForLoop = arr[i];
  arrDoubledForLoop.push(tonysNumberForLoop * 2);
}

// SECTION 3 ARRAY METHODS WITH CALLBACKS

// numbers array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// words array
const words = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog"
];

// FOR EACH

// 1. console.log each value of the nums array multiplied by 3

const multArray = nums.map(tonysNumber => {
  return tonysNumber * 3;
});

console.log(multArray);

// 2. console.log each word with an exclamation point at the end of it

const wordsExc = words.map(tonysNumero => {
  return tonysNumero + "!";
});

console.log(wordsExc);

// MAP

// 1. make a new array of each number multiplied by 100

const numsMult = nums.map(tonysNumbah => {
  return tonysNumbah * 100;
});

console.log(numsMult);

// 2. make a new array of all the words in all uppercase

const uppercaseWord = words.map(word => {
  return word.toUpperCase();
});

console.log(uppercaseWord);

// FILTER

// 1. filter the array for numbers less than 4

const lessThanFour = nums.filter(number => {
  return number >= 4;
});

console.log(lessThanFour);

// 2. filter words that have an even length

const evenLength = words.filter(word => {
  return word.length % 2 === 0;
});

console.log(evenLength);
