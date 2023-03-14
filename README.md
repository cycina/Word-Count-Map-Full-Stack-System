# Word-Count-Map-Full-Stack-System

This repository contains a full-stack system with a Node.js backend and a React frontend that cyclically retrieves blog posts from the https://www.thekey.academy site, processes them, and creates a simple word count map. The word count map is then sent via WebSockets to the frontend, where it is displayed. The frontend automatically updates itself when new data is available.

## Backend
The backend is implemented in Node.js and retrieves blog posts from the https://www.thekey.academy site every few seconds. These blog posts are then processed to create a simple word count map that is sent to the frontend via WebSocket.

### Usage
To run the backend, perform the following steps:

1. Open your computer's terminal application and navigate to the **backend** directory of the repository.
2. Install all the required dependencies by running the **npm install** command.
3. Start the server by running the **npm start** command.
4. The server is started on port 4000.

### Testing
The backend application includes tests to ensure the application is working as expected. To run the tests, use the following command: **npm test**

## Frontend
The frontend is implemented in React and displays the received word count maps. It updates automatically when new data is available.

### Usage
To run the frontend, perform the following steps:

1. Open your computer's terminal application and navigate to the **frontend** directory of the repository.
2. Install all the required dependencies by running the **npm install** command.
3. Start the application by running the npm start command.
4. The application is started on port 3000.
