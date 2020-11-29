const { assert } = require('chai');
const { double } = require('../calculator');

const value = 3;

describe('Calculator', () => {
  it(`Should return the double of ${value}`, () => {
    const result = double(value);
    assert.isNumber(result, 'Not a number!');
    assert.equal(result, 5, 'The result does not match!');
  });
});
