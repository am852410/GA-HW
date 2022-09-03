console.log("Classes & Donut Adventure");

// CREATING CLASSES

// HAMSTER

// attributes:
// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    return "squeak squeak";
  }
  eatFood() {
    return "nibble nibble";
  }
  getPrice() {
    return this.price;
  }
  updateOwner(name) {
    this.owner = name;
    return this.owner;
  }
}

const tonyTheHamster = new Hamster("tony");
console.log(tonyTheHamster);

// methods:
// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

console.log(Hamster);
console.log(tonyTheHamster.wheelRun());
console.log(tonyTheHamster.eatFood());
console.log(tonyTheHamster.getPrice());

// PERSON

// attributes:
// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  getHeight() {
    return this.height;
  }
  greet() {
    return "Antonio Mendoza";
  }
  getMood() {
    return this.mood;
  }
  getBankAccount() {
    return this.bankAccount;
  }
  eat() {
    this.weight = this.weight + 150;
    this.mood = this.mood + 5;
  }
  exercise() {
    this.weight = this.weight - 30;
  }
  ageUp() {
    this.age = this.age + 34;
    this.height = this.height + 5;
    this.weight = this.weight + 50;
    this.mood = this.mood - 1;
    this.bankAccount = this.bankAccount + 10;
  }
  getHamster() {
    return this.hamsters;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood = this.mood + 10;
    this.bankAccount = this.bankAccount - hamster.getPrice();
  }
  ageBy(num) {
    this.age = this.age + num;
  }
}

// methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the
// value of the hamster (hint: use getPrice())

const antonioMendoza = new Person("Antonio Mendoza");

console.log(antonioMendoza.getName());
console.log(antonioMendoza.getAge());
console.log(antonioMendoza.getWeight());
console.log(antonioMendoza.greet());
antonioMendoza.eat();
console.log(antonioMendoza.getWeight());
console.log(antonioMendoza.getMood());
antonioMendoza.exercise();
console.log(antonioMendoza.getWeight());
antonioMendoza.ageUp();
console.log(antonioMendoza.getAge());
console.log(antonioMendoza.getHeight());
console.log(antonioMendoza.getWeight());
console.log(antonioMendoza.getMood());
console.log(antonioMendoza.getBankAccount());
antonioMendoza.buyHamster(tonyTheHamster);
console.log(antonioMendoza.getHamster());
console.log(antonioMendoza.getMood());
console.log(antonioMendoza.getBankAccount());

// CREATE A STORY WITH YOUR PERSONS CLASS

// 1. Instantiate a new Person named Timmy

const humanTimmy = new Person("Timmy");
console.log(humanTimmy);

// 2. Age Timmy five years
humanTimmy.ageBy(5);
console.log(humanTimmy.getAge());

// 3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already.
// Have him eat five times.
for (i = 0; i < 5; i++) {
  humanTimmy.eat();
}
console.log(humanTimmy);

// 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to
// feel better before starting. Have him exercise five times
for (i = 0; i < 5; i++) {
  humanTimmy.exercise();
}
console.log(humanTimmy);

// 5. Age Timmy 9 years
humanTimmy.ageBy(9);
console.log(humanTimmy.getAge());

// 6. Create a hamster named "Gus"

const gusTheHamster = new Hamster("Gus");
console.log(gusTheHamster);

// 7. Set Gus's owner to the string "Timmy"

console.log(gusTheHamster.updateOwner("Timmy"));

// 8. Have Timmy "buy" Gus
humanTimmy.buyHamster(gusTheHamster);
console.log(humanTimmy);

// 9. Age Timmy 15 years

humanTimmy.ageBy(15);
console.log(humanTimmy.getAge());

// 10. Have Timmy eat twice

for (i = 0; i < 2; i++) {
  humanTimmy.eat();
}
console.log(humanTimmy);

// 11. Have Timmy exercise twice

for (i = 0; i < 2; i++) {
  humanTimmy.exercise();
}
console.log(humanTimmy);
