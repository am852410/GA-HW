console.log("Programming Fundamentals");

// COMMENTING CODE
const f = l => {
  // Creating a function called f with l as a parameter. This function is assigning a code block.
  let es = 0,
    // Inside the code block, a let variable called es is giving the value of 0.
    p = 0,
    // Inside the code block, a let variable called p is giving the value of 0.
    c = 1,
    // Inside the code block, a let variable called c is giving the value of 1.
    n = 0;
  // Inside the code block, a let variable called n is giving the value of 0.
  while (c <= l) {
    // Inside the f function, it is running a while loop as long as c <= l.
    n = c + p;
    // Inside the code block of the while loop, n is assigning to c + p.
    [c, p] = [n, c];
    // In these arrays, c element is being assigned to n element and p element is being assigned to c element.
    es += c % 2 === 0 ? c : 0;
    // es = es + (c % 2 === 0 ? c : 0)
    // es is reassigning a value of es + if c divided by 2 and the remainder is 0 then es = es + c
    // if the remainder is not 0 then es = es + 0
  }
  // end of the while loop
  return es;
  // this is returning es as the value of function
};
// end of the function

console.log(f(55));
// This is logging the return of the function. The function is being called with number 55.

const f2 = limit => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit && current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
};

console.log(f2(55));

// Answer these questions with comments:

// Q: In keeping with one of our programming principals (write code for the maintainer):
// What would have been a more semantic name for this function
// (hint: this is a problem we had for either lab or hw and is considered a classic )
//- are there any other variable names or things that would make this code easier to
// read and understand?

// A: We can rename the variable const f2 to const addEvenNumbers
// let previous can be renamed to let previousNumber
// let current can be renamed to let currentNumber

// Q: If you started a new job and your project was to expand the functionality of this
//function by allowing a second argument and then based on that second argument,
// returning the sum of even or odd numbers, which code would you rather start working with f or f2?

// A: I would rather work with f2 since that function is easier to read based off the
// variable names.

// Q: Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line.
// Remove this semi-colon! Run the code, is this semi-colon necessary?

// A: Yes it is necessary. The semi-colon tells that line that the code is over.
// Without the semi-colon you will get a sintax error because the assignment
// will be invalid.
