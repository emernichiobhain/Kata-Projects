const assert = require('assert');
const vowelGame = require('./vowel-game.js');

describe('Vowel-Game Function Tests', () => {

  test('Should accept empty strings', () => {
    assert.deepEqual(vowelGame.transform('', ''), ['', '']);
  });

  test('Should return lowercase items', () => {
    assert.deepEqual(vowelGame.transform('UpperCase', 'UpperCase'), ['uppercase', 'uppercase']);
  });

  test('Should return an array of two items', () => {
    assert.deepEqual(vowelGame.transform('foo', 'bar'), ['for', 'bao']);
  });

  test('Should split and mix words with vowels', () => {
    assert.deepEqual(vowelGame.transform('towel', 'car'), ['tor', 'cawel']);
    assert.deepEqual(vowelGame.transform('apple', 'melon'), ['alon', 'mepple']);
    assert.deepEqual(vowelGame.transform('black', 'white'), ['blate', 'whick']);
  });

  test('Should not split and mix words without vowels', () => {
    assert.deepEqual(vowelGame.transform('mms', 'sms'), ['mms', 'sms']);
    assert.deepEqual(vowelGame.transform('mom', 'txt'), ['mom', 'txt']);
  });

  test('Should reject spaces or special characters', () => {
    expect(() => vowelGame.transform('&€=', '%#*')).toThrow(new Error);
  });
});
