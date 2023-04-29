const sum = require('../utils/suma')
test("sumar 1+2 igual a 3", () =>{
    expect(sum(1,2)).toBe(3)
})

describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${1}       | ${2}        | ${3}
      ${-1}      | ${5}        | ${4}
      ${10.5}    | ${2}        | ${12.5}      
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });