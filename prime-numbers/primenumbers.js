function pFactor(x) {

  const primeArray = [];
  const squareOfX = Math.sqrt(x);

  if (Number.isInteger(x) && x > 0) {
    while (x % 2 === 0) {
      primeArray.push(2);
      x = x / 2;
    }

    for (let i = 3; i <= squareOfX; i++) {
      while (x % i === 0) {
        primeArray.push(i);
        x = x / i;
      }
    }

    if (x > 2) {
      primeArray.push(x);
    }

    return primeArray;

  } else {
    return 'Error! Not a positive integer!';
  }
}


module.exports.pFactor = pFactor;
