const isUpperCase = require('../utils/mayuscula')
/*test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO')
    expect(result).toBe(true)
})*/
    describe('detectar si palabra es mayuscula', () => {
        test.each`
          sentence                | expectedResult
          ${'HELLO, HOW ARE YOU'} | ${true}
          ${'ok bye'}             | ${false}
          ${'Hola, que tal'}      | ${false}     
        `('$sentence should return $expectedResult', ({sentence, expectedResult}) => {
          expect(isUpperCase(sentence)).toBe(expectedResult)
        })
      })