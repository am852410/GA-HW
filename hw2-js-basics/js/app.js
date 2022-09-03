//PART 1
// 1. Concatenations allows you to combine to multuple strings or multiple arrays together.
//Ex:
// let fruit = "bananas";
// console.log("I like" + " " + fruit);

//Interpolation allows one string with multiple variables.
//Ex:
// console.log(`I like ${fruit}`)

// 2. DRY: Don't Repeat Yourself
//DRY code prevents having accidental errors through repetition.
//Alias, While

// 3. Declaring a variable: Use let or const before the variable
//Assigning a value to a variable: Put data in the variable
//We define what value the variable in the declaration holds.

// 4. const is short for constant. It's used when the variable will stay the same.
// let is used when the variable will change.

// 5. It's the directory above the current directory.

// 6. Type man, and then the command.

// 7. Tab completion will take us to directories and files without having to type it entirely.
// It also helps us check to see if they exist.

//PART 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b)
console.log(c > d)
console.log('Kevin' === 'Kevin')
console.log(a + b === c)
console.log(a * a === d)
console.log(e === 'Kevin')
console.log(48 == '48')


//PART 3
// 1. Yes, this is an infinite loop because true is always true. There is no certain
// condition met. A break statement must be used to terminate the loop and move on
// to the next statement.

// 2. If runProgram was declared let, this would NOT be an infinite loop. The condition
// becomes false causing the while loop to stop executing. The condition is met and moves
// on to the next statement. Because runProgram was declared const, this code will not run
// and will give us an error.

// 3.
//let letters is declaring variable "A" inside the Block Scope
 let letters = "A";
//let i is declaring number 0 inside the Block Scope
 let i = 0;
//while loop condition is i < 20
 while (i < 20) {
//while loop statement letters += "A" to be executed
         letters += "A";
//increment statement to be executed and end of the loop once
         i++;
//loop condition is proven false
 }
 //Expected Output: End of loop. i++ will continue to add A until
// it goes over 20
console.log(letters);

 // After running the code, terminal returned 21 A's until the while loop condition was proven
 // to be false. i++ added 1 to 0 until i = 21.

 //PART 4
 // 1. Differences: While loop use existing variables. In For loops you must create a new variable.
 // Similarities: Both loops can execute an infinite loop. Both are used to execute statements repeatedly.

 // 2.
 for (let i = 0; i <= 999; i++) {
   console.log(i)
 }

 // 3.
 //What are the three components of the control statement?
 //The first part of the control statement is: let i = 0; This is defining the initial value of i as 0.
 //The second part of the control statement is: i < 100; This conditional states that if i is less than 100 the loop will run.
 //The third part of the control statement is: i++. Using increment as it's arithmetic operator this equals to i = i + 1.

 // 4.
  for (let i = 999; i >= 0; i--) {
   console.log(i)
 }

 // 5.
 for (let i = 1; i <= 10; i++) {
   console.log(`The value of i is : ${i} of 10`)
 }
