const assert = require('assert');
const romanNumerals = require('./romannumerals.js');

describe('Convert arabic numbers to roman.', () => {
  it('Should convert 1 to I', () => {
    const expected = 'I';
    const test = romanNumerals.convert(1);
    assert.equal(test, expected);
  });
  
  it('Should convert 5 to V', () => {
    const expected = 'V';
    const test = romanNumerals.convert(5);
    assert.equal(test, expected);
  });
 
  it('Should convert 10 to X', () => {
    const expected = 'X';
    const test = romanNumerals.convert(10);
    assert.equal(test, expected);
  });

  it('Should convert 43 to XLIII', () => {
    const expected = 'XLIII';
    const test = romanNumerals.convert(43);
    assert.equal(test, expected);
  });

  it('Should convert 50 to L', () => {
    const expected = 'L';
    const test = romanNumerals.convert(50);
    assert.equal(test, expected);
  });

  it('Should convert 100 to C', () => {
    const expected = 'C';
    const test = romanNumerals.convert(100);
    assert.equal(test, expected);
  });

  it('Should convert 500 to D', () => {
    const expected = 'D';
    const test = romanNumerals.convert(500);
    assert.equal(test, expected);
  });

  it('Should convert 1000 to M', () => {
    const expected = 'M';
    const test = romanNumerals.convert(1000);
    assert.equal(test, expected);
  });
});