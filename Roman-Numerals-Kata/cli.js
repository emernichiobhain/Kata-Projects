const stdin = process.stdin;
const stdout = process.stdout;
const romanNumerals = require('./roman-numerals');

const PROMPT = 'Please enter a number: > ';
stdout.write(PROMPT);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', data => {
  const roman = romanNumerals.convert(parseInt(data));
  stdout.write(`The roman numeral equivalent of your number is: ${roman}\n`);
  stdout.write(PROMPT);
});

process.on('SIGINT', () => {
  stdout.write('\n\nBye!\n');
  process.exit();
});