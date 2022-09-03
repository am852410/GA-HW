![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

#  Homework: JS Basics, Loops, and booleans

Class: **SEI**<br>
Creator: Thom Page <br>
Modified by: Kristyn Bryan and Reuben Ayres <br>
Topics: Terminal, boolean expressions, reading code, while loops, for loops <br>

---

### Setup

* In the folder created by the clone, build our folder structure like we did in class.

* Write your answers inside `app.js`.

* For any answers that require a written response, write the response as comments. For example:

  ```javascript
  // 1. The difference between interpolation and
  // concatentation is . . .
  ```

* For coded responses, as you work on them, you may want to comment out everything else but the problem you're working on so that when you load `index.html` in your browser, your console is less cluttered.

* Before submitting, **uncomment your answers** to all coded responses so that the output for each question automatically runs in the terminal. We should not have to edit your code to make the file run.

Good luck!

## Part 1: Terms

1. What is the difference between **interpolation** and **concatenation**? Give an example of each.

2. What does the acronym **DRY** stand for? Why should we pay attention to it? What programming tools have we learned to write **DRY** code?

3. What is the difference between declaring a variable and assigning a value to a variable?  What do we mean when we say "define" a variable?

4. When should we use `const` and when should we use `let`?

5. Unix question: What is a "parent" directory?

6. Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?

7. More Unix: What is "tab completion" and why is it aweseome?

### A reminder about error messages:  

Remember that error messages are your friend. Even experienced developers constantly make syntax errors, they just have gotten faster at fixing them.  They way they got faster at it is by reading error messages over and over and over and learning to understand them.

<br>
<hr>

# :red_circle: Commit and push your updated code:

Add your changes ("stage" them to be "committed"):
```bash
$ git add -A
```

Commit. Commit messages should be brief and describe functionality that is there that wasn't there before.  Remember, also, you can always return the files to that moment in time in your repo.
```bash
$ git commit -m "Completed homework assignment"
```

"Push" your commits to your remote(s) on github/Github Enterprise:
```bash
$ git push origin master
```


## Part 2: Boolean expressions and operators
**... and variable assignment**

- Remember: **Expressions** in JavaScript are anything that can be said to have a _value_.
- Remember: Variable **assignment** is a **right-to-left** operation: the **expression** on the right side of the equal sign gets **evaluated** *AND THEN* put into the variable **declared** on the left side.
- Using the provided variable definitions, replace the blanks with mathematical or boolean operators that make the expression evaluate to `true`.
- Test your answers by using `console.log` in front of each expression in your answer file.

```javascript
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

```

1.  a \_\_ b;
2.  c \_\_ d;           
3.  'Name' \_\_ 'Name';
4.  a \_\_ b \_\_ c;  // (a < b < c is **not** the answer and is **not** valid JS)
5.  a \_\_ a \_\_ d;  // again, the answer is not something "weird," it's an expression that makes sense
6.  e \_\_ 'Kevin';
7.  48 \_\_ '48';

<br>
<hr>

## Part 3: While loops

Increase your **code literacy** by reading code, line by line.  When you read code pretend to _be_ the computer.  It is absolutely essential that you understand what is happening each line of code you write.

### 1. Infinite loop?

Read the following code very carefully.

**DO NOT RUN** the code because it might run an **infinite loop**.

Answer the following question:

* is this an infinite loop? Why or why not?

You cannot test this code, so read it line by line and 'execute' the code in your head.

```js
while (true) {
	console.log('Do not run this loop');
}
```

Infinite or not infinite? Give it a good guess. It is 100% OK if you get it wrong (as long as you don't run the code). It's important to get into the habit of reading code.

### 2. Infinite loop II

* is the following loop an infinite loop? Why or why not?

```javascript
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
```

Inifnite or not infinite? What is the expected output?

### 3. Reading code

Ok rest easy, no more infinite loops for now!

The following while loop uses a **compound assignment** operator `+=`.  There are other compound assignment operators for other mathematical operations.

If you need a refresher on what the compound assignment operator does, have a look back at the afternoon lesson.

_Without running this loop_, what is the expected output?

Read the code line by line—everything happens in sequence. Add a comment before **each** line of code explaining what the line below it does. Then write down what output you expect to see in the console. Be patient with your thought! There is no rush. Time spent to really understand these fundamentals now will pay off a hundred fold in the coming weeks. Today we must master learn how to properly hold and use a knife and how to correctly chop an onion. Later we'll make complex dishes with many ingredients, herbs and spices!

```js
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
```

After coming to a conclusion, run the code and write down whether it gave you the expected result. If not, how did it differ?

<br>
<hr>

## Part 4: Loops!

### 1. `for` loops

Answer the following question:

Both for loops and while loops repeat code.  But what are the differences?  What are the similarities?

### 2. Basic `for` loop

Write a for loop that will `console.log()` the numbers 0 to 999.

### 3. The mechanics of a `for` loop

Here is an example `for` loop that prints a message 100 times:

```javascript
for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
```

What are the three components of the **control statement**? Each component is separated by a semicolon `;`.

Write your answers as comments in the file.  Say what each part does.

* The first part of the control statement is:
* The second part of the control statement is:
* The third part of the control statement is:

### 4. `for` loop in reverse

Using a postfix operator `i--` instead of `i++`, write a *for* loop that iterates in *reverse*: `console.log()` a countdown from 999 to 0.


### 5. More counting

Write a `for` loop that uses **interpolation** to print a message to the console that includes the current value of `i`.

The loop should run from 1 to 10.

Expected output in the console:

```
The value of i is: 1 of 10
The value of i is: 2 of 10
The value of i is: 3 of 10
The value of i is: 4 of 10
The value of i is: 5 of 10
The value of i is: 6 of 10
The value of i is: 7 of 10
The value of i is: 8 of 10
The value of i is: 9 of 10
The value of i is: 10 of 10
```

### :red_circle: Commit and push your work as described above.


# "Hungry for more?"

* Do the first 20 labs of [this git tutorial](http://gitimmersion.com/).

* If you're enjoying that git tutorial, and/or are finding it fascinating, by all means finish it (although it goes beyond anything we'll need in the next couple of weeks).

# Homework submission

Once you've got your homework all done and pushed to github, do a pull request to get it submitted, just like yesterday. If you're still not sure how to do this, reach out to your instructor for help.
