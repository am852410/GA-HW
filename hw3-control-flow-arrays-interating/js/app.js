//EASY GOING
for(let i = 1; i <= 20; i++){
  console.log(i)
}

for(let i = 0; i <=200; i += 2){
  console.log(i)
}

//FIZZ BUZZ
for(let i = 1; i <=100; i++){

  if( i % 3 === 0 && i % 5 === 0){
     console.log("FizzBuzz")
  } else if(i % 5 === 0){
     console.log("Buzz")
  } else if(i % 3 === 0){
    console.log("Fizz")
  } else {
    console.log(i)
  }

}

// WILD WILD LIFE
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//1.
plantee[2] = plantee[2] + 1
//2.
wolfy[3] = "Gotham City"
//3.
dart.push("Hawkins")
//4.
wolfy.shift()
wolfy.unshift("Gameboy")
// wolfy[0] = "Gameboy"

// YELL AT THE NINJA TURTLES
//1.
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

//2.
// console.log(ninjaTurtles[ninjaTurtles.length -1])

 // for(let i = 0; i <= ninjaTurtles.length -1; i++){
//  console.log(ninjaTurtles[i].toUpperCase())
//}

for (const element of ninjaTurtles) {
  console.log(element.toUpperCase());
}

// METHODS, REVISITED

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story',
'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life',
'Snatch', 'Fast and Furious'];


console.log(favMovies.indexOf('Titanic'))

//1.
favMovies.sort();       // This rearranged the elements in the array in alphabetical order. This alters it permanently moving foward.

//2.
favMovies.pop();

//3.
favMovies.push("Guardians of the Galaxy");

//4.
favMovies.reverse();

//5.
favMovies.shift();

//6
 // console.log(favMovies.unshift("Robin Hood")) // It returns the new number of elements inside the array

//7
// console.log(favMovies.indexOf('Django Unchained'))

const idxDjango = favMovies.indexOf('Django Unchained')

favMovies.splice(idxDjango, 1, "Avatar") // When logged, this returns the index number and changes the selected index element to "Avatar"
// The original array will be modofied with the new element, "Avatar"

//8.

// console.log(favMovies)

// console.log(favMovies.slice(favMovies.length / 2, favMovies.length)); // When logged, this returns the last half of the array starting from the median.
// The original array will not be modified.

//9.
const favMovies2 = favMovies.slice(favMovies.length / 2, favMovies.length) // created a new variable that equals our slice code from the array favMovies

console.log(favMovies2) // When we log it, it gives us the modified array length from favMovies.

//10.
console.log(favMovies)

console.log(favMovies2.indexOf('vus')) // Fast and Furious was never removed from the array, but when I console.log
 // the index of something thats not in the array I get -1.

// You can't completely reassign a const variable, but we can manipulate its value.

// WHERE IS WALDO (AGAIN)

const whereIsWaldo = [["Picard", "Riker"], "Data",
                    ["Beverly", "Guinan", "Q", "Geordi"],
                    ["Deanna", ["Worf", "Wesley"]]];

//*
const idxData = whereIsWaldo.indexOf("Data")

whereIsWaldo.splice(idxData, 1)
console.log(whereIsWaldo)

//*
whereIsWaldo[1][2] = "No One"

console.log(whereIsWaldo)

//*
console.log(whereIsWaldo[2][1][1])

// EXCITED KITTEN

//1.
const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away...",
"Love me, pet me! HSSSSSS!"]

for(let i = 1; i <= 20; i++){
  console.log(kittyTalk[3])

//2.
if(i % 2 === 0){

  const randomNumber = Math.floor(Math.random() * 3)

  console.log(kittyTalk[randomNumber])
  }
}

// FIND THE MEDIAN

//*

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log(nums.sort())

const roundedNumber = Math.floor(nums.length / 2)

console.log(nums[roundedNumber])

// RETURN OF THE CLOSETS

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

//ALIEN ATTIRE

// console.log(kristynsCloset.shift())

// console.log(kristynsCloset)

const kristynsShoe = kristynsCloset.shift()

console.log(kristynsShoe)

console.log(thomsCloset[2].push(kristynsShoe))

console.log(thomsCloset)

// DRESS US UP

console.log("Kristyn will be wearing a" + " " + kristynsCloset[2] + "," + kristynsCloset[0] + " " + "and" + " " + kristynsCloset[3] + ".")

console.log("Thom will be wearing a" + " " + thomsCloset[0][0] + "," + thomsCloset[1][1] + " " + "and" + " " + thomsCloset[2][2] + ".")

console.log("Thom will be wearing a" + " " + thomsCloset[0][3] + "," + thomsCloset[1][0] + " " + "and" + " " + thomsCloset[2][0] + ".")

// DIRTY LAUNDRY

for(let i = 0; i < 6; i++){
  console.log("WHIRR: Now washing" + " " + kristynsCloset[i])
}

// INVENTORY

console.log(thomsCloset[0], thomsCloset[1], thomsCloset[2])
