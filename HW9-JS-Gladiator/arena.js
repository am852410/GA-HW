console.log("ARENA");

// Part 2: The Arena

class Arena {
  constructor(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }
  addGladiator(str) {
    colosseum.gladiators.push(str);
    if (colosseum.gladiators.length > 2) {
      colosseum.gladiators.length = 2;
    }
    return colosseum.gladiators;
  }
  fight() {
    const weapon0 = colosseum.gladiators[0].weapon;
    const weapon1 = colosseum.gladiators[1].weapon;
    if (weapon0 === "Spear") {
      if (weapon1 === "Spear") {
        colosseum.gladiators.length = 0;
      }
      if (weapon1 === "Trident") {
        colosseum.gladiators.shift();
      }
      if (weapon1 === "Club") {
        colosseum.gladiators.pop();
      }
    }
    if (weapon0 === "Club") {
      if (weapon1 === "Club") {
        colosseum.gladiators.length = 0;
      }
      if (weapon1 === "Trident") {
        colosseum.gladiators.pop();
      }
      if (weapon1 === "Spear") {
        colosseum.gladiators.shift();
      }
    }
    if (weapon0 === "Trident") {
      if (weapon1 === "Trident") {
        colosseum.gladiators.length = 0;
      }
      if (weapon1 === "Club") {
        colosseum.gladiators.shift();
      }
      if (weapon1 === "Spear") {
        colosseum.gladiators.pop();
      }
    }
  }
}
// An arena has a name
// The name should be capitalized

const colosseum = new Arena("colosseum");

console.log(colosseum.name);

// An arena can have gladiators

console.log(colosseum.gladiators);

// You can add a gladiator to the arena

colosseum.addGladiator(antonio);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators);

// The arena should never have more than 2 gladiators in it at a time

console.log(colosseum.gladiators);
console.log("LEN", colosseum.gladiators.length);

// If there are two gladiators in the arena, you can call a fight method
// that results in the elimination of one of the gladiators from the arena.

// Winning conditions

// Trident beats Spear
// Spear beats Club
// Club beats Trident
// If the two gladiators have the same weapon, they are both eliminated.

colosseum.fight();
console.log(colosseum.gladiators);
