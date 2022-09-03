console.log("LOTR homework js file is connected");
console.log(
  "HINT: Click on the 'Elements' tab to see the elements that you are creating"
);
console.log("---------------");
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $section = $("<section>"); //<section>
  $section.attr("id", "middle-earth"); //<section id="middle-earth">
  // 2. append the section to the body of the DOM.
  $("body").append($section); //<body><section id="middle-earth"/></body>
  // 3. use a for loop to iterate over the lands array that does the following:
  for (const landName of lands) {
    const $article = $("<article>"); //<article>
    $article.attr("id", landName); //<article id={landName}>
    const $h1 = $("<h1>"); //<h1>
    $h1.text(landName); //<h1>landName</h1>
    $article.append($h1); // <article id={landName}><h1>landName</h1></article>
    $section.append($article); //<section id="middle-earth"><article id={landName}><h1>landName</h1></article></section>
  }
  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  console.log("Make hobbits");

  // 1. display an unordered list of the hobbits in the shire.
  const $ul = $("<ul>"); // <ul>
  for (const hobbitName of hobbits) {
    const $hobbit = $("<li>"); //<li>
    $hobbit.text(hobbitName); // <li>hobbitName</li>
    $ul.append($hobbit); // <ul><li>hobbitName</li></ul>
    $hobbit.addClass("hobbit");
  }
  const $article = $("#The-Shire");
  $article.append($ul);

  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  console.log("keepItSecretKeepItSafe");
  // 1. create an empty div with an id of 'the-ring'
  const $div = $("<div>");
  $div.attr("id", "the-ring");
  for (const hobbitElement of $(".hobbit")) {
    const $hobbitElement = $(hobbitElement);
    if ($hobbitElement.text() === "Frodo Baggins") {
      $hobbitElement.append($div);
    }
  }
  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  console.log("Make baddies");
  // 1. display an unordered list of baddies in Mordor
  const $ul = $("<ul>");
  for (const baddiesName of baddies) {
    const $baddie = $("<li>");
    $baddie.text(baddiesName);
    $ul.append($baddie);
    $baddie.addClass("baddy");
    // 2. give each of the baddies a class of "baddy"
    // 3. remember to append them to Mordor
  }
  const $article = $("#Mordor");
  $article.append($ul);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  console.log("Make buddies");
  // 1. create an aside tag and append it to middle-earth below mordor
  const $aside = $("<aside>");
  const $article = $("#middle-earth");
  $($article).append($aside);
  const $ul = $("<ul>");
  for (const buddiesName of buddies) {
    const $buddie = $("<li>");
    $buddie.text(buddiesName);
    $ul.append($buddie);
    $buddie.addClass("buddy");
  }
  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"
  $aside.append($ul);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
  console.log("leave the shire");
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  const $article = $("#The-Shire");

  const children = $article.children();
  for (const child of children) {
    if (child.tagName === "UL") {
      const $rivendell = $("#Rivendell");
      $rivendell.append(child);
    }
  }
};

// hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  console.log("Beautiful Stranger");
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  const buddies = $(".buddy");
  console.log(buddies);
  for (const buddiesName of buddies) {
    const $buddiesName = $(buddiesName);
    if ($buddiesName.text() === "Strider") {
      $buddiesName.text("Aragorn");
    }
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

const forgeTheFellowShip = () => {
  console.log("Forge the fellowship");
  // 1. create a new div with an id 'the-fellowship'
  const $div = $("<div>");
  $div.attr("id", "the-fellowship");
  const $h1 = $("<h1>");
  $h1.text("The Fellowship");
  console.log($h1);
  $("#middle-earth").append($div);
  $div.append($h1);

  const $article = $("#Rivendell");

  const children = $article.children();
  for (const child of children) {
    if (child.tagName === "UL") {
      $div.append(child);
    }
  }

  const $aside = $("aside");
  $aside.attr("id", "Aside");

  const adults = $aside.children();
  for (const adult of adults) {
    if (adult.tagName === "UL") {
      $div.append(adult);
    }
  }

  // 2. add an h1 with the text 'The Fellowship' to this new div
  // 3. append the fellowship to middle-earth
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  console.log("The balrog");
  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  const buddies = $(".buddy");
  console.log(buddies);
  for (const buddiesName of buddies) {
    const $buddiesName = $(buddiesName);
    if ($buddiesName.text() === "Gandalf the Grey") {
      $buddiesName.text("Gandalf the White");
      $buddiesName.addClass("the-white");
    }
  }
  // 2. add a class "the-white" to this element
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  console.log("Horn of Gondor");
  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown!!");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  const buddies = $(".buddy");
  console.log(buddies);
  for (const buddiesName of buddies) {
    const $buddiesName = $(buddiesName);
    if ($buddiesName.text() === "Boromir") {
      $buddiesName.addClass("boromir-died");
    }
  }
  const baddies = $(".baddy");
  for (const baddiesName of baddies) {
    const $baddiesName = $(baddiesName);
    if ($baddiesName.text() === "The Uruk-hai") {
      $baddiesName.remove();
    }
  }
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  console.log("It's dangerous to go alone");
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const hobbits = $(".hobbit");
  const $article = $("#Mordor");
  for (const hobbitsName of hobbits) {
    const $hobbitsName = $(hobbitsName);
    console.log($hobbitsName.text());
    if (
      $hobbitsName.text() === "Frodo Baggins" ||
      $hobbitsName.text() === "Samwise 'Sam' Gamgee"
    ) {
      console.log($hobbitsName.text());
      $article.append($hobbitsName);
    }
  }
  const $div = $("<div>");
  $div.attr("id", "mount-doom");
  $article.append($div);

  // 2. add a div with an id of 'mount-doom' to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  console.log("We wants it");
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $article = $("#Mordor");
  const $div = $("<div>");
  $div.attr("id", "gollum");
  $article.append($div);
  $div.append($("#the-ring"));
  $article.append($div);
  const $mtDoom = $("#mount-doom");
  $mtDoom.append($div);
  // 2. Move the ring from Frodo and give it to Gollum
  // 3. Move Gollum into Mount Doom
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  console.log("There and back again");
  // 1. remove Gollum and the Ring from the DOM
  const $div = $("#gollum");
  $div.remove();
  // 2. remove all the baddies from the DOM
  const baddies = $(".baddy");
  baddies.remove();
  // 3. Move all the hobbits back to the shire
  const $article = $("#The-Shire");
  $article.append($(".hobbit"));
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {
  $("#1").on("click", makeMiddleEarth);
  $("#2").on("click", makeHobbits);
  $("#3").on("click", keepItSecretKeepItSafe);
  $("#4").on("click", makeBaddies);
  $("#5").on("click", makeBuddies);
  $("#6").on("click", leaveTheShire);
  $("#7").on("click", beautifulStranger);
  $("#8").on("click", forgeTheFellowShip);
  $("#9").on("click", theBalrog);
  $("#10").on("click", hornOfGondor);
  $("#11").on("click", itsDangerousToGoAlone);
  $("#12").on("click", weWantsIt);
  $("#13").on("click", thereAndBackAgain);
  $("#14").on("click", () => {
    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBaddies();
    makeBuddies();
    leaveTheShire();
    beautifulStranger();
    forgeTheFellowShip();
    theBalrog();
    hornOfGondor();
    itsDangerousToGoAlone();
    weWantsIt();
    thereAndBackAgain();
  });
});
