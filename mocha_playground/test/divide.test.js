const chai = require('chai');
const expect = chai.expect;
const divide = require('../index');

describe('Divide', () => {
  it('should divide positive integers correctly', () => {
    const a = 8;
    const b = 4;
    const expectedAnswer = 2;
    const actualAnswer = divide(a, b);
    expect(actualAnswer).to.equal(expectedAnswer);
  });

  it('should throw an error when dividing by zero', () => {
    const a = 8;
    const b = 0;
    const fn = () => {
      divide(a,b);
    };
    expect(fn).to.throw();
  });
});