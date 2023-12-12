# chatroom
Console Social Network: A Node.js and MongoDB-powered console app for real-time messaging. Securely stores user credentials, emphasizing MongoDB design and program flow. Achieve modern business communication needs. ⚙️🚀 #NodeJS #MongoDB

# Console Social Network

## Introduction
This project develops a Node.js and MongoDB-based console social network application enabling real-time messaging among users. The server supports at least 5 users communicating securely.

## Objectives
- Interpret client requirements
- Design a web application architecture
- Implement architecture into a web app, server, and DB
- Use debugging tools and error-handling techniques
- Validate with test data
- Integrate acquired knowledge
- Demonstrate MongoDB design understanding
- Apply various program flow constructs

## Time Required
Approximately 30 hours, including 5 in-class sessions and homework.

## Required Material
- Node.js
- MongoDB

## Specifications
### Client-side Application
#### 1. Main Page:
- Menu: Login, Register, Quit
- User command: 1) Login 2) Register 3) Quit

#### 2. Login:
- Prompt for username and password input
- Connection request sent on input

#### 3. Register:
- Prompt for new username, password, email
- Check for existing username or email
- Successful registration prompts login

#### 4. User Logs In:
- List users alphabetically
- Check online/offline status
- Direct message option
- Quit option

#### 5. Direct Message:
- 'm' input goes to direct message mode
- Type exact username for DM
- UI changes to messaging window
- 'GoBackToMainMenu' to return

#### 6. Quit:
- Exit the application

### Server-side Application:
1. Save data in MongoDB
2. Check user credentials on login request
3. Check email/username for registration

### Key Functions
1. **Client-side Application:**
   - User registration
   - User login
   - User search
   - User messaging

2. **Server-side Application:**
   - Save user credentials for registration
   - Search user credentials for login
   - Search username for chatting

3. **MongoDB:**
   - Save user credentials in the DB
   - Retrieve user information from the DB

For the complete code, see the [GitHub repository](https://github.com/yourusername/console-social-network).
