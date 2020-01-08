const kata = require('../kata.js')

test('keys returns own property keys for an object', () => {
  const dracula = {
    name: 'Count Dracula',
    email: 'dracula@hotmail.com',
    password: '12345',
    country: 'Transylvania'
  }
  const expected = ['name', 'email', 'password', 'country']

  const actual = kata.keys(dracula)

  expect(actual).toEqual(expected)
})
