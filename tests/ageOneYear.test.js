const kata = require('../kata.js')

test('ageOneYear adds 1 year to the age property of an object', () => {
  const mickey = {
    name: 'Mickey Mouse',
    age: 64,
    email: 'mickey@disney.com'
  }

  const result = kata.ageOneYear(mickey)

  expect(result.age).toBe(65)
  expect(result).not.toBe(mickey)
})

