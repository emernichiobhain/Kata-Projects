const assert = require('assert');
const primeNumbers = require('./primenumbers');

describe('Prime numbers', () => {

  it('Should return [] if 1', () => {
    const expected = [];
    const test = primeNumbers.pFactor(1);
    assert.deepEqual(test, expected);
  });

  it('Should return 2 if 2', () => {
    const expected = [2];
    const test = primeNumbers.pFactor(2);
    assert.deepEqual(test, expected);
  });

  it('Should return 3 if 3', () => {
    const expected = [3];
    const test = primeNumbers.pFactor(3);
    assert.deepEqual(test, expected);
  });

  it('Should return an array of four twos if number is 16', () => {
    const expected = [2,2,2,2];
    const test = primeNumbers.pFactor(16);
    assert.deepEqual(test, expected);
  });

  it('Should return [2, 3] if number is 6', () => {
    const expected = [2,3];
    const test = primeNumbers.pFactor(6);
    assert.deepEqual(test, expected);
  });

  it('Should return [2, 3, 3, 7] if number is 126', () => {
    const expected = [2,3,3,7];
    const test = primeNumbers.pFactor(126);
    assert.deepEqual(test, expected);
  });

  it('Should return [11,233] if number is 2563', () => {
    const expected = [11, 233];
    const test = primeNumbers.pFactor(2563);
    assert.deepEqual(test, expected);
  });

  it('Should return an error message if x is a string', () => {
    const expected = 'Error! Not a positive integer!';
    const test = primeNumbers.pFactor('korv');
    assert.equal(test, expected);
  });

  it('Should return an error message if x is a negative number', () => {
    const expected = 'Error! Not a positive integer!';
    const test = primeNumbers.pFactor(-5);
    assert.equal(test, expected);
  });

  it('Should return an error message if x is a decimal number', () => {
    const expected = 'Error! Not a positive integer!';
    const test = primeNumbers.pFactor(5.666);
    assert.equal(test, expected);
  });

});