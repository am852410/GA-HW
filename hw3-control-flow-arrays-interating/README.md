[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

#  Arrays, Loops, and Conditional Reps

#### Learning Objectives

- Practice with Arrays
- Practice with Loops
- Practice with Conditionals

#### Prerequisites

- An introduction to JavaScript

#### Recommendations

- If homework is taking you more than 4 hours to complete:
    - Reach out to the instructional team during class time to schedule a 1:1 meeting
    - Don't stress about the Hungry For More section
- If home work is taking you less than 4 hours to complete
    - Work on the Hungry For More section - make the most of your time here and find challenges
    - Help someone who is stuck, teaching is a great way to learn something more in depth
    - Reach out to the instructional team for more challenges/ways to keep growing with your abilities
---

## Getting Started

1) Fork and clone this repo, go into the directory created by the clone, and create a folder structure like we have been.

2) TEST YOUR WORK! Reload your browser after every problem to make sure your code is working, and that it's printing what it should.

3) If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later. You may find some later problems easier or need a break from what you're working on and set some fresh eyes on something you've been stuck on.

4) After each section, *add*, *commit*, and push your work.

5) Use the commit messages that you see at the end of each section. We will see these messages on Github. It will help us to see your progress. If you go back and change a section, commit again with an updated message.

6) Each time you complete a problem and also when you are done with your homework, push it to your `origin` on GHE.

7) When you complete the homework, push once more, and make a Pull Request.

### Easy Going
* Write a for loop that will log the numbers 1 through 20.

<hr>
&#x1F534; The commit message should read: <br>
"Easy Going answered"
<hr>

#### Get Even
* Write a for loop that will log only the even numbers in 0 through 200.
>Hint: Think about the increment expression.

<hr>
&#x1F534; The commit message should read: <br>
"Get Even answered"
<hr>


### Fizz Buzz

This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

1. Write a javascript application that logs all numbers from 1 - 100.

2. If a number is divisible by 3 log "Fizz" instead of the number.

3. If a number is divisible by 5 log "Buzz" instead of the number.

4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

<hr>
&#x1F534; The commit message should read: <br>
"Fizz Buzz answered"
<hr>

### Wild Wild Life
Use the following arrays to answer the questions below (name,species ,age, hometown):
You should be modifying the elements by accessing them. It is up to you which methods to use.

```js
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
```
1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.

2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

3. Give D'Art a second hometown by adding "Hawkins"

4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the `wolfy` array and replace it with "Gameboy".


<hr>
&#x1F534; The commit message should read: <br>
"Wild Wild Life answered"
<hr>

### Yell at the Ninja Turtles
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

2. Use a `for` loop to call `toUpperCase()` on each of them and print out their name in all caps.

3. Try to replace your for loop with a `for of loop (not a typo - look it up and try it out! As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!)

<hr>
&#x1F534; The commit message should read: <br>
"Yell at the Ninja Turtles answered"
<hr>


### Methods, Revisited

Here is a list of favMovies:

```
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
```

- Console log:  the index of `Titanic`

- Do the following and console.log the final results (We have included some *thought* questions, you don't have to write out an answer for those marked as such):

Note: if you have to add to the array, feel free to add any movie you'd like

 1. Use the `.sort` method. (Look it up). Thought question: what did this do to the array? Did it permanently alter it?
 1. Use the method `pop`
 1. `push` "Guardians of the Galaxy"
 1. Reverse the array. (Look it up).
 1. Use the `shift` method
 1. `unshift` - what does it return?
 1. `splice` out (remove using splice) "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself). Thought question: did this permanently alter our array?
 1. `slice` (Look it up) the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
 1. store the value of your `slice` in a variable, console.log it - Thought question: what is going on here?
 1. console.log your final results

- After running the above tasks, console.log the index of "Fast and Furious"
    -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

- Thought question: that we declared the variable `favMovies` with `const`, and yet, we were allowed to change the array. Weird? Should we have used `let`?
<hr>
&#x1F534; The commit message should read: <br>
"Methods Revisited answered"
<hr>

### Where is Waldo (again)

* With the following multi-dimensional array

```js
const whereIsWaldo = [["Picard", "Riker"], "Data",
                    ["Beverly", "Guinan", "Q", "Geordi"],
                    ["Deanna", ["Worf", "Wesley"]]];
```
* Remove Data (hint look at the slice/splice method(s))
* Change "Q" to "No One"
* Access and console.log "Wesley"

<hr>
&#x1F534; The commit message should read: <br>
"Where is Waldo answered"
<hr>

### Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
2. Add to it so that only for every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.  _It **ALSO** should still log "Love me, pet me! HSSSSSS!" every single time_.


<details><summary>Hint 1</summary>

 Make an array of the kitten's talking points

</details>

<details><summary>Hint 2</summary>

 Use bracket notation to access each talking point
  `kittyTalk[1];`

</details>

<details><summary>Hint 3</summary>
 Rather than hard-coding the array position number set a variable

  ```
    let meow = 0;
    kittyTalk[meow]
  ```

</details>

<details><summary>Hint 4</summary>

You will need to use Math.random() in order to choose a random number and assign this random number to the variable you created (rather than have the variable equal 0)

</details>

<details><summary>Hint 5</summary>

 Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the    Math.random() number so that the range is between 0 and the length of the array

</details>

<details><summary>Hint 6</summary>

 Then round the number by using another Math method like `Math.floor()` or `Math.ceil()` or `Math.round()`

</details>

![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)

<hr>
&#x1F534; The commit message should read: <br>
"Excited Kittens answered"
<hr>


### Find the Median
- Find the median number in the following `nums` array, then console.log that number. (Google median number if you don't know what it is).
-  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`

```
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

Expected output:
=> 15
```

<hr>
&#x1F534; The commit message should read: <br>
"Find the Median answered"
<hr>


### Return of the Closets

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
```

#### Alien Attire
* Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

#### Dress Us Up
* Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

#### Dirty Laundry
Continue looking at the closet arrays:
* Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

#### Inventory
* Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.

<hr>
&#x1F534; The commit message should read: <br>
"Return of the Closets answered"
<hr>

## Hungry for More?

### Triangles

0. declare a variable `argument` and set it equal to 7.

1. Write a loop that console logs a "left isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.

>Ex: `argument` is 7

```
#
##
###
####
#####
######
#######
```

2. Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.  This is deceptively tricky.

>Ex: `argument` is 7

```
      #
     ##
    ###
   ####
  #####
 ######
#######
```


3. Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.

>Ex: `argument` is 7

```
#######
######
#####
####
###
##
#
```

4. Write a loop that console logs an "upside down right" isosceles triangle made of '#' that has the height and length of the argument.  This is also tricky.

>Ex: `argument` is 7

```
#######
 ######
  #####
   ####
    ###
     ##
      #
```

5. Change the value of `argument` and reload your code and marvel at how you just solved a challenging problem and feel proud of yourself.

#### Lab Time Revisited

Choose one that you didn't get to solve in lab

##### Fibonnacci (morning lab)
##### Checkerboard (morning lab)
##### TwoDArray (afternoon lab)

##### Finish all 3 Lab Questions


<hr>
&#x1F534; The commit message should read: <br>
"Hungry for More (problem name)"
<hr>

## Technical Requirements
- A JavaScript file that runs without syntax errors (comment out stuff that doesn't work)
- At least one commit message per problem
