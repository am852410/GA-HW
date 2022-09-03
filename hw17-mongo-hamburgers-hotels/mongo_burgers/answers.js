// create 5 burgers (at least 3 should be beef)

db.burger.insert(
...   {
...     meat: 'beef',
...     cheese: false,
...     toppings: ['ketchup' ,'onions' ,'pickles']
...   }
...   )
Inserted 1 document(s) in 2ms
WriteResult({
  "nInserted": 1
})

db.burger.insert(
...   {
...     meat: 'beef',
...     cheese: false,
...     toppings: ['ketchup' ,'onions' ,'pickles']
...   }
...   )
Inserted 1 document(s) in 2ms
WriteResult({
  "nInserted": 1
})

db.burger.insert(
...   {
...     meat: 'beef',
...     cheese: false,
...     toppings: ['ketchup' ,'onions' ,'pickles']
...   }
...   )
Inserted 1 document(s) in 2ms
WriteResult({
  "nInserted": 1
})

db.burger.insert(
... {
... meat: 'chicken',
... cheese: true,
... toppings: ['guacamole' ,'mango' ,'onions' ,'tabasco']
... }
... )
Inserted 1 document(s) in 2ms
WriteResult({
  "nInserted": 1
})

db.burger.insert(
... {
... meat: 'elk',
... cheese: true,
... toppings: ['worstershire sauce' ,'pickled beets' ,'mushrooms', 'fried green tomatoes']
... }
... )
Inserted 1 document(s) in 1ms
WriteResult({
  "nInserted": 1
})



// find all the burgers

db.burger.find()
{
  "_id": ObjectId("604908cb0e064fdfbeeb68de"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("6049091e0e064fdfbeeb68df"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490ab60e064fdfbeeb68e0"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken",
  "cheese": true,
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ]
}
{
  "_id": ObjectId("60490c210e064fdfbeeb68e2"),
  "meat": "elk",
  "cheese": true,
  "toppings": [
    "worstershire sauce",
    "pickled beets",
    "mushrooms",
    "fried green tomatoes"
  ]
}



// show just the meat of each burger

burgers> db.burger.find({}, { meat: 1 })
{
  "_id": ObjectId("604908cb0e064fdfbeeb68de"),
  "meat": "beef"
}
{
  "_id": ObjectId("6049091e0e064fdfbeeb68df"),
  "meat": "beef"
}
{
  "_id": ObjectId("60490ab60e064fdfbeeb68e0"),
  "meat": "beef"
}
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken"
}
{
  "_id": ObjectId("60490c210e064fdfbeeb68e2"),
  "meat": "elk"
}



// show just the toppings of each burger

burgers> db.burger.find({}, { toppings: 1 })
{
  "_id": ObjectId("604908cb0e064fdfbeeb68de"),
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("6049091e0e064fdfbeeb68df"),
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490ab60e064fdfbeeb68e0"),
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ]
}
{
  "_id": ObjectId("60490c210e064fdfbeeb68e2"),
  "toppings": [
    "worstershire sauce",
    "pickled beets",
    "mushrooms",
    "fried green tomatoes"
  ]
}
Fetched 5 documents in 3ms



// show everything but the cheese

burgers> db.burger.find({}, { meat: 1 , toppings: 1 })
{
  "_id": ObjectId("604908cb0e064fdfbeeb68de"),
  "meat": "beef",
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("6049091e0e064fdfbeeb68df"),
  "meat": "beef",
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490ab60e064fdfbeeb68e0"),
  "meat": "beef",
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken",
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ]
}
{
  "_id": ObjectId("60490c210e064fdfbeeb68e2"),
  "meat": "elk",
  "toppings": [
    "worstershire sauce",
    "pickled beets",
    "mushrooms",
    "fried green tomatoes"
  ]
}
Fetched 5 documents in 5ms



// find all the burgers with beef

