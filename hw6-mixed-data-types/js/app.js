console.log("Mixed Data Types");

// 1. Data Types

// A light switch that can be either on or off.
// BOOLEAN
let lightSwitch = true;
console.log(lightSwitch);
lightSwitch = false;
console.log(lightSwitch);

// A user's email address.
// STRING
const emailAddress = "antoniomendoza@codechampion.com";

// A spaceship with a hull, laser blasters, tractor beam,
// and warp drive.
// ARRAY
const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"];

// A list of student names from our class.
// ARRAY
const students = ["Debbie", "Sarah", "Seamus", "Bredell"];

// A list of student names from our class, each with a location.
// ARRAY OF OBJECTS
const studentsLocation = [
  {
    firstName: "Debbie",
    location: "Hawaii"
  },
  {
    firstName: "Sarah",
    location: "Denver"
  },
  {
    firstName: "Seamus",
    location: "Ireland"
  }
];

// A list of student names from our class, each with a location and each
// with a list of favorite tv shows.
//ARRAY OF OBJECTS
const studentTvShows = [
  {
    firstName: "Bredell",
    location: "New York",
    tvShows: ["Law and Order", "The Simpsons", "House"]
  },
  {
    firstName: "Antonio",
    location: "San Diego",
    tvShows: ["The Office", "Clone Wars", "Mandalorian"]
  }
];

// 2. Take it Easy
// Make an array that holds all of the colors of the rainbow.
const colorsOfTheRainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

// Write code that will access "blue" from the rainbow array.
console.log(colorsOfTheRainbow[4]);

// Make an object that is called your name and holds the
//information about your favorite food, a hobby, the name of
//the town that you live in currently, and your favorite datatype.

const antonioMendoza = {
  favoriteFood: "mexican food",
  hobby: "urban farming",
  townILiveIn: "Point Loma",
  favoriteDataType: "Objects"
};

// Write code that will access your hobby from the object that you
// just created.

console.log(antonioMendoza.hobby);

// 3. Crazy Object!

const crazyObject = {
  taco: [
    {
      meat: "steak",
      cheese: ["panela", "queso", "chihuahua"]
    },
    {
      meat: "chicken",
      salsa: [
        "pico",
        "hot",
        "hotter",
        "really hot",
        "really really hot",
        "omg my mouth is burning"
      ]
    }
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: [
      "Pretty pretty prettayyyyy good",
      "Is that a parkinson's thing?",
      "women love a self confident bald man",
      "I'm a walking talking enigma"
    ],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      }
    ]
  }
};

// Use crazyObject to log the following:

// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

// 4. Object-ception

// With the following object:

const inception = {
  reality: {
    dreamLayer1: {
      dreamLayer2: {
        dreamLayer3: {
          dreamLayer4: {
            dreamLayer5: {
              dreamLayer6: {
                limbo: "Joseph Gordon Levitt"
              }
            }
          }
        }
      }
    }
  }
};

// Change the value of limbo to null.

function changeValue() {
  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
}
changeValue();
console.log(
  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5
    .dreamLayer6.limbo
);

// 5-7. Bond Films

// Copy the following bondFilms array of objects above into your js file.
// Use loops and conditionals and functions in order to complete the below:

const bondFilms = [
  {
    title: "Skyfall",
    year: 2012,
    actor: "Daniel Craig",
    gross: "$1,108,561,008"
  },
  {
    title: "Thunderball",
    year: 1965,
    actor: "Sean Connery",
    gross: "$1,014,941,117"
  },
  {
    title: "Goldfinger",
    year: 1964,
    actor: "Sean Connery",
    gross: "$912,257,512"
  },
  {
    title: "Live and Let Die",
    year: 1973,
    actor: "Roger Moore",
    gross: "$825,110,761"
  },
  {
    title: "You Only Live Twice",
    year: 1967,
    actor: "Sean Connery",
    gross: "$756,544,419"
  },
  {
    title: "The Spy Who Loved Me",
    year: 1977,
    actor: "Roger Moore",
    gross: "$692,713,752"
  },
  {
    title: "Casino Royale",
    year: 2006,
    actor: "Daniel Craig",
    gross: "$669,789,482"
  },
  {
    title: "Moonraker",
    year: 1979,
    actor: "Roger Moore",
    gross: "$655,872,400"
  },
  {
    title: "Diamonds Are Forever",
    year: 1971,
    actor: "Sean Connery",
    gross: "$648,514,469"
  },
  {
    title: "Quantum of Solace",
    year: 2008,
    actor: "Daniel Craig",
    gross: "$622,246,378"
  },
  {
    title: "From Russia with Love",
    year: 1963,
    actor: "Sean Connery",
    gross: "$576,277,964"
  },
  {
    title: "Die Another Day",
    year: 2002,
    actor: "Pierce Brosnan",
    gross: "$543,639,638"
  },
  {
    title: "Goldeneye",
    year: 1995,
    actor: "Pierce Brosnan",
    gross: "$529,548,711"
  },
  {
    title: "On Her Majesty's Secret Service",
    year: 1969,
    actor: "George Lazenby",
    gross: "$505,899,782"
  },
  {
    title: "The World is Not Enough",
    year: 1999,
    actor: "Pierce Brosnan",
    gross: "$491,617,153"
  },
  {
    title: "For Your Eyes Only",
    year: 1981,
    actor: "Roger Moore",
    gross: "$486,468,881"
  },
  {
    title: "Tomorrow Never Dies",
    year: 1997,
    actor: "Pierce Brosnan",
    gross: "$478,946,402"
  },
  {
    title: "The Man with the Golden Gun",
    year: 1974,
    actor: "Roger Moore",
    gross: "$448,249,281"
  },
  { title: "Dr. No", year: 1962, actor: "Sean Connery", gross: "$440,759,072" },
  {
    title: "Octopussy",
    year: 1983,
    actor: "Roger Moore",
    gross: "$426,244,352"
  },
  {
    title: "The Living Daylights",
    year: 1987,
    actor: "Timothy Dalton",
    gross: "$381,088,866"
  },
  {
    title: "A View to a Kill",
    year: 1985,
    actor: "Roger Moore",
    gross: "$321,172,633"
  },
  {
    title: "License to Kill",
    year: 1989,
    actor: "Timothy Dalton",
    gross: "$285,157,191"
  }
];

// 5. Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.

const bondTitles = [];
for (let arrayIndex = 0; arrayIndex < bondFilms.length; arrayIndex++) {
  bondTitles.push(bondFilms[arrayIndex].title);
}
console.log(bondTitles);

// 6. Create a new array oddBonds, of only the Bond films released on odd-numbered years.

const oddBonds = [];
for (let i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i].year % 2 == 1) {
    oddBonds.push(bondFilms[i]);
  }
}
console.log(oddBonds);

// 7. Determine the total cumulative gross of the Bond franchise, and console.log the result.
let num = 0;
for (let i = 0; i < bondFilms.length; i++) {
  // gross: "285157191"
  const grossNo$ = bondFilms[i].gross.replace("$", "");
  const grossNoComma = grossNo$.replace(",", "");
  const grossAsNumber = parseInt(grossNoComma);
  num = num + grossAsNumber;
}
console.log(num);
