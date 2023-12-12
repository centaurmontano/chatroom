# Console Social Network Application

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" width="100" height="100"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB Logo" width="100" height="100"/>

A console-based social network application developed using Node.js and MongoDB. Users can send real-time messages to each other, and the server supports at least 5 users conversing simultaneously. The server securely saves user credentials for future logins.
s and homework time.

## Table of Contents

- [Project Overview](#project-overview)
  - [Objectives](#objectives)
  - [Time Required](#time-required)
  - [Required Material](#required-material)
- [Specifications](#specifications)
  - [Client-side Application](#client-side-application)
    - [Main Page](#1-main-page)
    - [Login](#2-login)
    - [Register](#3-register)
    - [User List (After Login)](#4-user-list-after-login)
    - [Direct Message](#5-direct-message)
    - [Quit](#6-quit)
  - [Server-side Application](#server-side-application)
  - [Key Functions](#key-functions)
    - [Client-side Application](#client-side-application-1)
    - [Server-side Application](#server-side-application-1)
    - [MongoDB](#mongodb)
- [Copyright](#copyright)

## Project Overview

### Objectives

- Interpret imaginary client’s requirements.
- Design a solution based on requirements and specifications.
- Implement web application architecture.
- Develop a web application, web server, and a database.
- Utilize debugging tools and error-handling techniques.
- Validate the solution with test data from multiple credentials.
- Integrate acquired knowledge.
- Demonstrate understanding of MongoDB design.
- Apply various program flow constructs.

### Required Material

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Specifications

### Client-side Application

#### 1. Main Page:

- Presents a main menu with choices: Login, Register, and Quit.
- User command format: `YourAppName 1) Login 2) Register 3) Quit > UserCommand`

#### 2. Login:

- User types 1 to enter the login page.
- Prompts for username and password.
- Sends connection request with credentials.

#### 3. Register:

- User types 2 to enter the register page.
- Prompts for new username, password, and email.
- Checks for existing username or email.
- Successful registration prompts user to log in.

#### 4. User List (After Login):

- Displays a list of users in alphabetical order.
- Users can check online and offline status.
- Direct message option to communicate with other users.
- Option to quit.

#### 5. Direct Message:

- User types 'm' to enter direct message mode.
- Prompts to type the username of the other user.
- If correct, UI changes to messaging window.
- Type 'GoBackToMainMenu' to return to the main menu.

#### 6. Quit:

- Quits the application.

### Server-side Application

1. All data saved in MongoDB.
2. Handles login requests, checks user credentials, and sends login status.
3. Handles register requests, checks for existing username or email, and sends registration result.

### Key Functions

#### Client-side Application:

- User registration
- User login
- User search
- User messaging

#### Server-side Application:

- Save user credentials in the database for registration
- Search user credentials in the database for login
- Search username in the database for chatting

#### MongoDB:

- Save user credentials in the DB.
- Retrieve user information from the DB.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

