const { assert } = require('chai');
const { double } = require('../calculator');

const value = 2;

describe('Calculator', () => {
  it(`Should return the double of ${value}`, () => {
    const result = double(value);
    assert.isNumber(result, 'Not a number!');
    assert.equal(result, 4, 'The result does not match!');
  });
});
