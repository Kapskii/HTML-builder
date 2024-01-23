const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'textOutput.txt');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function writeToFile(text) {
  fs.appendFile(filePath, text + '\n', (err) => {
    if (err) {
      console.error(err);
    }
  });
}

rl.setPrompt('Enter text or (press Ctrl + C or type "exit" to quit): ');
rl.prompt();

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('Bye - Bye!');
    rl.close();
  } else {
    writeToFile(input);
    rl.prompt();
  }
});

rl.on('SIGINT', () => {
  console.log('Bye - Bye!');
  rl.close();
});
