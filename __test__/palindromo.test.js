const palindromo = require('../utils/palindromo.js')
/*test ('palindromo de fran', () => {
    const result = palindromo('fran')
    expect(result).toBe('narf')
})*/
describe('palindromo', () => {
    test.each`
      string      | expectedResult    
      ${'kayak'}  | ${'kayak'}
      ${'luna'}   | ${'anul'}
      ${'sol'}    | ${'los'}     
    `('$string should return $expectedResult', ({string, expectedResult}) => {
      expect(palindromo(string)).toBe(expectedResult)
    })
  })