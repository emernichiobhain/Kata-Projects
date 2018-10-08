const { stdin } = process.stdin;
const { stdout } = process.stdout;
const vowelGame = require('./vowel-game.js');

const PROMPT = 'Please enter two words separated by a space: ';
stdout.write(PROMPT);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', (x) => {
  const input = x.split(' ');
  const result = vowelGame.transform(input[0], input[1]);
  stdout.write(`Your topsy turvy result is: ${result[0]}, ${result[1]}!\n`);
  stdout.write(PROMPT);
});

process.on('SIGINT', () => {
  stdout.write('\n\nThank You! Come Again!\n');
  process.exit();
});
