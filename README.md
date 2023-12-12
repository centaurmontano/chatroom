# Registration and Login System

A simple full-stack web application for user registration and login using Node.js and MongoDB.

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" width="100" height="100"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB Logo" width="100" height="100"/>

## Table of Contents

- [Required Material and Installation](#required-material-and-installation)
- [Recommended Code Editors](#recommended-code-editors)
- [Specifications](#specifications)
- [Key Functions](#key-functions)
  - [Register](#register)
  - [Login](#login)
- [MongoDB](#mongodb)
- [Detailed Guideline/Client Requirements](#detailed-guidelineclient-requirements)
- [Setting Up and Running the Project](#setting-up-and-running-the-project)
- [How to Install MongoDB and Connect MongoDB Compass to Localhost](#how-to-install-mongodb-and-connect-mongodb-compass-to-localhost)
- [License](#license)

## Required Material and Installation

To run this project, you will need the following:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)

## Recommended Code Editors

While you can use any code editor of your choice, the following editors are commonly used and supported for this project:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [Atom](https://atom.io/)

## Specifications

This application allows users to register and login to a website. It is implemented using Node.js and MongoDB.

## Key Functions

### Register

- Allow users to register on the website.
- Display a form to capture users' information.
- Users enter a username and password.
- Login credentials are saved to the MongoDB Database.

### Login

- Allow users to log in to the website.
- Display a form for users to enter their credentials.
- Users enter their username and password.
- Login credentials are matched with the ones saved in MongoDB.
- Users will receive a message indicating whether the login was successful or not.

## MongoDB

The project uses MongoDB as the database to store user data.

## Detailed Guideline/Client Requirements

- Users can choose either to register or login on the main page.
- On the register page, users enter their username and password and click the submit button to save their information to the database.
- Registration information is saved to the database.
- On the login page, users enter their username and password and click submit to log in.
- If the login credentials are correct, users receive a login successful message.
- If the login credentials are incorrect, users receive a login failure message.
- Links to the main page, login page, and register page are available on different pages.

## Setting Up and Running the Project

Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/centaurmontano/register-login-system.git

2. Install dependencies:
cd your-repository
npm install

3. Start the application
npm start 

## How to Install MongoDB and Connect MongoDB Compass to Localhost

Follow these steps to install MongoDB and connect MongoDB Compass to localhost:

1. **Download and Install MongoDB Community Server:**
   - Visit the [MongoDB Community Server download page](https://www.mongodb.com/try/download/community) and download the appropriate version for your operating system.
   - Follow the installation instructions provided for your OS.

2. **Open Command Prompt (CMD):**
   - Open the Command Prompt on your computer.

3. **Navigate to MongoDB Bin Directory:**
   - Copy the path of the bin folder in the MongoDB installation directory.
   - Use the `cd` command to navigate to the bin directory in the Command Prompt. For example:
     ```bash
     cd C:\Program Files\MongoDB\Server\{version}\bin
     ```

4. **Start MongoDB Server:**
   - In the Command Prompt, type the following command to start the MongoDB server:
     ```bash
     mongod
     ```

5. **Open MongoDB Compass:**
   - Launch MongoDB Compass on your computer.

6. **Connect to Localhost:**
   - In MongoDB Compass, you should see the Connect screen.
   - For the "Hostname" field, enter `localhost`.
   - For the "Port" field, enter `27017`.
   - Click the "Connect" button.

7. **Verify Connection:**
   - MongoDB Compass should connect to the local MongoDB server, and you will see the admin, config, and local databases.
   - The connection string should be similar to `mongodb://localhost:27017`.

Now you have successfully installed MongoDB and connected MongoDB Compass to localhost. You can use this local MongoDB server for your project.

Make sure to customize the instructions based on your specific needs and provide any additional information that might be relevant for your users.

