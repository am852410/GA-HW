//FUNCTIONS

//Verbal QUESTION
// 1. What is the difference between a parameter and an argument?

// PARAMETERS are assigned with variable names
// and are used to represent the arguments.

// ARGUMENTS are the values utilized to call
// for the function.

// 2. Within a function, what is the difference between return and console.log?

// RETURN value is used just as a variable value.
// console.log logs whats inside the log.

//PALINDROME
//1.

function checkPalindrome(possiblePalindrome) {
  // convert the string to an array
  const split = possiblePalindrome.split("");
  // reverse()
  split.reverse();
  // the reversed array will be converted into a string join()
  const reverseString = split.join("");
  // check to see if both strings are equal to each other
  return possiblePalindrome === reverseString;
}
console.log("palindrome", checkPalindrome("tacocat"));
console.log("not palindrome", checkPalindrome("taco"));

//SUM ARRAY

function sumArray(arrayNumbers) {
  let sum = 0;
  for (i = 0; i <= arrayNumbers.length - 1; i++) {
    const num = arrayNumbers[i];
    sum = num + sum;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

//DIGIT SUM

function sumDigits(numbers) {
  const digitNumbers = numbers.toString();
  const digitsArray = digitNumbers.split("");
  let sum = 0;
  for (i = 0; i < digitsArray.length; i++) {
    const numString = digitsArray[i];
    const num = parseInt(numString);
    sum = num + sum;
  }

  return sum;
}
console.log("sum-digit: ", sumDigits(92));

//PRIME NUMBERS

//STEP ONE
function checkPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("check-prime: ", checkPrime(6));

//STEP 2

function printPrimes(num) {
  const primeNumbers = [];
  for (let i = 1; i <= num; i++) {
    const isPrime = checkPrime(i);
    if (isPrime === true) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

console.log("check-print: ", printPrimes(97));

// ROCK PAPER SCISSORS

//1.
function randomMove() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

console.log("random move: ", randomMove());

//2.
function rockPaperScissors(computersMove, userMove) {
  if (computersMove === "rock") {
    if (userMove === "paper") {
      return "paper beats rock, user wins!";
    }
  }
  if (computersMove === "rock") {
    if (userMove === "scissors") {
      return "rock beats scissors, computer wins!";
    }
  }
  if (computersMove === "rock") {
    if (userMove === "rock") {
      return "it's a tie!";
    }
  }
  if (computersMove === "paper") {
    if (userMove === "paper") {
      return "it's a tie!";
    }
  }
  if (computersMove === "paper") {
    if (userMove === "scissors") {
      return "scissors beats paper, user wins!";
    }
  }
  if (computersMove === "paper") {
    if (userMove === "rock") {
      return "paper beats rock, computer wins!";
    }
  }
  if (computersMove === "scissors") {
    if (userMove === "paper") {
      return "scissors beats paper, computer wins!";
    }
  }
  if (computersMove === "scissors") {
    if (userMove === "scissors") {
      return "it's a tie!";
    }
  }
  if (computersMove === "scissors") {
    if (userMove === "rock") {
      return "rock beats scissors, user wins!";
    }
  }
}
let computersMove = randomMove();
let userMove = randomMove();
console.log(rockPaperScissors(computersMove, userMove));
