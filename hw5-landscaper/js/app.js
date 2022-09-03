let bankAccount = 0;

function landsScaperStart() {
  let chooseService = "teeth";
  if (Object.keys(businessServices).length == 2) {
    chooseService = prompt(
      "Which service will you be utilizing?",
      "teeth/rusty scissors"
    );
    if (chooseService == "rusty scissors") {
      bankAccount = bankAccount + businessServices.rustyScissors;
    }
  } else if (Object.keys(businessServices).length == 3) {
    chooseService = prompt(
      "Which service will you be utilizing?",
      "teeth/rusty scissors/push lawnmower"
    );
  } else if (Object.keys(businessServices).length == 4) {
    chooseService = prompt(
      "Which service will you be utilizing?",
      "teeth/rusty scissors/push lawnmower/battery-powered lawnmower"
    );
  } else if (Object.keys(businessServices).length >= 5) {
    chooseService = prompt(
      "Which serrvice will you be utilizing?",
      "teeth/rusty scissors/push lawnmower/battery-powered lawnmower/team of starving students"
    );
  }
  if (chooseService == "team of starving students") {
    bankAccount = bankAccount + businessServices.teamOfStarvingStudents;
  }
  if (chooseService == "battery-powered lawnmower") {
    bankAccount = bankAccount + businessServices.batteryPoweredLawnmower;
  }
  if (chooseService == "push lawnmower") {
    bankAccount = bankAccount + businessServices.pushLawnmower;
  }

  if (chooseService == "teeth") {
    bankAccount = bankAccount + businessServices.teeth;
  }

  if (
    bankAccount >= 500 &&
    businessServices.batteryPoweredLawnmower &&
    businessServices.teamOfStarvingStudents == undefined
  ) {
    let teamOfStarvingStudents = prompt(
      "You have enough money to hire a team of starving students, would you like to hire?",
      "Y/N"
    );
    if (teamOfStarvingStudents == "Y") {
      bankAccount = bankAccount - 500;
      businessServices.teamOfStarvingStudents = 250;
      console.log(businessServices);
    }
  } else if (bankAccount == 1000) {
    youWon();
  }
  if (
    bankAccount >= 250 &&
    businessServices.pushLawnmower &&
    businessServices.batteryPoweredLawnmower == undefined
  ) {
    let batteryPoweredLawnmower = prompt(
      "You have enough money to purchase a fancy battery-powered lawnmower, would you like to purchase?",
      "Y/N"
    );
    if (batteryPoweredLawnmower == "Y") {
      bankAccount = bankAccount - 250;
      businessServices.batteryPoweredLawnmower = 100;
      console.log(businessServices);
    }
  }
  if (
    bankAccount >= 25 &&
    businessServices.rustyScissors &&
    businessServices.pushLawnmower == undefined
  ) {
    let pushLawnmower = prompt(
      "You have enough money to purchase an old-timey push lawnmower, would you like to purchase?",
      "Y/N"
    );
    if (pushLawnmower == "Y") {
      bankAccount = bankAccount - 25;
      businessServices.pushLawnmower = 50;
      console.log(businessServices);
    }
  }
  if (bankAccount >= 5 && businessServices.rustyScissors == undefined) {
    let rustyScissors = prompt(
      "You have enough money to purchase a pair of rusty scissors, would you like to purchase?",
      "Y/N"
    );
    console.log(rustyScissors);
    if (rustyScissors == "Y") {
      bankAccount = bankAccount - 5;
      businessServices.rustyScissors = 5;
      console.log(businessServices);
    }
  }
  // GAME HAS ENDED
  playAgainPrompt();
}

const businessServices = {
  teeth: 1
};

function playAgainPrompt() {
  let playAgain = prompt("Do you want to play again?", "Y/N");
  console.log(playAgain);
  console.log(bankAccount);
  if (playAgain == "Y") {
    landsScaperStart();
  }
}

function youWon() {
  let gameOver = alert("YOU WON!!!");
}
