const kata = require('../kata.js')

test('addName adds a name property', () => {
  const name = 'Matthieu Ricard'
  const obj = {
    address: '123 Happy Place'
  }
  const expected = {
    name: name,
    address: '123 Happy Place'
  }

  const actual = kata.addName(obj, name)

  expect(actual).not.toBe(obj)
  expect(actual).toEqual(expected)
})

