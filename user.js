// user.js

// Import required modules
const mongoose = require('mongoose');
const db = require('./db');

// Define user schema for MongoDB
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  online: Boolean,
});

// Define message schema for MongoDB
const MessageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

// Create models based on schemas
const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', MessageSchema);

// Function to handle user login
async function login(rl) {
  console.log('Login Page');

  // Get username and password from user input
  const username = await askQuestion('Enter your username: ', rl);
  const password = await askQuestion('Enter your password: ', rl);

  // Find user in the database
  const user = await User.findOne({ username, password });

  if (user) {
    // Update user status to online
    user.online = true;
    await user.save();
    console.log(`Welcome, ${user.username}!`);
    await showUserList(rl, user);
  } else {
    console.log('Invalid username or password. Please try again.');
  }
}

// Function to handle user registration
async function register(rl) {
  console.log('Register Page');

  // Get new username, password, and email from user input
  const username = await askQuestion('Enter a new username: ', rl);
  const password = await askQuestion('Enter a new password: ', rl);
  const email = await askQuestion('Enter your email: ', rl);

  // Check if username or email already exists
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) {
    console.log('Username or email already exists. Please choose different credentials.');
  } else {
    // Create a new user and save to the database
    const newUser = new User({ username, password, email, online: false });
    await newUser.save();
    console.log('Registration successful. You can now log in.');
    await login(rl);
  }
}

// Function to display the list of users
async function showUserList(rl, currentUser) {
  console.log('User List Page');

  // Fetch all users from the database and sort them alphabetically
  const users = await User.find().sort({ username: 'asc' });

  if (users.length === 0) {
    console.log('No users found.');
  } else {
    console.log('User List:');
    users.forEach((user) => {
      console.log(`${user.username} - ${user.online ? 'Online' : 'Offline'}`);
    });
  }

  // Move to the direct message section
  await directMessage(rl, currentUser);
}

// Function to initiate direct messaging
async function directMessage(rl, currentUser) {
  console.log('Direct Message Page');

  // Prompt user to type the username or "exit" to go back to the main menu
  const choice = await askQuestion('Type the username for direct messaging or type "exit" to go back to the main menu: ', rl);

  if (choice.toLowerCase() === 'exit') {
    // Update user status to offline and go back to the main menu
    currentUser.online = false;
    await currentUser.save();
    await showUserList(rl, currentUser);
    return;
  }

  // Find the other user in the database
  const otherUser = await User.findOne({ username: choice });

  if (otherUser) {
    console.log(`Direct messaging with ${otherUser.username}.`);
    await directMessageWindow(rl, currentUser, otherUser);
  } else {
    console.log('User not found. Please try again.');
    await directMessage(rl, currentUser);
  }
}

// Function to manage the direct messaging window
async function directMessageWindow(rl, currentUser, otherUser) {
  console.log(`Direct messaging with ${otherUser.username}. Type 'exit' to go back to the main menu.`);

  // Loop for sending and receiving messages
  while (true) {
    // Prompt user to type a message or "exit"
    const messageContent = await askQuestion('Type your message or type "exit": ', rl);

    if (messageContent.toLowerCase() === 'exit') {
      break; // Exit the loop if the user types "exit"
    }

    // Create a new message and save it to the database
    const newMessage = new Message({
      sender: currentUser.username,
      receiver: otherUser.username,
      content: messageContent,
    });

    await newMessage.save();
    console.log(`${currentUser.username}> ${messageContent}`);
  }

  // Loop back to the direct messaging section
  await directMessage(rl, currentUser);
}

// Function to ask a question and wait for user input
async function askQuestion(question, rl) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Export relevant functions and the quit function
module.exports = { login, register, showUserList, directMessage, directMessageWindow };

// Function to quit the application
function quit() {
  console.log('Goodbye!');
  process.exit(0);
}

module.exports.quit = quit;
