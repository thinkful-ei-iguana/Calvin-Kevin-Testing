const chai = require("chai");
const expect = chai.expect;
const sort = require("../sort");


describe('sort', () => {
    it('sorts integers in ascending order', () => {
    const arrayNumbers = [0, 4, 7, 2, 19, 5, 14]
    const arraySorted = [0, 2, 4, 5, 7, 14, 19]
    const sortArray = () => {
        sort(arrayNumbers)
    }
    expect(sortArray).to.deep.equal(arraySorted);
