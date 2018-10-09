function transform(x, y) {
  if (x === '' || y === '') {
    return [x, y];
  } else if ((/[a-z]/i).test(x) === false || (/[a-z]/i).test(y) === false) {
    throw new Error('Invalid input!');
  } else if ((/[aeiou]/i).test(x) === false || (/[aeiou]/i).test(y) === false) {
    return [x, y];
  } else {
    const vowel = s => s.split(/([aeiou].*)/i);
    const headX = vowel(x)[0] + vowel(x)[1].slice(0, 1);
    const headY = vowel(y)[0] + vowel(y)[1].slice(0, 1);
    const tailX = vowel(x)[1].slice(1);
    const tailY = vowel(y)[1].slice(1);
    const resultX = headX + tailY;
    const resultY = headY + tailX;
    const final = [resultX.toLowerCase(), resultY.toLowerCase()];
    return final;
  }
}

module.exports.transform = transform;
