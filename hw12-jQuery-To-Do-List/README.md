[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# jQuery To-Do List

You will build a To-Do list jQuery app with two columns: one for **`things to do`**, and another for **`things that are done`**.

![todo](https://i.imgur.com/usMkA4g.png)

## User Stories
Your user should be able to:

* Enter a 'todo' item in the input box, and click the 'add' button to have the todo item render in the **`things to do`** column.

* Click on a button within the to-do-item to move that item over to the **`things that are done`** column.

* Click that same button, after it's been moved to **`things that are done`**, to remove the todo item from the page.

## Commits

- Make sure to commit after each block of code that you create. Give an appropriate comment.

## Starter code
Use the starter code and fill in the javascript file `app.js`.

We've provided you with some simple styling to make it easier for you to get started.


**NOTE**: if you want a challenge, feel free to start from scratch! :wink:


## PART ONE

1. Inspect the started code (`index.html` and `style.css`) make a list of the ids, classes, and elements that are styled in the css, so you can match it and use the styles

2. Complete this assignment using jQuery

3. Include any code that affects the DOM inside a **`document.ready funtction`**. jQuery has a shorthand for that.

```js
$(() => {

	// DOM stuff

})
```
Remember the general flow of what is happening. The user makes an action, you run some code in order to process this action, the results of the action are rendered to the page, and then you wait until another action takes place.

## PART TWO

When the user clicks the `add` button, the input box value should be added to their **`things to do`** list.

## PART THREE
When the user clicks the `add` button, the input should display nicely rather than just text that keeps joining on the same line.

* Hint: consider adding the new information into an array of to-dos and display all of the items in that array.

**The user should be able to see all of the todos that they have created.**

## PART FOUR

* When you create the todo item, add a button that says 'COMPLETED'.

* Add a event listener to the 'COMPLETED' button.

* When the button 'COMPLETED' is clicked, set the background color of the to-do-item to `#ED6495`

<!-- > * Hints: `$(event.currentTarget)`, `.parent()` -->

* The user should be able to click the button 'COMPLETED' on a todo item and have it move to the **`things that are done`** column.


## PART FIVE - Delete

The user should be able to delete a to-do item from the completed list.

* When the to-do-item moves to the **`things that are done`** column, the text of the 'COMPLETED' button should change to 'REMOVE'

* When the 'REMOVE' button is clicked, the target to-do-item should be removed from the DOM 

> hint: since the todo item already have an event listener, you could just check the value of the button you are clicking and depending on the value you can run different piece of code... looks like and simple **`if else`** statement would help you, don't you think? :wink:


# Hungry for More

## Local Storage

The browser has something called [local storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage). This allows us to cache data in the browser. Using local storage, make this application remember the to-dos that have already been entered in, even if the page is closed.

## Draggable/Droppable

Look into jQuery's supplemental libraries like [Draggable and/or Droppable](https://jqueryui.com/droppable/)

## Vanilla Javascript
Create another file structure and go over all the steps, but this time use only vanilla javascript.