console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const sec = document.createElement("section"); //creates <section> tag
  // const node = document.createTextNode("This is a new section.") //creates text "This is a new section"
  // sec.appendChild(node) //<section>This is a new section</section>
  // sec.setAttribute("id", "middle-earth");
  sec.id = "middle-earth";

  // 2. use a for loop to iterate over the lands array that does the following:
  for (const land of lands) {
    // 2a. creates an article tag (there should be one for each land when the loop is done)
    const art = document.createElement("article");
    // 2b. gives each  article an `id` tag of the corresponding land name
    // art.setAttribute("id", land);
    art.id = land;
    // 2c. includes an h1 with the name of the land inside each land article
    const h1 = document.createElement("h1"); // creates <h1> tag
    const header = document.createTextNode(land); // creates text 'land'
    h1.appendChild(header); // <h1>land</h1>
    art.appendChild(h1); // <article><h1>land</h1></article>
    //   2d. appends each land to the middle-earth section
    sec.appendChild(art);
    // 3. append the section to the body of the DOM.
    const body = document.getElementsByTagName("body"); // [<body>]
    body[0].appendChild(sec);
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
  const ul = document.createElement("ul");
  const land = document.getElementById("The-Shire");
  land.appendChild(ul);
  for (const hobbit of hobbits) {
    const li = document.createElement("li");
    const liText = document.createTextNode(hobbit);
    li.appendChild(liText);
    ul.appendChild(li);
    // give each hobbit a class of `hobbit`
    // ul.setAttribute("class", `hobbit`)
    li.className = "hobbit";
  }

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const div = document.createElement("div");
  div.id = "the-ring";
  // give the div a class of `'magic-imbued-jewelry'`
  div.className = "magic-imbued-jewelry";
  // add the ring as a child of `Frodo`
  const arrayOfHobbits = document.getElementsByClassName("hobbit"); //[<li>Frodo</li>, <li>sam</li>, <li>firworks guy 1</li>, <li>fireworks guy 2</li>]
  for (const hobbit of arrayOfHobbits) {
    if (hobbit.innerHTML === "Frodo Baggins") {
      hobbit.appendChild(div);
    }
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor

  const ulBaddies = document.createElement("ul");
  const landOfBaddies = document.getElementById("Mordor");
  landOfBaddies.appendChild(ulBaddies);
  for (const baddie of baddies) {
    const liBaddies = document.createElement("li");
    const liTextBaddies = document.createTextNode(baddie);
    liBaddies.appendChild(liTextBaddies);
    ulBaddies.appendChild(liBaddies);
    liBaddies.className = "baddy";
  }
  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");

  // create an `aside` tag
  const aside = document.createElement("aside");
  // put an `unordered list` of the `'buddies'` in the aside
  const ulBuddies = document.createElement("ul");
  aside.appendChild(ulBuddies);
  const landOfBuddies = document.getElementById("Rivendell");
  for (const buddie of buddies) {
    const liBuddies = document.createElement("li");
    const liTextBuddies = document.createTextNode(buddie);
    liBuddies.appendChild(liTextBuddies);
    ulBuddies.appendChild(liBuddies);
    // insert your aside as a child element of `rivendell`
    landOfBuddies.appendChild(aside);
  }
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");
  const landOfBuddies = document.getElementById("Rivendell");
  const land = document.getElementById("The-Shire");
  landOfBuddies.appendChild(land.lastChild);
  // assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`
  const landOfBuddies = document.getElementById("Rivendell");
  const rivendellAside = landOfBuddies.childNodes[1];
  const rivendellUl = rivendellAside.firstChild;
  for (const li of rivendellUl.childNodes) {
    if (li.innerHTML === "Strider") {
      li.innerHTML = "Aragorn";
    }
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  const div = document.createElement("div"); // <the-fellowship></the-fellowship>
  div.id = "the-fellowship";
  const landOfBuddies = document.getElementById("Rivendell");
  landOfBuddies.append(div);

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`

  const ulOfHobbits = landOfBuddies.childNodes[2];
  const theHobbits = ulOfHobbits.childNodes;

  while (theHobbits.length > 0) {
    div.append(theHobbits[0]);
  }

  const asideOfBuddies = landOfBuddies.childNodes[1];
  const ulOfBuddies = asideOfBuddies.firstChild;
  const theBuddies = ulOfBuddies.childNodes;

  while (theBuddies.length > 0) {
    div.append(theBuddies[0]);
  }
  alert("The hobbits and the buddies have joined my party!");

  // after each character is added make an alert that they // have joined your party

  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`
  // apply the following style to the element, make the // background 'white', add a grey border

  const landOfBuddies = document.getElementById("the-fellowship");
  const fellowshipLi = landOfBuddies.childNodes[4];

  // for (const li of gandalfTheGrey.childNodes) {
  if (fellowshipLi.innerHTML === "Gandalf the Grey") {
    fellowshipLi.innerHTML = "Gandalf the White";
    fellowshipLi.style.backgroundColor = "white";
    fellowshipLi.style.border = "1px solid grey";
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown!!");
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  const landOfBuddies = document.getElementById("the-fellowship");
  if (landOfBuddies.hasChildNodes()) {
    landOfBuddies.removeChild(landOfBuddies.lastChild);
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  const landOfBuddies = document.getElementById("the-fellowship");
  const landOfBaddies = document.getElementById("Mordor");
  landOfBaddies.appendChild(landOfBuddies.firstChild);
  landOfBaddies.appendChild(landOfBuddies.firstChild);
  // add a div with an id of `'mount-doom'` to `Mordor`
  const div = document.createElement("div");
  div.id = "mount-doom";
  landOfBaddies.append(div);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  const landOfBaddies = document.getElementById("Mordor");
  const div = document.createElement("div");
  div.id = "gollum";
  landOfBaddies.append(div);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  const theRing = document.getElementById("the-ring");
  div.append(theRing);
  // Move Gollum into Mount Doom
  const mtDoom = document.getElementById("mount-doom");
  mtDoom.append(div);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  const mtDoom = document.getElementById("mount-doom");
  if (mtDoom.hasChildNodes()) {
    mtDoom.removeChild(mtDoom.firstChild);
  }

  // Move all the `hobbits` back to `the shire`
  const landOfBaddies = document.getElementById("Mordor");
  const landOfHobbits = document.getElementById("The-Shire");

  const childNodesOfMordor = landOfBaddies.childNodes;
  const firstHobbit = childNodesOfMordor[2];
  const secondHobbit = childNodesOfMordor[3];
  landOfHobbits.append(firstHobbit);
  landOfHobbits.append(secondHobbit);

  const theFellowShip = document.getElementById("the-fellowship");
  const childNodesOfTheFellowship = theFellowShip.childNodes;
  const thirdHobbit = childNodesOfTheFellowship[0];
  const fourthHobbit = childNodesOfTheFellowship[1];
  landOfHobbits.append(thirdHobbit);
  landOfHobbits.append(fourthHobbit);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById("chapter-1").addEventListener("click", makeMiddleEarth);
document.getElementById("chapter-2").addEventListener("click", makeHobbits);
document
  .getElementById("chapter-3")
  .addEventListener("click", keepItSecretKeepItSafe);
document.getElementById("chapter-4").addEventListener("click", makeBaddies);
document.getElementById("chapter-5").addEventListener("click", makeBuddies);
document.getElementById("chapter-6").addEventListener("click", leaveTheShire);
document
  .getElementById("chapter-7")
  .addEventListener("click", beautifulStranger);
document
  .getElementById("chapter-8")
  .addEventListener("click", forgeTheFellowShip);
document.getElementById("chapter-9").addEventListener("click", theBalrog);
document.getElementById("chapter-10").addEventListener("click", hornOfGondor);
document
  .getElementById("chapter-11")
  .addEventListener("click", itsDangerousToGoAlone);
document.getElementById("chapter-12").addEventListener("click", weWantsIt);
document
  .getElementById("chapter-13")
  .addEventListener("click", thereAndBackAgain);
document.getElementById("all-chapters").addEventListener("click", () => {
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
