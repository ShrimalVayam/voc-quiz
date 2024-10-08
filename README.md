# Vite + React-TS vocabulary quiz app

 This project is a real-time quiz application built with React and TypeScript. The app also utilizes Vite as the build tool. It demonstrates a dynamic table where new users are added as and when they join the app, creating an engaging and interactive user experience.

## Features
- Active participants table: Displays the currently active participants in the quiz, updating dynamically as new users join.
- Dynamic User Addition: Users can join the quiz through the interface, and their information is dynamically added to the table.
- Notifications: Provides real-time notifications whenever a new user joins, enhancing the interactive experience.
- Responsive UI: The user interface is designed to be responsive, ensuring compatibility across devices and screen sizes.

## Install Dependecies
```
npm install
```

## Start the dev server
```
 npm run dev
```
 The application will be available at `http://localhost:5173`

## Project Structure
- /components: Contains reusable React components, including the main Quiz component that displays the real-time quiz dashboard.
- /utils: Includes utility files such as type definitions (common.type.ts) used throughout the app.
- /api: Mock data and API-related functionality, such as newParticipants.ts.
- /public: Contains static assets like images, icons, and any other public files used in the app.

## Libraries and Tools 
- React: A JavaScript library for building user interfaces, used here for component-based development.
- TypeScript: Provides static typing, improving code quality, refactoring, and overall maintainability.
- Vite: A fast, modern build tool for web projects, offering lightning-fast hot module replacement (HMR).
- Notistack: For displaying visually appealing notifications.

## Development Environment
- Node.js: Version 20.17.0 is required to install dependencies and run the project.
- Vite: Provides a fast development environment and optimized build process.
- ESLint: Linting tool for maintaining code consistency and avoiding bugs.
- Operating System: The app has been developed and tested on Ubuntu 23, but it should work on other OSes as well.

## Note
- This app is intended to demonstrate the front end and does not use an actual back-end. The data is mocked to simulate real-time user additions.

## Actual screenshot of the project 

![Alt text](public/UI_screenshot.png?raw=true "Title")