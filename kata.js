/**
 * Objects, keys/properties and values
 */

// getGreeting should return a string containing
// 'Hello ' and the contents of `name`
function getGreeting (name) {
  return "Hello " + name
}

// ageOneYear should return a new object with an `age` property 1 greater
// than the `age` property of `obj`
function ageOneYear (obj) {
  newObj = {
 age : ++obj.age
  }
 return newObj
 
}

// makeObject should return an object that looks like this:
// (but using the arguments passed to the function)
// {
//   key: value
// }
function makeObject (key, value) {
  newObject = {}
  newObject[key] = value
 return newObject
}

// getPropertyValue should return the value of the
// property contained in the `key` of `obj`
function getPropertyValue (obj, key) {
  return obj[key]
}

// addName should return a copy of `obj` with the addition of a `name`
// property that has the value of the `name` argument
// Tip: consider the object literal spread syntax
function addName (obj, name) {
  var newObj = {...obj}
  newObj.name = name
  return newObj
}

// deleteProperty should return a new copy of `obj` without the property name
// that matches the `key` parameter
// Tip: consider JavaScript's `delete` operator
function deleteProperty (obj, key) {
  var newObj = {...obj}
  delete newObj[key]
  return newObj
}

// returnErrorIfFalsy should return a JavaScript Error object with message:
//   'Oh no, an error!'
// if val evaluates to false
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function returnErrorIfFalsy (val) {
  if (val == false) {
    return Error('Oh no, an error!')
  }
}

// keys should return an array of the object's property names (keys)
// For example, given { foo: 1, bar: 2 } it would return ['foo', 'bar']
function getKeys (obj) {
  return Object.keys(obj)
}

// getValues should return an array of the object's own values
// For example, given { foo: 1, bar: 2 } it would return [1, 2]
function getValues (obj) {
  return Object.values(obj)
}

/**
 * Arrays
 */

// makeArrayOfItem should return an array that is `length` long, made up of
// `item`. For example, makeArrayOfItem('foo', 2) would return:
// ['foo', 'foo']
function makeArrayOfItem (item, length) {
  return new Array(length).fill(item)
  
}

// makeArrayOfItems should return an array containing all arguments passed to it
// Tip: consider JavaScript's Rest parameters
function makeArrayOfItems (...args) {
  var arr = args
  return arr
}

// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
// Tip: there is an array function that makes this straightforward
function hasItem (arr, item) {
  return arr.includes(item)
}

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
function getItemAtIndex (arr, idx) {
  return (idx < arr.length-1 ? arr[idx] : new Error())
//   if (idx < arr.length-1){
//     return arr[idx]
// } else { return new Error()
//}
}

// replaceItemAtIndex should return a copy of `arr` with
// the element at `idx` replaced with `item`
// Tip: consider the array literal spread syntax
function replaceItemAtIndex (arr, idx, item) {
  arr.splice(idx, 1, item)
  let arr2 = [...arr]
  return arr2
}

// insertItemAtIndex should return a copy of `arr` with `item` inserted at
// `idx` without overwriting any array values (the array should get longer)
function insertItemAtIndex (arr, item,  idx) {
  arr.splice(idx,0,item)
  let arr2 = [...arr]
  return arr2
}


// deleteItemAtIndex should return a copy of `arr` without
// the element at `idx` (the array should get shorter).
function deleteItemAtIndex (arr, idx) {
  arr.splice(idx,1)
  let arr2 = [...arr]
  return arr2
}

// deleteItem should return an array with every instance of `item` removed
function deleteItem (arr, item) {
  const result = arr.filter( deleted => deleted !== item)
return result
}

// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
// { foo: 1, bar: 2 }
function zipObject (keys, values) {
  let zipped = keys.map(function(a, b) {
    return [a, values[b]];
  });
  object = Object.assign(...zipped.map(([c,d]) => ({[c] : d})))
  return object
}


// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given {foo: 1, bar: 2} it would return
// [['foo', 1], ['bar', 2]]
function unzipObject (obj) {
  return Object.entries(obj)
}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [{a: 1}, {b: 2, c: 3}] and {b: 2}
// it will return:
//   {b: 2, c: 3}
function findOneByProperty (arr, search) {
  // let found = arr.find(obj => {
  //   return obj === search
  // })
  // console.log(found)
  const prop = Object.keys(search)[0]
  return arr.find(item => {
    const hasKey = Object.keys(item).includes(prop)
    return hasKey && item[prop] === search[prop]
  })
}


// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
function findAll (arr, search) {
  const prop = Object.keys(search)[0]
  return arr.filter(item => {
    const hasKey = Object.keys(item).includes(prop)
    return hasKey && item[prop] === search[prop]
  })
}

module.exports = {
  addName,
  ageOneYear,
  deleteItem,
  deleteItemAtIndex,
  deleteProperty,
  getGreeting,
  getItemAtIndex,
  getKeys,
  getPropertyValue,
  getValues,
  findOneByProperty,
  findAll,
  hasItem,
  insertItemAtIndex,
  makeArrayOfItem,
  makeArrayOfItems,
  makeObject,
  replaceItemAtIndex,
  returnErrorIfFalsy,
  unzipObject,
  zipObject
}
