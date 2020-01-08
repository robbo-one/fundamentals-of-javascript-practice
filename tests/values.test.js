const kata = require('../kata.js')

test('values returns own values for an object', () => {
  const dracula = {
    name: 'Count Dracula',
    email: 'dracula@hotmail.com',
    password: '12345',
    country: 'Transylvania'
  }
  const expected = [
    'Count Dracula',
    'dracula@hotmail.com',
    '12345',
    'Transylvania'
  ]

  const actual = kata.values(dracula)

  expect(actual).toEqual(expected)
})

