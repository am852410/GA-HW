console.log("Donut Adventure");

// Daring Adventure! - Let's Go!

// Our Hero
// Lets create our Hero class

// Attributes:
// name: set name from parameter in constructor method
// health: initially 100
// objects: use the following object

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.objects = {
      sprinkleSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories"
    ];
  }
  talkSass() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }
  subtractHealth(hitPoints) {
    this.health = this.health - hitPoints;
    return this.health;
  }
  announceHealth() {
    console.log(this.health);
  }

  battle(enemy) {
    const weapons = Object.keys(this.objects);
    console.log(weapons);
    console.log(this.objects);
    const randomWeaponKey = weapons[Math.floor(Math.random() * weapons.length)];
    console.log("HERO: ", enemy);
    const hitPoints = this.objects[randomWeaponKey];
    const newHealth = enemy.subtractHealth(hitPoints);
    console.log(
      "Pizza Rat got hit by " +
        randomWeaponKey +
        "!" +
        " His health is now at " +
        newHealth
    );

    return hitPoints;
  }
}

const dougie = new Hero("Dougie the Donut");
// Methods:
// talkSass: logs one of his catchphrases randomly
// announceHealth: logs his current health
// battle: for now, logs 'i\'m ready to rumble'

dougie.talkSass();
// dougie.battle();
dougie.announceHealth();

// Our Enemy

// Attributes:
// name: set name from parameter in constructor method
// health: initially 100
// objects: use the following object

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.objects = {
      pepperoniStars: 5,
      cheeseGrease: 10
    };
    this.catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer"
    ];
  }
  talkSmack() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }
  subtractHealth(hitPoints) {
    this.health = this.health - hitPoints;
    return this.health;
  }
  announceHealth() {
    console.log(this.health);
  }
  battle(hero) {
    const weapons = Object.keys(this.objects);
    // ["pepperoniStars", "cheeseGrease"]
    const randomWeaponKey = weapons[Math.floor(Math.random() * weapons.length)];
    // "pepperoniStars"
    const hitPoints = this.objects[randomWeaponKey];
    //  "5"
    const newHealth = hero.subtractHealth(hitPoints);

    console.log(
      "Dougie got hit by " +
        randomWeaponKey +
        "!" +
        " His health is now at " +
        newHealth
    );
    return hitPoints;
  }
}

// Methods

// talkSmack: logs one of his catchphrases randomly
const pizzaRat = new Enemy("Pizza Rat");
pizzaRat.talkSmack();

// announceHealth: logs his current health
pizzaRat.announceHealth();

// battle: for now, logs i\'m gonna flatten you like a slice of pepperoni!
pizzaRat.battle(dougie);

// Walking Down the Street

// Now, let's write their story! Dougie is walking down Flat Iron --
// but oh no! He runs into Pizza rat!

// 1. Have Dougie talkSass
dougie.talkSass();

// 2. Have Pizza Rat talkSmack
pizzaRat.talkSmack();

// 3. Have Dougie announceHealth
dougie.announceHealth();

// 4. Have Pizza Rat announceHealth
pizzaRat.announceHealth();

// Battle!

// Things have escalated between Dougie and Pizza Rat!

// 1. Upgrade their battle methods so that it accesses one of their objects and console log its hitpoints.
// Bonus!! Utilize the name of each weapon by accesing the object's keys.

console.log(pizzaRat.battle(dougie));

console.log(dougie.battle(pizzaRat));

// 2. Keep upgrading this battle method to accept an argument called enemy so that when you call on the
// battle method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.battle(pizzaRat))

// 3. Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our battle method subtracts
// from their health. Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health
// (i.e. If Dougie battles Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
// Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')

// Now, they can battle!

// 1. Have Pizza Rat battle Dougie

pizzaRat.battle(dougie);

// 2. Have Dougie battle Pizza Rat

dougie.battle(pizzaRat);

// 3. Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!
dougie.announceHealth();

pizzaRat.announceHealth();
