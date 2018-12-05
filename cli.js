const stdin = process.stdin;
const stdout = process.stdout;
const primeNumbers = require('./prime-numbers');

const PROMPT = 'Please enter a number: > ';
stdout.write(PROMPT);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', data => {
  const mathY = primeNumbers.pFactor(parseInt(data));
  stdout.write(`The prime factors of your number are: [${mathY}]\n`);
  stdout.write(PROMPT);
});

process.on('SIGINT', () => {
  stdout.write('\n\nBye!\n');
  process.exit();
});
