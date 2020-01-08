const kata = require('../kata.js')

test('deleteItemAtIndex deletes an element from the array', () => {
  const names = [ 'Aroha', 'Bob', 'Celia', 'Eleanor' ]
  const removed = 'Celia'

  const actual = kata.deleteItemAtIndex(names, 2)

  expect(actual).not.toContain(removed)
})

test('deleteItem deletes ALL instances of item from the array', () => {
  const names = [ 'Aroha', 'Bob', 'Celia', 'Eleanor', 'Bob', 'Bob' ]
  const removed = 'Bob'

  const actual = kata.deleteItem(names, removed)

  expect(actual).not.toContain(removed)
})

