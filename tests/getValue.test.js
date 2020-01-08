const kata = require('../kata.js')

test('getValue gets values from objects', () => {
  const expected = 21
  const actual = kata.getValue({ age: 21 }, 'age')
  expect(actual).toBe(expected)
})