burgers> db.burger.find({ meat: "beef" })
{
  "_id": ObjectId("604908cb0e064fdfbeeb68de"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("6049091e0e064fdfbeeb68df"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490ab60e064fdfbeeb68e0"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
Fetched 3 documents in 2ms



// find all the burgers that are not beef

burgers> db.burger.find({meat:{$ne:'beef'}})
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken",
  "cheese": true,
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ]
}
{
  "_id": ObjectId("60490c210e064fdfbeeb68e2"),
  "meat": "elk",
  "cheese": true,
  "toppings": [
    "worstershire sauce",
    "pickled beets",
    "mushrooms",
    "fried green tomatoes"
  ]
}
Fetched 2 documents in 3ms



// find the first burger with cheese

burgers> db.burger.findOne({cheese:{$eq:true}})
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken",
  "cheese": true,
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ]
}



// find one and update the first burger with cheese to have a property of 'double cheese'

burgers> db.burger.findOneAndUpdate( {'cheese': true }, { $rename: { "cheese": "doublecheese" } } )
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken",
  "cheese": true,
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ],
  "doublecheese": true
}

burgers> db.burger.find().pretty()
{
  "_id": ObjectId("604908cb0e064fdfbeeb68de"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("6049091e0e064fdfbeeb68df"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490ab60e064fdfbeeb68e0"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken",
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ],
  "doublecheese": true
}
{
  "_id": ObjectId("60490c210e064fdfbeeb68e2"),
  "meat": "elk",
  "cheese": true,
  "toppings": [
    "worstershire sauce",
    "pickled beets",
    "mushrooms",
    "fried green tomatoes"
  ]
}
Fetched 5 documents in 2ms



// find the burger you updated to have double cheese

db.burger.find({doublecheese:{$eq:true}})
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken",
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ],
  "doublecheese": true
}
Fetched 1 document in 1ms



// find and update all the beef burgers to be 'veggie'

burgers> db.burger.updateMany( {meat: "beef"}, { $set: { meat: "veggie" } } )
{
  "acknowledged": true,
  "matchedCount": 3,
  "modifiedCount": 3
}


burgers> db.burger.find().pretty()
{
  "_id": ObjectId("604908cb0e064fdfbeeb68de"),
  "meat": "veggie",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("6049091e0e064fdfbeeb68df"),
  "meat": "veggie",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490ab60e064fdfbeeb68e0"),
  "meat": "veggie",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken",
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ],
  "cheese": true
}
{
  "_id": ObjectId("60490c210e064fdfbeeb68e2"),
  "meat": "elk",
  "toppings": [
    "worstershire sauce",
    "pickled beets",
    "mushrooms",
    "fried green tomatoes"
  ],
  "doublecheese": true
}
Fetched 5 documents in 2ms



// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

db.burger.findOneAndDelete( {meat: 'veggie' })
{
  "_id": ObjectId("604908cb0e064fdfbeeb68de"),
  "meat": "veggie",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}

burgers> db.burger.find().pretty()
{
  "_id": ObjectId("6049091e0e064fdfbeeb68df"),
  "meat": "veggie",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490ab60e064fdfbeeb68e0"),
  "meat": "veggie",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
{
  "_id": ObjectId("60490b6a0e064fdfbeeb68e1"),
  "meat": "chicken",
  "toppings": [
    "guacamole",
    "mango",
    "onions",
    "tabasco"
  ],
  "cheese": true
}
{
  "_id": ObjectId("60490c210e064fdfbeeb68e2"),
  "meat": "elk",
  "toppings": [
    "worstershire sauce",
    "pickled beets",
    "mushrooms",
    "fried green tomatoes"
  ],
  "doublecheese": true
}
Fetched 4 documents in 14ms



// drop the collection
//Expected Output
//true

burgers> db.burger.drop()
true


// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

burgers> db.dropDatabase()
{
  "dropped": "burgers",
  "ok": 1
}



//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'


// find all the burgers with ketchup (or another topping you used at least once)


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
