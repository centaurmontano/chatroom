// index.js

const readline = require('readline');
const { login, register, showUserList, directMessage, directMessageWindow } = require('./user');
const { displayLogo } = require('./userlist');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display logo and main menu
displayLogo();
mainMenu();

function mainMenu() {
  console.log('YourAppName 1) Login 2) Register 3) Direct Message 4) Quit');
  rl.question('UserCommand > ', async (answer) => {
    switch (answer) {
      case '1':
        await login(rl);
        break;
      case '2':
        await register(rl);
        break;
      case '3':
        await directMessage(rl);
        break;
      case '4':
        quit();
        break;
      default:
        console.log('Invalid command. Please try again.');
        mainMenu();
    }
  });
}

function quit() {
  console.log('Goodbye!');
  rl.close();
}

// Export the readline interface for other modules to use if needed
module.exports.rl = rl;
